import React, { useEffect, useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { CardProperty, updateCard } from '../global/CardReducer';
import TextField from '@mui/material/TextField';
import { styled } from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';

interface DrawerProps {
    open: boolean;
    close: () => void;
    obj: CardProperty; 
}


const HeaderStyle= styled.h3`
    color:black;
    background:rgb(240 233 233);
    border-radius:4px ;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CustomDrawer = styled(Drawer)`

    & .MuiDrawer-paper{
        margin-top: 6vh;
    }
`

const CustomBox = styled(Box)`
    width: 350px;
    color:white;
     padding:2vh;
      background:white;
       height:94vh;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between;
`

const KitDrawer = ({open, close, obj}: DrawerProps) => {

    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    const [kitData, setKitData] = useState<CardProperty>({
        id: 0,
        name:'',
        cardNumber:'',
        email:'',
        mobile:'',
        network:''
    });

    useEffect(()=> {
        setKitData(obj);
    },[obj])


    const updateCardState = ()=> {
        if(kitData.cardNumber === ""){
            const variant: VariantType = 'info';
            enqueueSnackbar('Add CardNumber', { variant });
        }
        else if(kitData.network === ""){
            const variant: VariantType = 'info';
            enqueueSnackbar('Select Card Network', { variant });
        }
        else{
            dispatch(updateCard({ id: obj.id, name: kitData.name, cardNumber: kitData.cardNumber, email: kitData.email, mobile: kitData.mobile, network: kitData.network }))

            const variant: VariantType = 'success';
            enqueueSnackbar('Card Details Updated Successfully', { variant });

            close();

        }
    }

  return (
          <CustomDrawer
            anchor='right'
            open={open}
            onClose={close}
          >
             <CustomBox
                role="presentation"
                >
                    <div>
                     <HeaderStyle>{obj.cardNumber === "" ? "Edit card" : "View card"}</HeaderStyle>
                     
                     <TextField fullWidth id="outlined-basic" label="Name" variant="outlined"
                     disabled={obj.cardNumber === "" ? false : true} 
                      value={kitData.name}
                      sx={{marginBottom:'2vh'}}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setKitData({ ...kitData, name: event.target.value });
                      }}/>
                     <TextField fullWidth id="outlined-basic" label="Card Number" variant="outlined" 
                     disabled={obj.cardNumber === "" ? false : true} 
                      value={kitData.cardNumber}
                      sx={{marginBottom:'2vh'}}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setKitData({ ...kitData, cardNumber: event.target.value });
                      }}/>
                     <TextField fullWidth id="outlined-basic" label="Email Id" variant="outlined" 
                     disabled={obj.cardNumber === "" ? false : true} 
                      value={kitData.email}
                      sx={{marginBottom:'2vh'}}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setKitData({ ...kitData, email: event.target.value });
                      }}/>
                       <TextField fullWidth id="outlined-basic" label="Mobile Number" variant="outlined" 
                       disabled={obj.cardNumber === "" ? false : true} 
                      value={kitData.mobile}
                      sx={{marginBottom:'2vh'}}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setKitData({ ...kitData, mobile: event.target.value });
                      }}/>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Card Network</InputLabel>
                        <Select
                        sx={{marginBottom:'2vh'}}
                        disabled={obj.cardNumber === "" ? false : true} 
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={kitData.network}
                        label="Card Network"
                        onChange={(event: SelectChangeEvent) => {
                            setKitData({ ...kitData, network: event.target.value as string });
                          }}
                        >
                        <MenuItem value={'Rupay'}>Rupay</MenuItem>
                        <MenuItem value={'Visa'}>Visa</MenuItem>
                        <MenuItem value={'Mastercard'}>Mastercard</MenuItem>
                        <MenuItem value={'Amex'}>Amex</MenuItem>
                        <MenuItem value={'Discover'}>Discover</MenuItem>
                        <MenuItem value={'Maestro'}>Maestro</MenuItem>
                        <MenuItem value={'JCB'}>JCB</MenuItem>
                        <MenuItem value={'Diners Club'}>Diners Club</MenuItem>
                        <MenuItem value={'UnionPay'}>UnionPay</MenuItem>
                        <MenuItem value={'American Express'}>American Express</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                    <Stack spacing={2} direction="row">
                        {
                             obj.cardNumber !== "" &&  <Button variant="outlined" onClick={close}>Got it</Button> 
                           
                        }
                        
                        {
                            obj.cardNumber === "" &&  
                            <>
                            <Button variant="contained" onClick={close}>Cancel</Button>
                             <Button variant="outlined" onClick={updateCardState}>Update</Button>
                          </>  
                            
                           
                        }
                    </Stack>
            </CustomBox>
          </CustomDrawer>
  )
}

const WrappedKitDrawer = ({open, close, obj}: DrawerProps) => {
    return (
      <SnackbarProvider maxSnack={3}>
        <KitDrawer open={open} close={close} obj={obj}/>
      </SnackbarProvider>
    );
  };
  
export default WrappedKitDrawer;