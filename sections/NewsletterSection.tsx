import Newsletter from "../islands/Newsletter.tsx";
import {Props} from "../islands/Newsletter.tsx"

export default function NewsletterSection(props: Props){
    const {image} = props;
    return <Newsletter image={image}/>
}