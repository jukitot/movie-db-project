import React from "react";
import Link from "next/link";
import styles from './pagination.module.css'

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    query?: string;
}
const PaginationComponent = ({currentPage, totalPages, query}: PaginationProps) => {
    const prevPage = Math.max(currentPage - 1, 1);
    const nextPage = Math.min(currentPage + 1, totalPages);

    const pagesToShow = 5;
    const startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
    const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const buildUrl = (page: number) => {
        const params = new URLSearchParams();
        params.set("page", page.toString());
        if (query) {
            params.set("query", query);
        }
        return `?${params.toString()}`;
    };

    return (
        <div className={styles.buttons}>
            <Link href={buildUrl(prevPage)}>
                <button disabled={currentPage === 1}> {`<--`} </button>
            </Link>

            <div>
                {pageNumbers.map((number) => (
                    <Link key={number} href={buildUrl(number)}>
                        <button
                            style={{
                                fontWeight: currentPage === number ? "bold" : "normal",
                                fontSize: currentPage === number ? '28px' : '20px',
                                color: currentPage === number ? 'rgba(218,14,33,0.69)' : 'white',
                                margin: "0 5px",
                            }}
                        >
                            {number}
                        </button>
                    </Link>
                ))}
            </div>
            <Link href={buildUrl(nextPage)}>
                <button disabled={currentPage === totalPages}> {`-->`} </button>
            </Link>
        </div>
    );
};

export default PaginationComponent;
