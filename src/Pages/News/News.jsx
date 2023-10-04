import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";




const News = () => {
  const {id } =useParams()
    return (
        <div>
            
            <Header></Header>
            <div className="grid grid-cols-1  md:grid-cols-4">
                <div className="col-span-3">
               <p>{id}</p>
                </div>
                <div>
                   <LeftSideNav></LeftSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;