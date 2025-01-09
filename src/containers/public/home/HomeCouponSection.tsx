import React from "react";
import Link from "next/link";
import {
    GiftIcon,
    BriefcaseIcon,
    TagIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid"; // Heroicons (angepasst nach Bedarf)

interface HomeCouponSectionProps {}

const HomeCouponSection = ({}: HomeCouponSectionProps) => {
    const offers = [
        {
            title: "Geschenkgutscheine",
            description: "Verschenke Abenteuer und Spannung – ideal für Freunde und Familie.",
            link: "/angebote/#gutschein",
            icon: <GiftIcon className="w-16 h-16 text-primary-500" />,
        },
        {
            title: "Firmenfeiern",
            description: "Perfekt für Team-Building und unvergessliche Firmen-Events.",
            link: "/angebote",
            icon: <BriefcaseIcon className="w-16 h-16 text-primary-500" />,
        },
        {
            title: "Rabatte & Aktionen",
            description: "Exklusive Angebote für Schüler, Studenten und Gruppen.",
            link: "/angebote",
            icon: <TagIcon className="w-16 h-16 text-primary-500" />,
        },
        {
            title: "Klassenausflüge",
            description: "Ein spannendes Erlebnis für Schülergruppen – Lernen mal anders.",
            link: "/angebote",
            icon: <AcademicCapIcon className="w-16 h-16 text-primary-500" />,
        },
    ];


    return (
        <section className="mt-48 mb-24 py-16 flex justify-center items-center bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Unsere Angebote</h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Entdecke Geschenkgutscheine, Rabatte und viele weitere spannende Angebote für jede Gelegenheit. Perfekt für Teams, Freunde und Familien!
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {offers.map((offer, index) => (
                        <Link href={offer.link} key={index}>
                            <div
                                className="relative h-full group bg-zinc-800 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden pt-6 flex flex-col items-center"
                            >
                                {/* Icon */}
                                <div className="mb-6">{offer.icon}</div>
                                {/* Content */}
                                <div className="p-6 flex flex-col h-60">
                                    <h3 className="text-xl font-semibold mb-4">{offer.title}</h3>
                                    <p className="text-base text-zinc-300 flex-grow">{offer.description}</p>
                                    <span className="text-primary-500 hover:underline text-lg font-medium">
                                        Mehr erfahren
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeCouponSection;