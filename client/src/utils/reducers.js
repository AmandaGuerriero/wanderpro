import {
    UPDATE_ITINERARY,
    UPDATE_DAY,
    UPDATE_CURRENT_DAY,
    UPDATE_ACTIVITIES,
    UPDATE_CURRENT_ACTIVITY,
    REMOVE_ACTIVITY,
    REMOVE_DAY
} from './actions';
import { useReducer } from 'react';

const initialState = {
    itineraries: [],
    days: [],
    activities: []
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_ITINERARY:
            return {
                ...state,
                itineraries: [...action.itineraries],
            };
        
        case UPDATE_DAY:
            return {
                ...state,
                days: [...action.days],
            };
        
        case UPDATE_CURRENT_DAY:
            return {
                ...state,
                currentDay: action.currentDay
            }
        
        case UPDATE_ACTIVITIES:
            return {
                ...state,
                activities: [...action.activities]
            }
        
        case UPDATE_CURRENT_ACTIVITY: 
            return {
                ...state,
                currentActivity: action.currentActivity
            }
        case REMOVE_ACTIVITY:
            let newActivityState = state.days.filter(activity => {
                return activity._id !== action._id;
            });

            return {
                ...state,
                activity: newActivityState
            }
        
        case REMOVE_DAY:
            let newDayState = state.itineraries.filter(day => {
                return day._id !== action._id;
            });

            return {
                ...state,
                day: newDayState
            }
    }
}

export function useItineraryReducer(initialState) {
    return useReducer(reducer, initialState)
}