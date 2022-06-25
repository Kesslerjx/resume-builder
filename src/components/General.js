import React from 'react';
import '../styles/Info.css'

class General extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { general, functions } = this.props;

        return (
            <div className='section-wrapper'>
                <p className='section-title'>General</p>
                <input value={general.name} onChange={functions.nameChanged} type="text" placeholder='Name' className='section-input'></input>
                <input type="email" placeholder='Email' className='section-input'></input>
                <input type="text" placeholder='Location' className='section-input'></input>
                <input type="text" placeholder='Number' className='section-input'></input>
            </div>
        )
    }
}

export default General;