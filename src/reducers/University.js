import {FETCH_UNIVERSITIES,FETCH_UNIVERSITY_DETAIL} from '../actions/University';

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
            case FETCH_UNIVERSITY_DETAIL:
            return{
                ...state,
                universities:payload
            };
        default:
            return state;     
    }

};
