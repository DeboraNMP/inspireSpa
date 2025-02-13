import "./style.css"
import lotusFlower from "../../assets/lotus (4).png"
import aboutUsPhoto from "../../assets/aboutUsPhoto.jpeg"
import footSpa from "../../assets/footSpa1.jpg"
import skinCleaning from "../../assets/tratamentocorporal.jpg"
import massage from "../../assets/326598.jpg"
import service4 from "../../assets/massageWithPindas.jpg"
import emailjs from '@emailjs/browser';

import {
    CaretLeft,
    CaretRight,
    Clock,
    Envelope,
    FacebookLogo,
    MapPinLine,
    PhoneCall,
    TiktokLogo,
    WhatsappLogo

} from "@phosphor-icons/react"

import {
    InstagramLogo
} from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"

import custumerDebora from "../../assets/customerDebora.jpeg"

export const Home = () => {
    const [form, setForm] = useState({
        name: "",
        telefone: "",
        email: "",
        message: ""
    })

    async function handleSendEmails() {

        emailjs
            .send('service_myx56qs', 'template_8ex3moj', form, {
                publicKey: 'CYWYvbaJ0_7IeaVEK',
            })
            .then(
                () => {
                    console.log('SUCCESS!')
                    setForm({
                        name: "",
                        telefone: "",
                        email: "",
                        message: ""
                    });
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
    };

    async function previousServices() {

    }

    async function NextServices() {

    }


    return (
        <div>
            <div id="home" className="backgroundHome">

                <div className="principalMenu">

                    <div className="logo">
                        <h2>Inspire</h2>
                        <img className="img" src={lotusFlower} alt="Imagem flor de lótus" />
                        <h2>SPA</h2>
                    </div>
                    <div className="links" >
                        <a className="link" href="#home">Home</a>
                        <a className="link" href="#aboutUs">Sobre nós</a>
                        <a className="link" href="#services">Serviços</a>
                        <a className="link" href="#appointments">Agende seu horário</a>
                    </div>

                </div>

                <div className="textPrincipal" >
                    <h1 className="h1PrincipalText">Renove sua energia, <br />reequilibre sua mente.</h1>
                    <h3 className="h3PrincipalText">
                        Criamos um ambiente perfeito para você se desconectar da rotina e se reconectar consigo mesmo.
                        <br />
                        Nossa missão é proporcionar momentos de relaxamento profundo, harmonia e bem-estar,
                        <br />
                        através de tratamentos exclusivos e personalizados.
                    </h3>
                </div>


            </div >

            <div id="aboutUs" className="aboutUs">
                <div className="quemSomos">
                    <h1 className="h1SobreNos">Quem somos?</h1>
                    <h3 className="h3SobreNos">
                        No Inspire Spa, acreditamos que o verdadeiro relaxamento começa com a conexão interior.
                        <br />  Nosso espaço foi cuidadosamente criado para oferecer uma experiência única de renovação e serenidade,
                        <br />onde cada detalhe é pensado para promover o equilíbrio entre corpo, mente e espírito.
                    </h3>
                    <h3 className="h3SobreNosPart2">
                        <strong>Deusa Araújo</strong>, fundadora e profissional responsável pelo Inspire Spa, tem uma paixão verdadeira pelo cuidado
                        <br />
                        e bem-estar de cada cliente, com um olhar atento e cuidadoso, ela utiliza seu conhecimento para proporcionar
                        <br />
                        tratamentos personalizados que atendem às necessidades de cada pessoa de forma única e eficaz.
                    </h3>
                    <h3 className="h3SobreNosPart2">
                        Ela é especialista em diversas terapias de relaxamento, incluindo massagens terapêuticas, tratamentos faciais
                        <br />
                        e corporais.Seu objetivo é proporcionar aos clientes não apenas momentos de paz e descanso, mas também
                        <br />
                        ajudá-los a alcançar um estado de equilíbrio duradouro, proporcionando bem-estar físico e emocional.
                        <br />
                    </h3>
                    <h3 className="h3SobreNosPart2">
                        No Inspire Spa, nossa missão é criar um ambiente acolhedor, tranquilo e revitalizante, onde você pode se
                        <br />
                        entregar completamente ao processo de autocuidado, sentindo-se renovado a cada visita.
                        <br />
                        Venha conhecer nosso espaço e experimente a arte do relaxamento com quem entende do assunto.
                    </h3>
                </div>

                <div>
                    <img className="aboutUsPhoto" src={aboutUsPhoto} alt="Foto da profissional responsável." />
                </div>

            </div>

            <div id="services" className="ourServices">

                <div className="principalTextServicesDiv" >
                    <h2 className="principalTextServices">Conheça nossos serviços</h2>
                </div>

                <button className="previousButton"><CaretLeft size={70} color="white" weight="regular" /></button>

                <div className="footSpa">
                    <img className="footSpaPhoto" src={footSpa} alt="Foto do Serviço" />
                    <div>
                        <h2 className="principalTextFootSpa">SPA dos pés</h2>
                        <h4 className="introductoryTextFootSpa">

                            Oferecemos massagens, esfoliação e hidratação para proporcionar
                            {/* <br /> */}
                            conforto e bem-estar, deixando seus pés renovados e relaxados.
                        </h4>
                        <button className="buttonFootSpa">Saiba mais</button>
                    </div>
                </div>

                <div className="skinCleaning">
                    <img className="skinCleaningPhoto" src={skinCleaning} alt="Foto do serviço." />
                    <div >
                        <h2 className="h2SkinCleaning">Cuidados Faciais</h2>
                        <h4 className="h3SkinCleaning">
                            Oferecemos tratamentos personalizados para hidratar, regenerar e
                            {/* <br /> */}
                            revitalizar sua pele, garantindo saúde e beleza em cada sessão.
                        </h4>
                        <button className="buttonSkinCleaning">Saiba mais</button>
                    </div>
                </div>

                <div className="relaxingMassage">
                    <img className="massagePhoto" src={massage} alt="Foto do Serviço." />
                    <div>
                        <h2 className="h2relaxingMassage">Massagem relaxante</h2>
                        <h4 className="h3relaxingMassage">
                            Experimente a sensação de alívio e tranquilidade com nossa massagem relaxante.
                            {/* <br /> */}
                            Ideal para aliviar o estresse, melhorar a circulação e promover um profundo bem-estar.
                        </h4>
                        <button className="buttonRelaxingMassage">Saiba mais</button>
                    </div>
                </div>

                <div className="service4">
                    <img className="service4Photo" src={service4} alt="Foto do Serviço" />
                    <div>
                        <h2 className="h2Service4">Massagem com Pindas</h2>
                        <h4 className="h3Service4">
                            A massagem com pindas combina terapias tradicionais com toques de relaxamento profundo.
                            {/* <br /> */}
                            Utilizando bolsas de ervas quentes, ela promove alívio muscular, desintoxicação
                            {/* <br /> */}
                            e um bem-estar único.
                        </h4>
                        <button className="buttonPindasMassage">Saiba mais</button>
                    </div>
                </div>

                <button className="buttonNext"><CaretRight size={70} color="white" weight="regular" /></button>

            </div>

            <div className="testimonalCustomers">
                <h3 className="principalTextTCustomers">Veja o que nossos clientes falaram...</h3>
                <div>
                    <img className="imgCustomer" src={custumerDebora} alt="Foto da cliente Débora" />
                </div>

                <div className="customer">

                    <h3 className="textCustomer">"Foi sem dúvidas a melhor profissinal em que eu já estive,
                        ela é muito atenciosa, empenhada, o lugar é aconchegante,
                        faço meus tratamentos faciais, e minhas massagens e,
                        não troco a Deusa por ninguém."</h3>
                    <h2 className="customerInfo">Débora, 27 anos</h2>
                </div>

            </div>

            <div className="contactUs">

                <div className="contactInfo">

                    <div className="contactPhone">
                        <PhoneCall size={30} color="#035158" weight="regular" /> <h3>Ligue agora</h3>

                    </div>
                    <div className="contactNumber">
                        <h3>+39 345 512 9727</h3>
                    </div>


                    <div className="contactLocation">
                        <MapPinLine size={30} color="#035158" weight="regular" /> <h3>Localização</h3>
                    </div>
                    <div>
                        <h3 className="contactAdress">Rua da Massagem, 12, Relaxamento - Bem estar </h3>
                    </div>

                    <div className="contactClock">
                        <Clock size={30} color="#035158" weight="regular" /> <h3>Horário de Funcionamento</h3>
                    </div>
                    <div>
                        <h3 className="contactHour">Ter - Sáb  08:00 - 17:00</h3>
                        <h3 className="contactHour"> Seg e Dom - FECHADO</h3>
                    </div>

                    <div className="contactEmail">
                        <Envelope size={30} color="#035158" weight="regular" /> <h3>E-mail</h3>
                    </div>
                    <div className="contactEmailAdress">
                        <h3> inspirespa@gmail.com</h3>
                    </div>

                    <div>
                        <h3 className="textSocials">Acompanhe nossas redes</h3>
                    </div>
                    <div className="socials">
                        <FacebookLogo size={30} color="#035158" weight="regular" />
                        <InstagramLogo size={30} color="#035158" weight="regular" />
                        <TiktokLogo size={30} color="#035158" weight="regular" />
                        <WhatsappLogo size={30} color="#035158" weight="regular" />
                    </div>

                </div>

                <div className="boxInfo">
                    <h2>LIGAMOS PARA VOCÊ!</h2>

                    <input className="boxInfoName" type="name"
                        name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Digite seu Nome"></input>
                    <input className="boxInfoTelephone" type="telefone"
                        name="telefone" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        placeholder="Digite seu Telefone"></input>

                    <input className="boxInfoEmail" type="email"
                        name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Digite seu E-mail"></input>

                    <textarea className="boxInfoMessage"
                        name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Conte-nos brevemente sua necessidade."></textarea>

                    <button onClick={handleSendEmails} className="buttonBoxInfo">Enviar</button>
                </div>

            </div>

        </div >
    )
}
