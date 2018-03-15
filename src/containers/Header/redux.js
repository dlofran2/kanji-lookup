import {
    NAV_OPEN,
    NAV_CLOSE,
    SEARCH_OPEN,
    SEARCH_CLOSE
} from './constants'

const initialStateHeader = {
    isNavOpen: false,
    isSearchOpen: false
}

export function header(state = initialStateHeader, action) {
    switch(action.type) {
        case NAV_OPEN:
            return {
                isNavOpen: true,
                isSearchOpen: false, 
            };
        
        case NAV_CLOSE:
            return {
                ...state,
                isNavOpen: false,
            }

        case SEARCH_OPEN:
            return {
                isNavOpen: false,
                isSearchOpen: true,
            }

        case SEARCH_CLOSE:
            return {
                ...state,
                isSearchOpen: false,
            }

        default:
            return state;
    }
}