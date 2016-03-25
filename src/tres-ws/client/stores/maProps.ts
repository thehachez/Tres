import { MaHandlers } from './maHandlers';

export interface PropsBoxesDataMg {
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

export interface PropStates {
    // Define global state props for send to components.
    dataMg: Array<PropsBoxesDataMg>;
}

export class MaProps implements PropStates {
    // Define locals and globals state props.
    dataMg: Array<PropsBoxesDataMg>;

    constructor() {
        this.dataMg = [
            {
                name: "tarea",
                hash: "tarea1",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 22,
                datata: 33
            },
            {
                name: "tarea",
                hash: "tarea2",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 33,
                datata: 22
            },
            {
                name: "tarea",
                hash: "tarea3",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 22,
                datata: 33
            },
            {
                name: "tarea",
                hash: "tarea4",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 22,
                datata: 33
            },
            {
                name: "tarea",
                hash: "tarea5",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 22,
                datata: 33
            },
            {
                name: "tarea6",
                hash: "otra cosa",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 22,
                datata: 33
            },
            {
                name: "tarea",
                hash: "tarea7",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 22,
                datata: 33
            },
            {
                name: "tarea",
                hash: "tarea8",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 22,
                datata: 33
            }
        ];
    }
}
