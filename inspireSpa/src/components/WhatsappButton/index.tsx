import "./style.css"
import { WhatsappLogo } from "@phosphor-icons/react"

export const WhatsappButton = () => {

    return (
        <button className="whatsBtt"  > <a className="linkButtonWhatsapp" href="https://wa.link/phle4n">
            <WhatsappLogo className="logoWhats" size={50} color="#ECE5DD" weight="regular" />

        </a>
            <a href="https://wa.link/phle4n" className="btt">Agende seu horário </a>
        </button>
    )
}