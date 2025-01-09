import React from "react";
import { Metadata } from "next";
import {
    HomeAboutSection, HomeCouponSection,
    HomeHeroSection,
} from "@/containers/public/home";
import {FAQSection, RoomsSection} from "@/containers/public/core";

export const metadata: Metadata = {
    title: 'PublicHomePage',
    description: 'Beschreibung für PublicHomePage',
};

interface PublicHomePageProps {}

const PublicHomePage = async ({}: PublicHomePageProps) => {
    return (
        <>
            <HomeHeroSection/>
            <RoomsSection showHeader={true}/>
            <HomeCouponSection/>
            <HomeAboutSection/>
            <FAQSection/>
        </>
    );
};

export default PublicHomePage;