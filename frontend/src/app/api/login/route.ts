import axios from 'axios';
import Response from 'next'
import { NextResponse } from 'next/server';

export async function POST (
  req: Request,
  res: Response,
  ) {
  try {
    const form_data = await req.json();
    let type = "admin"

    let find = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admins?populate=deep&filters[auth][login][$eq]=${form_data.login}`, {
      headers: {
        "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
        "Content-Type": "application/json"
      }
    })

    let users = find.data.data;

    if (!(users.length > 0)) {
      

      find = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/students?populate=deep&filters[auth][login][$eq]=${form_data.login}`, {
        headers: {
          "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
          "Content-Type": "application/json"
        }
      })

      users = find.data.data;
      type = "student"
    }

    if (!(users.length > 0)) {
      

      find = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/teachers?populate=deep&filters[auth][login][$eq]=${form_data.login}`, {
        headers: {
          "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
          "Content-Type": "application/json"
        }
      })

      users = find.data.data;
      type = "teacher"
    }

    if (!(users.length > 0)) {
      return NextResponse.json('not_found', {status: 404});
    }

    //@ts-ignore
    if (form_data.password !== users[0].attributes.auth.pass) {
      return NextResponse.json('wrong_password', {status: 301});
    }

    return NextResponse.json({...users[0].attributes.auth, type}, {status: 200});
  } catch (error) {
    console.error(error);
    NextResponse.json('error', {status: 500});
  }
}