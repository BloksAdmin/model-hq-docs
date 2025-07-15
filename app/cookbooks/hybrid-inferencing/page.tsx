import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function HybridInferencingPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/bots">Cookbooks</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Hybrid Inferencing</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Hybrid Inferencing using Model HQ (AI PC + API Server)</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <h2>Goal</h2>
        <p>
          Seamlessly combine local and server-based inference modes—chat, agents, and semantic search—all from one
          interface.
        </p>

        <p>
          This walkthrough is built for developers or technical practitioners looking to toggle between local AI PC
          inferencing and API server-based inference, including how to access remote vector libraries, run agents
          remotely, and build enterprise-wide RAG pipelines.
        </p>

        <p>
          This walkthrough is also demonstrated step-by-step on our YouTube channel{" "}
          <a style={{ color: "#FF0000" }} href="https://youtu.be/lMQwcw0TeVM" target="_blank" rel="noopener noreferrer">
            https://youtu.be/lMQwcw0TeVM
          </a>.
        </p>

        <h2>Requirements</h2>
        <div className="not-prose">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tool</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Model HQ (on AI PC)</td>
                  <td className="border border-gray-300 px-4 py-2">Run local inference and manage flows</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Model HQ API Server</td>
                  <td className="border border-gray-300 px-4 py-2">Run inference remotely; host vector DB</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Vector DB</td>
                  <td className="border border-gray-300 px-4 py-2">Store document embeddings (included in Model HQ)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Sample PDFs/Text Docs</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Created from source material included with Model HQ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            <div className="border border-gray-300 rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-lg mb-2">Model HQ (on AI PC)</h3>
              <p className="text-sm">Run local inference and manage flows</p>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold text-lg mb-2">Model HQ API Server</h3>
              <p className="text-sm">Run inference remotely; host vector DB</p>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-lg mb-2">Vector DB</h3>
              <p className="text-sm">Store document embeddings (included in Model HQ)</p>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold text-lg mb-2">Sample PDFs/Text Docs</h3>
              <p className="text-sm">Created from source material included with Model HQ</p>
            </div>
          </div>
        </div>

        <h2 id="step-1">1. Connect Model HQ Desktop to the API Server</h2>

        <h3>1.1 Launch the Model HQ App on your AI PC</h3>
        <ul>
          <li>Ensure your AI PC is network-accessible to the API server</li>
          <li>
            Select the <strong>Configure</strong> button on the top right of the app
          </li>
          <li>
            Go to <strong>App</strong> in the Model HQ Configuration Center
          </li>
          <li>
            Toggle <strong>Connected Enterprise Servers</strong> to <strong>ON</strong>
            <img src="/cookbooks/hybrid-inferencing/enterprise.png" alt="Turn ON Enterprise" />
          </li>
          <li>
            Click <code>{">"}</code> at the bottom of the screen
          </li>
        </ul>

        <h3>1.2 Confirm Server Discoverability</h3>
        <ul>
          <li>
            When connected, a <strong>Library</strong> button appears on the Main Menu bar
            <img src="/cookbooks/hybrid-inferencing/library.png" alt="Library Button" />
          </li>
          <li>
            This unlocks access to:
            <ul>
              <li>Chats and agents locally or through API</li>
              <li>Vector search libraries hosted on the API server</li>
              <li>Remote model options (e.g., larger LLMs)</li>
              <li>Server-side agents</li>
            </ul>
          </li>
        </ul>

        <h2 id="step-2">2. Run Chat Inference Locally or via Server</h2>

        <h3>2.1 Start a New Chatbot Session</h3>
        <ul>
          <li>
            From the Main Menu, go to <strong>Bots</strong>
          </li>
          <li>
            You'll see local bots like <strong>Fast Start Chatbot</strong> or <strong>Model HQ Biz Bot</strong>
          </li>
          <li>
            You'll also see server-based bots like <strong>Model HQ API Server Biz Bot</strong>
          </li>
          <li>
            Select the server bot and click <code>{">"}</code>
          </li>
          <li>
            Choose a model (e.g., <strong>Phi-4-ov</strong>) running on the server
            <img src="/cookbooks/hybrid-inferencing/phi4.png" alt="phi4-ov" />
          </li>
          <li>Begin chatting with the model</li>
        </ul>

        <h3>2.2 What Happens Behind the Scenes</h3>
        <ul>
          <li>
            <strong>Local Mode</strong>: Query processed by local model (e.g., 7B)
          </li>
          <li>
            <strong>Server Mode</strong>: Request sent over API to Model HQ Server
            <ul>
              <li>Can be hosted on cloud, datacenter, or office server</li>
              <li>Example: 14B parameter model</li>
              <li>Response is returned and shown in chat</li>
            </ul>
          </li>
        </ul>

        <h2 id="step-3">3. Use Remote Knowledge with Local Inference (Hybrid RAG)</h2>

        <h3>3.1 Start a Local Chat Session</h3>
        <ul>
          <li>
            From the Main Menu, select <strong>Chat</strong>
          </li>
          <li>
            Choose <strong>Medium (7B) – Analysis and Typical RAG</strong>, then click <code>{">"}</code>
            <img src="/cookbooks/hybrid-inferencing/mediumBot.png" alt="Medium Bot" />
          </li>
        </ul>

        <h3>3.2 Connect to Remote Knowledge Base</h3>
        <ul>
          <li>
            Once chatbot is open, click <strong>Source</strong>
          </li>
          <li>
            Select a server-hosted library (e.g., <code>UN_Resolutions_0527</code>)
            <ul>
              <li>If no pre-created source exists, follow Step 5 to build one</li>
            </ul>
            <img src="/cookbooks/hybrid-inferencing/source.png" alt="Source" />
          </li>
        </ul>

        <h3>3.3 Enter a RAG-style Question</h3>
        <p>
          Example:
          <br />
          <strong>"What are the resolutions related to Ukraine?"</strong>
        </p>

        <h3>3.4 What Happens</h3>
        <ul>
          <li>Vector search is executed on the API server</li>
          <li>Retrieved documents are returned to your AI PC</li>
          <li>Local model performs inference over those chunks</li>
          <li>
            You see:
            <ul>
              <li>Full source references</li>
              <li>Answer generated on-device</li>
              <li>No tokens leave your machine</li>
            </ul>
          <img src="/cookbooks/hybrid-inferencing/results.png" alt="Output" />
          </li>
        </ul>

        <h2 id="step-4">4. Run Agent Workflows on the API Server</h2>

        <h3>4.1 Choose a Prebuilt or Custom Agent</h3>
        <ul>
          <li>
            From the Main Menu, go to <strong>Agents</strong>
          </li>
          <li>
            Select <strong>Intake Processing</strong>, then click <strong>Run as API</strong>
            <img src="/cookbooks/hybrid-inferencing/API.png" alt="Run as API" />
          </li>
        </ul>

        <h3>4.2 Provide Input</h3>
        <ul>
          <li>
            On the input screen, click <strong>Choose File</strong>
          </li>
          <li>
            Select:
            <br />
            <code>C:\Users\[username]\llmware_data\sample_files\customer_transcripts\customer_transcript_1.txt</code>
            <img src="/cookbooks/hybrid-inferencing/chooseFile.png" alt="Choose Files" />
          </li>
          <li>
            Click <code>{">"}</code>, confirm input appears, then continue
          </li>
        </ul>

        <h3>4.3 What Happens</h3>
        <ul>
          <li>Agent process and input are sent over API</li>
          <li>Agent runs fully on the API Server</li>
          <li>Results are returned to the AI PC and displayed</li>
        </ul>

        <h2 id="step-5">5. Build a Shared Semantic Library with Vector DB</h2>

        <h3>5.1 Create a New Library</h3>
        <ul>
          <li>
            Click <strong>Library</strong> from the Main Menu
          </li>
          <li>
            Select <strong>Build New</strong>
          </li>
          <li>
            Name your library (e.g., <strong>agreements</strong>)
          </li>
          <img src="/cookbooks/hybrid-inferencing/newLibrary.png" alt="New Library" />
        </ul>

        <h3>5.2 Upload Source Files</h3>
        <ul>
          <li>
            Click <strong>+Add Files</strong>
          </li>
          <li>
            Choose ~20 PDFs from:
            <br />
            <code>C:\Users\[username]\llmware_data\sample_files\UN-Resolutions-500</code>
          </li>
          <li>
            Select <strong>Done</strong>
          </li>
          <li>Files are sent to the API server</li>
        </ul>

        <h3>5.3 Configure Embedding Settings</h3>
        <ul>
          <li>
            Go to:
            <br />
            <strong>
              Library Actions {">"} Library {">"} [your library name]
            </strong>
          </li>
          <li>
            Click <strong>Create Embedding</strong>
          </li>
          <img src="/cookbooks/hybrid-inferencing/embedding.png" alt="Create Embedding" />
        </ul>

        <h3>5.4 Trigger Embedding</h3>
        <ul>
          <li>
            Select an embedding model (e.g., <strong>all-mini-lm-l6-v2-ov</strong>)
            <img src="/cookbooks/hybrid-inferencing/mini.png" alt="Trigger" />
          </li>
          <li>
            Click <code>{">"}</code> to start embedding process
          </li>
        </ul>

        <p>
          <strong>Model HQ will:</strong>
        </p>
        <ul>
          <li>Parse and chunk documents</li>
          <li>Create embeddings</li>
          <li>Store them in the server-hosted vector DB</li>
        </ul>

        <p>Once complete, you'll see the library info and embeddings summary.</p>
        <img src="/cookbooks/hybrid-inferencing/final.png" alt="Final State" />

        <h3>5.5 What You Now Have</h3>
        <ul>
          <li>A shareable, queryable knowledge base</li>
          <li>Indexed and hosted on the API server</li>
          <li>Accessible to any Model HQ user connected to the server</li>
        </ul>

        <h2 id="step-6">6. Use That Library in Any Chat or Agent Flow</h2>

        <h3>6.1 Return to Chat</h3>
        <ul>
          <li>Open a local or server-run chat</li>
          <li>
            In <strong>Sources</strong>, select your newly created vector library
          </li>
        </ul>

        <h3>6.2 Ask Questions</h3>
        <ul>
          <li>Type natural-language queries related to your document domain</li>
        </ul>

        <h3>6.3 See Results</h3>
        <ul>
          <li>Vector search occurs remotely</li>
          <li>Context is retrieved</li>
          <li>Inference runs locally or on the server (your choice)</li>
          <img src="/cookbooks/hybrid-inferencing/Details.png" alt="Detailed output" />
        </ul>

        <h2>Summary: Hybrid Modes You Can Mix and Match</h2>
        <div className="not-prose">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Pattern</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Vector Search</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Inference</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Trigger From</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Local-Only</td>
                  <td className="border border-gray-300 px-4 py-2">Local files</td>
                  <td className="border border-gray-300 px-4 py-2">AI PC</td>
                  <td className="border border-gray-300 px-4 py-2">Desktop</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Server-Only</td>
                  <td className="border border-gray-300 px-4 py-2">Server KB</td>
                  <td className="border border-gray-300 px-4 py-2">API Server</td>
                  <td className="border border-gray-300 px-4 py-2">Desktop</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Hybrid RAG</td>
                  <td className="border border-gray-300 px-4 py-2">Server KB</td>
                  <td className="border border-gray-300 px-4 py-2">AI PC</td>
                  <td className="border border-gray-300 px-4 py-2">Desktop</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Remote Agent</td>
                  <td className="border border-gray-300 px-4 py-2">N/A or Server</td>
                  <td className="border border-gray-300 px-4 py-2">API Server</td>
                  <td className="border border-gray-300 px-4 py-2">Desktop</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Full API</td>
                  <td className="border border-gray-300 px-4 py-2">All remote</td>
                  <td className="border border-gray-300 px-4 py-2">API Server</td>
                  <td className="border border-gray-300 px-4 py-2">External app</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            <div className="border border-gray-300 rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-lg mb-2">Local-Only</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Vector Search:</span> Local files
                </div>
                <div>
                  <span className="font-medium">Inference:</span> AI PC
                </div>
                <div>
                  <span className="font-medium">Trigger From:</span> Desktop
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold text-lg mb-2">Server-Only</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Vector Search:</span> Server KB
                </div>
                <div>
                  <span className="font-medium">Inference:</span> API Server
                </div>
                <div>
                  <span className="font-medium">Trigger From:</span> Desktop
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-lg mb-2">Hybrid RAG</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Vector Search:</span> Server KB
                </div>
                <div>
                  <span className="font-medium">Inference:</span> AI PC
                </div>
                <div>
                  <span className="font-medium">Trigger From:</span> Desktop
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold text-lg mb-2">Remote Agent</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Vector Search:</span> N/A or Server
                </div>
                <div>
                  <span className="font-medium">Inference:</span> API Server
                </div>
                <div>
                  <span className="font-medium">Trigger From:</span> Desktop
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-lg mb-2">Full API</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Vector Search:</span> All remote
                </div>
                <div>
                  <span className="font-medium">Inference:</span> API Server
                </div>
                <div>
                  <span className="font-medium">Trigger From:</span> External app
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>Pro Tips</h2>
        <ul>
          <li>
            Use <strong>local inference</strong> when privacy or offline access is important
          </li>
          <li>
            Use <strong>server inference</strong> for larger models or batch processing
          </li>
          <li>
            Build <strong>shared vector libraries</strong> for team-wide semantic search
          </li>
          <li>All toggles and source configurations are available in a single UI—no CLI required</li>
        </ul>
      </div>
    </div>
  )
}
