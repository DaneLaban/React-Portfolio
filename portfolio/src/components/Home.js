import React from "react"
import image from "../Shaka2.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="Shaka" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-40 px-8">
                <h1 className="text-6xl text-red-800 font-bold cursive leading-none lg:leading-3 home-name"> Talofa. I'm Dane. </h1>
            </section>
        </main>
    )
}