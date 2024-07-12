import React from "react";

const Hero = () => {
    return (
    <div className="w-full h-screen">
        <img className="top-0 left-0 w-full h-screen object-cover"src="https://i.redd.it/t5gdsm1jm2m41.jpg" alt=""></img>
        <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"/>
        <div className="absolute w-full h-full flex  flex-col justify-center text-white top-0">
            <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
                <p>ALL INCLUSIVE</p>
                <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Private Beaches & Gateways</h1>
                <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
                    Blockchain is the latest buzz words in the market. Bitcoin is great, but the potential of the underlying technology is immense.
                </p>
                <button className="bg-white text-black">Reserve now</button>
            </div>
        </div>
    </div>
    )
}

export default Hero;