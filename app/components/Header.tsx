import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp,FaPhoneAlt } from "react-icons/fa";
import { CiLight, CiDark} from "react-icons/ci";

export default function Header() {
  return (
    <header className='flex items-center justify-between '>
      <Image className='mx-6 my-6 cursor-pointer md:mx-10 md:m-6 md:w-20' src={'/MyLogo.svg'} alt={'logo'} width={60} height={80} title='Muhammad Fuzail'/>
      <div className='flex items-center justify-between gap-8 mx-6 md:gap-10 md:mx-10'>
        <Link href={'/'} className='text-3xl'><CiLight /></Link>
        <Link href={'/'} className='hidden text-3xl'><CiDark /></Link>
        <Link href={'/'} className='text-3xl'><FaWhatsapp /></Link>
        <Link href={'/'} className='text-2xl'><FaPhoneAlt /></Link>
      </div>
    </header>
  )
}
