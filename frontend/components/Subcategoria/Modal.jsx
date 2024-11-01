import { Modal, ModalContent, Input, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useCallback } from "react";
import Swal from "sweetalert2";
import { Select, SelectItem } from "@nextui-org/react";

const ModalSubcategoria = ({ isOpen, onOpenChange }) => {
    const ventanaEditar = useCallback(() => {
        Swal.fire({
            icon: "success",
            title: "Subcategoría editada exitosamente",
            showConfirmButton: false,
            timer: 1000
        });
    }, []);

    const categorias = [
        {
            idCategoria: 1,
            nombre: "Queques",
        },
        {
            idCategoria: 2,
            nombre: "Galletas",
        },
        {
            idCategoria: 3,
            nombre: "Panes",
        },
        {
            idCategoria: 4,
            nombre: "Bocadillos",
        }
    ];

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <div className="p-4 mt-4">
                                    <h2 className="text-principal font-bold text-xl flex justify-center mb-8">Editar subcategoría</h2>
                                    <div className="w-full mt-6 flex justify-center">
                                        <div className="w-3/4">
                                            <Input type="text" radius="full" placeholder="Nombre" />
                                            <Select placeholder="Seleccione categoría" className="max-w-xs mt-4" radius="full">
                                                {categorias.map((categorias) => (
                                                    <SelectItem key={categorias.idCategoria} value={categorias.idCategoria}>
                                                        {categorias.nombre}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter className="flex justify-center">
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button onClick={ventanaEditar} color="danger" onPress={onClose}>
                                    Editar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
export default ModalSubcategoria;