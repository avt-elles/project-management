import { Medal } from "lucide-react";
import localfont from "next/font/local";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = localfont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />O Nº 1 PARA GERENCIAR TAREFAS
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 font-bold max-w-xs md:max-w-4xl">
          Organize e aumente a eficiência de seu time com um aplicativo de
          gerenciamento de tarefas.
        </h1>
        <div className="text-2xl md:text-4xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md b-4 w-fit">
          ODS Gerenciador de Tarefas
        </div>
      </div>

      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Planeje, organize e colabore em qualquer projeto com gerenciamento de
        tarefas que pode ser personalizado para cada necessidade.
      </div>
      <div>
        <Button className="mt-6" size="lg">
          <Link href="/sign-up" className="uppercase">
            {" "}
            Quero Testar{" "}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
