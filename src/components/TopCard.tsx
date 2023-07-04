import React from 'react'
import Tab from '@mui/material/Tab';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';


const TopCardHeading = styled.div`
    font-size: larger;
`

const TopCardDescription = styled.div`
    font-size: smaller;
`

const CustomizedTabs = styled(Tabs)`
  display: flex;
  justify-content: flex-end;
  align-items: center;


  & .MuiTabs-indicator {
    display: none;
  }

  & .MuiTabScrollButton-root {
    display: none;
  }

  & .Mui-selected {
    color: black !important;
    background: rgb(230 236 242 / 50%);
  }
`;

const CustomizedTab = styled(Tab)`

  padding-right: 8vh !important;
  border: 1px solid lightgrey !important;
    margin-right:8px !important;
    color:black !important;
    border-radius: 8px !important;

    

`


const TopCard = () => {

    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



  return (
            <Card sx={{borderRadius:'16px', paddingLeft:'8px', paddingRight:'8px'}}>
                <CardContent>
                <TopCardHeading>
                    New Card Sale
                </TopCardHeading>
                    <TopCardDescription>
                        Issue New Card
                    </TopCardDescription>
                </CardContent>
                <CardActions>
                    <Box sx={{ maxWidth: { xs: 350, sm: 600, md:800, lg:1080, xl:1200 }, bgcolor: 'background.paper' }}>
                    <CustomizedTabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <CustomizedTab icon={<ContactEmergencyIcon sx={{color:"white", width:'2em !important',height: '2em !important', background:'#001e3c', padding:'1vh', borderRadius:'50%' }}/>} iconPosition="start" label="Kit" />
                        <CustomizedTab icon={<AccountBoxIcon sx={{color:"white", width:'2em !important',height: '2em !important', background:'#001e3c', padding:'1vh', borderRadius:'50%' }}/>} iconPosition="start" label="Personalized Sale"/>
                        <CustomizedTab icon={<PersonPinIcon sx={{color:"white", width:'2em !important',height: '2em !important', background:'#001e3c', padding:'1vh', borderRadius:'50%' }}/>} iconPosition="start" label="Reissue"/>
                    </CustomizedTabs>
                    </Box>
                </CardActions>
            </Card>

  )
}

export default TopCard
