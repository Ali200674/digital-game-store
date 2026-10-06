import Header from "./Header.tsx";
import FeaturedGame from "./FeaturedGame.tsx";

import "../../styles/home.css"
import PopularGames from "./PopularGames.tsx";
import BrowseByGenre from "./BrowseByGenre.tsx";

function Home() {
    return (
        <>
            <Header/>
            <main>
                <FeaturedGame/>
                <PopularGames/>
                <BrowseByGenre/>
            </main>
        </>
    )
}

export default Home