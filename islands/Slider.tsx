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
    const [leftActive, setLeft] = useState<boolean>(false)
    const [rightActive, setRight] = useState<boolean>(false)

    const moveImages = (arg: number)=>{
        setIndex(index + arg);
        arg > 0 ? setRight(true) : setLeft(true)

        setTimeout(()=>{
            setLeft(false)
            setRight(false)
        }, 150)
    }

    return(
        <section className={`p-4 lg:max-w-7xl lg:mx-auto lg:p-0 lg:mb-52`}>
            <div className={`flex justify-between items-center lg:mb-16`}>
                <p className={`text-[#3B3C4A] text-[40px] font-bold leading-[60px] `}>{title}</p>
                <div className={`hidden lg:flex gap-2`}>
                    <div className={`cursor-pointer`} onClick={()=>{index == 0 ? `` : moveImages(-1)}}><img src={!leftActive ? asset("/RightArrow.svg") : asset("/ActiveArrow.png")} width={32} height={32} className={`rotate-180`}/></div>
                    <div className={`cursor-pointer`} onClick={()=>{index + 2 >= images.length -1 ? `` : moveImages(1)}}><img src={!rightActive ? asset("/RightArrow.svg") : asset("/ActiveArrow.png")} width={32} height={32}/></div>
                </div>
                <div className={`flex lg:hidden  gap-2`}>
                    <div className={`cursor-pointer`} onClick={()=>{index == 0 ? `` : moveImages(-1)}}><img src={!leftActive ? asset("/RightArrow.svg") : asset("/ActiveArrow.png")} width={32} height={32}className={`rotate-180`}/></div>
                    <div className={`cursor-pointer`} onClick={()=>{index + 2 == images.length ? `` : moveImages(1)}}><img src={!rightActive ? asset("/RightArrow.svg") : asset("/ActiveArrow.png")} width={32} height={32}/></div>
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