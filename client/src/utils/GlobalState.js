import React, { createContext, useContext, useReducer } from 'react';
import { reducers, useItineraryReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value =[], ...props}) => {
    const [state, dispatch] = useItineraryReducer({
        itineraries:[],
        days: [],
        activities: [],
        });

    return <Provider value={[state, dispatch]}{...props}/>
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

