"use client";

import { useState } from "react";
import { Input, Button, Card, Spacer } from "@nextui-org/react";

interface InputConfig {
  name: string;
  label: string;
  required: boolean;
  type?: string;
  placeholder?: string;
}

interface CadastroGenericoProps {
  title: string;
  inputsConfig: InputConfig[];
  onSubmit: (formData: Record<string, any>) => void;
}

export default function CadastroGenerico({ title, inputsConfig, onSubmit }: CadastroGenericoProps) {
  const [formValues, setFormValues] = useState<Record<string, any>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <Card className="max-w-md p-5" >
      <h2 className="text-xl text-black font-bold">{title}</h2>
      <Spacer y={1} />
      <form onSubmit={handleSubmit}>
        {inputsConfig.map((input) => (
          <div key={input.name} className="mb-5">
            <Input
              label={input.label}
              name={input.name}
              type={input.type || "text"}
              required={input.required}
              placeholder={input.placeholder || ""}
              onChange={handleChange}
              fullWidth
              aria-label={input.label} // Acessibilidade
            />
          </div>
        ))}
        <Spacer y={1} />
        <Button type="submit" color="default">
          Enviar
        </Button>
      </form>
    </Card>
  );
}
