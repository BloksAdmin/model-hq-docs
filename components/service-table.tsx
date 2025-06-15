export function ServiceTable() {
  return (
    <div className="overflow-x-auto my-6">
      <h2 className="text-l font-semibold mb-4" id="service-table">🛠 Services, Instructions, Description & Expected Context</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Below is the list of supported services, their expected instruction formats, descriptions, and applicable
        context sources.
      </p>
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Service Name</th>
            <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Instruction</th>
            <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Description</th>
            <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Context</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">build_table</td>
            <td className="border border-gray-300 px-3 py-2">
              Enter name of table (will be built from the selected input table file)
            </td>
            <td className="border border-gray-300 px-3 py-2">Create Table from CSV data</td>
            <td className="border border-gray-300 px-3 py-2">User-Table</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">query_custom_table</td>
            <td className="border border-gray-300 px-3 py-2">Enter query for database table</td>
            <td className="border border-gray-300 px-3 py-2">
              Database lookup in natural language. Requires build_table first. Keep table schema in mind.
            </td>
            <td className="border border-gray-300 px-3 py-2">
              Enter_name_of_Table This table is the result of Build_Table service step.
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">semantic_filter</td>
            <td className="border border-gray-300 px-3 py-2">What is your question or instruction?</td>
            <td className="border border-gray-300 px-3 py-2">
              Filters an existing source based on question/topic to create new filtered source
            </td>
            <td className="border border-gray-300 px-3 py-2">User-Source</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">text_filter</td>
            <td className="border border-gray-300 px-3 py-2">What is the keyword or topic to filter the source?</td>
            <td className="border border-gray-300 px-3 py-2">Filters an existing source based on question/topic</td>
            <td className="border border-gray-300 px-3 py-2">
              User-Source, or a &apos;filtered&apos; query in the agent process.
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">document_filter</td>
            <td className="border border-gray-300 px-3 py-2">Document name</td>
            <td className="border border-gray-300 px-3 py-2">Filters an existing source by document name</td>
            <td className="border border-gray-300 px-3 py-2">
              User-Source, or a &apos;filtered&apos; query in the agent process.
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">table_filter</td>
            <td className="border border-gray-300 px-3 py-2">No instruction required</td>
            <td className="border border-gray-300 px-3 py-2">Filters table type content in User Source</td>
            <td className="border border-gray-300 px-3 py-2">User-Source</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">aggregate_context</td>
            <td className="border border-gray-300 px-3 py-2">
              List the names of source contexts to consolidate. Use space-separated names like: source_1 source_2
              source_3. Do not use curly braces.
            </td>
            <td className="border border-gray-300 px-3 py-2">
              Consolidates multiple source contexts into one. This is used to merge several sources into a unified
              context.
            </td>
            <td className="border border-gray-300 px-3 py-2">No input context required</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">create_context</td>
            <td className="border border-gray-300 px-3 py-2">What is your question or instruction?</td>
            <td className="border border-gray-300 px-3 py-2">Answers a question or performs an instruction</td>
            <td className="border border-gray-300 px-3 py-2">User-Source</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">parse_document</td>
            <td className="border border-gray-300 px-3 py-2">Enter name of new document source</td>
            <td className="border border-gray-300 px-3 py-2">
              Creates a source from document for further document-related processing
            </td>
            <td className="border border-gray-300 px-3 py-2">User-Document</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">rag_answer</td>
            <td className="border border-gray-300 px-3 py-2">Ask question to longer document input</td>
            <td className="border border-gray-300 px-3 py-2">Answers a question based on a longer document input</td>
            <td className="border border-gray-300 px-3 py-2">User-Source, Provide_instruction_or_query</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">report_commentary</td>
            <td className="border border-gray-300 px-3 py-2">(Optional) Guidance to Commentary</td>
            <td className="border border-gray-300 px-3 py-2">
              Generates commentary on key process results from agent state
            </td>
            <td className="border border-gray-300 px-3 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">agent_report</td>
            <td className="border border-gray-300 px-3 py-2">Enter title for agent report</td>
            <td className="border border-gray-300 px-3 py-2">Prepares report on agent output</td>
            <td className="border border-gray-300 px-3 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">wikipedia_search</td>
            <td className="border border-gray-300 px-3 py-2">Add Wikipedia Articles as Research Context</td>
            <td className="border border-gray-300 px-3 py-2">Adds Wikipedia articles as research context</td>
            <td className="border border-gray-300 px-3 py-2">None</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">connect_library</td>
            <td className="border border-gray-300 px-3 py-2">Enter library name</td>
            <td className="border border-gray-300 px-3 py-2">Connects to Semantic Library from Model HQ API</td>
            <td className="border border-gray-300 px-3 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">query_library</td>
            <td className="border border-gray-300 px-3 py-2">Enter query for semantic library</td>
            <td className="border border-gray-300 px-3 py-2">Queries connected semantic library</td>
            <td className="border border-gray-300 px-3 py-2">Enter_Library-name</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">get_stock_summary</td>
            <td className="border border-gray-300 px-3 py-2">Enter stock ticker</td>
            <td className="border border-gray-300 px-3 py-2">Stock lookup using YFinance</td>
            <td className="border border-gray-300 px-3 py-2">None</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">vision</td>
            <td className="border border-gray-300 px-3 py-2">Enter question to image file</td>
            <td className="border border-gray-300 px-3 py-2">Provides answer/description from image</td>
            <td className="border border-gray-300 px-3 py-2">User-Image</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">sentiment</td>
            <td className="border border-gray-300 px-3 py-2">No instruction required</td>
            <td className="border border-gray-300 px-3 py-2">Analyzes sentiment (positive/negative/neutral)</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">boolean</td>
            <td className="border border-gray-300 px-3 py-2">Provide yes/no question</td>
            <td className="border border-gray-300 px-3 py-2">Provides yes/no answer with explanation</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">emotions</td>
            <td className="border border-gray-300 px-3 py-2">No instruction required</td>
            <td className="border border-gray-300 px-3 py-2">Analyzes primary emotion in input</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">topics</td>
            <td className="border border-gray-300 px-3 py-2">No instruction required</td>
            <td className="border border-gray-300 px-3 py-2">Classifies topic of input</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">tags</td>
            <td className="border border-gray-300 px-3 py-2">No instruction required</td>
            <td className="border border-gray-300 px-3 py-2">Generates tags from input</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">intent</td>
            <td className="border border-gray-300 px-3 py-2">No instruction required</td>
            <td className="border border-gray-300 px-3 py-2">Classifies intent of input</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">ratings</td>
            <td className="border border-gray-300 px-3 py-2">No instruction required</td>
            <td className="border border-gray-300 px-3 py-2">Rates positivity from 1 to 5</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">ner</td>
            <td className="border border-gray-300 px-3 py-2">No instruction required</td>
            <td className="border border-gray-300 px-3 py-2">
              Identifies named entities (people, places, organizations)
            </td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">xsum</td>
            <td className="border border-gray-300 px-3 py-2">No instruction required</td>
            <td className="border border-gray-300 px-3 py-2">Generates extreme summary or headline</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">summary</td>
            <td className="border border-gray-300 px-3 py-2">
              Optional - add input instructions to focus the summarization
            </td>
            <td className="border border-gray-300 px-3 py-2">Summarizes source content</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">category</td>
            <td className="border border-gray-300 px-3 py-2">No instruction required</td>
            <td className="border border-gray-300 px-3 py-2">Analyzes category of the input passage</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">q_gen</td>
            <td className="border border-gray-300 px-3 py-2">No instruction required</td>
            <td className="border border-gray-300 px-3 py-2">Generates question from passage</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">chat</td>
            <td className="border border-gray-300 px-3 py-2">What is your question or instruction?</td>
            <td className="border border-gray-300 px-3 py-2">Answers a question or performs instruction</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text, None</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">extract</td>
            <td className="border border-gray-300 px-3 py-2">Enter extraction key, e.g., &apos;customer name&apos;</td>
            <td className="border border-gray-300 px-3 py-2">Extracts key-value pair</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">extract_tiny</td>
            <td className="border border-gray-300 px-3 py-2">Enter extraction key, e.g., &apos;customer name&apos;</td>
            <td className="border border-gray-300 px-3 py-2">Extracts key-value pair (tiny version)</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">answer</td>
            <td className="border border-gray-300 px-3 py-2">What is your question?</td>
            <td className="border border-gray-300 px-3 py-2">Answers specific question from passage</td>
            <td className="border border-gray-300 px-3 py-2">MAIN-INPUT, User-Text</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">extract_table</td>
            <td className="border border-gray-300 px-3 py-2">Enter query to filter among available tables</td>
            <td className="border border-gray-300 px-3 py-2">Extracts table from document</td>
            <td className="border border-gray-300 px-3 py-2">User-Document</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-medium">END</td>
            <td className="border border-gray-300 px-3 py-2">End of process</td>
            <td className="border border-gray-300 px-3 py-2">Marks the end of agent process</td>
            <td className="border border-gray-300 px-3 py-2">None</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
