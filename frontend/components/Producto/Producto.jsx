import FormularioProducto from "./FormularioProducto";
import TablaProducto from "./TablaProducto";
import ModalProducto from "./ModalProducto";
import { useDisclosure } from "@nextui-org/react";

const Producto = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="w-full flex flex-col justify-center lg:gap-10 gap-4">
      <div className="text-principal font-bold lg:text-3xl text-2xl flex justify-center mt-6">
        <h1>Producto</h1>
      </div>
      <div>
        <div className="flex-col lg:flex-row w-full flex justify-center lg:gap-24 gap-4">
          <div className="w-auto">
            <FormularioProducto />
            <TablaProducto onOpen={onOpen} />
          </div>
        </div>
      </div>
      <ModalProducto isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default Producto;
