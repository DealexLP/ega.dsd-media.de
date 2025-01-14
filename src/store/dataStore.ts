import {
    AcademicCapIcon,
    BeakerIcon,
    BookOpenIcon,
    CakeIcon,
    HeartIcon,
    ShoppingBagIcon,
    UsersIcon
} from "@heroicons/react/24/solid";

interface RoomProps {
    name: string;
    category: string;
    previewImage: string;
    gallery: string[];
    description: string;
    duration: number;
    difficulty: "Mittel" | "Schwer";
    actors: boolean;
    minPlayers: number;
    maxPlayers: number;
    minAge: number;
    minPrice: number;
    bookingLink: string;
    overviewText: string; //Long text
    goalText: string;  //Long text
}

const rooms: RoomProps[] = [
    {
        name: "Magie des Museums",
        category: "Abenteuer",
        previewImage: "/assets/images/magie/Magie-Anubis.jpg",
        gallery: [
            "/assets/images/magie/Magie-Berg.jpg",
            "/assets/images/magie/Magie-Anubis.jpg",
            "/assets/images/magie/Magie-Indianer.jpg",
            "/assets/images/magie/Magie-Labyrinth.jpg"
        ],
        description: "Ihr befindet euch in einem faszinierenden Museum, das nicht nur Kunstwerke, sondern auch eine geheimnisvolle Magie beherbergt. Ihr seid eingesperrt und habt nur 60 Minuten Zeit, um die Magie zu brechen und zu entkommen. Das bedeutet, dass ihr die magische Tafel des Pharaos vervollständigen müsst.",
        duration: 60,
        difficulty: "Mittel",
        actors: false,
        minPlayers: 2,
        maxPlayers: 8,
        minAge: 10,
        minPrice: 22.50,
        bookingLink: "https://bookeo.com/escapegameart?type=3252TP7RME15BE9A11C56",
        overviewText: "Taucht ein in die magische Welt unseres Museums, in dem jedes Artefakt eine Geschichte und ein Geheimnis birgt. Ihr seid nicht nur Besucher, sondern Abenteurer, die das Rätsel der Magie lösen müssen, die tief in den Wänden dieses Museums verborgen ist. Die beeindruckenden Kulissen und spannenden Aufgaben machen diesen Raum zu einem perfekten Erlebnis für Familien, Freunde und Teams, die eine Vorliebe für knifflige Rätsel und faszinierende Geschichten haben.",
        goalText: "Eure Mission ist es, die Fragmente der magischen Tafel des Pharaos zu finden, die überall im Museum versteckt sind. Nutzt Teamwork, logisches Denken und eure Beobachtungsgabe, um alle Teile zusammenzusetzen und die magische Barriere zu brechen. Euer Erfolg wird die Magie entschlüsseln und euch den Weg zur Freiheit eröffnen."
    },
    {
        name: "Da Vinci Code",
        category: "Historisch",
        previewImage: "/assets/images/davinci/DaVinci-Box.jpg",
        gallery: [
            "/assets/images/davinci/DaVinci-Altar.jpg",
            "/assets/images/davinci/DaVinci-Box.jpg",
            "/assets/images/davinci/DaVinci-Decke.jpg",
            "/assets/images/davinci/DaVinci-Regal.jpg"
        ],
        description: "In diesem fesselnden Escape Room findet ihr euch im historischen Arbeitszimmer von Leonardo da Vinci wieder, einem Ort voller Geheimnisse und Rätsel. Eure Mission ist klar: Ihr müsst innerhalb eines begrenzten Zeitrahmens durch das Lösen von anspruchsvollen Aufgaben und Rätseln den Geheimausgang finden.",
        duration: 60,
        difficulty: "Mittel",
        actors: false,
        minPlayers: 2,
        maxPlayers: 6,
        minAge: 10,
        minPrice: 25.80,
        bookingLink: "https://bookeo.com/escapegameart?type=3252YCLAEW15829500F00",
        overviewText: "Reist zurück in die Renaissance und betretet das historische Arbeitszimmer von Leonardo da Vinci. Umgeben von seinen genialen Erfindungen, Kunstwerken und kryptischen Notizen, müsst ihr all euren Verstand einsetzen, um die Geheimnisse zu entschlüsseln. Der Raum ist eine Herausforderung für Logiker, Geschichtsinteressierte und Fans von klassischen Rätseln, die eine einzigartige Zeitreise erleben möchten.",
        goalText: "Eure Aufgabe ist es, die gut versteckten Hinweise und Rätsel im Arbeitszimmer zu lösen, die Leonardo da Vinci selbst hinterlassen hat. Nur wer die Denkweise eines Genies versteht und alle Geheimnisse entschlüsselt, wird den verborgenen Geheimausgang finden und den Raum erfolgreich verlassen. Beeilt euch, denn die Zeit ist knapp!"
    },
    {
        name: "Last Arrival",
        category: "Science-Fiction",
        previewImage: "/assets/images/lastarrival/LastArrival-Preview.webp",
        gallery: [
            "/assets/images/lastarrival/LastArrival-Raum.jpeg",
            "/assets/images/lastarrival/LastArrival-Gitter.jpeg",
            "/assets/images/lastarrival/LastArrival-Maske.jpeg",
            "/assets/images/lastarrival/LastArrival-Schleuse.jpeg"
        ],
        description: "Ihr seid ein außergewöhnliches Team von Linguisten, Wissenschaftlern und Forschern, das vor einer beispiellosen Herausforderung steht: die Welt vor einem globalen Krieg zu bewahren. Die Zukunft der Menschheit hängt von eurer Fähigkeit ab, mit außerirdischen Besuchern zu kommunizieren, die unsere Welt bedrohen.",
        duration: 90,
        difficulty: "Schwer",
        actors: false,
        minPlayers: 2,
        maxPlayers: 5,
        minAge: 14,
        minPrice: 30,
        bookingLink: "https://bookeo.com/escapegameart?type=3252ATT3CA16BBF12C8A1",
        overviewText: "Begebt euch auf ein außergewöhnliches Abenteuer, das euch mitten in eine Science-Fiction-Geschichte katapultiert. Ihr seid die letzte Hoffnung der Menschheit, ein Team von Experten, das den Kontakt zu außerirdischen Besuchern herstellen muss. Mit anspruchsvollen Technologien, kryptischen Symbolen und komplexen Botschaften fordert dieser Raum euren Intellekt und eure Zusammenarbeit heraus. Ideal für erfahrene Spieler, die sich in einer einzigartigen futuristischen Atmosphäre beweisen wollen.",
        goalText: "Euer Ziel ist es, die komplexe Sprache der außerirdischen Besucher zu entschlüsseln, die Botschaften zu übersetzen und eine friedliche Kommunikation herzustellen. Dabei müsst ihr unter großem Zeitdruck arbeiten, um den globalen Konflikt zu verhindern. Jedes Rätsel bringt euch näher an die Lösung – aber nur, wenn ihr als Team agiert und die außerirdischen Technologien zu eurem Vorteil nutzt, könnt ihr die Erde retten."
    }
];

interface FAQItem {
    question: string;
    answer: string;
}

const FAQs: FAQItem[] = [
    {
        question: "Wie viele Personen können gleichzeitig spielen?",
        answer: "Damit ihr innerhalb von 60 Minuten die Chance habt, alle Aufgaben zu lösen, schlagen wir mind. 2 Teilnehmer vor. Ansonsten sind für das Spiel bis zu 8 Teilnehmer angedacht. Solltet ihr doch mehr sein, könnt ihr uns diesbezüglich gerne kontaktieren und wir finden bestimmt eine Lösung.",
    },
    {
        question: "Wer sollte oder darf nicht mitmachen?",
        answer: "Sollten die Mitarbeiter vor Spielbeginn bemerken, dass die Teilnehmer betrunken bzw. nicht beim klaren Verstand sind, werden diese nicht zum Spiel zugelassen. Außerdem sollte sich jemand während des Aufenthalts in unseren Räumen aggressiv oder auffällig verhalten, muss dieser ebenfalls den Raum verlassen.",
    },
    {
        question: "Brauche ich körperliche Kraft oder übersinnliche Fähigkeiten?",
        answer: "Keines von beiden. Mit logischem Denken, Kommunikationsfähigkeit, Teamgeist und Ausdauer kommt ihr schon sehr weit.",
    },
    {
        question: "Muss ich mit fremden Personen spielen, wenn ich ein Escape Game gebucht habe?",
        answer: "Nein. Ihr spielt nur mit Personen, mit denen ihr das Spiel gebucht habt.",
    },
    {
        question: "Sind die Escape Room Spiele in verschiedenen Sprachen verfügbar?",
        answer: "Ja, wir sind stolz darauf, internationale und lokale Gäste gleichermaßen zu bedienen! Alle unsere drei Escape Room Spiele sind sowohl auf Deutsch als auch auf Englisch verfügbar.",
    },
    {
        question: "Ich habe bereits gebucht, möchte aber noch die Anzahl der Spieler ändern. Was muss ich dafür tun?",
        answer: "Die Anzahl der Teilnehmer könnt ihr bis zur maximal angegebenen Anzahl erhöhen, aber nicht verringern. Den Differenzbetrag bei Erhöhung der Teilnehmerzahl könnt ihr vor Ort in bar bezahlen.",
    },
];

const FAQsAll: FAQItem[] = [
    {
        question: "Was versteht man unter einem Escape Room?",
        answer: "Ein Escape Room ist ein interaktives Abenteuer, bei dem eine Gruppe von Spielern Rätsel lösen muss, um innerhalb einer bestimmten Zeit ein Ziel zu erreichen. Jeder Raum hat ein eigenes Thema und eine spannende Geschichte.",
    },
    {
        question: "Welcher Escape Room ist der beste in München?",
        answer: "Der beste Escape Room in München hängt von deinen Vorlieben ab. Unsere Räume bieten einzigartige Themen, herausfordernde Rätsel und ein unvergessliches Erlebnis.",
    },
    {
        question: "Wie viel kostet ein Escape Room in München?",
        answer: "Die Preise für Escape Rooms in München variieren je nach Anbieter. Unsere Preise liegen zwischen 20 und 30 Euro pro Person, abhängig von der Gruppengröße und dem gewählten Spiel.",
    },
    {
        question: "Wie viele Personen braucht man für einen Escape Room?",
        answer: "Unsere Escape Rooms sind für Gruppen von 3 bis 6 Personen ausgelegt. Solltet ihr mehr Personen sein, kontaktiert uns, und wir finden eine passende Lösung.",
    },
    {
        question: "Ist ein Escape Room schwer?",
        answer: "Die Schwierigkeit eines Escape Rooms hängt vom Raum ab. Wir bieten Räume für Anfänger, Fortgeschrittene und erfahrene Spieler, damit jeder Spaß hat.",
    },
    {
        question: "Welches Alter ist für Escape Rooms geeignet?",
        answer: "Wir empfehlen unsere Escape Rooms ab 10 Jahren. Kinder jeden Alters können mitmachen, da unsere Spiele keine gruseligen Elemente enthalten. Kinder unter 10 Jahren benötigen jedoch die Begleitung eines Erwachsenen.",
    },
    {
        question: "Was muss man im Escape Room beachten?",
        answer: "Kommunikation und Teamarbeit sind der Schlüssel. Hört auf die Einweisungen des Personals, behandelt die Rätsel und Objekte im Raum mit Vorsicht und respektiert die Regeln.",
    },
    {
        question: "Kann man einen Escape Room nur einmal spielen?",
        answer: "Ja, Escape Rooms sind darauf ausgelegt, nur einmal gespielt zu werden, da die Rätsel und Aufgaben beim erneuten Spielen bekannt sind und die Spannung dadurch verloren geht.",
    },
    {
        question: "Was ist, wenn man im Escape Room auf die Toilette muss?",
        answer: "Kein Problem! Du kannst den Raum jederzeit verlassen und zurückkehren, ohne das Spiel zu beeinträchtigen.",
    },
    {
        question: "Ist es im Escape Room dunkel?",
        answer: "Das hängt vom gewählten Raum ab. Einige Räume sind hell, während andere bewusst mit schwachem Licht ausgestattet sind, um die Atmosphäre zu unterstreichen.",
    },
    {
        question: "Wird man im Escape Room erschreckt?",
        answer: "Nicht alle Escape Rooms sind erschreckend. Unsere Spiele enthalten keine Horror-Elemente, es sei denn, dies ist ausdrücklich angegeben.",
    },
    {
        question: "Was zieht man im Escape Room an?",
        answer: "Es gibt keine Kleiderordnung. Trage Kleidung, in der du dich wohlfühlst und die Bewegungsfreiheit bietet.",
    },
    {
        question: "Sind Escape Rooms gruselig?",
        answer: "Unsere Escape Rooms sind nicht gruselig, es sei denn, dies wird explizit angegeben. Die meisten Räume sind auf Spannung und Abenteuer ausgelegt, nicht auf Horror.",
    },
    {
        question: "Wie nennt man die Angst vor Escape Rooms?",
        answer: "Die Angst, in engen oder abgeschlossenen Räumen zu sein, wird als Klaustrophobie bezeichnet. Unsere Räume sind jedoch sicher und für die meisten Menschen geeignet.",
    },
    {
        question: "Wie läuft es im Escape Room ab?",
        answer: "Ihr werdet vor dem Spiel von unserem Personal begrüßt und erhaltet eine kurze Einführung in die Geschichte und die Spielregeln. Danach habt ihr 60 Minuten Zeit, um die Rätsel zu lösen und den Raum zu verlassen.",
    },
    {
        question: "Sind Escape Rooms schädlich für Angstzustände?",
        answer: "Unsere Escape Rooms sind sicher und werden überwacht. Bei spezifischen Bedenken empfehlen wir, uns vor der Buchung zu kontaktieren, damit wir euch den passenden Raum empfehlen können.",
    },
    {
        question: "Ist ein Escape Room anstrengend?",
        answer: "Ein Escape Room erfordert Denksport und Teamarbeit, ist jedoch körperlich nicht anstrengend. Ihr könnt alles in eurem eigenen Tempo lösen.",
    },
    {
        question: "Was muss man in einem Escape Room machen?",
        answer: "In einem Escape Room löst ihr Rätsel, findet versteckte Hinweise und arbeitet als Team zusammen, um die Aufgaben zu bewältigen und das Ziel zu erreichen.",
    },
    {
        question: "Wie schwierig sind Escape Rooms?",
        answer: "Die Schwierigkeit variiert je nach Raum. Wir bieten Räume für Anfänger bis hin zu erfahrenen Spielern, sodass jeder Spaß haben kann.",
    },
    {
        question: "Kann man während des Escape Rooms auf die Toilette gehen?",
        answer: "Ja, du kannst den Raum jederzeit verlassen und wieder zurückkehren. Das Spiel wird dabei nicht unterbrochen.",
    },
    {
        question: "Wird man im Escape Room eingesperrt?",
        answer: "Nein, unsere Türen sind nicht verschlossen. Du kannst den Raum jederzeit verlassen, wenn du möchtest.",
    },
    {
        question: "Sind Escape Rooms sicher?",
        answer: "Ja, unsere Escape Rooms sind absolut sicher. Sie werden durch Kameras überwacht, und unser Personal ist immer erreichbar, falls etwas benötigt wird.",
    },
];

interface OfferItem {
    name: string;
    description: string;
    icon: any; // Component for the icon
    popup: {
        title: string;
        details: string;
        requirements?: string[];
        options?: { room: string; people: string; time: string; price: string }[];
    };
}

const offers: OfferItem[] = [
    {
        name: "Firmenevents",
        description: "Jedes moderne Unternehmen braucht einzigartige Erlebnisse für seine Mitarbeiter – sei es eine Weihnachtsfeier, ein Teambuilding-Event oder einfach ein besonderer Ausflug. Unsere Escape Rooms in München bieten euch ein spannendes, gemeinschaftliches Erlebnis, das garantiert in Erinnerung bleibt.",
        icon: UsersIcon,
        popup: {
            title: "Firmenevents",
            details: "Aus den untenstehenden Optionen könnt ihr die perfekte Variante für euer Team auswählen. Bis zu 19 Personen können an einem Event teilnehmen.",
            options: [
                { room: "Da Vinci Code", people: "2-6 Personen", time: "60 Minuten", price: "155€" },
                { room: "Magie des Museums", people: "2-8 Personen", time: "60 Minuten", price: "180€" },
                { room: "2 Spielräume", people: "bis zu 14 Personen", time: "60 Minuten", price: "270€" },
                { room: "2x2 Spiele nacheinander", people: "bis zu 12 Personen", time: "120min + 15min Pause", price: "470€" },
                { room: "3 Spielräume", people: "bis zu 19 Personen", time: "60 Minuten", price: "400€" },
                { room: "2x3 Spiele nacheinander", people: "bis zu 19 Personen", time: "120min + 15min Pause", price: "720€" }
            ]
        }
    },
    {
        name: "Junggesellenabschied",
        description:
            "Ihr seid bereit, euren letzten Tag in Freiheit gebührend zu feiern? Startet euren Junggesellenabschied mit einem unvergesslichen Abenteuer in unseren Escape Rooms in München – spannend, lustig und voller Teamgeist, bevor die große Party beginnt!",
        icon: HeartIcon,
        popup: {
            title: "Junggesellenabschied",
            details:
                "Überrascht die/den Braut/Bräutigam mit einem einzigartigen JGA-Erlebnis! Bei uns spielt die/der zukünftige Ehepartner kostenfrei.",
            requirements: [
                "Es müssen außer der/dem Braut/Bräutigam noch vier weitere Personen mitspielen."
            ]
        }
    },
    {
        name: "Studenten / Azubis",
        description:
            "Vielen Studenten und Azubis steht monatlich nur sehr wenig Geld zur Verfügung. Natürlich stellen viele sich die Frage, wie wir mit wenig Geld auch viel Spass haben können? Wir erleichtern Euch die Aufgabe und ermöglichen mit unseren Angeboten und Vorschlägen viel Freude, Vergnügen und ebenso Spaß zu haben.",
        icon: AcademicCapIcon,
        popup: {
            title: "Studenten / Azubis",
            details:
                "Bist du Student oder Azubi? Dann hast du einen Vorteil bei uns, indem du bei der Buchung für eine Person weniger zahlst.",
            requirements: [
                "Gilt nur von Montag bis Donnerstag.",
                "Es müssen mindestens fünf Personen mitspielen.",
            ],
        },
    },
    {
        name: "Klassenausflug",
        description:
            "Klassenausflüge machen Spaß. Aber ohne Vorbereitung, Organisation und Durchführung geht es wohl kaum. Wir helfen Euch einen abenteuerlichen Klassenausflug zu organisieren, so dass die Kinder ihr Wissen erweitern, ihre Teamfähigkeit üben und natürlich dabei Spaß und Vergnügung haben.",
        icon: BookOpenIcon,
        popup: {
            title: "Klassenausflug",
            details: "Für die Schüler, die einen Klassenausflug planen, haben wir ein Sonderangebot: Jeder Schüler zahlt nur 20 Euro.",
            requirements: [
                "Gilt ab 10 Personen.",
                "Gilt nur von Montag bis Freitag (von 9:00–18:00 Uhr).",
                "Es müssen mindestens zwei Spiele parallel gebucht werden.",
            ],
        },
    },
    {
        name: "Geburtstagsfeier",
        description:
            "Auf der Suche nach einer außergewöhnlichen Idee für eine Geburtstagsfeier? Bei uns, in den Escape Rooms von Escape Game Art München, erwartet euch ein spannendes Abenteuer! Unsere Angebote für Geburtstagskinder sorgen für unvergessliche Momente.",
        icon: CakeIcon,
        popup: {
            title: "Geburtstagsfeier",
            details:
                "Spielst du an deinem Geburtstag bei uns, ist deine Teilnahme komplett kostenlos!",
            requirements: [
                "Es müssen mindestens vier weitere Personen mitspielen.",
                "Das Angebot gilt nur am Tag deines Geburtstages und bei Vorlage eines Nachweises (z. B. Personalausweis).",
                "Die Teilnahme ist erst ab einem Mindestalter von 10 Jahren möglich."
            ]
        }
    },
    {
        name: "Mädelsabend",
        description:
            "Vergesst Alltag und Stress – genießt eine unvergessliche Zeit mit euren Freundinnen bei uns! Klatsch, Tratsch und Abenteuer erwarten euch in den einzigartigen Escape Rooms von Escape Game Art München.",
        icon: ShoppingBagIcon,
        popup: {
            title: "Mädelsabend",
            details:
                "Montags bis Donnerstags bieten wir euch ein exklusives Angebot: Eine Teilnehmerin spielt kostenlos!",
            requirements: [
                "Alle Teilnehmerinnen müssen weiblich sein.",
                "Mindestens fünf Personen müssen teilnehmen."
            ]
        }
    }
];

export type {RoomProps, OfferItem, FAQItem};
export {rooms, FAQs, FAQsAll, offers};
