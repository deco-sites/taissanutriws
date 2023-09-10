import type {
    Image as LiveImage,
    Video as LiveVideo,
  } from "deco-sites/std/components/types.ts";

interface Props{
    video: LiveVideo
}

export default function postVideo(props: Props){
    const {video} = props;
    return(
        <section className={`p-4  lg:px-20`}>
            <video src={video} autoPlay={false} type={'video/mp4'} controls className={`w-full max-h-[800px] rounded-2xl lg:rounded-3xl`} />
        </section>
    )
}