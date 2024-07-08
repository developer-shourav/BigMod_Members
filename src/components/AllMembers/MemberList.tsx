import { useEffect, useState } from "react";
import MemberCard from "../Card/MemberCard/MemberCard";
import AddMember from "./AddMember";

export type MemberInfoType = {
  id: number;
  name: string;
  designation: string;
  email: string;
  phone: string;
  linkedin: string;
  facebook: string;
  github: string;
  whatsapp: string;
  image: string;
};

const initialMembers: MemberInfoType[] = [
  {
    id: 1111,
    name: "John Doe",
    designation: "Frontend Developer",
    email: "john.doe@example.com",
    phone: "+1234567890",
    linkedin: "https://linkedin.com/in/johndoe",
    facebook: "https://facebook.com/johndoe",
    github: "https://github.com/johndoe",
    whatsapp: "https://wa.me/1234567890",
    image: "https://i.ibb.co/dQk4R8Q/author3.png",
  },
  {
    id: 2222,
    name: "Jane Smith",
    designation: "Full Stack Developer",
    email: "jane.smith@example.com",
    phone: "+0987654321",
    linkedin: "https://linkedin.com/in/janesmith",
    facebook: "https://facebook.com/janesmith",
    github: "https://github.com/janesmith",
    whatsapp: "https://wa.me/0987654321",
    image: "https://i.ibb.co/PMP1Cz7/author2.png",
  },
  {
    id: 3333,
    name: "Alice Johnson",
    designation: "UX/UI Designer",
    email: "alice.johnson@example.com",
    phone: "+1122334455",
    linkedin: "https://linkedin.com/in/alicejohnson",
    facebook: "https://facebook.com/alicejohnson",
    github: "https://github.com/alicejohnson",
    whatsapp: "https://wa.me/1122334455",
    image: "https://i.ibb.co/0yRD7H6/author1.png",
  },
];

const MemberList = () => {
  const [membersList, setMembersList] = useState<MemberInfoType[]>([]);

  useEffect(() => {
    /* -----Checking Members Data available or not ----*/
    const storedMembers = localStorage.getItem("membersInfoList");
    if (storedMembers) {
      setMembersList(JSON.parse(storedMembers));
    } else {
      localStorage.setItem("membersInfoList", JSON.stringify(initialMembers));
      setMembersList(initialMembers);
    }
  }, []);

  /* -----------Add a new Member------------ */
  const addMember = (newMember: MemberInfoType) => {
    const updatedMembers = [...membersList, newMember];
    setMembersList(updatedMembers);
    localStorage.setItem("membersInfoList", JSON.stringify(updatedMembers));
  };

  return (
    <div id="addMember" className="my-16">
      <div className="grid md:grid-cols-4 gap-x-8 gap-y-[70px]">
        {/* -------------- Add Member Component ------------- */}
        <AddMember addMember={addMember} />

        {/* -----------------All Members ------------------ */}
        {membersList.map((member) => (
          <MemberCard key={member.id} memberInfo={member} />
        ))}
      </div>
    </div>
  );
};

export default MemberList;
