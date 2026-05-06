import { memo } from "react";

function Card({ politico }) {
    return (
        <>
            {console.log("card")}
            < li >

                <div className="card mt-2" style={{ width: "18rem" }}>
                    <img src={politico.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{politico.name}</h5>
                        <p className="card-text">{politico.position}</p>
                        <p className="card-text">{politico.biography}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </li >

        </>


    )
}

export default memo(Card);