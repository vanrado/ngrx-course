import {createReducer, on} from '@ngrx/store';
import {User} from '../model/user.model';
import {AuthActions} from '../action-types';

export const authFeatureKey = 'auth';

export interface AppState {
  user: User;
}

const initialState: AppState = {
  user: undefined,
};

export const authReducer = createReducer(initialState,
  on(AuthActions.login, (state, action): AppState => {
      return {user: action.user};
    }
  ),
  on(AuthActions.logout, (state, action): AppState => {
      return {user: null};
    }
  ),
);
