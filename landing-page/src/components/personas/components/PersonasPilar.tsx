interface PersonasPilarProps {
  icon: string;
  titulo: string;
  cargo: string;
  descricao: string;
}

function PersonasPilar({ icon, titulo, cargo, descricao }: PersonasPilarProps) {
  return (
    <div className="personas-pilar">
      <div>
        <img src={icon} />
        <div>
          <span className="titulo-personas">{titulo}</span>
          <span className="cargo-personas">{cargo}</span>
          <p className="descricao-personas">{descricao}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonasPilar;
