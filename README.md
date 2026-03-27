# Image Gallery App (React + API)

## Project Description

This is an Image Gallery App built with React.js and Tailwind CSS.
The app fetches images from an API and displays them in card format.

Each card shows:

* Image
* Author name

When the user clicks on an image, it opens the original image link.

This project also includes pagination. Users can move between pages using Next and Prev buttons.

This project helped me understand API calls, useEffect, and pagination in React.

---

## Features

* Fetch images from API
* Display images in cards
* Show author name for each image
* Click image to open original URL
* Pagination (Next and Prev buttons)
* Loading message while data is fetching
* Responsive design using Tailwind CSS

---

## Technologies Used

* React.js
* JavaScript (ES6)
* Tailwind CSS
* Axios (for API calls)
* HTML5
* CSS3
* Vite

---

## API Used

This project uses the Picsum API:

https://picsum.photos/v2/list

---

## How It Works

1. The app loads and calls the API using useEffect.
2. Images are fetched based on the page number.
3. Data is stored using useState.
4. Images are displayed using map() function.
5. User can click Next or Prev to change pages.
6. When page changes, new data is fetched automatically.
7. While loading, a "Loading..." message is shown.

---

## Concepts Learned

* React useState hook
* React useEffect hook
* API fetching using Axios
* Rendering lists using map()
* Component reuse (Card component)
* Pagination logic
* Conditional rendering
* Event handling in React

---

## Preview

<img width="1812" height="727" alt="image" src="https://github.com/user-attachments/assets/96f8215e-5b31-4b39-9b88-1b3221552ccc" />

---

## Future Improvements

* Add search feature
* Add loading spinner instead of text
* Add error handling for API
* Add infinite scroll
* Improve UI design

---

## Author

Atif Shehzad

Front-End Developer (Learning Stage)

Skills: HTML, CSS, JavaScript, React, Tailwind CSS
