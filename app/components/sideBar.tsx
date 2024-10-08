import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";


export default function App() {  
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">GR NEXT</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple className="p-0 bg-transparent data-[hover=true]:bg-transparent text-gray-200 text-base" radius="sm" variant="light">
                Cadastro
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="ACME features" className="w-[340px] text-gray-900" itemClasses={{base: "gap-4"}}>
            <DropdownItem key="cadastroCliente" as={Link} href="cadastro/cliente">
              Cliente
            </DropdownItem>
            <DropdownItem key="cadstroEquipamento" as={Link} href="cadastro/equipamento">
              Equipamento
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button disableRipple className="p-0 bg-transparent data-[hover=true]:bg-transparent text-gray-200 text-base" radius="sm" variant="light">
                Listagem
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="ACME features" className="w-[340px]  text-gray-900" itemClasses={{base: "gap-4"}}>
            <DropdownItem key="listagem Clientes">
              Clientes
            </DropdownItem>
            <DropdownItem key="listagem Equipamentos">
              Equipamentos
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> 

      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="danger" href="/login" variant="ghost">
            Sair
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
