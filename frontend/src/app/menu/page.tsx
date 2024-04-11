import Link from "next/link";
import Spacer from "@/components/std/Spacer";
import Container from "@/components/std/Container";

export default function MenuPage() {
    const menu_options = [
        "login",
        "admin",
    ]

    const menu_list = menu_options.map(menu_item => {
        return (
            <>
                <Spacer top={.5} />
                <Link href={menu_item}>
                    <p>{menu_item}</p> 
                </Link> 
            </>
        )
    });

    return (
        <Container>
            {menu_list}
            <Spacer top={2}/>
            <Link href="/settings"><p>Settings</p></Link>
        </Container>
    )
}