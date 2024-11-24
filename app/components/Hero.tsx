"use client"

import React, { useState } from 'react'
import Header from './Header'
// import Link from 'next/link'
import { ImLinkedin2, ImFacebook } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa6'
import { FaLongArrowAltDown, FaLongArrowAltRight } from 'react-icons/fa'
import Image from 'next/image'
import AboutMe from './AboutMe'

export default function Hero () {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  return (
    <section className='flex flex-col h-screen justify-between xl:w-3/4 xl:mx-auto'>
      <Header />
      {isMenuOpen && <AboutMe setIsMenuOpen={setIsMenuOpen} />}
      <div className='flex -mt-20 items-center justify-between'>
        <div className='flex '>
          <div className='w-full mt-0 ml-6 md:ml-0 lg:ml-12 relative'>
            <Image
              className='z-0 absolute top-0 left-0 w-96 opacity-50 -translate-y-10 translate-x-6 md:w-4/5 md:translate-x-56 md:-translate-y-36 lg:-translate-y-30 lg:translate-x-96'
              src={'/MyLogo.svg'}
              alt={'logo'}
              width={160}
              height={160}
              title='Muhammad Fuzail'
            />
            <div className='relative ml-1 md:ml-12'>
              <h1 className='text-7xl font-mono font-bold sm:text-6xl md:text-7xl'>
                Muhammad Fuzail
              </h1>
              <p className='mx-auto text-2xl font-bold md:text-3xl md:my-4'>
                MENN Stack Developer
              </p>
              <button onClick={() => setIsMenuOpen(true)} className='group my-2 relative flex items-center justify-center p-0.5 mb-2 me-2 text-md font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 hover:scale-110 ease-in duration-300'>
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                  About Me
                </span>
                <FaLongArrowAltRight className='absolute -right-5 text-4xl group-hover:-right-6 ease-in-out duration-300' />
              </button>
            </div>
          </div>
        </div>
        <div className='flex translate-y--1/2 absolute right-8 xl:right-10'>
          <ul className=' text-[#b0b2c3] space-y-6 md:space-y-8 ml-auto mr-0'>
            <li>
              <a
                href={'https://www.linkedin.com/in/muhammad-fuzail-a554082b4/'}
                className='text-4xl hover:text-white'
                target='_blank'
                rel='noopener noreferrer'
              >
                <ImLinkedin2 />
              </a>
            </li>
            <li>
              <a
                href={'https://www.instagram.com/muhammadfuzail591/'}
                className='text-4xl hover:text-white'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsInstagram />
              </a>
            </li>
            <li>
              <a
                href={'https://www.facebook.com/profile.php?id=61556005112892'}
                className='text-4xl hover:text-white'
                target='_blank'
                rel='noopener noreferrer'
              >
                <ImFacebook />
              </a>
            </li>
            <li>
              <a
                href={'https://github.com/MuhammadFuzail591'}
                className='text-4xl hover:text-white'
                target='blank'
                rel='noopener noreferrer'
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href={'https://github.com/MuhammadFuzail591'}
                className='text-4xl hover:text-white'
                target='blank'
                rel='noopener noreferrer'
              >
                <SiGmail />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button className='group self-center animate-bounce relative flex items-center justify-center p-0.5 mb-10 me-2 text-md font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 hover:scale-110 ease-in duration-300'>
        <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
          Latest Projects
        </span>
        <FaLongArrowAltDown className='absolute -bottom-6 text-4xl  group-hover:-bottom-7 ease-in-out duration-300' />
      </button>
    </section>
  )
}
