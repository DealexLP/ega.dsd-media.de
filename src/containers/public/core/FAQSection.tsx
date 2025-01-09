"use client"

import React from "react";
import {FAQs} from "@/store/dataStore";

interface FAQSectionProps {}

const FAQSection = ({}: FAQSectionProps) => {

    return (
        <section className="mb-40 py-12 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <h2 className="text-4xl font-bold mb-16 text-center">Häufig gestellte Fragen</h2>
                <div className="space-y-8">
                    {FAQs.slice().map((faq, index) => (
                        <div key={index} className="border-b border-zinc-700 pb-4">
                            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                            <p className="text-zinc-300">{faq.answer}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-12 text-lg">
                    Frage nicht gefunden? Weitere Fragen finden Sie in unserem{" "}
                    <a href="/(others)/faq" className="text-primary-500 hover:underline">
                        FAQ Bereich
                    </a>.
                </p>
            </div>
        </section>
    );
};

export default FAQSection;