import {FETCH_UNIVERSITIES, FETCH_UNIVERSITY_DETAIL, FETCH_STUDENT_DETAIL, SAVE_STUDENT} from '../actions/University';

const initialState={
    universities:[],
    universityDetail:[],
    studentDetail:[],
    saveStudent:[]
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
                universityDetail:payload
            };
        case FETCH_STUDENT_DETAIL:
            return{
                ...state,
                studentDetail:payload
            };
        case SAVE_STUDENT:
            return{
                ...state,
                saveStudent:payload
            };
        default:
            return state;     
    }

};
