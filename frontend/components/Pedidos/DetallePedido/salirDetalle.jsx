import { Button } from "@nextui-org/react";
import { useCallback } from "react";
import Swal from "sweetalert2";
import Link from "next/link";

const SalirDetalle = ({ setMostrarTablaDetalles }) => {
    const salir = useCallback(() => {
        Swal.fire({
            icon: "success",
            title: "Saliendo de los detalles...",
            showConfirmButton: false,
            timer: 1000
        }).then(() => {
            setMostrarTablaDetalles(false); // Oculta la tabla de detalles
        });
    }, [setMostrarTablaDetalles]);

    return (
        <div className="flex justify-end">
        <Button href={"/gestion-aceptado"} as={Link} fullWidth radius="full" size="lg" className="bg-principal text-white flex justify-left text-2xs">
            Regresar
        </Button>
        </div>
    );
}

export default SalirDetalle;
