import { MaHandlers } from './maHandlers';
export interface PropStates {
    // Define global state props for send to components.
    dataMg: Array<{
        name: string,
        description: string,
        idorg: string,
        idbranch: string,
        idarea: string,
        idtask: string,
        timeta: number,
        dateta: number
    }>;
}

export class MaProps implements PropStates {
    // Define locals and globals state props.
    dataMg: Array<{
        name: string,
        description: string,
        idorg: string,
        idbranch: string,
        idarea: string,
        idtask: string,
        timeta: number,
        dateta: number
    }>;
    constructor() {
        this.dataMg = [
            {
                name: "tarea",
                description: "linda tarea",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 22,
                dateta: 33
            },
            {
                name: "tarea",
                description: "otra cosa",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 33,
                dateta: 22
            },
            {
                name: "tarea",
                description: "interesante",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 22,
                dateta: 33
            },
            {
                name: "tarea",
                description: "bla bla",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 22,
                dateta: 33
            },
            {
                name: "tarea",
                description: "linda tarea",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 22,
                dateta: 33
            },
            {
                name: "tarea",
                description: "otra cosa",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 22,
                dateta: 33
            },
            {
                name: "tarea",
                description: "interesante",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 22,
                dateta: 33
            },
            {
                name: "tarea",
                description: "bla bla",
                idorg: "",
                idbranch: "",
                idarea: "",
                idtask: "",
                timeta: 22,
                dateta: 33
            }
        ];
    }
}
