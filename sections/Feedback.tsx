import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

interface Props{
    mainImage: LiveImage
    title: string
    testimony: string
    clientImage: LiveImage
    clientName: string
    clientDescription: string
    /**@description Use "." ao invés de "," para colocar a nota, e use numeros de 0 a 5 */
    clientRate: number
    fullStarImage: LiveImage
    emptyStarImage: LiveImage
}

export default function Feedback(props: Props){
    const {mainImage, title, testimony,clientImage, clientName, clientDescription, clientRate, fullStarImage, emptyStarImage} = props;

    function calcStars():Array<boolean>{
        let stars = 0;
        if(clientRate > 5) stars = 5;
        if(clientRate < 0) stars = 0;

        stars = Math.floor(clientRate);

        let rtn: boolean[] = []
        
        for(let i = 0; i < 5; i++){
            if(stars > i){
                rtn.push(true)
            }else {rtn.push(false)}
        }

        return rtn
    }

    return(
        <section className={`p-4 lg:px-20 flex flex-col lg:flex-row gap-10 mb-20 lg:justify-center`}>
            <div>
                <Image src={mainImage} width={330} height={330} className={`lg:h-[537px] lg:w-[507px]`} />
            </div>
            <div className={`flex flex-col gap-10 lg:p-28 lg:max-w-4xl`}>
                <p className={`text-[#3B3C4A] text-5xl font-bold leading-[45px] lg:leading-[50px]`}>
                    {title}
                </p>
                <div className={`max-w-[75%] flex flex-col gap-4`}>
                    <p className={`text-base text-[#3B3C4A] leading-7 lg:text-2xl lg:leading-10 lg:max-w-[80%] lg:mb-8`}>
                        "{testimony}"
                    </p>
                    <div className={`flex flex-row gap-2`}>
                        <Image src={clientImage} width={40} height={40} className={`rounded-full lg:h-16 lg:w-16`} />
                        <div>
                            <p className={`text-[#3B3C4A] text-xs font-medium font-['PlayfairDisplay'] lg:text-xl`}>
                                {clientName}
                            </p>
                            <p className={`text-[#97989F] text-[10px] font-medium lg:text-base`}>
                                {clientDescription}
                            </p>
                            <div className={`flex gap-1 items-center`}>
                                {calcStars().map(item=>{
                                    return(
                                        item ? <Image height={15} width={15} src={fullStarImage} className={`lg:w-[24px] lg:h-[24px]`} /> : <Image height={15} width={15} src={emptyStarImage} className={`lg:w-[24px] lg:h-[24px]`} />
                                    )
                                })}
                                <p className={`text-[9.33px] leading-[13.93px] lg:text-[15px]`}>{clientRate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}