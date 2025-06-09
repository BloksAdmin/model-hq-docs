import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Cpu, Info, Zap, Database } from "lucide-react"

export default function IntelSupportedModelsPage() {
    const modelCategories = [
        {
            category: "Qwen Models",
            models: [
                "bling-qwen-1.5b-ov",
                "bling-qwen-500m-ov",
                "qwen2-0.5b-chat-ov",
                "qwen2-1.5b-instruct-ov",
                "qwen2-7b-instruct-ov",
                "qwen2-v1-2b-instruct-ov",
                "qwen2-vl-7b-instruct-ov",
                "qwen2.5-0.5b-instruct-ov",
                "qwen2.5-1.5b-instruct-ov",
                "qwen2.5-14b-instruct-ov",
                "qwen2.5-coder-7b-instruct-ov",
            ],
        },
        {
            category: "Llama-Based Models",
            models: [
                "bling-tiny-llama-ov",
                "dolphin-2.9.4-llama3-1.8b-ov",
                "gradientai-llama3-8b-1048k-ov",
                "llama-11b-vision-instruct-ov",
                "llama-2-13b-chat-ov",
                "llama-2-chat-ov",
                "llama-3.1-instruct-ov",
                "llama-3.2-1b-instruct-ov",
                "llama-3.2-3b-instruct-ov",
                "tiny-llama-chat-ov",
            ],
        },
        {
            category: "Phi Models",
            models: ["phi-3-ov", "bling-phi-3-ov", "phi-4-ov"],
        },
        {
            category: "Mistral Models",
            models: [
                "dolphin-2.9.3-mistral-7b-32k-ov",
                "mistral-7b-instruct-v0.2-ov",
                "mistral-7b-instruct-v0.3-ov",
                "mistral-nemo-instruct-2407-ov",
                "mistral-small-instruct-2409-ov",
                "open-orca-mistral-7b-ov",
                "zephyr-mistral-7b-chat-ov",
            ],
        },
        {
            category: "Yi Models",
            models: ["yi-6b-1.5v-chat-ov", "yi-9b-chat-ov"],
        },
        {
            category: "DRAGON Models",
            models: [
                "dragon-llama2-ov",
                "dragon-mistral-0.3-ov",
                "dragon-mistral-ov",
                "dragon-qwen-7b-ov",
                "dragon-yi-6b-ov",
                "dragon-yi-9b-ov",
            ],
        },
        {
            category: "Slim Models",
            models: [
                "slim-boolean-phi-3-ov",
                "slim-emotions-ov",
                "slim-extract-tiny-ov",
                "slim-intent-ov",
                "slim-ner-ov",
                "slim-q-gen-tiny-ov",
                "slim-qa-gen-tiny-ov",
                "slim-ratings-ov",
                "slim-sentiment-ov",
                "slim-sql-ov",
                "slim-summary-phi-3-ov",
                "slim-summary-tiny-ov",
                "slim-tags-ov",
                "slim-topics-ov",
                "slim-xsum-phi-3-ov",
                "slim-extract-qwen-0.5b-ov",
                "slim-extract-qwen-1.5b-ov",
                "slim-extract-phi-3-ov",
            ],
        },
        {
            category: "StableLM Models",
            models: ["stablelm-2-zephyr-1_6b-ov", "stablelm-zephyr-3b-ov"],
        },
        {
            category: "BERT Models",
            models: [
                "industry-bert-asset-management-ov",
                "industry-bert-contracts-ov",
                "industry-bert-insurance-ov",
                "industry-bert-loans-ov",
                "industry-bert-sec-ov",
                "unitary-toxic-roberta-ov",
                "xlm-roberta-language-detector-ov",
            ],
        },
        {
            category: "Jina Models",
            models: ["jina-reranker-v1-turbo-en-ov", "jina-reranker-v1-tiny-en-ov"],
        },
        {
            category: "Specialized Models",
            models: ["intel-neural-chat-7b-v3-2-ov", "openchat-3.6-8b-20240522-ov"],
        },
        {
            category: "Other Models",
            models: [
                "all-mini-lm-16-v2-ov",
                "mathstral-7b-ov",
                "protectal-prompt-injection-ov",
                "valurank-bias-ov",
                "tiny-dolphin-2.8-1.1b-ov",
                "dreamgen-wizard1m-2.7b-ov",
            ],
        },
    ]

    return (
        <div className="w-full max-w-7xl mx-auto space-y-4 sm:space-y-6 px-2 sm:px-4 lg:px-6">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Intel Supported Models</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-3 sm:space-y-4">
                <div className="text-center space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                            Intel Supported Models
                        </h1>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-4xl mx-auto px-2 sm:px-4">
                        Comprehensive list of AI models optimized for Intel processors using OpenVINO runtime
                    </p>
                </div>

                <Alert>
                    <Info className="h-4 w-4 flex-shrink-0" />
                    <AlertDescription className="text-xs sm:text-sm lg:text-base">
                        These models are optimized for Intel processors and use the OpenVINO (OV) runtime for enhanced performance
                        on Intel hardware including CPUs, GPUs, and NPUs.
                    </AlertDescription>
                </Alert>
            </div>

            <Card>
                <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg lg:text-xl">
                        <Zap className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-blue-600" />
                        <span id="intel-optimization-features">Intel Optimization Features</span>
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm lg:text-base">
                        Key benefits of Intel-optimized models
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-2 sm:space-y-3">
                            <h4 className="font-semibold text-blue-900 text-sm sm:text-base">Performance Benefits</h4>
                            <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
                                <li>• Optimized for Intel CPU, GPU, and NPU architectures</li>
                                <li>• Enhanced inference speed with OpenVINO runtime</li>
                                <li>• Reduced memory footprint and power consumption</li>
                                <li>• Hardware-specific optimizations for latest Intel chips</li>
                            </ul>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                            <h4 className="font-semibold text-blue-900 text-sm sm:text-base">Supported Hardware</h4>
                            <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
                                <li>• Intel Core processors (Meteor Lake, Lunar Lake, Arrow Lake)</li>
                                <li>• Intel Xeon processors</li>
                                <li>• Intel Arc GPUs</li>
                                <li>• Intel Neural Processing Units (NPUs)</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Separator />

            <Card>
                <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg lg:text-xl">
                        <Database className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                        <span id="intel-supported-models">Intel Supported Models</span>
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm lg:text-base">
                        Complete catalog of models optimized for Intel processors
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-0 sm:p-6">
                    <div className="overflow-x-auto">
                        <div className="min-w-full inline-block align-middle">
                            <table className="w-full border-collapse border border-border rounded-lg">
                                <thead>
                                    <tr className="bg-blue-50">
                                        <th className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-left font-semibold text-xs sm:text-sm lg:text-base xl:text-lg text-blue-900">
                                            Model Type
                                        </th>
                                        <th className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-left font-semibold text-xs sm:text-sm lg:text-base xl:text-lg text-blue-900">
                                            Available Models
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {modelCategories.map((category, index) => (
                                        <tr key={category.category} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                                            <td className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 font-medium text-xs sm:text-sm align-top">
                                                <div className="break-words">
                                                    <Badge variant="secondary" className="text-xs">
                                                        {category.category}
                                                    </Badge>
                                                </div>
                                            </td>
                                            <td className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
                                                <div className="space-y-1 sm:space-y-2">
                                                    {category.models.map((model, modelIndex) => (
                                                        <div key={modelIndex} className="flex items-center gap-1 sm:gap-2">
                                                            <code className="text-xs sm:text-sm bg-muted px-1 sm:px-2 py-0.5 sm:py-1 rounded font-mono break-all">
                                                                {model}
                                                            </code>
                                                        </div>
                                                    ))}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="prose prose-gray max-w-none">
                <h2
                    id="getting-started"
                    className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4"
                >
                    Getting Started with Intel Models
                </h2>
                <p className="text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
                    To use Intel-optimized models in Model HQ:
                </p>
                <ol className="text-xs sm:text-sm lg:text-base space-y-1 sm:space-y-2 ml-4 sm:ml-6">
                    <li>Ensure you have an Intel processor with OpenVINO support</li>
                    <li>Select models with the "-ov" suffix from the Models section</li>
                    <li>The system will automatically use Intel optimizations when available</li>
                    <li>Monitor performance improvements in the system metrics</li>
                </ol>

                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                    Technical Support
                </h2>
                <p className="text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
                    For Intel-specific optimization questions or issues, contact our technical support team at{" "}
                    <code className="bg-muted px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm">support@aibloks.com</code>
                </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 lg:p-6">
                <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 mb-2 sm:mb-3 lg:mb-4">
                    🚀 Performance Tip
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-blue-800 mb-2 sm:mb-3 lg:mb-4">
                    For optimal performance on Intel hardware, choose models with the highest parameter count that your system can
                    support. Intel's optimization ensures efficient resource utilization.
                </p>
                <a
                    href="/system-configuration"
                    className="inline-flex items-center px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm lg:text-base rounded-md hover:bg-blue-700 transition-colors"
                >
                    Check System Requirements
                </a>
            </div>
        </div>
    )
}  
