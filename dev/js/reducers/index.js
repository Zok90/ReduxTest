import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
// importo il reducer 
import ActiveUserReducers from '../reducers/reducer-active-user';

//allReducers è la somma dei dati dei vari reducer che posso avere

export const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducers
});

//export default allReducers; (questa non funziona, quella sopra si)