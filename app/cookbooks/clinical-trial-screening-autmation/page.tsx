"use client"

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
    Upload,
    Search,
    CheckCircle,
    Target,
    Users,
    Shield,
    Stethoscope,
    Brain,
    Heart,
    Activity,
    Pill,
    UserCheck,
    FileSearch,
    Zap,
    ExternalLink,
    TrendingUp,
    Copy,
} from "lucide-react"
import { useState } from "react"

function CodeBlock({ children, title, language = "text" }: { children: string; title?: string; language?: string }) {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(children)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy text: ", err)
        }
    }

    return (
        <div className="relative w-full">
            {title && (
                <div className="bg-slate-800 text-slate-200 px-4 py-2 text-sm font-medium rounded-t-lg border-b border-slate-700">
                    {title}
                </div>
            )}
            <div className="relative bg-slate-950 text-slate-100 p-4 rounded-b-lg group w-full">
                <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    title="Copy code"
                >
                    {copied ? <CheckCircle className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-slate-400" />}
                </button>
                <pre className="text-sm whitespace-pre-wrap break-words w-full">
                    <code className="break-words text-black">{children}</code>
                </pre>
            </div>
        </div>
    )
}

export default function ClinicalTrialScreeningPage() {
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
                        <BreadcrumbPage>Clinical Trial Screening Automation</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    From Patient Chart to Trial Match: Automate Clinical Trial Screening with One Upload
                </h1>
                <p className="text-lg text-gray-600">
                    Transform patient document screening with AI-powered eligibility assessment
                </p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8">
                {/* Hero Section */}
                <section>
                    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                        <CardContent className="p-6">
                            <p className="text-blue-800 mb-4">
                                Imagine sorting through hundreds of patient charts to identify those who might qualify for a specific
                                clinical trial. Now imagine doing it in seconds—with zero manual review and with no sensitive data
                                leaving your machine or private data center. That's the power of this Model HQ Clinical Trial Recruiting
                                Agent.
                            </p>
                            <p className="text-blue-700">
                                Designed to reduce screening friction, improve accuracy, and ensure no eligible patient slips through
                                the cracks.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Use Cases Section */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-100 rounded-lg">
                            <Brain className="h-6 w-6 text-purple-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">And it's not just for clinical trials…</h2>
                    </div>
                    <Card className="bg-purple-50 border-purple-200">
                        <CardContent className="p-6">
                            <p className="text-purple-800 mb-4">
                                This pattern can be adapted across regulated industries where document-based decision-making is
                                critical, such as:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <Stethoscope className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-purple-900">Medical eligibility screening</span>
                                        <p className="text-purple-700 text-sm">(e.g., surgery clearance, insurance validation)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Shield className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-purple-900">Regulatory intake</span>
                                        <p className="text-purple-700 text-sm">for safety or compliance</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FileSearch className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-purple-900">Legal discovery</span>
                                        <p className="text-purple-700 text-sm">
                                            (e.g., identifying parties, dates, and claims from large files)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FileText className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-purple-900">Insurance</span>
                                        <p className="text-purple-700 text-sm">Fraud detection or claim qualification</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-purple-800 mt-4 font-medium text-center">
                                One document → One workflow → One eligibility decision.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* How It Works Section */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <Upload className="h-6 w-6 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Upload. Analyze. Screen.</h2>
                    </div>
                    <p className="text-gray-700 mb-6">
                        With this Clinical Trial Recruiting Agent, all you need is a patient document (e.g., intake form, EMR
                        export, or referral note). Here's how it works:
                    </p>

                    <div className="space-y-6">
                        <Card className="border-l-4 border-l-blue-500">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-blue-900 mb-2">Step 1: Upload Patient Document</h3>
                                        <p className="text-blue-800">
                                            Upload any text-based patient file (PDF, DOCX, TXT). The agent automatically parses and prepares
                                            the content for AI-powered review.
                                        </p>
                                        <a
                                            href="https://github.com/BloksAdmin/model-hq-docs/tree/main/public/cookbooks/clinical-trail-screening-automation"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-600 hover:text-green-800 underline inline-flex items-center gap-1"
                                        >
                                            Find all the required images and documents here.
                                            <ExternalLink className="h-3 w-3" />
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-green-500">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-green-900 mb-3">
                                            Step 2: Run Eligibility Questions (RAG + Boolean)
                                        </h3>
                                        <p className="text-green-800 mb-3">
                                            The agent applies a series of retrieval-augmented queries to extract trial-relevant data points,
                                            including:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600" />
                                                <span className="text-green-700 text-sm">Diabetes history – current or past</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Heart className="h-4 w-4 text-green-600" />
                                                <span className="text-green-700 text-sm">Patient age</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4 text-green-600" />
                                                <span className="text-green-700 text-sm">Pregnancy or family planning status</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Activity className="h-4 w-4 text-green-600" />
                                                <span className="text-green-700 text-sm">Dialysis treatment</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Shield className="h-4 w-4 text-green-600" />
                                                <span className="text-green-700 text-sm">Allergies to medical-grade adhesive</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Pill className="h-4 w-4 text-green-600" />
                                                <span className="text-green-700 text-sm">Allergies to isopropyl alcohol</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2 mt-3">
                                            <Brain className="h-4 w-4 text-green-600 mt-0.5" />
                                            <span className="text-green-700 text-sm">
                                                Cognitive or mental conditions that could interfere with protocol compliance
                                            </span>
                                        </div>
                                        <p className="text-green-800 mt-3 text-sm">
                                            Each of these checks is handled using natural language understanding, not rigid forms or keyword
                                            matching.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-purple-500">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-purple-900 mb-3">Step 3: Eligibility Decision</h3>
                                        <p className="text-purple-800 mb-3">
                                            A Boolean logic step evaluates the presence and explanation of diabetes references. Output can be
                                            fed into a CRM, database, or downstream agent to trigger next steps like:
                                        </p>
                                        <ul className="space-y-2 text-purple-700">
                                            <li className="flex items-center gap-2">
                                                <UserCheck className="h-4 w-4" />
                                                Contacting eligible patients
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <FileText className="h-4 w-4" />
                                                Sending consent forms
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Users className="h-4 w-4" />
                                                Notifying study coordinators
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Why It Matters */}
                <section>
                    <Card className="bg-yellow-50 border-yellow-200">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Search className="h-6 w-6 text-yellow-600" />
                                <h2 className="text-xl font-bold text-yellow-900">Why It Matters</h2>
                            </div>
                            <p className="text-yellow-800">
                                This agent doesn't just help recruiters — it ensures no candidate is overlooked due to inconsistencies
                                or hidden data in unstructured files. It's fast, consistent, and auditable.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Step-by-Step Guide */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-indigo-100 rounded-lg">
                            <Target className="h-6 w-6 text-indigo-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Step-by-Step Guide to Building the Clinical Trial Recruiting Tool
                        </h2>
                    </div>

                    <p className="text-gray-700 mb-6">
                        Select or enter the following Service, Instruction and Context to re-create this tool yourself.
                    </p>

                    {/* Provided Files */}
                    <Card className="bg-blue-50 border-blue-200 mb-8">
                        <CardContent className="p-6">
                            <h3 className="font-semibold text-blue-900 mb-3">Provided Files:</h3>
                            <p className="text-blue-800 mb-3">
                                We are using an example of a clinical trial available as public information in{" "}
                                <a
                                    href="https://clinicaltrials.gov/study/NCT04959552?cond=diabetes&page=2&rank=14"
                                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://clinicaltrials.gov/study/NCT04959552?cond=diabetes&page=2&rank=14
                                    <ExternalLink className="h-3 w-3" />
                                </a>
                                . We have no association with anyone who is running this trial and are using this as only example
                                purposes so you can see some sample inclusion and exclusion criteria.
                            </p>
                            <p className="text-blue-800 mb-3">
                                We also downloaded some sample publicly available medical files which can be accessed here. Although
                                these files were from public sources, please note that these files may contain explicit and sensitive
                                medical content and user discretion is advised. We are providing these files for testing purposes only.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Preparing to Build */}
                    <div className="space-y-8">
                        <Card className="border-l-4 border-l-green-500">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-green-900 mb-4">Preparing to build:</h3>

                                <p className="mb-2">
                                    Select <strong>Agents &gt; Build New &gt; Start Building</strong> then complete the Process Name.
                                </p>

                                <p className="mb-2">
                                    We named it <em>Clinical Trial Recruiting Tool</em> (but since this may already be a template in your version of Model HQ, please feel free to give it a different name).
                                </p>

                                <p>Press <strong>&gt;</strong></p>
                            </CardContent>
                        </Card>

                        {/* Defining Inputs */}
                        <Card className="border-l-4 border-l-orange-500">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-orange-900 mb-4">Defining Inputs to Agent Process:</h3>

                                <p className="text-orange-800 mb-4">
                                    You will then be asked to Define Inputs to Agent Process. This is the step where we will specify how
                                    the agent will receive its input to start taking action. The pre-set input is Main-Input (which is the
                                    standard chat style text input), but in this use case, we will be asking the Agent to review a patient
                                    file.
                                </p>

                                <Card className="bg-red-50 border-red-200 mb-4">
                                    <CardContent className="p-4">
                                        <p className="text-red-800 font-medium">DE-SELECT the Main Input</p>
                                    </CardContent>
                                </Card>

                                <p className="text-orange-800 mb-2">
                                    1. To add Files as the input type, click <strong>'+'</strong> and select <strong>'Document File Input – any file type'</strong> as Input Type and in Description, type in:
                                </p>

                                <p className="italic text-orange-800 mb-2">
                                    'Upload Patient Medical File or Description'
                                </p>

                                <p className="text-orange-800 mb-2">
                                    which specifies to the user what document this step is expecting.
                                </p>

                                <p className="text-orange-800 mb-2">
                                    2. To indicate that this step is complete, it is important to click <strong>&gt;</strong> then <strong>'Save + Exit'</strong>.
                                </p>

                                <p className="text-orange-800">
                                    <em>
                                        (note: Not clicking 'Save+Exit' will assume you have other documents and may ask you to repeat the last 2 steps)
                                    </em>
                                </p>

                                <p className="text-orange-800 mt-4">
                                    3. You will now enter the Agent building screen and you can start your build per instructions below.
                                </p>
                            </CardContent>
                        </Card>

                        <p>&nbsp;</p>

                        {/* Agent Building Steps */}
                        <div>
                            <h2 className="text-xl font-semibold mb-6">Agent Building Steps</h2>
                            <p className="text-gray-700 mb-6">
                                Here is a detailed, step-by-step guide to build the Clinical Trial Recruiting Tool in Model HQ's Agent
                                Builder (Note: this pre-built tool is also available as part of Model HQ set of templates). Each step
                                includes the: Service (what the node does), Instruction (the question or task), Context (the document or
                                variable used)
                            </p>

                            <div className="space-y-6">
                                {/* Row 1 */}
                                <Card className="border rounded-lg">
                                    <CardContent className="p-6">
                                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                1
                                            </div>
                                            Row 1: Parse the Patient Document
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600">Service:</span>
                                                <CodeBlock>parse_document</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600">Instruction:</span>
                                                <CodeBlock>Patient Files</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600">Context:</span>
                                                <CodeBlock>User-Document</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm mb-2">
                                            <strong>Purpose:</strong> Prepares and parses the uploaded patient document for semantic querying
                                            in later steps. (This indicates that the user will upload the document to run this agent process.)
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            At the end of each row when building the Agent Process, press '+' to add the next row, until you
                                            reach the final step to End.
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Row 2 */}
                                <Card className="border rounded-lg">
                                    <CardContent className="p-6">
                                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                2
                                            </div>
                                            Row 2: RAG Answer – Diabetes Mention
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600">Service:</span>
                                                <CodeBlock>rag_answer</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600">Instruction:</span>
                                                <CodeBlock>whether the patient has diabetes now or in the past</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600">Context:</span>
                                                <CodeBlock>Patient_Files</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            <strong>Purpose:</strong> Checks the document for any mention of diabetes (past or present).
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Row 3 */}
                                <Card className="border rounded-lg">
                                    <CardContent className="p-6">
                                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                3
                                            </div>
                                            Row 3: Boolean Check – Diabetes Confirmation
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600">Service:</span>
                                                <CodeBlock>boolean</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600">Instruction:</span>
                                                <CodeBlock>{`in {{rag_answer_2}} does the text state the patient has diabetes`}</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600">Context:</span>
                                                <CodeBlock>doc_extract_1</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            <strong>Purpose:</strong> Verifies if the document actually confirms diabetes using the output
                                            from the previous RAG answer.
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Row 4 */}
                                <Card className="border rounded-lg">
                                    <CardContent className="p-6">
                                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                4
                                            </div>
                                            Row 4: RAG Answer – Patient Age
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600">Service:</span>
                                                <CodeBlock>rag_answer</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600">Instruction:</span>
                                                <CodeBlock>how old is the patient</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600">Context:</span>
                                                <CodeBlock>Patient_Files</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            <strong>Purpose:</strong> Extracts the patient's age for trial eligibility filtering.
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Row 5 */}
                                <Card className="border rounded-lg">
                                    <CardContent className="p-6">
                                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                5
                                            </div>
                                            Row 5: RAG Answer – Pregnancy Status
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600">Service:</span>
                                                <CodeBlock>rag_answer</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600">Instruction:</span>
                                                <CodeBlock>is the patient pregnant or attempting to be pregnant</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600">Context:</span>
                                                <CodeBlock>Patient_Files</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            <strong>Purpose:</strong> Determines reproductive status (a key trial exclusion criterion).
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Row 6 */}
                                <Card className="border rounded-lg">
                                    <CardContent className="p-6">
                                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                6
                                            </div>
                                            Row 6: RAG Answer – Dialysis Status
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600">Service:</span>
                                                <CodeBlock>rag_answer</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600">Instruction:</span>
                                                <CodeBlock>is the patient on dialysis</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600">Context:</span>
                                                <CodeBlock>Patient_Files</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            <strong>Purpose:</strong> Identifies patients with advanced renal impairment.
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Row 7 */}
                                <Card className="border rounded-lg">
                                    <CardContent className="p-6">
                                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                7
                                            </div>
                                            Row 7: RAG Answer – Allergy to Medical-Grade Adhesive
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600">Service:</span>
                                                <CodeBlock>rag_answer</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600">Instruction:</span>
                                                <CodeBlock>
                                                    does the text mention if the patient is allergic to medical grade adhesive
                                                </CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600">Context:</span>
                                                <CodeBlock>Patient_Files</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            <strong>Purpose:</strong> Screens for skin-related contraindications for the study.
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Row 8 */}
                                <Card className="border rounded-lg">
                                    <CardContent className="p-6">
                                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                8
                                            </div>
                                            Row 8: RAG Answer – Allergy to Isopropyl Alcohol
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600">Service:</span>
                                                <CodeBlock>rag_answer</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600">Instruction:</span>
                                                <CodeBlock>does the text mention if the patient is allergic to isopropyl alcohol</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600">Context:</span>
                                                <CodeBlock>Patient_Files</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            <strong>Purpose:</strong> Further screens for known chemical sensitivities for the study.
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Row 9 */}
                                <Card className="border rounded-lg">
                                    <CardContent className="p-6">
                                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                9
                                            </div>
                                            Row 9: RAG Answer – Mental/Cognitive Limitations
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600">Service:</span>
                                                <CodeBlock>rag_answer</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600">Instruction:</span>
                                                <CodeBlock>
                                                    does the text mention if the patient suffers from any mental conditions that would deter him
                                                    or her from following instructions or protocols
                                                </CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600">Context:</span>
                                                <CodeBlock>Patient_Files</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            <strong>Purpose:</strong> Checks cognitive readiness and consent capacity.
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Row 10 */}
                                <Card className="border rounded-lg">
                                    <CardContent className="p-6">
                                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                10
                                            </div>
                                            Row 10: End Node
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600">Service:</span>
                                                <CodeBlock>END</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600">Instruction:</span>
                                                <CodeBlock>End of process.</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600">Context:</span>
                                                <CodeBlock>None</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            <strong>Purpose:</strong> Marks completion of the workflow.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Notes */}
                <section>
                    <Card className="bg-green-50 border-green-200">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle className="h-6 w-6 text-green-600" />
                                <h2 className="text-xl font-bold text-green-900">Final Notes:</h2>
                            </div>
                            <ul className="space-y-3 text-green-800">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>
                                        Be sure to upload a document (e.g., PDF, DOCX) to User-Document before running this agent – try one
                                        of the sample files provided.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>
                                        This workflow is extensible — you can add inclusion/exclusion filters or eligibility tags in later
                                        nodes and also run this in batches for production.
                                    </span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </section>

                {/* Expand This Pattern */}
                <section>
                    <Card className="bg-purple-50 border-purple-200">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <TrendingUp className="h-6 w-6 text-purple-600" />
                                <h2 className="text-xl font-bold text-purple-900">Expand This Pattern</h2>
                            </div>
                            <p className="text-purple-800 mb-4">You can easily adapt this flow to:</p>
                            <div className="grid md:grid-cols-2 gap-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="h-4 w-4 text-purple-600" />
                                    <span className="text-purple-700">Pre-screen based on inclusion/exclusion criteria</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FileSearch className="h-4 w-4 text-purple-600" />
                                    <span className="text-purple-700">Analyze investigator site files</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="h-4 w-4 text-purple-600" />
                                    <span className="text-purple-700">Validate adherence risks</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Target className="h-4 w-4 text-purple-600" />
                                    <span className="text-purple-700">Recommend alternative trials or study arms</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Support */}
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-6 border text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
                    <p className="text-gray-700">
                        If you encounter any issues while setting up clinical trial screening, feel free to contact our support team
                        at <code className="bg-gray-200 px-2 py-1 rounded">support@aibloks.com</code>
                    </p>
                </div>
            </div>
        </div>
    )
}
