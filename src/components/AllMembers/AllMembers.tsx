import SectionTitle from "../Title/SectionTitle";
import MemberList from "./MemberList";

const AllMembers = () => {
    return (
       <div className="container mx-auto">
         <div className='py-10 w-11/12 mx-auto'>
            <SectionTitle firstLineText="Our Hero" lastLineText="Team Members" />

             <MemberList/>

        </div>
       </div>
    );
};

export default AllMembers;