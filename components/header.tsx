import Logo from "./logo";

export default function Header() {
  return (
    <header className="container px-3 h-[60px] flex gap-2 items-center justify-between border rounded-xl shadow-xl">
      <div className="">
        <Logo />
      </div>
      <div className="grow pl-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Fetcher
        </h1>
      </div>
      <div>
        menu
      </div>
    </header>
  )
}