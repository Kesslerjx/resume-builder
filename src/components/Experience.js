import React from 'react';
import '../styles/Info.css';
import { v4 as uuidv4 } from 'uuid';
import { getIndexInNodes, moveTo } from '../modules/array-functions';
import Job from '../modules/Job.js';
import SectionHeader from './SectionHeader';
import ListItem from './ListItem';

export default class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name:  "",
            title: "",
            from:  "",
            to:    "",
            task:  "",
            tasks: []
        }

        this.Placeholder = {
            name: 'Company',
            title: 'Title',
            from: 'From',
            to: 'To',
            task: 'Task'
        }

        this.moveItem   = this.moveItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    render() {

        const {resume, moveSection} = this.props;

        return (
            <div className='section-wrapper'>
                <SectionHeader title="Experience" moveSection={moveSection} />
                <div className='input-button-wrapper'>
                    <div className='multiple-inputs'>
                        <input value={this.state.name} onChange={(e) => this.valueChanged(e)} type="text" placeholder={this.Placeholder.name} className='section-input'></input>
                        <input value={this.state.title} onChange={(e) => this.valueChanged(e)}type="text" placeholder={this.Placeholder.title} className='section-input'></input>
                        <input value={this.state.from} onChange={(e) => this.valueChanged(e)}type="text" placeholder={this.Placeholder.from} className='section-input'></input>
                        <input value={this.state.to} onChange={(e) => this.valueChanged(e)}type="text" placeholder={this.Placeholder.to} className='section-input'></input>
                        <div className='input-button-wrapper'>
                            <input value={this.state.task} onChange={(e) => this.valueChanged(e)} type="text" placeholder={this.Placeholder.task}  className='section-input'></input>
                            <button className='add-button' onClick={(e) => this.addTask()}>Add</button>
                        </div>
                        <ul>
                            {this.state.tasks.map(task => 
                                <li key={uuidv4() }>{task}</li>
                            )}
                        </ul>
                        <button className='add-button' onClick={() => this.addJob()}>Add</button>
                    </div>
                </div>
                <div className='list-wrapper'>
                    {resume.experience.map(job => this.getListItem(job))}
                </div>
            </div>
        )
    }

    getListItem(job) {
        return <ListItem 
            content={
                <div>
                    <p>{`${job.title} at ${job.name}`}</p>
                    <p>{`${job.from} - ${job.to}`}</p>
                </div>
            }
            moveItem={this.moveItem}
            deleteItem={this.deleteItem}
        />
    }

    getIndex(event) {
        let target  = event.target.parentElement.parentElement;
        let parent  = event.target.parentElement.parentElement.parentElement;
        return getIndexInNodes(target, parent);
    }

    moveItem(event, direction) {
        let index   = this.getIndex(event)
        let copy    = this.props.resume; 
        copy.experience = moveTo(index, index + direction, copy.experience);
        this.props.updateResume(copy);
    }

    deleteItem(event) {
        let index  = this.getIndex(event)        
        let copy   = this.props.resume;
        copy.experience.splice(index, 1);
        this.props.updateResume(copy);
    }

    valueChanged(event) {
        switch(event.target.placeholder) {
            case this.Placeholder.name:
                this.setState({
                    name: event.target.value
                })
            break;
            case this.Placeholder.title:
                this.setState({
                    title: event.target.value
                })
            break;
            case this.Placeholder.from:
                this.setState({
                    from: event.target.value
                })
            break;
            case this.Placeholder.to:
                this.setState({
                    to: event.target.value
                })
            break;
            default:
                this.setState({
                    task: event.target.value
                })
        }
    }

    addJob() {
        let canAdd = (
            this.state.name !== "" && 
            this.state.title !== "" &&
            this.state.from !== "" &&
            this.state.to !== "" &&
            this.state.tasks.length !== 0
        )

        if(canAdd) {
            let newJob        = new Job(this.state.name, this.state.title, this.state.from, this.state.to, this.state.tasks);
            let updatedResume = this.props.resume;

            updatedResume.experience.push(newJob);
            this.props.updateResume(updatedResume);
        }
    }

    addTask() {
        this.setState({
            tasks: [...this.state.tasks, this.state.task],
            task: ""
        })
    }
}