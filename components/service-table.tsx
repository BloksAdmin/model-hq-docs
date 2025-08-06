export function ServiceTable() {
  return (
    <div className="my-6">
      <h4 className="text-lg font-semibold mb-4">🛠 Services, Instructions, Description & Expected Context</h4>
      <p className="text-sm text-muted-foreground mb-4">
        Below is the list of supported services, their expected instruction formats, descriptions, and applicable
        context sources.
      </p>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Service Name</th>
              <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Instruction</th>
              <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Description</th>
              <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Context</th>
            </tr>
          </thead>
          <tbody>
            {serviceData.map((service, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-3 py-2 font-medium">{service.name}</td>
                <td className="border border-gray-300 px-3 py-2">{service.instruction}</td>
                <td className="border border-gray-300 px-3 py-2">{service.description}</td>
                <td className="border border-gray-300 px-3 py-2">{service.context}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {serviceData.map((service, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="font-medium text-base mt-1">{service.name}</p>
              </div>

              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">{service.instruction}</p>
              </div>

              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1">{service.description}</p>
              </div>

              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words">{service.context}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const serviceData = [
  {
    name: "build_table",
    instruction: "Enter name of table (will be built from the selected input table file)",
    description: "Create Table from CSV data",
    context: "User-Table",
  },
  {
    name: "query_custom_table",
    instruction: "Enter query for database table",
    description: "Database lookup in natural language. Requires build_table first. Keep table schema in mind.",
    context: "Enter_name_of_Table This table is the result of Build_Table service step.",
  },
  {
    name: "semantic_filter",
    instruction: "What is your question or instruction?",
    description: "Filters an existing source based on question/topic to create new filtered source",
    context: "User-Source",
  },
  {
    name: "text_filter",
    instruction: "What is the keyword or topic to filter the source?",
    description: "Filters an existing source based on question/topic",
    context: "User-Source, or a 'filtered' query in the agent process.",
  },
  {
    name: "document_filter",
    instruction: "Document name",
    description: "Filters an existing source by document name",
    context: "User-Source, or a 'filtered' query in the agent process.",
  },
  {
    name: "table_filter",
    instruction: "No instruction required",
    description: "Filters table type content in User Source",
    context: "User-Source",
  },
  {
    name: "aggregate_context",
    instruction:
      "List the names of source contexts to consolidate. Use space-separated names like: source_1 source_2 source_3. Do not use curly braces.",
    description:
      "Consolidates multiple source contexts into one. This is used to merge several sources into a unified context.",
    context: "No input context required",
  },
  {
    name: "create_context",
    instruction: "What is your question or instruction?",
    description: "Answers a question or performs an instruction",
    context: "User-Source",
  },
  {
    name: "parse_document",
    instruction: "Enter name of new document source",
    description: "Creates a source from document for further document-related processing",
    context: "User-Document",
  },
  {
    name: "ocr",
    instruction: "Enter name of new document source",
    description: "This is the fall-back step to documents that cannot be parsed using the 'parse_document' step because they are image-based PDFs or security-encrypted PDFs. Create Source from Document - a necessary step for handling Document-related workflows such as RAG or Summary. This service must be applied first, prior to using most User-Document related Services.",
    context: "User-Document",
  },
  {
    name: "rag_answer",
    instruction: "Ask question to longer document input",
    description: "Answers a question based on a longer document input",
    context: "User-Source, Provide_instruction_or_query",
  },
  {
    name: "report_commentary",
    instruction: "(Optional) Guidance to Commentary",
    description: "Generate report and commentary on key process results from the agent state in Word - no input context required",
    context: "-",
  },
  {
    name: "agent_report",
    instruction: "Enter title for agent report",
    description: "Prepares report on agent output",
    context: "-",
  },
  {
    name: "wikipedia_search",
    instruction: "Add Wikipedia Articles as Research Context",
    description: "Adds Wikipedia articles as research context",
    context: "None",
  },
  {
    name: "embedded_bot",
    instruction: "Optional. None required.",
    description: "Pauses the execution of the agent process to allow the user to interact with the current state of the agent in chat format.  ",
    context: "None",
  },
  {
    name: "condition",
    instruction: "Enter expression to evaluate in 'if_true' or 'if_false' format",
    description: "Evaluates the truth value of a condition, which can then be used as a variable in any other process step such that the step will only execute if it meets the selected condition",
    context: "None",
  },
  {
    name: "web_search",
    instruction: "Add query for a topic or a question",
    description: "Runs web searches returning a summary text as a source and an indexed set of text chunks - needs SERP API or Tavily API",
    context: "None",
  },
  {
    name: "speech_gen",
    instruction: "Enter a topic or short input to convert to speech file",
    description: "Using a short text input, generates an audio voice wav file based on the input text. (Experimental)",
    context: "None",
  },
  {
    name: "image_gen",
    instruction: "Enter a topic or description to convert to an image",
    description: "Creates an image using the description or instruction provided by the user",
    context: "None",
  },
  {
    name: "website_scraper",
    instruction: "Enter the full website URL",
    description: "Scrapes the website in question to extract content for a downstream question in the agent process (may not work for all websites due to scraping protection)",
    context: "None",
  },
  {
    name: "send_email",
    instruction: "Enter the email address of the receiver",
    description: "Automatically sends an email using Gmail (requires credentials provided in Configuration/Credentials)",
    context: "Select context of the email",
  },
  {
    name: "connect_library",
    instruction: "Enter library name",
    description: "Connects to Semantic Library from Model HQ API",
    context: "-",
  },
  {
    name: "query_library",
    instruction: "Enter query for semantic library",
    description: "Queries connected semantic library",
    context: "Enter_Library-name",
  },
  {
    name: "get_stock_summary",
    instruction: "Enter stock ticker",
    description: "Stock lookup using YFinance",
    context: "None",
  },
  {
    name: "vision",
    instruction: "Enter question to image file",
    description: "Provides answer/description from image",
    context: "User-Image",
  },
  {
    name: "vision_batch",
    instruction: "Enter question to batch of image files",
    description: "Takes a collection of user images as an input context, along with a text input of a question or instruction. Returns text output context with the answer based on the set of images. ",
    context: "User-Document",
  },
  {
    name: "parse_batch",
    instruction: "Enter question to batch of documents files that have been parsed",
    description: "Takes a collection of document files as an input context, and will return a set of text chunks, indexed and packaged as a source, which can then be used as input to a number of other services",
    context: "User-Document",
  },
  {
    name: "sentiment",
    instruction: "No instruction required",
    description: "Analyzes sentiment (positive/negative/neutral)",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "boolean",
    instruction: "Provide yes/no question",
    description: "Provides yes/no answer with explanation",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "emotions",
    instruction: "No instruction required",
    description: "Analyzes primary emotion in input",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "topics",
    instruction: "No instruction required",
    description: "Classifies topic of input",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "tags",
    instruction: "No instruction required",
    description: "Generates tags from input",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "intent",
    instruction: "No instruction required",
    description: "Classifies intent of input",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "ratings",
    instruction: "No instruction required",
    description: "Rates positivity from 1 to 5",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "ner",
    instruction: "No instruction required",
    description: "Identifies named entities (people, places, organizations)",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "xsum",
    instruction: "No instruction required",
    description: "Generates extreme summary or headline",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "summary",
    instruction: "Optional - add input instructions to focus the summarization",
    description: "Summarizes source content",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "category",
    instruction: "No instruction required",
    description: "Analyzes category of the input passage",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "q_gen",
    instruction: "No instruction required",
    description: "Generates question from passage",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "chat",
    instruction: "What is your question or instruction?",
    description: "Answers a question or performs instruction",
    context: "MAIN-INPUT, User-Text, None",
  },
  {
    name: "extract",
    instruction: "Enter extraction key, e.g., 'customer name'",
    description: "Extracts key-value pair",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "extract_tiny",
    instruction: "Enter extraction key, e.g., 'customer name'",
    description: "Extracts key-value pair (tiny version)",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "answer",
    instruction: "What is your question?",
    description: "Answers specific question from passage",
    context: "MAIN-INPUT, User-Text",
  },
  {
    name: "extract_table",
    instruction: "Enter query to filter among available tables",
    description: "Extracts table from document",
    context: "User-Document",
  },
  {
    name: "END",
    instruction: "End of process",
    description: "Marks the end of agent process",
    context: "None",
  },
  {
    name: "openai_chat",
    instruction: "Enter input question or instruction",
    description: "Chat agent calls OpenAI (requires separate API key in Configuration/Credentials) with an optional text input context. The output provides a context passage that can be used by other services",
    context: "Main Input or other Text Source",
  },
  {
    name: "openai_rag",
    instruction: "Enter input question or instruction",
    description: "Calls OpenAI (requires separate API key in Configuration/Credentials) with a RAG question. The output provides a context passage that can be used by other services",
    context: "Main Input or other Text Source",
  },
  {
    name: "openai_rag_batch",
    instruction: "Enter input question or instruction",
    description: "Calls OpenAI (requires separate API key in Configuration/Credentials) with a batch of document sources and generates a response based on the input instruction/question. The output provides a context passage that can be used by other services",
    context: "Main Input or other Text Source",
  },
  {
    name: "anthropic_chat",
    instruction: "Enter input question or instruction",
    description: "Chat agent calls Anthropic (requires separate API key in Configuration/Credentials) with an optional text input context. The output provides a context passage that can be used by other services",
    context: "Main Input or other Text Source",
  },
]
