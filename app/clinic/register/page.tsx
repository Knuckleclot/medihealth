"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { ClinicRegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckCircle, Loader } from "lucide-react";
import { FormError } from "@/components/form-error";
import { account } from "@/appwrite.config";
import { ID } from "appwrite";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Image from "next/image";
import { CLINIC_REGISTER_FEATURES } from "@/lib/data";

const ClinicRegisterForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof ClinicRegisterSchema>>({
    resolver: zodResolver(ClinicRegisterSchema),
    defaultValues: {
      clinicName: "",
      email: "",
      password: "",
      location: "",
      workingHours: "",
      contactNumber: "",
      description: "",
      website: "",
      image: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ClinicRegisterSchema>) => {
    setIsLoading(true);
    console.log(values);
    try {
      const clinic = {
        clinicName: values.clinicName,
        email: values.email,
        password: values.password,
        location: values.location,
        workingHours: values.workingHours,
        contactNumber: values.contactNumber,
        description: values.description,
        website: values.website,
        image: values.image,
      };

      const newClinic = await account.create(
        ID.unique(),
        clinic.email,
        clinic.password,
        clinic.clinicName
      );
      window.dispatchEvent(new Event("clinicChange"));
      await account.createEmailPasswordSession(clinic.email, clinic.password);

      console.log({ newClinic });
      setError("");
      router.push(`/`);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const router = useRouter();
  return (
    <div className="paddingX max-w-7xl mx-auto py-40 flex flex-col lg:flex-row gap-12 relative">
      <div className="w-full lg:w-1/2 sticky top-40 h-[400px] space-y-12">
        <Link href={"/"}>
          <Image
            src={"/icons/logo.svg"}
            width={200}
            height={40}
            alt="Logo"
            className="object-contain w-fit"
          />
        </Link>
        <div className="space-y-6">
          {CLINIC_REGISTER_FEATURES.map((feature, index) => (
            <div className="flex items-start gap-6" key={index}>
              <CheckCircle className="text-indigo-500 shrink-0 w-5 h-5 mt-1" />
              <div className="space-y-2">
                <h1 className="font-semibold text-base">{feature.title}</h1>
                <h1 className="text-muted-foreground text-sm">
                  {feature.description}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl font-bold mb-6">Register Your Clinic</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="clinicName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Clinic Name</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isLoading} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isLoading} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isLoading} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isLoading} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="workingHours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Working Hours</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isLoading} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isLoading} type="tel" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} disabled={isLoading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website (optional)</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isLoading} type="url" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image (optional)</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isLoading} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader className="h-3 w-3 animate-spin" />
              ) : (
                "Apply"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ClinicRegisterForm;
