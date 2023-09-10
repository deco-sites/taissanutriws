import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

export interface NoticiaCard{
    image: LiveImage,
    tag: string,
    title: string,
    date: string
    href: string,
}

export interface Props{
    title: string,
    cards: NoticiaCard[]
}

export default function Noticias(props: Props){
    const {title, cards} = props;
    const [showMore, setMore] = useState<boolean>(false)
    return(
        <section className={`p-4 mt-28 lg:px-20`}>
             <h1 className={`text-[#181A2A] text-[40px] font-bold leading-[45px] mb-8`}>{title}</h1>
             <div className={`grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4`}>
                {
                    cards.filter((item, index)=>{
                        if(index < 14) return item;
                        if(showMore) return item;
                    }).map(item=>{
                        return(
                            <a className={`border-[#E8E8EA] border-1 rounded-2xl`} href={item.href}>
                                <Image src={item.image} width={400} className={`w-full rounded-t-2xl`} />
                                <div className={`p-4 flex flex-col gap-3`}>
                                    <p className={`text-[#EC926A] bg-[#F7E3DA] font-bold py-1 px-2 rounded-xl w-[fit-content]`}>{item.tag}</p>
                                    <p className={`text-[#181A2A] text-xl font-semibold leading-normal`}>{item.title}</p>
                                    <p className={`text-[#97989F] text-xs`}>{item.date}</p>
                                </div>
                            </a>
                        )
                    })
                }
             </div>
             <div className={`flex w-full justify-center items-center mt-8`}>
                <div onClick={()=>{setMore(true)}} className={`${showMore || cards.length <= 14 ? `hidden` : ``} cursor-pointer w-52 h-14 flex items-center justify-center bg-[#F7E3DA] rounded-full font-bold`}>Saiba mais</div>
             </div>
        </section>
    )
}