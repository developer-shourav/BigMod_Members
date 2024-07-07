import { MemberInfoType } from "../../AllMembers/MemberList";
import { FaLinkedin, FaFacebook, FaGithub, FaWhatsapp, FaTrash } from "react-icons/fa";
import { useState } from "react";
import EditMember from "../../AllMembers/EditMember";

export type MemberCardProps = {
  memberInfo: MemberInfoType;
};

const MemberCard = ({ memberInfo}: MemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const {image, name, designation, email, linkedin, facebook, github, whatsapp } = memberInfo;

  return (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-xl relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-custom-gradient p-4 rounded-t-xl flex justify-center">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 rounded-full border-4 border-white -mt-12"
        />
      </div>

      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500">{designation}</p>
        <p className="text-gray-500 mt-2">{email}</p>

        <div className="flex justify-center space-x-4 mt-4">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin
              className="text-red-600 hover:text-blue-700 hover:rotate-[360deg] duration-1000 hover:scale-125"
              size={24}
            />
          </a>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook
              className="text-red-600 hover:text-blue-600 hover:rotate-[360deg] duration-1000 hover:scale-125"
              size={24}
            />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub
              className="text-red-600 hover:text-gray-800 hover:rotate-[360deg] duration-1000 hover:scale-125"
              size={24}
            />
          </a>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp
              className="text-red-600 hover:text-green-600 hover:rotate-[360deg] duration-1000 hover:scale-125"
              size={24}
            />
          </a>
        </div>
      </div>

      {isHovered && (
        <div className="absolute top-4 right-4 flex space-x-2">
          <EditMember memberInfo={memberInfo} />

          <FaTrash
            title="Delete Member"
            className="text-white hover:text-gray-200 cursor-pointer"
            size={20}
          />
        </div>
      )}
    </div>
  );
};

export default MemberCard;
