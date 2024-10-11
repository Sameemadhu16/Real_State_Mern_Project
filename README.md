# Real_State_Mern_Project
Real state app using MERN stack

install talwind css and raect js,
create about,home,profile,signin,signout pages,
install react router dom in client folder,
goto app.jsx and import ,

create header component and import it in app.jsx,
install react-icons and import it in the header component ,
link home,about,signin

npm init -y ( initialize package.json file in the root directory),
create index.js file in the api folder,
install express and import it in the index.js,create app,
install nodemon for restart the server -> update json fie script

install mongoose to connect the database and import it index.js,
install dotenv package for woking env files and import in index.js

create model folder and create user.model.js,
create in api routes folder and create user.route.js in here.
create controllers folder and create user.controller.js file
create sign up api route use insomnia
install bcryptjs for encrypt the password
create a middleware and function to handle the error

complete sign up page UI
use handleChanger and handleSubmit functions and prevent default for 
preventing the refresh after the submit button
set server proxy in the vite.config file

create sign in api route and use it in the sign in page
install jsonwebtoken for token and import it in the user.controller.js
create a middleware for the token and use it in the user.route.js

install redux and react-redux and import it in the index.js
add configureStore in the store folder and import it in the index.js
import Provider in the main.jsx and wrap the app component
create userSlice in the user folder and import it in the configureStore
include in sign in page

install redux-persist (for store the data in the local storage)
add persistStore in the store.js file

create firebase project and add the firebase config in the firebase.js file
export firebase.js
cut apikey and paste it in the .env file
enable google authentication in firebase project

update header and profile page private route (use outlet)