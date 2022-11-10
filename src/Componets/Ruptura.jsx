function Ruptura (props){
    return(
        <div>
            <h1>{props.nome}</h1>
            <p>{props.about}</p>
            <img src={props.imagem}/>
        </div>
    )
}
export default Ruptura