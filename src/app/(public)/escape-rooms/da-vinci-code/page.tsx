import React from "react";
import {Metadata} from "next";
import {RoomDetailsSection, RoomOthersSection} from "@/containers/public/escape-rooms";
import {FAQSection} from "@/containers/public/core";
import {rooms} from "@/store/dataStore";
import {Text} from "@/components/base/text";

export const metadata: Metadata = {
    title: 'RoomDaVinciPage',
    description: 'Beschreibung für RoomDaVinciPage',
}

interface RoomDaVinciPageProps {

}

const RoomDaVinciPage = async ({}: RoomDaVinciPageProps) => {
    const currentRoom = rooms.find((room) => room.name === "Da Vinci Code");

    if(!currentRoom)
        return <Text>Raum wurde nicht gefunden.</Text>

    return (
        <>
            <RoomDetailsSection currentRoom={currentRoom}/>
            <RoomOthersSection currentRoom={currentRoom}/>
            <div className="mt-40">
                <FAQSection/>
            </div>
        </>
    );
}

export default RoomDaVinciPage;