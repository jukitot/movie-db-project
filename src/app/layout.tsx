import type {Metadata} from "next";
import "./globals.css";
import HeaderComponent from "@/app/Components/Header/HeaderComponent";
import React from "react";
import GenresComponent from "@/app/Components/GenresComponent/GenresComponent";

export const metadata: Metadata = {
    title: "MOVIE DB",
    description: "Main page in this project",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`antialiased backgroundDark`}>
        <HeaderComponent/>
        <div className={'divBlock'}>
            <GenresComponent/>
            {children}
        </div>
        </body>
        </html>
    );
}
