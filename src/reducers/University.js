import {FETCH_UNIVERSITIES, FETCH_UNIVERSITY_DETAIL, FETCH_STUDENT_DETAIL} from '../actions/University';

const initialState={
    universities:[],
    studentDetail:[]
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
        case FETCH_STUDENT_DETAIL:
            return{
                ...state,
                studentDetail:payload
            };
        default:
            return state;     
    }

};
