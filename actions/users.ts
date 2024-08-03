"use server";



import { account } from "@/appwrite.config";
import { parseStringify } from "@/lib/utils";
import { ID } from "appwrite";



declare interface CreateUserParams {
    name: string;
    email: string;
    password: string;
  }

export const createUser = async (user: CreateUserParams) => {
  try {
    console.log({user:user})
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    
    return parseStringify(newAccount);
  } catch (error: any) {
    if (error && error?.code === 409) {
      const existingUser = await account.listIdentities()
      console.log({existingUser})
      if(existingUser){

        return {error:'Email already exists!'};
      }
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

export const getUser = async () => {
  try {
    const user = await account.get();

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};
