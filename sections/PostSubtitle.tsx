interface Props{
    subTitle: string
}

export default function PostSubtitle(props: Props){
    return(
        <h2 className={`text-[#181A2A ] p-4 lg:p-0 lg:max-w-7xl lg:mx-auto my-7 lg:my-9 text-[22px] font-semibold leading-[30px] lg:text-[38px]`}>{props.subTitle}</h2>
    )
} 