import { createRef, useState } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import { Modal } from "../Modal";
import Input from "../Input";

interface ModalAddFoodProps {
  handleAddFood: () => void;
}

interface FoodProps {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export function ModalAddFood({ handleAddFood }: ModalAddFoodProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const formRef = createRef();

  const handleSubmit = async (data: FoodProps) => {
    handleAddFood(data);
    setIsOpenModal(isOpenModal);
  };

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <Modal isOpen={isOpenModal} setIsOpen={handleModal}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        {/* <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" /> */}
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
export default ModalAddFood;
