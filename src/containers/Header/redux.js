import {
    NAV_OPEN,
    NAV_CLOSE
} from './constants'

const initialStateHeader = {
    isNavOpen: false
}

export function header(state = initialStateHeader, action) {
    switch(action.type) {
        case NAV_OPEN:
            return {
                isNavOpen: true,
            };
        
        case NAV_CLOSE:
            return {
                isNavOpen: false,
            }

        default:
            return state;
    }
}