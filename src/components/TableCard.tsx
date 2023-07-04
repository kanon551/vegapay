import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { DataGrid, GridRowsProp, GridColDef,GridToolbar,GridActionsCellItem } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useEffect, useState,ChangeEvent } from 'react';
import { CardProperty } from '../global/CardReducer';
import WrappedKitDrawer from './KitDrawer';

const CustomDataGrid = styled(DataGrid)`

    &.MuiDataGrid-root .MuiDataGrid-cell:focus{
        outline: none;
    }
  & .MuiDataGrid-virtualScroller {
    height: 300px;
  }
  `
type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface TableCardProps {
    searchKeyword: string;
}

const TableCard = ({searchKeyword}: TableCardProps) => {

    
    const cardsData = useSelector((state: any) => state.cards);

    const [state, setState] = useState({right: false});
    const [kitObject, setKitObject] = useState<CardProperty>({
        id: 0,
        name:'',
        cardNumber:'',
        email:'',
        mobile:'',
        network:''
    });


    const toggleDrawer =(anchor: Anchor, open: boolean) =>(event: React.KeyboardEvent | React.MouseEvent) => {
        if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };


    const searchByName = (searchKeyword: string) => {
        const searchResults = cardsData.filter((card: CardProperty) =>
          card.name.toLowerCase().includes(searchKeyword.toLowerCase())
        );
        return searchResults;
      };

      const rows: GridRowsProp = searchKeyword === "" ? cardsData : searchByName(searchKeyword);
      
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Customer name', width: 150 },
        { field: 'cardNumber', headerName: 'Card No', width: 150 },
        { field: 'email', headerName: 'Email id', width: 150 },
        { field: 'mobile', headerName: 'Mobile No', width: 150 },
        { field: 'network', headerName: 'Card Network', width: 150 },
        {
          field: 'actions',
          type: 'actions',
          width: 200,
          getActions: (event: any) => {
            let anchor:Anchor = 'right';
            return [
                <span>
                  <Button onClick={()=>setObject(anchor, event.row)}
                  variant={event.row.cardNumber === "" ? "contained" : "outlined"} sx={{width:'170px'}}>{ event.row.cardNumber === "" ? "Edit Account" : "View Account"}</Button>
                </span>
            ];
          }
        }
      ];
      
      const setObject = (anchor: Anchor, obj: CardProperty)=> {
        setKitObject(obj)
        toggleDrawer(anchor, true)({} as React.MouseEvent);
      }
    

      const clicked= ()=> {
        toggleDrawer('right', false)({} as React.MouseEvent);
      }
  return (
    <Card sx={{borderRadius:'16px', paddingLeft:'8px', paddingRight:'8px', marginTop:'2vh',marginBottom:'2vh' ,width:{xs:380, sm:655, md:910, lg:'auto', xl:'auto'} }}>
        <CardContent>
        <CustomDataGrid rows={rows}
                  columns={columns}
                  disableRowSelectionOnClick
                  slots={{ toolbar: GridToolbar }} />
        </CardContent>
        <WrappedKitDrawer open={state.right} close={clicked} obj={kitObject}/>
    </Card>
  )
}

export default TableCard
