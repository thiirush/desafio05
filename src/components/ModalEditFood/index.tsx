import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { FormHandles } from "@unform/core";

interface ModalEditFoodProps {
  editModalOpen?: boolean;
  setIsOpen: () => void;
  isOpen: boolean;
  editingFood: FoodProps | any;
  handleUpdateFood: (data: FoodProps) => void;
}

interface FoodProps {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export function ModalEditFood({
  isOpen,
  editingFood,
  setIsOpen,
  handleUpdateFood,
}: ModalEditFoodProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: FoodProps) => {
    handleUpdateFood({
      ...data,
      id: editingFood.id,
    });
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
export default ModalEditFood;
