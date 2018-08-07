import React from 'react';

class Main extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      articles: null,
      query: null,
    };

    this.fetchArticles = this.fetchArticles.bind(this);
  }

  fetchArticles (event) {
    event.preventDefault();
    let queryString = this.state.query;
    console.log(queryString);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'Authorization': 'Bearer ' + apiKey,
      },
      body: `{"query": "${queryString}"}`
    })
      .then(res => res.json())
      .catch(error => console.log('Error:', error))
      .then(response => {
        this.setState({ articles: response.data });
      });
  }

  update (field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  render () {
    let content = <div></div>;

    if (this.state.articles) {
      let articles = this.state.articles;
      content = articles.map((article, i) => {
        return (
          <ul key={i}>
            <li>{article.title}</li>
            <li>by {article.authors}</li>
            <li>{article.description}</li>
            <li>{article.url}</li>
            <li></li>
          </ul>
        );
      });
    } else {
      content = <div>No articles yet!</div>;
    }

    return (
      <div>
        <form onSubmit={event => this.fetchArticles(event)}>
          <label htmlFor="search">Search by keywords:
            <input type="text" placeholder="Search terms" onChange={this.update('query')}/>
            <input type="submit"/>
          </label>
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