export default function Sidebar(props){
    const {handleToggleModal, data} = props
    return(
        <div className ="sidebar">
            <div onClick = {handleToggleModal} className = "Boverlay"></div>
                <div className = "sideBarContents">
                    <h2>{data?.title}</h2>
                        <div className = "description">
                            <p className = "title" >Date: {data?.date}</p>
                            <p>{data?.explanation}</p>
                        </div>
                    <button onClick = {handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
        </div>
    )
}