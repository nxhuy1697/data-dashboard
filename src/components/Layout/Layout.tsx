import { useSession } from 'next-auth/react'
import React from 'react'
import SideMenu from '../SideMenu';
import Head from "next/head";

export default function Layout(props: any) {
    const{ data: session } = useSession();

  return (
    <>
     <Head>
        <title>DataSoft - Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <main className='layout'>
        {session && <SideMenu />}
        {props.children}
    </main>
    </>
  )
}
