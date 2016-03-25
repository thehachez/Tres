import * as React from 'react';

export class MainAdministration extends React.Component<any, any> {
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