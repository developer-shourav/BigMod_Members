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
    name: "Al Amin",
    designation: "Software Engineer",
    email: "almin.cont@gmail.com",
    phone: "+8801515620108",
    linkedin: "https://linkedin.com//in/alminal",
    facebook: "https://www.facebook.com/almin.cont",
    github: "https://github.com/alminAl",
    whatsapp: "https://wa.me/+8801515620108",
    image: "https://avatars.githubusercontent.com/u/68145918?v=4",
  },
  {
    id: 2222,
    name: "Sakal Sarkar",
    designation: "Full Stack Developer",
    email: "sakal.satkhira@gmail.com",
    phone: "+8801786533161",
    linkedin: "https://linkedin.com",
    facebook: "https://www.facebook.com/sakalbd.net/",
    github: "https://github.com/sakalbd",
    whatsapp: "https://wa.me/+8801786533161",
    image: "https://avatars.githubusercontent.com/u/76899487?v=4",
  },
  {
    id: 3333,
    name: "Shourav Rajbongshi",
    designation: "Fronted Developer",
    email: "developer.shourav1@gmail.com",
    phone: "+8801932376388",
    linkedin: "https://www.linkedin.com/in/developer-shourav",
    facebook: "https://www.facebook.com/developer.shourav",
    github: "https://github.com/developer-shourav",
    whatsapp: "https://wa.me/+8801932376388",
    image: "https://avatars.githubusercontent.com/u/85821015?v=4",
  },
];

const MemberList = () => {
  const [membersList, setMembersList] = useState<MemberInfoType[]>([]);

  useEffect(() => {
    /* -----Checking Members Data available or not ----*/
    const storedMembers = localStorage.getItem("membersInfoList");
    if (storedMembers) {
      const parsedMembers = JSON.parse(storedMembers);
      if (parsedMembers.length === 0) {
        localStorage.setItem("membersInfoList", JSON.stringify(initialMembers));
        setMembersList(initialMembers);
      } else {
        setMembersList(parsedMembers);
      }
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

  /* ----------Update Member Data --------------- */
  const updateMember = (updatedMember: MemberInfoType) => {
    const updatedMembersList = membersList.map((member) =>
      member.id === updatedMember.id ? updatedMember : member
    );
    setMembersList(updatedMembersList);
    localStorage.setItem("membersInfoList", JSON.stringify(updatedMembersList));
  };

  /* -----------Delete a new Member------------ */
  const deleteMember = (memberId: number) => {
    const updatedMembers = membersList.filter(member => member.id !== memberId);
    setMembersList(updatedMembers);
    localStorage.setItem("membersInfoList", JSON.stringify(updatedMembers));
  };

  return (
    <div id="addMember" className="my-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-[70px] mx-auto">
        {/* -------------- Add Member Component ------------- */}
        <AddMember addMember={addMember} />

        {/* -----------------All Members ------------------ */}
        {membersList.map((member) => (
          <MemberCard key={member.id}  memberInfo={member} updateMember={updateMember} onDelete={deleteMember} />
        ))}
      </div>
    </div>
  );
};

export default MemberList;
