import * as React from 'react';
import { Users,
        Customs,
        Modules,
        Chars } from './svg/items.tsx';

export class PaOptions extends React.Component<any, any> {
    render() {
        return (
            <div className="row_po_tp_mleft">
                <ul className="ul_po_tp_mleft">
                    <li>
                        <Users />
                    </li>
                    <li>
                        <Customs />
                    </li>
                    <li>
                        <Modules />
                    </li>
                    <li>
                        <Chars />
                    </li>
                </ul>
            </div>
        )
    }
};

