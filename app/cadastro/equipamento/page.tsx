"use client"
import CadastroForm from "../../components/cadastroGenerico";
import SidebarLayout from "../../components/sideBar";

export default function cadastroEquipamento () {
 
    //Configurando os inputs do componente generico
    const inputsConfig = [
    { name: "marcaModelo", label: "Marca", required: true },
    { name: "cliente", label: "Cliente", type: "number",required: true },
    { name: "cor", label: "Cor", required: true }

    ];

    const handleSubmit = (formData: Record<string, any>) => {
    console.log("Formulario enviado", formData);
    };


    return (
    <>
        <div className="flex h-screen items-center justify-center">
            <CadastroForm title="Cadastro Equipamento" inputsConfig={inputsConfig} onSubmit={handleSubmit} />
        </div>
    </>
) 
}