'use client'
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import MobileHeader from "../islands/MobileHeader.tsx";
import { useEffect } from "preact/hooks";


export interface MenuItem{
    title: string,
    href: string,
    /**@description Torna o texto laranja*/
}

interface Props{
    headerImage?: LiveImage;
    burgerMenuImage: LiveImage;
    menuItems?: MenuItem[]
}



export default function HeaderIsland(props: Props){
    const {menuItems, headerImage, burgerMenuImage} = props;
    useEffect(()=>{
        console.log({href: window.location.pathname})
        
    },[])
    return(
        <header className={`w-full`}>
           <div className={`fixed top-0 left-0 w-[100%] flex justify-between p-6 shadow-xl bg-white lg:px-20 py-9 z-[1002]`}>
            <div>
                    <Image src={headerImage || ""} width={255} height={45} />
                </div>
                <div className={`hidden lg:flex flex-row gap-14 items-center`}>
                    {menuItems?.map(item=>{
                        console.log(item.href == window.location?.pathname)
                        return(
                            <a href={item.href} className={`text-sm font-medium leading-snug ${window.location?.pathname.match(item.href) ? `text-[#EB926A]` : `text-zinc-700`}`}>{item.title}</a>
                        )
                    })}
                    
                </div>
                <div className={`lg:hidden`}>
                    <MobileHeader menuItems={menuItems || []} burgerMenuImage={burgerMenuImage} />
                </div>
           </div>
           <div className={`mb-[180px] lg:mb-[300px]`}></div>
        </header>
    )
}