"use client";

import React, {useState} from "react";
import {Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle} from "@/components/base/dialog";
import {Button} from "@/components/base/button";
import {OfferItem, offers} from "@/store/dataStore";
import {Text} from "@/components/base/text";
import Link from "next/link";

const OffersSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState<OfferItem>(offers[0]);

    const openDialog = (offer: OfferItem) => {
        setSelectedOffer(offer);
        setIsOpen(true);
    };

    const closeDialog = () => {
        setSelectedOffer(offers[0]);
        setIsOpen(false);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-3xl font-bold mb-6">Unsere Angebote</h2>
                <div className="space-y-2 max-w-5xl mb-6">
                    <p className="">
                        Verabschiedet euch von den langweiligen Museen- und Theaterbesuchen und verbringt eure Zeit
                        voller Spannung <span className="text-primary-500 font-semibold">Escape Game Art</span>!
                    </p>
                    <p className="">
                        Ab jetzt braucht ihr euch Fragen wie "Was können wir zusammen unternehmen?" nicht mehr stellen.
                        Denn die Antwort ist ganz einfach. Ob{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 font-semibold">
                            Firmen– bzw. Betriebsevent, Junggesellenabschiede, Mädchenabende, Geburtstage bzw. Kindergeburtstage, Klassenausflüge
                        </span> oder <span className="font-semibold text-primary-500">Ferien</span>. Kommt zu uns und verbringt zusammen mindestens eine Stunde voller Erlebnisse.
                    </p>
                    <p className="">
                        Jeder Escape Room erfordert hohe Konzentration, gemeinsame Kommunikation und logisches Vorgehen.
                        Dieses gibt euch – den Kolleginnen und Kollegen, Geschäftspartnern, Freunden – die Gelegenheit
                        sich auf eine spannendere Art kennen zu lernen. Unsere <span
                        className="text-primary-500 font-semibold">Escape Game Art</span> gibt euren Anlässen eine
                        ganz besondere Note und ist eine schöne Aufwärmung vor langen Abenden… Schaut unsere Angebote
                        an! Es ist für jeden irgendetwas dabei!
                    </p>
                </div>
                <p className="text-sm italic mb-12">
                    *Angebote nicht kombinierbar mit anderen Aktionen oder Rabatten.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between p-6 bg-zinc-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="">
                                <div className="flex items-center gap-4 mb-4">
                                    <offer.icon className="h-8 w-8 text-primary-500"/>
                                    <h3 className="text-xl font-semibold">{offer.name}</h3>
                                </div>
                                <p className="text-zinc-300 mb-6">{offer.description}</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => openDialog(offer)}
                                    className="relative text-sm sm:text-base font-semibold text-white group"
                                >
                                <span
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                                />
                                    <span className="relative">Mehr erfahren</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dialog */}
            {selectedOffer && (
                <Dialog size="5xl" className="z-50" open={isOpen} onClose={closeDialog}>
                    <DialogTitle>{selectedOffer.name}</DialogTitle>
                    <DialogDescription>{selectedOffer.description}</DialogDescription>
                    <DialogBody>
                        {selectedOffer.popup.options ? (
                            <div>
                                <p className="mb-4">{selectedOffer.popup.details}</p>
                                <table
                                    className="w-full border-collapse border border-zinc-700 text-left text-zinc-300 mb-4">
                                    <thead>
                                    <tr>
                                        <th className="border border-zinc-700 px-4 py-2">Raum</th>
                                        <th className="border border-zinc-700 px-4 py-2">Anzahl</th>
                                        <th className="border border-zinc-700 px-4 py-2">Zeit</th>
                                        <th className="border border-zinc-700 px-4 py-2">Preis</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {selectedOffer.popup.options.map((option, idx) => (
                                        <tr key={idx}>
                                            <td className="border border-zinc-700 px-4 py-2">{option.room}</td>
                                            <td className="border border-zinc-700 px-4 py-2">{option.people}</td>
                                            <td className="border border-zinc-700 px-4 py-2">{option.time}</td>
                                            <td className="border border-zinc-700 px-4 py-2">{option.price}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <Text className="mb-4">{selectedOffer.popup.details}</Text>
                        )}
                        {selectedOffer.popup.requirements && (
                            <div>
                                <Text className="font-bold mb-2">Voraussetzungen:</Text>
                                <ul className="list-disc pl-6 text-zinc-300">
                                    {selectedOffer.popup.requirements.map((req, idx) => (
                                        <li key={idx}>
                                            <Text>{req}</Text>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </DialogBody>
                    <DialogActions>
                        <Button outline onClick={closeDialog}>
                            Schließen
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </section>
    );
};

export default OffersSection;