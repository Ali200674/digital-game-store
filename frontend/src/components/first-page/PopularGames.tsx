import cover from "../../../public/elden-ring-cover.jpg";


function PopularGames() {
    return (
        <section className = "popular-games-section">
            <div className="popular-games-section-header">
                <h2>Popular Games</h2>
                <span>View All</span>
            </div>

            <div className="popular-games-body">
                <div className="popular-game-card">
                    <img src={cover} alt=""/>
                    <div>
                        <span>$59.99</span>
                    </div>
                </div>
                <div className="popular-game-card">
                    <img src={cover} alt=""/>
                    <div>
                        <span>$59.99</span>
                    </div>
                </div>
                <div className="popular-game-card">
                    <img src={cover} alt=""/>
                    <div>
                        <span>$59.99</span>
                    </div>
                </div>
                <div className="popular-game-card">
                    <img src={cover} alt=""/>
                    <div>
                        <span>$59.99</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularGames;