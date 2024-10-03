export default function Main(props){
    const {data} = props
    return (
        <div className = "imgContain">
            <img src = {data.hdurl} alt = {data.title || "coolart"}
            className = "Bimage"/>
        </div>
    )
}