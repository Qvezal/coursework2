import { User } from "@/types/user"
import Image from "next/image";
import Row from "../std/Row";
import Spacer from "../std/Spacer";
import Card from "../std/Card";
import style from "./user_card.module.css";

type props = {
  user_data: User
}

export default function UserCard(props: props) {
  const image = process.env.NEXT_PUBLIC_API_URL + props.user_data.image;
  
  return ( 
    <Card className={style.user_card}>
      <Row gap={4}>
        <Image src={image} alt="pvp" className={style.image} width={150} height={200} />
        <div>
          <b>Full name</b>  
          <h1>{props.user_data.fio}</h1>
          <Spacer top={1}/>
          <b>Email</b>  
          <p>{props.user_data.mail}</p>
          <Spacer top={1}/>
          <b>Phone</b>  
          <p>{props.user_data.phone}</p>
          <Spacer top={1}/>
          <b>Birthday</b>  
          <p>{props.user_data.birthday}</p>
          <Spacer top={1}/>
        </div>
      </Row>
    </Card>
  )
}