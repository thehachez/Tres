
declare module Tres {
    interface Ghost { }

    // STORE PROPS
    export interface DataMgArea {
        /* @dataMg area */
        // Props for components boxes of management data: task areas 
        idarea: string;
        name: string;
        hash: string;
        type: string;
    }

    export interface DataMgTask {
        /* @dataMg task */
        // Props for components boxes of management data: task areas 
        idtask: string;
        name: string;
        hash: string;
        type: string;
        timeta: string;
    }
}

declare module 'tres' {
    var tres: Tres.Ghost;
    export = Tres;
}