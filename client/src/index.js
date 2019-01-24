import React from 'react'
import ReactDOM from 'react-dom'
import Twitter from 'twitter-lite'
import './index.css'
import App from './components/App'

const client = new Twitter({
  subdomain: "api",
  consumer_key: process.env.CONSUMER_KEY, // from Twitter.
  consumer_secret: process.env.CONSUMER_SECRET, // from Twitter.
  access_token_key: process.env.ACCESS_TOKEN_KEY, // from your User (oauth_token)
  access_token_secret: process.env.ACCESS_TOKEN_SECRET // from your User (oauth_token_secret)
});

client
  .get("account/verify_credentials")
  .then(results => {
    console.log("results", results);
  })
  .catch(console.error);

ReactDOM.render(<App />, document.getElementById('root'))
