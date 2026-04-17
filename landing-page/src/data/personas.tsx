import al from "../assrts/iconePersonas/Al.png"
import cm from "../assrts/iconePersonas/Cm.png";
import pn from "../assrts/iconePersonas/Pn.png";
import rc from "../assrts/iconePersonas/Rc.png";

export interface Personas {
  id: number;
  icon: string;
  titulo: string;
  cargo: string;
  descricao: string;
}

export const personas: Personas[] = [

    { id: 1, 
      icon: al, 
      titulo: "André Luz", 
      cargo: "CEO & Fundador",
      descricao: "Especialista em gestão educacional com 15 anos de experiência no setor técnico." 
    },
    { id: 2, 
      icon: cm, 
      titulo: "Carla Mendes", 
      cargo: "CTO",
      descricao: "Engenheira de software focada em arquiteturas escaláveis e segurança de dados." 
    },
    { id: 3, 
      icon: pn, 
      titulo: "Paulo Neto", 
      cargo: "Head de Produto",
      descricao: "Designer UX apaixonado por criar interfaces que facilitam o dia a dia do professor." 
    },
    { id: 4, 
      icon: rc, 
      titulo: "Rita Costa", 
      cargo: "Sucesso do Cliente",
      descricao: "Garante que cada escola parceira extraia o máximo potencial da nossa tecnologia." 
    },
];