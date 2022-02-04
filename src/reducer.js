


export default function reduser(state, { type, playload }) {
    switch (type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: playload.bool
            }

        default:
            return state
    }
}