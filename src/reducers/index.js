import {combineReducers} from 'redux'
import * as attribute from './attribute.reducer'
export default combineReducers({
    attribute: attribute.reducer
})