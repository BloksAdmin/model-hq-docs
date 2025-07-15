import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function DocumentReviewAnalysisPage() {
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
                        <BreadcrumbPage>Personalized Bot</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Build a No-Code Document Review and Analysis Custom Agent Workflow in Model HQ</h1>
            </div>

            <div className="prose prose-gray max-w-none">
                <p>
                    The No-Code Document Review and Analysis Workflow in Model HQ empowers business users and
                    analysts to build custom document processing agents—without writing a single line of code.
                    Using a visual editor and customizable templates like the Contract Analyzer, users can tailor
                    workflows to fit specific use cases, such as reviewing music license royalty agreements. From
                    editing questions to adding natural language summaries, this workflow enables fast, scalable,
                    and domain-specific analysis that can be tested on single documents or run in batch across
                    entire folders—ready for sharing or backend integration.
                </p>
                <h2>Use Case</h2>
                <p>
                    Custom analysis of music license royalty agreements as an example, derived from an existing{" "}
                    <strong>Contract Analyzer</strong> agent.
                </p>

                <h2>Who This Is For</h2>
                <ul>
                    <li>Business users (HR, Legal, Ops)</li>
                    <li>Developers building custom workflows</li>
                    <li>Analysts automating document review</li>
                </ul>

                <h2>Ingredients (Prerequisites)</h2>
                <ul>
                    <li>Model HQ installed</li>
                    <li>A sample agent (e.g., <strong>Contract Analyzer</strong>) available</li>
                    <li>
                        A sample PDF — e.g., <em>Circe License Agreement for Copyrighted Music</em>
                        <br />
                        (Path: <code>C:\users\[username]\llmware_data\sample_files\AgreementsLarge\Circe License Agreement for Copyrighted Music.pdf</code>)
                        <p><br /></p>
                        <img src="/cookbooks/document-analysis/circleLicense.png" alt="doc path" />
                    </li>
                    <li>No coding knowledge required!</li>
                </ul>

                <h2>How-To Covered</h2>
                <p>Use the no-code visual editor to:</p>
                <ul>
                    <li>Add/remove rows</li>
                    <li>Update question text</li>
                    <li>Reuse the same RAG answer service block</li>
                </ul>

                <h2>Step-by-Step Recipe</h2>

                <h3 id="start-new-agent">1. Start a New Agent Workflow</h3>
                <p><strong>Goal</strong>: Create a new custom agent by cloning an existing one.</p>

                <h4>Steps:</h4>
                <ul>
                    <li>Open <strong>Agents {'>'} Select Build New</strong> then click <strong>Start Building</strong> in <em>Configure Agent</em></li>
                    <li>Input process name in <em>Set Up Agent</em>, e.g., <strong>License Agreement</strong>
                    <p><br /></p>
                    <img src="/cookbooks/document-analysis/setup.png" alt="Setup Agents" />
                    </li>
                    <li>Set input type to <strong>User Document</strong> (indicates PDF upload)</li>
                </ul>

                <blockquote>
                    <p>
                        <strong>Note</strong>: The input type selection is critical in Model HQ—determining how the agent receives input. Multiple input sources can be configured in advanced use cases.
                    </p>
                </blockquote>

                <ul>
                    <li>
                        Derive from existing agent: select <strong>Contract Analyzer</strong>
                        <br />
                        (Preset to work with employment agreements, which we'll adapt for music license royalty agreements)
                    </li>
                </ul>

                <p>&nbsp;</p>

                <h3 id="understand-template">2. Understand the Template Process (Contract Analyzer)</h3>
                <p>You'll see pre-loaded steps:</p>
                <ol>
                    <li>Parse the uploaded document</li>
                    <li>
                        Run RAG answer agent on 3 default questions:
                        <ul>
                            <li>When is the effective date?</li>
                            <li>What is the annual rate of the base salary?</li>
                            <li>How many vacation days?</li>
                        </ul>
                    </li>
                    <li>Output results to a report</li>
                </ol>

                <p>&nbsp;</p>

                <h3 id="customize-workflow">3. Customize the Workflow for New Use Case</h3>
                <p><strong>Scenario</strong>: We're now analyzing music license royalty agreements, not employment contracts.</p>

                <h4>Steps:</h4>
                <ul>
                    <li>
                        <strong>Keep</strong>:
                        <ul>
                            <li><strong>Parse Document</strong> (critical for extracting from non-<code>.txt</code> files)</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Modify Questions</strong>:
                        <ul>
                            <li>Change 2nd row to: "When is the effective date of the agreement?"</li>
                            <li>Change 3rd row to: "Who are the parties to the agreement?"</li>
                            <li>Change 4th row to: "What are the royalty terms, including amount and calculation method?"</li>
                        </ul>
                    </li>
                </ul>

                <p>&nbsp;</p>

                <h3 id="enhance-output">4. Enhance Output: Add a Commentary Step</h3>
                <p><strong>Optional Twist</strong>: Replace the basic report with a smarter summary.</p>

                <h4>Steps:</h4>
                <ul>
                    <li>Add a new block: <strong>Report Commentary</strong></li>
                    <li>Pass in all previous answers</li>
                    <li>Skip generating Word reports—commentary replaces it</li>
                    <li>Output: Natural language summary of findings</li>
                </ul>

                <p>In the workflow:</p>
                <ul>
                    <li>At the end of Row 5, click the <strong>'+'</strong> button</li>
                    <li>Select <strong>Report Commentary</strong> in the <em>Service</em> dropdown</li>
                    <li>Input: <code>Natural Language Summary of Findings</code></li>
                    <li>Context: <strong>None</strong>
                    <img src="/cookbooks/document-analysis/steps.png" alt="Steps" />
                    </li>
                    <li>Click <code>{'>'}</code> then <code>Run</code> then in <em>Action</em> click <code>{'>'}</code></li>
                    <li>
                        Upload the document:
                        <br />
                        <code>C:\users\[username]\llmware_data\sample_files\AgreementsLarge\Circe License Agreement for Copyrighted Music.pdf</code>
                        <p><br /></p>
                        <img src="/cookbooks/document-analysis/upload.png" alt="Upload" />
                    </li>
                </ul>

                <p>&nbsp;</p>

                <h3 id="test-agent">5. Test the Agent on a Single Document</h3>

                <h4>Steps:</h4>
                <ul>
                    <li>Click <strong>Run</strong></li>
                    <li>Upload a music license agreement PDF</li>
                    <li>
                        Model HQ will:
                        <ul>
                            <li>Parse the document (e.g., ~17 text chunks)</li>
                            <li>Run the RAG agent for all 4 custom questions</li>
                            <li>Generate a clean summary commentary of the findings</li>
                        </ul>
                    </li>
                </ul>
                <img src="/cookbooks/document-analysis/run.png" alt="Running Agent" />

                <p>&nbsp;</p>

                <h3 id="batch-run">6. Batch Run the Agent on Multiple Documents</h3>

                <h4>Steps:</h4>
                <ul>
                    <li>
                        <strong>Switch to Batch Mode</strong>:
                        <br />
                        Go to <strong>Agents {'>'} Load Existing {'>'} License Agreement</strong> (your custom agent), then select <strong>Batch Run</strong>
                    </li>
                    <li>
                        Select 3–4 music license agreements, e.g.:
                        <ul>
                            <li><em>Circe License Agreement for Copyrighted Music</em></li>
                            <li><em>Cybele Music License Agreement</em></li>
                            <li><em>Diana Music License Agreement</em></li>
                            <li><em>Eos License Agreement for Copyrighted Music</em></li>
                        </ul>
                    </li>
                </ul>

                <blockquote>
                    <p>Folder path: <code>C:\users\[username]\llmware_data\sample_files\AgreementsLarge\</code></p>
                </blockquote>

                <ul>
                    <li>In <strong>Upload Documents for Batch Processing</strong>, after selecting documents, click <code>{'>'}</code> to begin the batch process</li>
                </ul>

                <p>Model HQ will:</p>
                <ul>
                    <li>Run the agent on each file</li>
                    <li>
                        Output per document:
                        <ul>
                            <li>Question-answer results</li>
                            <li>One commentary summary</li>
                            <li>Ready for export or further analysis</li>
                        </ul>
                    </li>
                </ul>
                <img src="/cookbooks/document-analysis/multiDocs.png" alt="Running Multiple Docs" />

                <p>&nbsp;</p>

                <h3 id="share-integrate">7. (Optional) Share or Integrate</h3>
                <p>You can now:</p>
                <ul>
                    <li>Email the agent to a colleague (they can upload & run it)</li>
                    <li>Save it to a shared <strong>Model HQ</strong> repository</li>
                    <li>Deploy it via <strong>Model HQ API Server</strong> to integrate into an app</li>
                    <li>Expose the workflow programmatically to backend services</li>
                </ul>

                <h2>Summary Table</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Step</th>
                                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Derive New Agent</td>
                                <td className="border border-gray-300 px-4 py-2">Based on Contract Analyzer</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">Modify Questions</td>
                                <td className="border border-gray-300 px-4 py-2">Remove irrelevant, add domain-specific</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Add Commentary</td>
                                <td className="border border-gray-300 px-4 py-2">Auto-generate summary from answers</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">Run Single Test</td>
                                <td className="border border-gray-300 px-4 py-2">Validate logic and structure</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Run Batch Test</td>
                                <td className="border border-gray-300 px-4 py-2">Scale to many docs at once</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">Share / Integrate</td>
                                <td className="border border-gray-300 px-4 py-2">Via file or backend API</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Why It Works</h2>
                <ul>
                    <li>Fast adaptation using no-code UI</li>
                    <li>Domain-agnostic: works for any document type</li>
                    <li>Test, tweak, and deploy in minutes</li>
                    <li>Empowers analysts and business users without developer time</li>
                </ul>

                <p>&nbsp;</p>

                <p>
                    If you encounter any issues while updating your model configuration, feel free to contact our support team at <code>support@aibloks.com</code>
                </p>
            </div>
        </div>
    )
}
