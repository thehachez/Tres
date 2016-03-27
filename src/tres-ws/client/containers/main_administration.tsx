import * as React from 'react';

export interface Props {
    children: any;
    dataMg: Array<Tres.DataMgTask>;
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