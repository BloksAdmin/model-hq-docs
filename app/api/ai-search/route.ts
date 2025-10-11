import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Map file paths to documentation URLs
function getDocUrlFromPath(filePath: string): string {
  const baseUrl = 'https://model-hq-docs.vercel.app';
  const relativePath = filePath.replace(/\\/g, '/').split('model-hq-markdown-docs/')[1] || '';
  
  // Detailed page-level mappings for all documentation routes
  const exactMappings: Record<string, string> = {
    // Code Documentation
    'model-hq-code-documentation/api-reference/API.md': '/api-reference',
    'model-hq-code-documentation/getting-started-with-SDK/GETTING_STARTED.md': '/getting-started-with-model-hq-sdk',
    'model-hq-code-documentation/hello-world/HELLO_WORD.md': '/hello-world',
    
    // System & Setup
    'systemConfiguration/': '/system-configuration',
    'gettingStarted/': '/getting-started',
    'gettingStarted/README.md': '/getting-started',
    
    // Supported Models
    'supported-models/INTEL_MODELS.md': '/supported-models/intel',
    'supported-models/QUALCOMM_MODELS.md': '/supported-models/qualcomm',
    'models/intel/': '/supported-models/intel',
    'models/qualcomm/': '/supported-models/qualcomm',
    
    // Learning Resources
    'video-tutorials/': '/video-tutorials',
    'blogs-and-partner-solutions/': '/blogs-and-partner-solutions',
    
    // Chat
    'chat/': '/chat',
    'chat/README.md': '/chat',
    'chat/changing-chat-model': '/chat/changing-chat-model',
    'chat/error-handling': '/chat/error-handling',
    
    // Agents
    'agent/': '/agent',
    'agent/README.md': '/agent',
    'agent/SERVICE.md': '/agent/create-new-agent#service-table',
    'agent/create-new-agent': '/agent/create-new-agent',
    'agent/agent-builder-menu': '/agent/agent-builder-menu',
    'agent/edit-agent': '/agent/edit-agent',
    'agent/multi-docs-agent': '/agent/multi-docs-agent',
    'agent/openAI-and-anthropic': '/agent/openAI-and-anthropic',
    
    // Bots
    'bots/': '/bots',
    
    // RAG
    'rag/': '/rag',
    'rag/PARSING.md': '/rag/rag-parsing',
    'rag/rag-parsing': '/rag/rag-parsing',
    'rag/document-parsing-issues': '/rag/document-parsing-issues',
    'rag/error-handling': '/rag/error-handling',
    
    // Models & Testing
    'models/': '/models',
    'test/': '/testing-models',
    
    // Configs & Tools
    'tools/': '/tools',
    'configure/': '/configs',
    
    // Share & Shutdown
    'share/': '/share-your-app',
    'shutdown/': '/shutdown',
    
    // Cookbooks
    'cookbooks/personalized-bot': '/cookbooks/personalized-bot',
    'cookbooks/rag-bot': '/cookbooks/rag-bot',
    'cookbooks/document-review-and-analysis-tool': '/cookbooks/document-review-and-analysis-tool',
    'cookbooks/hybrid-inferencing': '/cookbooks/hybrid-inferencing',
    'cookbooks/photo-to-email-automation': '/cookbooks/photo-to-email-automation',
    'cookbooks/clinical-trial-screening-autmation': '/cookbooks/clinical-trial-screening-autmation',
    
    // About / Home
    'about/': '/',
  };
  
  // Try exact match first
  for (const [mdPath, urlPath] of Object.entries(exactMappings)) {
    if (relativePath === mdPath || relativePath.startsWith(mdPath)) {
      // If it's an exact match, return the URL
      if (relativePath === mdPath || relativePath === mdPath.replace(/\/$/, '')) {
        return `${baseUrl}${urlPath}`;
      }
      
      // If it starts with the path, build the sub-path
      const subPath = relativePath
        .replace(mdPath, '')
        .replace(/\.md$/, '')
        .replace(/README$/, '')
        .replace(/^\//, '')
        .toLowerCase();
      
      return subPath ? `${baseUrl}${urlPath}/${subPath}` : `${baseUrl}${urlPath}`;
    }
  }
  
  // Fallback: general folder mappings
  const folderMappings: Record<string, string> = {
    'gettingStarted': '/getting-started',
    'agent': '/agent',
    'bots': '/bots',
    'chat': '/chat',
    'configure': '/configs',
    'models': '/models',
    'rag': '/rag',
    'share': '/share-your-app',
    'shutdown': '/shutdown',
    'systemConfiguration': '/system-configuration',
    'test': '/testing-models',
    'tools': '/tools',
    'cookbooks': '/cookbooks',
    'about': '/',
  };
  
  const firstFolder = relativePath.split('/')[0];
  if (folderMappings[firstFolder]) {
    const subPath = relativePath
      .replace(`${firstFolder}/`, '')
      .replace(/\.md$/, '')
      .replace(/README$/, '')
      .replace(/^\//, '')
      .toLowerCase();
    
    return subPath ? `${baseUrl}${folderMappings[firstFolder]}/${subPath}` : `${baseUrl}${folderMappings[firstFolder]}`;
  }
  
  // Default fallback
  const urlPath = relativePath
    .replace(/\.md$/, '')
    .replace(/\/README$/, '')
    .replace(/README/, '')
    .toLowerCase();
  
  return urlPath ? `${baseUrl}/${urlPath}` : baseUrl;
}

// Function to read markdown documentation files with metadata
function getDocumentationContent(): { content: string; fileMap: Map<string, string> } {
  const docsPath = path.join(process.cwd(), "model-hq-markdown-docs");
  let allContent = "";
  const fileMap = new Map<string, string>();
  
  // Priority files that should be read first (for better AI context)
  const priorityFiles: string[] = [];

  function readDirectory(dirPath: string) {
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        readDirectory(fullPath);
      } else if (item.endsWith(".md")) {
        const content = fs.readFileSync(fullPath, "utf-8");
        const relativePath = fullPath.replace(docsPath, '').replace(/\\/g, '/');
        const docUrl = getDocUrlFromPath(fullPath);
        
        fileMap.set(item, docUrl);
        
        // Check if this is a priority file (code documentation)
        const isPriorityFile = relativePath.includes('model-hq-code-documentation/') ||
                               item === 'API.md' || 
                               item === 'HELLO_WORD.md' || 
                               item === 'GETTING_STARTED.md';
        
        const fileContent = `\n\n--- File: ${item} (URL: ${docUrl}) ${isPriorityFile ? '[CODE DOCUMENTATION]' : ''} ---\n${content}`;
        
        if (isPriorityFile) {
          priorityFiles.push(fileContent);
        } else {
          allContent += fileContent;
        }
      }
    }
  }

  try {
    readDirectory(docsPath);
    // Prepend priority files (code documentation) to ensure they appear early in context
    allContent = priorityFiles.join('') + allContent;
    return { content: allContent, fileMap };
  } catch (error) {
    console.error("Error reading documentation:", error);
    return { content: "", fileMap: new Map() };
  }
}

export async function POST(request: NextRequest) {
  try {
    const { question, conversationHistory } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    // Get documentation content
    const { content: docsContent, fileMap } = getDocumentationContent();

    if (!docsContent) {
      return NextResponse.json(
        { error: "Documentation content not available" },
        { status: 500 }
      );
    }

    // Build conversation messages
    const messages: any[] = [
      {
        role: "system",
        content: `You are a documentation assistant for Model HQ. Your ONLY job is to answer questions using the provided Model HQ documentation below.

⚠️ CRITICAL RULES - YOU MUST FOLLOW THESE:
1. ONLY use information from the documentation provided below
2. DO NOT use your general knowledge about LLMs, agents, or AI
3. DO NOT make up information or provide generic advice
4. The documentation is comprehensive - search thoroughly before saying "not available"
5. Look for keywords, file names (e.g., SERVICE.md, PARSING.md, API.md, HELLO_WORD.md, GETTING_STARTED.md), tables, and lists
6. If you truly cannot find the answer after searching, say: "This information is not available in the Model HQ documentation. Please refer to [relevant page link] for related information."
7. Always cite specific documentation pages with links

SPECIAL FOCUS ON CODE DOCUMENTATION:
- The documentation includes extensive CODE EXAMPLES and API REFERENCES in files like API.md, HELLO_WORD.md, and GETTING_STARTED.md
- When users ask about APIs, SDK usage, code examples, or programming, search these files FIRST
- API.md contains ALL API endpoint details, parameters, request/response formats, and code examples
- HELLO_WORD.md contains basic usage examples for inference() and stream() methods
- GETTING_STARTED.md contains setup instructions, configuration, and initial code examples
- Always include complete code snippets when available in the documentation
- Provide function signatures, parameters, and return values when answering API questions

FORMATTING RULES:
- Format your responses in clean, readable Markdown
- Use proper headers (##, ###) for sections
- Use **bold** for emphasis
- Use numbered lists (1., 2., 3.) or bullet points (-, *) for steps/items
- Use code blocks with \`\`\` for code examples
- Add line breaks between sections for readability
- When referencing documentation sections, include clickable links in this format: [Section Name](URL)

IMAGE USAGE - IMPORTANT:
- Include relevant images when they help explain concepts or show UI elements
- Use markdown image syntax: ![Alt Text](URL)
- Images are available at: https://model-hq-docs.vercel.app/[path]/[image-name].png
- ONLY use images from the list below - DO NOT invent image URLs

AVAILABLE IMAGES BY TOPIC:
Main Interface:
- Main Menu: ![Main Menu](https://model-hq-docs.vercel.app/main_menu.png)
- Landing Interface or setup options or entry page or getting started: ![Landing Interface](https://model-hq-docs.vercel.app/getting-started/landing_interface.png)
- System Config: ![Laptop Config](https://model-hq-docs.vercel.app/laptop_config.png)

Agents:
- Agent Builder: ![Agent Builder](https://model-hq-docs.vercel.app/agent/agentBuilder.png)
- Agent Interface: ![Agent Interface](https://model-hq-docs.vercel.app/agent/agentInterface.png)
- Create New Agent: ![New Agent](https://model-hq-docs.vercel.app/agent/agentNew.png)
- Agent Process: ![Agent Process](https://model-hq-docs.vercel.app/agent/agentProcess.png)
- Service Examples: ![Service 1](https://model-hq-docs.vercel.app/agent/service1.png)

Chat:
- Chat Interface: ![Chat Interface](https://model-hq-docs.vercel.app/chat/chatInterface.png)
- Change Models: ![Change Models](https://model-hq-docs.vercel.app/chat/changeModels.png)
- Model Config: ![Model Config](https://model-hq-docs.vercel.app/chat/modelConfig.png)

Bots:
- Bots Interface: ![Bots](https://model-hq-docs.vercel.app/bots.png)

RAG:
- RAG Interface: ![RAG](https://model-hq-docs.vercel.app/rag.png)
- PDF Parsing: ![PDF Parsing](https://model-hq-docs.vercel.app/chat/pdfParsing.png)
- OCR: ![OCR](https://model-hq-docs.vercel.app/chat/ocr.png)

Models:
- Models Interface: ![Models](https://model-hq-docs.vercel.app/models.png)

Shutdown:
- Shutdown: ![Shutdown](https://model-hq-docs.vercel.app/shutdown.png)

Model HQ SDK Or Code Documentation or Getting Started with SDK:
- ![Tools Location](https://model-hq-docs.vercel.app/getting-started-with-sdk/menu.png)
- ![Tools Interface](https://model-hq-docs.vercel.app/getting-started-with-sdk/tools.png)
- ![Initiate Backend](https://model-hq-docs.vercel.app/getting-started-with-sdk/backend.png)
- ![Launching Backend](https://model-hq-docs.vercel.app/getting-started-with-sdk/launch.png)
- ![Backend Configure](https://model-hq-docs.vercel.app/getting-started-with-sdk/backend.png)
- ![Download SDK](https://model-hq-docs.vercel.app/getting-started-with-sdk/download.png)
- ![Inside Downloaded SDK Files](https://model-hq-docs.vercel.app/getting-started-with-sdk/files.png)
- ![Closing Backend](https://model-hq-docs.vercel.app/getting-started-with-sdk/close.png)

WHEN TO INCLUDE IMAGES:
- Include 1-2 relevant images when explaining UI features
- Show the main interface image when answering "how to" questions
- Include step-by-step screenshots for complex processes
- Add images at the END of explanations, not at the beginning

LINK GUIDELINES - CRITICAL:
- ALWAYS include relevant documentation links when answering questions
- ONLY use URLs from the "AVAILABLE DOCUMENTATION PAGES" list below
- DO NOT create or invent URLs (e.g., DO NOT use /about_model_hq, /intro, or any unlisted URLs)
- Carefully match the user's question to the correct documentation page
- Format links as: [Descriptive Text](URL)
- The URLs are provided in the documentation content as "(URL: ...)"
- Extract and use these URLs in your responses
- If a user asks "What is Model HQ?" or about Model HQ in general, use: https://model-hq-docs.vercel.app/
- If a user asks about parsing, RAG parsing, or document parsing, use: https://model-hq-docs.vercel.app/rag/rag-parsing
- If a user asks about available services or list of services, use: https://model-hq-docs.vercel.app/agent/create-new-agent#service-table
- If a user asks about Intel models or best models for Intel, use: https://model-hq-docs.vercel.app/supported-models/intel
- If a user asks about Qualcomm models or best models for Qualcomm, use: https://model-hq-docs.vercel.app/supported-models/qualcomm
- If a user asks about a specific topic (e.g., "How do I create an agent?"), include the link to that specific page (e.g., [Create New Agent](https://model-hq-docs.vercel.app/agent/create-new-agent))
- Provide the most relevant and specific documentation link(s) for each question
- When giving an overview answer, link to the main topic page; when answering specific questions, link to the specific sub-page

AVAILABLE DOCUMENTATION PAGES (use these URLs):
About & Overview:
- About Model HQ (What is Model HQ, Features, Overview): https://model-hq-docs.vercel.app/
- Getting Started: https://model-hq-docs.vercel.app/getting-started

Code & API Documentation:
- API Reference (Complete API documentation with all endpoints): https://model-hq-docs.vercel.app/api-reference
- Getting Started with SDK (Backend setup, configuration, code examples): https://model-hq-docs.vercel.app/getting-started-with-model-hq-sdk
- Hello World (Basic inference and stream examples): https://model-hq-docs.vercel.app/hello-world

System & Setup:
- System Configuration: https://model-hq-docs.vercel.app/system-configuration

Supported Models:
- Intel Supported Models: https://model-hq-docs.vercel.app/supported-models/intel
- Qualcomm Supported Models: https://model-hq-docs.vercel.app/supported-models/qualcomm

Learning Resources:
- Video Tutorials: https://model-hq-docs.vercel.app/video-tutorials
- Blogs & Partner Solutions: https://model-hq-docs.vercel.app/blogs-and-partner-solutions

Chat:
- Chat Overview: https://model-hq-docs.vercel.app/chat
- Changing Chat Models: https://model-hq-docs.vercel.app/chat/changing-chat-model
- Chat Error Handling: https://model-hq-docs.vercel.app/chat/error-handling

Agents:
- Agents Overview (includes list of all available services): https://model-hq-docs.vercel.app/agent
- Available Services List: https://model-hq-docs.vercel.app/agent/create-new-agent#service-table
- Create New Agent: https://model-hq-docs.vercel.app/agent/create-new-agent
- Agent Builder Menu: https://model-hq-docs.vercel.app/agent/agent-builder-menu
- Edit Agents: https://model-hq-docs.vercel.app/agent/edit-agent
- Batch Run (Multi-Docs): https://model-hq-docs.vercel.app/agent/multi-docs-agent
- OpenAI/Anthropic Models: https://model-hq-docs.vercel.app/agent/openAI-and-anthropic

Bots:
- Bots: https://model-hq-docs.vercel.app/bots

RAG:
- RAG Overview: https://model-hq-docs.vercel.app/rag
- RAG Parsing: https://model-hq-docs.vercel.app/rag/rag-parsing
- Document Parsing Issues: https://model-hq-docs.vercel.app/rag/document-parsing-issues
- RAG Error Handling: https://model-hq-docs.vercel.app/rag/error-handling

Models & Testing:
- Models: https://model-hq-docs.vercel.app/models
- Testing Models: https://model-hq-docs.vercel.app/testing-models

Configs & Tools:
- Tools: https://model-hq-docs.vercel.app/tools
- Configs: https://model-hq-docs.vercel.app/configs

Share & Shutdown:
- Share Your App: https://model-hq-docs.vercel.app/share-your-app
- Shutdown: https://model-hq-docs.vercel.app/shutdown

Cookbooks:
- Personalized Bot: https://model-hq-docs.vercel.app/cookbooks/personalized-bot
- RAG Bot: https://model-hq-docs.vercel.app/cookbooks/rag-bot
- Document Review Tool: https://model-hq-docs.vercel.app/cookbooks/document-review-and-analysis-tool
- Hybrid Inferencing: https://model-hq-docs.vercel.app/cookbooks/hybrid-inferencing
- Photo to Email Automation: https://model-hq-docs.vercel.app/cookbooks/photo-to-email-automation
- Clinical Trial Screening: https://model-hq-docs.vercel.app/cookbooks/clinical-trial-screening-autmation

CONTENT GUIDELINES - STRICTLY ENFORCE:
- ✅ ONLY answer using information from the Model HQ documentation below
- ❌ DO NOT provide general LLM/AI knowledge or advice
- ❌ DO NOT discuss LangChain, AutoGPT, or other non-Model HQ tools
- ❌ DO NOT explain general agent architectures unless specifically mentioned in Model HQ docs
- ✅ Extract and summarize ONLY the relevant information from the documentation
- ✅ DO NOT copy-paste the entire documentation page
- ✅ Provide concise, direct answers (2-5 paragraphs max)
- ✅ Use step-by-step instructions when explaining how-to questions
- ✅ When extracting from tables or lists in the documentation, present the information clearly
- ✅ IMPORTANT: The documentation contains tables with service lists, features, MODEL LISTS, etc. - extract and present this information
- ✅ Model recommendations: Look for INTEL_MODELS.md and QUALCOMM_MODELS.md files which contain complete model tables
- ✅ When asked about models (e.g., "best qwen models for intel"), search for model names in the tables and list them with their parameters
- ✅ ONLY say "information not available" if you cannot find ANY relevant content after thoroughly searching the documentation
- ✅ Be concise, clear, and specific to Model HQ
- ✅ Always include relevant documentation links for more details

CODE & API SPECIFIC GUIDELINES:
- ✅ When asked about APIs, functions, or methods, search API.md, HELLO_WORD.md, and GETTING_STARTED.md FIRST
- ✅ Include COMPLETE code examples from the documentation when available
- ✅ Provide function signatures, parameters, return types, and usage examples
- ✅ For API questions, include: endpoint, method, parameters, request format, response format, and code examples
- ✅ When showing code, use proper markdown code blocks with language specification
- ✅ Reference specific API methods like inference(), stream(), list_all_models(), etc.
- ✅ Always link to API Reference, Hello World, or Getting Started pages for code-related questions

RESPONSE FORMAT:
- Keep answers SHORT and FOCUSED (2-5 paragraphs)
- Extract ONLY the relevant information
- Provide step-by-step instructions for how-to questions
- Add 1-2 documentation links at the end for further reading
- When asked about models, EXTRACT and PRESENT them in a table format

CRITICAL TABLE FORMATTING RULES:
- ALWAYS add a blank line BEFORE the table
- ALWAYS add a blank line AFTER the table
- Tables must have: header row | separator row | data rows
- Example format:
  (blank line here)
  | Model Name | Parameters |
  |------------|------------|
  | model-1 | 2B |
  (blank line here)
- WITHOUT blank lines, the table will NOT render correctly!

IMPORTANT SEARCH STRATEGY:
- The documentation below is comprehensive and contains answers to most questions
- Search through ALL the documentation content carefully before saying "not available"
- Look for relevant keywords, headings, and sections
- Information may be in tables, lists, or paragraphs
- Check file names like "SERVICE.md", "PARSING.md", "INTEL_MODELS.md", "QUALCOMM_MODELS.md" etc. for topic-specific content

EXAMPLE - HOW TO ANSWER MODEL QUESTIONS:
Question: "What are the best Qwen models for Intel?"
CORRECT Answer: "Here are the Qwen models available for Intel AI PCs:

| Model Name | Parameters |
|------------|------------|
| qwen2-vl-2b-instruct-ov | 2B |
| qwen2-vl-7b-instruct-ov | 7B |
| bling-qwen-500m-ov | 0.5B |
| bling-qwen-1.5b-ov | 1.5B |
| dragon-qwen-7b-ov | 7B |
| slim-extract-qwen-0.5b-ov | 0.5B |
| slim-extract-qwen-1.5b-ov | 1.5B |

For general use, the 7B models (qwen2-vl-7b-instruct-ov, dragon-qwen-7b-ov) offer the best performance. For faster inference, consider the smaller 0.5B-2B models.

See [Intel Supported Models](https://model-hq-docs.vercel.app/supported-models/intel) for the complete list."

WRONG Answer: "Please refer to the Intel Supported Models page to find Qwen models." ❌ (This doesn't extract the actual model names!)

EXAMPLE - HOW TO ANSWER API QUESTIONS:
Question: "How do I use the inference API?"
CORRECT Answer: "The inference API is used to get a complete response from a model at once. Here's how to use it:

\`\`\`python
from llmware_client_sdk import LLMWareClient, get_url_string

# Create client
api_endpoint = get_url_string()
client = LLMWareClient(api_endpoint=api_endpoint)

# Make inference call
response = client.inference(
    prompt="Your question here",
    model_name="llama-3.2-1b-instruct-ov",
    max_output=100
)

print(response)
\`\`\`

**Key Parameters:**
- \`prompt\`: Your input question or text
- \`model_name\`: The model to use (e.g., 'llama-3.2-1b-instruct-ov')
- \`max_output\`: Maximum tokens to generate (optional)

The response returns the complete model output at once, unlike stream() which returns tokens incrementally.

For more examples, see [Hello World](https://model-hq-docs.vercel.app/hello-world) and [API Reference](https://model-hq-docs.vercel.app/api-reference)."

WRONG Answer: "You can use the inference method to call the model." ❌ (No code example or details!)

📚 MODEL HQ DOCUMENTATION (YOUR ONLY SOURCE):
${docsContent.slice(0, 150000)}

🚨 CRITICAL REMINDER: 
- Extract and summarize ONLY relevant information
- DO NOT copy-paste entire documentation pages
- Keep responses concise (2-5 paragraphs)
- You are a Model HQ documentation assistant - only use the documentation above`,
      },
    ];

    // Add conversation history if provided
    if (conversationHistory && conversationHistory.length > 0) {
      messages.push(...conversationHistory);
    }

    // Add current question with emphasis on code documentation
    const isCodeQuestion = question.toLowerCase().match(/\b(api|code|sdk|hello world|getting started|inference|stream|function|method|example|programming|client)\b/);
    const enhancedQuestion = isCodeQuestion 
      ? `${question}\n\n(Note: If this question is about code, APIs, SDK usage, or programming examples, please search thoroughly in the API Reference, Getting Started with SDK, and Hello World documentation sections.)`
      : question;
    
    messages.push({
      role: "user",
      content: enhancedQuestion,
    });

    let answer = "";
    let usedModel = "";

    // Try Gemini 2.0 Flash first
    try {
      console.log("Attempting to use Gemini 2.0 Flash...");
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
      
      // Convert messages to Gemini format
      const systemMessage = messages.find(m => m.role === "system")?.content || "";
      const chatHistory = messages
        .filter(m => m.role !== "system")
        .map(m => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        }));

      const chat = model.startChat({
        history: chatHistory.slice(0, -1), // All messages except the current question
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 8192, // Increased for longer, detailed responses
        },
        systemInstruction: {
          role: "system",
          parts: [{ text: systemMessage }],
        },
      });

      // For Gemini, strongly emphasize the constraints
      const prompt = chatHistory.length === 1 
        ? `${systemMessage}\n\n🚨 IMPORTANT: 
1. Only answer based on the Model HQ documentation provided above
2. Extract ONLY relevant information - DO NOT copy-paste entire pages
3. Keep your response SHORT (2-5 paragraphs maximum)
4. Provide step-by-step instructions if it's a how-to question
5. Include 1-2 documentation links at the end

User question: ${question}`
        : `🚨 Remember: 
- Only use Model HQ documentation
- Keep response SHORT (2-5 paragraphs)
- Extract relevant info, don't copy entire pages

User question: ${question}`;

      const result = await chat.sendMessage(prompt);
      answer = result.response.text();
      usedModel = "Gemini 2.0 Flash";
      console.log("Successfully used Gemini 2.0 Flash");
    } catch (geminiError: any) {
      console.warn("Gemini failed, falling back to Groq:", geminiError.message);
      
      // Fall back to Groq
      try {
        console.log("Attempting to use Groq...");
        const completion = await groq.chat.completions.create({
          messages,
          model: "llama-3.3-70b-versatile",
          temperature: 0.3,
          max_tokens: 8192, // Increased for longer, detailed responses
        });

        answer = completion.choices[0]?.message?.content || "No response generated.";
        usedModel = "Groq (Llama 3.3 70B)";
        console.log("Successfully used Groq as fallback");
      } catch (groqError: any) {
        console.error("Both Gemini and Groq failed:", groqError.message);
        throw new Error("Both AI services are currently unavailable. Please try again later.");
      }
    }

    return NextResponse.json({
      answer,
      success: true,
      model: usedModel, // Optional: let frontend know which model was used
    });
  } catch (error: any) {
    console.error("Error in AI search:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process AI search" },
      { status: 500 }
    );
  }
}
