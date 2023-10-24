import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TablePagination from "@mui/material/TablePagination";
import { Item, TableViewProps } from "./types";
import { DetailContent } from "./styles";
import { createTeamRequest } from "../../models/Team";
import { ToastContainer, toast } from "react-toastify";

const TableView: React.FC<TableViewProps> = ({ items, rowsPerPage = 10 }) => {
  const [openRow, setOpenRow] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const handleJoinTeamRequest = () => {
    const initial = items[0].id;
    createTeamRequest(items[openRow as number - initial].nameTeam).then((res) => {
      toast.success("Solicitud enviada con éxito", {
        autoClose: 2000,
      });
    }).catch((err) => {
      toast.error(err.response.data.message, {
        autoClose: 2000,
      });
    });
  };

  const handleToggle = (id: number) => {
    if (openRow === id) {
      setOpenRow(null);
    } else {
      setOpenRow(id);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    setOpenRow(null); // Reset any expanded row
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPage(0); // Reset page on rows per page change
    setOpenRow(null); // Reset any expanded row
    rowsPerPage = parseInt(event.target.value, 10);
  };

  return (
    <>
      <ToastContainer />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre del equipo</TableCell>
            <TableCell>Número de participantes</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <React.Fragment key={item.id}>
              <TableRow>
                <TableCell>{item.nameTeam}</TableCell>
                <TableCell>{item.numberMembers}/5</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleToggle(item.id)}>
                    {openRow === item.id ? (
                      <ExpandMoreIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </IconButton>
                </TableCell>
              </TableRow>
              {openRow === item.id && (
                <TableRow>
                  <TableCell colSpan={3}>
                    <DetailContent>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Nombre del participante</TableCell>
                            <TableCell>Campus</TableCell>
                            <TableCell>Semestre</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {item.details.map((detail, idx) => (
                            <TableRow key={idx}>
                              <TableCell>{detail.nameMember}</TableCell>
                              <TableCell>{detail.campus}</TableCell>
                              <TableCell>{detail.semester}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </DetailContent>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginTop: "10px", float: "right" }}
                      onClick={handleJoinTeamRequest}
                    >
                      Unirse
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default TableView;
