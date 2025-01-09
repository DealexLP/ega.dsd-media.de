import React, {ReactNode} from "react";
import {Metadata} from "next";
import {PublicFooter, PublicHeader} from "@/components/navigation";

export const metadata: Metadata = {
    title: "PublicBaseLayout",
    description: "Layout Beschreibung für PublicBaseLayout"
}

interface PublicBaseLayoutProps {
    children?: ReactNode;
    params: any;
}

const PublicBaseLayout = async ({children, params}: PublicBaseLayoutProps) => {
    return (
        <>
            <PublicHeader/>
            <main className="min-h-svh">
                {children}
            </main>
            <PublicFooter/>
        </>
    );
}

export default PublicBaseLayout;