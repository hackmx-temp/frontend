export interface TeamMembersTableProps {
    columnNames: string[]
    data: TeamMember[]
}

export interface TeamMember {
    id: string
    name: string
    email: string
    campus: string
    semester: string
}