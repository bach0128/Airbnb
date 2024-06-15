// "use server";
// import { cookies } from "next/headers";
import { setCookie } from "cookies-next";

export async function login(user) {
  const expires = new Date(Date.now() + 10 * 1000);
  const session = { user, expires };
  setCookie("user", { user: user, expires: expires });
}

export async function logout() {
  setCookie("user", {});
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
}
