import React from "react";
import { Metadata } from "next";
import { HeadingSection } from "@/containers/public/core";
import { ContactFromSection } from "@/containers/public/(others)/kontakt";

export const metadata: Metadata = {
    title: "Kontakt",
    description: "Kontaktiere uns für Fragen, Buchungen oder weitere Informationen zu unseren Escape Rooms.",
};

interface ContactPageProps {}

const ContactPage = async ({}: ContactPageProps) => {
    return (
        <>
            {/* Heading Section */}
            <HeadingSection
                title="Kontakt"
                description="Wir freuen uns, von dir zu hören. Kontaktiere uns für Fragen, Buchungen oder allgemeine Informationen."
            />

            <ContactFromSection/>
        </>
    );
}

export default ContactPage;