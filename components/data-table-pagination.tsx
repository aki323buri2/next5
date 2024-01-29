import { Button } from "@/components/ui/button"
import { Table } from "@tanstack/react-table"
import { ArrowLeft, ArrowLeftToLine, ArrowRight, ArrowRightToLine } from "lucide-react"
import { Slider } from "./ui/slider"


export function DataTablePagination<TData, TValue>({
  table, 
}: { table: Table<TData>}) {
  
  return (
    <div className="flex items-center justify-between gap-2">
      {/* pagination info */}
      <div className="w-[10rem] flex flex-col text-center text-muted-foreground text-xs">
        <div>
        {table.getState().pagination.pageIndex + 1}{"/"}
          {table.getPageCount()}
        </div>
        <div>
          {" ("}
          {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}{"~"}
          {Math.min(
            (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, 
            table.getFilteredRowModel().rows.length, 
          ).toLocaleString()}{" of "}
          {table.getFilteredRowModel().rows.length.toLocaleString()}{")"}
        </div>
      </div>
      <div className="grow flex justify-center">
        <Slider max={table.getPageCount() - 1} 
        value={[table.getState().pagination.pageIndex]} 
        onValueChange={([value]) => table.setPageIndex(value)}/>
      </div>
      <div className="flex">
        <Button
          variant="outline"
          size="icon"
          onClick={() => table.setPageIndex(0)}
          disabled={Boolean(table.getPageCount() === 0)}
        >
          <ArrowLeftToLine />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ArrowLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ArrowRight />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={Boolean(table.getPageCount() === 0)}
        >
          <ArrowRightToLine />
        </Button>
      </div>
    </div>
  )
}