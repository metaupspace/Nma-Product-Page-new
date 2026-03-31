// import BetaTesting from "./fragments/BetaTesting (old)"
// import ConverseAgenticUvp from "./fragments/ConverseAgenticUvp"
// import DigitalAgeWithAi from "./fragments/DigitalAgeWithAi"
import HeroSection from "./fragments/HeroSection"
import Overview from "./fragments/Overview"
// import ValueProposition from "./fragments/ValueProposition"
// import WhyUs from "./fragments/WhyUs (old)"
import LatestInsights from "./fragments/LatestInsights"
import WhyUsSection from "./fragments/WhyUsSection"
import BetaTestingProgram from "./fragments/BetaTestingProgram"

const HomePage = () => {

    return (
        <main>
            <HeroSection />
            <Overview />
            {/* <ValueProposition /> */}
            {/* <DigitalAgeWithAi /> */}
            {/* <ConverseAgenticUvp /> */}
            <WhyUsSection />
            <LatestInsights />
            <BetaTestingProgram />
        </main>
    )
}

export default HomePage