import { FormEdit } from "../../styles/main";
import Modal from "../Modal";
import { useContext } from "react";
import { ModalContext } from "../../contexts/modal";
import { PeopleContext } from "../../contexts/people";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface iRegisterPeople {
  id: number;
  name: string;
}
const FormEditPeople = () => {
  const { set_modal_edit } = useContext(ModalContext);
  const { peopleDatabase, idToEdit, edit_people, delete_people } =
    useContext(PeopleContext);

  const PeopleSchema = yup.object().shape({
    name: yup.string().required("Insert a name here"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterPeople>({ resolver: yupResolver(PeopleSchema) });

  const peopleToEdit = peopleDatabase.filter((person) => {
    return person.id === idToEdit;
  });

  const submit = (data: iRegisterPeople) => {
    edit_people(data);
    set_modal_edit();
  };

  return (
    <Modal>
      <FormEdit onSubmit={handleSubmit(submit)}>
        <div>
          <button
            onClick={() => {
              set_modal_edit();
            }}
          >
            X
          </button>
        </div>
        <label>Name</label>
        <input
          placeholder="Insert Name Here"
          defaultValue={peopleToEdit[0].name}
          {...register("name")}
        />
        <button type="submit">Save/</button>
        <button
          onClick={() => {
            set_modal_edit();
            delete_people(idToEdit);
          }}
        >
          Delete/
        </button>
      </FormEdit>
    </Modal>
  );
};

export default FormEditPeople;
