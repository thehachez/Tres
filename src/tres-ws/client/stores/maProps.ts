import { MaHandlers } from './maHandlers';

export interface PropsBoxesDataMgTask {
    // Props for components boxes of management data: task areas 
    name: string;
    hash: string;
    idorg: string;
    idbranch: string;
    idarea: string;
    idtask: string;
    timeta: number;
    datata: number;
}

export interface PropsBoxesDataMgArea {
    // Props for components boxes of management data: task areas 
    name: string;
    hash: string;
    idorg: string;
    idbranch: string;
    idarea: string;
}

export interface PropStates {
    // Define global state props for send to components.
    dataMg: Array<PropsBoxesDataMgTask | PropsBoxesDataMgArea> | number | string;
}

export class MaProps implements PropStates {
    // Define locals and globals state props.
    dataMg: Array<PropsBoxesDataMgTask | PropsBoxesDataMgArea> | number | string;

    constructor() {
    }
}
