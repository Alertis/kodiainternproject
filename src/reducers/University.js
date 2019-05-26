import {FETCH_UNIVERSITIES} from '../actions/University';

const initialState={
    universities:[]
}

export default (state=initialState, {type,payload}) => {

    switch(type){
        case FETCH_UNIVERSITIES:
            return{
                ...state,
                universities:payload
            };
        default:
            return state;     
    }

};
