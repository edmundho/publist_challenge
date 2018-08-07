import React from 'react';

class Main extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      articles: null
    };

    this.fetchArticles = this.fetchArticles.bind(this);
  }

  fetchArticles (event) {
    event.preventDefault();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'Authorization': 'Bearer ' + apiKey,
      },
      body: '{"query": "tech"}'
    })
      .then(res => res.json())
      .catch(error => console.log('Error:', error))
      // .then(response => console.log('Success:', response.data));
      .then(response => {
        this.setState({ articles: response.data });
      });
  }

  render () {
    let content = <div></div>;

    if (this.state.articles) {
      let articles = this.state.articles;
      content = articles.map(article => {
        return (
          <ul>
            <li>{article.title}</li>
            <li>{article.description}</li>
          </ul>
        );
      });
    } else {
      content = <div>No articles yet!</div>;
    }

    return (
      <div>
        <h1>main component</h1>
        <form onSubmit={this.fetchArticles}>
          <input type="text" placeholder="Search terms"/>
          <input type="submit"/>
        </form>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}

const url = "https://publist.ai/api/v2/jobs.frontend";
const apiKey = process.env.apiKey;

export default Main;