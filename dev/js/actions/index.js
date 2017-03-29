//cosa fare quando seleziono un utente

//l'azione è suddivisa in 2 parti:
// - il TIPO ("type") di azione, ovvera cosa è stato fatto
// - Paylod, l'operazione che viene eseguita dall'azione
//   (payload può essere sostituito con una qualsiasi altra 
//    dicitura tipo "data", ma per convenzione si usa payload)

// la funzione è l'actionCreator
export const selectUser = (user) => {
    console.log("Ho cliccato: ", user.first) //test per vedere se ho cliccato
    // questa è l'action
    return {
        type: "USER_SELECTED",
        payload: user
    }
};

// con cio che è scritto sopra viene tracciato l'evento generato dal onClick in user-list