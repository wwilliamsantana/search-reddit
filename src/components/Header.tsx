import { Grip } from "lucide-react";
import { SearchBox } from "./SearchBox";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full py-7 px-20">
      <div className="flex items-center w-full gap-8">
        <h1 className="text-3xl font-bold">Re<span className="text-orange-500">dd</span>it</h1>

        <SearchBox />
      </div>
      <section className="flex items-center justify-center gap-2">
        <span className="hover:bg-white/30 hover:rounded-full p-2">
          <Grip width={20} height={20} />
        </span>
        <img src={"https://github.com/wwilliamsantana.png"} alt="" className="rounded-full w-7 h-7" />

      </section>
    </header>
  )
}