import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobsCard = () => {
    return (
        <div className="container mx-auto my-20 space-y-10">
            <h1 className="text-3xl md:text-4xl font-black text-white text-center">Newest <span className="text-[#A582F7]">Jobs</span> for You</h1>
            <p className="md:text-xl text-center text-white">Get the fastest application so that your name is above other application</p>

<div className='mx-auto'>
<Tabs className="  text-white">
    <TabList className=" mx-auto max-w-lg">
      <Tab>All Recent</Tab>
      <Tab>On Site Job</Tab>
      <Tab>Remote Job</Tab>
      <Tab>Hybrid</Tab>
      <Tab>Part Time</Tab>
    </TabList>

    <TabPanel>
      <h2 className='mt-3'>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 5</h2>
    </TabPanel>
  </Tabs>
</div>

        </div>
    );
};

export default JobsCard;