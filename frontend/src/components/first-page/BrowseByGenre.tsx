import cover from "../../../public/elden-ring-cover.jpg";

function BrowseByGenre() {
    return (
        <section className="browse-by-genre-section">
            <div>
                <h2>Browse By Genre</h2>
            </div>
            <div className="genre-sections">
                <div className = "card">
                    <img src={cover} alt=""/>
                    <span>Action</span>
                </div>
                <div className = "card">
                    <img src={cover} alt=""/>
                    <span>Adventure Games</span>
                </div>
                <div className = "card">
                    <img src={cover} alt=""/>
                    <span>Casual Games</span>
                </div>
                <div className = "card">
                    <img src={cover} alt=""/>
                    <span>Casual</span>
                </div>
            </div>
        </section>
    )
}

export default BrowseByGenre;
