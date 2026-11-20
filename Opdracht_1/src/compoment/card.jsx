import '../css/card.css'
function Card() {
    return (
        <>
            <div className="container">
                <div className="card col-md-4" >
                    <div className="card-header bg-primary">
                        Featured
                    </div>
                    <ul className="list-group list-group-flush  bg-secondary">
                        <li className="list-group-item">Cras justo odio</li>
                    </ul>
                </div>

                <div className="card col-md-4 bg-primary" >
                    <div className="card-header">
                        Featured
                    </div>
                    <ul className="list-group list-group-flush bg-secondary">
                        <li className="list-group-item">Cras justo odio</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card