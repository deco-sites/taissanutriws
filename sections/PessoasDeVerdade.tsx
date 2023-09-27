import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import QuillText from "../components/QuillText/QuillText.tsx";

interface Lines{
    /**@description para destacar um texto, use <strong>Texto aqui </strong> */
    text: string;
}

interface Client{
    image: LiveImage
}

interface Stars{
    starImage: LiveImage
    gap: number
    quantity: 0 | 1 | 2 | 3 | 4 | 5
}

interface ImageTag{
    text: string,
    desktopPositionX: number
    desktopPositionY: number
    mobilePositionX: number
    mobilePositionY: number
}

interface Props{
    mainTag: string
    lines: Lines[]
    image: LiveImage
    imageTags: ImageTag[]
    clientList?: Client[]
    stars: Stars
}

export default function PessoasDeVerdade(props: Props){
    const {lines, image, clientList, stars, mainTag, imageTags} = props;
    const starsMap = new Array<String>;
    for(let i = 0; i < stars?.quantity || 0; i++){
        starsMap.push("")
    }

    return(
        <section className={`pl-4 lg:max-w-7xl lg:mx-auto lg:mb-44 lg:p-0`}>
            <div>
                <div className={`hidden lg:flex lg:ml-5 px-6 py-4 bg-[#F2D1C2] rounded-full w-[fit-content] justify-center items-center`}>
                    <p className={`h-[fit-content] w-[fit-content]`}>{mainTag}</p>
                </div>
            </div>
            <div className={` lg:flex  lg:justify-between `}>
                <div className={`mb-12 lg:pt-16 `}>
                    {
                        lines.map(item=>{
                            return(
                                <QuillText html={`
                                    <style> 
                                        strong, p.quill{
                                            font-size: 36px;
                                            line-height: 40px;
                                            font-weight: 700;
                                            font-family: PlayfairDisplay;
                                            color: #3B3C4A;
                                        }
                                        p.quill > strong{
                                            color: #F0AB8C
                                        }
                                        @media (min-width: 1025px) {
                                            strong, p.quill{
                                                font-size: 74px;
                                                line-height: 85px;
                                            }
                                        }
                                    </style>
                                    <p class="quill ">${item.text}</p>
                                `}/>
                            )
                        })
                    }
                    <div className={`hidden lg:flex items-center gap-4`}>
                        <div className={`flex`}>
                            {
                                clientList?.map((item, index)=>{
                                    return <Image src={item.image} width={64} className={`rounded-full  ${index > 0 ? `ml-[-25px]` : ``}`} />
                                })
                            }
                        </div>
                        <div>
                            <p className={`text-[#3B3C4A] text-[17px] font-semibold leading-snug`}>Nossos clientes</p>
                            <p style={`background-image: url('')`} className={`text-[#3B3C4A] text-[17px] font-semibold leading-snug bg-no-repeat bg-auto`}>Recomendam</p>
                            <div className={`flex gap-[${stars?.gap}px]`}>
                                {
                                    starsMap.map(()=>{
                                        return <Image src={stars.starImage} width={18} height={18}/>
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>
                <div className={`relative`}>
                    <Image src={image} height={330} width={330} className={`lg:w-[600px]`} />
                    {
                        imageTags.map((item)=>{
                            const {text, mobilePositionX, mobilePositionY, desktopPositionX, desktopPositionY} = item;

                            return(
                                <div class={`flex justify-center items-center lg:min-w-[260px] lg:min-h-[70px] rounded-full px-6 py-2  bg-white z-[1001] lg:shadow-lg w-[fit content] w-[fit-content] h-[fit-content] absolute top-[${mobilePositionY}px] left-[${mobilePositionX}px] lg:top-[${desktopPositionY}px] lg:left-[${desktopPositionX}px]`}>
                                    <p className={`text-[16px] font-medium leading-none flex justify-center items-center h-[16px]`}>{text}</p>
                                </div> 
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}   


