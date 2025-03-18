import logo from "../assets/reddit.png"


export default function Card() {
  return (
    <div className="flex gap-2 flex-col w-7/12 mb-5" >
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="object-contain border border-white rounded-full w-7" />
        <div className="flex flex-col">
          <h3 className="">Reddit</h3>
          <span className="text-xs">https://reddit.com/r/filmes</span>
        </div>
      </div>
      <h2 className="text-2xl font-bold">Reddit: Filme para Oscar</h2>
      <p className="text-sm">A round cutout of the reddit logo here with transparent background. I tried all i can buy always some kind of black background generated.</p>

    </div>
  )
}

/**
 * data/children/0/data
 * title - Discord do r/Filmes!
 * created - 1736273108 
 * author - RaizenMatsuda
 * permalink - /r/filmes/comments/1j935…obre_o_filme_o_segredo/
 * link_flair_text - Tipo
 */