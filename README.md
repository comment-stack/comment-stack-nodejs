# Comment Stack

Manage comments for your community easily

*This project was built as a community idea in the GoStack Bootcamp by rocketseat.com.br

# Use

## Before you start
Create your own .env file based on the .env.example

As any API REST, you will need a client to make use of this task manager.
## Creating a new user
`POST: localhost:3000/users`
`body: { "name": "Jhon", "email": "jhon.doe@example.org", "password": "unhackablepassword" }`
## Login
`POST: localhost:3000/sessions`
`body: { "email": "jhon.doe@example.org", "password": "unhackablepassword" }`

For every other route you will need to login and send the authentication token within the Authentication header:
`Authentication: Bearer {token}`

## Listing your comments
`GET: localhost:3000/comments`
## Posting a comment
`POST: localhost:3000/comments`
`body: { "content": "I have something to say !"}`
## Editing your comment
`PUT: localhost:3000/comments/:id`
`body: { "content": "Oops I did it again"}`
## Deleting your comment
`DELETE: localhost:3000/comments/:id`
## Voting on a comment
`POST: localhost:3000/votes`
`body: { "comment_id": 1}`
## Update an existing user's password
`POST: localhost:3000/users`
`body: { "password": "87654321", "confirmPassword": "87654321","oldPassword": "12345678" }`

# Configuration
### For Development
`yarn`
`yarn dev`

# Developers

Miguel Alemán
