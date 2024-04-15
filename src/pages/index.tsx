import SideMenu from "@/components/SideMenu";
import Dashboard from "./dashboard/Dashboard";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <main>
        {session && <Dashboard />}
        {!session && <Login />}
      </main>
    </>
  );
}
