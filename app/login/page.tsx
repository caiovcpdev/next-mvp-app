import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import Link from 'next/link';

export default function LoginComponent() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-md">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md text-zinc-950">Seja bem-vindo</p>
          <p className="text-small text-zinc-600">Entre com suas credenciais!</p>
        </div>
      </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-4 w-full">
            <Input
              fullWidth
              type="email"
              label="Email"
              placeholder="Enter your email"
            />
            <Input
              fullWidth
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
            <Button color="default" fullWidth>
                <a href="dashboard">Entrar</a>
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
