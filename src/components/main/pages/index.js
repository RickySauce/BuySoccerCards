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
import * as Account from './account'

//pages pipeline, should only be used to batch export pages in the pages folder
Home.route = '/'
AboutUs.route = '/about-us'
Reviews.route = '/reviews'
Blog.route = '/blog'
AllProducts.route = '/all-products'
RawSingleCards.route = '/raw-single-cards'
GradedSoccerCards.route = '/graded-soccer-cards'
HobbyBoxes.route = '/hobby-boxes'
ExpertGradingAdvice.route = '/expert-grading-advice'
TradingCardStands.route = '/trading-card-stands'

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
    Account
}