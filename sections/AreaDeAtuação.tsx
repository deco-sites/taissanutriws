import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

interface CardInfo {
    image: LiveImage,
    tag: string,
    title: string,
    text: string,
}

interface Props{
    title: string,
    image: LiveImage,
    mainText: string,
    cards: CardInfo[],
    imageAlt?: string
}

export default function AreaDeAtuacao(props:Props){
    const {title, image, imageAlt, cards, mainText} = props;
    return(
        <section className={`mt-[150px] px-4 lg:px-20`}>
             <h1 className={`font-[inter] font-bold text-[40px] text-center lg:text-left lg:text-6xl lg:mb-8`}>{title}</h1>
             <Image src={image} width={250} alt={imageAlt} className={`w-full rounded-3xl mb-6`}/>
             <p className={`text-[#3B3C4A] text-base mb-12 lg:text-2xl leading-10`}>{mainText}</p>
             <div className={`grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 mb-7 lg:mb-24`}>
                {
                    cards.map(item=>{
                        return(
                            <div className={`rounded-xl border-[#e8e8ea] border-1 mb-12`}>
                                    <Image src={item.image} width={300} alt={`cardInfo`}  className={`w-full rounded-t-xl`}/>
                                    <div className={`px-2 gap-4 flex flex-col py-6`}>
                                    <p className={`text-[#EC926A] px-2 py-1 flex items-center justify-center bg-[#f7e3da] rounded-lg w-[fit-content] text-xs`}>{item.tag}</p>
                                    <p className={`text-[#181A2A] text-xl font-semibold leading-normal`}>{item.title}</p>
                                    <p className={`text-[#97989F] text-xs font-normal leading-tight`}>{item.text}</p>
                                    </div>
                            </div>
                        )
                    })
                } 
             </div>
        </section>
    )
}