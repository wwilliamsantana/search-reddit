import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, Keyboard, Mic, Search } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schemaSearch = z.object({
  dataSearch: z.string().min(3, "A pesquisa deve ter pelo menos 3 caracteres.")
})

type DataSearch = z.infer<typeof schemaSearch>

export function SearchBox() {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm<DataSearch>({
    resolver: zodResolver(schemaSearch)
  })

  function onSubmit(data: DataSearch) {
    console.log(data.dataSearch)
    reset()
  }

  return (
    <form className=" bg-[#3f4454] p-3 rounded-full in-focus-within:bg-gray-600 flex items-center  w-4/6" onSubmit={handleSubmit(onSubmit)}>
      {isFocused && <Search width={16} />}
      <input
        type="text"
        className={`mx-4 text-lg outline-none bg-transparent flex-1`}
        {...register("dataSearch")}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="flex gap-4 mr-2 items-center">
        <span className="w-[1px] h-5 bg-white block" />
        <Keyboard width={20} />
        <Mic width={20} />
        <Camera width={20} />
        <Search width={20} />
      </div>
    </form>
  )
}