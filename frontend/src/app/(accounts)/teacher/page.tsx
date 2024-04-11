import Container from "@/components/std/Container";
import Row from "@/components/std/Row";
import Spacer from "@/components/std/Spacer";
import UserCard from "@/components/UserCard";
import get_schedule from "@/functions/get_schedule";
import get_user from "@/functions/get_user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LessonItem from "../student/LessonItem";
import SaveXL from "@/components/SaveXL";

export default async function Teacher() {
  const cookieStore = cookies();
  const cookie_user = cookieStore.get('user_data')?.value;

  if (!cookie_user || JSON.parse(cookie_user).type != "teacher") redirect('/login');

  const data = JSON.parse(cookie_user);

  const user_data = await get_user(data);

  const card_data = {
    ...user_data.attributes.user,
    image: user_data.attributes.user.image.data.attributes.url,
  }

  const Schedule = await get_schedule(data.type, user_data);

  type lesson_data = {
    subject: string,
    order: number,
    audience: number,
    group: string,
    teacher: string
  } 

  const lesson_data: lesson_data = {
    subject: "TRPO",
    order: 1,
    audience: 431,
    group: "428/2",
    teacher: "Bob Zirol"
  }

  
  return (
  <Container>
      <Container>
      <UserCard user_data={card_data}/>
      <Spacer top={3}/>
      <Row>
        <h1>Schedule</h1>
        <SaveXL dataToExport={Schedule}/>
      </Row>
      <Spacer top={.5}/>
      {Object.keys(Schedule).map(day => {
        return (
          <>
            <Spacer top={3}/>
            <h2>{day}</h2>
            <Spacer top={1}/>
            <Row gap={.5}>
              {
                Object.keys(Schedule[day]).map(lesson => {
                  return <LessonItem lesson_data={Schedule[day][lesson]}/>
                })
              }
            </Row>
            <Spacer top={.5}/>
          </>
        )
      })}
  </Container>
  </Container>
  )
}