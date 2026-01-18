import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";


export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <Link href="/login">You must be logged in</Link>;
  }

  return <p>Hello {session.user.name}</p>;
}