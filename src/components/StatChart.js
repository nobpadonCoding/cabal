import React from 'react'
import Paper from '@material-ui/core/Paper';
import Chart from "react-apexcharts";
import {useSelector} from 'react-redux'

function StatChart() {
        
        const attributeReducer = useSelector(({attribute})=>attribute)
        const [chartOption,setchartOption] = React.useState({})
        const [chartSeries,setchartSeries] = React.useState([])

        React.useEffect(() => {
          setchartOption({
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [...attributeReducer.attributeList],
            }
          });
          setchartSeries([
              {
                name: "series-1",
                data: [...attributeReducer.attributeValue],
              }
          ]);
        }, [attributeReducer])


    return (
        <Paper elevation={3}>
          {attributeReducer.name}
            <Chart
                options={chartOption}
                series={chartSeries}
                type="radar"
                width="100%"
            />
        </Paper>
    )
}

export default StatChart
