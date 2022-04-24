import {createAction, props} from '@ngrx/store';
import {User} from './model/user.model';

export const AuthActions = {
  LOGIN: '[Login Page] User Login'
};

// this is just action creator fn
export const login = createAction(AuthActions.LOGIN, props<{ user: User }>());
