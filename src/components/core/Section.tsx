import React, {ReactNode} from "react";
import clsx from "clsx";

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
}

const Section = ({id, children, className}: SectionProps) => {

    return (
        <section id={id} className={clsx("py-12 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white", className)}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                {children}
            </div>
        </section>
    );
}

export default Section;