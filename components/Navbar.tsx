"use client";

import Image from "next/image";
import NavbarMenu from "./NavbarMenu";
import { usePathname, useSearchParams } from "next/navigation";
import LoginForm from "./forms/LoginForm";
import Link from "next/link";
import RegisterForm from "./forms/RegisterForm";
import { useEffect, useState } from "react";
import UserNavbarMenu from "./UserNavbarMenu";
import { account } from "@/appwrite.config";
import ResetPasswordForm from "./forms/ResetForm";
import { cn } from "@/lib/utils";
import { REGISTER_PATHS } from "@/lib/data";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const path = usePathname();

  const fetchUser = async () => {
    try {
      const user = await account.get();
      setUser(user);
      console.log({ user });
    } catch (error) {
      setUser(null);
      console.error("Failed to fetch user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    const handleUserChange = () => {
      fetchUser();
    };

    window.addEventListener("userChange", handleUserChange);

    return () => {
      window.removeEventListener("userChange", handleUserChange);
    };
  }, []);

  const searchParams = useSearchParams();
  const login = searchParams.get("login");
  const register = searchParams.get("register");
  const clinicRegister = searchParams.get("clinic-register");
  const reset = searchParams.get("reset");

  return (
    <div
      className={cn(
        "fixed w-full bg-white/60 backdrop-blur-xl h-20 left-0 right-0 top-0 paddingX flex justify-between items-center max-w-7xl mx-auto",
        {
          "max-w-none": path === "/",
          hidden: REGISTER_PATHS.includes(path),
        }
      )}
    >
      <Link href={"/"}>
        <Image
          src={"/icons/logo.svg"}
          width={200}
          height={40}
          alt="Logo"
          className="object-contain w-fit"
        />
      </Link>
      <LoginForm isOpen={login === "true"} />
      <RegisterForm isOpen={register === "true"} />
      <ResetPasswordForm isOpen={reset === "true"} />
      {!user ? <NavbarMenu /> : <UserNavbarMenu />}
    </div>
  );
};

export default Navbar;
