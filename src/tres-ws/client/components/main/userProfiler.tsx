import * as React from 'react';
interface Props {
    userStatus: string;
}

export class UserProfiler extends React.Component<Props, any> {
    render() {
        return (
            <div className="row_prof_top_mleft">
                <ul className="ul_prof_top_mleft">
                    <li>
                        <circle className={"user-status " + this.props.userStatus || "" }></circle>
                        <div className="img-prof"></div>
                    </li>
                    <li>
                        <div className="user-id">horacio</div>
                        <div className="user-range">administrador</div>
                    </li>
                </ul>
            </div>
        )
    }
};

