import Image from "next/image";
import logo from "@/resources/logo6-trimmed.png"
export default function Logo() {
  return (
    <div>
      <Image alt="logo" src={logo} className="w-10" />
    </div>
  )
}