import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

type DeleteMemberProps = {
  memberId: number;
  onDelete: (memberId: number) => void;
};

const DeleteMember = ({ memberId, onDelete }: DeleteMemberProps) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const membersList = JSON.parse(
          localStorage.getItem("membersInfoList") || "[]"
        );
        const updatedMembers = membersList.filter(
          (member: { id: number }) => member.id !== memberId
        );

        localStorage.setItem("membersInfoList", JSON.stringify(updatedMembers));
        onDelete(memberId);

        Swal.fire({
          title: "Deleted!",
          text: "Member has been deleted successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    });
  };

  return (
    <div>
      <FaTrash
        title="Delete Member"
        className="text-white hover:text-gray-200 cursor-pointer"
        size={20}
        onClick={handleDelete}
      />
    </div>
  );
};

export default DeleteMember;
