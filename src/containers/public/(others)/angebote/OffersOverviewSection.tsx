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
                <div className="space-y-4 max-w-5xl mb-6">
                    <p>
                        Lasst langweilige Museums- oder Theaterbesuche hinter euch und taucht ein in spannende Abenteuer
                        bei <span className="text-primary-500 font-semibold">Escape Game Art</span>!
                    </p>
                    <p>
                        Schluss mit der Frage "Was können wir zusammen unternehmen?". Ob{" "}
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 font-semibold">
            Firmenevent, Junggesellenabschied, Mädelsabend, Geburtstag, Kindergeburtstag, Klassenausflug
        </span> oder <span className="font-semibold text-primary-500">Ferien</span> – bei uns erlebt ihr mindestens eine
                        Stunde voller Spaß und Teamgeist!
                    </p>
                    <p>
                        Unsere Escape Rooms fördern Konzentration, Zusammenarbeit und logisches Denken. Egal ob mit
                        Kolleginnen, Geschäftspartnern oder Freunden – ihr lernt euch auf neue, spannende Weise
                        kennen. <span className="text-primary-500 font-semibold">Escape Game Art</span> verleiht jedem
                        Anlass das gewisse Extra und ist der perfekte Start für einen unvergesslichen Abend. Schaut euch unsere Angebote an und findet das perfekte Abenteuer für euch!
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
                <Dialog size="5xl" className="z-40" open={isOpen} onClose={closeDialog}>
                    <DialogTitle>{selectedOffer.name}</DialogTitle>
                    <DialogDescription>{selectedOffer.description}</DialogDescription>
                    <DialogBody className="z-50">
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