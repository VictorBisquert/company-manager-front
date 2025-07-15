import type React from "react";
import { DataTableRowProps } from "../../../types/tableTypes";

const DataTableRow: React.FC<DataTableRowProps> = ({
    rowData,
    rowIndex,
    onRowClick,
    isSelected,
}) => {

    return (
        <tr onClick={(event) => onRowClick(event, rowIndex)}>
            
        </tr>
    );
};

export default DataTableRow;