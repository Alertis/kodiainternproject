import axios from 'axios';
import {API_BASE} from '../config/env';
import store from '../store';

export const FETCH_UNIVERSITIES="FETCH_UNIVERSITIES";

export function fetchUniversity(){
    return dispatch => {
        store.dispatch({
            type:FETCH_UNIVERSITIES,
            payload:axios.get(`${API_BASE}/universities`)
            .then(result => (result.data))
        });
    }
}