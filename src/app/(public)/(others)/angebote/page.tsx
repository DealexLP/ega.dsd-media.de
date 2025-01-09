import React from "react";
import { Metadata } from "next";
import { HeadingSection } from "@/containers/public/core";
import {
    OffersOverviewSection,
    OffersVoucherSection
} from "@/containers/public/(others)/angebote";

export const metadata: Metadata = {
    title: "OffersPage",
    description: "Entdecke unsere exklusiven Angebote und Geschenkgutscheine – perfekt für Freunde, Familie und besondere Anlässe.",
};

interface OffersPageProps {}

const OffersPage = async ({}: OffersPageProps) => {
    return (
        <>
            {/* Heading Section */}
            <HeadingSection
                title="Angebote & Gutscheine"
                description="Erlebe unvergessliche Abenteuer und entdecke unsere speziellen Angebote für Gruppen, Firmen und Schulen. Perfekt auch als Geschenkidee!"
            />

            <OffersOverviewSection/>
            <OffersVoucherSection/>
            {/* Hier könnten weitere Abschnitte wie Angebotsübersichten, Gutscheindetails oder FAQs ergänzt werden */}
        </>
    );
};

export default OffersPage;