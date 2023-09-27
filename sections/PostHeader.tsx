import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

interface Props{
    tag: string,
    title: string,
    authorImage: LiveImage,
    authorName: string,
    date: string
}

export default function PostHeader(props: Props){
    const {tag, title, authorImage, authorName, date} = props;
    return(
        <section className={`flex flex-col gap-4 p-4 lg:p-0 lg:max-w-7xl lg:mx-auto lg:mb-14`}>
            <p className={`text-[#EC926A] bg-[#F7E3DA] font-bold py-1 px-2 rounded-xl w-[fit-content]`}>{tag}</p>
            <p className={`text-[40px] font-bold leading-[44px]`}>{title}</p>
            <div className={`flex gap-8`}>
                <div className={`flex gap-2 items-center`}>
                    <Image src={authorImage} width={30} height={30} className={`rounded-full`} />
                    <p className={`text-[#696A75] text-base font-medium leading-loose`}>{authorName}</p>
                </div>
                <p className={`text-[#696A75] text-base font-normal leading-loose`}>{date}</p>
            </div>
        </section>
    ) 
}