"use client";
import Button from "@/components/std/Button";
import { getCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const exit = () => {
    if (getCookie("user_data")) {
      deleteCookie("user_data");
      router.push("/login");
    } else {
      alert("You cant exit bruh");
    }
  };

  return (
    <Button destructive onClick={exit}>
      Log out
    </Button>
  );
}
