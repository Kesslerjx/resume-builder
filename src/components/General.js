import React from 'react';
import '../styles/Info.css'

class General extends React.Component {

    render() {

        const general = this.props.resume.general;

        return (
            <div className='section-wrapper'>
                <p className='section-title'>General</p>
                <input value={general.name} onChange={(e) => this.updateName(e)} type="text" placeholder='Name' className='section-input'></input>
                <input value={general.email} onChange={(e) => this.updateEmail(e)} type="email" placeholder='Email' className='section-input'></input>
                <input value={general.number} onChange={(e) => this.updateNumber(e)} type="text" placeholder='Number' className='section-input'></input>
                <input value={general.location} onChange={(e) => this.updateLocation(e)} type="text" placeholder='Location' className='section-input'></input>
            </div>
        )
    }

    updateName(event) {
        let copy          = this.props.resume;
        copy.general.name = event.target.value;
        this.props.updateResume(copy);
    }

    updateEmail(event) {
        let copy          = this.props.resume;
        copy.general.email = event.target.value;
        this.props.updateResume(copy);
    }

    updateLocation(event) {
        let copy          = this.props.resume;
        copy.general.location = event.target.value;
        this.props.updateResume(copy);
    }

    updateNumber(event) {
        let copy          = this.props.resume;
        copy.general.number = event.target.value;
        this.props.updateResume(copy);
    }
}

export default General;