import { SET_AUTHED_USER } from "../actions/authedUser"


export function authedUser(state = "", action) {
    switch (action.type) {
        case SET_AUTHED_USER: {
            //document.cookie = "username=" + action.user;
            return action.user
        }
        // case REMOVE_GOAL:
        //     return state.filter((goal) => goal.id !== action.id)
        // case TOGGLE_GOAL:
        //     return state.map((goal) => goal.id !== action.id ? goal :
        //         Object.assign({}, goal, { complete: !goal.complete })
        //     )
        // case SET_AUTHED_USER:
        //     return action.goals
        default:
            return state

    }

}
