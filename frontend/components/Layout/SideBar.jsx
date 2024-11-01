import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { ScrollShadow } from "@nextui-org/react";

const SideBar = ({ estaAbierto }) => {
    const [desplegarCategorias, setDesplegarCategorias] = useState(false);
    const [desplegarSubcategorias, setDesplegarSubcategorias] = useState(0);
    const [desplegarGestiones, setDesplegarGestiones] = useState(false);
    const [desplegarPedidos, setDesplegarPedidos] = useState(false);

    const accionarDespCategorias = () => {
        setDesplegarCategorias(!desplegarCategorias);
    }

    const accionarDespSubcategorias = (numSubcategoria) => {
        const nuevoEstadoSubcategoria = desplegarSubcategorias === numSubcategoria ? 0 : numSubcategoria;
        setDesplegarSubcategorias(nuevoEstadoSubcategoria);
    }

    const accionarDespGestiones = () => {
        setDesplegarGestiones(!desplegarGestiones);
    }

    const accionarDespPedidos = () => {
        setDesplegarPedidos(!desplegarPedidos);
    }

    //esto esta estatico pero luego se cambia
    const categorias = [
        {
            idCategoria: 1,
            nombre: "Galletas",
            subcategoria: [
                { idSubcategoria: 7, nombre: "Alfajores" },
                { idSubcategoria: 4, nombre: "Canastita" },
                { idSubcategoria: 4, nombre: "Chispas de choco..." },
                { idSubcategoria: 4, nombre: "Personalizadas" }
            ]
        },
        {
            idCategoria: 2,
            nombre: "Panes",
            subcategoria: [
                { idSubcategoria: 2, nombre: "Casero" },
                { idSubcategoria: 3, nombre: "Gatos" },
                { idSubcategoria: 3, nombre: "Rollos de crema" },
                { idSubcategoria: 3, nombre: "Rollos de canela" },
            ]
        },
        {
            idCategoria: 3,
            nombre: "Queques",
            subcategoria: [
                { idSubcategoria: 2, nombre: "Seco" },
                { idSubcategoria: 3, nombre: "Tradicional" },
                { idSubcategoria: 3, nombre: "Chocolate" },
                { idSubcategoria: 3, nombre: "Tres leches" },
                { idSubcategoria: 3, nombre: "Torta fría" },
                { idSubcategoria: 3, nombre: "Brownies" }
            ]
        },
        {
            idCategoria: 4,
            nombre: "Bocadillos",
            subcategoria: [
                { idSubcategoria: 2, nombre: "Rollos de salchi..." },
                { idSubcategoria: 3, nombre: "Canastas de atún" },
                { idSubcategoria: 3, nombre: "Empanaditas" },
                { idSubcategoria: 3, nombre: "Mini flautas" },
                { idSubcategoria: 3, nombre: "Pañuelos" },
                { idSubcategoria: 3, nombre: "Mini donas" }
            ]
        }
    ];

    const estados = [
        {
            idEstado: 1,
            nombre: "P. Revisión"
        },
        {
            idEstado: 2,
            nombre: "Aceptado"
        },
        {
            idEstado: 3,
            nombre: "Rechazado"
        },
        {
            idEstado: 4,
            nombre: "P. Pago"
        },
        {
            idEstado: 5,
            nombre: "Anticipo"
        },
        {
            idEstado: 6,
            nombre: "Pagado"
        },
        {
            idEstado: 7,
            nombre: "Terminado"
        }
    ]

    return (
        <div
            className={`bg-secundario absolute top-38 left-0 h-[700px] z-40 shadow-lg 
            ${estaAbierto ? 'translate-x-0' : '-translate-x-full'} 
            transition-transform duration-300 ease-in-out w-38 lg:w-48`}
        >

            <div className="p-4 overflow-y-auto h-full mt-3 scroll">
                <div className="flex flex-col justify-start gap-2">
                    <Link href={"/"} className="bg-btnSideBar1 text-md shadow-md rounded-full h-[34px] flex justify-center hover:bg-btnSideBar2">
                        <div className="mt-1.5">
                            Productos
                        </div>
                    </Link>
                    <Button radius="full" size="sm" className="bg-btnSideBar1 text-md shadow-md" onClick={accionarDespCategorias}>
                        Categorias
                    </Button>
                    {desplegarCategorias && (
                        <div className="gap-2 flex justify-start flex-col">
                            {categorias.map((categoria) => (
                                <div key={categoria.idCategoria} className="gap-2 flex justify-start flex-col">
                                    <Button fullWidth radius="full" size="sm" className="bg-btnSideBar2 text-md shadow-md" onClick={() => accionarDespSubcategorias(categoria.idCategoria)}>
                                        {categoria.nombre}
                                    </Button>
                                    {desplegarSubcategorias === categoria.idCategoria && (
                                        <div className="gap-2 flex justify-start flex-col"> {/* Agrega un margen para anidar mejor */}
                                            {categoria.subcategoria.map((sub) => (
                                                <Button href={"/categoria-productos"} as={Link} key={sub.idSubcategoria} fullWidth radius="full" size="sm" className="bg-btnSideBar3 text-md shadow-md">
                                                    {sub.nombre}
                                                </Button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    <Button fullWidth radius="full" size="sm" className="bg-btnSideBar1 text-md shadow-md" onClick={accionarDespGestiones}>
                        Gestiones
                    </Button>
                    {desplegarGestiones && (
                        <div className="gap-2 flex justify-start flex-col">
                            <Link href={"/gestion-producto"} className="bg-btnSideBar2 text-md shadow-md rounded-full h-[34px] flex justify-center hover:bg-secundario">
                                <div className="mt-1.5">
                                    Productos
                                </div>
                            </Link>
                            <Link href={"/gestion-categoria"} className="bg-btnSideBar2 text-md shadow-md rounded-full h-[34px] flex justify-center  hover:bg-secundario">
                                <div className="mt-1.5">
                                    Categorias
                                </div>
                            </Link>
                            <Link href={"/gestion-subcategoria"} className="bg-btnSideBar2 text-md shadow-md rounded-full h-[34px] flex justify-center  hover:bg-secundario">
                                <div className="mt-1.5">
                                    Subcategorias
                                </div>
                            </Link>
                        </div>
                    )}

                    <Button fullWidth radius="full" size="sm" className="bg-btnSideBar1 text-md shadow-md" onClick={accionarDespPedidos}>
                        Pedidos
                    </Button>
                    {desplegarPedidos && (
                        <div className="gap-2 flex justify-start flex-col">
                            {estados.map((estado) => (
                                <div key={estado.idEstado} className="gap-2 flex justify-start flex-col">
                                    <Button href={"/gestion-aceptado"} as={Link} fullWidth radius="full" size="sm" className="bg-btnSideBar2 text-md shadow-md">
                                        {estado.nombre}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                    <Button href={"/mis-pedidos"}
                        as={Link}
                        fullWidth radius="full"
                        size="sm"
                        className="bg-btnSideBar1 text-md shadow-md">
                        Mis pedidos
                    </Button>
                    <Button
                        fullWidth radius="full"
                        size="sm"
                        className="bg-btnSideBar1 text-md shadow-md">
                        Informe
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;


