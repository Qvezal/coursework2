import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

export default function Admin() {
  const cookieStore = cookies();
  const cookie_user = cookieStore.get('user_data')?.value;

  if (cookie_user) {
      const data = JSON.parse(cookie_user);
      if (!data.type) redirect('/auth/' + 'login');
	}
  
  return (<></>)
}