import * as React from 'react';
import { Actions } from '../../../actions/maActions';
// svg items 
import { ItemData,
    ItemTerminal,
    ItemtTouch,
    ItemAnuncer } from '../../svg/items';

interface Props {
    text: string;
    type: string;
    location: any;
    history: any;
}


export default class OpRectangle extends React.Component<Props, any> {
    constructor(props) {
        super(props);
    }
    render() {

        function renderType(type) {

            switch (type) {
                case "data":
                    return <ItemData />
                case "terminals":
                    return <ItemTerminal />
                case "touchs":
                    return <ItemtTouch />
                case "announcers":
                    return <ItemAnuncer />
            }
        }

        return (
            <div className="ul_op_rectangle_inset"  onClick={
                () => Actions.goToMainBoxes(this.props.location, this.props.history)
            }>
                <ul className="ul_op_rectangle">
                    <li>
                        {
                            renderType(this.props.type)
                        }
                    </li>
                    <li>
                        <p>{ this.props.text }</p>
                    </li>
                </ul>
            </div>
        )
    }
};
