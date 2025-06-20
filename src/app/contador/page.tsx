
import { Bagel_Fat_One, Poppins } from 'next/font/google';

const bagel = Bagel_Fat_One({
    weight: ['400'],
    subsets: ["latin"]
})

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin']
})

export default function ContadorRodadas() {
    return (
        <div className='py-4'>
            <div className='px-4 flex'>
                <h1 className={`${bagel.className} md:text-[120px] text-4xl font-extrabold text-gray-50 text-shadow-lg text-center`}>
                    Contador de Rodadas
                </h1>
            </div>
        </div>
    )
}