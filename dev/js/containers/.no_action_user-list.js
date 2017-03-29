import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//importo le azioni
import { selectUser } from '../actions/index';

// **** QUESTA E' LA PARTE DIFFICILE DI REACT (dicono..)

// METODO REDUX (leggi dopo e scorri giu al METODO NO REDUX)

class UserList extends Component {
    // <1-b> ciò significa che nel nostro componente, quello che possiamo
    // fare, è dire che quelle "props.users" sono uguali agli utenti
    // per la nosta intera applicazione

    createListItems() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id}>{user.first} {user.last}</li>
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

// <1-a> a cosa serve questa funzione?
// prende un pezzo di stato (state) che è parte o all'interno dello STORE  
// e lo invia dentro al componente come proprietà (..o sua proprietà)
function mapStateToProps(state) {
    return {
        users: state.users //propietà users= allo STATO di users
    };
}



// <1> cosa fa questo file?
// quando exportiamo la "UserList" ma connessa a "mapStateToProps", 
// stiamo prendendo il componente "UserList" rendendolo consapevole
// dei dati presenti nel nostro STORE (ovvero i dati degli utenti 
// all'interno di reduce-users)

export default connect(mapStateToProps)(UserList);

// METODO NO REDUX (cosa faceva senza redux questo file)

/*
 class UserList extends Component {
    render() {
        return (
            <ul>
                <li>Uno</li>
                <li>Due</li>
                <li>Tre</li>
            </ul>
        )
    }

}

export default UserList;
*/

// per estrarre il DEFAULT DOM COMPONENT (contenuto della classe 
// sopra riportata) che non sa niente dei dati degli utenti 
// (reduce-users) della nostra applicazione, ho utilizzato 
// "export default UserList;" che non fa altro che
// esportare il contenuto di quella classe/componente.




