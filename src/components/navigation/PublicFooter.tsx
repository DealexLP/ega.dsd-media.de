import React from "react";
import Link from "next/link";
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {rooms} from "@/store/dataStore";

interface PublicFooterProps {

}

const navigation = {
    contact: {
        address: {
            link: "https://www.google.com/maps/dir//Gerner+Str.+17,+80638+München/",
            street: "Gernerstraße 17",
            city: "80638 München"
        },
        phone: "+49 89 90173154",
        email: "info@escapegame-art.de"
    },
    links: [
        {name: "Angebote", href: "/angebote"},
        {name: "Gutscheine", href: "/angebote/#gutschein"},
        {name: "FAQs", href: "/faq"},
        {name: "Kontakt", href: "/kontakt"},
    ],
    legal: [
        {name: 'Impressum', href: '/impressum'},
        {name: 'Datenschutz', href: 'https://www.iubenda.com/privacy-policy/55991665/full-legal'},
        {name: 'AGB', href: '/agb'},
    ],
}

const PublicFooter = ({}: PublicFooterProps) => {

    return (
        <footer className="border-t border-zinc-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="lg:grid lg:grid-cols-4 xl:gap-10">
                    <div className="h-full w-full flex items-center justify-center lg:justify-normal">
                        <Image
                            className="h-1/2 w-auto"
                            src="/assets/images/Logo.png"
                            alt="Escape Room München Escape Game Art Logo"
                            width={308}
                            height={56}
                        />
                    </div>
                    <div className="mt-16 mb-16 grid grid-cols-2 sm:grid-cols-4 gap-16 md:gap-8 lg:col-span-3">
                        <div className="md:mx-auto">
                            <h3 className="text-sm font-semibold leading-6">Kontaktinformationen</h3>
                            <ul role="list" className="mt-6 space-y-4 text-sm leading-6">
                                <li>
                                    <Link
                                        href={navigation.contact.address.link}
                                        target="_blank"
                                        className="flex gap-2 items-center text-zinc-300 hover:text-primary-500 transition duration-100">
                                        <MapPinIcon className="h-5"/>
                                        <div>
                                            {navigation.contact.address.street} <br/>
                                            {navigation.contact.address.city}
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={`mailto:${navigation.contact.email}`}
                                        className="flex gap-2 items-center text-zinc-300 hover:text-primary-500 transition duration-100"
                                    >
                                        <EnvelopeIcon className="h-5"/>
                                        {navigation.contact.email}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={`tel:${navigation.contact.phone}`}
                                        className="flex gap-2 items-center text-zinc-300 hover:text-primary-500 transition duration-100"
                                    >
                                        <PhoneIcon className="h-5"/>
                                        {navigation.contact.phone}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="md:mx-auto">
                            <h3 className="text-sm font-semibold leading-6">Räume</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {rooms.map(room => (
                                    <li key={room.name}>
                                        <Link
                                            href={`/escape-rooms/${room.name.toLowerCase().replaceAll(" ", "-")}`}
                                            className="flex gap-2 text-zinc-300 hover:text-primary-500 transition duration-100 items-center"
                                        >
                                            {room.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:mx-auto">
                            <h3 className="text-sm font-semibold leading-6">Kurzlinks</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.links.map(item => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="flex gap-2 text-zinc-300 hover:text-primary-500 transition duration-100 items-center"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:mx-auto">
                            <h3 className="text-sm font-semibold leading-6">Rechtliches</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.legal.map(item => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="flex gap-2 text-zinc-300 hover:text-primary-500 transition duration-100 items-center"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-zinc-800 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex justify-center items-center space-x-2 md:order-2">
                        <p className="text-zinc-300">Webdesign by</p>
                        <Link href="https://www.dsd-media.de/" target="_blank">
                            <img
                                className="h-10 cursor-pointer"
                                src="/assets/core/Logo-Transparent-White.png"
                                alt="DSD Media"
                                loading="lazy"
                            />
                            <span className="sr-only">DSD Media - Webdesign München</span>
                        </Link>
                    </div>
                    <p className="text-center md:text-left mt-8 text-xs leading-5 text-zinc-300 md:order-1 md:mt-0">
                        &copy; {new Date().getFullYear()} Escape Game Art München. Alle Rechte vorbehalten.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default PublicFooter;