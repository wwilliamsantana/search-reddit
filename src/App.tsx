import ContainerCards from "./components/ContainerCards"
import Header from "./components/Header"


export function App() {
  return (
    <main className="font-[family-name:--font-open] min-w-full ">
      <Header />
      <span className="w-full h-[0.5px] bg-white block h-" />
      <ContainerCards />
    </main>
  )
}
