import React from 'react'
import Image from 'next/image'
import { IoMdClose } from 'react-icons/io'

type MenuType = {
  setIsMenuOpen: (value: boolean) => void
}
export default function AboutMe (props: MenuType) {
  return (
    <div className='absolute backdrop-blur-md bg-opacity-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 z-50 flex justify-between flex-col py-10 px-10  self-center rounded-3xl bg-[#252525] md:w-3/4'>
      <IoMdClose
        onClick={() => props.setIsMenuOpen(false)}
        className='absolute text-3xl cursor-pointer top-8 right-8 bg-black rounded-full p-1 hover:rotate-90 ease-in duration-100'
      />
      <div className='flex items-center justify-between'>
        <div className='content w-full md:w-2/3 lg:w-1/2'>
          <div className='about'>
            <div className='text'>
              <h3 className='text-3xl text-center md:text-4xl font-mono font-bold text-[#007aff] mb-4 md:text-left'>
                About Me
              </h3>
              <p className='mb-2 tracking-wider text-center md:text-left '>
                I help business owners and busy web developers to design &
                develop creative websites that fits their vision and attracts
                the visitors to stay forever. Technologies and tools that I use
                to create such awesome stuff are:
              </p>
            </div>
            <div className='skills'>
              <ul className='flex flex-wrap mt-2 items-center justify-center md:items-start md:justify-start'>
                <li className='bg-transparent border py-1.5 px-3 text-sm rounded-2xl w-fit m-1 font-bold'>
                  #NextJS
                </li>
                <li className='bg-transparent border py-1.5 px-3 text-sm rounded-2xl w-fit m-1 font-bold'>
                  #TailwindCSS
                </li>
                <li className='bg-transparent border py-1.5 px-3 text-sm rounded-2xl w-fit m-1 font-bold'>
                  #Typescript
                </li>
                <li className='bg-transparent border py-1.5 px-3 text-sm rounded-2xl w-fit m-1 font-bold'>
                  #MongoDB
                </li>
                <li className='bg-transparent border py-1.5 px-3 text-sm rounded-2xl w-fit m-1 font-bold'>
                  #ExpressJS
                </li>
                <li className='bg-transparent border py-1.5 px-3 text-sm rounded-2xl w-fit m-1 font-bold'>
                  #NodeJS
                </li>
                <li className='bg-transparent border py-1.5 px-3 text-sm rounded-2xl w-fit m-1 font-bold'>
                  #ReactJS
                </li>
                <li className='bg-transparent border py-1.5 px-3 text-sm rounded-2xl w-fit m-1 font-bold'>
                  #Git
                </li>
                <li className='bg-transparent border py-1.5 px-3 text-sm rounded-2xl w-fit m-1 font-bold'>
                  #GitHub
                </li>
                <li className='bg-transparent border py-1.5 px-3 text-sm rounded-2xl w-fit m-1 font-bold'>
                  #Figma
                </li>
                <li className='bg-transparent border py-1.5 px-3 text-sm rounded-2xl w-fit m-1 font-bold'>
                  #HTML
                </li>
                <li className='bg-transparent border py-1.5 px-3 text-sm rounded-2xl w-fit m-1 font-bold'>
                  #HTML
                </li>
                <li className='bg-transparent border py-1.5 px-3 text-sm rounded-2xl w-fit m-1 font-bold'>
                  #CSS
                </li>
                <li className='bg-transparent border py-1.5 px-3 text-sm rounded-2xl w-fit m-1 font-bold'>
                  #JavaScript
                </li>
              </ul>
            </div>
          </div>
          <div className='stack flex flex-col items-center md:items-start'>
            <h3 className='text-3xl text-center md:text-4xl font-mono mt-4 font-bold text-[#007aff] md:text-left'>
              MENN Stack
            </h3>
            <div className='flex'>
              <div className='flex flex-col items-center group '>
                <div className='tooltip text-sm translate-y-5 ease-in-out duration-100 invisible group-hover:translate-y-0 group-hover:visible  z-10 relative bg-[#47a248] font-bold py-2 px-4 w-fit rounded-full'>
                  mongoDB
                  <div className='absolute z-[-1] bottom-[-10px] left-1/2 transform -translate-x-1/2 w-5 h-5 rotate-45 bg-[#47a248]'></div>
                </div>
                <Image
                  className='mt-4 flex tranlate-x-10 z-40 h-auto'
                  src={'/mongo.svg'}
                  alt={'MongoDB'}
                  width={70}
                  height={100}
                />
                <h2 className='text-2xl md:text-2xl font-mono font-bold text-[#47a248] mb-4'>
                  M
                </h2>
              </div>
              <div className='flex flex-col items-center group'>
                <div className='tooltip text-sm translate-y-5 ease-in-out text-black duration-100 invisible group-hover:translate-y-0 group-hover:visible  z-10 relative bg-[#fff] font-bold py-2 px-4 w-fit rounded-full'>
                  ExpressJS
                  <div className='absolute z-[-1] bottom-[-10px] left-1/2 transform -translate-x-1/2 w-5 h-5 rotate-45 bg-[#fff]'></div>
                </div>
                <Image
                  className='mt-4 flex tranlate-x-10'
                  src={'/express2.svg'}
                  alt={'ExpressJS'}
                  width={70}
                  height={100}
                />
                <h2 className='text-2xl md:text-2xl font-mono font-bold text-[#fff] mb-4'>
                  E
                </h2>
              </div>
              <div className='flex flex-col items-center group'>
                <div className='tooltip text-sm translate-y-5 ease-in-out text-white duration-100 invisible group-hover:translate-y-0 group-hover:visible  z-10 relative bg-[#000] font-bold py-2 px-4 w-fit rounded-full'>
                  NextJS
                  <div className='absolute z-[-1] bottom-[-10px] left-1/2 transform -translate-x-1/2 w-5 h-5 rotate-45 bg-[#000]'></div>
                </div>
                <Image
                  className='mt-4 flex tranlate-x-10'
                  src={'/next-js.svg'}
                  alt={'NextJS'}
                  width={70}
                  height={100}
                />
                <h2 className='text-2xl md:text-2xl font-mono font-bold text-[#000] mb-4'>
                  N
                </h2>
              </div>
              <div className='flex flex-col items-center group'>
                <div className='tooltip text-sm translate-y-5 ease-in-out text-black duration-100 invisible group-hover:translate-y-0 group-hover:visible  z-10 relative bg-[#39dd34] font-bold py-2 px-4 w-fit rounded-full'>
                  NodeJS
                  <div className='absolute z-[-1] bottom-[-10px] left-1/2 transform -translate-x-1/2 w-5 h-5 rotate-45 bg-[#39dd34]'></div>
                </div>
                <Image
                  className='mt-4 flex tranlate-x-10'
                  src={'/node-js.svg'}
                  alt={'NodeJS'}
                  width={70}
                  height={100}
                />
                <h2 className='text-2xl md:text-2xl font-mono font-bold text-[#39dd34] mb-4'>
                  N
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className='image hidden md:flex items-center justify-center lg:w-1/2'>
          <Image
            className='md:w-96 lg:w-10/12'
            src={'/AboutPng.png'}
            alt={'logo'}
            width={300}
            height={200}
            title='Muhammad Fuzail'
          />
        </div>
      </div>
    </div>
  )
}
