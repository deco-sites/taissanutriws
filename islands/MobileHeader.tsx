'use client'
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { MenuItem } from "../sections/Header.tsx";
//import MenuBuger from "deco-sites/taissanutriws/static/images/MenuBurger.png"

export default function MobileHeader(props: {menuItems: MenuItem[], burgerMenuImage: LiveImage}){
    const [status, setStatus] = useState<boolean>(false)
    const {menuItems, burgerMenuImage} = props;
    const toggle = ()=>{setStatus(!status)}
    return(
        <div>
            <div onClick={toggle}>
                <Image src={burgerMenuImage} height={45} width={45}></Image>
            </div>
            <div className={status ? `absolute top-0 left-0 w-[100vw] h-[100vh] bg-white p-3 pt-16 flex gap-3 flex-col` : `hidden`}>
                
                {menuItems?.map(item=>{
                    return(
                        <a href={item.href} className={`text-2xl font-medium font-[inter] leading-snug ${item.highlight ? `text-[#EB926A]` : `text-zinc-700`}`}>{item.title}</a>
                    )
                })}
                <div onClick={toggle} className={`absolute right-4 top-4 text-4xl text-zinc-700 bg-[#ebebeb] px-4 py-2 rounded-full`}>X</div>
            </div>
        </div>
    )
}