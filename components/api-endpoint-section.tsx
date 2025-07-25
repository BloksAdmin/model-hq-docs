import { Badge } from "@/components/ui/badge"
import { CodeBlockWithCopy } from "@/components/code-block-with-copy"

interface Parameter {
  name: string
  type: string
  description: string
  default?: string
}

interface ApiEndpointSectionProps {
  endpoint: {
    id: string
    name: string
    method: string
    endpoint: string
    description: string
    category: string
    timeout: number
    requiredParams: Parameter[]
    optionalParams: Parameter[]
    response: string[]
    exampleRequest: any
    exampleResponse: any
    isStreaming: boolean
  }
  isLast?: boolean
}

export function ApiEndpointSection({ endpoint, isLast }: ApiEndpointSectionProps) {
  // Generate curl example
  const curlExample = `curl -X ${endpoint.method} "https://api.modelhq.com${endpoint.endpoint}" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(endpoint.exampleRequest, null, 2)}'`

  // Generate Python example
  const pythonExample = `import requests
import json

url = "https://api.modelhq.com${endpoint.endpoint}"
headers = {
    "Content-Type": "application/json"
}
data = ${JSON.stringify(endpoint.exampleRequest, null, 4)}

response = requests.post(url, headers=headers, json=data)
${
  endpoint.isStreaming
    ? `
# For streaming responses
for line in response.iter_lines():
    if line:
        print(line.decode('utf-8'))`
    : `
# For complete responses
result = response.json()
print(json.dumps(result, indent=2))`
}`

  const requestCode = {
    curl: curlExample,
    python: pythonExample,
  }

  // Format response as proper JSON
  const formatResponse = () => {
    if (endpoint.isStreaming) {
      return `// Streaming response format
data: {"llm_response": "Quantum computing is a revolutionary approach to computation that"}

data: {"llm_response": " leverages the principles of quantum mechanics to process information"}

data: {"llm_response": " in ways that classical computers cannot..."}

data: [DONE]`
    } else {
      return JSON.stringify(endpoint.exampleResponse, null, 2)
    }
  }

  return (
    <section className={`py-12 ${!isLast ? "border-b" : ""}`} id={endpoint.id}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Documentation */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="font-mono text-xs px-2 py-1">
                  {endpoint.method}
                </Badge>
                <code className="text-lg font-semibold">{endpoint.endpoint}</code>
              </div>
              <h2 className="text-2xl font-semibold mb-3">{endpoint.name}</h2>
              <p className="text-muted-foreground text-base leading-relaxed">{endpoint.description}</p>
            </div>

            {/* Request Body */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Request body</h3>

              {/* Required Parameters */}
              {endpoint.requiredParams.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-red-600 mb-3">Required</h4>
                  <div className="space-y-4">
                    {endpoint.requiredParams.map((param) => (
                      <div key={param.name} className="border-l-2 border-red-200 pl-4">
                        <div className="flex items-center gap-2 mb-1">
                          <code className="text-sm font-medium">{param.name}</code>
                          <Badge variant="secondary" className="text-xs">
                            {param.type}
                          </Badge>
                          <Badge variant="destructive" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{param.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Optional Parameters */}
              {endpoint.optionalParams.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-blue-600 mb-3">Optional</h4>
                  <div className="space-y-4">
                    {endpoint.optionalParams.map((param) => (
                      <div key={param.name} className="border-l-2 border-blue-200 pl-4">
                        <div className="flex items-center gap-2 mb-1">
                          <code className="text-sm font-medium">{param.name}</code>
                          <Badge variant="secondary" className="text-xs">
                            {param.type}
                          </Badge>
                          {param.default && (
                            <Badge variant="outline" className="text-xs">
                              default: {param.default}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{param.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Response */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Returns</h3>
              <div className="border-l-2 border-green-200 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-sm font-medium">llm_response</code>
                  <Badge variant="secondary" className="text-xs">
                    string
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {endpoint.isStreaming
                    ? "Partial response text streamed incrementally as server-sent events"
                    : "Complete generated response from the model"}
                </p>
              </div>

              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm">
                  <strong>Timeout:</strong> This endpoint has a timeout of {endpoint.timeout} seconds.
                  {endpoint.isStreaming && " The connection remains open for streaming responses."}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Code Examples */}
          <div className="space-y-6">
            {/* Request Example */}
            <CodeBlockWithCopy title="Request" code={requestCode} showLanguageSelector={true} />

            {/* Response Example */}
            <CodeBlockWithCopy title="Response" code={formatResponse()} />

            {/* Additional Info */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Additional Information</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Category: {endpoint.category}</li>
                <li>• Timeout: {endpoint.timeout} seconds</li>
                {endpoint.isStreaming && <li>• Supports streaming responses</li>}
                <li>• Requires authentication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
