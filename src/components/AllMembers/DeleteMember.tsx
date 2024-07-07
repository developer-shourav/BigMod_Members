import { FaTrash } from "react-icons/fa";
type DeleteMemberProps = {
  memberId: number;
};
const DeleteMember = ({ memberId }: DeleteMemberProps) => {
  return (
    <div>
      <FaTrash
        title="Delete Member"
        className="text-white hover:text-gray-200 cursor-pointer"
        size={20}
        onClick={(): void => console.log(memberId)}
      />
    </div>
  );
};

export default DeleteMember;
