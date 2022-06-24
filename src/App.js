import './App.css';
import React from 'react';
import Info from './components/Info';
import Preview from './components/Preview';

const Page = {
  Info: 'i',
  Preview: 'p'
}

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      page: Page.Info,
    }

    this.buttonPressed = this.buttonPressed.bind(this);
    this.getPage       = this.getPage.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <p>Resume Builder</p>
          <div className="header-buttons">
            <button className="header-button button-selected" id="info-button" onClick={this.buttonPressed}>Info</button>
            <button className="header-button" id="preview-button" onClick={this.buttonPressed}>Preview</button>
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
        return (<Info />);
      case Page.Preview:
        return (<Preview />);
    }
  }

  buttonPressed(event) {
    this.setState({
      page: this.otherPage(),
    })

    this.selectButton(event.target);
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
