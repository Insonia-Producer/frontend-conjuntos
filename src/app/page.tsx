
import Image from 'next/image';
import Conjuntos from '../../public/conjuntos.svg'
import Gloria from '../../public/gloria.svg'
import Amor from '../../public/amor.svg'
import Bravura from '../../public/bravura.svg'
import Coringa from '../../public/coringa.svg'
import Morte from '../../public/morte.svg'
import Cartas from '../../public/cartas.png'

export default function Home() {
  return (
    <div className="flex max-sm:items-start justify-center min-h-screen w-full pb-20 pt-8 gap-16 overflow-hidden h-screen">
      <main className="flex flex-col gap-[32px] items-center justify-center">
        <div className='flex flex-col md:gap-8 gap-4 items-center '>
          <div className='flex flex-col items-center'>
            <Image alt='Simbolo Conjuntos' src={Conjuntos} className='md:h-52 h-24' />
            <h1 className='md:text-[120px] text-6xl text-gray-50 text-shadow-lg'>Conjuntos</h1>
          </div>
          <div className='flex flex-col md:gap-4 gap-3 items-center'>
            <h3 className='md:text-3xl text-[16px] text-[#79CEC0] font-bold'>Colecione. Sabote. Blefe.</h3>
            <p className='text-gray-50 md:text-[20px] text-sm md:w-3xl w-[300px] text-center'>Conjuntos é um jogo rápido, caótico e viciante — ideal para perder amizades ou ganhar respeito.</p>
          </div>
        </div>
        <div className='max-sm:hidden flex gap-12'>
          <Image alt='Simbolo Conjuntos' src={Coringa} className='h-24 cursor-pointer hover:scale-110 transition-all' />
          <Image alt='Simbolo Conjuntos' src={Morte} className='h-24 cursor-pointer hover:scale-110 transition-all' />
          <Image alt='Simbolo Conjuntos' src={Bravura} className='h-24 cursor-pointer hover:scale-110 transition-all' />
          <Image alt='Simbolo Conjuntos' src={Amor} className='h-24 cursor-pointer hover:scale-110 transition-all' />
          <Image alt='Simbolo Conjuntos' src={Gloria} className='h-24 cursor-pointer hover:scale-110 transition-all' />
        </div>
        <div className="flex md:gap-4 gap-2 items-center flex-col sm:flex-row max-sm:w-[280px]">
          <a
            className='max-sm:w-full rounded-lg border border-[#79CEC0] transition-colors flex items-center justify-center bg-transparent gap-2 hover:bg-[#79CEC0] h-12 md:text-2xl px-4'
            download="Manual-Conjuntos.pdf"
            href='./'
            rel="noopener noreferrer"
          >
            Baixar Manual
          </a>
          <a
            className='max-sm:w-full rounded-lg border border-[#79CEC0] transition-colors flex items-center justify-center bg-transparent gap-2 hover:bg-[#79CEC0] h-12 md:text-2xl px-4'
            href="/contador"
            rel="noopener noreferrer"
          >
            Contador de Rodadas
          </a>
          {/* <a
            className='max-sm:w-full rounded-lg border border-[#79CEC0] font-bold transition-colors flex items-center justify-center bg-[#79CEC0] gap-2 hover:bg-transparent hover:text-[#79CEC0] h-12 md:text-2xl text-background px-4'
            href="./"
            rel="noopener noreferrer"
          >
            Quero Jogar Agora!
          </a> */}
        </div>
        <div className='sm:hidden flex items-center mt-4'>
          <Image alt='Deck de cartas' src={Cartas} className=' scale-[120%]' />
        </div>
      </main>
    </div>
  );
}
