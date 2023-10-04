import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary"> Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
               <div className="mx-5">
               <Link> I can be a React component, multiple React components, or just some text.</Link>
               <Link> I can be a React component, multiple React components, or just some text.</Link>
               <Link> I can be a React component, multiple React components, or just some text.</Link>
               <Link> I can be a React component, multiple React components, or just some text.</Link>
               </div>
            </Marquee>
        </div>
    );
};

export default BreakingNews;