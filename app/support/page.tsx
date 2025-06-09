"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, CheckCircle, AlertCircle } from "lucide-react"

export default function SupportPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        issueType: "",
        subject: "",
        body: "",
        files: [] as File[],
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const issueTypes = [
        { value: "general", label: "General Inquiry" },
        { value: "technical", label: "Technical Issue" },
        { value: "bug", label: "Bug Report" },
        { value: "feature", label: "Feature Request" },
        { value: "documentation", label: "Documentation Feedback" },
        { value: "other", label: "Other" },
    ]

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || [])
        setFormData((prev) => ({ ...prev, files }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus("idle")

        try {
            // Create FormData for file uploads
            const formDataToSend = new FormData()
            formDataToSend.append("name", formData.name)
            formDataToSend.append("email", formData.email)
            formDataToSend.append("issueType", formData.issueType)
            formDataToSend.append("subject", formData.subject)
            formDataToSend.append("body", formData.body)

            // Add files
            formData.files.forEach((file, index) => {
                formDataToSend.append(`file_${index}`, file)
            })

            // Send to server action
            const response = await fetch("/api/support", {
                method: "POST",
                body: formDataToSend,
            })

            if (response.ok) {
                setSubmitStatus("success")
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    issueType: "",
                    subject: "",
                    body: "",
                    files: [],
                })
                // Reset file input
                const fileInput = document.getElementById("file-upload") as HTMLInputElement
                if (fileInput) fileInput.value = ""
            } else {
                throw new Error("Failed to send email")
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Support</h1>
                    <p className="text-lg text-gray-600">Get help with Model HQ and find answers to common questions.</p>
                </div>

                {/* Support Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Support</CardTitle>
                        <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name *</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="issue-type">Issue/Feedback Type *</Label>
                                <Select
                                    value={formData.issueType}
                                    onValueChange={(value) => handleInputChange("issueType", value)}
                                    required
                                >
                                    <SelectTrigger id="issue-type">
                                        <SelectValue placeholder="Select the type of issue or feedback" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {issueTypes.map((type) => (
                                            <SelectItem key={type.value} value={type.value}>
                                                {type.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject *</Label>
                                <Input
                                    id="subject"
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => handleInputChange("subject", e.target.value)}
                                    required
                                    placeholder="Brief description of your issue or feedback"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="body">Message *</Label>
                                <Textarea
                                    id="body"
                                    value={formData.body}
                                    onChange={(e) => handleInputChange("body", e.target.value)}
                                    required
                                    placeholder="Please provide detailed information about your issue or feedback..."
                                    className="min-h-[120px]"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="file-upload">Attachments</Label>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <input
                                        id="file-upload"
                                        type="file"
                                        multiple
                                        onChange={handleFileChange}
                                        className="block w-full text-sm text-muted-foreground
                 file:mr-4 file:rounded-md file:border-0
                 file:bg-primary file:px-4 file:py-2
                 file:text-sm file:font-medium
                 file:text-primary-foreground
                 hover:file:bg-primary/90"
                                    />
                                    <Upload className="h-4 w-4 text-muted-foreground sm:flex-shrink-0" />
                                </div>

                                {formData.files.length > 0 && (
                                    <div className="text-sm text-muted-foreground">
                                        Selected files: {formData.files.map((f) => f.name).join(", ")}
                                    </div>
                                )}

                                <p className="text-xs text-muted-foreground">
                                    You can attach screenshots, logs, or other relevant files (max 10MB per file)
                                </p>
                            </div>

                            {submitStatus === "success" && (
                                <Alert className="border-green-200 bg-green-50">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <AlertDescription className="text-green-800">
                                        Your support request has been sent successfully! We'll get back to you as soon as possible.
                                    </AlertDescription>
                                </Alert>
                            )}

                            {submitStatus === "error" && (
                                <Alert className="border-red-200 bg-red-50">
                                    <AlertCircle className="h-4 w-4 text-red-600" />
                                    <AlertDescription className="text-red-800">
                                        There was an error processing your request. Please try again or contact support@aibloks.com
                                        directly.
                                    </AlertDescription>
                                </Alert>
                            )}

                            <Button
                                type="submit"
                                disabled={
                                    isSubmitting ||
                                    !formData.name ||
                                    !formData.email ||
                                    !formData.issueType ||
                                    !formData.subject ||
                                    !formData.body
                                }
                                className="w-full sm:w-auto"
                            >
                                {isSubmitting ? "Submitting..." : "Submit Support Request"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Support Options */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">📧 Email Support</h2>
                        <p className="text-gray-600 mb-4">
                            For technical issues and general inquiries, reach out to our support team.
                        </p>
                        <a href="mailto:support@aibloks.com" className="text-blue-600 hover:text-blue-800 underline font-medium">
                            support@aibloks.com
                        </a>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">📚 Documentation</h2>
                        <p className="text-gray-600 mb-4">
                            Browse our comprehensive documentation for detailed guides and tutorials.
                        </p>
                        <a href="/" className="text-blue-600 hover:text-blue-800 underline font-medium">
                            View Documentation
                        </a>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">💬 Discord Community</h2>
                        <p className="text-gray-600 mb-4">Join our community discussions and connect with other users.</p>
                        <a
                            href="https://discord.gg/bphreFK4NJ"
                            className="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                            Join Community
                        </a>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">🐛 Bug Reports</h2>
                        <p className="text-gray-600 mb-4">Found a bug? Report it on our GitHub repository.</p>
                        <a
                            href="https://github.com/llmware-ai/llmware/issues"
                            className="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                            Report Bug
                        </a>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-blue-900 mb-4">🚀 Quick Start</h2>
                    <p className="text-blue-800 mb-4">
                        New to Model HQ? Check out our getting started guide to begin your journey.
                    </p>
                    <a
                        href="/getting-started"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    )
}
