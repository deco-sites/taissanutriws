import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

interface Props{
    image: LiveImage,
    title: string,
    text: string,
    linkKnowMore: string
}

export default function SobreMim(props: Props){
    const {image, title, text, linkKnowMore} = props;
    return(
        <section className={`px-6 py-20 lg:flex lg:max-w-7xl lg:mx-auto gap-28 lg:mb-52`}>
            <div className={`lg:w-[50%]`}>
                <Image src={image} width={600}  className={`w-[90%] lg:w-[100%]`}/>
            </div>
            
            <div className={`flex- flex-col lg:w-[50%]`}>
                <p className={`font-bold font-[inter] text-5xl max-w-[10ch] text-[#3B3C4A] py-10 lg:text-5xl`}>{title}</p>
                <p className={`text-base text-[#3V3C4A] font-medium leading-7 mb-8 lg:text-2xl`}>{text}</p>
                <a href={linkKnowMore} className={`py-2 px-10 rounded-full bg-[#F7E3DA] font-bold text-[#3b3c4a] shadow-lg max-w-[200px] flex justify-center items-center`}>Saiba mais</a>
            </div>
        </section>
    )
}