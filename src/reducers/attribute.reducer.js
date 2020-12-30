/* eslint-disable import/no-anonymous-default-export */


//Action Type
export const actionTypes = {
    CHANGE_ATTRIBUTE_VALUE: "[CHANGE ATTRIBUTE VALUE] Action",
}

//State
const initialState = {
    name: 'test',
    attributeList: [
        'STR','AGI','DEX','LUK','INT','VIT'
    ],
    attributeValue: [
        1,2,3,4,5,6,20
    ],
}

//Reducer
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case actionTypes.CHANGE_ATTRIBUTE_VALUE:
        return { ...state, attributeValue: payload };

      default:
        return state;
    }
}

export const actions = {
    changeAttrValue: (payload) => ({ type: actionTypes.CHANGE_ATTRIBUTE_VALUE, payload }),
};