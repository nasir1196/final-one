"use client"

import Head from 'next/head';
import Homes from "@/components/homePage/Homes/Homes";



export default function Home( ) {

    return (
    <>
        <Head>
            <title>One-Call-kuwait-Home</title>
            <meta name="description" content="home touch maintainance" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
            <Homes/>
        </main>
    </>
  )
}
