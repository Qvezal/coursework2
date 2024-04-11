import axios from "axios";

export default async function get_schedule(type: string, user_data: any) {


  const filter = type === "teacher" ? `[teacher][id]=${user_data.id}` : `[group][number][$eq]=${user_data.attributes.group.data.attributes.number}`;

  const config = {
    headers: {
      "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
      "Content-Type": "application/json"
    }
  }

  const schedule_api = (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/lessons?populate=deep&filters${filter}`, config)).data.data;

  interface obj {
    [key: string]: {
      [key: string]: {
        audience: number;
        teacher: string;
        group: string;
        subject: string;
        order: number;
      }
    };
  }

  let schedule:obj = {

  }

  schedule_api.map((lesson: any) => {

    const lesson_date = {
      audience: lesson.attributes.audience.data.attributes.Audience,
      teacher: lesson.attributes.teacher.data.attributes.user.fio,
      group: lesson.attributes.group.data.attributes.number,
      subject: lesson.attributes.subject.data.attributes.name,
      order: lesson.attributes.order
    }

    schedule[lesson.attributes.date] = {
      ...schedule[lesson.attributes.date],
      [lesson.attributes.order]: lesson_date
    }
  })

  return schedule
}