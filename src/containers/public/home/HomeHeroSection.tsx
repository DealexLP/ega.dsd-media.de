import React from "react";
import Image from "next/image";
import {
    PuzzlePieceIcon,
    UsersIcon,
    StarIcon,
    BuildingOffice2Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

interface IHomeHeroSection {}

const HomeHeroSection = ({}: IHomeHeroSection) => {
    return (
        <section className="relative w-full py-40 lg:h-screen  text-white">
            {/* Hintergrundbild */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/EscapeGame-Art-Hero.png"
                    alt="Escape Room München bei Escape Game Art"
                    layout="fill"
                    className="opacity-75 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-zinc-950"></div>
            </div>

            {/* Inhalt */}
            <div className="relative z-10 container mx-auto flex flex-col md:items-center justify-center h-full px-6 md:text-center">
                {/* Titel */}
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-primary-400 to-primary-600">
                    Escape Room München <br /> Dein Abenteuer beginnt hier
                </h1>

                {/* Untertitel */}
                <p className="mt-4 text-md sm:text-xl max-w-3xl">
                    Tauche ein in spannende Rätsel und unvergessliche Abenteuer bei <strong>Escape Game Art</strong>. Perfekt für Freunde, Familien und Teams – löse unsere Escape Rooms und werde Teil eines einzigartigen Erlebnisses!
                </p>

                {/* Call-to-Actions */}
                <div className="w-full flex flex-col-reverse md:flex-col items-start md:items-center justify-between">
                    <div className="mt-8 flex flex-col md:flex-row w-full text-center md:w-auto md:text-left gap-4">
                        <Link
                            href="/#escape-rooms"
                            className="px-6 py-3 text-md sm:text-base font-medium bg-primary-500 text-black rounded-md hover:bg-primary-400 transition"
                        >
                            Reserviere dein Spiel
                        </Link>
                        <Link
                            href="/src/app/(public)/(others)/faq"
                            className="px-6 py-3 text-sm sm:text-base font-medium bg-white/10 text-white rounded-md hover:bg-white/20 transition"
                        >
                            Häufige Fragen
                        </Link>
                    </div>

                    {/* Features */}
                    <div className="my-10 md:mt-20 md:mb-0 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 md:max-w-4xl">
                        <div className="flex md:flex-col items-center gap-3">
                            <PuzzlePieceIcon className="w-6 h-6 text-primary-500"/>
                            <p className="text-sm sm:text-base">
                                Kreative und immersive Rätsel
                            </p>
                        </div>
                        <div className="flex md:flex-col items-center gap-3">
                            <StarIcon className="w-6 h-6 text-primary-500"/>
                            <p className="text-sm sm:text-base">Top bewertet von Spielern</p>
                        </div>
                        <div className="flex md:flex-col items-center gap-3">
                            <UsersIcon className="w-6 h-6 text-primary-500" />
                            <p className="text-sm sm:text-base">
                                Ideal für Gruppen bis 8 Personen
                            </p>
                        </div>
                        <div className="flex md:flex-col items-center gap-3">
                            <BuildingOffice2Icon className="w-6 h-6 text-primary-500" />
                            <p className="text-sm sm:text-base">
                                Perfekt für Firmen- und Teamevents
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHeroSection;