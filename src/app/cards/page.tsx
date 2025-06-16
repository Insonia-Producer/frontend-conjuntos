import { Deck } from "../components/deck";

export default async function Cards() {
    const cards = [
        '/cards/bravura.png',
        '/cards/coringa.png',
        '/cards/gloria.png',
        '/cards/morte.png',
        '/cards/salmão.png'
    ]

    return (
        <div className=" min-h-screen flex flex-col justify-center items-center overflow-hidden">
            <section className="h-3/4 w-full">
                <div className="flex border rounded-4xl"></div>
            </section>
            <section className="flex flex-col gap-4 h-1/4">
                Clique em uma carta para saber mais sobre ela!
                <div className="flex">
                    <Deck cards={cards} />
                </div>
            </section>
        </div>
    )
}