import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function AgentPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Agents</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring Agents in Model HQ</h1>
        <p className="text-lg text-muted-foreground">Learn how to create and manage intelligent agents in Model HQ.</p>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Agent documentation is coming soon. This section will cover how to create, configure, and manage intelligent
          agents in Model HQ.
        </p>

        <h2>What are Agents?</h2>
        <p>
          Agents in Model HQ are intelligent entities that can perform specific tasks, make decisions, and interact with
          users and other systems autonomously.
        </p>

        <h2>Coming Soon</h2>
        <ul>
          <li>Agent creation and configuration</li>
          <li>Agent deployment and management</li>
          <li>Agent interaction patterns</li>
          <li>Advanced agent capabilities</li>
        </ul>

        <p>
          If you have any questions or feedback, please contact us at <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
