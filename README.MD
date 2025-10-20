# 🧑‍💼 Responsive Profile Card

A small, **accessible**, and **responsive** profile card built with **plain HTML, CSS, and JavaScript**.
This project demonstrates semantic markup, responsive design, and testable elements using `data-testid` attributes for automated testing.

## 🚀 Project Overview

The Profile Card displays:

- User **name**
- **Short biography**
- **Current time in milliseconds**
- **Profile avatar**
- **Social media links**
- Lists of **hobbies** and **dislikes**

It is responsive across **mobile**, **tablet**, and **desktop** screen sizes, and accessible via keyboard navigation.

## 🧱 Core Features

✅ Semantic HTML structure using `<article>`, `<header>`, `<section>`, `<figure>`, `<nav>`, and `<ul>`
✅ Responsive layout using **Flexbox** and **media queries**
✅ Live time display updated every second using JavaScript
✅ Accessible design with alt text, focusable links, and readable structure
✅ Testable structure using required `data-testid` attributes

## 🧩 Data Test IDs

Each visible element has a `data-testid` attribute for automated testing.

| Element                | Data Test ID                                                    |
| ---------------------- | --------------------------------------------------------------- |
| Profile Card Root      | `test-profile-card`                                             |
| User Name              | `test-user-name`                                                |
| Biography              | `test-user-bio`                                                 |
| Current Time           | `test-user-time`                                                |
| Avatar Image           | `test-user-avatar`                                              |
| Social Links Container | `test-user-social-links`                                        |
| Each Social Link       | `test-user-social-<network>` (e.g., `test-user-social-twitter`) |
| Hobbies List           | `test-user-hobbies`                                             |
| Dislikes List          | `test-user-dislikes`                                            |

## 🖥️ Technologies Used

- **HTML5** (semantic markup)
- **CSS3** (Flexbox, media queries, and accessibility styling)
- **Vanilla JavaScript** (for dynamic time updates)

## 📁 Project Structure

```
profile-card/
│
└── images/
    └── pic.jpg
    └── white.jpg
├── index.html
├── index.js
├── style.css
├── README.MD
```

## ⚙️ How to Run Locally

1. **Clone this repository**

   ```bash
   git clone https://github.com/omarologyy/Hng-Stage-Zero.git
   ```

2. **Navigate to the folder**

   ```bash
   cd profile-card
   ```

3. **Open the app**

   - Open `index.html` directly in your browser
     _(no build tools or dependencies required)_

## 🧠 JavaScript Functionality

The current time updates automatically every second using:

```js
function updateTime() {
  document.querySelector('[data-testid="test-user-time"]').textContent =
    Date.now();
}
updateTime();
setInterval(updateTime, 1000);
```

## 🧪 Testing Notes

- Automated tests can select elements using their `data-testid` attributes.
  Example (in Jest + Testing Library):

  ```js
  const name = screen.getByTestId("test-user-name");
  expect(name).toBeInTheDocument();
  ```

## 🌐 Live Demo

🔗 **Live Site:** [https://your-live-link.netlify.app]
🔗 **GitHub Repo:** [https://github.com/omarologyy]

## ✨ Author

**Umar Sulaiman**
Frontend Developer 💻
📧 [akoredeumar8@gmail.com](mailto:akoredeumar8@gmail.com)
🔗 [LinkedIn Profile](https://www.linkedin.com/in/umar-sulaiman-a91a43175)
