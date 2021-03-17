const initialState = JSON.parse(localStorage.getItem("state")) || {
    dashboard: {
        header: {
            text: "Hello-1"
        },
        body: {
            text: "Hello-1"
        },
        button: {
            title: 'Click on me'
        }
    }
}
debugger;
// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case "SMASH":
            insertAtId(state, action.id, action.value);
            return {...state};
        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}

export function getById(state, id) {
    return getProps(state, id.split('.'), 0);
}

function getProps(state, ids, index = 0) {
    if (ids.length - 1 === index) {
        return state[ids[index]]
    }
    return getProps(state[ids[index]], ids, ++index);
}

export function insertAtId(state, id, value) {
    return setProps(state, id.split('.'), value, 0);
}

function setProps(state, ids, value, index = 0) {
    if (ids.length - 1 === index) {
        state[ids[index]] = value;
        return;
    }
    setProps(state[ids[index]], ids, value, ++index);
}
