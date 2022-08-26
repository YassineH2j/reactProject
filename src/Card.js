const Card = function(props){
    return (
        <div className="col">
            <div className="card">
                <img src={props.courseName.src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.courseName.text}</h5>
                    <p className="card-text">{props.courseName.creator}</p>
                    <h5>{props.courseName.price}</h5>
                </div>
            </div>
        </div>
    )
}

export default Card;