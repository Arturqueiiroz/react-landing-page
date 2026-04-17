import PersonasPilar from "./components/PersonasPilar"
import { personas } from "../../data/personas";
import "./personas.css"

function Personas () {
    return (
        <section className="personas">
           <div className="container-personas">
             <div className="title-personas">
                <h2>Quem está por trás da EduTrack</h2>
            </div>
          <div className="colunas-personas">
          {personas.map((personas) => (
            <PersonasPilar
              key={personas.id}
              icon={personas.icon}
              titulo={personas.titulo}
              cargo={personas.cargo}
              descricao={personas.descricao}
            />
          ))}
        </div>
           </div>
        </section>
    )
}

export default Personas