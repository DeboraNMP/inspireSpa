import "./style.css"
import aboutUsPhoto from "../../assets/aboutUsPhoto.jpeg"
import footSpa from "../../assets/footSpa1.jpg"
import skinCleaning from "../../assets/tratamentocorporal.jpg"
import hotStoneMassage from "../../assets/326598.jpg"
import pindasMassage from "../../assets/massageWithPindas.jpg"
import bodyCare from "../../assets/bodyCare.jpg"
import emailjs from '@emailjs/browser';
import {
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

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import logo from '../../assets/LOGO - INSPIRE SPA - MINIMALISTA 5 .png'
import { Link } from "react-router-dom"
import { WhatsappButton } from "../../components/WhatsappButton"




export const Home = () => {
    const [form, setForm] = useState({
        name: "",
        telefone: "",
        email: "",
        message: ""


    }

    )

    async function handleSendEmails() {
        // emailjs
        //     .send('service_myx56qs', 'template_8ex3moj', form, {
        //         publicKey: 'CYWYvbaJ0_7IeaVEK',
        //     })
        //     .then(
        //         () => {
        //             //console.log('SUCCESS!')
        //             setForm({
        //                 name: "",
        //                 telefone: "",
        //                 email: "",
        //                 message: ""
        //             });
        //         },
        //         (error) => {
        //             console.log('FAILED...', error);
        //         },
        //     );


        if (!form.name || !form.telefone || !form.message) {
            alert("Por favor, preencha os campos obrigatórios.");
            return;
        }

        try {
            await emailjs.send('service_myx56qs', 'template_8ex3moj', form, {
                publicKey: 'CYWYvbaJ0_7IeaVEK',
            });

            setForm({
                name: "",
                telefone: "",
                email: "",
                message: ""
            });
            alert("Mensagem enviada com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar e-mail:", error);
            alert("Ocorreu um erro. Tente novamente.");
        }

    };




    return (
        <div>
            <div id="home" className="backgroundHome">

                <div className="principalMenu">

                    <div className="logo">
                        <img className="logoInspire" src={logo} alt="Logo Inspire SPA" />
                    </div>
                    <div className="links" >
                        <a className="link" href="#home">Início</a>
                        <a className="link" href="#aboutUs">Sobre nós</a>
                        <a className="link" href="#services">Serviços</a>
                        <a className="link" href={'/testimonials'}>Depoimentos</a>
                        <a className="link" href="#appointments">Agende seu horário</a>
                    </div>

                </div>

                <div className="textPrincipal" >
                    <h1 className="h1PrincipalText">Inspire, respire e relaxe.</h1>
                    <h3 className="h3PrincipalText">
                        Criamos um ambiente perfeito para você se desconectar da rotina e se reconectar consigo mesmo.
                        <br />
                        Nossa missão é proporcionar momentos de relaxamento profundo, harmonia e bem-estar,
                        <br />
                        através de tratamentos exclusivos e personalizados.
                    </h3>
                </div>

                <WhatsappButton />

            </div >

            <div id="aboutUs" className="aboutUs">
                <div className="quemSomos">
                    <h1 className="h1SobreNos">Quem somos?</h1>
                    <h3 className="h3SobreNos">

                        <h3 className="h3SobreNosPart2">
                            Elidelsa Araújo Lima – Esteticista e Terapeuta naturalista
                            Sou Elidelsa Araújo Lima, mais conhecida como Deusa, Delsa ou Eli. Desde 1999, quando iniciei meu primeiro curso de cabeleireira no SENAC de Teresina (PI), descobri minha vocação: cuidar de pessoas. Com o tempo, aprofundei meus conhecimentos em estética e bem-estar, realizando cursos em corte, colorimetria, manicure, pedicure, depilação e banho de beleza.

                            A experiência no atendimento ao público me mostrou que meu trabalho ia além da aparência — ele tocava emoções, restaurava autoestima e oferecia acolhimento. Em 2007, guiada pelo desejo de cuidar de forma ainda mais ampla, formei-me técnica em enfermagem, com foco na área de emergência hospitalar, onde aprimorei meu olhar clínico e minha escuta sensível.

                            Foi então que a massoterapia entrou definitivamente na minha vida. Após um curso profissionalizante, percebi o poder que o toque humano pode ter na vida das pessoas — seja no alívio da dor física, no controle do estresse ou no acolhimento emocional. A partir daí, entendi que meu propósito é promover saúde, beleza e bem-estar de forma integrada.

                            Atualmente, atuo como esteticista e massoterapeuta, unindo conhecimento técnico, experiência clínica e sensibilidade humana. Realizo atendimentos personalizados, com foco na saúde da pele, relaxamento corporal, equilíbrio energético e autoestima.

                            Em 2022, iniciei minha graduação para aprofundar e atualizar meus conhecimentos em estética e terapias integrativas. Sigo em constante aperfeiçoamento, buscando oferecer sempre um atendimento de excelência, com ética, empatia e amor pelo que faço.

                            Minha missão é cuidar do outro — com técnica, com toque e com o coração.
                        </h3>
                    </h3>

                    <h3 className="h3SobreNosPart2">

                    </h3>
                    <h3 className="h3SobreNosPart2">

                    </h3>
                </div>

                <div className="photo">
                    <img className="aboutUsPhoto" src={aboutUsPhoto} alt="Foto da profissional responsável." />
                </div>

            </div>


            <h2 id="services" className="servicesText">Se Inspire nos nossos serviços</h2>

            <div className="ourServices">

                <div className="massageService">
                    <img className="pindasMassagePhoto" src={pindasMassage} alt="" />
                    <h2 className="titleServices">Massagens</h2>
                    <h4 className="subtitleServices">Entre aromas e toques, nasce uma nova versão de você.</h4>
                    <a className="buttonServices" href={'/massagens'}>Saiba mais</a>
                </div>

                <div className="facialCareService">
                    <img className="skinCleaningPhoto" src={skinCleaning} alt="" />
                    <h2 className="titleServices">Cuidados Faciais</h2>
                    <h4 className="subtitleServices">Sua cerimônia de rejuvenescimento começa aqui.</h4>
                    <button className="buttonServices">Saiba mais</button>
                </div>

                <div className="bodyCareService">
                    <img className="skinCleaningPhoto" src={bodyCare} alt="" />
                    <h2 className="titleServices">Cuidados Corporais</h2>
                    <h4 className="subtitleServices">Sua rotina sagrada de autocuidado começa aqui.</h4>
                    <button className="buttonServices">Saiba mais</button>
                </div>

                {/* <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img className="footSpaPhoto" src={footSpa} alt="Foto do serviço" />
                        <h2 className="principalTextFootSpa">Spa dos pés</h2>
                        <h4 className="introductoryTextFootSpa">
                            Oferecemos massagens, esfoliação e hidratação para proporcionar
                            conforto e bem-estar, deixando seus pés renovados e relaxados.
                        </h4>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className="skinCleaningPhoto" src={skinCleaning} alt="Foto do serviço." />
                        <h2 className="h2SkinCleaning">Cuidados Faciais</h2>
                        <h4 className="h4SkinCleaning">
                            Oferecemos tratamentos personalizados para hidratar, regenerar e
                            revitalizar sua pele, garantindo saúde e beleza em cada sessão.
                        </h4>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className="hotStoneMassagePhoto" src={hotStoneMassage} alt="Foto do Serviço." />
                        <h2 className="h2hotStoneMassagePhoto">Massagem com pedras quentes</h2>
                        <h4 className="h3hotStoneMassagePhoto">
                            Experimente a sensação de alívio e tranquilidade com nossa massagem relaxante.
                            Ideal para aliviar o estresse, melhorar a circulação e promover um profundo bem-estar.
                        </h4>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className="pindasMassagePhoto" src={pindasMassage} alt="Foto do Serviço" />
                        <h2 className="h2pindasMassage">Massagem com Pindas</h2>
                        <h4 className="h3pindasMassage">
                            A massagem com pindas combina terapias tradicionais com toques de relaxamento profundo.
                            Utilizando bolsas de ervas quentes, ela promove alívio muscular, desintoxicação
                            e um bem-estar único.
                        </h4>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className="pindasMassagePhoto" src={pindasMassage} alt="Foto do Serviço" />
                        <h2 className="h2pindasMassage">Massagem com Pindas</h2>
                        <h4 className="h3pindasMassage">
                            A massagem com pindas combina terapias tradicionais com toques de relaxamento profundo.
                            Utilizando bolsas de ervas quentes, ela promove alívio muscular, desintoxicação
                            e um bem-estar único.
                        </h4>
                    </SwiperSlide>
                </Swiper> */}
            </div>

            <div className="contactUs" id="appointments">

                <div className="contactInfo">

                    <div className="contactPhone">
                        <PhoneCall size={30} color="#035158" weight="regular" /> <h3>Ligue agora</h3>

                    </div>
                    <div className="contactNumber">
                        <h3>(48) 9 8427-5880</h3>
                    </div>


                    <button className="contactLocation">

                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Av.+Marcolino+Martins+Cabral,+2185+-+Tubarão+-+SC"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MapPinLine size={30} color="#035158" weight="regular" />
                        </a>
                        <h3>Localização</h3>


                    </button>
                    <div>
                        <h3 className="contactAdress">Av. Marcolino Martins Cabral, 2185 </h3>
                        <h3 className="contactAdress"> Tubarão - SC</h3>
                    </div>

                    <div className="contactClock">
                        <Clock size={30} color="#035158" weight="regular" /> <h3>Horário de Funcionamento</h3>
                    </div>
                    <div>
                        <h3 className="contactHour">Ter - Sáb  08:00 - 17:00</h3>
                        <h3 className="contactHour"> Seg e Dom - FECHADO</h3>
                    </div>

                    <div className="contactEmail">

                        <a
                            href="mailto:inspirebamboo@gmail.com?subject=Agendamento%20de%20Serviço&body=Olá,%20gostaria%20de%20agendar%20um%20horário."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Envelope size={30} color="#035158" weight="regular" />
                        </a>
                        <h3>E-mail</h3>
                    </div>
                    <div className="contactEmailAdress">
                        <h3> inspirebamboo@gmail.com</h3>
                    </div>

                    <div>
                        <h3 className="textSocials">Acompanhe nossas redes</h3>
                    </div>
                    <div className="socials">
                        <FacebookLogo size={30} color="#035158" weight="regular" />
                        <InstagramLogo size={30} color="#035158" weight="regular" />
                        <TiktokLogo size={30} color="#035158" weight="regular" />

                        <button className="buttonsSocials">
                            <a href="https://wa.link/phle4n">
                                <WhatsappLogo size={30} color="#035158" weight="regular" />
                            </a>
                        </button>

                    </div>

                </div>

                <div className="boxInfo">
                    <h2>LIGAMOS PARA VOCÊ!</h2>

                    <input className="boxInfoName" type="name"
                        name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Digite seu Nome *"></input>

                    <input className="boxInfoTelephone" type="telefone"
                        name="telefone" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        placeholder="Digite seu Telefone *"></input>

                    <input className="boxInfoEmail" type="email"
                        name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Digite seu E-mail "></input>

                    <textarea className="boxInfoMessage"
                        name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Conte-nos brevemente sua necessidade. *"></textarea>

                    <button onClick={handleSendEmails} className="buttonBoxInfo">Enviar</button>


                </div>

            </div>

        </div >
    )
}
