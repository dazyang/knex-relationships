# Boilerplate: Knex.js

User stories for RDBMS practice.

## Install

Enter the commands below in your terminal to get started:
```
git clone https://github.com/dev-academy-challenges/boilerplate-knex
mv boilerplate-knex knex-relationships
cd knex-relationships
npm install
npm run knex migrate:latest
npm run knex seed:run
npm start
```

If you would like to push changes back to your own repository, you'll need to create an empty repository in your GitHub and change the origin remote to point to that repo:

```
git remote set-url origin https://github.com/YOUR-USERNAME/knex-relationships
```

# MVP

As a user I want to click on a user's name and see their user profile page so that I can find out more about them.

This is a one to one relationship: a user HAS ONE profile page.
You'll need a profiles table with a user_id column and some other useful information about the user, like their URL and maybe a profile picture.
As an administrator I want to add a new user and their profile information so that I can grow my user base.

This will involve writing to more than one table in separate queries.
You should create a form to enter the user information, and a route which will be the form's action.
As a user I want to create a blog post so that I can express myself.

This is a one to many relationship: a user HAS MANY blog posts.
You'll need a posts table with a user_id column, and some named title and content that contain the post text.
As a user I want to view a list of all blog posts for each user so that I can see what others have been writing.

As a user I want to view a single blog post so that I can read it.

# Stretch

As a user I want to add another user to my favourites list so that I can easily view their profile pages.

This is a many to many relationship: MANY users HAVE MANY favourites.
You'll need a favourites join table which has user_id and favourite_id columns.
Think about how you're going to add rows to this table as users add favourites to their list.
As a user I want to filter the list of blog posts so that it only shows users who are on my favourites list.
