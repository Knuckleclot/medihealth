"use client";
import Link from "next/link";
import { User, Lock, Bell, CreditCard, Puzzle, Trash } from "lucide-react";
import { account } from "@/appwrite.config";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const links = [
  {
    href: "/account/personal-info",
    icon: User,
    title: "Profile",
    description: "Manage and provide personal details how we can reach you.",
  },
  {
    href: "/account/login-security",
    icon: Lock,
    title: "Security",
    description: "Manage your account security settings.",
  },
  {
    href: "/account/notifications",
    icon: Bell,
    title: "Notifications",
    description: "Customize your notification preferences.",
  },
  {
    href: "/account/billing-subscription",
    icon: CreditCard,
    title: "Billing",
    description: "Manage your payment methods and subscriptions.",
  },
  {
    href: "/account/integrations",
    icon: Puzzle,
    title: "Integrations",
    description: "Connect your account with third-party services.",
  },
  {
    href: "/account/delete",
    icon: Trash,
    title: "Delete Account",
    description: "Permanently delete your account and data.",
  },
];

export default function Component() {
  const [user, setUser] = useState<any>(null);

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

  return (
    <div className="max-w-5xl mx-auto py-[100px] sm:py-40 px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-16">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Account</h1>
        {user ? (
          <p className="text-xl font-medium">
            {user?.name}, <span className="font-normal">{user?.email}</span>
          </p>
        ) : (
          <Skeleton className="h-6 w-1/3" />
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="bg-white shadow-md min-h-[170px] rounded-lg p-6 hover:bg-gray-100 transition-colors"
            prefetch={false}
          >
            <div className="h-full flex flex-col justify-between items-start">
              <link.icon className="w-8 h-8 text-primary" />
              <div className="space-y-1">
                <h2 className="text-lg font-medium">{link.title}</h2>
                <p className="text-neutral-800/60 text-sm">
                  {link.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
