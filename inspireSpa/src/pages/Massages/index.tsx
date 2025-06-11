import "./style.css"
import logo from '../../assets/LOGO - INSPIRE SPA - MINIMALISTA 5 .png'
import { WhatsappLogo } from "@phosphor-icons/react"

export const Massages = () => {

    return (
        <div className="backgroundMassages">

            <div className="principalMenu">

                <div className="logo">
                    <img className="logoInspiree" src={logo} alt="Logo Inspire SPA" />
                </div>
                <div className="links" >
                    <a className="linkRetorno" href={'/inspirespa#Home'}>Início</a>
                </div>
            </div>

            <div className="relaxingMassage">

                <h1 className="titleMassage">Massagem Anti-Estresse</h1>
                <p className="line">________________________________________</p>
                <p className="subtitleMassage">
                    "Através dessa massagem, o corpo relaxa enquanto você toma consciência dos movimentos passivos e da própria tensão muscular. Ao mesmo tempo, é possível perceber a resistência ou os obstáculos aos movimentos. Esse processo contribui para restabelecer o equilíbrio do corpo e da mente."
                </p>
                <ul className="benefits">
                    <li>Benefícios:</li>
                    <li>Uma respiração melhor e profunda.</li>
                    <li>Controla o cortisol (Hormonio que quando desregulado contribui no aumento do estresse).</li>
                    <li>Estimula a producao de endorfina "hormonio da felicidade" com ação antalgica</li>
                    <li>Diminue a ansiedade dando a sensação de segurança em si mesmo.</li>
                    <li>Relaxamento mucular e melhora a elasticidade</li>
                    <li>Melhora a circulação sanguinea e línfatica</li>
                    <li>Estimulação vagale e relaxamento profundo(gate-control)</li>
                </ul>

                <button className="buttonMassage">  Agende seu horário
                </button>
            </div>

            <div className="relaxingMassage">

                <h1 className="mySpa">My Spa Com Campana Tibetana</h1>
                <p className="line">_________________________________________________________</p>
                <p className="subtitleMassage">
                    Com movimentos envolventes, tração profunda, mobilização e digito pressão em algumas parte do corpo. Palmopressão seguindo a respiração, esta massagem causa um relaxamento profundo.
                </p>
                <ul className="benefits">
                    <li>Benefícios:</li>
                    <li>Ativa a produçÃo de endorfina</li>
                    <li>Relaxa a musculatura</li>
                    <li>Melhora a percepção</li>
                    <li>Melhora o sono</li>
                    <li>Acalma</li>
                    <li>Diminue ansiedade</li>
                    <li>Deixa a mente e o corpo em conexão de paz consigo</li>
                </ul>

                <button className="buttonMassage">  Agende seu horário
                </button>
            </div>

            <div className="harmonicMassage">

                <h1 className="massageHarmonic">Massagem Harmônica</h1>
                <p className="line">_______________________________________</p>
                <p className="subtitleMassage">
                    Com manobras firmes, com a pressão certa, buscando os pontos, gatilhos (tensões, contraturas) com alongamento e atenção maior nas regiões críticas, como a cervical
                </p>
                <ul className="benefits">
                    <li>Benefícios:</li>
                    <li>Ativa a produçÃo de endorfina</li>
                    <li>Relaxa a musculatura</li>
                    <li>Melhora a percepção</li>
                    <li>Melhora o sono</li>
                    <li>Acalma</li>
                    <li>Diminue ansiedade</li>
                    <li>Deixa a mente e o corpo em conexão de paz consigo</li>
                </ul>

                <button className="buttonMassage">  Agende seu horário
                </button>
            </div>

        </div>
    )
}