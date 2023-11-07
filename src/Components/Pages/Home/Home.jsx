import Add from "../../Shared/Add";
import Banner from "../../Shared/Banner";
import Companies from "../../Shared/Companies";
import Company from "../../Shared/Company";
import JobPost from "../../Shared/JobPost";
import JobsCard from "../../Shared/JobsCard";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <Add></Add>
          <Companies></Companies>
          <JobsCard></JobsCard>
          <Company></Company>
          <JobPost></JobPost>
        </div>
    );
};

export default Home;