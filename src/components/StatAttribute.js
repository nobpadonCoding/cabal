/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';
import {useSelector,useDispatch} from 'react-redux';
import * as attributeRedux from '../reducers/attribute.reducer';

function StatAttribute(props) {

    const dispatch = useDispatch();
    const attReducer = useSelector(({attribute}) => attribute)

    const [name, setname] = React.useState('')
    const [attributeValue, setattributeValue] = React.useState(5)

    useEffect(() => {
        //set name
     setname(attReducer.attributeList[props.index])

     //set value
     setattributeValue(attReducer.attributeValue[props.index])

    }, [props.index])

    useEffect(() => {

        //update redux value
        let obj = [...attReducer.attributeValue]
        obj[props.index]= attributeValue;
        dispatch(attributeRedux.actions.changeAttrValue(obj))

    }, [attributeValue])

    function valuetext(value) {
        return `${value}°C`;
      }
    return (
        <Paper style={{padding:5,margin:5}}>
        <Typography id="discrete-slider" gutterBottom>
        {name}
      </Typography>
      <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={15}
        value={attributeValue}
        onChange={(event,value)=>{
            setattributeValue(value)
        }}
      />
        </Paper>
    );
}

export default StatAttribute
