import { Fragment, useState, ChangeEvent, FormEvent } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { generateRandomId } from "../../utility/generateRandomId";
import { MemberInfoType } from "./MemberList";
import Swal from "sweetalert2";

type AddMemberProps = {
  addMember: (newMember: MemberInfoType) => void;
};

const AddMember = ({ addMember }: AddMemberProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const initialFormValues = {
    name: "",
    designation: "",
    email: "",
    phone: "",
    linkedin: "",
    facebook: "",
    github: "",
    whatsapp: "",
    image: "",
  };
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAddMemberSubmit = (event: FormEvent) => {
    /* -------Prevent From's Default Behavior----- */
    event.preventDefault();
    /* ------ Generate Unique ID for New Member------*/
    const id: number = generateRandomId();
    const newMemberData: MemberInfoType = { id, ...formValues };
    addMember(newMemberData);
    /* ------Clear the form---------- */
    setFormValues(initialFormValues); 
    setIsOpenModal(false);

    /* ---------------Add Success Message------- */
    Swal.fire({
      title: 'Success!',
      text: 'Member has been added successfully.',
      icon: 'success',
      timer: 1800,
      confirmButtonText: 'OK'
    });
  };

  return (
    <>
      <div
        onClick={() => setIsOpenModal(true)}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl border-[2px] border-dashed border-red-400 flex justify-center items-center cursor-pointer min-h-[269px]"
      >
        <div className="cmn-btn">
          <button>
            <span className="text-2xl">+</span> Add
          </button>
        </div>
      </div>
      <Transition appear show={isOpenModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpenModal(false)}
        >
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
                  <Dialog.Title
                    as="h3"
                    className="text-2xl mb-4 font-bold leading-6 text-gray-900"
                  >
                    <div className="flex justify-between items-center">
                      <p>Add Member</p>
                      <span
                        onClick={() => setIsOpenModal(false)}
                        className="border-none"
                      >
                        <IoMdClose className="border-none text-red-500 text-2xl" />
                      </span>
                    </div>
                  </Dialog.Title>
                  <form onSubmit={handleAddMemberSubmit}>
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
                          required
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
                          required
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
                          required
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
                          required
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
                          placeholder="LinkedIn Link"
                          required
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
                          placeholder="Facebook Link"
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
                          placeholder="Github Link"
                          name="github"
                          required
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
                          placeholder="WhatsApp Number"
                          name="whatsapp"
                          value={formValues.whatsapp}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mt-8 ms-3">
                        <button type="submit" className="btn btn-sm md:btn-md">
                          Add Member
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddMember;
