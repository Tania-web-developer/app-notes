import "./totalNotes.css"

export default function TotalNotes(props){
    return(
        <div className = "total-container">
            <p>Total notes: {props.total}</p>
        </div>

    )
}