import Card from "@/components/std/Card";
import Row from "@/components/std/Row";
import Spacer from "@/components/std/Spacer";

type props = {
  number: string,
  list: {
    name: string,
    count: string
  }[]
}

export default function Group(props: props) {
    const subject_list = props.list.map(sub => {
        return (
            <Spacer top={1}>
                <Row>
                    <p>{sub.name}</p>
                    <b>{sub.count}</b>
                </Row>
            </Spacer>
        )

    });

  return (
    <Card>
        <h1>Академический остаток группы - {props.number}</h1>
        {subject_list}  
    </Card>
  )
}