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
import { account } from "@/appwrite.config";

const UserNavbarMenu = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await account.deleteSessions();
    window.dispatchEvent(new Event("userChange"));
    router.push("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-4 px-4 h-12 w-fit rounded-full border cursor-pointer">
          <Menu />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => router.push("/account")}>
          Account
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Apply</DropdownMenuItem>
        <DropdownMenuItem>Subscribe</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNavbarMenu;
