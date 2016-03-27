import Alt from '../alt';
import AdActions from '../actions/maActions';
import { MaHandlers } from './maHandlers';
import { PropStates } from './maProps';

type StoreHandler = (state: string | number)=> void;

export interface HanderlsDef extends AltJS.ActionsBind {
    // Set handlers listeners of actions referente to maHandlers.
    handlerGoToMgData: (dataMg: Array<Tres.DataMgArea | Tres.DataMgTask> | string | number) => void;
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
                handlerGoToMgData: AdActions.GO_TO_MG_DATA
            }
        );
    }
}

export default Alt.createStore<PropStates>(Store, 'Store');

