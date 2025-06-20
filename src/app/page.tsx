
import { Bagel_Fat_One, Poppins } from 'next/font/google';
import Image from 'next/image';
import Conjuntos from '../../public/conjuntos.svg'

const bagel = Bagel_Fat_One({
  weight: ['400'],
  subsets: ["latin"]
})

const poppins = Poppins({
  weight: ['400', '700']
})

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen  w-full p-8 pb-20 gap-16">
      <main className="flex flex-col gap-[32px] items-center justify-center">
        <div className='flex flex-col md:gap-8 gap-4 items-center'>
          <div className='flex flex-col items-center'>
            <Image alt='Simbolo Conjuntos' src={Conjuntos} className='md:h-52 h-24' />
            <h1 className={`${bagel.className} md:text-[120px] text-6xl font-extrabold text-gray-50 text-shadow-lg`}>Conjuntos</h1>
          </div>
          <div className='flex flex-col md:gap-4 gap-3 items-center'>
            <h3 className={`${poppins.className} md:text-3xl text-[16px] text-[#79CEC0] font-bold`}>Colecione. Sabote. Blefe.</h3>
            <p className={`${poppins.className} text-gray-50 md:text-[20px] text-sm md:w-3xl w-[300px] text-center`}>Conjuntos é um jogo rápido, caótico e viciante — ideal para perder amizades ou ganhar respeito.</p>
          </div>
        </div>
        <div className='max-sm:hidden'>
          test
        </div>
        <div className="flex md:gap-4 gap-2 items-center flex-col sm:flex-row max-sm:w-[280px]">
          <a
            className={`max-sm:w-full rounded-lg border border-[#79CEC0] transition-colors flex items-center justify-center bg-transparent gap-2 hover:bg-[#79CEC0] h-12 md:text-2xl px-4 ${poppins.className}`}
            href="/cards"
            rel="noopener noreferrer"
          >
            Baixar Manual
          </a>
          <a
            className={`max-sm:w-full rounded-lg border border-[#79CEC0] transition-colors flex items-center justify-center bg-transparent gap-2 hover:bg-[#79CEC0] h-12 md:text-2xl px-4 ${poppins.className}`}
            href="/contador"
            rel="noopener noreferrer"
          >
            Contador de Rodadas
          </a>
          <a
            className={`max-sm:w-full rounded-lg border border-[#79CEC0] font-bold transition-colors flex items-center justify-center bg-[#79CEC0] gap-2 hover:bg-transparent hover:text-[#79CEC0] h-12 md:text-2xl text-background px-4 ${poppins.className}`}
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
