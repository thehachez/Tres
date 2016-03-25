import Alt from '../alt';
import { MaHandlers } from './maHandlers';
import { PropStates } from './maProps';
import AdActions from '../actions/maActions';

export interface HanderlsDef extends AltJS.ActionsBind {
    // Set handlers listeners of actions referente to maHandlers.
    handlerTest: (prop: string) => void;
}

export class Store extends MaHandlers implements AltJS.StoreModel<any> {
    /* 
    * STORE FOR FLUX IMPLEMENT.
    */
    bindListeners: (handlers: HanderlsDef)=> void;

    constructor() {
        super();
        this.bindListeners(
            {
                handlerTest: AdActions.GO_TO_MAIN_BOXES
            }
        );
    }
}

export default Alt.createStore<PropStates>(Store, 'Store');

