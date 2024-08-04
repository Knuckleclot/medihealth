import { User, Lock, Bell, CreditCard, Puzzle, Trash } from "lucide-react";

export const ACCOUNT_SETTINGS = [
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

  export const PERSONAL_INFO = [
    { label: "Legal Name", value: "John Doe", action: "Edit" },
    { label: "Preferred Name", value: "Not provided", action: "Add" },
    { label: "Email Address", value: "john@example.com", action: "Edit" },
    { 
      label: "Phone Number", 
      value: "Add a number so confirmed guests and MedISearch can get in touch.",
      action: "Add",
    },
    { label: "Government ID", value: "Not provided", action: "Add" },
    { label: "Address", value: "Not provided", action: "Edit" },
  ];