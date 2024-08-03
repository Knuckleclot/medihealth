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


  