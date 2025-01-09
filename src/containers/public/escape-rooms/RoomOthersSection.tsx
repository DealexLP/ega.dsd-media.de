import React from "react";
import Section from "@/components/core/Section";
import {FAQs, RoomProps, rooms} from "@/store/dataStore";
import Link from "next/link";
import Image from "next/image";
import {ClockIcon, StarIcon, UsersIcon} from "@heroicons/react/24/outline";
import {Text} from "@/components/base/text";

interface RoomOthersSectionProps {
    currentRoom: RoomProps;
}

const RoomOthersSection = ({currentRoom}: RoomOthersSectionProps) => {
    if (!currentRoom)
        return <Text>Current room not found...</Text>

    return (
        <Section>
            <h2 className="text-3xl font-bold mb-2">Andere Räume</h2>
            <p className="mb-6">
                Entdecke unsere {rooms.filter(room => room.name !== currentRoom.name).length} weiteren spannende Räume
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {rooms.filter(room => room.name !== currentRoom.name).map((room, index) => (
                    <div
                        key={index}
                        className="relative group bg-gradient-to-b from-primary-400 to-primary-600 p-[4px] rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                    >
                        <Link
                            href={`/escape-rooms/${room.name.toLowerCase().replaceAll(" ", "-")}`} // Passe `room.slug` an deine Datenstruktur an
                        >
                            {/* Inner Content */}
                            <div className="bg-zinc-900 rounded-lg flex flex-col h-full overflow-hidden">
                                {/* Bild mit Fade */}
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={room.previewImage}
                                        alt={room.name}
                                        width={500}
                                        height={300}
                                        className="h-full group-hover:scale-105 transition-transform duration-300 object-cover"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    {/* Titel und Kategorie */}
                                    <div>
                                        <h3 className="text-xl font-semibold">{room.name}</h3>
                                        <p className="text-zinc-300 text-sm mb-2">{room.category}</p>
                                    </div>
                                    <hr className="mb-4 border-primary-500 text-zinc-300"/>
                                    {/* Icons für Details */}
                                    <div className="flex items-center justify-between text-md mb-4">
                                        <div
                                            className="flex flex-col lg:flex-row items-center justify-center text-sm md:text-base space-x-2">
                                            <ClockIcon className="w-4 md:w-5"/>
                                            <span>{room.duration} Min.</span>
                                        </div>
                                        <div
                                            className="flex flex-col lg:flex-row items-center justify-center text-sm md:text-base space-x-2">
                                            <StarIcon className="w-4 md:w-5"/>
                                            <span>{room.difficulty}</span>
                                        </div>
                                        <div
                                            className="flex flex-col lg:flex-row items-center justify-center text-sm md:text-base space-x-2">
                                            <UsersIcon className="w-4 md:w-5"/>
                                            <p className="flex gap-x-1">
                                                <span>{room.minPlayers}-{room.maxPlayers}</span>
                                                <span className="md:hidden">Pers.</span>
                                                <span className="hidden md:block">Personen</span>
                                            </p>
                                        </div>
                                        <div
                                            className="flex flex-col lg:flex-row items-center justify-center text-sm md:text-base space-x-2">
                                            <span className="border px-2 py-1.5 rounded-full">{room.minAge}+</span>
                                        </div>
                                    </div>
                                    {/* Beschreibung */}
                                    <p className="text-zinc-400 mb-6 flex-grow">{room.description.split(". ")[0]}...</p>
                                    {/* Preis und Button */}
                                    <div className="flex items-center justify-between">
                                        <span
                                            className="text-lg font-semibold text-zinc-100">Pro Person <br/> ab {room.minPrice.toFixed(2)}€</span>
                                        <button
                                            className="relative bg-primary-500 text-white py-2 px-4 rounded-lg overflow-hidden group"
                                        >
                                            <span
                                                className="absolute inset-0 bg-primary-600 transition-transform duration-300 scale-x-0 origin-left group-hover:scale-x-100"></span>
                                            <span className="relative z-10">Zum Spiel</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default RoomOthersSection;