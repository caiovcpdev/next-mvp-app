"use client";

// import { InputConfig } from "@/.next/types/InputConfig";
import CadastroForm from "../components/cadastroGenerico";
import SidebarLayout from "../components/sideBar";
import { useState } from "react";

export default function DashboardComponent() {
  const [filhoInfo, setFilhoInfo] = useState<string>("");
  const [isCadastroVisible, setCadastroIsVisible] = useState(false);

  // Função para alternar a visibilidade com base na escolha do filho
  const handleInfoFilho = (data: string) => {
    setFilhoInfo(data);
    setCadastroIsVisible(true); // Mostrar o formulário ao selecionar Cliente ou Equipamento
  };

  return (
    <>
      <div className="nav-section">
        {/* <SidebarLayout /> */}
      </div>

      <div className="flex h-screen items-center justify-center">
      </div>
    </>
  );
}
