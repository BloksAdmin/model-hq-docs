import type { Metadata } from "next"
import { ApiEndpointSection } from "@/components/api-endpoint-section"

export const metadata: Metadata = {
  title: "API Reference - Model HQ",
  description: "Complete API reference for Model HQ endpoints",
}

const endpoints = [
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
        default: "0.0",
      },
      { name: "sample", type: "boolean", description: "Whether to use sampling for generation", default: "true" },
      { name: "context", type: "string", description: "Additional context to provide to the model" },
      { name: "api_key", type: "string", description: "Your API authentication key" },
      { name: "trusted_key", type: "string", description: "Alternative trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      model_name: "phi-3-ov",
      prompt: "Explain quantum computing in simple terms",
      max_output: 300,
      temperature: 0.7,
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
      model_name: "llama-3.2-3b-instruct-ov",
      max_output: 100,
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
      model_name: "phi-3-ov",
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
      model_name: "mistral-7b-instruct-v0.3-ov",
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
      model_name: "llama-3.2-3b-instruct-ov",
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
      model_name: "phi-4-ov",
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
      model_name: "llama-3.2-3b-instruct-ov",
      context: "This is a sample text to embed",
      api_key: "your-api-key",
    },
    exampleResponse: { embeddings: [0.1, -0.2, 0.3, 0.4, -0.1] },
    isStreaming: false,
  },
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
    exampleResponse: {
      response: ["llama-3.2-1b-instruct-ov", "llama-3.2-3b-instruct-ov", "mistral-7b-instruct-v0.3-ov", "phi-4-ov"],
    },
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
      model_name: "mistral-7b-instruct-v0.3-ov",
      trusted_key: "your-trusted-key",
    },
    exampleResponse: {
      response: { name: "mistral-7b-instruct-v0.3-ov", parameters: "7B", context_length: 4096, loaded: true },
    },
    isStreaming: false,
  },
  {
    id: "model_load",
    name: "Load model",
    method: "POST",
    endpoint: "/model_load/",
    description: "Explicitly loads a selected model into memory on the API server, useful as a preparation step.",
    category: "models",
    timeout: 120,
    requiredParams: [{ name: "model_name", type: "string", description: "Name of the model to load into memory" }],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      model_name: "phi-4-ov",
      trusted_key: "your-trusted-key",
    },
    exampleResponse: { response: { model_name: "phi-4-ov", status: "loaded", memory_usage: "6.2GB" } },
    isStreaming: false,
  },
  {
    id: "model_unload",
    name: "Unload model",
    method: "POST",
    endpoint: "/model_unload/",
    description: "Explicitly unloads a selected model from memory on the API server.",
    category: "models",
    timeout: 30,
    requiredParams: [{ name: "model_name", type: "string", description: "Name of the model to unload from memory" }],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      model_name: "llama-3.2-1b-instruct-ov",
      trusted_key: "your-trusted-key",
    },
    exampleResponse: {
      response: { model_name: "llama-3.2-1b-instruct-ov", status: "unloaded", memory_freed: "6.2GB" },
    },
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
      model_name: "phi-3-ov",
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
      model_name: "llama-3.2-3b-instruct-ov",
      api_key: "your-api-key",
    },
    exampleResponse: { response: "Based on the library content, the key features include..." },
    isStreaming: false,
  },
  {
    id: "document_batch_analysis",
    name: "Batch document analysis",
    method: "POST",
    endpoint: "/document_batch_analysis/",
    description:
      "Analyzes multiple documents with a set of questions, ideal for processing contracts, invoices, or reports with consistent queries.",
    category: "rag",
    timeout: 600,
    requiredParams: [
      { name: "uploaded_files", type: "array", description: "Array of documents to analyze" },
      { name: "question_list", type: "array", description: "List of questions to ask each document" },
    ],
    optionalParams: [
      { name: "model_name", type: "string", description: "LLM model to use for analysis" },
      { name: "reranker", type: "string", description: "Reranker model for result optimization" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      uploaded_files: ["contract1.pdf", "contract2.pdf"],
      question_list: ["What is the governing law?", "What is the termination notice period?"],
      model_name: "mistral-7b-instruct-v0.3-ov",
      api_key: "your-api-key",
    },
    exampleResponse: {
      response: {
        results: [
          { document: "contract1.pdf", answers: ["Delaware", "30 days"] },
          { document: "contract2.pdf", answers: ["California", "60 days"] },
        ],
      },
    },
    isStreaming: false,
  },
  // LIBRARY MANAGEMENT CATEGORY
  {
    id: "create_new_library",
    name: "Create library",
    method: "POST",
    endpoint: "/create_new_library/",
    description:
      "Creates a new library which is a collection of documents that are parsed, indexed and organized for knowledge retrieval.",
    category: "library",
    timeout: 30,
    requiredParams: [{ name: "library_name", type: "string", description: "Name for the new library" }],
    optionalParams: [
      { name: "account_id", type: "string", description: "Account identifier" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      account_id: "user123",
      api_key: "your-api-key",
    },
    exampleResponse: { response: { library_name: "contract_library", status: "created", doc_count: 0 } },
    isStreaming: false,
  },
  {
    id: "add_files",
    name: "Add files to library",
    method: "POST",
    endpoint: "/add_files/",
    description:
      "Core method for adding files to a Library, which are parsed, text chunked and indexed automatically upon upload.",
    category: "library",
    timeout: 300,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to add files to" },
      { name: "uploaded_files", type: "array", description: "Array of files to upload and process" },
    ],
    optionalParams: [
      { name: "account_id", type: "string", description: "Account identifier" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      uploaded_files: ["contract1.pdf", "contract2.pdf"],
      api_key: "your-api-key",
    },
    exampleResponse: { response: { files_processed: 2, chunks_created: 45, status: "completed" } },
    isStreaming: false,
  },
  {
    id: "query",
    name: "Query library",
    method: "POST",
    endpoint: "/query/",
    description: "Execute a text-based query against an existing library to find relevant documents and passages.",
    category: "library",
    timeout: 60,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to query" },
      { name: "user_query", type: "string", description: "Search query text" },
    ],
    optionalParams: [
      { name: "result_count", type: "integer", description: "Number of results to return" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      user_query: "termination clauses",
      result_count: 10,
      api_key: "your-api-key",
    },
    exampleResponse: { response: [{ doc_id: 1, text: "Termination clause content...", score: 0.95 }] },
    isStreaming: false,
  },
  {
    id: "get_library_card",
    name: "Get library info",
    method: "POST",
    endpoint: "/get_library_card/",
    description:
      "Get comprehensive metadata information about a library including document count, embedding status, and configuration.",
    category: "library",
    timeout: 10,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to get information for" },
    ],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      api_key: "your-api-key",
    },
    exampleResponse: {
      response: {
        library_name: "contract_library",
        doc_count: 25,
        embedding_status: "installed",
        created_date: "2024-01-15",
      },
    },
    isStreaming: false,
  },
  {
    id: "install_embedding",
    name: "Install embeddings",
    method: "POST",
    endpoint: "/install_embedding/",
    description:
      "Installs vector embeddings across a library and creates the appropriate vectors in the vector database for semantic search.",
    category: "library",
    timeout: 600,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to install embeddings for" },
    ],
    optionalParams: [
      { name: "embedding_model", type: "string", description: "Embedding model to use" },
      { name: "vector_db", type: "string", description: "Vector database to use" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      embedding_model: "llama-3.2-1b-instruct-ov",
      api_key: "your-api-key",
    },
    exampleResponse: { response: { embeddings_created: 1250, vector_db: "milvus", status: "completed" } },
    isStreaming: false,
  },
  {
    id: "semantic_query",
    name: "Semantic search",
    method: "POST",
    endpoint: "/semantic_query/",
    description:
      "Executes a semantic/vector query against embeddings for more accurate content retrieval based on meaning rather than keywords.",
    category: "library",
    timeout: 60,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to search" },
      { name: "user_query", type: "string", description: "Semantic search query" },
    ],
    optionalParams: [
      { name: "result_count", type: "integer", description: "Number of results to return" },
      { name: "db", type: "string", description: "Database type", default: "mongo" },
      { name: "vector_db", type: "string", description: "Vector database type", default: "milvus" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      user_query: "contract termination conditions",
      result_count: 5,
      api_key: "your-api-key",
    },
    exampleResponse: { response: [{ doc_id: 1, similarity_score: 0.92, text: "Contract termination..." }] },
    isStreaming: false,
  },
  {
    id: "get_document_list",
    name: "List documents",
    method: "POST",
    endpoint: "/get_document_list/",
    description: "Returns a comprehensive list of all documents contained in a specific library with metadata.",
    category: "library",
    timeout: 30,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to list documents from" },
    ],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      api_key: "your-api-key",
    },
    exampleResponse: {
      response: [
        { doc_id: 1, filename: "contract1.pdf", pages: 12, upload_date: "2024-01-15" },
        { doc_id: 2, filename: "contract2.pdf", pages: 8, upload_date: "2024-01-16" },
      ],
    },
    isStreaming: false,
  },
  {
    id: "get_document_text",
    name: "Extract document text",
    method: "POST",
    endpoint: "/get_document_text/",
    description:
      "Returns the complete text extract of a selected document from a specified library for review or processing.",
    category: "library",
    timeout: 60,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library containing the document" },
    ],
    optionalParams: [
      { name: "doc_id", type: "string", description: "Document ID to extract text from" },
      { name: "doc_fn", type: "string", description: "Document filename to extract text from" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      doc_id: "1",
      api_key: "your-api-key",
    },
    exampleResponse: { response: { doc_id: 1, filename: "contract1.pdf", text: "Full document text content..." } },
    isStreaming: false,
  },
  // AGENT CATEGORY
  {
    id: "run_agent",
    name: "Execute agent",
    method: "POST",
    endpoint: "/run_agent/",
    description:
      "Executes a pre-configured agent process for automated multi-step document analysis and task completion.",
    category: "agent",
    timeout: 300,
    requiredParams: [{ name: "process_name", type: "string", description: "Name of the agent process to execute" }],
    optionalParams: [
      { name: "process_zip", type: "file", description: "Agent process zip file to upload and execute" },
      { name: "input_list", type: "array", description: "List of inputs for the agent process" },
      { name: "text", type: "string", description: "Text input for the agent" },
      { name: "snippet", type: "string", description: "Code or text snippet input" },
      { name: "document_file", type: "file", description: "Document file for agent processing" },
      { name: "table_file", type: "file", description: "Table/spreadsheet file for processing" },
      { name: "image_file", type: "file", description: "Image file for agent analysis" },
      { name: "source_file", type: "file", description: "Source code file for processing" },
      { name: "user_files", type: "array", description: "Additional user files for processing" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      process_name: "contract_analyzer",
      document_file: "contract.pdf",
      input_list: ["analysis_type", "text", "comprehensive"],
      api_key: "your-api-key",
    },
    exampleResponse: {
      response: {
        agent_name: "contract_analyzer",
        status: "completed",
        results: { effective_date: "2024-01-01", base_salary: "$150,000" },
        execution_time: "45s",
      },
    },
    isStreaming: false,
  },
  {
    id: "lookup_agent",
    name: "Find agent",
    method: "POST",
    endpoint: "/lookup_agent/",
    description: "Checks if a specific agent process exists and is available on the server for execution.",
    category: "agent",
    timeout: 10,
    requiredParams: [{ name: "process_name", type: "string", description: "Name of the agent process to look up" }],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      process_name: "contract_analyzer",
      trusted_key: "your-trusted-key",
    },
    exampleResponse: {
      response: {
        process_name: "contract_analyzer",
        available: true,
        description: "Analyzes contracts for key terms",
        version: "1.2.0",
      },
    },
    isStreaming: false,
  },
  {
    id: "get_all_agents",
    name: "List all agents",
    method: "POST",
    endpoint: "/get_all_agents/",
    description: "Returns a comprehensive list of all available agent processes on the server with their capabilities.",
    category: "agent",
    timeout: 10,
    requiredParams: [],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      trusted_key: "your-trusted-key",
    },
    exampleResponse: {
      response: [
        { name: "contract_analyzer", description: "Contract analysis agent", version: "1.2.0" },
        { name: "invoice_processor", description: "Invoice processing agent", version: "1.0.1" },
      ],
    },
    isStreaming: false,
  },
  // UTILITY CATEGORY
  {
    id: "ping",
    name: "Health check",
    method: "POST",
    endpoint: "/ping/",
    description: "Quick health check to verify if the API server is responsive and operational.",
    category: "utility",
    timeout: 5,
    requiredParams: [],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      trusted_key: "your-trusted-key",
    },
    exampleResponse: { response: { status: "ok", timestamp: "2024-01-15T10:30:00Z", version: "1.0.0" } },
    isStreaming: false,
  },
  {
    id: "server_stop",
    name: "Stop server",
    method: "POST",
    endpoint: "/server_stop/",
    description: "Gracefully stops the API server. Use with caution as this will terminate all active connections.",
    category: "utility",
    timeout: 10,
    requiredParams: [],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      trusted_key: "your-trusted-key",
    },
    exampleResponse: { response: { status: "stopping", message: "Server shutdown initiated" } },
    isStreaming: false,
  },
  {
    id: "get_api_catalog",
    name: "API catalog",
    method: "POST",
    endpoint: "/get_api_catalog/",
    description: "Returns a complete catalog of all available API endpoints with their specifications and parameters.",
    category: "utility",
    timeout: 10,
    requiredParams: [],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      trusted_key: "your-trusted-key",
    },
    exampleResponse: {
      response: [
        { api_name: "inference", endpoint: "/inference/", method: "POST", timeout: 60 },
        { api_name: "stream", endpoint: "/stream/", method: "POST", timeout: 60 },
      ],
    },
    isStreaming: false,
  },
  {
    id: "get_db_info",
    name: "Database info",
    method: "POST",
    endpoint: "/get_db_info/",
    description: "Returns information about registered databases and vector databases available on the server.",
    category: "utility",
    timeout: 10,
    requiredParams: [],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      trusted_key: "your-trusted-key",
    },
    exampleResponse: {
      response: {
        databases: ["mongo", "sqlite"],
        vector_databases: ["milvus", "faiss"],
        default_db: "mongo",
        default_vector_db: "milvus",
      },
    },
    isStreaming: false,
  },
]

export default function ApiReferencePage() {
  // Group endpoints by category
  const modelEndpoints = endpoints.filter((e) => e.category === "models")
  const ragEndpoints = endpoints.filter((e) => e.category === "rag")
  const libraryEndpoints = endpoints.filter((e) => e.category === "library")
  const agentEndpoints = endpoints.filter((e) => e.category === "agent")
  const utilityEndpoints = endpoints.filter((e) => e.category === "utility")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">API Reference</h1>
          <p className="text-base text-muted-foreground max-w-3xl">
            The Model HQ API provides programmatic access to our language models through simple HTTP requests. All API
            requests require authentication and return JSON responses.
          </p>
        </div>
      </div>

      {/* Authentication Section */}
      <div className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
              <p className="text-muted-foreground mb-6">
                The Model HQ API uses API keys for authentication. You can obtain your API key from your dashboard.
                Include your API key in the request body or use a trusted key for enhanced security.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">API Key</h4>
                  <p className="text-sm text-muted-foreground">
                    Include your API key in the request body as{" "}
                    <code className="bg-muted px-1 py-0.5 rounded text-xs">api_key</code>
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Trusted Key</h4>
                  <p className="text-sm text-muted-foreground">
                    Alternative authentication using{" "}
                    <code className="bg-muted px-1 py-0.5 rounded text-xs">trusted_key</code> parameter
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-medium mb-3">Example Request</h4>
                <pre className="text-sm overflow-x-auto">
                  <code>{`from llmware_client_sdk import LLMWareClient
client = LLMWareClient(api_endpoint='http://{ip_address}}:{port}/{endpoint}') 

response = client.{endpoint}(
  prompt='Who was the U.S. President in 1996?', 
  model_name='model_name'
)

print('llm response: ', response)`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Models Category */}
      <div className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold mb-4">Models</h2>
          <p className="text-muted-foreground mb-8">
            Core inference endpoints for text generation, vision analysis, and specialized model functions.
          </p>
        </div>
      </div>

      {modelEndpoints.map((endpoint, index) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={false} />
      ))}

      {/* RAG Category */}
      <div className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold mb-4">RAG (Retrieval Augmented Generation)</h2>
          <p className="text-muted-foreground mb-8">
            Document and library-based question answering with semantic search and context retrieval.
          </p>
        </div>
      </div>

      {ragEndpoints.map((endpoint, index) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={false} />
      ))}

      {/* Library Management Category */}
      <div className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold mb-4">Library Management</h2>
          <p className="text-muted-foreground mb-8">
            Create and manage document libraries for knowledge base construction and semantic search capabilities.
          </p>
        </div>
      </div>

      {libraryEndpoints.map((endpoint, index) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={false} />
      ))}

      {/* Agent Category */}
      <div className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold mb-4">Agent Execution</h2>
          <p className="text-muted-foreground mb-8">
            Execute automated multi-step processes and workflows using pre-configured intelligent agents.
          </p>
        </div>
      </div>

      {agentEndpoints.map((endpoint, index) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={false} />
      ))}

      {/* Utility Category */}
      <div className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold mb-4">Utilities & Administration</h2>
          <p className="text-muted-foreground mb-8">
            Server management, health checks, and administrative functions for monitoring and control.
          </p>
        </div>
      </div>

      {utilityEndpoints.map((endpoint, index) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={index === utilityEndpoints.length - 1} />
      ))}
    </div>
  )
}
