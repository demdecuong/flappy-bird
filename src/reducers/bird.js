const initialState = {
    y: 250,
    rotation: 0,
}
const variation = 60;
const fallVariation = 30;
const rotationDegree = 20;
export default (state = initialState, {type} = {}) => {
    switch(type){
        case 'FLY':
            return {...state, y: state.y - variation, rotation: state.rotation - rotationDegree}
        case 'FALL':
            return {...state, y:state.y + fallVariation, rotation: 0}
        case 'GAME_OVER':
            return initialState;
        default:
            return state;
    }
}