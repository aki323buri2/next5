"use client"
import TextField from "@/components/text-field";
import { ROOT_FOLDER } from "@/constants/folders";
import { FileDays, groupByDays } from "@/features/explorer/explorer-organizer";
import { useFileEntries } from "@/features/explorer/explorer-hooks";
import { useEffect, useMemo, useState } from "react"
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@radix-ui/react-tabs";
import { ColumnDef, Table } from "@tanstack/react-table"
import { FileEntry } from "@/features/explorer/explorer-fetcher"
import { useDataTable } from "@/components/data-table";
import FileViewer from "@/features/explorer/file-veriew";
const root = ROOT_FOLDER
const label = "検索"

const columns: ColumnDef<FileEntry>[] = [
  { accessorKey: "name" }, 
]
type TableMap = {
  [key: string]: Table<FileEntry>
}

export default function Home() {
  const [filter, setFilter] = useState("")
  const { data = [] } = useFileEntries(root)
  const [days, setDays] = useState<FileDays>({})
  const [tables, setTables] = useState<TableMap>({})
  useEffect(() => {
    if (data?.length) {
      const days = groupByDays(data)
      setDays(days)
    }
  }, [data])
  const tabsKeys = useMemo(
    () => Object.keys(days).sort().reverse().slice(0, 4),
    [days]
  )
  const table = useDataTable({ data, columns, filter, setFilter })
  return (
    <main className="container p-3 h-[calc(100vh-160px)] flex flex-col gap-2 border rounded-xl shadow-xl">
      <div className="pt-2">
        <TextField
          label={label}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          onReset={() => setFilter("")}
        />
      </div>

      <Tabs defaultValue="recent">
        <div className="p-2 py-1 flex justify-center border rounded-xl shadow-md">
          <TabsList className="gap-2">
            <TabsTrigger value="recent">最新</TabsTrigger>
            {tabsKeys.map((day) => {
                const key = format(day, "yyyy/MM/dd")
                return (
                  <TabsTrigger value={key} key={key}>
                    {key}
                  </TabsTrigger>
                )
              })}
          </TabsList>
        </div>
        <TabsContent value="recent">
          <FileViewer table={table} />
        </TabsContent>
        {tabsKeys.map((day) => {
          const table = tables[day]
          return (table &&
            <FileViewer key={day} table={table} />
          )
        })}
      </Tabs>
    </main>
  )
}
