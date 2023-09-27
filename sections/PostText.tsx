import QuillText from "../components/QuillText/QuillText.tsx"

interface Props{
    /**@description Esse campo aceita tags HTML como <br> para quebra de linhas */
    text: string
}

export default function PostText(props: Props){
    return(
        <article className={`p-4 lg:p-0 lg:max-w-7xl lg:mx-auto`}>
            {<QuillText className={`text-[#3B3C4A] text-base font-normal leading-[25px] lg:leading-[51.08px] lg:text-2xl`} html={props.text}/>}
        </article>
    )
}