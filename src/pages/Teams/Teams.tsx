import { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { TableView } from "../../components/TableView";
import { TableContainer } from "./styles";
import { Member, MyTeamType, getTeams } from "../../models/Team";
import { CircularProgress } from "@mui/material";
import { DetailItem, Item } from "../../components/TableView/types";

const Teams = () => {

  // Estado para guardar los equipos
  const [teams, setTeams] = useState([]);
  // Estado para la barra de búsqueda
  const [searchValue, setSearchValue] = useState("");

  // Loading
  const [loading, setLoading] = useState(true);

  const getAllTeams = () => {
    // Llamar al endpoint para obtener todos los equipos
    getTeams().then(
      (res) => {
        console.log(res.data);
        setTeams(res.data);
      }
    ).catch((err) => {
      console.log(err);
    }
    );
    setLoading(false);
  }

  const mapTeams = () => {
    const filteredTeams = teams.filter((team: MyTeamType) =>
      team.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return filteredTeams.map((team: MyTeamType) => {
      return {
        id: team.id,
        nameTeam: team.name,
        numberMembers: team.members.length,
        details: team.members.map((member: Member) => {
          return {
            nameMember: member.name,
            campus: member.campus,
            semester: member.semester.toString(),
          } as DetailItem
        })
      }
    });
  }

  useEffect(() => {
    getAllTeams();
    console.log(teams);
  }, [])

  if(loading) return (
    <CircularProgress />
  )

  return (
    <div>
      <SearchBar
        label="Buscar equipo"
        searchClick={() => { }}
        title="Equipos"
        btnText="Crear equipo"
        btnHandler={() => { }}
        barType="normal"
        clearStateText={() => { setSearchValue("") }}
      />

      <TableContainer>
        <TableView
          items={mapTeams()}
        />
      </TableContainer>
    </div>
  );
};

export default Teams;
