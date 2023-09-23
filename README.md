# Fakebook
## _The better alternative to Facebook_

(https://master.d2v83wrsmysfjd.amplifyapp.com/)


Fakebook is a Full Stack, mobile friendly, social media application utilizing the MERN stack and popular web 
technologies to create a replica of the popular social media application "Facebook".

![fakebook](https://github.com/nickroxcks/Fakebook_client/assets/34073804/bdd563db-a98a-485b-a722-e44702a3021e)

## Features

- User Login/Registration
- Token authorization to view authorized content and save user session
- Intuitive UI allowing users to easily navigate through app
- Responsive/mobile-friendly design from the ground up
- Darkmode/Lightmode themes
- Home dashboard listing all public posts
- Adding/Deleting friends
- Viewing individual user profiles
- Creating public posts with drag and drop images and attachment support
- Image upload verification and backend storage
- Liking and commenting on posts
- Clean navigation bar to navigate between home page and messages

## Tech

Fakebook utilizes the MERN stack along side a number of libraries and technologies:

- [React] - Frontend JS Library used to create web applications
- [Express] -  Fast node.js network app framework that provides a robust set of features
- [node.js] - Evented I/O for the backend
- [MongoDB] - NoSQL database used for storing data on the backend side of application
- [MUI] - Fast growing library of React Components commonly used in a variety of applications
- [Redux + toolkit] - Library used to manage application wide state and persistent storage
- [JSON Web Token] - Popular token authorization method used in many applications
- [bcrypt] - Popular node library frequently used for password hashing
- [formik + yup] - Form validation React libraries used to make reactive forms
- [AWS] - Cloud hosting platform used to store application
- [Mongoose] - Node library which simplifies the interactions between Mongo Databases and Node servers


## Using the application

Navigate to the front end application at (https://master.d2v83wrsmysfjd.amplifyapp.com/) and create an account
at the login page. Registration requires a first name, last name, email, password, occupation, location, and a profile picture.

Upon logging in, your home dashboard will be displayed with all public posts. Try creating your own post using the "What's on your mind" toolbar. 

Friends can be added by clicking the add friend shown beside the username in every post. To view an individual users profile, click the username to be taken to their profile page.

# Design Documentation

![FakebookHighLevel](https://github.com/nickroxcks/Fakebook_client/assets/34073804/46c8a494-2e4c-40be-898b-8be46a4b4d21)


#### Front End Design

The frontend is the side of an application for which the user interacts with. In the case of this web application, it is the web browser. There are many web technologies out there so when designing an application it's important to choose the technologies that best suit your application. Currently, the two most popular web stack technologies in 2023 are the MERN stack and the MEAN stack, with the primary difference between the two being the front end technologies used. In the case of this application, we are using MERN which uses the React library instead of the Angular framework. 

To give some insight why React was chosen for this project, React itself was developed by Facebook. The optimal use-case for React is when you are trying to develop a singe page application (SPA) that requires heavy DOM manipulation, where multiple views are being updated at once and app elements need to be reused throughout the application (component based model). Such scenarios occur frequently in social media apps, as it is in the case of this project Fakebook.

As React has been out for a long time, there are also many incredible React component libraries out there. Writing fresh UI components from vanilla html css and javascript is extremely time consuming. Buttons, forms, text fields, are all common components used in web applications.  As a developer writing these from scratch is not optimal time usage, and instead you want to focus on developing the actual business logic of your application. Hence, React libraries such as Material UI (MUI) can be used. 

Material UI is a component library which delivers ready to use components which are commonly used throughout many applications. Many of the components you see throughout Fakebook are from MUI. The library itself is designed from the ground up to be mobile-responsive. It allows styling and color palettes to be shared between it's components, making it easy to change application themes such as dark mode with little effort.

All of these frontend technolgies combined align exactly with Fakebook's desired core features. Mobile responsiveness, dark/light mode, intuitive UI, etc. As such, MERN is an optimal stack for this project, and a stack well supported in 2023 that will only continue to evolve.

##### Front End Code Overview
![image](https://github.com/nickroxcks/Fakebook_client/assets/34073804/83ccb791-a1ba-44d7-9e26-4bcaff7f283c)


##### Front End Hosting Solution
AWS Amplify was chosen as the hosting solution for this Front End. There is a lot to know about AWS technolgies and many tech companies consider knowledge of AWS technolgies a valuable skill. As such, in order to improve my skills and knowledge of AWS, this was the hosting solution I chose. Amplify itself makes it very easy to auto deploy code to a live site with a simple git commit. It's reliable, secure, and well supported.

#### Back End API Design

This project requires the storing of dynamic user data (profile pictures, attachments. etc), as well as server side authorization to ensure only certain actions can be performed by certain users. As such, a backend is required. The combination of running NodeJS with the Express is an ideal solution for the backend of this project as the two make it very convenient for developers to handle incoming requests.

When it comes to choosing the database, there were was the choice between relational databases like Oracle or Postgres, or nonrelational like MongoDB. While a relational database definitely has it's advantages, the fakebook architecture which involves JSON transmitted data makes it extremely favorable to instead use MongoDB. MongoDB stores data in the form of documents, a similar format to how JSON data is structured. It is this similarity in data structure that makes it very convenient and optimal for developers to write back end code to process API requests, and do them in such a way that is fast and reliable. Node also has access to the mongoose library, a library used in this project which makes it extremely easy to interact with mongo databases.

The backend for this project runs on a linux container in the cloud, using Nodejs and the Express framework to recieve REST API requests. When the user interacts with the frontend, such as clicking a button to view a user profile, a rest API request is sent to the backend. In this example, a GET() request is sent with the user_id inside the request body. When the request is recieved, the back end will first verify if the user is authorized to make the request, by verifying the token sent in the request body. The Jsonwebtoken library is used to handle the token logic, as it is a widely accepted authorization method for smaller Node projects such as Fakebook. After the request is authorized via the token, the Express framework in place will parse the request and determine which actions to take. In our case, a request will be sent to the database to find the data associated with the user id and send the data back to the frontend. 

For where to put the database, there was the option to either store it on the same backend server where the API is stored, or place the db on a different server. The optimal choice can very project to project depending on resources and costs, but in the case of Fakebook a seperate db server is the optimal choice. This is because having an API and a DB run on the same server can impact server performance, as without proper infrastructure on the server resources will be shared and tied up. MongoDB offers a scalable cloud solution for databases called MongoDB Atlas. It's very easy to create a database on Atlas and have it quickly ready to go to interact with the backend, and as such Atlas was the chosen solution for this projects database. 

##### Back End Code Overview
![image](https://github.com/nickroxcks/Fakebook_client/assets/34073804/e3573fba-adac-4b56-b4a7-7745aedca3a8)


The code for the API is structured such that the API routes are seperated from the controller logic and actions which take place with each route. The seperation provides better readability, maintainability, and extensibility. With the use of Mongoose, models can also be defined for database documents. While MongoDB is a NoSQL database and doesn't require any relational logic to run optimally, it's good to have models in place for all documents to ensure all data submitted is consistent. 

## License

**Free Software!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [React]: <https://react.dev/>
[express]: <http://expressjs.com>
   [node.js]: <http://nodejs.org>
   [MongoDB]: <https://www.mongodb.com/>
   [MUI]: <https://mui.com/>
   [Redux + toolkit]: <https://redux.js.org/>
   [AngularJS]: <http://angularjs.org>
   [JSON Web Token]: <https://www.npmjs.com/package/jsonwebtoken>
   [bcrypt]: <https://www.npmjs.com/package/bcrypt>
   [formik + yup]: <https://formik.org/>
   [AWS]: <https://aws.amazon.com/>
   [Mongoose]: <https://mongoosejs.com/docs/>
