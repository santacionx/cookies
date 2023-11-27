# Express Session and Cookie Handling

This repository contains code snippets demonstrating the usage of cookies, sessions, and flash messages in an Express.js application.

## Features

- **Cookie Handling**: Utilizes `cookie-parser` middleware to set and verify cookies, including signed cookies for enhanced security.
- **Session Management**: Uses `express-session` middleware to maintain session state and store temporary data (like a user's name or cart info).
- **Flash Messages**: Implements `connect-flash` middleware to display temporary messages (such as successful user registration) across requests.
- **Rendering Views**: Demonstrates passing data to views using `res.locals` for rendering dynamic content.

## Usage

### Setup

1. Install the required dependencies:

    ```bash
    npm install express cookie-parser express-session connect-flash
    ```

2. Run the application:

    ```bash
    node app.js
    ```

### Code Explanation

The code comprises two main files:

- **`app.js`**: Manages the Express server and handles session, flash messages, and rendering views.
- **`cookie.js`**: Demonstrates setting and verifying cookies, including signed cookies.

### Detailed Implementation

#### `app.js`

- **Session Setup**:
    - Initializes `express-session` with a secret key and necessary configurations to manage session data.

- **Flash Messages**:
    - Uses `connect-flash` to store and display temporary messages across requests, such as a success message after user registration.

- **Route Handling**:
    - `/test`: Accepts a query parameter for a user's name, sets it in the session, and displays a flash message for successful registration.
    - `/hi`: Renders a view (`page.ejs`) while passing the stored session data (user's name) and flash messages to display.

#### `cookie.js`

- **Cookie Setup**:
    - Utilizes `cookie-parser` middleware to set and verify cookies.
    - Demonstrates setting a signed cookie named "color" with a value "pink" and verifying its existence on the `/verify` route.

## Contributing

Feel free to contribute by forking the repository, making changes, and submitting pull requests. Bug fixes, additional features, or improvements are all welcome!

## Remember

cookies->  created by : web server : when user surfs the browser  and stores on user computer

signedCookies: make sures that cookie i send is not changed 
 middle ware : cookie-parser

middle ware express session : goal to make stateful website
ex: create session id 
assign to client [cookies]
store the cart info in the temp storage 

connect-flash: middleware  
flash is a special area of the session used for storing messages. messages are written to the flash and cleared after being displayed to the user

from server to  render into views fl  :res.locals
pop up msg alert form

res.locals : to render


