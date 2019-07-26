import {createStore, combineReducers} from 'redux';
import tipCalculationReducer from '../reducers/tipsCalculation';

export default () =>{

    const store = createStore(

        combineReducers({
            tips: tipCalculationReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        
    );

    return store;
    
};

