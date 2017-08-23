import React, { Component } from 'react';
import './App.css';

// list of some item
const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

class App extends Component {
  render() {
        const welcome = 'Welcome to HackerOlds, not HackerNews.';
        return (
          <div className="App">
              <h2>{welcome}</h2>
              {
                  list.map( item =>
                      <div key={item.objectID}>
                          <span>
                              <a href={item.url}>{item.title}</a>
                          </span>
                          <span>{item.author}</span>
                          <span>{item.num_comments}</span>
                          <span>{item.points}</span>
                      </div>
                  )
              }
          </div>
        );
  }
}

export default App;
