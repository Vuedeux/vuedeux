import cloneDeep from 'lodash/cloneDeep';
import { createStore, combineReducers } from 'redux';
import {reducers} from './reduxreducers'

export store = createStore(combineReducers({ ...reducers }));

export const connect = (selector, props) => {
    let state = undefined;  /// TEMPORARY HOLDER VARIABLE RAN WHENEVER A COMPONENT CREATED 
    return {
        data() { state: { } },
        created() {
            state = selector(store.getState(), this); // get state from REDUX and set to local state
            this.state = Object.keys(state).reduce((prev, key, index) => //set temp state to local state
                ({ ...prev, [key]: cloneDeep(state[key]) }), {})
            this.unsubscribe = store.subscribe(() => {  //
                let next = selector(store.getState(), this);
                Object.keys(state).forEach(key => {
                    if (state[key] !== next[key]) {
                        this.$set(`state.${key}`, cloneDeep(next[key]));
                    }
                });
                state = next;
            });
        },
        beforeDestroy() {
            this.unsubscribe();
        }
    }
}