import FirstGeneration from "../Component/FirstGeneration";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

const FirstGenerationPage = (() => {
    return (
        <>
        <Header />
        <FirstGeneration generationNumber = {1} />
        <Footer />
        </>
    )
})
export default FirstGenerationPage;