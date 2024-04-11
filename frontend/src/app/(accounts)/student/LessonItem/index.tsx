import Card from "@/components/std/Card";
import Row from "@/components/std/Row";
import Spacer from "@/components/std/Spacer";

  type lesson_data = {
    subject: string,
    audience: number,
    group: string,
    teacher: string, 
    order: number
  } 

  type props = {
    lesson_data: lesson_data
  }

export default function LessonItem(props: props) {
  return (
    <Card>
      <h1>{props.lesson_data.subject}</h1>
      <Spacer top={1}/>
      <Row>
        <div>
            <p>order:</p>
            <b>{props.lesson_data.order}</b>
        </div>
        <div>
            <p>group:</p>
            <b>{props.lesson_data.group}</b>
        </div>
      </Row>
      <Spacer top={1}/>
      <Row>
        <div>
          <p>audience:</p>
          <b>{props.lesson_data.audience}</b>
        </div>
        <div>
          <p>teacher:</p>
          <b>{props.lesson_data.teacher}</b>
        </div>
      </Row>
      <Spacer top={1}/>
      <Spacer top={1}/>
    </Card>
  )
}