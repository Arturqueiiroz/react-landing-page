import "./contato.css";

function Contato() {
  return (
    <section className="contato">
      <div className="container-contato">
        <div className="contato-info">
          <div>
            <h3>Vamos conversar?</h3>
            <p>
              Agende uma demonstração gratuita e veja como a EduTrack pode
              revolucionar sua escola.
            </p>

            <div className="info-lista">
              <div className="info-item">
                <span className="icone-info"></span>
                <span>💌 contato@edutrack.com.br</span>
              </div>

              <div className="info-item">
                <span className="icone-info"></span>
                <span>📱 +55 (11) 4002-8922</span>
              </div>

              <div className="info-item">
                <span className="icone-info"></span>
                <span>🏫 Av. Paulista, 1000 - São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div>
            <div className="linha"></div>
            <p className="suporte">
              Suporte técnico disponível 24/7 para escolas premium.
            </p>
          </div>
        </div>

        <form className="contato-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nome">NOME</label>
              <input id="nome" type="text" placeholder="Seu nome completo" />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">TELEFONE</label>
              <input id="telefone" type="text" placeholder="(11) 99999-9999" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">E-MAIL</label>
            <input id="email" type="email" placeholder="seu@email.com" />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">MENSAGEM</label>
            <textarea
              id="mensagem"
              placeholder="Como podemos ajudar?"
            ></textarea>
          </div>

          <button type="submit" className="btn-enviar">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;