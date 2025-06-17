
import { Tiny5, Bagel_Fat_One, Braah_One } from 'next/font/google'
import CardRotation from "./components/carta";

const tiny5 = Tiny5({
  weight: ["400"]
})

const bagel = Bagel_Fat_One({
  weight: ['400']
})

const braah = Braah_One({
  weight: ['400']
})

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen  w-full p-8 pb-20 gap-16">
      <main className="flex flex-col gap-[32px] items-center justify-center">
        <div className='flex flex-col items-center'>
          <h1 className={`${bagel.className} text-[112px] font-extrabold text-[#DCB826] text-shadow-lg`}>Conjuntos</h1>
          <h3 className={`${braah.className} text-2xl text-[#D7EEF3]`}>Colecione. Sabote. Blefe.</h3>
          <p className={`${braah.className} text-[#79CEC0] mt-4`}>Conjuntos é um jogo rápido, caótico e viciante — ideal pra perder amizades ou ganhar respeito.</p>
        </div>
        <div className="w-full h-[400px] flex justify-center items-center">
          <CardRotation />
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className={`rounded-sm transition-colors flex items-center justify-center bg-[#232162] text-background gap-2 hover:bg-[#79CEC0] h-12 text-2xl px-4 ${tiny5.className}`}
            href="/cards"
            rel="noopener noreferrer"
          >
            Baixar Manual
          </a>
          <a
            className={`rounded-sm transition-colors flex items-center justify-center bg-[#232162] text-background gap-2 hover:bg-[#79CEC0] h-12 text-2xl px-4 ${tiny5.className}`}
            href="/cards"
            rel="noopener noreferrer"
          >
            Contador de Rodadas
          </a>
          <a
            className={`rounded-sm border border-[#232162] transition-colors flex items-center justify-center bg-[#DCB826] gap-2 hover:bg-[#79CEC0] h-12 text-2xl text-[#232162] px-4 ${tiny5.className}`}
            href="/cards"
            rel="noopener noreferrer"
          >
            Quero Jogar Agora!
          </a>
        </div>
      </main>
    </div>
  );
}
