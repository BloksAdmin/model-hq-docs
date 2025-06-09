import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ChatErrorPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/chat">Chat</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Error Handling</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Possible Error: Unfortunately, something has gone wrong loading _model_name_
        </h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>If you encounter any such issues during the download—such as the error prompt below:</p>

        <img src="/chat/error1.png" alt="error" />

        <p>
          Click <strong>"Yes"</strong> to retry and continue the download.
        </p>
        <blockquote data-type="warning">
          <p>
            Clicking <strong>"No"</strong> will return you to the <strong>Main Menu</strong>.
          </p>
        </blockquote>

        <p>After confirming, the interface should update to:</p>

        <img src="/chat/error2.png" alt="error" />

        <p>Once you confirm and continue the download, the interface will update to the following:</p>

        <img src="/chat/chatLoad.png" alt="chatLoad" />

        <p>
          At this stage, the selected models will begin loading automatically after the download completes.
          <br />
          Please wait for the loading process to finish before proceeding to use the Chat feature.
        </p>

        <p>
          Most common causes of errors are usually attributed to not enough memory on device, disrupted WiFi connection,
          or device interruption of model download due to hibernation mode (refer to{" "}
          <strong>System Configuration guide</strong> for recommended system settings prior to downloading models).
        </p>

        <p>&nbsp;</p>
        <p>
          If the bug still persists, then reach out to us at <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
