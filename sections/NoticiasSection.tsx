import Noticias from "../islands/Noticias.tsx";
import {Props} from "../islands/Noticias.tsx";

export default function NoticiasSection(props: Props){
    const {title, cards} = props;
    return <Noticias title={title} cards={cards} />
}