"use client"

import useSWR from "swr"
import { fetchFiles, FileEntry } from "./explorer-fetcher"
import { useEffect } from "react"
import { toast } from "sonner"

export function useFileEntries(dirname: string) {
  const { data, isLoading, isValidating, error, mutate } = useSWR<FileEntry[]>(
    `fetch/files/${dirname}`, 
    async () => {
      const entries = await fetchFiles(dirname)
      return entries
    }
  )
  useEffect(() => {
    if (isLoading) {
      toast.warning("loading...")
    }
  }, [isLoading])
  useEffect(() => {
    if (isValidating) {
      toast.warning("validating...")
    }
  }, [isValidating])
  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])
  useEffect(() => {
    if (data?.length === 0) {
      toast.warning("successfully fetched but no records..")
    }
    else if (data) {
      toast.success(`successfully fetched (${data.length.toLocaleString()} records)`)
    }
  }, [data])
  return { data, error, mutate }
}