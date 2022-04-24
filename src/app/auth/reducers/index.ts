import {createReducer, on} from '@ngrx/store';
import {User} from '../model/user.model';
import {AuthActions} from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(initialState, on(AuthActions.login, (state, action): AuthState => {
  return { user: action.user };
}));
