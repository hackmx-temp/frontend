import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { TeamTableProps } from './types'
import { CustomCell, CustomCellLabel, CustomRow } from './styles'

const TeamTable: React.FC<TeamTableProps> = ({
    columns,
    rows,
}) => {
    return (
        <Paper sx={{ width: '100%', margin: 'auto', overflow: 'hidden', fontSize: '16px', marginBottom: "30px" }}>
            <TableContainer sx={{ maxHeight: 600 }}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <CustomCellLabel
                                    key={column.id}
                                >
                                    {column.label}
                                </CustomCellLabel>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => {
                            return (
                                <CustomRow role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <CustomCell key={column.id} align={"center"}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    :
                                                    <div style={{ whiteSpace: 'pre-line' }}>
                                                        {value}
                                                    </div>
                                                }
                                            </CustomCell>
                                        );
                                    })}
                                </CustomRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default TeamTable