import { Google_Sans_Flex, Bonheur_Royale, Michroma, Inter } from "next/font/google"


export const footerFont = Google_Sans_Flex({
    variable: "--font-google-sans-flex",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
})

export const signatureFont = Bonheur_Royale({
    variable: "--font-signature",
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
})

export const headingFont = Michroma({
    variable: "--font-heading",
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
})

export const mainFont = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
})