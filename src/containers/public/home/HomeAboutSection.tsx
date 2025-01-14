"use client"

import React from "react";
import { StarIcon, PuzzlePieceIcon, MapPinIcon, LightBulbIcon, UsersIcon, ClockIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import {Autoplay} from "swiper/modules";

interface HomeAboutSectionProps {}

const HomeAboutSection = ({}: HomeAboutSectionProps) => {
    const benefits = [
        { title: "Spannende Räume", icon: <PuzzlePieceIcon className="w-10 h-10 text-primary-500" />, description: "Tauche ein in detailreiche und realistische Welten." },
        { title: "Einzigartige Rätsel", icon: <LightBulbIcon className="w-10 h-10 text-primary-500" />, description: "Rätsel, die du so noch nie gesehen hast." },
        { title: "Beste Lage", icon: <MapPinIcon className="w-10 h-10 text-primary-500" />, description: "Zentral in München gelegen, gut erreichbar, mit kostenlosen Parkplätzen." },
        { title: "Für Gruppen geeignet", icon: <UsersIcon className="w-10 h-10 text-primary-500" />, description: "Perfekt für Freunde, Familien und Teams." },
        { title: "Top bewertet", icon: <StarIcon className="w-10 h-10 text-primary-500" />, description: "Mehr als 300 positive Bewertungen." },
        { title: "Spielezeit 60+ Minuten", icon: <ClockIcon className="w-10 h-10 text-primary-500" />, description: "Genügend Zeit für Rätselspaß und Abenteuer." },
    ];

    const testimonials = [
        { name: "Teresa Kl", text: "Ein spannender Fall (da Vinci), tolle Betreuung. Es hat allen Beteiligten sehr viel Freude bereitet." },
        { name: "David D.", text: "Sehr freundlicher Besitzer und spannende Spiele. 👍🏼 Nur zu empfehlen!" },
        { name: "Joana B. Costa", text: "Die Rätsel sind aufwendig gestaltet, es gibt immer wieder Überraschungen. Wir kommen wieder!" },
        { name: "Oliver Simonis", text: "Ein grandioses Erlebnis, liebevoll gemacht und super Rätsel. Wir planen schon den nächsten Besuch." },
        { name: "Romina Hosp", text: "Der Da Vinci Code Raum war super! Freuen uns schon auf den nächsten Raum. 😊" },
    ];

    return (
        <>
            <section
                className="py-12 min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white relative flex justify-center items-center">
                <div
                    className="container mx-auto w-full overflow-x-hidden h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 gap-y-24 md:gap-y-40">
                    {/* Vorteile - Timeline */}
                    <div className="h-auto">
                        <h2 className="text-4xl font-bold text-center mb-12">Was macht uns besonders?</h2>
                        <div className="relative flex items-center justify-between overflow-hidden">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 mx-auto">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="relative flex flex-col items-center text-center">
                                        <div className="mb-6">{benefit.icon}</div>
                                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                        <p className="text-sm text-zinc-300">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Testimonials - Overlapping Style */}
                    <div className="h-full">
                        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Das sagen unsere Kunden</h2>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{delay: 6000}}
                            modules={[Autoplay]}
                            className="relative min-h-96 max-w-sm md:max-w-5xl px-4 mx-auto"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="relative w-full bg-zinc-800 p-6 sm:p-8 rounded-lg shadow-lg overflow-hidden ">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-20"></div>
                                        <p className="text-lg text-zinc-300 italic mb-6">"{testimonial.text}"</p>
                                        <h3 className="text-lg font-semibold text-primary-500">– {testimonial.name}</h3>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeAboutSection;