import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

interface Props{
    image: LiveImage
}

export default function PostImage(props: Props){
    return(
        <div className={`p-4 lg:p-20`}>
            <Image src={props.image} width={240} className={`w-full rounded-2xl lg:rounded-[50px] `}/>
        </div>
    )
}