import AboutUs from "./about-us";
import AllProducts from "./all-products";
import Blog from "./blog";
import ExpertGradingAdvice from "./expert-grading-advice";
import GradedSoccerCards from "./graded-soccer-cards";
import HobbyBoxes from "./hobby-boxes";
import Home from "./home";
import RawSingleCards from "./raw-single-cards";
import Reviews from "./reviews";
import TradingCardStands from "./trading-card-stands";

//pages pipeline, should only be used to batch export pages in the pages folder
AboutUs.route = '/hello'


export {
    Home,
    AboutUs,
    Reviews,
    Blog,
    AllProducts,
    RawSingleCards,
    GradedSoccerCards,
    HobbyBoxes,
    ExpertGradingAdvice,
    TradingCardStands,
}