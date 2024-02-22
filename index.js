const express=require('express');
require('dotenv').config()
const app=express();
const port=4000;
const githubData={
    "login": "vanshbatra2003",
    "id": 101448776,
    "node_id": "U_kgDOBgv8SA",
    "avatar_url": "https://avatars.githubusercontent.com/u/101448776?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vanshbatra2003",
    "html_url": "https://github.com/vanshbatra2003",
    "followers_url": "https://api.github.com/users/vanshbatra2003/followers",
    "following_url": "https://api.github.com/users/vanshbatra2003/following{/other_user}",
    "gists_url": "https://api.github.com/users/vanshbatra2003/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vanshbatra2003/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vanshbatra2003/subscriptions",
    "organizations_url": "https://api.github.com/users/vanshbatra2003/orgs",
    "repos_url": "https://api.github.com/users/vanshbatra2003/repos",
    "events_url": "https://api.github.com/users/vanshbatra2003/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vanshbatra2003/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Vansh Batra",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-03-12T07:25:54Z",
    "updated_at": "2024-02-22T08:10:14Z"
  }

app.get('/',(req,res)=>{
    res.send('hello world');
})
app.get('/twitter',(req,res)=>{
    res.send('kalakutta');
})
app.get('/login',(req,res)=>{
    res.send('<h1>succesfully</h1>');
})
app.get('/chai',(req,res)=>{
    res.send('<h2>Chai aur Code</h2>')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${port}`);
})