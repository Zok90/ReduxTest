import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//importo le azioni
import { selectUser } from '../actions/index';

// **** QUESTA E' LA PARTE DIFFICILE DI REDUX ****



 class UserList extends Component {
     
     createListItems() {
         return this.props.users.map((user) => {
             return (
                 <li
                     key={user.id}
                     onClick={() => this.props.selectUser(user)} // rileva il type dell'action "USER_SELECTED"
                 >
                     {user.first} {user.last}</li>
             );
         });
     }

    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }

 }

 function mapStateToProps(state) { 
    return {
        users: state.users 
    };
 }

// semplicemente la call di un altra funzione che serve a gestire (dispatch) le azioni
 function matchDispatchToProps(dispatch) {
     return bindActionCreators({ selectUser: selectUser }, dispatch);
 }

 export default connect(mapStateToProps, matchDispatchToProps)(UserList);






