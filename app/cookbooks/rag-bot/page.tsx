import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function RAGBotPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
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
                        <BreadcrumbPage>RAG Bot</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">RAG Bot</h1>
            </div>

            <div className="prose prose-gray max-w-none">
                <p>
                    The RAG Bot offers a fast and flexible way to analyze and extract insights from enterprise documents like
                    executive employment agreements, MSAs, and NDAs. Using a Retrieval-Augmented Generation (RAG) architecture,
                    this bot supports multiple modes of interaction including chatbot, agent, batch processing, and API
                    integration; making it ideal for business users, analysts, and developers alike. With no setup code required,
                    users can quickly ask natural language questions, run multi-step agent workflows, and scale analysis across
                    large volumes of documents, all from a single no-code platform.
                </p>

                <h2>Use Case</h2>
                <p>
                    Analyze and extract key information from executive employment agreements (a stand-in for many enterprise
                    documents like MSAs, NDAs, research papers, etc.) using Model HQ's <strong>Chat</strong>,{" "}
                    <strong>Agent</strong>, and <strong>API</strong> modes.
                </p>

                <h2>Prerequisites</h2>
                <ul>
                    <li>Model HQ installed locally</li>
                    <li>
                        A set of executive employment agreement PDFs (located at:
                        <br />
                        <code>
                            C:\users\[username]\llmware_data\sample_files\agreements\[list of 12 executive employment agreements]
                        </code>
                        )
                        <p><br /></p>
                        <img src="/cookbooks/rag-bot/docPath.png" alt="doc path" />
                    </li>
                    <li>An AI PC or local server</li>
                    <li>
                        <em>(Optional)</em> Python development environment for API integration
                    </li>
                </ul>

                <h2>Step-by-Step Recipe</h2>

                <h3 id="chatbot-mode">1. Start with Local Chatbot Mode (Fast Start)</h3>
                <p>
                    <strong>Purpose</strong>: Quickly chat with a document using an out-of-the-box RAG bot.
                </p>

                <h4>Steps:</h4>
                <ul>
                    <li>Launch Model HQ locally</li>
                    <li>
                        Open the <strong>Fast Start</strong>, select <strong>Medium Chatbot</strong>
                    </li>
                    <li>
                        Attach an Executive Employment Agreement document
                        <br />
                        (e.g., 15-page PDF found at:
                        <br />
                        <code>C:\users\[username]\llmware_data\sample_files\agreements\</code>)
                    </li>
                    <li>Model HQ auto-ingests, parses, and chunks the document (~1s)</li>
                    <li>
                        Ask natural language questions like:
                        <ul>
                            <li>"What's the effective date of the agreement?"</li>
                            <li>"How many vacation days is the executive entitled to?"</li>
                            <li>"What is the executive's annual base salary?"</li>
                        </ul>
                    </li>
                </ul>

                <p>Model HQ will return:</p>
                <ul>
                    <li>Detailed answers</li>
                    <li>Source page references</li>
                    <li>Option to save/download chat transcripts</li>
                </ul>

                <img src="/cookbooks/rag-bot/executiveEmploymentAgreement.png" alt="Executive Employment Agreement" />

                <p>&nbsp;</p>

                <h3 id="agent-analysis">2. Run Agent-Based Analysis (Single Document)</h3>
                <p>
                    <strong>Purpose</strong>: Automate multi-step document review using a reusable agent.
                </p>

                <h4>Steps:</h4>
                <ul>
                    <li>
                        Switch to <strong>Agent Mode</strong> from Home
                    </li>
                    <li>
                        Select the built-in <strong>Contract Analyzer Agent</strong>
                        <img src="/cookbooks/rag-bot/contractAnalyzer.png" alt="Contract Analyzer" />
                    </li>
                    <li>
                        Upload a document from the <code>agreements</code> folder
                    </li>
                    <li>Agent will run 3 predefined questions (e.g., compensation, start date, termination clause)</li>
                    <li>
                        Output includes:
                        <ul>
                            <li>Full inference log</li>
                            <li>
                                Files in <code>.json</code>, <code>.docx</code>, and <code>.txt</code> formats
                            </li>
                        </ul>
                    </li>
                </ul>

                <blockquote>
                    <p>
                        Bonus: Customize the questions, add/delete steps, or expand as needed. Read more about this <a href="https://model-hq-docs.vercel.app/agent/create-new-agent">here</a>.
                    </p>
                </blockquote>

                <p>&nbsp;</p>

                <h3 id="batch-mode">3. Scale with Batch Agent Mode (Multiple Documents)</h3>
                <p>
                    <strong>Purpose</strong>: Analyze dozens or hundreds of agreements in one go.
                </p>

                <h4>Steps:</h4>
                <ul>
                    <li>
                        Go to <strong>Agent {">"} Load Existing</strong>, select <strong>ContractAnalyzer</strong>
                    </li>
                    <li>
                        Choose <strong>Batch Processing</strong> in the UI
                    </li>
                    <li>
                        Upload multiple documents (e.g., first 5 from the sample agreements folder)
                        <br />
                        <code>C:\users\[username]\llmware_data\sample_files\agreements\</code>
                    </li>
                    <li>Agent will iterate through each document and apply consistent questions</li>
                </ul>

                <p>
                    <strong>Final Output</strong>:
                </p>
                <ul>
                    <li>Consolidated table of answers</li>
                    <li>Downloadable spreadsheet or report</li>
                    <li>Supports aggregation, comparison, and audit workflows</li>
                </ul>

                <p>&nbsp;</p>

                <h3 id="api-mode">4. Enable Backend API Mode (For Developers)</h3>
                <p>
                    <strong>Purpose</strong>: Integrate Model HQ into custom applications via API.
                </p>

                <h4>Steps:</h4>
                <ol>
                    <li>
                        Launch Model HQ as a local backend server:
                        <ul>
                            <li>Option 1: Localhost</li>
                            <li>Option 2: Mini API server for LAN access</li>
                        </ul>
                    </li>
                    <li>Access the API using the Model HQ Python client</li>
                </ol>

                <h4>Two Integration Modes:</h4>

                <p>
                    <strong>a. Agent Run via API</strong>
                </p>
                <pre>
                    <code>{`from modelhq_client import ModelHQ

client = ModelHQ()
result = client.run_agent(file="mycontract.pdf", agent="contract_analyzer")`}</code>
                </pre>

                <p>
                    <strong>b. Batch Folder Run via API</strong>
                </p>
                <pre>
                    <code>{`questions = ["How much is the base salary?", "What is the termination clause?"]
client.batch_analyze(folder="agreements_folder", questions=questions)`}</code>
                </pre>

                <p>
                    <strong>Output Includes</strong>:
                </p>
                <ul>
                    <li>Answers per document per question</li>
                    <li>Extracted text (optional) for storage or audits</li>
                </ul>

                <h2>🧪 Output Options</h2>
                <ul>
                    <li>
                        Word report (<code>.docx</code>)
                    </li>
                    <li>
                        Excel spreadsheet (<code>.xlsx</code>)
                    </li>
                    <li>API JSON payload</li>
                    <li>Raw extracted text</li>
                    <li>Full inference history</li>
                </ul>

                <h2>🛠 Example Use Cases</h2>
                <ul>
                    <li>HR team reviewing executive compensation</li>
                    <li>Legal comparing MSA clauses</li>
                    <li>Compliance tracking employment clauses</li>
                    <li>Developers building internal search tools</li>
                </ul>

                <h2>Summary of Interaction Modes</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Mode</th>
                                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">User Type</th>
                                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Input</th>
                                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Output</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">
                                    <strong>Chatbot (UI)</strong>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">Non-technical</td>
                                <td className="border border-gray-300 px-4 py-2">Single document</td>
                                <td className="border border-gray-300 px-4 py-2">Chat + answers + source references</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">
                                    <strong>Agent (UI)</strong>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">Analysts, HR</td>
                                <td className="border border-gray-300 px-4 py-2">Single document</td>
                                <td className="border border-gray-300 px-4 py-2">Structured report</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">
                                    <strong>Batch Agent</strong>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">Ops/Compliance</td>
                                <td className="border border-gray-300 px-4 py-2">Folder of documents</td>
                                <td className="border border-gray-300 px-4 py-2">Consolidated output, bulk analysis</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">
                                    <strong>API</strong>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">Developers</td>
                                <td className="border border-gray-300 px-4 py-2">Files, questions</td>
                                <td className="border border-gray-300 px-4 py-2">JSON/text for apps, dashboards, workflows</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>&nbsp;</p>

                <p>
                    If you encounter any issues while updating your model configuration, feel free to contact our support team at <code>support@aibloks.com</code>
                </p>
            </div>
        </div>
    )
}
