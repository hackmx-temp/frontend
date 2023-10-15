// TODO: Check name and compare to the api response

export interface DetailItem {
  nameMember: string;
  campus: string;
  semester: string;
}

export interface Item {
  id: number;
  nameTeam: string;
  numberMembers: number;
  details: DetailItem[];
}

export interface TableViewProps {
  items: Item[];
  rowsPerPage?: number; // Number of rows to display per page. Default is 10.
}
