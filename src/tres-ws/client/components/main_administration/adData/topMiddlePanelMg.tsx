import * as React from 'react';
import { Actions } from '../../../actions/maActions';

interface Props {
}

export default class TopMiddlePanelMg extends React.Component<Props, any> {
    render() {
        return (
            <ul className="ul_topmiddlepanelmg">
                <li>
                    <p onClick={ () => Actions.goToMgData("mgDataArea") }>areas</p>
                </li>
                <li>
                    <p onClick={ () => Actions.goToMgData("mgDataTask") } >tareas</p>
                </li>
            </ul>
        )
    }
};
