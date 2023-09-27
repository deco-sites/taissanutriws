interface Props{
    text: string
}

export default function PostBigTag(props: Props){
    return(
        <section className={`p-4 lg:p-0 lg:max-w-7xl lg:mx-auto my-7`}>
            <p className={`w-full rounded-2xl lg:rounded-[47px] bg-[#FBEFEA] p-4 lg:p-14 text-base lg:text-4xl italic leading-6`}>
                {props.text}
            </p>
        </section>
    )
}