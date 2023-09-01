import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'One Call Kuwait',
    description: "One call kuwait is services website. It's totally service section . One call provide plumber Craft painter satellite and electric",
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <Head>
            <title>One Call Kuwait</title>
        </Head>
        <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar/>
        <div>
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    )
}
