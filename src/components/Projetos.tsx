import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import ProjetoBloco from "./project objects/ProjetoBloco";

interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  detalhes: string;
  link: string;
  imagem: string;
  item: string;
}

export default function Projetos() {
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  useEffect(() => {
    async function carregarProjetos() {
      const { data, error } = await supabase
        .from("projetos")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setProjetos(data);
      }
    }

    carregarProjetos();
  }, []);

  return (
    <div id="projetos">
      <h2>MEUS PROJETOS</h2>
      <br /><hr /><br />

      <div className="conteudo">
        {projetos.map((projeto) => (
          <ProjetoBloco
            key={projeto.id}
            imagem={projeto.imagem}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            detalhes={projeto.detalhes}
            link={projeto.link}
            item={projeto.item}
          />
        ))}
      </div>
    </div>
  );
}