import { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { TableView } from "../../components/TableView";
import { TableContainer } from "./styles";
import { getTeams } from "../../models/Team";

const Teams = () => {

  // Estado para guardar los equipos
  const [teams, setTeams] = useState([]);
  // Estado para la barra de búsqueda
  const [searchValue, setSearchValue] = useState("");

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
  }

  const mapTeams = () => {
    const filteredTeams = teams.filter((team: any) =>
      team.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return filteredTeams.map((team: any) => {
      return {
        id: team.id,
        nameTeam: team.name,
        numberMembers: team.members.length,
        details: team.members.map((member: any) => {
          return {
            nameMember: member.name,
            campus: member.campus,
            semester: member.semester,
          }
        })
      }
    })
  }

  useEffect(() => {
    getAllTeams();
    console.log(teams);
  }, [])

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
