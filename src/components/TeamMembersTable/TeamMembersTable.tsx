import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { TeamMembersTableProps } from './types'
import { CustomCell, CustomCellLabel, CustomRow } from './styles'

const TeamMembersTable: React.FC<TeamMembersTableProps> = ({
    columnNames,
    data
}) => {
    return (
        <Paper sx={{ width: '100%', margin: 'auto', overflow: 'hidden', fontSize: '16px', marginBottom: "30px" }}>
            <TableContainer sx={{ maxHeight: 600 }}>
                <Table size="small">
                    <TableHead>
                        <TableRow
                            sx={{
                                "borderBottom": "2px solid #E0E0E0",
                                "minWidth": "100%",
                            }}
                        >
                            {columnNames.map((columnName, idx) => (
                                <CustomCellLabel key={idx}>{columnName}</CustomCellLabel>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((data, idx) => (
                            <CustomRow key={idx}>
                                <CustomCell>{idx}</CustomCell>
                                <CustomCell>{data.name}</CustomCell>
                                <CustomCell>{data.email}</CustomCell>
                                <CustomCell>{data.campus}</CustomCell>
                                <CustomCell>{data.semester}</CustomCell>
                            </CustomRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default TeamMembersTable