import axios from 'axios';
import {API_BASE} from '../config/env';
import store from '../store';

export const FETCH_UNIVERSITIES="FETCH_UNIVERSITIES";
export const FETCH_UNIVERSITY_DETAIL="FETCH_UNIVERSITY_DETAIL";


export function fetchUniversity(){
    return dispatch => {
        store.dispatch({
            type:FETCH_UNIVERSITIES,
            payload:axios.get(`${API_BASE}/universities`)
            .then(result => (result.data))
        });
    }
}

export function fetchUniversityDetail(id){
    return dispatch => {
        store.dispatch({
            type:FETCH_UNIVERSITY_DETAIL,
            payload:axios.get(`${API_BASE}/universities/${id}`)
            .then(result => (result.data))
        });
    }
}