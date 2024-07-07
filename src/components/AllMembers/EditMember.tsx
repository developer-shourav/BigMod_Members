import { FaEdit } from "react-icons/fa";
import { Fragment, useState, ChangeEvent, FormEvent } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { MemberCardProps } from "../Card/MemberCard/MemberCard";

const EditMember = ({ memberInfo }: MemberCardProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formValues, setFormValues] = useState({
    image: memberInfo.image,
    name: memberInfo.name,
    designation: memberInfo.designation,
    phone: memberInfo.phone,
    email: memberInfo.email,
    linkedin: memberInfo.linkedin,
    facebook: memberInfo.facebook,
    github: memberInfo.github,
    whatsapp: memberInfo.whatsapp,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleEditMemberSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formValues);
    setIsOpenModal(false);
  };

  return (
    <>
      <FaEdit
        onClick={() => setIsOpenModal(true)}
        className="text-[14px] md:text-[16px] lg:text-xl cursor-pointer text-white hover:text-gray-200"
        title="Edit Member"
      />
      <Transition appear show={isOpenModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpenModal(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[33rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-2xl mb-4 font-bold leading-6 text-gray-900">
                    <div className="flex justify-between items-center">
                      <p>Update info</p>
                      <span onClick={() => setIsOpenModal(false)} className="border-none">
                        <IoMdClose className="border-none text-red-500 text-2xl" />
                      </span>
                    </div>
                  </Dialog.Title>
                  {/* Form -----------------------------------------------------------*/}
                  <form onSubmit={handleEditMemberSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-bold" htmlFor="name">
                          Name
                        </label>
                        <br />
                        <input
                          type="text"
                          className="w-full mt-2 bg-[#E9EDF4] p-1 lg:p-2 rounded-lg"
                          placeholder="Your Name"
                          name="name"
                          value={formValues.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="font-bold" htmlFor="image">
                          Image URL
                        </label>
                        <br />
                        <input
                          type="text"
                          className="w-full mt-2 bg-[#E9EDF4] p-1 lg:p-2 rounded-lg"
                          placeholder="Image URL"
                          name="image"
                          value={formValues.image}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="font-bold" htmlFor="designation">
                          Designation
                        </label>
                        <br />
                        <input
                          type="text"
                          className="w-full mt-2 bg-[#E9EDF4] p-1 lg:p-2 rounded-lg"
                          placeholder="Designation"
                          name="designation"
                          value={formValues.designation}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="font-bold" htmlFor="phone">
                          Phone
                        </label>
                        <br />
                        <input
                          type="text"
                          className="w-full mt-2 bg-[#E9EDF4] p-1 lg:p-2 rounded-lg"
                          placeholder="Phone"
                          name="phone"
                          value={formValues.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="font-bold" htmlFor="email">
                          Email
                        </label>
                        <br />
                        <input
                          type="text"
                          className="w-full mt-2 bg-[#E9EDF4] p-1 lg:p-2 rounded-lg"
                          placeholder="Email"
                          name="email"
                          value={formValues.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="font-bold" htmlFor="linkedin">
                          Linkedin
                        </label>
                        <br />
                        <input
                          type="url"
                          className="w-full mt-2 bg-[#E9EDF4] p-1 lg:p-2 rounded-lg"
                          placeholder="LinkedIn"
                          name="linkedin"
                          value={formValues.linkedin}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="font-bold" htmlFor="facebook">
                          Facebook
                        </label>
                        <br />
                        <input
                          type="url"
                          className="w-full mt-2 bg-[#E9EDF4] p-1 lg:p-2 rounded-lg"
                          placeholder="Facebook"
                          name="facebook"
                          value={formValues.facebook}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="font-bold" htmlFor="github">
                          Github
                        </label>
                        <br />
                        <input
                          type="url"
                          className="w-full mt-2 bg-[#E9EDF4] p-1 lg:p-2 rounded-lg"
                          placeholder="Github"
                          name="github"
                          value={formValues.github}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="font-bold" htmlFor="whatsapp">
                          Whatsapp
                        </label>
                        <br />
                        <input
                          type="text"
                          className="w-full mt-2 bg-[#E9EDF4] p-1 lg:p-2 rounded-lg"
                          placeholder="WhatsApp"
                          name="whatsapp"
                          value={formValues.whatsapp}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="mt-7 ms-4">
                      <button type="submit" className="btn btn-sm md:btn-md">
                        Update Profile
                      </button>
                    </div>
                  </form>
                  {/* Form --------------------------------------------------- */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      
    </>
  );
};
export default EditMember;
