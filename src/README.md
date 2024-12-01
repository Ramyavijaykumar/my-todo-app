
TODO List Application

A simple TODO list application built with React, TypeScript, and Redux. This app allows users to add, view, and delete TODOs. The application is designed to be easy to understand and demonstrates core React and Redux concepts.

Features
1.Add a TODO: Users can input a new TODO item.
2.View TODOs: Users can see a list of all TODO items.
3.Delete a TODO: Users can delete a TODO by clicking the "Remove" button.
4.State Management: Redux is used to manage the state of the TODO list.
5.TypeScript: The app is built with TypeScript for better development experience and type safety.

Setup
1.Clone the Repository:
This will start the application on http://localhost:5173.

File Structure

src/: Contains all the source code for the application.
components/: Contains the React components (e.g., TodoInput.tsx, TodoList.tsx).
store/: Contains the Redux store and slice files (store.ts, todoSlice.ts).
App.tsx: The main React component that renders the TODO list and input form.
Technologies Used
React: A JavaScript library for building user interfaces.
Redux: A state management library to manage the app's state globally.
TypeScript: A superset of JavaScript that adds static typing to the language.
Vite: A fast development build tool for React apps.

How It Works
1.Adding TODOs:
Users can type in a TODO and click "Add" to add it to the list.
2.Removing TODOs:
Users can click on the "Remove" button to delete a TODO from the list.
3.State Management with Redux:
The list of TODOs is stored in Redux, and actions are dispatched to add or remove items.
4.TypeScript Integration:
TypeScript ensures that the app’s state and props are type-safe, reducing bugs and improving maintainability.
5.Contribution
Feel free to fork the project and submit pull requests for improvements, bug fixes, or new features!

License
This project is open-source and available under the MIT License.
