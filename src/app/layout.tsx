import React, {ReactNode} from "react";
import {Metadata} from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
    metadataBase: new URL('https://www.escapegame-art.de'),
    authors: [{name: "David Dunkel"}],
    creator: "DSD Media",
    publisher: "DSD Media",
}

interface IRootLayout {
    children?: ReactNode;
    params: any;
}

const HTMLLayout = async ({children, params}: IRootLayout) => {
    return (
        <html lang="de_DE" className="bg-zinc-950 text-white scroll-smooth text-base antialiased">
        <body className={"w-screen overflow-x-hidden"}>
            {children}
        </body>
        </html>
    );
}

export default HTMLLayout;