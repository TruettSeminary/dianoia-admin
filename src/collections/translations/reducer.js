import { fromJS } from 'immutable'; 

import {
    REFRESH_ALL_TRANSLATIONS,
    RESET_TRANSLATIONS, 
    CREATE_TRANSLATION_SUCCEEDED, 
    UPDATE_TRANSLATION_SUCCEEDED, 
    DELETE_TRANSLATION_SUCCEEDED
} from './constants'; 

const initialState = fromJS({}); 

function getTranslationMap(translations) {
    return translations.reduce((translationMap, translation) => {
        translationMap[translation._id] = translation;
        return translationMap;
    }, {}); 
}

function translationsReducer(state = initialState, action) {
    switch(action.type) {
        case REFRESH_ALL_TRANSLATIONS: 
            return fromJS(getTranslationMap(action.translations)); 
        case RESET_TRANSLATIONS: 
            return initialState;
        case CREATE_TRANSLATION_SUCCEEDED: 
            return state; // TODO: 
        case UPDATE_TRANSLATION_SUCCEEDED: 
            return state; // TODO:
        case DELETE_TRANSLATION_SUCCEEDED: 
            return state; // TODO:
        default: 
            return state; 
    }
}

export default translationsReducer; 