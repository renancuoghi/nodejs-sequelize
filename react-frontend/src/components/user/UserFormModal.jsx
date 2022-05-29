import React,{ useState, useEffect }  from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import role from "../../api/role";
import user from "../../api/user";
import MenuItem from '@mui/material/MenuItem';
import {   
    FormControl,
    Grid,
  } from '@material-ui/core';
import Select from '@mui/material/Select';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #ccc',
    boxShadow: 24,
    p: 4,
  };
  

const UserModal = ({afterSave}) => { 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [roleid, setRoleid] = useState(null);
    const [roles, setRoles] = useState([]);

    const getRoles = async () => {    
        const data = await role.list();
        setRoles(data);        
    }

    const save = async () => {
        const newUser = {
            name: name,
            email: email,
            roleId: roleid
        };
        const response = await user.save(newUser);
        console.log(response);
        setOpen(false);
        afterSave();
    }

    useEffect(() => {
        getRoles();
      }, []);


    return (
        <Grid container alignItems="flex-start" spacing={2}>      
            <div style={{paddingLeft: "20px"}}>
                <Button variant="outlined" startIcon={<PersonAddAltIcon />} onClick={handleOpen}>+ User</Button>
            </div>  
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <FormControl fullWidth>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            User
                        </Typography>
                        <br/>
                        <Grid item xs={12}>
                            <InputLabel>Name</InputLabel>
                            <Input          
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                aria-describedby="Name"
                                required
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <InputLabel>E-mail</InputLabel>
                            <Input
                                type="email"       
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-describedby="E-mail"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>                    
                            <InputLabel>Role</InputLabel>
                            <Select value={roleid} label="Role" onChange={(e) => setRoleid(parseInt(e.target.value))} required>                    
                                {
                                    roles.map((r) => (
                                        <MenuItem value={r.id} key={r.id}>
                                            {r.name}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </Grid>         
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={save}>Save</Button>
                        </Grid>
                    </Grid>
                </FormControl>
                </Box>
            </Modal>
        </Grid>
    );
}; 

export default UserModal;