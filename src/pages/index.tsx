import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LabelBottomNavigation from '@/components/Navbar'
import Skills from '@/components/SKills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Zuhaib's Portfolio </title>
      </Head>
     
     <LabelBottomNavigation />
    </>
  )
}
