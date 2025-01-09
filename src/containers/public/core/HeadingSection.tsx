import React from "react";
import Image from "next/image";

interface HeadingSectionProps {
    title: string;
    description: string;
}

const HeadingSection = ({title, description}: HeadingSectionProps) => {
    return (
        <section id="heading"
                 className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
            {/* Hintergrundbild */}
            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
                <Image
                    src="/assets/images/EscapeGame-Art-Heading.png"
                    alt="Escape Room München bei Escape Game Art"
                    height={1024}
                    width={1792}
                    className="h-full w-full object-cover"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
            </div>


            {/* Inhalt */}
            <div
                className="container relative z-10 mx-auto p-6 lg:p-12 lg:pt-24 h-full flex flex-col justify-center items-center text-center text-white">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                    {title}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-zinc-300 max-w-3xl">
                    {description}
                </p>
            </div>
        </section>
    );
};

export default HeadingSection;