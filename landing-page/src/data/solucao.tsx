import relatorio from "../assrts/iconSolucao/📊 relatorio.png";
import meta from "../assrts/iconSolucao/🎯 meta.png";
import celular from "../assrts/iconSolucao/📱celular.png";
import cadeado from "../assrts/iconSolucao/🔒 cadeado.png";
import alerta from "../assrts/iconSolucao/🔔 alerta.png";
import paceria from "../assrts/iconSolucao/🤝 paceria.png"
export interface Solucao {
    id: number;
    icon: string;
    titulo: string;
    descricao: string;
}

export const pilares: Solucao[] = [

    { 
    id: 1,
    icon: relatorio,
    titulo: "Relatórios Detalhados",
    descricao: "Visualize o crescimento de cada turma com gráficos interativos e exportação simplificada de dados."
    },
    { 
    id: 2,
    icon: meta,
    titulo: "Metas de Aprendizado",
    descricao: "Defina competências específicas por curso e acompanhe a proficiência técnica de cada estudante."
    },
    { 
    id: 3,
    icon: alerta,
    titulo: "Alertas Inteligentes",
    descricao: "Seja notificado automaticamente sobre quedas de rendimento ou faltas consecutivas."
    },
    { 
    id: 4,
    icon: paceria,
    titulo: "Gestão de Parcerias",
    descricao: "Conecte alunos a estágios e empresas parceiras diretamente pela plataforma."
    },  
    { 
    id: 5,
    icon: celular,
    titulo: "App do Aluno",
    descricao: "Acesso rápido a notas, horários e materiais didáticos através de uma experiência mobile nativa."
    },
    { 
    id: 6,
    icon: cadeado,
    titulo: "LGPD Compliance",
    descricao: "Gestão de dados em total conformidade com as leis de proteção de dados brasileiras."
    },          
];