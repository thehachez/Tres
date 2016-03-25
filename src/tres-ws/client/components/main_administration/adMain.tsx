import * as React from 'react';

interface Rectangles {
    type: string;
    text: string;
    location: string;
}

export class AdMain extends React.Component<any, any> {
    opRectangles: Array<Rectangles>;

    constructor() {
        super();
        this.opRectangles = [
            {
                type: "data",
                text: "datos",
                location: "addata"
            },
            {
                type: "terminals",
                text: "terminales",
                location: "adterminals"
            },
            {
                type: "touchs",
                text: "tactiles",
                location: "adtouchs"
            },
            {
                type: "announcers",
                text: "anunciadores",
                location: "adannouncers"
            }
        ]
    }
    render() {
        return (
            <section className="row_adMain" id="adMain">
            </section>
        )
    }
};
