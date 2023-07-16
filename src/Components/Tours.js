import Card from "./Card"


function Tours ({tours, removeTour}) {
    return (
        <div className="container">
            <div className="title">Plan A Trip</div>
            <div className="cards">
                {
                    tours.map( (tour) => {
                        return <Card {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;

