"use client"

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Bars } from '@/components/chart/Bars';
import Line from '@/components/chart/Line';

interface Perfomance {
    id: number;
    step: string;
    cycletime: string;
    quantity: number;
    rating: number;
    energy: number;
}

export default function Charts() {
    const [performance, setPerfomance] = useState<Perfomance[]>([]);

    useEffect(() => {
        const data: Perfomance[] = [

        ];

        setPerfomance(data);
    }, []);

    return (
    <div>
        <div>
            <div className="sm:ml-14 p-4">
                <h1 className="my-2 font-semibold text-4xl border-b">Dashboards</h1>
                <h2 className="my-2">Resumo das últimas operações</h2>
                <section className="mt-4 flex flex-col md:flex-row gap-4">
                    <Bars/>
                    <Line/>
                </section>
            </div>
        </div>
    </div>
    );
}