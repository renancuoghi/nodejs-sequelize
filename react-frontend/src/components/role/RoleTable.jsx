import React from "react";
import { TableContainer,Table,TableBody,TableRow,TableCell, TableHead } from "@material-ui/core";

const columns = ["Id", "Name","Created", "Updated"];

const RoleTableHead = ({ columns }) => {
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

const RoleTableRow = ({role}) => {
    return (
        role ? (
            <TableRow>          
                <TableCell>
                    {role.id}
                </TableCell>
                <TableCell>
                    {role.name}
                </TableCell>   
                <TableCell>
                    {role.createdAt}
                </TableCell>  
                <TableCell>
                    {role.updatedAt}
                </TableCell>               
            </TableRow>
        ) :
        (
            <TableRow></TableRow>
        )
        
    );
}

const RoleTable = ({ roles }) => {
    return (
        roles?.length > 0 ?
        (
            <TableContainer className="MuiTableContainer-root">
                <Table stickyHeader size="small">
                    <RoleTableHead columns={columns}/>                                     
                    <TableBody>
                        {roles.map(role => (
                            <RoleTableRow role={role} key={role.id}/>
                        ))
                        }   
                    </TableBody>                    
                </Table>                
            </TableContainer>
        ) :
        (
            <div>
                Not found roles
            </div>
        )
    )
}

export default RoleTable;