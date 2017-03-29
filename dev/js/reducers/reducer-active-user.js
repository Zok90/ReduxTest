// in questo file viene gestita una funzione che 
// ascolta il tipo di azione eseguita e ne genera
// la conseguenza (payload)

export default function (state = null, action) {
    switch (action.type) {
        case "USER_SELECTED":
            return action.payload;
            break;
    }
    return state;
}