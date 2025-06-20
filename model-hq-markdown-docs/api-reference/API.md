## 📖 API Reference

The Model HQ API provides programmatic access to the Model HQ platform, whether running as a development server on a client Windows device (Model HQ Developer App), or as a multi-tenant Linux server (Model HQ API Server). The API is accessed through either REST API calls or through a Python SDK. These examples will illustrate both ways to access the API.

---

### Trusted Key

Alternative authentication using:

```json
"trusted_key": "your-trusted-key"
```

### Example Request

```bash
curl -X POST "https://api.modelhq.com/inference/" \
  -H "Content-Type: application/json" \
  -d '{
    "api_key": "your-api-key",
    "model_name": "llama-2-7b",
    "prompt": "Hello world"
  }'
```

---

## 🧠 Models

Core inference endpoints for:

* Text generation
* Vision analysis
* Specialized model functions

\[...your detailed model endpoints already exist below this section...]

## 📚 RAG (Retrieval Augmented Generation)

Document and library-based question answering with semantic search and context retrieval.

\[...continue with RAG endpoints here as you expand them...]

### 🧪 API Endpoint Code Examples

Below is a generic format to understand how the API endpoint functions work:

#### Curl Example

```bash
curl -X {METHOD} "https://api.modelhq.com{ENDPOINT}" \
  -H "Content-Type: application/json" \
  -d '{
    // exampleRequest as JSON
  }'
```

#### Python Example

```python
import requests
import json

url = "https://api.modelhq.com{ENDPOINT}"
headers = {
    "Content-Type": "application/json"
}
data = {
    # exampleRequest as JSON
}

response = requests.post(url, headers=headers, json=data)

# For streaming responses
for line in response.iter_lines():
    if line:
        print(line.decode('utf-8'))

# For complete responses
# result = response.json()
# print(json.dumps(result, indent=2))
```

---


## WE STILL HAVE TO WRITE THE CORRECT REQUEST (in cURL & Py) AND RESPONSE

```ts
// MODELS CATEGORY - Core Inference Methods
  {
    id: "stream",
    name: "Create stream",
    method: "POST",
    endpoint: "/stream/",
    description:
      "Generate a streaming inference response from a selected model. The response will be streamed back in real-time as the model generates tokens.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "model_name", type: "string", description: "The name of the model to use for inference" },
      { name: "prompt", type: "string", description: "The input text prompt to generate a response for" },
    ],
    optionalParams: [
      { name: "max_output", type: "integer", description: "Maximum number of tokens to generate", default: "100" },
      {
        name: "temperature",
        type: "number",
        description: "Controls randomness in generation (0.0-1.0)",
        default: "0.7",
      },
      { name: "sample", type: "boolean", description: "Whether to use sampling for generation", default: "true" },
      { name: "context", type: "string", description: "Additional context to provide to the model" },
      { name: "api_key", type: "string", description: "Your API authentication key" },
      { name: "trusted_key", type: "string", description: "Alternative trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      model_name: "llama-2-7b",
      prompt: "Explain quantum computing in simple terms",
      max_output: 150,
      temperature: 0.7,
      api_key: "your-api-key",
    },
    exampleResponse: { llm_response: "Quantum computing is a revolutionary approach..." },
    isStreaming: true,
  },
  {
    id: "inference",
    name: "Create inference",
    method: "POST",
    endpoint: "/inference/",
    description:
      "Generate a complete inference response from a selected model. The response will be the complete generation from the model returned as a single response.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "prompt", type: "string", description: "The input text prompt to generate a response for" },
      { name: "model_name", type: "string", description: "The name of the model to use for inference" },
    ],
    optionalParams: [
      { name: "max_output", type: "integer", description: "Maximum number of tokens to generate", default: "100" },
      {
        name: "temperature",
        type: "number",
        description: "Controls randomness in generation (0.0-1.0)",
        default: "0.7",
      },
      { name: "sample", type: "boolean", description: "Whether to use sampling for generation", default: "true" },
      { name: "api_key", type: "string", description: "Your API authentication key" },
      { name: "context", type: "string", description: "Additional context to provide to the model" },
      { name: "params", type: "object", description: "Additional model-specific parameters" },
      { name: "fx", type: "string", description: "Function execution parameters" },
      { name: "trusted_key", type: "string", description: "Alternative trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      prompt: "Write a short story about artificial intelligence",
      model_name: "llama-2-7b",
      max_output: 200,
      temperature: 0.8,
      api_key: "your-api-key",
    },
    exampleResponse: { llm_response: "Artificial intelligence represents one of humanity's greatest..." },
    isStreaming: false,
  },
  {
    id: "function_call",
    name: "Function call",
    method: "POST",
    endpoint: "/function_call/",
    description: "Execute a specialized function call with SLIM model for structured outputs and specific tasks.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "model_name", type: "string", description: "The SLIM model name to use for function calling" },
      { name: "context", type: "string", description: "The context or input text for the function" },
    ],
    optionalParams: [
      { name: "prompt", type: "string", description: "Additional prompt instructions" },
      { name: "params", type: "object", description: "Function-specific parameters" },
      { name: "function", type: "string", description: "Specific function to execute" },
      { name: "api_key", type: "string", description: "Your API authentication key" },
      { name: "get_logits", type: "boolean", description: "Whether to return model logits" },
      { name: "max_output", type: "integer", description: "Maximum tokens to generate" },
      { name: "temperature", type: "number", description: "Sampling temperature" },
      { name: "sample", type: "boolean", description: "Whether to use sampling" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      model_name: "slim-extract",
      context: "John Smith works at Acme Corp as a Software Engineer. He can be reached at john@acme.com.",
      function: "extract_entities",
      api_key: "your-api-key",
    },
    exampleResponse: {
      llm_response:
        '{"name": "John Smith", "company": "Acme Corp", "role": "Software Engineer", "email": "john@acme.com"}',
    },
    isStreaming: false,
  },
  {
    id: "sentiment",
    name: "Sentiment analysis",
    method: "POST",
    endpoint: "/sentiment/",
    description: "Execute sentiment analysis using a specialized SLIM sentiment model.",
    category: "models",
    timeout: 60,
    requiredParams: [{ name: "context", type: "string", description: "The text to analyze for sentiment" }],
    optionalParams: [
      { name: "model_name", type: "string", description: "Sentiment model to use" },
      { name: "get_logits", type: "boolean", description: "Whether to return model logits" },
      { name: "max_output", type: "integer", description: "Maximum tokens to generate" },
      { name: "temperature", type: "number", description: "Sampling temperature" },
      { name: "sample", type: "boolean", description: "Whether to use sampling" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      context: "I absolutely love this new product! It's amazing and works perfectly.",
      api_key: "your-api-key",
    },
    exampleResponse: { llm_response: '{"sentiment": "positive", "confidence": 0.95}' },
    isStreaming: false,
  },
  {
    id: "extract",
    name: "Extract information",
    method: "POST",
    endpoint: "/extract/",
    description: "Execute information extraction using a SLIM extract model to pull specific data from text.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "context", type: "string", description: "The text to extract information from" },
      { name: "extract_keys", type: "array", description: "List of keys/fields to extract from the text" },
    ],
    optionalParams: [
      { name: "get_logits", type: "boolean", description: "Whether to return model logits" },
      { name: "max_output", type: "integer", description: "Maximum tokens to generate" },
      { name: "temperature", type: "number", description: "Sampling temperature" },
      { name: "sample", type: "boolean", description: "Whether to use sampling" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      context: "Invoice #12345 dated March 15, 2024. Total amount: $1,250.00. Customer: ABC Corp.",
      extract_keys: ["invoice_number", "date", "total_amount", "customer"],
      api_key: "your-api-key",
    },
    exampleResponse: {
      llm_response:
        '{"invoice_number": "12345", "date": "March 15, 2024", "total_amount": "$1,250.00", "customer": "ABC Corp"}',
    },
    isStreaming: false,
  },
  {
    id: "vision",
    name: "Vision inference",
    method: "POST",
    endpoint: "/vision/",
    description: "Execute vision model inference to analyze and describe images with text prompts.",
    category: "models",
    timeout: 360,
    requiredParams: [
      { name: "uploaded_files", type: "array", description: "Array of image files to analyze" },
      { name: "prompt", type: "string", description: "Text prompt describing what to analyze in the image" },
    ],
    optionalParams: [
      { name: "max_output", type: "integer", description: "Maximum tokens to generate" },
      { name: "model_name", type: "string", description: "Vision model to use" },
      { name: "temperature", type: "number", description: "Sampling temperature" },
      { name: "sample", type: "boolean", description: "Whether to use sampling" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      uploaded_files: ["image1.jpg"],
      prompt: "Describe what you see in this image",
      model_name: "llava-v1.6",
      api_key: "your-api-key",
    },
    exampleResponse: { llm_response: "I can see a beautiful landscape with mountains in the background..." },
    isStreaming: false,
  },
  {
    id: "vision_stream",
    name: "Vision stream",
    method: "POST",
    endpoint: "/vision_stream/",
    description: "Generate a streaming inference response from vision model for real-time image analysis.",
    category: "models",
    timeout: 360,
    requiredParams: [
      { name: "uploaded_files", type: "array", description: "Array of image files to analyze" },
      { name: "model_name", type: "string", description: "Vision model to use for streaming" },
      { name: "prompt", type: "string", description: "Text prompt for image analysis" },
    ],
    optionalParams: [
      { name: "max_output", type: "integer", description: "Maximum tokens to generate" },
      { name: "temperature", type: "number", description: "Sampling temperature" },
      { name: "sample", type: "boolean", description: "Whether to use sampling" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      uploaded_files: ["image1.jpg"],
      model_name: "llava-v1.6",
      prompt: "Analyze this image and describe the scene",
      api_key: "your-api-key",
    },
    exampleResponse: { llm_response: "The image shows a bustling city street..." },
    isStreaming: true,
  },
  {
    id: "rank",
    name: "Semantic ranking",
    method: "POST",
    endpoint: "/rank/",
    description: "Execute semantic similarity ranking with reranker model to rank documents by relevance to a query.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "query", type: "string", description: "The search query to rank documents against" },
      { name: "documents", type: "array", description: "Array of documents to rank" },
    ],
    optionalParams: [
      { name: "model_name", type: "string", description: "Reranker model to use" },
      { name: "text_chunk_size", type: "integer", description: "Size of text chunks for processing" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      query: "machine learning algorithms",
      documents: ["Document about neural networks", "Article on cooking recipes", "Paper on deep learning"],
      api_key: "your-api-key",
    },
    exampleResponse: {
      llm_response: '[{"doc_id": 0, "score": 0.95}, {"doc_id": 2, "score": 0.87}, {"doc_id": 1, "score": 0.12}]',
    },
    isStreaming: false,
  },
  {
    id: "classify",
    name: "Text classification",
    method: "POST",
    endpoint: "/classify/",
    description: "Execute text classification inference, primarily used for safety controls and content moderation.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "model_name", type: "string", description: "Classification model to use" },
      { name: "context", type: "string", description: "Text to classify" },
    ],
    optionalParams: [
      { name: "text_chunk_size", type: "integer", description: "Size of text chunks for processing" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      model_name: "safety-classifier",
      context: "This is a sample text to classify for safety",
      api_key: "your-api-key",
    },
    exampleResponse: { llm_response: '{"classification": "safe", "confidence": 0.98}' },
    isStreaming: false,
  },
  {
    id: "embedding",
    name: "Generate embeddings",
    method: "POST",
    endpoint: "/embedding/",
    description: "Generate vector embeddings for text using embedding models for semantic search and similarity.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "model_name", type: "string", description: "Embedding model to use" },
      { name: "context", type: "string", description: "Text to generate embeddings for" },
    ],
    optionalParams: [
      { name: "text_chunk_size", type: "integer", description: "Size of text chunks for processing" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["embeddings"],
    exampleRequest: {
      model_name: "sentence-transformers",
      context: "This is a sample text to embed",
      api_key: "your-api-key",
    },
    exampleResponse: { embeddings: [0.1, -0.2, 0.3, 0.4, -0.1] },
    isStreaming: false,
  },
  // RAG CATEGORY
  {
    id: "document_inference",
    name: "Document Q&A",
    method: "POST",
    endpoint: "/document_inference/",
    description:
      "Specialized inference to ask questions about uploaded documents. Combines document parsing, semantic search, and LLM inference.",
    category: "rag",
    timeout: 60,
    requiredParams: [
      { name: "question", type: "string", description: "Question to ask about the document" },
      { name: "uploaded_document", type: "file", description: "Document file to analyze" },
    ],
    optionalParams: [
      { name: "model_name", type: "string", description: "LLM model to use for answering" },
      { name: "text_chunk_size", type: "integer", description: "Size of text chunks for processing" },
      { name: "tables_only", type: "boolean", description: "Whether to focus only on tables" },
      { name: "use_top_n_context", type: "integer", description: "Number of top context chunks to use" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      question: "What is the main conclusion of this research paper?",
      uploaded_document: "research_paper.pdf",
      model_name: "llama-2-7b",
      api_key: "your-api-key",
    },
    exampleResponse: { response: "Based on the document analysis, the main conclusion is..." },
    isStreaming: false,
  },
  {
    id: "library_inference",
    name: "Library Q&A",
    method: "POST",
    endpoint: "/library_inference/",
    description:
      "Specialized RAG inference that ranks entries from a library and generates responses based on retrieved content.",
    category: "rag",
    timeout: 60,
    requiredParams: [
      { name: "question", type: "string", description: "Question to ask about the library content" },
      { name: "library_name", type: "string", description: "Name of the library to search" },
      { name: "model_name", type: "string", description: "LLM model to use for answering" },
    ],
    optionalParams: [
      { name: "use_top_n_context", type: "integer", description: "Number of top context chunks to use" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      question: "What are the key features of the product?",
      library_name: "product_docs",
      model_name: "llama-2-7b",
      api_key: "your-api-key",
    },
    exampleResponse: { response: "Based on the library content, the key features include..." },
    isStreaming: false,
  },
  // UTILITY/ADMIN CATEGORY
  {
    id: "list_all_models",
    name: "List models",
    method: "POST",
    endpoint: "/list_all_models/",
    description: "Returns a list of all models available on the server.",
    category: "models",
    timeout: 3,
    requiredParams: [],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      trusted_key: "your-trusted-key",
    },
    exampleResponse: { response: ["llama-2-7b", "llama-2-13b", "mistral-7b", "codellama-7b"] },
    isStreaming: false,
  },
  {
    id: "system_info",
    name: "System information",
    method: "POST",
    endpoint: "/system_info/",
    description: "Returns key information about the system and server configuration.",
    category: "models",
    timeout: 3,
    requiredParams: [],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      trusted_key: "your-trusted-key",
    },
    exampleResponse: { response: { version: "1.0.0", gpu_count: 2, memory: "32GB", status: "active" } },
    isStreaming: false,
  },
  {
    id: "model_lookup",
    name: "Model information",
    method: "POST",
    endpoint: "/model_lookup/",
    description: "Returns detailed model card information about a selected model.",
    category: "models",
    timeout: 3,
    requiredParams: [{ name: "model_name", type: "string", description: "Name of the model to look up" }],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      model_name: "llama-2-7b",
      trusted_key: "your-trusted-key",
    },
    exampleResponse: { response: { name: "llama-2-7b", parameters: "7B", context_length: 4096, loaded: true } },
    isStreaming: false,
  },
]
```
