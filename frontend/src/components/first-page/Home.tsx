import Header from "./Header.tsx";
import FeaturedGame from "./FeaturedGame.tsx";

import "../../styles/home.css"
import PopularGames from "./PopularGames.tsx";
import BrowseByGenre from "./BrowseByGenre.tsx";
import Footer from "./Footer.tsx";


function Home() {
    return (
        <>
            <Header/>
            <main>
                <FeaturedGame/>
                <PopularGames/>
                <BrowseByGenre/>

            </main>
            <Footer/>
        </>
    )
}

export default Home