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
import { Item, TableViewProps } from "./types";
import { DetailContent } from "./styles";

const TableView: React.FC<TableViewProps> = ({ items }) => {
  const [openRow, setOpenRow] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    if (openRow === id) {
      setOpenRow(null);
    } else {
      setOpenRow(id);
    }
  };

  return (
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
              <TableCell>{item.numberMembers}/4</TableCell>
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
  );
};

export default TableView;
