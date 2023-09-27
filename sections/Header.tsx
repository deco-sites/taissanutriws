import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import MobileHeader from "../islands/MobileHeader.tsx";
import HeaderIsland from "deco-sites/taissanutriws/islands/HeaderIsland.tsx";


export interface MenuItem{
    title: string,
    href: string,
    /**@description Torna o texto laranja*/
}

interface Props{
    headerImage?: LiveImage;
    burgerMenuImage: LiveImage;
    menuItems?: MenuItem[]
 
}

export default function Header(props: Props){
    const {menuItems, headerImage, burgerMenuImage} = props;

    return(
        <HeaderIsland menuItems={menuItems} headerImage={headerImage} burgerMenuImage={burgerMenuImage} />
    )
}