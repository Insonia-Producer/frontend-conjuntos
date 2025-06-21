'use client'

import Image, { StaticImageData } from 'next/image';
import { Bagel_Fat_One } from 'next/font/google';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRotateRight, FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import especialUm from '../../../public/cards/especial-1.png';
import especialDois from '../../../public/cards/especial-2.png';
import especialTres from '../../../public/cards/especial-3.png';
import especialQuatro from '../../../public/cards/especial-4.png';
import especialCinco from '../../../public/cards/especial-5.png';
import especialSeis from '../../../public/cards/especial-6.png';

const bagel = Bagel_Fat_One({
    weight: ['400'],
    subsets: ["latin"]
})

interface CartaEspecialProps {
    carta: StaticImageData;
    nome: string;
    descricao: string
}

export default function ContadorRodadas() {
    const [rodadas, setRodadas] = useState<number>(Number((typeof window !== 'undefined') && localStorage.getItem('rodadas')) || 1)
    const [adicionalTurnos, setAdicionalTurnos] = useState<boolean>(Number((typeof window !== 'undefined') && localStorage.getItem('especial')) > 0 || false)
    const [especialAtiva, setEspecialAtiva] = useState<CartaEspecialProps | null>(null)

    const cartasEspeciais: CartaEspecialProps[] = [
        {
            carta: especialUm,
            nome: 'DESCARTE COLETIVO',
            descricao: 'Todos os jogadores descartam uma carta da mão e compram outra. A ação começa no jogador que ativou o efeito e segue no sentido horário.',
        },
        {
            carta: especialDois,
            nome: '+2 RODADAS',
            descricao: 'Adiciona duas rodadas extras ao jogo. Mais tempo para montar conjuntos ou sabotar seus rivais.',
        },
        {
            carta: especialTres,
            nome: 'ESPIAR CARTAS',
            descricao: 'Você pode olhar uma carta da mão de cada oponente. Use com sabedoria (e cara de blefe).',
        },
        {
            carta: especialQuatro,
            nome: 'RODÍZIO DE MÃOS',
            descricao: 'Todos passam suas mãos inteiras para o jogador à esquerda. O caos está servido.',
        },
        {
            carta: especialCinco,
            nome: 'TROCA DIRETA',
            descricao: 'Escolha um jogador e troque toda a sua mão com a dele. Perfeito para virar o jogo (ou ferrar alguém).',
        },
        {
            carta: especialSeis,
            nome: 'DESCARTE TOTAL',
            descricao: 'Escolha um jogador (qualquer um, inclusive você) para descartar toda a mão e comprar cartas novas. Recomece do zero!',
        },
    ]

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('rodadas', rodadas.toString());
        }
    }, [rodadas]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('especial', (adicionalTurnos ? 1 : 0).toString());
        }
    }, [adicionalTurnos]);

    const finalizarPartida = () => {
        setAdicionalTurnos(false);
        setRodadas(0)
        if (typeof window !== 'undefined') {
            localStorage.setItem('especial', '0');
            localStorage.setItem('rodadas', '1');
        }
    }

    return (
        <div className='md:py-12 py-4'>
            <div className='px-4 md:px-12 flex flex-col items-center md:gap-10 gap-4'>
                <a className='absolute md:top-10 md:left-10 top-6 left-6 cursor-pointer md:text-3xl text-xl' href='./'><FaArrowLeft /></a>
                <h1 className={`${bagel.className} md:text-5xl text-3xl text-gray-50 text-shadow-lg text-center max-sm:w-56`}>
                    Contador de Rodadas
                </h1>
                <div className='flex md:gap-8 gap-4 items-center'>
                    <button
                        className='max-sm:w-full rounded-lg border border-[#79CEC0] transition-colors flex items-center justify-center bg-transparent gap-2 hover:bg-[#79CEC0] md:h-12 h-10 md:text-2xl md:px-4 px-3'
                        onClick={() => setRodadas((prev) => prev + 1)}
                        disabled={(rodadas >= (adicionalTurnos ? 12 : 10))}>
                        <FaPlus />
                    </button>
                    <div className='flex md:gap-4 gap-2 p-2 md:p-4'>
                        <p className='font-bold text-8xl md:text-[140px] md:w-[110px] w-[90px] h- flex justify-center'>{rodadas}</p>
                        <p className='font-bold md:text-4xl text-2xl'>/{adicionalTurnos ? 12 : 10}</p>
                    </div>
                    <button
                        className='max-sm:w-full rounded-lg border border-[#79CEC0] transition-colors flex items-center justify-center bg-transparent gap-2 hover:bg-[#79CEC0] md:h-12 h-10 md:text-2xl md:px-4 px-3'
                        onClick={() => setRodadas((prev) => prev - 1)}
                        disabled={(rodadas == 0)}>
                        <FaMinus />
                    </button>
                </div>
                <div className='flex flex-col md:gap-4 gap-2'>
                    <div className='flex md:gap-4 gap-2'>
                        <button
                            className='max-sm:w-full cursor-pointer rounded-lg border border-[#79CEC0] font-bold transition-colors bg-[#79CEC0] disabled:cursor-not-allowed disabled:text-gray-50 disabled:border-none disabled:bg-gray-400 hover:bg-transparent hover:text-[#79CEC0] md:h-12 h-10 md:text-2xl text-gray-50 px-4'
                            onClick={() => setAdicionalTurnos(true)}
                            disabled={adicionalTurnos}>
                            Ativar Carta +2 Turnos
                        </button>
                        <button
                            className='cursor-pointer rounded-lg border border-[#79CEC0] font-bold transition-colors bg-[#79CEC0] hover:bg-transparent hover:text-[#79CEC0] md:h-12 h-10 md:text-2xl text-gray-50 px-4 disabled:cursor-not-allowed disabled:text-gray-50 disabled:border-none disabled:bg-gray-400'
                            onClick={() => setAdicionalTurnos(false)}
                            disabled={!(adicionalTurnos && rodadas <= 10)}>
                            <FaArrowRotateRight />
                        </button>
                    </div>
                    <button
                        className='cursor-pointer rounded-lg border border-[#79CEC0] font-bold transition-colors bg-[#79CEC0] hover:bg-transparent hover:text-[#79CEC0] md:h-12 h-10 md:text-2xl text-gray-50 px-4 disabled:cursor-not-allowed disabled:text-gray-50 disabled:border-none disabled:bg-gray-400'
                        onClick={() => finalizarPartida()}
                        disabled={!(rodadas == (adicionalTurnos ? 12 : 10))}>
                        Finalizar Partida
                    </button>
                </div>
                <div className='flex flex-col gap-4 items-center w-[90%]'>
                    <h3 className='text-[#79CEC0] font-bold md:text-2xl'>Precisa de Ajuda?</h3>
                    <div className='border border-[#79CEC0] rounded-xl md:p-8 p-4 flex flex-col gap-8'>
                        <div className='md:h-24 h-36 flex items-center justify-center'>
                            {especialAtiva ?
                                <div className='flex flex-col items-center gap-2'>
                                    <h3 className='text-xl font-bold'>{especialAtiva?.nome}</h3>
                                    <p className='md:text-lg text-center text-sm w-full max-w-4xl'>{especialAtiva?.descricao}</p>
                                </div>
                                :
                                <p className='text-center md:text-2xl'>Clique em alguma carta especial abaixo para ver o que ela faz...</p>}
                        </div>
                        <div className='flex flex-wrap md:gap-16 gap-4 justify-evenly'>
                            {cartasEspeciais.map((especial, index) => {
                                return <Image
                                    key={index}
                                    src={especial.carta}
                                    alt={especial.nome}
                                    className={`md:w-32 w-20 rounded-lg cursor-pointer hover:scale-110 transition-all ${especial.nome == especialAtiva?.nome ? 'scale-125' : especialAtiva ? 'opacity-40 scale-90' : ''}`}
                                    onClick={() => setEspecialAtiva((prev) => !(prev?.nome == especial.nome) ? especial : null)}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}