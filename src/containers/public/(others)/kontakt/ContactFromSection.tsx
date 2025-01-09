"use client";

import React, { useState } from "react";
import Section from "@/components/core/Section";
import axios from "axios";

interface ContactFromSectionProps {}

const ContactFromSection = ({}: ContactFromSectionProps) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        message: "",
    });

    const { firstName, lastName, emailAddress, phoneNumber, message } = formData;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post("/api/contact", formData);
            alert("Nachricht erfolgreich gesendet!");
            // Reset the form
            setFormData({
                firstName: "",
                lastName: "",
                emailAddress: "",
                phoneNumber: "",
                message: "",
            });
        } catch (error) {
            console.error("Ein Fehler ist aufgetreten:", error);
            alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
        }
    };

    return (
        <Section id="contact">
            <div className="container mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Contact Info */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white">Kontaktiere uns</h2>
                    <p className="text-lg text-zinc-300">
                        Hast du Fragen oder möchtest du ein Escape Room Abenteuer buchen? Wir helfen dir gerne weiter!
                    </p>
                    <div className="text-lg text-zinc-300 space-y-4">
                        <p>📍 Gernerstraße 17, 80638 München, Deutschland</p>
                        <p>
                            📞 <a href="tel:+498990173154" className="text-primary-500 hover:underline">+49 89 90173154</a>
                        </p>
                        <p>✉️ <a href="mailto:info@escapegame-art.de" className="text-primary-500 hover:underline">info@escapegame-art.de</a></p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white">Öffnungszeiten:</h3>
                        <ul className="text-lg text-zinc-300">
                            <li>Mo - Do: 11:00 - 22:00 Uhr</li>
                            <li>Fr - So: 9:30 - 22:00 Uhr</li>
                        </ul>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-white mb-4">Schreib uns eine Nachricht</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-zinc-300">Vorname</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={firstName || ""}
                                onChange={handleChange}
                                placeholder="Max"
                                className="mt-1 block w-full px-4 py-2 rounded-md bg-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-zinc-300">Nachname</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={lastName || ""}
                                onChange={handleChange}
                                placeholder="Mustermann"
                                className="mt-1 block w-full px-4 py-2 rounded-md bg-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="emailAddress" className="block text-sm font-medium text-zinc-300">E-Mail-Adresse</label>
                            <input
                                id="emailAddress"
                                name="emailAddress"
                                type="email"
                                value={emailAddress || ""}
                                onChange={handleChange}
                                placeholder="max.mustermann@example.com"
                                className="mt-1 block w-full px-4 py-2 rounded-md bg-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-zinc-300">Telefonnummer</label>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                value={phoneNumber || ""}
                                onChange={handleChange}
                                placeholder="+49 123 456789"
                                className="mt-1 block w-full px-4 py-2 rounded-md bg-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-zinc-300">Nachricht</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={message || ""}
                                onChange={handleChange}
                                placeholder="Deine Nachricht"
                                className="mt-1 block w-full px-4 py-2 rounded-md bg-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors font-semibold"
                        >
                            Nachricht senden
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default ContactFromSection;