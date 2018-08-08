import React from 'react';

class Main extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      articles: null,
      query: "",
    };

    this.fetchArticles = this.fetchArticles.bind(this);
  }

  fetchArticles (event) {
    event.preventDefault();
    let queryString = this.state.query; // fetch articles based on search terms (query)

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
        console.table(response.data);
        this.setState({ articles: response.data });
      });

    this.setState({ query: "" });
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
        // if article.authors is null, render empty li
        const authors = article.authors ? <li>By: {article.authors}</li> : <li>&nbsp;</li>;
        // convert article read time to minutes
        const readTime = article.read_time / 60;
        
        return (
          <div id="article">
            <ul  key={i}>
              <li>
                <a href={article.url}>
                  {article.title}
                </a>
              </li>
              {authors}
              <li id="article-desc">{article.description}</li>
              <ul id="article-stats">
                <li>Score: {Math.round(article.score)}</li>
                <li>{readTime} minute read</li> 
              </ul>
              <li></li>
            </ul>
            <img src={article.image_url} alt={article.slug} />
          </div>
        );
      });
    } else {
      // display default message if articles have not been fetched
      content = <div>Search above for articles!</div>;
    }

    return (
      <div id="main">
        <form onSubmit={event => this.fetchArticles(event)}>
            <input 
              id="search-bar" 
              placeholder="Search by keyword then press Enter" 
              onChange={this.update('query')} 
              value={this.state.query}/>
        </form>
        <ul id="content">
          {content}
        </ul>
      </div>
    );
  }
}

const url = "https://publist.ai/api/v2/jobs.frontend";
const apiKey = process.env.apiKey;

export default Main;