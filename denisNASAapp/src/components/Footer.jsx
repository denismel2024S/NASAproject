export default function Footer(props){
    const {handleToggleModal, data} = props
    return (
        <footer>
            <div className = "Bgradient"></div>
            <div>
                <h2>{data?.title}</h2>
                <h1>Nasa Image Project</h1>
            </div>
            <button onClick = {handleToggleModal}>
                <i className="fa-sharp-duotone fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}