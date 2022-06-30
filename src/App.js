import './styles/App.css';
import React from 'react';
import Info from './components/Info';
import Preview from './components/Preview';

const Page = {
  Info: 'info-button',
  Preview: 'preview-button'
}

const Section = {
  Skills: 's',
  Certifications: 'c'
}

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      page: Page.Info,
      resume: {
        general: {name: "", email: "",location: "",number: ""},
        skills : [],
        certifications: []
      },
      order: [
        Section.Skills,
        Section.Certifications
    ]
    }

    this.buttonPressed = this.buttonPressed.bind(this);
    this.getPage       = this.getPage.bind(this);
    this.updateResume  = this.updateResume.bind(this);
    this.updateOrder   = this.updateOrder.bind(this);

  }

  updateResume(copy) {
    this.setState({
      resume: copy
    })
  }

  updateOrder(newOrder) {
    this.setState({
      order: newOrder
    })
  }

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <p>Resume Builder</p>
          <div className="header-buttons">
            <button className="header-button button-selected" id={Page.Info} onClick={this.buttonPressed}>Info</button>
            <button className="header-button" id={Page.Preview} onClick={this.buttonPressed}>Preview</button>
          </div>
        </header>
        <main>
          {this.getPage()}
        </main>
      </div>
    );
  }

  getPage() {
    switch(this.state.page) {
      default: 
        return (
          <Info 
            resume={this.state.resume} 
            updateResume={this.updateResume} 
            order={this.state.order}
            updateOrder={this.updateOrder}
          />
        );
      case Page.Preview:
        return (
          <Preview 
            resume={this.state.resume} 
            order={this.state.order}
          />
        );
    }
  }

  buttonPressed(event) {

    if(event.target.id !== this.state.page) {
      this.setState({
        page: this.otherPage(),
      })
  
      this.selectButton(event.target);
    }

  }

  otherPage() {
    return this.state.page === Page.Info ? Page.Preview : Page.Info;
  }

  selectButton(buttonPressed) {
    document.querySelector('#info-button').classList.remove('button-selected');
    document.querySelector('#preview-button').classList.remove('button-selected');
    buttonPressed.classList.add('button-selected');
  }

}

export default App;
export { Section };
