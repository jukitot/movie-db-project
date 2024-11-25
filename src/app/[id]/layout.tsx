import React from "react";
import {Metadata} from "next";
import {movieService} from "@/app/services/api.service";

type Props = {
    params: { id: string };
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const movie = await movieService.getMovieById(parseInt(params.id, 10));
    return {
        title: movie.title,
        description: movie.overview,
    };
}

const Layout = ({children}: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export default Layout;
