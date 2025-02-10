"use client"
import React, { useState } from "react";
import Users from "@/components/users";

export default function User() {
    return (
    <div className="sm:ml-14 p-4">
        <h1 className="my-2 font-semibold text-4xl border-b">Usúarios</h1>
        <h2 className="my-2">Resumo das últimas atividades no sistema</h2>
        <section className="mt-4 flex flex-col md:flex-row gap-4">
            <Users />
        </section>
    </div>
    );
}