"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import {usePathname} from "next/navigation";
import {Popover, PopoverButton, PopoverPanel} from "@headlessui/react";
import {rooms} from "@/store/dataStore";
import {ChevronDownIcon} from "@heroicons/react/24/outline";

interface PublicHeaderProps {
}

const PublicHeader = ({}: PublicHeaderProps) => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Update `isScrolled` based on the current `pathname`
        const updateScrollState = () => {
            if (pathname === "/") {
                setIsScrolled(window.scrollY > 50);
            } else {
                setIsScrolled(true);
            }
        };

        // Initial check on mount
        updateScrollState();

        // Update `isScrolled` on scroll
        window.addEventListener("scroll", updateScrollState);
        return () => {
            window.removeEventListener("scroll", updateScrollState);
        };
    }, [pathname]); // Re-run effect when `pathname` changes

    return (
        <>
            {/* Header */}
            <header
                className={`fixed top-0 left-0 h-24 w-full z-30 transition-all duration-300 ${
                    isScrolled ? "bg-zinc-950 shadow-lg" : "bg-transparent backdrop-blur-md"
                }`}
                style={{
                    WebkitMaskImage: isScrolled
                        ? undefined
                        : "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
                    maskImage: isScrolled
                        ? undefined
                        : "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
                    WebkitMaskSize: "100% 200%",
                    maskSize: "100% 200%",
                }}
            >
                <div className="h-full container mx-auto px-6 lg:px-8 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="h-full flex items-center gap-3 py-2">
                        <Image
                            src="/assets/images/Logo.png"
                            alt="Escape Game Art Logo"
                            height={40}
                            width={60}
                            className="h-auto w-auto"
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden mr-20 md:flex items-center space-x-10">
                        <Popover className="group">
                            <PopoverButton
                                className="relative text-sm sm:text-base font-semibold ui-selected: basis-1/3 outline-none text-white">
                                <span className="relative z-10 flex items-center gap-2">
                                    Räume
                                    <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                                </span>
                            </PopoverButton>
                            <PopoverPanel anchor="bottom" className="mt-5 flex flex-col gap-2.5 bg-zinc-900 text-center p-4 rounded-lg z-50">
                                {({close}) => (
                                    <>
                                        {rooms.map(room => (
                                            <Link href={`/escape-rooms/${room.name.toLowerCase().replaceAll(" ", "-")}`}
                                                  key={room.name} onClick={() => close()}
                                                  className="relative text-sm sm:text-base font-semibold ring-0 text-white group"
                                            >
                                        <span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"/>
                                                <span className="relative z-10">{room.name}</span>
                                            </Link>
                                        ))}
                                        <Link href={`/escape-rooms`} onClick={() => close()}
                                              className="relative text-sm sm:text-base font-semibold ring-0 text-white group"
                                        >
                                        <span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"/>
                                            <span className="relative z-10">Alle Räume</span>
                                        </Link>
                                    </>
                                )}
                            </PopoverPanel>
                        </Popover>
                        <Link
                            href="/angebote"
                            className="relative text-sm sm:text-base font-semibold text-white group"
                        >
                                <span
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                                ></span>
                            <span className="relative z-10">Angebote</span>
                        </Link>
                        <Link
                            href="/kontakt"
                            className="relative text-sm sm:text-base font-semibold text-white group"
                        >
                                <span
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                                ></span>
                            <span className="relative z-10">Kontakt</span>
                        </Link>
                    </nav>

                    {/* Mobile Menu Icon */}
                    <button
                        className="text-zinc-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Bars3Icon className="w-7 h-7"/>
                    </button>
                </div>
            </header>

            {/* Vollbild-Navigation */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-zinc-900 text-white">
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <XMarkIcon className="w-8 h-8"/>
                    </button>

                    <div className="flex flex-col justify-center items-center h-full space-y-10">
                        {/* Räume Section */}
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4">Räume</h2>
                            <ul className="space-y-2">
                                <li key="escape-rooms/magic-museum">
                                    <Link
                                        href="/escape-rooms/magic-museum"
                                        className="text-lg hover:text-primary-500 transition"
                                    >
                                        Magie des Museums
                                    </Link>
                                </li>
                                <li key="escape-rooms/da-vinci-code">
                                    <Link
                                        href="/escape-rooms/da-vinci-code"
                                        className="text-lg hover:text-primary-500 transition"
                                    >
                                        Da Vinci Code
                                    </Link>
                                </li>
                                <li key="escape-rooms/last-arrival">
                                    <Link
                                        href="/escape-rooms/last-arrival"
                                        className="text-lg hover:text-primary-500 transition"
                                    >
                                        Last Arrival
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Navigation Links */}
                        <nav className="text-center">
                            <ul className="space-y-4">
                                <li key="angebote">
                                    <Link
                                        href="/angebote"
                                        className="text-lg hover:text-primary-500 transition"
                                    >
                                        Angebote
                                    </Link>
                                </li>
                                <li key="gutscheine">
                                    <Link
                                        href="/gutscheine"
                                        className="text-lg hover:text-primary-500 transition"
                                    >
                                        Gutscheine
                                    </Link>
                                </li>
                                <li key="faq">
                                    <Link
                                        href="/faq"
                                        className="text-lg hover:text-primary-500 transition"
                                    >
                                        FAQ
                                    </Link>
                                </li>
                                <li key="kontakt">
                                    <Link
                                        href="/kontakt"
                                        className="text-lg hover:text-primary-500 transition"
                                    >
                                        Kontakt
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Contact Section */}
                        <div className="text-center space-y-2">
                            <p className="text-lg">
                                Telefon:{" "}
                                <a
                                    href="tel:+498990173154"
                                    className="text-primary-500 hover:underline"
                                >
                                    +49 89 90173154
                                </a>
                            </p>
                            <p className="text-lg">
                                E-Mail:{" "}
                                <a
                                    href="mailto:info@escapegame-art.de"
                                    className="text-primary-500 hover:underline"
                                >
                                    info@escapegame-art.de
                                </a>
                            </p>
                            <p className="text-lg">
                                Adresse:{" "}
                                <a
                                    href="https://www.google.de/maps/place/Escape+Game+Art/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-500 hover:underline"
                                >
                                    Musterstraße 1, 80331 München
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PublicHeader;