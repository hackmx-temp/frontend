import { SearchBar } from "../../components/SearchBar";
import { TableView } from "../../components/TableView";

const Teams = () => {
  return (
    <>
      <SearchBar
        label="Buscar equipo"
        searchClick={() => {}}
        title="Equipos"
        btnText="Crear equipo"
        btnHandler={() => {}}
        barType="normal"
        clearStateText={() => {}}
      />

      <TableView
        items={[
          {
            id: 1,
            nameTeam: "Equipo 1",
            numberMembers: 3,
            details: [
              { nameMember: "Clara", campus: "CCM", semester: "7" },
              { nameMember: "Sofía", campus: "CCM", semester: "7" },
              { nameMember: "Emiliano", campus: "CCM", semester: "7" },
            ],
          },
          {
            id: 2,
            nameTeam: "Equipo 2",
            numberMembers: 2,
            details: [
              { nameMember: "Col 1", campus: "CCM", semester: "7" },
              { nameMember: "Col 1", campus: "CCM", semester: "7" },
            ],
          },
        ]}
      />
    </>
  );
};

export default Teams;
