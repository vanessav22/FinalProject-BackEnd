# FinalProject-BackEnd

 CaringCommunities

<br>

# Quick Compo

<br>

## Description

This is an app to help people to find charity associations in Lisbon. In this app, users (people who want to help) and charity associations
can registry. The charity will be allocated under specific topic and in this way will be easier for the users to find the charity
that they want to help. The users can leave a coment.

Welcome to our charity website, where you can make a difference and help those in need. We offer a variety of charitable options to choose from, so you can find the cause that speaks to your heart.
Our mission is to create a world where everyone has access to basic necessities, equal opportunities, and a better quality of life.
We believe that every act of kindness and generosity can make a significant impact, and that's why we offer various ways for you to contribute, including donations or volunteering. Whether you want to donate money to support a particular project, give your time to help with a local initiative.
We are grateful for your interest in helping the community, and we hope that you'll find an opportunity to get involved and make a positive impact on the lives of those who need it most. Together, we can build a brighter future for everyone.

## User Stories

-  **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As an anonymous charity I can sign up on the platform so that I can add my charity to the platform.
-  **Signup:** As an anonymous user I can sign up on the platform so that I can see the charities in the platform.
-  **Login:** As a user or charity I can login to the platform.
-  **Logout:** As a logged in user I can logout from the platform so no one else can use it.
-  **Edit Profile**: As a logged in user I can visit my profile wher I can add or edit information regarding my Charity. 
-  **Charity Groups:** As a logged in user I can access a list of charities. 
-  **Charities Details:** As a user I want to see the Charity details, be redirected to the Charity's page and leave a comment/review.


## Backlog

- Can create account;
- See the list of charities;
- Can select specific charity and see details;
- Can add review;
- Can be directed to the charity website;

<br>


# Client / Frontend

## React Router Routes (React App)

| Path                         | Component            | Permissions                | Behavior                                                  |
| ---------------------------- | -------------------- | -------------------------- | --------------------------------------------------------- |
| `/login`                     | Login                | anon only `<AnonRoute>`    | Login form, navigates to associations page.               |
| `/signupCharity`             | Signup               | anon only  `<AnonRoute>`   | Signup form for Charities to registry, navigates to home login.                     |
| `/signupUser`                | Signup               | anon only  `<AnonRoute>`   | Signup form for users, navigates to home login.                     |
| `/`                          | Home                 | public  <Route>`           | Home page with nav bar.                                               |
| `/pages/EditProfile/id`      | EditProfile          | charity only `<PrivateRoute>` | Charity profile for the current Charity where they can add or edit info.       |
| `/pages/CharityGroups`    | CharityGroupsPage    | user and charity only `<PrivateRoute>` | Show a page with the 4 different groups of charities, where can click and get the charity details.                               |
| `/pages/CharityDetails/id`   | CharityDetailsPage   | user and charity only `<PrivateRoute>` | Show a page with with detailed information about the charity that user wants to see. User can leave review.                                  |




## Components

Pages:

- Login

- SignupUser

- SignupCharity

- Home

- EditProfileCharity

- CharityGroups

- CharityDetails



<br>

Components:

- Navbar
- StyledCard
- StyledButton
- StyledForm



## Services

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.signup(charity)`
    - `.logout()`
    - `.validate()`



<br>


# Server / Backend


## Models

User:

    username: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
	

      

      
Charity:
 
    name: {
        type: String,
        required: false,
        unique: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
      },
      
      image: {
        type:String,
      }
      
      typeofCharity: {
        type:String,
        required: true,
      }

      urgencyNumber: {
        type:Number, 
      }

      textMessage: {
        type: String,
      }

      UrlLink {
        type: String, 
      }

      reviews:
      type: [{ type: Schema.Types.ObjectId, ref: "Review" }]



Review:
  
    userId: {
      type: { type: Schema.Types.ObjectId, ref: "User" }
    }

   userComment: {
     type: String,
   }



<br>


## API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | ---------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |

| POST        | `/auth/signupUser`     | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/signupCharity`  | {name, email, password,...}  | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`          | {email, password}            | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`         |                              | 204            | 400          | Logs out the user                                            |
| GET         | `/pages/CharityGroups  | {id}                     |                |              | Show a page with the 4 different groups of charities                                   |
| GET         | `/pages/CharityDetails/id  | {id}                                                     | Where the user can see information about the charity and write review
| PUT         | `/pages/EditProfileCharit/:id | {all the components in the Charity model}  |           | 400          | edit Charity                                                  |
| DELETE      | `/pages/EditProfileCharit/:id | {id}                  | 200            | 400          | delete Charity                                                |


<br>

## API's

When the Charity sign up will create a "CharityUser" for our database. 

<br>

## Packages

NodeMailer (Bonus)

Styled-Components
Axios 
tostify


<br>


## Links

<br>

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/vanessav22/FinalProject-BackEnd)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com) - The url to your *public* presentation slides

### Contributors

Caroline Kuhn - <github-usernam4e> - <linkedin-profile-lhttps://www.linkedin.com/in/kuhncaroline/ra/> 
Vanessa Vieira <https://github.com/vanessav22> - <linkedin-profile-https://www.linkedin.com/in/vanessafvieira22/>