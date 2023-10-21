export interface TeamTableProps {
    columns: Column[];
    rows: Data[];
}

export interface Column {
    id: string;
    label: string;
    format?: (value: number) => string;
}

export interface Data {
    [key: string]: any;
}
