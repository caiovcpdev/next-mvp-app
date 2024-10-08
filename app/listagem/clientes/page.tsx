import TabelaGenerica from "@/app/components/tabelaGenerica";

export default function cadastroEquipamento () {
 
    //Configurando os inputs do componente generico
    const columns = [
        { key: "name", label: "NAME" },
        { key: "role", label: "ROLE" },
        { key: "status", label: "STATUS" },
      ];

      const rows = [
        { key: "1", name: "Tony Reichert", role: "CEO", status: "Active" },
        { key: "2", name: "Zoey Lang", role: "Technical Lead", status: "Paused" },
        { key: "3", name: "Jane Fisher", role: "Senior Developer", status: "Active" },
        { key: "4", name: "William Howard", role: "Community Manager", status: "Vacation" },
      ];

    return (
    <>
        <div className="flex h-screen items-center justify-center">
            <TabelaGenerica title="Tabela de clientes" columns={columns} rows={rows}/>
        </div>
    </>
) 
}