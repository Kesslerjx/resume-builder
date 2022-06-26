import React from 'react';
import '../styles/Info.css'
import General from './General'

class Info extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { resume, updateResume } = this.props;

        return (
            <div className='info-wrapper'>
                <General resume={resume} updateResume={updateResume}/>
            </div>
        )
    }
}

export default Info;