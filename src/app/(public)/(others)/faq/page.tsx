import React from "react";
import { Metadata } from "next";
import { HeadingSection } from "@/containers/public/core";
import {FaqListSection} from "@/containers/public/(others)/faq";

export const metadata: Metadata = {
    title: "FAQ Page",
    description: "Antworten auf häufig gestellte Fragen zu unseren Escape Rooms, Buchungen und Angeboten.",
};

interface FaqPageProps {}

const FaqPage = async ({}: FaqPageProps) => {
    return (
        <>
            {/* Heading Section */}
            <HeadingSection
                title="Häufig gestellte Fragen"
                description="Hier findest du Antworten auf die wichtigsten Fragen rund um unsere Escape Rooms und Buchungsprozesse."
            />

            <FaqListSection/>
        </>
    );
};

export default FaqPage;