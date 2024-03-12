import { LanguageContext } from "../contexts/LanguageContext"
import React, { useContext } from "react"

export default function Footer (){
    const { translations } = useContext(LanguageContext);
    const { goodbye} = translations;

    return(
        <>
        <main className="relative px-10 py-10 md:px-60 md:py-20  md:grid md:grid-cols-3 gap-10">
            <p className="relative col-span-2 text-3xl md:text-4xl mt-4 md:mb-8 tracking-wide leading-loose font-medium md:pl-20 text-right pr-10 z-10">
                {goodbye}</p>
            <div className="absolute inset-0 flex  z-0">
                <div className="bg-blue2 rounded-md absolute w-18 md:w-48 h-4 left-0 md:left-120 top-28"></div>
            </div> 
            <div className="flex justify-around gap-4 mt-4 md:flex-col md:justify-center font-medium">
                <a className="text-sky-600" href="">Github</a>
                <a className="text-black" href="">Blog</a>
                <a className="text-cyan-800" href="">Linkedin</a>
                <a className="text-pink2" href="">Email</a>
            </div> 
        </main>
        
        </>
    )
}