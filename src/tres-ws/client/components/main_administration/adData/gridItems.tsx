import * as React from 'react';

import { ItemClock
     } from '../../svg/items';

interface Props {

}

export default class GridItems extends React.Component<Props, any> {
    render() {
        return (
            <ol className="ol_griditems">
                <li></li>
                <li></li>
                <li></li>
            </ol>
            )
    }
}