
declare module Tres {
    interface Ghost { }

    // STORE PROPS
    export interface DataMgArea {
        /* @dataMg area */
        // Props for components boxes of management data: task areas 
        name: string;
        hash: string;
        idorg: string;
        idbranch: string;
        idarea: string;
    }

    export interface DataMgTask {
        /* @dataMg task */
        // Props for components boxes of management data: task areas 
        name: string;
        hash: string;
        idorg: string;
        idbranch: string;
        idarea: string;
        idtask: string;
        type: string;
        timeta: string;
    }
}

declare module 'tres' {
    var tres: Tres.Ghost;
    export = Tres;
}