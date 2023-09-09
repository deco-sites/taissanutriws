import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import QuillText from "../components/QuillText/QuillText.tsx";
import { asset } from "$fresh/runtime.ts";
interface Lines{
    /**@description para destacar um texto, use <strong>Texto aqui </strong> */
    text: string;
}

interface Client{
    image: LiveImage
}

interface Props{
    lines: Lines[],
    image: LiveImage
    clientList?: Client[]
}

export default function PessoasDeVerdade(props: Props){
    const {lines, image, clientList} = props;
    return(
        <section className={`mt-28 pl-4 lg:flex lg:p-20 lg:justify-center lg:mb-44`}>
            <div className={`mb-12 lg:pt-16`}>
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
                        <p style={`background-image: url('${asset("/bx_bxs-star.svg")}')`} className={`text-[#3B3C4A] text-[17px] font-semibold leading-snug bg-no-repeat bg-auto`}>Recomendam</p>
                    </div>

                </div>
            </div>
            <div>
                <Image src={image} height={330} width={330} className={`lg:w-[600px]`} />
            </div>
        </section>
    )
}   