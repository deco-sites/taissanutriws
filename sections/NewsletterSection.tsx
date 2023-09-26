import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props{
    image: LiveImage
}

export default function (props: Props){
    const {image} = props;
    return(
        <section className={`p-4 mb-36 lg:mb-52`}>
            <div className={`lg:max-w-4xl lg:w-4xl lg:m-auto lg:flex lg:flex-col lg:justify-center lg:items-center`}>
                <Image src={image || ""} width={400} className={`mb-[-60px] z-30 lg:w-[800px] lg:mb-[-150px]`}/>
                <form className={`p-4 pt-12 pb-12 bg-[#FFD7C9] rounded-2xl z-10 lg:w-full lg:px-12`}>
                    <div className={`lg:flex lg:gap-2 lg:px-16`}>
                        <p className={`text-[#3B3C4A] text-[38px] font-black font-[PlayfairDisplay] leading-10 tracking-wide`}>{`Receba`}</p>
                        <p className={`text-[#3B3C4A] text-[38px] font-black font-['PlayfairDisplay'] leading-10 tracking-wide`}>{`nossas dicas`}</p>
                    </div>
                    <div className={`lg:flex lg:gap-1 lg:px-16`}>
                        <p>Inscreva-se em nossa newsletter</p>
                        <p className={`mb-4`}>e receba conteúdo atualizado!</p>
                    </div>
                    <div className={`bg-[#f9f9f9] w-full p-4 rounded-full flex mb-4 lg:p-2 lg:pl-14`}>
                        <input type="text" className={`active:border-none active:outline-none outline-none w-[80%] m-auto bg-[#f9f9f9] font-medium text-base text-[#97989f]`} placeholder={`Insira o seu endereço de email`} />
                        <button className={`hidden bg-[#3B3C4A] w-[153px] h-[55px] justify-center items-center rounded-[50px] text-white text-base font-bold lg:flex`}>Enviar</button>
                    </div>
                    <button className={`bg-[#3B3C4A] w-[153px] h-[55px] flex justify-center items-center rounded-[50px] text-white text-base font-bold mb-4 lg:hidden`}>Enviar</button>
                    <div className={`lg:flex lg:gap-1 lg:px-16 lg:items-center`}>
                        <p className={`text-[#3B3C4A] text-xs font-semibold leading-tight`}>Ao aderir à nossa newsletter está a concordar</p>
                        <p className={`text-[#3B3C4A] text-xs font-semibold leading-tight`}>com os nossos <a href="" className={`font-bolder`}>Termos e condições</a></p>
                    </div>
                </form>
            </div>
        </section>
    )
}