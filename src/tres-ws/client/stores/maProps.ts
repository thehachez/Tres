import { MaHandlers } from './maHandlers';

export interface PropStates {
    // Define global state props for send to components.
    dataMg: Array<Tres.DataMgTask | Tres.DataMgArea> | number | string;
}

export class MaProps implements PropStates {
    // Define locals and globals state props.
    dataMg: Array<Tres.DataMgTask | Tres.DataMgArea> | number | string;

    constructor() {
    }
}
