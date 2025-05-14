# Wonder Rides Showcase - Interactive Carousel Component

**Live Demo:** [View Project Demo](https://my-wonderla.vercel.app/)

---

## Project Overview

Wonder Rides Showcase is a dynamic and visually engaging frontend component designed to replicate a section of a popular amusement park's website. This project demonstrates the ability to build pixel-perfect UI recreations with a focus on interactivity, smooth animations, and clean component architecture using modern frontend technologies.

The core of this showcase is an interactive carousel displaying various amusement park rides, categorized for easy navigation. It features a unique circular sidebar for category selection, complete with smooth transitions and animations that enhance the user experience.

---

## Key Features

* **Pixel-Perfect Recreation:** Meticulously crafted to match the design and feel of the original Wonderla "Iconic Rides" section.
* **Interactive Ride Carousel:**
* Smooth sliding animation for browsing through ride cards.
* Dynamic loading of ride data (title, location, description, media).
* Individual `RideCard` components displaying ride details and a "Ride Details" button.
* **Animated Category Sidebar:**
* Unique circular sidebar design for selecting ride categories (Land, Water, Kids).
* **Dynamic Animations (Framer Motion):**
* Smooth rotation of the conic gradient background to align with the active category.
* Fluid movement of the active category marker along the circular path.
* Subtle scaling effects on category icons for selection feedback.
* Clickable categories that filter the displayed rides in the carousel.
* **Reusable Components:** Structured with a modular approach:
* `RidesSection`: Main container orchestrating all elements.
* `CategorySidebar`: Handles category display and selection logic with animations.
* `RideCard`: Displays individual ride information.
* `CarouselControls`: Provides navigation arrows for the ride carousel.
* **Data-Driven Content:** Ride details are managed via a local JSON file, demonstrating dynamic content rendering.
* **Styling with Tailwind CSS:** Utility-first CSS framework used for precise and efficient styling, matching the source design's colors, fonts, and spacing.
* **Focus on User Experience:** Smooth hover, focus, and active states for all interactive elements.

---

## Tech Stack

* **Frontend Library:** ReactJS (via Vite for a fast development experience)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Language:** JavaScript (JSX)
* **Data Handling:** Local JSON

---

## Project Structure

The project follows a standard React component structure:

```

├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── CarouselControls.jsx
│   │   ├── CategorySidebar.jsx
│   │   ├── Icons.jsx
│   │   ├── Navbar/
│   │   │   ├── Dropdown.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── navData.js
│   │   ├── RideCard.jsx
│   │   ├── RidesSection.jsx
│   │   └── Sidebar/
│   │       ├── index.js
│   │       ├── MenuSection.jsx
│   │       ├── ParkGrid.jsx
│   │       ├── ParkList.jsx
│   │       ├── Sidebar.jsx
│   │       └── sidebarData.js
│   ├── data/
│   │   └── rides.json
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
└── vite.config.js
```

---

## Setup and Installation

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/wonder-rides-showcase.git
# TODO: Replace YOUR_USERNAME and repository name if different
cd wonder-rides-showcase
```

2. **Install dependencies:**
Using npm:
```bash
npm install
```
Or using yarn:
```bash
yarn install
```

---

## Running the Project

To start the development server:

Using npm:
```bash
npm run dev
```
Or using yarn:
```bash
yarn dev
```
This will typically start the project on `http://localhost:5173` (or another port if 5173 is in use). Open this URL in your browser to view the component.

---

## Design & Implementation Insights

* **Attention to Detail:** Significant effort was invested in inspecting the reference design using browser developer tools to extract exact color codes, font styles, spacing values, and asset URLs, ensuring a high-fidelity reproduction.
* **Framer Motion for Sophisticated Animations:** The sidebar's rotating gradient and marker movement were specifically chosen as an opportunity to leverage Framer Motion for creating fluid and engaging micro-interactions that go beyond simple CSS transitions. This involved synchronizing the rotation of a background element with the positional animation of a foreground marker.
* **Component Reusability:** Each part of the UI is broken down into logical, reusable components, promoting maintainability and scalability. For instance, `RideCard` can be easily reused in other parts of a larger application.
* **State Management:** Local component state (`useState`) and derived state (`useMemo` for filtered rides) are used effectively to manage the carousel's current view, active category, and the data displayed. Callbacks (`useCallback`) are used for event handlers passed to child components to optimize performance.

---

## Potential Future Enhancements

* **API Integration:** Load ride data from a mock or real API instead of a local JSON file.
* **Full Mobile Responsiveness:** Extend Tailwind CSS classes to make the component fully responsive across various screen sizes. The current version focuses on the desktop layout as per initial requirements.
* **Advanced Filtering/Sorting:** Implement more complex filtering options for rides within categories.
* **Accessibility (A11y) Audit:** Conduct a more thorough accessibility audit and implement further improvements (e.g., more ARIA attributes for complex interactions).
* **Unit & Integration Tests:** Add Jest and React Testing Library tests for components and functionality.
* **Lazy Loading for Media:** While images in `RideCard` use native `loading="lazy"`, video preloading strategies could be further optimized for large datasets.

---

Thank you for checking out the Wonder Rides Showcase!

## Author

Yugal Burde
* GitHub: [@yugal1107](https://github.com/yugal1107)
* [Linkedin](https://www.linkedin.com/in/yugal-burde-58012a256/)
