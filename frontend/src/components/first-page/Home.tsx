import Header from "./Header.tsx";
import Features from "./FeaturedGame.tsx";

import "../../styles/home.css"

function Home() {
    return (
        <>
            <Header/>
            <main>
                <Features/>
            </main>
        </>
    )
}

export default Home