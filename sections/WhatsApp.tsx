import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

interface Props{
    image: LiveImage,
    /** @description modo válido de telefone: 5516123451234 */
    number: string
}

export default function WhatsApp(props: Props){
    const {image, number} = props;
    return(
        <a href={`https://wa.me/${number}`} className={`fixed right-4 bottom-4`}>
            <Image src={image} height={45} width={45} />
        </a>
    )
} 