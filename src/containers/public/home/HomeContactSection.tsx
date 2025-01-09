import React from "react";

interface HomeContactSectionProps {}

const HomeContactSection = ({}: HomeContactSectionProps) => {
    return (
        <section className="py-12 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 lg:px-12">
                {/* Text Section */}
                <div className="w-full md:w-1/3">
                    <h2 className="text-4xl font-bold mb-4">Kontaktiere uns</h2>
                    <p className="text-lg mb-2">
                        📞 <a href="tel:+498990173154" className="text-primary-500 hover:underline">+49 89 90173154</a>
                    </p>
                    <p className="text-lg mb-2">
                        ✉️ <a href="mailto:info@escapegame-art.de" className="text-primary-500 hover:underline">info@escapegame-art.de</a>
                    </p>
                    <p className="text-lg mb-4">📍 Gernerstraße 17, 80638 München, Deutschland</p>
                    <p className="text-lg font-semibold">Mo - Do: 11:00 - 22:00 Uhr</p>
                    <p className="text-lg font-semibold">Fre - So: 9:30 - 22:00 Uhr</p>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-2/3">
                    <img
                        src="/images/contact-us.jpg"
                        alt="Escape Room Location"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default HomeContactSection;