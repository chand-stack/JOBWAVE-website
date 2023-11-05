import Add from "../../Shared/Add";
import Banner from "../../Shared/Banner";
import Companies from "../../Shared/Companies";
import JobPost from "../../Shared/JobPost";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <Add></Add>
          <Companies></Companies>
          <JobPost></JobPost>
        </div>
    );
};

export default Home;