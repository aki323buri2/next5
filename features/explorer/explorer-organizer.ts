"use client"

import { ARCHIVE_FOLDER } from "@/constants/folders"
import { format } from "date-fns"
import { FileEntry } from "./explorer-fetcher"

export type FileDays = {
  [key: string]: FileEntry[] 
}
export function getDayFolders(days: FileDays) {
  const folders = Object.keys(days)
  .sort()
  .reverse()
  .map((s: string) => {
    const day = new Date(s)
    const folder = `${ARCHIVE_FOLDER}/${format(day, "yyyy")}/${format(
      day,
      "yyyyMM"
    )}${format(day, "yyyyMMdd")}`
    return { day, folder }
  })
  return folders
}

export function groupByDays(data: FileEntry[]) {
  const days = data.reduce((acc: FileDays, entry: FileEntry) => {
    const key: string = format(entry.mtime, "yyyy/MM/dd")
    const arr = acc[key] ?? []
    arr.push(entry)
    acc[key] = arr 
    return acc
  }, {})
  // toast.info(JSON.stringify({
  //   days: Object.keys(days), 
  // }, null, 2))
  return days 
}