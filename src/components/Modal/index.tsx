import { DivBackgroundModal } from "../../styles/modal";

interface iModal {
  children: React.ReactNode;
}

const Modal = ({ children }: iModal) => {
  return (
    <DivBackgroundModal>
      <div className="div_background_modal">{children}</div>
    </DivBackgroundModal>
  );
};

export default Modal;
