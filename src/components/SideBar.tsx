import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Divider from '@mui/material/Divider';


interface SideBarProps {
    open : boolean;
}

const SideBar = ({open}: SideBarProps) => {
    
    const navigate = useNavigate();
    const location = useLocation();
  let breadcrumbs = location.pathname;

  const RoutingArray1 = [
    {
        label: "Team Management",
        url: "/teamManagement",
    },
    {
        label: "Application Management",
        url: "/applicationManagement",
    },
    {
        label: "Corporate Management",
        url: "/corporateManagement",
    },
    {
        label: "User Management",
        url: "/userManagement",
    }
  ]

  const RoutingArray2 = [
    {
        label: "Card Sale",
        url: "/cardSale",
    },
    {
        label: "Card Transaction",
        url: "/cardTransaction",
    },
    {
        label: "Inventory Management",
        url: "/inventoryManagement",
    },
    {
        label: "Release Transaction",
        url: "/releaseTransaction",
    }
  ]

  return (
    <>
    {
        RoutingArray1.map((obj)=> (
                <ListItem disablePadding sx={{ display: 'block' }} key={obj.url}>
                        <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            background: breadcrumbs === `${obj.url}`? "rgb(52 91 129 / 50%)" : null,
                            borderLeft: breadcrumbs === `${obj.url}`? "8px solid dodgerblue" : null
                        }}
                        onClick={()=>navigate(`${obj.url}`)}
                        >
                        <ListItemIcon
                            sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                            color:'white'
                            }}
                        >
                            <DashboardOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary={`${obj.label}`} sx={{ opacity: open ? 1 : 0 , color:'white'}} />
                        </ListItemButton>
                </ListItem>
        ))
    }
    
    <Divider sx={{background:"white"}}/>

    {
        RoutingArray2.map((obj)=> (
                <ListItem disablePadding sx={{ display: 'block' }}  key={obj.url}>
                        <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            background: breadcrumbs === `${obj.url}`? "rgb(52 91 129 / 50%)" : null,
                            borderLeft: breadcrumbs === `${obj.url}`? "8px solid dodgerblue" : null
                        }}
                        onClick={()=>navigate(`${obj.url}`)}
                        >
                        <ListItemIcon
                            sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                            color:'white'
                            }}
                        >
                            <DashboardOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary={`${obj.label}`} sx={{ opacity: open ? 1 : 0 , color:'white'}} />
                        </ListItemButton>
                </ListItem>
        ))
    }
    <Divider sx={{background:"white"}}/>
    </>
   
  )
}

export default SideBar
