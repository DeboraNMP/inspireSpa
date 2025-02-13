interface IProps {
    imagem: string,
    titulo: string,
    descricao: string,

}


export default function ServiceCard({ descricao, imagem, titulo }: IProps) {


    return (

        <div className="footSpa">
            <img className="footSpaPhoto" src={imagem} alt="Foto do Serviço" />
            <div>
                <h2 className="principalTextFootSpa">{titulo}</h2>
                <h4 className="introductoryTextFootSpa">

                    {descricao}
                </h4>
                <button className="buttonFootSpa">Saiba mais</button>
            </div>
        </div>

    )

}

