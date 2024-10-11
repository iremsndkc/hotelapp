import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deletePLace } from "../../api";
import { toast } from "react-toastify";

const Buttons = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: () => deletePLace(id as string),

    onSuccess: () => {
      toast.info("Hotel akıştan kaldırıldı.");
      navigate("/");
    },

    onError: () => {
      toast.error("Üzgünüz bir sorun oluştu");
    },
  });
  return (
    <div className="flex justify-between mb-5">
      <Link
        className="flex items-center gap-2 border py-1 px-3 rounded-md transition hover:bg-gray-200 hover:shadow"
        to={".."}
      >
        <MdKeyboardArrowLeft />
        Geri
      </Link>

      <button
        onClick={() => mutate()}
        disabled={isPending}
        className="flex items-center gap-2 border py-1 px-3 rounded-md transition hover:bg-red-400 hover:shadow"
      >
        <FaRegTrashAlt />
        Sil
      </button>
    </div>
  );
};

export default Buttons;
