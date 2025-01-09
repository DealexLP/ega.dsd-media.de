import React from "react";
import { Metadata } from "next";
import {FAQSection, HeadingSection, RoomsSection} from "@/containers/public/core";

export const metadata: Metadata = {
    title: "EscapeRoomsPage",
    description: "Entdecke unsere spannenden Escape Rooms – ein Abenteuer voller Rätsel, Spaß und Teamwork.",
};

interface EscapeRoomsPageProps {}

const EscapeRoomsPage = async ({}: EscapeRoomsPageProps) => {
    return (
        <>
            {/* Heading Section */}
            <HeadingSection
                title="Unsere Räume"
                description="Tauche ein in die Welt unserer Escape Rooms und erlebe unvergessliche Abenteuer. Perfekt für Freunde, Familien und Teams!"
            />

            {/* Rooms Section */}
            <RoomsSection />
            <div className="mt-48">
                <FAQSection/>
            </div>
        </>
    );
};

export default EscapeRoomsPage;