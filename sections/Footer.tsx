import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { asset } from "$fresh/runtime.ts";

interface ItemsSobre{
    title: string,
    href: string    
}
interface ItemsSocial{
    image:  LiveImage;
    title: string,
    href: string;
}

interface Props{
    image: LiveImage;
    subTitle: string;
    itemsSobre?: ItemsSobre[];
    itemsSocial?: ItemsSocial[];
}

export default function Footer(props: Props){
    const {image, subTitle, itemsSobre, itemsSocial} = props;
    return(
        <footer className={`bg-[#f6f6f6] py-14 px-10 lg:grid lg:grid-cols-4 lg:py-16 lg:px-40`}>
             <div className={`mb-14 lg:order-1`}>
                <Image src={image} width={255} className={`mb-8`}/> 
                <p className={`text-[#3b3c4a] text-base font-medium leading-[30px]`}>{subTitle}</p>
             </div>
             <div className={`flex flex-col gap-4 lg:order-2 lg:pl-20 lg:items-left`}>
                <p className={`text-[#3b3c4a] text-xl font-semibold leading-snug`}>Sobre</p>
                {
                    itemsSobre?.map(item=>{
                        return(
                            <a href={item.href} className={`text-[#3b3c4a] text-base font-medium leading-[30px]`}>{item.title}</a>
                        )
                    })
                }
             </div>
             <div className={`py-14 flex flex-col gap-6 lg:order-4 lg:py-0`}>
                  <p className={`text-xl font-semibold leading-snug`}>Entre em contato</p>
                  <a href="/" className={`text-lg font-medium leading-[30px]`}>Perguntas ou feedbacks?</a>
                  <button className={`flex gap-3 text-base font-normal leading-snug text-[#3b3c4a] border border-[#bdbdbd] rounded-full w-[fit-content] px-5 py-3`}>Envio um email <img src={asset(`/carbon_send.svg`)} width={20}/></button>
             </div>
             <div className={`flex flex-col gap-6 lg:order-3 lg:flex-col lg:items-left lg:ml-5`}>
                <p className={`text-xl font-semibold leading-snug`}>Links</p>
                {
                    itemsSocial?.map(item=>{
                        return( 
                            <a href={item.href}><Image src={item.image} width={25} className={`lg:hidden`}/><p className={`hidden lg:block`}>{item.title}</p></a>
                        )
                    })
                }
             </div>
             <div className={`lg:order-6`}>
                <p className={`text-base font-medium leading-[30px] mt-9`}>© 2023 All rights reserved</p>
             </div>
        </footer>
    )
}