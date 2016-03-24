import { MaHandlers } from './maHandlers';
export interface PropStates {
    // Define global state props for send to components.
    dataMg: string;
}

export class MaProps implements PropStates {
    // Define locals and globals state props.
    dataMg: string;
    constructor() {
        this.dataMg = "hello words";
    }
}
