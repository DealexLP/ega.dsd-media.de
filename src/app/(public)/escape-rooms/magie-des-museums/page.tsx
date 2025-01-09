import React from "react";
import {Metadata} from "next";
import {FAQSection} from "@/containers/public/core";
import {RoomDetailsSection, RoomOthersSection} from "@/containers/public/escape-rooms";
import {rooms} from "@/store/dataStore";
import {Text} from "@/components/base/text";

export const metadata: Metadata = {
    title: 'RoomMagieDesMuseumsPage',
    description: 'Beschreibung für RoomMagieDesMuseumsPage',
}

interface RoomMagieDesMuseumsPageProps {

}

const RoomMagieDesMuseumsPage = async ({}: RoomMagieDesMuseumsPageProps) => {
    const currentRoom = rooms.find((room) => room.name === "Magie des Museums");

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

export default RoomMagieDesMuseumsPage;