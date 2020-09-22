import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap} from '@ngrx/store';
import { cartReducer, CartState } from './cart/cart.reducers';
import { datiReducer, DatiState } from './dati/dati.reducers';
import { UserState, userReducer } from './user/user.reducer';

export interface AppState{
    userState: UserState;
    cartState: CartState;
    datiState: DatiState;
    router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> ={
    userState: userReducer,
    cartState: cartReducer,
    datiState: datiReducer,
    router: routerReducer
};