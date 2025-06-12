import "./style.css"
import logo from '../../assets/inspireSpaLogo.png'

export const Massages = () => {

    return (
        <div className="backgroundMassages">

            <div className="principalMenu">

                <div className="logo">
                    <img className="logoInspiree" src={logo} alt="Logo Inspire SPA" />
                </div>

                <a className="linkRetorno" href={'/inspirespa#Home'}>Página Inicial</a>

            </div>

            <div className="firstLine">
                <div className="service">

                    <h1 className="titleMassage">Massagem Anti-Estresse</h1>
                    <p className="line">____________________________________</p>
                    <p className="subtitleMassage">
                        Através dessa massagem, o corpo relaxa enquanto você toma consciência dos movimentos
                        passivos e da própria tensão muscular. Ao mesmo tempo, é possível perceber a resistência
                        ou os obstáculos aos movimentos. Esse processo contribui para restabelecer o equilíbrio
                        do corpo e da mente.
                    </p>
                    <ul className="benefits">
                        <li>Benefícios:</li>
                        <li>Uma respiração melhor e profunda.</li>
                        <li>Controla o cortisol </li>
                        <li>Estimula a producao de endorfina "hormonio da felicidade"</li>
                        <li>Diminue a ansiedade dando a sensação de autoconfiança.</li>
                        <li>Relaxamento mucular e melhora a elasticidade</li>
                        <li>Melhora a circulação sanguinea e línfatica</li>
                        <li>Estimulação vagale e relaxamento profundo(gate-control)</li>
                    </ul>

                    <button className="buttonMassage">  Agende seu horário</button>
                </div>

                <div className="service">

                    <h1 className="titleMassage">My Spa Com Sino Tibetano</h1>
                    <p className="line">__________________________________________________</p>
                    <p className="subtitleMassage">
                        Com movimentos envolventes, tração profunda, mobilização e digito pressão em algumas
                        parte do corpo. Palmopressão seguindo a respiração, esta massagem causa um relaxamento
                        profundo. </p>
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
                    <button className="buttonMassage">  Agende seu horário</button>
                </div>
            </div>

            <div className="secondLine">

                <div className="service">

                    <h1 className="titleMassage">Banho de Hidromassagem</h1>
                    <p className="line">__________________________________</p>
                    <p className="subtitleMassage">
                        Estimula o corpo, alivia as tensões musculares. O seu efeito vai até as emoções, agindo
                        no controle da ansiedade e estresse do dia-a-dia. Na temperatura adequada, com produtos
                        naturais e essências.
                    </p>
                    <ul className="benefits">
                        <li>Benefícios:</li>
                        <li>Estabilização psicossomática</li>
                    </ul>

                    <button className="buttonMassage">  Agende seu horário
                    </button>
                </div>

                <div className="service">

                    <h1 className="titleMassage">Massagem Harmônica</h1>
                    <p className="line">__________________________________</p>
                    <p className="subtitleMassage">
                        Com manobras firmes, com a pressão certa, buscando os pontos, gatilhos (tensões,
                        contraturas) com alongamento e atenção maior nas regiões críticas, como a cervical e
                        a lombosacral, são as partes do corpo que mais desencadeiam pontos de tensao, seja por
                        uma mal postura ou estresse do dia-a-dia.
                    </p>
                    <ul className="benefits">
                        <li>Benefícios:</li>
                        <li>Após uma massagem de 1 hora sentirás uma leveza em todo corpo</li>
                    </ul>

                    <button className="buttonMassage">  Agende seu horário
                    </button>
                </div>
            </div>

            <div className="thirdLine">

                <div className="service">

                    <h1 className="titleMassage">Linfofrenagem(Drenagem linfática)</h1>
                    <p className="line">________________________________________________</p>
                    <p className="subtitleMassage">
                        É uma técnica de massagem que apresenta uma solução mais eficaz para a eliminação
                        de liquidos em excesso e liberação de toxinas extracelulares. Favorece a regeneração celular eliminando visivelmente os edemas(inchaço)
                        deixando o aspecto da pele mais saudável e uniforme.
                    </p>
                    <ul className="benefits">
                        <li>Benefícios:</li>
                        <li>Tratamento pré celulite</li>
                        <li>Pré ciclo menstrual</li>
                        <li>Tratamento pré celulite</li>
                        <li>Tratamento pré celulite</li>
                    </ul>

                    <button className="buttonMassage">  Agende seu horário
                    </button>
                </div>



                <div className="service">

                    <h1 className="titleMassage">Linfofrenagem(Drenagem linfática)</h1>
                    <p className="line">________________________________________________</p>
                    <p className="subtitleMassage">
                        É uma técnica de massagem que apresenta uma solução mais eficaz para a eliminação
                        de liquidos em excesso e liberação de toxinas extracelulares. Favorece a regeneração celular eliminando visivelmente os edemas(inchaço)
                        deixando o aspecto da pele mais saudável e uniforme.
                    </p>
                    <ul className="benefits">
                        <li>Benefícios:</li>
                        <li>Tratamento pré celulite</li>
                        <li>Pré ciclo menstrual</li>
                        <li>Tratamento pré celulite</li>
                        <li>Tratamento pré celulite</li>
                    </ul>

                    <button className="buttonMassage">  Agende seu horário
                    </button>
                </div>

            </div>

        </div>
    )
}