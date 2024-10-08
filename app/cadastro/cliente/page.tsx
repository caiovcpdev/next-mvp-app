"use client"
import CadastroForm from "../../components/cadastroGenerico";

export default function cadastroCliente () {
    
    //Configurando os inputs do componente generico
    const inputsConfig = [
        { name: "razaoSocial", label: "Razão Social", required: true },
        { name: "secretaria", label: "Secretaria", required: true },
        { name: "uf", label: "UF", required: true },
        { name: "equipamento", label: "Equipamento", type:"number",required: true },
        { name: "qteAparelhos", label: "Quantidade Aparelhos", type:"number",required: true }

      ];
    
      const handleSubmit = (formData: Record<string, any>) => {
        console.log("Formulario enviado", formData);
      };

    return (
    <>
        <div className="flex h-screen items-center justify-center">
            <CadastroForm title="Cadastro Cliente" inputsConfig={inputsConfig} onSubmit={handleSubmit} />
        </div>
    </>
) 
}