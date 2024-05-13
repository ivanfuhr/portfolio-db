import { Button } from "@/components/Button";
import { Title } from "@/components/Title";

export const metadata = {
  title: "Página não encontrada - Ivan Führ",
  description: "Página não encontrada.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <Title type="h1">Oops! Página não encontrada!</Title>
      <p className="font-light">
        Desculpe, mas a página que você está procurando não existe.
      </p>

      <Button link="/" className="w-max px-8">
        Voltar para o início
      </Button>
    </div>
  );
}
