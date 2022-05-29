import React,{ useState, useEffect }  from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import role from "../../api/role";
import {   
    FormControl,
    Grid,
  } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import RoleTable from "./RoleTable";
import GroupsIcon from '@mui/icons-material/Groups';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #ccc',
    boxShadow: 24,
    p: 4,
  };
  

const RoleModal = () => { 
    const [open, setOpen] = useState(false);
    const [openrole, setOpenrole] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = useState('');
    const [roles, setRoles] = useState([]);    
    const roleOpen = () => setOpenrole(true);
    const roleClose = () => setOpenrole(false);

    const getRoles = async () => {    
        const data = await role.list();
        setRoles(data);        
    }

    const save = async () => {
        const newRole = {
            name: name
        };
        await role.save(newRole);
        setName('');
        roleClose();
        getRoles();
    }

    useEffect(() => {
        getRoles();
      }, []);


    return (
        <Grid container alignItems="flex-start" spacing={2}>
        <Button variant="outlined" startIcon={<GroupsIcon />} onClick={handleOpen}>Roles</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <FormControl fullWidth>                
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Roles
                            </Typography>
                        </Grid>
                        {
                            openrole ?
                            <Grid container alignItems="flex-start" spacing={2}>          
                                <Grid item xs={12}>
                                    <InputLabel>Name</InputLabel>
                                    <Input          
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        aria-describedby="Name"
                                        required
                                    />
                                </Grid>
                                <Grid container alignItems="flex-start" spacing={2}>
                                    <Grid item xs={2}>
                                        <Button onClick={roleClose}>Fechar</Button>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button variant="contained" onClick={save}>Save</Button>
                                    </Grid>
                                </Grid>
                            </Grid>  

                            : <Button onClick={roleOpen}>+ Role</Button>
                        }
                        <Grid item xs={12}>
                            <RoleTable roles={roles}/>
                        </Grid>                    
                    </Grid>
                </FormControl>
                </Box>
            </Modal>
        </Grid>
    );
}; 

export default RoleModal;