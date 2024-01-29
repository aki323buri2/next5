import { FileIcon as ReactFileIcon, FileIconProps } from "react-file-icon"
import { defaultStyles } from "./icon-default-styles"

type Props = {
  extension: string 
}
export default function FileIcon({
  extension, 
}: Props) {
  return (
    <ReactFileIcon 
      extension={extension}
      {...(defaultStyles[extension] as FileIconProps)}
    />
  )
}