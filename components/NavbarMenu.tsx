"use client";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

const NavbarMenu = () => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-4 px-4 h-12 w-fit rounded-full border cursor-pointer">
          <Menu />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => router.push("/?login=true")}>
          Login
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/?register=true")}>
          Sign up
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Apply</DropdownMenuItem>
        <DropdownMenuItem>Subscribe</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarMenu;
