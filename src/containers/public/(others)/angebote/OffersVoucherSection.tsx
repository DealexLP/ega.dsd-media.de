import React from "react";
import Section from "@/components/core/Section";
import Link from "next/link";

const OffersVoucherSection = () => {
    return (
        <Section id="gutschein">
            <div className="py-24 text-center">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-4xl font-extrabold tracking-tight mb-6">
                        Verschenke unvergessliche Abenteuer
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto text-zinc-300 leading-relaxed">
                        Überrasche deine Liebsten mit einem <span className="text-primary-500 font-bold">Geschenkgutschein</span>.
                        Ob Freunde, Familie oder Kollegen – schenke ein Erlebnis voller Spannung, Spaß und Teamwork!
                    </p>
                </div>

                {/* Call to Action */}
                <div className="flex justify-center">
                    <Link
                        href="https://www-252d.bookeo.com/bookeo/b_escapegameart_start.html?buyvoucher=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-primary-500 rounded-lg text-white font-semibold text-lg shadow-lg hover:bg-primary-600 transition-colors transform duration-300 hover:scale-105"
                    >
                        Gutschein kaufen
                    </Link>
                </div>

                {/* Decorative Lines */}
                <div className="mt-12">
                    <hr className="border-t border-zinc-700 w-2/3 mx-auto mb-4" />
                    <p className="text-sm text-zinc-400 italic">
                        Schenke Abenteuer, die lange in Erinnerung bleiben. Perfekt für jeden Anlass!
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default OffersVoucherSection;