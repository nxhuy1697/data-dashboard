import Head from "next/head";

import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Dashboard from "./dashboard/Dashboard";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";

export default function Home() {
  const {data : session} = useSession();
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >

        {
          session && (
            <>
            <SideMenu />
            <Dashboard />
            
            </>
          )
        }
       <Login />
      </main>
    </>
  );
}
