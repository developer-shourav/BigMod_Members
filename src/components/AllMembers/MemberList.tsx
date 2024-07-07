
import { FaLinkedin, FaFacebook, FaGithub, FaWhatsapp } from 'react-icons/fa';

type Member = {
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

const initialMembers: Member[] = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Frontend Developer',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    linkedin: 'https://linkedin.com/in/johndoe',
    facebook: 'https://facebook.com/johndoe',
    github: 'https://github.com/johndoe',
    whatsapp: 'https://wa.me/1234567890',
    image: 'https://i.ibb.co/dQk4R8Q/author3.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: "Full Stack Developer",
    email: 'jane.smith@example.com',
    phone: '+0987654321',
    linkedin: 'https://linkedin.com/in/janesmith',
    facebook: 'https://facebook.com/janesmith',
    github: 'https://github.com/janesmith',
    whatsapp: 'https://wa.me/0987654321',
    image: 'https://i.ibb.co/PMP1Cz7/author2.png',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    designation: 'UX/UI Designer',
    email: 'alice.johnson@example.com',
    phone: '+1122334455',
    linkedin: 'https://linkedin.com/in/alicejohnson',
    facebook: 'https://facebook.com/alicejohnson',
    github: 'https://github.com/alicejohnson',
    whatsapp: 'https://wa.me/1122334455',
    image: 'https://i.ibb.co/0yRD7H6/author1.png',
  },
];

const MemberList = () => {
  return (
    <div id="addMember" className="my-16">
      <div className="grid md:grid-cols-4 gap-8">


        {/* -------------- Add Member Component ------------- */}

         <div className="bg-white rounded-xl shadow-lg border-[2px] border-dashed border-red-400 flex justify-center items-center cursor-pointer">
           <div className='cmn-btn'>
             <button><span className='text-2xl'>+</span> Add</button>
           </div>
            
          </div>

        {initialMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl relative">

            <div className="bg-custom-gradient p-4 rounded-t-xl flex justify-center">
              <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full border-4 border-white -mt-12" />
            </div>


            <div className="p-6 text-center">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p className="text-gray-500">{member.designation}</p>
              <p className="text-gray-500 mt-2">{member.email}</p>


              <div className="flex justify-center space-x-4 mt-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-red-600 hover:text-red-700 hover:rotate-[360deg] duration-1000 hover:scale-125 " size={24} />
                </a>
                <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-red-600 hover:text-red-700 hover:rotate-[360deg] duration-1000 hover:scale-125 " size={24} />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-red-600 hover:text-red-700 hover:rotate-[360deg] duration-1000 hover:scale-125 " size={24} />
                </a>
                <a href={member.whatsapp} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-red-600 hover:text-red-700 hover:rotate-[360deg] duration-1000 hover:scale-125 " size={24} />
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberList;
