import React from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  onClick?: any;
}

const CloseModalBtn = ({ onClick }: Props) => {
  return (
    <button
      className="no-style-btn-modal btn"
      data-bs-dismiss="modal"
      type="button"
      onClick={() => onClick && onClick()}
    >
      <IoClose />
    </button>
  );
};

export default CloseModalBtn;
