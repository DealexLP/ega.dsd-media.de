import React from "react";
import { FAQsAll } from "@/store/dataStore";
import Link from "next/link";
import Section from "@/components/core/Section";
import clsx from "clsx";

const FaqListSection = () => {
    return (
        <>
            {/* JSON-LD für strukturierte Daten */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": FAQsAll.map((faq) => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer,
                            },
                        })),
                    }),
                }}
            />

            <Section id="faqListSection">
                {/* Titel und Einleitung */}
                <div className="text-left text-white mb-20">
                    <h2 className="text-4xl font-bold mb-4">Diese Fragen werden uns oft gestellt</h2>
                    <p className="text-lg text-zinc-300 max-w-3xl">
                        Hier findest du Antworten auf die häufigsten Fragen zu unseren Escape Rooms, Buchungen und mehr.
                        Solltest du weitere Fragen haben, kontaktiere uns einfach!
                    </p>
                </div>

                {/* FAQ Liste */}
                <div className="space-y-6">
                    {FAQsAll.map((faq, index) => (
                        <article key={index} className={
                            clsx(
                                "pb-4",
                                index !== FAQsAll.length - 1 && "border-b border-zinc-700"
                            )
                        }>
                            <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                            <p className="text-zinc-300">{faq.answer}</p>
                        </article>
                    ))}
                </div>

                {/* Verweisung auf Kontakt */}
                <div className="text-center my-24">
                    <p className="text-lg text-zinc-300 mb-4">
                        Deine Frage wurde nicht beantwortet? Kontaktiere uns direkt, und wir helfen dir gerne weiter.
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-block px-6 py-3 bg-primary-500 text-white rounded-md font-semibold hover:bg-primary-600 transition-colors"
                    >
                        Zur Kontaktseite
                    </Link>
                </div>
            </Section>
        </>
    );
};

export default FaqListSection;