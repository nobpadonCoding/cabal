import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function CharacterName() {
    return (
        <Paper elevation={3} style={{marginTop:10}}>
             <TextField fullWidth id="standard-basic" label="Name"/>
        </Paper>
    )
}

export default CharacterName
