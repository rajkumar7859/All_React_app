# T-shirt Store - User Interface
### Introduction
This document outlines the design and functionality of a T-shirt store web application. The application allows users to browse, filter, and search through a catalog of T-shirts. Users can add T-shirts to their shopping cart and view the cart's contents. They can also increase the quantity of items in the cart and delete them as needed. The design is simple, intuitive, and easy to navigate.

### User Interface Design
The T-shirt store web application has the following screens:
1.Catalog screen
2.Search screen
3.Filter screen
5.Shopping cart screen

The catalog screen is the main screen of the application. It displays a list of T-shirts, each represented by a card. The card contains the T-shirt's image, name, and price. The cards are arranged in a grid layout to maximize screen real estate. The catalog screen has a search bar and a filter button in the top navigation bar.

## Technologies Used
The T-shirt store web application was built using HTML, CSS, JavaScript and React.js, no third party libraries. The application is responsive and can be viewed on desktop and mobile devices.

### Implementation Details
#### Catalog Screen
The catalog screen is implemented using an HTML grid layout to display the T-shirts in a responsive format. Each T-shirt is represented by a card that includes an image, name, and price. Clicking on a card adds the T-shirt to the shopping cart. The search bar and filter button are implemented using HTML form elements and JavaScript event listeners.

#### Search Screen
The search screen is implemented using an HTML form element to capture the user's search query. The search results are generated using JavaScript and displayed in the same format as the catalog screen. The back button is implemented using a JavaScript event listener.

#### Filter Screen
The filter screen is implemented using HTML form elements to capture the user's filter criteria. The filter results are generated using JavaScript and displayed in the same format as the catalog screen. The back button is implemented using a JavaScript event listener.

#### Shopping Cart Screen
The shopping cart screen is implemented using HTML and JavaScript. The contents of the shopping cart are stored in a JavaScript object and displayed in a table format. The user can increase the quantity of items, delete items, and proceed to checkout. The back button is implemented using a JavaScript event listener.

#### Quantity Limits
The quantity limits are implemented using JavaScript. Each T-shirt type has a maximum quantity that is stored in a JavaScript object. When a user adds a T-shirt to the shopping cart, the quantity is checked against the maximum quantity. If the quantity exceeds the maximum, an error message is displayed.

## Functionality
The T-shirt store web application has the following functionality:

1.Catalog screen
- Display a list of T-shirts, each represented by a card containing the T-shirt's image, name, and price
- Clicking on a card adds the T-shirt to the shopping cart
- Search bar in the top navigation bar allows users to search for T-shirts
- Filter button in the top navigation bar allows users to filter T-shirts

2.Search screen
- Allows users to enter free text to search for T-shirts
- Displays search results in the same format as the catalog screen
- Back button in the top navigation bar returns users to the catalog screen

3.Filter screen
- Allows users to filter T-shirts by gender, color, price range, and type
- Displays filtered results in the same format as the catalog screen
- Back button in the top navigation bar returns users to the catalog screen

4.Shopping cart screen
- Displays the contents of the user's shopping cart
- Lists T-shirts, their quantities, and their prices
- Buttons to increase the quantity of items, delete items, and proceed to checkout
- Back button in the top navigation bar returns users to the catalog screen

5.Quantity limits
- Each T-shirt type has a limited quantity
- If the customer tries to order more than the available quantity, an error message appears

### Conclusion
The T-shirt store web application is a simple and intuitive e-commerce platform that allows users to browse, search, and filter through a catalog of T-shirts. The application has a responsive design and is built using HTML, CSS, and JavaScript. The shopping cart functionality includes quantity limits to prevent users from ordering more than the available quantity. The application has the potential for future enhancements, such as user login, payment integration, and customization options.