import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          Nº 1 GERENCIAMENTO DE TAREFAS
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Ajuda a sua equipe se mover
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md b-4 w-fit">
          Trabalhar em frente
        </div>
      </div>

      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Colabore e gerencie seus projetos, alcance novos picos de produtividade.
        Para pequenas, médias e grandes empresas, a forma como sua equipe
        trabalha é única, faça tudo isso com o ODS Gerenciador de Projetos.
      </div>
      <div>
        <Button>Teste</Button>
      </div>
    </div>
  );
};

export default MarketingPage;
