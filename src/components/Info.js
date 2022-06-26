import React from 'react';
import '../styles/Info.css';
import General from './General';
import Skills  from './Skills';

class Info extends React.Component {

    render() {

        const { resume, updateResume } = this.props;

        return (
            <div className='info-wrapper'>
                <General resume={resume} updateResume={updateResume}/>
                <Skills resume={resume} updateResume={updateResume}/>
            </div>
        )
    }
}

export default Info;