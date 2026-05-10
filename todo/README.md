# Todo List App

A simple React Todo List application that allows users to add, complete, view, and delete todos with instant UI updates.

<img width="588" height="398" alt="image" src="https://do6gp1uxl3luu.cloudfront.net/question-gif/todoList.gif" />

---


## Features

* Add a new todo item
* Mark a todo as completed
* Delete a todo item
* View all todos
* Real-time UI updates
* Strikethrough style for completed todos

---

## Requirements Implemented

* Todos are maintained in component state
* Each todo contains:

  * `id`
  * `text`
  * `completed`
* Input field with placeholder:

  ```txt
  Enter todo
  ```
* "Add" button to create todos
* Checkbox to toggle completion
* Delete button for removing todos
* Completed todos display with strikethrough styling

---

## Constraints & Edge Cases

* Empty todos are not allowed
* Duplicate todos are allowed (case-insensitive)
* Deleting a todo does not affect remaining todos
* UI updates immediately after every operation

---

## Tech Stack

* React
* JavaScript
* CSS

---

## Project Structure

```plaintext
src/
│
├── components/
│   ├── Todo.jsx
│   └── Todo.css
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

Navigate to the project folder:

```bash
cd your-repo-name
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Example Todo Object

```js
{
  id: 1,
  text: "Learn React",
  completed: false
}
```

---

## Future Improvements

* Edit todo feature
* Local storage persistence
* Filter completed/incomplete todos
* Dark mode
* Responsive UI enhancements

---

## License

This project is open source and available under the MIT License.

