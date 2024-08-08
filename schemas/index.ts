"use client"
 
import { z } from "zod"
 
export const LoginSchema = z.object({
    email: z.string().email({
      message: "Email is required"
    }),
    password: z.string().min(1, {
      message: "Password is required"
    })
  });
  
  export const registerSchema = z.object({
    name: z.string().min(1, {
      message: "Name is required"
    }),
    email: z.string().email({
      message: "Email is required"
    }),
    password: z.string().min(8, {
      message: "Minimum 8 characters"
    })
  });

  
  export const resetPasswordSchema = z.object({
    email: z.string().email({
      message: "Email is required"
    }),
  });

  export const ResetPasswordConfirmSchema = z.object({
    password: z.string().min(8, {
      message: "Minimum 8 characters"
    }),
  });


  export const ClinicRegisterSchema = z.object({
    clinicName: z.string().min(1, {
      message: "Clinic name is required",
    }),
    email: z.string().email({
      message: "Valid email is required",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    location: z.string().min(1, {
      message: "Location is required",
    }),
    workingHours: z.string().min(1, {
      message: "Working hours are required",
    }),
    contactNumber: z.string().min(10, {
      message: "Valid contact number is required",
    }),
    description: z.string().optional(),
    website: z.string().url().optional(),
    image: z.string().optional(),
  });