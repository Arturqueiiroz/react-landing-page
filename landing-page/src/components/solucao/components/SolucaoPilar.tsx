interface SolucaoPilarProps {
    icon: string;
    titulo: string;
    descricao: string;
} 

function SolucaoPilar ({icon, titulo, descricao}: SolucaoPilarProps) {
    return(
        <div className="solucao-pilar">
            <div>
                <img src={icon}/>
                <div>
                    <span className="titulo-solucao">{titulo}</span>
                    <p className="descricao-solucao">{descricao}</p>
                </div>
            </div>
        </div>
    )
}

export default SolucaoPilar;