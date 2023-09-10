import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";
import { asset } from "$fresh/runtime.ts";


export interface SliderContent{
    image: LiveImage;
    link: string;
}

export interface Props{
    title: string;
    images: SliderContent[]
}

export default function Slider(props: Props){
    const {title, images} = props;
    const [index,setIndex] = useState<number>(0)

    const moveImages = (arg: number)=>{
        
        if((index + arg) < 0){setIndex(images.length-1); return;}
        if((index + arg) > images.length-1){setIndex(0); return;}
        setIndex(index + arg);
    }

    return(
        <section className={`p-4 lg:px-20`}>
            <div className={`flex justify-between items-center`}>
                <p className={`text-[#3B3C4A] text-[40px] font-bold leading-[60px]`}>{title}</p>
                <div className={`flex gap-2`}>
                    <div className={`cursor-pointer`} onClick={()=>{moveImages(-1)}}><img src={asset("/LeftArrow.svg")} width={32}/></div>
                    <div className={`cursor-pointer`} onClick={()=>{moveImages(1)}}><img src={asset("/RightArrow.svg")} width={32}/></div>
                </div>
            </div>
            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8`}>
                {images ?
                        <a href={images[index].link}>
                            <Image src={images[index].image} width={200} className={`rounded-3xl w-full lg:w-full`}/>
                        </a>
                    : ``
                }
                {images ?
                        <a href={images[index + 1 >= images.length ? (index + 1) - images.length : index + 1].link}>
                            <Image src={images[index + 1 >= images.length ? (index + 1) - images.length : index + 1].image} width={200} className={`rounded-3xl lg:w-full hidden  lg:block`}/>
                        </a>
                    : ``
                }
                {images ?
                        <a href={images[index + 2 >= images.length ? (index + 2) - images.length : index + 2].link}>
                            <Image src={images[index + 2 >= images.length ? (index + 2) - images.length : index + 2].image} width={200} className={`rounded-3xl lg:w-full hidden  lg:block`}/>
                        </a>
                    : ``
                }
            </div>
        </section>
    )
}   