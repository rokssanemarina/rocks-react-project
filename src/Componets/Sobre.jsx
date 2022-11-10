function Sobre (props){
    return(
        <div>
            <h1>{props.nome}</h1>
            <p>{props.about}</p>
            <img className="icon"src={props.imagem}/>
            <p>{props.question}</p>
        </div>
    )
}
export default Sobre