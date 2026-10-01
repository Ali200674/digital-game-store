import cover from "../../../public/eldern-ring-cover.jpg";

function Features() {
    return (
        <section className = "featured-game-body">
            <div className = "featured-game-body-title">
                <h2>Featured Game</h2>
            </div>
            <div className = "featured-game">
                <div className="img-container">
                    <img src={cover} alt="eldern-ring-cover" />
                </div>
                <div className="featured-game-description-body">
                    <div className="featured-game-description-one">
                        <h2>Elden Ring</h2>
                        <span>Positive</span>
                    </div>
                    <div className="featured-game-description-two">
                        <span>&#11088; 4.8 / 5.0</span>
                    </div>
                    <p>Action &bull; Open World</p>
                    <p>February 25, 2022</p>
                    <p>Description</p>
                    <div className="featured-game-description-three">
                        <span>$59.99</span>
                    </div>
                    <span className = "view-game-details">View Details</span>
                </div>
            </div>
        </section>
    )
}

export default Features;