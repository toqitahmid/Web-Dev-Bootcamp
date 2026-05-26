"use server";

import { revalidatePath } from "next/cache";
import { postUserInfo } from "./task";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  console.log(formData);

  const newUser = { name, email, phone, message };

  const res = await postUserInfo(newUser);

  if (res.ok) {
    revalidatePath("/user");
    redirect("/user");
  }

  return res;
};
