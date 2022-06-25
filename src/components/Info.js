import React from 'react';
import '../styles/Info.css'
import General from './General'

class Info extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { resume, functions } = this.props;

        return (
            <div className='info-wrapper'>
                <General general={resume.general} functions={functions}/>
            </div>
        )
    }
}

export default Info;