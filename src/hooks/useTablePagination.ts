"use client"

import { useMemo, useState } from "react";

interface Props {
    initialPage?: number;
    initialRowsPerPage?: number;
    rowsPerPageOptions?: number[];
    component?: string;
    labelRowsPerPage?: string;
} 

export const useTablePagination  = ({ 
    initialPage = 0, 
    initialRowsPerPage = 5,
    rowsPerPageOptions = [5],
    component = "div",
    labelRowsPerPage = "Filas por página"
}: Props)  => {

    const [page, setPage] = useState(initialPage);
    const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

    const onPageChange = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const slice = useMemo(() => {
        return [page * rowsPerPage, page * rowsPerPage + rowsPerPage];
    }, [page, rowsPerPage])

    const onRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return {
        page,
        rowsPerPage,
        onPageChange,
        onRowsPerPageChange,
        rowsPerPageOptions,
        component,
        labelRowsPerPage,
        slice,
        setPage
    };
}