import React from 'react'
import Grid from '@material-ui/core/Grid';
import CharacterName from "./components/CharacterName";
import CharacterSelect from "./components/CharacterSelect"
import StatChart from "./components/StatChart"
import StatDisplay from "./components/StatDisplay"

function App() {
  return (
    <Grid spacing={3} container direction="row" alignItems="flex-start" style={{padding:10}}>
      {/* Charrector select */}
      <Grid item xs={12} md={4} lg={4}>
        <CharacterSelect></CharacterSelect>
        <CharacterName></CharacterName>
      </Grid>
      {/* End Charrector select */}

      {/* StatChart */}
      <Grid item xs={8} md={4} lg={4}>
            <StatChart></StatChart>
      </Grid>
      {/* End StatChart */}

      {/* StatDisplay */}
      <Grid item xs={4} md={4} lg={4}>
            <StatDisplay></StatDisplay>
      </Grid>
      {/* End StatDisplay */}
    </Grid>
  )
}

export default App
