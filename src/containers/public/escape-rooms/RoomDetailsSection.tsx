import React from "react";
import { RoomProps } from "@/store/dataStore";
import { Text } from "@/components/base/text";
import Section from "@/components/core/Section";
import Image from "next/image";
import { ClockIcon, StarIcon, UsersIcon } from "@heroicons/react/24/solid";

interface RoomDetailsSectionProps {
    currentRoom: RoomProps;
}

const RoomDetailsSection: React.FC<RoomDetailsSectionProps> = ({ currentRoom }) => {
    if (!currentRoom) return <Text>Current room not found...</Text>;

    return (
        <Section id="room-details" className="mb-40 relative bg-gradient-to-b from-primary-400 to-primary-600 p-[4px] rounded-xl shadow-xl">
            <div className="bg-zinc-900 rounded-lg overflow-hidden">
                {/* Header mit breitem Bild */}
                <div className="relative h-[70vh] overflow-hidden">
                    <Image
                        src={currentRoom.previewImage}
                        alt={currentRoom.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 max-w-[70%] bg-opacity-80 bg-black p-4 rounded-lg">
                        <h1 className="text-5xl font-bold text-white">{currentRoom.name}</h1>
                        <p className="text-lg text-zinc-300">{currentRoom.category}</p>
                        <p className="mt-4 text-md text-zinc-300">{currentRoom.description}</p>
                    </div>
                    <div className="absolute bottom-10 right-10">
                        <button className="bg-primary-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-primary-600 transition">
                            Jetzt Buchen
                        </button>
                    </div>
                </div>

                {/* Room Details */}
                <div className="m-6 py-6 border-y border-zinc-700">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-zinc-300">
                        <div className="flex items-center space-x-3">
                            <ClockIcon className="w-6 h-6 text-primary-400" />
                            <span>
                                <strong>Dauer:</strong> {currentRoom.duration} Minuten
                            </span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <StarIcon className="w-6 h-6 text-primary-400" />
                            <span>
                                <strong>Schwierigkeit:</strong> {currentRoom.difficulty}
                            </span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <UsersIcon className="w-6 h-6 text-primary-400" />
                            <span>
                                <strong>Spieleranzahl:</strong> {currentRoom.minPlayers}–{currentRoom.maxPlayers} Personen
                            </span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="border px-3 py-1 rounded-full text-primary-400">
                                {currentRoom.minAge}+
                            </span>
                            <span>
                                <strong>Mindestalter:</strong> {currentRoom.minAge} Jahre
                            </span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="border px-3 py-1 rounded-full text-primary-400">
                                {currentRoom.actors ? "✓" : "✗"}
                            </span>
                            <span>
                                <strong>Darsteller:</strong> {currentRoom.actors ? "Ja" : "Nein"}
                            </span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-lg font-semibold text-white">
                                <strong>Preis ab:</strong> {currentRoom.minPrice.toFixed(2)} €
                            </span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-white mb-4">Ziel des Spiels</h3>
                        <p className="text-lg text-zinc-300">{currentRoom.goalText}</p>
                    </div>
                </div>

                {/* Galerie */}
                <div className="p-8">
                    <h2 className="text-3xl font-semibold text-white mb-6">Galerie</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentRoom.gallery.map((currentImage, index) => (
                            <div key={index} className="relative w-full h-72 overflow-hidden rounded-lg group">
                                <Image
                                    src={currentImage}
                                    alt={`${currentRoom.name}-Gallery-${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default RoomDetailsSection;