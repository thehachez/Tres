import Alt from '../alt';
import { MaHandlers } from './maHandlers';
import { PropStates } from './maProps';
import AdActions from '../actions/maActions';

export interface HanderlsDef {
    handlerTest: (prop: string) => void;
}

export class Store extends MaHandlers implements AltJS.StoreModel<any> {
    bindListeners: any;
    constructor() {
        super();
        this.bindListeners(
            {
                handlerTest: AdActions.SET_DATA_MG
            }
        );
    }
}

export default Alt.createStore<PropStates>(Store, 'Store');

