import React from 'react';
import './App.css';
import data from './data';
import ContentButton from './components/ContentButton';
import ContentList from './components/ContentList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { content: data }
  }

  isOneShot(tvShow) {
    return tvShow.episodes.length === 1
  }

  byYear(contentA, contentB) {
    const yearA = contentA.release;
    const yearB = contentB.release;

    let comparison = 0;
    if (yearA > yearB) {
      comparison = -1;
    } else if (yearA < yearB) {
      comparison = 1;
    }

    return comparison
  }

  films() {
    let films = this.state.content.films.concat(
      this.state.content.tv_seasons.filter(this.isOneShot)
    );
    
    return films.sort(this.byYear);
  }

  tvSeasons() {
    return this.state.content.tv_seasons.filter((s) => {
      return !this.isOneShot(s);
    }).sort(this.byYear);
  }
  
  toggleContent(e) {
    let open = e.target.dataset.openContent;
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
      button.classList.remove("selected");
    }

    let contents = document.getElementsByClassName('content-list');
    for(let content of contents){
      if (content.id === open) {
        content.classList.remove("hidden");
        e.target.classList.add("selected");
      } else {
        content.classList.add("hidden")
      }
    }
  }

  render() {
    return (
      <div className="App">
        <ContentButton name="films" callbackFunction={this.toggleContent} default={true}/>
        <ContentButton name="tv-seasons" callbackFunction={this.toggleContent} />
        <ContentList name="films" resources={this.films()} hidden={false} />
        <ContentList name="tv-seasons" resources={this.tvSeasons()} hidden={true} />         
      </div>
    )
  }
}

export default App;
