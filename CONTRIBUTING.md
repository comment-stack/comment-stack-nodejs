# Contributing to Comment Stack (Node js)

:purple_heart::rocket: First off, thanks for taking the time to contribute! :rocket::purple_heart:

The following is a set of guidelines for contributing to Comment Stack, which are hosted in the [Comment Stack Organization](https://github.com/comment-stack) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## What should I know before I get started?
###  About Comment Stack
Comment Stack is an open source project created by the rocketseat community as a tool for helping moderate the questions that are asked in a live session. 

### Rocketseat structure
Since the project was started within the rocketseat community, it was decided to use the rocketseat app structure, so everyone that has completed the GoStack bootcamp, or even the Starter and Omnistack Week programs can be participating in the project easily.

 #### File structure for a rocketseat app
```js
- root/
 - src/
  - app.js
  - server.js
  - routes.js
  - app/
   - controllers/
    - UserController.js
   - models/
    - User
   - middlewares/
    - auth.js
  - config/
   - database.js
  - database/
   - migrations/
   - index.js
- package.json
- .env
- .prettierrc
- ...
```

Each folder represents a module for the application, and a specific domain. 
The `app` folder represents the business layer for the main application and contains the controllers, models and middlewares that rules the app flow, it will possibly contain a `services` folder in the future.
Within the `config` folder are all the configuration files related to external modules and dependencies that the app consumes such as database configuration, mail provider, dot-env files parser, and so on. Whenever you need to configure a new dependency on the project you should always do so that it can be plugged in-out of the application by changing its config file only.
The `database` folder contains the ORM domain.

### Remember to have fun !
This is a project for everyone, and it should be fun to work in it. If you have any trouble with it, feel free to reach out and ask. Remember that this project was created by others like you, who are not afraid of chasing their dreams even if it's a rough road... we're in this road together.

## How Can I Contribute?

This is a starting project and every help is welcome. You can contribute by having an awesome feature idea (even if you don't know how to implement it) or by solving a known problem with your development jedi skills.

### Reporting Bugs
Before creating bug reports, please check the issues list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible. The information it asks for helps us resolve issues faster. 

#### How Do I Submit A (Good) Bug Report?
Explain the problem and include additional details to help us reproduce the problem:

-   **Use a clear and descriptive title**  for the issue to identify the problem.
-   **Describe the exact steps which reproduce the problem**  in as many details as possible. For example, start by explaining your environment details, if you are using linux, mac, windows, a Heroku server or maybe your mother's old toaster. When listing steps,  **don't just say what you did, but explain how you did it**. For example, if you can't create a comment, explain if you used an HTTP client or you tried using your own react native app.
-   **Describe the behavior you observed after following the steps**  and point out what exactly is the problem with that behavior.
-   **Explain which behavior you expected to see instead and why.**

### Your First Code Contribution
You can start by looking through the `good-first-issue` and `help-wanted`issues:

#### Local development
Every feature should be developed in a local environment. To configure your own comment-stack application, go check the project's README.

### Pull Requests

The pull request process exists for various reasons:

-   Maintain the project's quality
-   Fix problems that are important to users
-   Engage the community in working together
-   Enable a sustainable system for the project's maintainers to review contributions

The steps to have your contribution up and running:

- Read the styleguides and get ready to code
- Select an issue to tackle
- Comment on the issue so other people know that you're working on it
- Fork the repository
- Create a new branch (remember the styleguides)
- Start coding ("Bora codar!")
- Test your code
- Create a new pull request (styleguides anyone?)
- Keep up the awesomeness

## Styleguides
### Branch naming
-   Use the prefix `feature/` for new features and `hotfix` for bug fixing.
-   Name it after your feature.
-   Use hyphen `-` as word separator and never underline `_` or camel case.

### Git Commit Messages
-   Use the prefix `UPDATE` for new features, `FIX` for bug fixing, `STYLE` for styling the code (styling should not impact the functionality) and `DONE` when you've finished your feature.
-   Use the present tense ("Add feature" not "Added feature")
-   Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
-   Limit the first line to 72 characters or less
-   Reference issues and pull requests liberally after the first line

### JavaScript Styleguide
We use the Airbnb javascript styleguide. It is configured by the eslint plugin.

