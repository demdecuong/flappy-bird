const initialState = {
    y: 250,
    rotation: 0,
}
const variation = 50;
const fallVariation = 25;
const rotationDegree = 20;
export default (state = initialState, {type} = {}) => {
    switch(type){
        case 'FLY':
            return {...state, y: state.y - variation, rotation: state.rotation - rotationDegree}
        case 'FALL':
            return {...state, y:state.y + fallVariation, rotation: 0}
        case 'END':
            return initialState;
        default:
            return state;
    }
}