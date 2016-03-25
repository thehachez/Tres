import * as React from 'react';
// PROPS INTEFACES
import { PropStates } from '../stores/maProps';
import { PropsBoxesDataMg } from '../stores/maProps';

export interface Props {
    children: any;
    dataMg: Array<PropsBoxesDataMg>;
}

export class MainAdministration extends React.Component<Props, any> {
    render() {
        return (
            <div className="col_administration">
                {
                    React.cloneElement(this.props.children,
                        {
                            dataMg: this.props.dataMg
                        })
                }
            </div>
        )
    }
};