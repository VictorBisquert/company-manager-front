import type React from "react";
import type { DataTableProps } from "../../types/tableTypes";

const DataTable: React.FC<DataTableProps> = ({
    headers = [],
    data = [],
    dataType = "",
    buttons = true,
}) => {


    return (
    <div>
        {data.map((item) => (
        <div className="rounded border p-2 shadow">
            <p className="font-bold">Nombre: {item.nombre}</p>
            <p>Dirección: {item.direccion}</p>
            <p>Teléfono: {item.telefono}</p>
        </div>
        ))}
    </div>

    );

}

export default DataTable;