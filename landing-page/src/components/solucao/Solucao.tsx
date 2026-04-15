import { pilares } from "../../data/solucao";
import SolucaoPilar from "./components/SolucaoPilar"
import "./Solucao.css"


function Solucao () {
    return (
        <section className="solucao">
           <div className="container-solucao">
             <div className="title-solucao">
                <h2>Por que escolher a EduTrack?</h2>
                <p>Soluções completas desenhadas para o ecossistema de educação técnica profissionalizante.</p>
            </div>
            <div className="colunas-solucao1">
                {
                    pilares.map((solucao) => (
                        <SolucaoPilar key={solucao.id}
                        icon={solucao.icon} 
                        titulo={solucao.titulo}
                        descricao={solucao.descricao}
                        />
                    ))
                }
            </div>
           </div>
        </section>
    )
}

export default Solucao