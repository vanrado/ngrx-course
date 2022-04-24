import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from './reducers';

const selectAuthStateSelector = createFeatureSelector<AppState>('auth');

export const isLoggedIn = createSelector(selectAuthStateSelector, (auth) => !!auth.user);
export const isLoggedOut = createSelector(isLoggedIn, (isLoggedInVal) => !isLoggedInVal);
