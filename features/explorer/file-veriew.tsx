import { Table } from "@tanstack/react-table"
import { FileEntry } from "./explorer-fetcher"
import FileIcon from "../file-icons/file-icon"
import FileDownload from "../file-download/file-download"
import { ScrollArea } from "@/components/ui/scroll-area"
import path from "path"
import { DataTablePagination } from "@/components/data-table-pagination"

type Props = {
  table: Table<FileEntry>, 
}
export default function FileViewer({ table }: Props) {
  return (
    <div>
      <ScrollArea
        className="text-xs p-2 border rounded-xl shadow-md h-[calc(100vh-350px)]"
        type="always"
      >
        <div>
          {table.getPaginationRowModel().rows.map((row) => {
            const origin = row.original
            const name = origin.name
            const parent = origin.parent
            const extname = origin.extname
            const fullpath = path.join(parent, name)
            return (
              <div
                key={name}
                className="grid grid-cols-10 border rounded-xs shadow-xx p-2"
              >
                <div className="w-8">
                  <FileIcon extension={extname} />
                </div>
                <div className="col-span-8 flex flex-col justify-between">
                  <div>{name}</div>
                  <div className="text-muted-foreground text-[0.6rem]">
                    {parent}
                  </div>
                </div>
                <div className="flex justify-end">
                  <FileDownload filename={fullpath} />
                </div>
              </div>
            )
          })}
        </div>
      </ScrollArea>

      <div className="p-2 border rounded-xl shadow-md flex justify-center">
        <div className="w-full">
          <DataTablePagination table={table} />
        </div>
      </div>
    </div>
  )
}