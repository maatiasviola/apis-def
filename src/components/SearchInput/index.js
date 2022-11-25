//react
import * as React from 'react';

//components
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

//icons
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput=()=> {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',
        flex:1,
      maxWidth: 'fit-content',
      height: 30,
      border: '1px solid lightgray',
      borderRadius: 999 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search TusClases"
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchInput
