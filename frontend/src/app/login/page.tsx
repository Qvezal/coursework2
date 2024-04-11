"use client"
import { hasCookie, setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";
import axios, { AxiosError } from "axios";
import styles from "./auth.module.css"
import { user } from "@/types/form";

import Container from "@/components/std/Container";
import Spacer from "@/components/std/Spacer";
import Card from "@/components/std/Card";
import Input from "@/components/std/Inputs/Input";
import Button from "@/components/std/Button";
import Row from "@/components/std/Row";
import PasswordInput from "@/components/std/Inputs/PasswordInput";

export default function login() {
    const router = useRouter();

    const cookie_user = getCookie('user_data');
    if (cookie_user) {
        const data = JSON.parse(cookie_user);
        if (data.type) router.push('/' + data.type);
        
	}

    const [login, set_login] = useState<user>({
        Login: "",
        Password: "",
        FIO: "",
        type: ""
    })

    const [errors, set_errors] = useState<Array<string>>([]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e: any) => {
        const {name, value} = e.target;

        set_login(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const send = () => {
        const err = []

        if (login.Login == "") {
            err.push("Login")
        }

        if (login.Password == "") {
            err.push("Password")
        }

        if (err.length > 0) {
            set_errors(err);
            return
        }

        set_errors([]);

        axios.post('/api/login', JSON.stringify({login: login.Login, password: login.Password})).then(res => {
            setCookie('user_data', res.data);
            router.refresh();
        }).catch((err: AxiosError) => {
            if (err.response) {
                const status = err.response.status;

                if (status === 404) {
                    set_errors(['Login']);
                }

                if (status === 301) {
                    set_errors(['Password']);
                }
            }
        })
    }
    
    return (
        <Container>
            <Card className={styles.login_card}>
                <h1>Login</h1>
                <Spacer top={2}/>
                <Input name="Login" label="login" onChange={handleChange}/>
                <Spacer top={1}/>
                <PasswordInput name="Password" label="Password" onChange={handleChange}/>

                <Spacer top={2}/>
                <Button expand onClick={send}>Login</Button>
            </Card>
        </Container>
    )
}
