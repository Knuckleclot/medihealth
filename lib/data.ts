import { User, Lock, Bell, CreditCard, Puzzle, Trash,Hospital, HeartPulse, Atom, Sun, Baby, Bone } from "lucide-react";

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

  export const CLINIC_CATEGORIES = [
    {
      category: "Dentist",
      icon: Hospital,
      clinics: [
        {
          title: "SmileBright Dental Clinic",
          location: "123 Main St",
          image: "https://dummyimage.com/600x400/000/fff&text=SmileBright+Dental+Clinic",
        },
        {
          title: "Pearl White Dental Care",
          location: "456 Oak Avenue",
          image: "https://dummyimage.com/600x400/000/fff&text=Pearl+White+Dental+Care",
        },
        {
          title: "Family Dental Studio",
          location: "789 Pine Road",
          image: "https://dummyimage.com/600x400/000/fff&text=Family+Dental+Studio",
        },
      ],
    },
    {
      category: "Cardiologist",
      icon: HeartPulse,
      clinics: [
        {
          title: "HeartCare Clinic",
          location: "101 Maple Lane",
          image: "https://dummyimage.com/600x400/000/fff&text=HeartCare+Clinic",
        },
        {
          title: "CardioHealth Center",
          location: "202 Elm Street",
          image: "https://dummyimage.com/600x400/000/fff&text=CardioHealth+Center",
        },
        {
          title: "HealthyHeart Cardiologists",
          location: "303 Cedar Drive",
          image: "https://dummyimage.com/600x400/000/fff&text=HealthyHeart+Cardiologists",
        },
      ],
    },
    {
      category: "Physiotherapist",
      icon: Atom,
      clinics: [
        {
          title: "FlexCare Physiotherapy",
          location: "404 Birch Boulevard",
          image: "https://dummyimage.com/600x400/000/fff&text=FlexCare+Physiotherapy",
        },
        {
          title: "ActiveLife Physio Center",
          location: "505 Spruce Court",
          image: "https://dummyimage.com/600x400/000/fff&text=ActiveLife+Physio+Center",
        },
        {
          title: "RehabMotion Clinic",
          location: "606 Willow Way",
          image: "https://dummyimage.com/600x400/000/fff&text=RehabMotion+Clinic",
        },
      ],
    },
    {
      category: "Dermatologist",
      icon: Sun,
      clinics: [
        {
          title: "SkinHealth Dermatology",
          location: "707 Palm Avenue",
          image: "https://dummyimage.com/600x400/000/fff&text=SkinHealth+Dermatology",
        },
        {
          title: "ClearSkin Clinic",
          location: "808 Chestnut Street",
          image: "https://dummyimage.com/600x400/000/fff&text=ClearSkin+Clinic",
        },
        {
          title: "DermaCare Specialists",
          location: "909 Cedar Lane",
          image: "https://dummyimage.com/600x400/000/fff&text=DermaCare+Specialists",
        },
      ],
    },
    {
      category: "Pediatrician",
      icon: Baby,
      clinics: [
        {
          title: "KidsCare Pediatric Clinic",
          location: "1010 Maple Drive",
          image: "https://dummyimage.com/600x400/000/fff&text=KidsCare+Pediatric+Clinic",
        },
        {
          title: "HealthyKids Pediatrics",
          location: "1111 Elmwood Avenue",
          image: "https://dummyimage.com/600x400/000/fff&text=HealthyKids+Pediatrics",
        },
        {
          title: "Little Ones Pediatric Center",
          location: "1212 Oakwood Street",
          image: "https://dummyimage.com/600x400/000/fff&text=Little+Ones+Pediatric+Center",
        },
      ],
    },
    {
      category: "Orthopedic",
      icon: Bone,
      clinics: [
        {
          title: "JointCare Orthopedic Clinic",
          location: "1313 Willow Drive",
          image: "https://dummyimage.com/600x400/000/fff&text=JointCare+Orthopedic+Clinic",
        },
        {
          title: "BoneHealth Orthopedics",
          location: "1414 Pine Avenue",
          image: "https://dummyimage.com/600x400/000/fff&text=BoneHealth+Orthopedics",
        },
        {
          title: "OrthoWellness Clinic",
          location: "1515 Cedar Street",
          image: "https://dummyimage.com/600x400/000/fff&text=OrthoWellness+Clinic",
        },
      ],
    },
  ];
  