import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import {
    FileText,
    Settings,
    Edit3,
    Plus,
    Play,
    Users,
    Share2,
    CheckCircle,
    AlertCircle,
    ExternalLink,
    Upload,
    Zap,
    Target,
} from "lucide-react"

export default function DocumentReviewAnalysisPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8 py-6">
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
                        <BreadcrumbPage>Document Review and Analysis</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    Build a No-Code Document Review and Analysis Custom Agent Workflow in Model HQ
                </h1>
                <p className="text-lg text-gray-600">Create powerful document processing agents without writing any code</p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8">
                {/* Introduction */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                    <p className="text-gray-800 leading-relaxed">
                        The No-Code Document Review and Analysis Workflow in Model HQ empowers business users and analysts to build
                        custom document processing agents—without writing a single line of code. Using a visual editor and
                        customizable templates like the Contract Analyzer, users can tailor workflows to fit specific use cases,
                        such as reviewing music license royalty agreements. From editing questions to adding natural language
                        summaries, this workflow enables fast, scalable, and domain-specific analysis that can be tested on single
                        documents or run in batch across entire folders—ready for sharing or backend integration.
                    </p>
                </div>

                {/* Video Tutorial */}
                <Card className="border-l-4 border-l-red-500 bg-red-50">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                            <div>
                                <h3 className="font-semibold text-red-900 mb-2">Video Tutorial Available</h3>
                                <p className="text-red-800 mb-3">
                                    This walkthrough is also demonstrated step-by-step on our YouTube video:
                                </p>
                                <a
                                    href="https://youtu.be/uy53WKrMOXc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
                                >
                                    Build a Custom Chat/RAG Bot in 10 Minutes
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Use Case */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">Use Case</h2>
                    </div>
                    <Card className="bg-green-50 border-green-200">
                        <CardContent className="p-6">
                            <p className="text-green-800">
                                Custom analysis of music license royalty agreements as an example, derived from an existing{" "}
                                <strong>Contract Analyzer</strong> agent.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Who This Is For */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">Who This Is For</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Users className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Business Users</h3>
                                <p className="text-sm text-gray-600">HR, Legal, Operations teams</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Settings className="h-6 w-6 text-green-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Developers</h3>
                                <p className="text-sm text-gray-600">Building custom workflows</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <FileText className="h-6 w-6 text-orange-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Analysts</h3>
                                <p className="text-sm text-gray-600">Automating document review</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Prerequisites */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">Ingredients (Prerequisites)</h2>
                    </div>
                    <Card className="border border-orange-200 bg-orange-50">
                        <CardContent className="p-6">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-orange-800">Model HQ installed</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-orange-800">
                                        A sample agent (e.g., <strong>Contract Analyzer</strong>) available as a template in Model HQ
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                    <div className="text-orange-800">
                                        <span>A sample PDF — e.g., </span>
                                        <em>Circe License Agreement for Copyrighted Music</em>
                                        <span> - sample document provided as part of Model HQ.</span>
                                        <br />
                                        <code className="bg-orange-100 px-2 py-1 rounded text-sm mt-1 inline-block">
                                            C:\users\[username]\llmware_data\sample_files\AgreementsLarge\Circe License Agreement for
                                            Copyrighted Music.pdf
                                        </code>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-orange-800 font-medium">No coding knowledge required!</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </section>

                {/* How-To Covered */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">How-To Covered</h2>
                    </div>
                    <Card className="bg-indigo-50 border-indigo-200">
                        <CardContent className="p-6">
                            <p className="text-indigo-800 mb-3">Use the no-code visual editor to:</p>
                            <ul className="space-y-2 text-indigo-700">
                                <li className="flex items-center gap-2">
                                    <Plus className="h-4 w-4" />
                                    Add/remove rows
                                </li>
                                <li className="flex items-center gap-2">
                                    <Edit3 className="h-4 w-4" />
                                    Update question text
                                </li>
                                <li className="flex items-center gap-2">
                                    <Zap className="h-4 w-4" />
                                    Reuse the same RAG answer service block
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </section>

                {/* Step-by-Step Recipe */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Step-by-Step Recipe</h2>
                    </div>

                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                                        1
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Start a New Agent Workflow</h3>
                                    <Card className="bg-blue-50 border-blue-200">
                                        <CardContent className="p-6">
                                            <p className="font-semibold text-blue-900 mb-4">
                                                Goal: Create a new custom agent by cloning an existing one.
                                            </p>

                                            <div className="space-y-4">
                                                <div className="space-y-3">
                                                    <h4 className="font-semibold text-blue-800">Steps:</h4>
                                                    <ul className="space-y-2 text-blue-700">
                                                        <li className="flex items-start gap-2">
                                                            <span className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center text-xs font-semibold text-blue-800 mt-0.5 flex-shrink-0">
                                                                1
                                                            </span>
                                                            <span>
                                                                Open <strong>Agents → Select Build New</strong> then click <strong>&gt;</strong>
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center text-xs font-semibold text-blue-800 mt-0.5 flex-shrink-0">
                                                                2
                                                            </span>
                                                            <span>
                                                                Next, select <strong>Start Building</strong> in <em>Configure Agent</em>
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center text-xs font-semibold text-blue-800 mt-0.5 flex-shrink-0">
                                                                3
                                                            </span>
                                                            <span>
                                                                Input process name in <em>Set Up Agent</em>, e.g., <strong>License Agreement</strong>
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center text-xs font-semibold text-blue-800 mt-0.5 flex-shrink-0">
                                                                4
                                                            </span>
                                                            <span>
                                                                Set input type to <strong>User Document</strong> (indicates PDF upload)
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center text-xs font-semibold text-blue-800 mt-0.5 flex-shrink-0">
                                                                5
                                                            </span>
                                                            <span>
                                                                Derive from existing agent: select <strong>Contract Analyzer</strong>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="my-4">
                                                    <img
                                                        src="/cookbooks/document-analysis/setup.png"
                                                        alt="Setup Agents"
                                                        className="rounded-lg shadow-md border w-full"
                                                    />
                                                </div>

                                                <Card className="bg-yellow-50 border-yellow-200">
                                                    <CardContent className="p-4">
                                                        <div className="flex items-start gap-2">
                                                            <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                                                            <div>
                                                                <p className="font-semibold text-yellow-800">Note</p>
                                                                <p className="text-yellow-700 text-sm">
                                                                    The input type selection is critical in Model HQ—determining how the agent receives
                                                                    input. Multiple input sources can be configured in advanced use cases.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                                        2
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Understand the Template Process (Contract Analyzer)
                                    </h3>
                                    <Card className="bg-green-50 border-green-200">
                                        <CardContent className="p-6">
                                            <p className="text-green-800 mb-4">
                                                You'll see pre-loaded steps for this template which was designed for employment agreements,
                                                which we will modify for the new contracts related to music license royalty agreements:
                                            </p>
                                            <ol className="space-y-2 text-green-700">
                                                <li className="flex items-start gap-2">
                                                    <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-sm font-semibold text-green-800 mt-0.5 flex-shrink-0">
                                                        1
                                                    </span>
                                                    <span>Parse the uploaded document</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-sm font-semibold text-green-800 mt-0.5 flex-shrink-0">
                                                        2
                                                    </span>
                                                    <div>
                                                        <span>Run RAG answer agent on 3 default questions:</span>
                                                        <ul className="ml-4 mt-1 space-y-1 text-sm">
                                                            <li>When is the effective date?</li>
                                                            <li>What is the annual rate of the base salary?</li>
                                                            <li>How many vacation days?</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-sm font-semibold text-green-800 mt-0.5 flex-shrink-0">
                                                        3
                                                    </span>
                                                    <span>Output results to a report</span>
                                                </li>
                                            </ol>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Customize the Workflow for New Use Case</h3>
                                    <Card className="bg-purple-50 border-purple-200">
                                        <CardContent className="p-6">
                                            <p className="font-semibold text-purple-900 mb-4">
                                                Scenario: We're now analyzing music license royalty agreements, not employment contracts.
                                            </p>

                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="font-semibold text-purple-800 mb-2">Keep:</h4>
                                                    <ul className="text-purple-700 ml-4">
                                                        <li>
                                                            <strong>Parse Document</strong> (critical for extracting text from non-
                                                            <code className="bg-purple-100 px-1 rounded">.txt</code> files)
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="font-semibold text-purple-800 mb-2">Modify Questions:</h4>
                                                    <ul className="space-y-1 text-purple-700 ml-4">
                                                        <li>Change 2nd row to: "When is the effective date of the agreement?"</li>
                                                        <li>Change 3rd row to: "Who are the parties to the agreement?"</li>
                                                        <li>
                                                            Change 4th row to: "What are the royalty terms, including amount and calculation
                                                            method?"
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                                        4
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Enhance Output: Add a Commentary Step</h3>
                                    <Card className="bg-orange-50 border-orange-200">
                                        <CardContent className="p-6">
                                            <p className="font-semibold text-orange-900 mb-4">
                                                Optional Twist: Replace the basic report with a smarter summary.
                                            </p>

                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="font-semibold text-orange-800 mb-2">Steps:</h4>
                                                    <ul className="space-y-2 text-orange-700">
                                                        <li>
                                                            Add a new block: <strong>Report Commentary</strong>
                                                        </li>
                                                        <li>Pass in all previous answers</li>
                                                        <li>Skip generating Word reports—commentary replaces it</li>
                                                        <li>Output: Natural language summary of findings</li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="font-semibold text-orange-800 mb-2">How to in the workflow:</h4>
                                                    <ul className="space-y-2 text-orange-700">
                                                        <li className="flex items-start gap-2">
                                                            <span className="w-5 h-5 bg-orange-200 rounded-full flex items-center justify-center text-xs font-semibold text-orange-800 mt-0.5 flex-shrink-0">
                                                                1
                                                            </span>
                                                            <span>
                                                                At the end of Row 5, click the <strong>'+'</strong> button
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="w-5 h-5 bg-orange-200 rounded-full flex items-center justify-center text-xs font-semibold text-orange-800 mt-0.5 flex-shrink-0">
                                                                2
                                                            </span>
                                                            <span>
                                                                Select <strong>Report Commentary</strong> in the <em>Service</em> dropdown
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="w-5 h-5 bg-orange-200 rounded-full flex items-center justify-center text-xs font-semibold text-orange-800 mt-0.5 flex-shrink-0">
                                                                3
                                                            </span>
                                                            <span>
                                                                Input:{" "}
                                                                <code className="bg-orange-100 px-2 py-1 rounded">
                                                                    Natural Language Summary of Findings
                                                                </code>
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="w-5 h-5 bg-orange-200 rounded-full flex items-center justify-center text-xs font-semibold text-orange-800 mt-0.5 flex-shrink-0">
                                                                4
                                                            </span>
                                                            <span>
                                                                Context: <strong>None</strong>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="my-4">
                                                    <img
                                                        src="/cookbooks/document-analysis/steps.png"
                                                        alt="Steps"
                                                        className="rounded-lg shadow-md border w-full"
                                                    />
                                                </div>

                                                <div className="bg-orange-100 rounded-lg p-4">
                                                    <ul className="space-y-2 text-orange-800">
                                                        <li>
                                                            Click <code className="bg-orange-200 px-2 py-1 rounded">&gt;</code> then{" "}
                                                            <code className="bg-orange-200 px-2 py-1 rounded">Run</code> then in <em>Action</em> click{" "}
                                                            <code className="bg-orange-200 px-2 py-1 rounded">&gt;</code>
                                                        </li>
                                                        <li>
                                                            Upload the document:
                                                            <br />
                                                            <code className="bg-orange-200 px-2 py-1 rounded text-xs mt-1 inline-block">
                                                                C:\users\[username]\llmware_data\sample_files\AgreementsLarge\Circe License Agreement
                                                                for Copyrighted Music.pdf
                                                            </code>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="my-4">
                                                    <img
                                                        src="/cookbooks/document-analysis/upload.png"
                                                        alt="Upload"
                                                        className="rounded-lg shadow-md border w-full"
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="relative">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                                        5
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Test the Agent on a Single Document</h3>
                                    <Card className="bg-indigo-50 border-indigo-200">
                                        <CardContent className="p-6">
                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="font-semibold text-indigo-800 mb-2">Steps:</h4>
                                                    <ul className="space-y-2 text-indigo-700">
                                                        <li className="flex items-start gap-2">
                                                            <Play className="h-4 w-4 mt-1 flex-shrink-0" />
                                                            <span>
                                                                Click <strong>Run</strong>
                                                            </span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <Upload className="h-4 w-4 mt-1 flex-shrink-0" />
                                                            <span>Upload a music license agreement PDF</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <p className="text-indigo-800 mb-2">Model HQ will:</p>
                                                    <ul className="space-y-1 text-indigo-700 ml-4">
                                                        <li>Parse the document (e.g., ~17 text chunks)</li>
                                                        <li>Run the RAG agent for all 4 custom questions</li>
                                                        <li>Generate a clean summary commentary of the findings</li>
                                                    </ul>
                                                </div>

                                                <div className="my-4">
                                                    <img
                                                        src="/cookbooks/document-analysis/run.png"
                                                        alt="Running Agent"
                                                        className="rounded-lg shadow-md border w-full"
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="relative">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                                        6
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Batch Run the Agent on Multiple Documents</h3>
                                    <Card className="bg-teal-50 border-teal-200">
                                        <CardContent className="p-6">
                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="font-semibold text-teal-800 mb-2">Steps:</h4>
                                                    <ul className="space-y-3 text-teal-700">
                                                        <li>
                                                            <div className="font-medium mb-1">Switch to Batch Mode:</div>
                                                            <div className="text-sm">
                                                                Go to <strong>Agents → Load Existing → License Agreement</strong> (your custom agent),
                                                                then select <strong>Batch Run</strong>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="font-medium mb-1">Select 3–4 music license agreements, e.g.:</div>
                                                            <ul className="ml-4 space-y-1 text-sm">
                                                                <li>
                                                                    <em>Circe License Agreement for Copyrighted Music</em>
                                                                </li>
                                                                <li>
                                                                    <em>Cybele Music License Agreement</em>
                                                                </li>
                                                                <li>
                                                                    <em>Eos License Agreement for Copyrighted Music</em>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <Card className="bg-teal-100 border-teal-300">
                                                    <CardContent className="p-4">
                                                        <p className="text-teal-800 text-sm">
                                                            Folder path:{" "}
                                                            <code className="bg-teal-200 px-2 py-1 rounded">
                                                                C:\users\[username]\llmware_data\sample_files\AgreementsLarge\
                                                            </code>
                                                        </p>
                                                    </CardContent>
                                                </Card>

                                                <div className="my-4">
                                                    <img
                                                        src="/cookbooks/document-analysis/circleLicense.png"
                                                        alt="Document path"
                                                        className="rounded-lg shadow-md border w-full"
                                                    />
                                                </div>

                                                <div className="bg-teal-100 rounded-lg p-4">
                                                    <p className="text-teal-800 mb-2">
                                                        In <strong>Upload Documents for Batch Processing</strong>, after selecting documents, click{" "}
                                                        <code className="bg-teal-200 px-2 py-1 rounded">&gt;</code> to begin the batch process
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-teal-800 mb-2">Model HQ will:</p>
                                                    <ul className="space-y-1 text-teal-700 ml-4">
                                                        <li>Run the agent on each file</li>
                                                        <li>
                                                            Output per document:
                                                            <ul className="ml-4 mt-1 space-y-1 text-sm">
                                                                <li>Question-answer results</li>
                                                                <li>One commentary summary</li>
                                                                <li>Ready for export or further analysis</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="my-4">
                                                    <img
                                                        src="/cookbooks/document-analysis/multiDocs.png"
                                                        alt="Running Multiple Docs"
                                                        className="rounded-lg shadow-md border w-full"
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Step 7 */}
                        <div className="relative">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                                        7
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">(Optional) Share or Integrate</h3>
                                    <Card className="bg-pink-50 border-pink-200">
                                        <CardContent className="p-6">
                                            <p className="text-pink-800 mb-3">You can now:</p>
                                            <ul className="space-y-2 text-pink-700">
                                                <li className="flex items-start gap-2">
                                                    <Share2 className="h-4 w-4 mt-1 flex-shrink-0" />
                                                    <span>Email the agent to a colleague (they can upload & run it)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <FileText className="h-4 w-4 mt-1 flex-shrink-0" />
                                                    <span>
                                                        Save it to a shared <strong>Model HQ</strong> repository
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Settings className="h-4 w-4 mt-1 flex-shrink-0" />
                                                    <span>
                                                        Deploy it via <strong>Model HQ API Server</strong> to integrate into an app
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <Zap className="h-4 w-4 mt-1 flex-shrink-0" />
                                                    <span>Expose the workflow programmatically to backend services</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Summary Table */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Summary Table</h2>
                    <Card className="overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Step</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-3 font-medium">Derive New Agent</td>
                                        <td className="border border-gray-300 px-4 py-3">Based on Contract Analyzer</td>
                                    </tr>
                                    <tr className="bg-gray-25 hover:bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-3 font-medium">Modify Questions</td>
                                        <td className="border border-gray-300 px-4 py-3">Remove irrelevant, add domain-specific</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-3 font-medium">Add Commentary</td>
                                        <td className="border border-gray-300 px-4 py-3">Auto-generate summary from answers</td>
                                    </tr>
                                    <tr className="bg-gray-25 hover:bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-3 font-medium">Run Single Test</td>
                                        <td className="border border-gray-300 px-4 py-3">Validate logic and structure</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-3 font-medium">Run Batch Test</td>
                                        <td className="border border-gray-300 px-4 py-3">Scale to many docs at once</td>
                                    </tr>
                                    <tr className="bg-gray-25 hover:bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-3 font-medium">Share / Integrate</td>
                                        <td className="border border-gray-300 px-4 py-3">Via file or backend API</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </section>

                {/* Why It Works */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Why It Works</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-l-4 border-l-green-500">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <Zap className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-green-900 mb-2">Fast Adaptation</h3>
                                        <p className="text-green-700 text-sm">Using no-code UI for rapid development</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-blue-500">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <Target className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-blue-900 mb-2">Domain-Agnostic</h3>
                                        <p className="text-blue-700 text-sm">Works for any document type</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-purple-500">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <Play className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-purple-900 mb-2">Quick Deployment</h3>
                                        <p className="text-purple-700 text-sm">Test, tweak, and deploy in minutes</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-orange-500">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <Users className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-orange-900 mb-2">User Empowerment</h3>
                                        <p className="text-orange-700 text-sm">
                                            Empowers analysts and business users without developer time
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Support */}
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-6 border text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
                    <p className="text-gray-700">
                        If you encounter any issues while updating your model configuration, feel free to contact our support team
                        at <code className="bg-gray-200 px-2 py-1 rounded">support@aibloks.com</code>
                    </p>
                </div>
            </div>
        </div>
    )
}
