import { useState } from "react";

function Card({id, name, info, image, price, removeTour}){
    const [readmore, setreadmore] = useState(false);
    const description = readmore? info:`${info.substring(0,200)}....`
     
    function readmorehandler(){
        setreadmore(!readmore);
    }

    return(
        <div className="card">
            <img src={image} className="image" />
            <div className="tour-info">
                <div className="tour-details">
                    <h2 className="tour-name">{name}</h2>
                    <h2 className="tour-price">₹ {price}</h2>
                </div>
                <div className="description" onClick={readmorehandler}>
                    {description}
                    <span className="readmore">
                        {readmore? `show more`:`read more`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={()=>removeTour(id)}>
            Not Interested
            </button>
        </div>
    );

}

export default Card;
