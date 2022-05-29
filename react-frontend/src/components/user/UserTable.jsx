import React from "react";
import { TableContainer,Table,TableBody,TableRow,TableCell, TableHead, TablePagination, TableFooter} from "@material-ui/core";

const columns = ["Id", "Name", "Email", "Created", "Updated", "Role"];

const UserTableHead = ({ columns }) => {
    return (
        <TableHead>
            <TableRow>
            {columns.map(column => (
                <TableCell key={column}>
                    {column}
                </TableCell>
                )
            )}
            </TableRow>
        </TableHead>
    );
}

const UserTableRow = ({user}) => {
    return (
        user ? (
            <TableRow>          
                <TableCell>
                    {user.id}
                </TableCell>
                <TableCell>
                    {user.name}
                </TableCell>
                <TableCell>
                    {user.email}
                </TableCell>
                <TableCell>
                    {user.createdAt}
                </TableCell>
                <TableCell>
                    {user.updatedAt}
                </TableCell>
                <TableCell>
                    {user.role ? user.role.name : 'None'}
                </TableCell>
            </TableRow>
        ) :
        (
            <TableRow></TableRow>
        )
        
    );
}

const UserTable = ({ users, offset, limit, total, changeLimit, changePage }) => {
    return (
        users?.length > 0 ?
        (
            <TableContainer className="MuiTableContainer-root">
                <Table stickyHeader size="small">
                    <UserTableHead columns={columns}/>                                     
                    <TableBody>
                        {users.map(user => (
                            <UserTableRow user={user} key={user.id}/>
                        ))
                        }   
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                        <TablePagination 
                            rowsPerPageOptions={[5, 10, 25]} 
                            colSpan={columns.length} 
                            count={total} 
                            rowsPerPage={limit} 
                            page={offset} 
                            SelectProps={{native: true}} 
                            onRowsPerPageChange={changeLimit}
                            onPageChange={changePage}
                        />
                        </TableRow>
                    </TableFooter>
                </Table>                
            </TableContainer>
        ) :
        (
            <div>
                Not found users
            </div>
        )
    )
}

export default UserTable;