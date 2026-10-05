import Header from "./Header.tsx";
import FeaturedGame from "./FeaturedGame.tsx";

import "../../styles/home.css"
import PopularGames from "./PopularGames.tsx";

function Home() {
    return (
        <>
            <Header/>
            <main>
                <FeaturedGame/>
                <PopularGames/>
            </main>
        </>
    )
}

export default Home