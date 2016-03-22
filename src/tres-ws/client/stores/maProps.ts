import { MaHandlers } from './maHandlers';
export interface PropStates {
    dataMg: string;
}

export class MaProps {
    dataMg: string;
    constructor() {
        this.dataMg = "hello words";
    }
}
