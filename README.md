
# React TODO List Application  

This is a simple TODO list application built using React. The application allows users to add, view, and delete TODO items.  

## Features  
- **Add TODOs**: Users can input and add new tasks to the list.  
- **View TODOs**: A list of added tasks is displayed.  
- **Delete TODOs**: Users can remove tasks when completed.  

## Technologies Used  
- **React**  
- **TypeScript**  
- **Redux**  
- **Vite** (build tool)  

## Getting Started  

### Prerequisites  
Ensure you have the following installed:  
- [Node.js](https://nodejs.org/) (v16 or later)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  

### Installation  
1.Clone the Repository: git clone https://github.com/Ramyavijaykumar/my-todo-app.git
2.cd my-todo-app
3.Install Dependencies: Install all required dependencies by running: npm install
4.Run the Application: To run the app in development mode, use: npm run dev
5.This will start the application on http://localhost:5173.

Folder Structure:
my-todo-app/
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   ├── components/
│   │   ├── TodoApp.tsx
│   │   ├── TodoInput.tsx
│   │   └── TodoList.tsx
│   └── store/
│       ├── store.ts
│       └── todoSlice.ts


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
