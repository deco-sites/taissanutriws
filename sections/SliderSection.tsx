import Slider from "../islands/Slider.tsx";
import type { Props } from "../islands/Slider.tsx";


export default function SliderSection(props: Props){
    const {title, images} = props;
    return(
        <Slider title={title} images={images}/>
    )
}