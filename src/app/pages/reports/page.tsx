"use client"
import React, { useState } from "react";
import Login from "@/app/pages/login"; // Importa o componente de Login
import MainPage from "./page"; // Importa o conteúdo principal (MainPage)
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Package, PackageX, TimerReset } from "lucide-react";
import { ChartOverview } from "@/components/chart";
import Parts from "@/components/users";
import Status from "@/components/status";

export default function Chart() {
    return (
    <div className="sm:ml-14 p-4">
      <h1 className="my-2 font-semibold text-4xl border-b">Relatórios</h1>
      <h2 className="my-2">Últimos relatórios gerados</h2>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <Status/>
      </section>
    </div>
    );
}