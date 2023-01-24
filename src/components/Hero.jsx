import React from 'react'
import { MdSportsBasketball } from "react-icons/md"
import me from "../assets/me.jpeg"

const Hero = () => {
  return (
    <div name="Hero"className=' w-full h-screen bg-sky-700 overflow-hidden'>
        <section className=' max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full xl:max-w-[1200px]'>
            <p className=' text-xl text-gray-300'>Hey, My name is</p>
            <h1 className=' text-4xl sm:text-7xl font-bold text-gray-100'>Ochuko Angozi</h1>
            <h2 className=' text-3xl sm:text-5xl font-bold text-gray-200'>I am a Frontend developer and lover of Sports <MdSportsBasketball className=' inline-block' /></h2>
            <p className=' text-gray-300'>I have a passion for building funtional and responsive web applications.</p>
        </section>
    </div>
  )
}

export default Hero