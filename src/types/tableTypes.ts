//NOTE: Generamos el formato a recibir en las tablas o lo relacionado con ellas

//ejemplo de lo que recibe un datatable:
/*
export interface DataTableProps {
  headers: string[];
  data: Array<{ [key: string]: any }> | null;
  dataType?: string;
  buttons?: boolean;
}
*/
//ejemplo de lo que recibe un a row:
/*
export interface DataTableRowProps {
  rowData: Record<string, any>;
  rowIndex: number;
  onRowClick: (
    event: React.MouseEvent<HTMLTableRowElement>,
    rowIndex: number,
  ) => void;
  isSelected: boolean;
}
*/


export interface DataTableProps {
  headers: string[];
  data: Array<{ [key: string]: any }> | null;
  dataType?: string;
  buttons?: boolean;
}

export interface DataTableRowProps {
  rowData: Record<string, any>;
  rowIndex: number;
  onRowClick: (
    event: React.MouseEvent<HTMLTableRowElement>,
    rowIndex: number,
  ) => void;
  isSelected: boolean;
}