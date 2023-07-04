import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface SearchKeyProps {
    keyword : (keyString: string) => void;
}

const SearchCard = ({keyword}: SearchKeyProps) => {
    const [searchTerm, setSearchTerm ] = useState("");

    const removeText = ()=> {
        setSearchTerm("");
        keyword("")
    }

    const searchByKey = ()=> {
        keyword(searchTerm)
    }

  return (
    <Card sx={{borderRadius:'16px', paddingLeft:'8px', paddingRight:'8px', marginTop:'2vh'}}>
        <CardContent sx={{flexDirection:'row', justifyContent:'space-between', display:'flex'}}>
        <FormControl sx={{ marginTop:'1vh', marginBottom:'1vh' }}>
            <InputLabel htmlFor="outlined-adornment-amount">Search By Name</InputLabel>
            <OutlinedInput
            id="outlined-adornment-amount"
            onChange={(e)=> setSearchTerm(e.target.value)}
            value={searchTerm}
            startAdornment={
                <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                >
                    <SearchIcon/>
                </IconButton>
                </InputAdornment>
            }
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    edge="start"
                    onClick={removeText}
                >
                    <HighlightOffIcon/>
                </IconButton>
                </InputAdornment>
            }
            label="Amount"
            />
        </FormControl>
        <Button variant="outlined" size="small" onClick={searchByKey}>Search</Button>
        </CardContent>
    </Card>

  )
}

export default SearchCard
