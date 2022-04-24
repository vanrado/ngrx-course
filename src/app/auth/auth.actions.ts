import {createAction, props} from '@ngrx/store';
import {User} from './model/user.model';

// this is just action creator fn
export const login = createAction('[Login Page] User Login', props<{ user: User }>());
export const logout = createAction('[Menu] User Logout');
