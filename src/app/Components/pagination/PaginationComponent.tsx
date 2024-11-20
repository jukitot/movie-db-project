import React from "react";
import Link from "next/link";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
}
const PaginationComponent = ({ currentPage, totalPages}:  PaginationProps) => {
    const prevPage = Math.max(currentPage - 1, 1);
    const nextPage = Math.min(currentPage + 1, totalPages);

    return (
        <div>
            <Link href={`?page=${prevPage}`}>
                <button disabled={currentPage === 1}>Prev</button>
            </Link>
            <Link href={`?page=${nextPage}`}>
                <button disabled={currentPage === totalPages}>Next</button>
            </Link>
        </div>
    );
};

export default PaginationComponent;
