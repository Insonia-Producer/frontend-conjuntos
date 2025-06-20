
interface SvgSimboloProps {
    cor: string;
    simbolo: string;
}

export default function SvgSimbolo({ cor, simbolo }: SvgSimboloProps) {

    return (
        <div>
            <p>{cor}</p>
            <p>{simbolo}</p>
        </div>
    )
}