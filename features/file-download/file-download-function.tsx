"use server"
import { promises as fs } from "fs"

export async function downloadFile(filename: string) {
  const buffer = await fs.readFile(filename) 
  const base64 = buffer.toString("base64")
  return base64 
}