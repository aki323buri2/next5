import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Download } from "lucide-react"
import { downloadFile } from "./file-download-function"
import path from "path"

type Props = {
  filename: string 
  className?: string 
}
export default function FileDownload({
  filename, 
  className, 
}: Props) {
  const handleClick = () => {
    downloadWithDialog(filename)
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={handleClick}
            className={cn(className)}
          >
            <Download />
          </Button>
        </TooltipTrigger>
        <TooltipContent>ファイルのダウンロード</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
export async function downloadWithDialog(filename: string) {
  const name = path.basename(filename) 
  const base64 = await downloadFile(filename) 
  const buffer = Buffer.from(base64, "base64")
  const blob = new Blob([buffer])
  const link = document.createElement("a")
  const url = window.URL.createObjectURL(blob)
  link.href = url 
  link.setAttribute("download", name) 
  document.body.appendChild(link) 
  link.click()
  document.body.removeChild(link) 
}