"use server"
import { ARCHIVE_FOLDER } from "@/constants/folders"
import { format } from "date-fns"
import { Dirent, promises as fs } from "fs"
import path from "path"
const ROOT_FOLDER = "D:/data/eroi"
export type FileEntry = {
  name: string 
  parent: string 
  extname: string
  size: number  
  mtime: Date 
  ctime: Date 
  atime: Date 
}
const excludes = [
  "Thumbs.db", 
]
export async function fetchFiles(dirname: string) {
  const dirent = await fs.readdir(dirname, {
    withFileTypes: true, 
  })
  const entries: FileEntry[] = await Promise.all(await dirent
    .filter((d: Dirent) => !d.isDirectory()) 
    .filter(({ name }) => !excludes.includes(name))
    .map(async (d: Dirent) => {
      const name = d.name 
      const parent = d.path 
      const extname = path.extname(name).slice(1) // trim first [.] character
      
      const fullpath = path.join(parent, name)
      console.log(fullpath)
      const stat = await fs.stat(fullpath)
      const size = stat?.size 
      const mtime = stat.mtime
      const ctime = stat.ctime
      const atime = stat.atime
      const entry: FileEntry = {
        name, 
        parent, 
        extname, 
        size, 
        mtime, 
        ctime, 
        atime, 
      }
      return entry 
    }))
  return entries
}

