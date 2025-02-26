# WESPoints Education Form

## Overview
This project is a React-based form that collects user education details, updates a progress bar, and rewards users with WESPoints upon completion. A popup notification appears when users submit the form, displaying their earned points and encouraging further engagement.

## Features
- **Progress Indicator**: Updates dynamically as users fill in form fields.
- **Form Validation**: Ensures all required fields are completed.
- **Popup Notification**: Displays earned rewards when the form is submitted.
- **State Management**: Utilizes React `useState` to handle form data and UI updates.
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS.

## Project Structure
```
root/
│── src/
│   ├── assets/
│   │   ├── gift.png
│   │   ├── wow.png
│   ├── components/
│   │   ├── firstPage.js
│   │   ├── PopUp.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│── public/
│── package.json
│── README.md
```

## Installation
### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Chrstphr9/WES-Project.git
   cd WES-Project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Code Structure & Logic
### `App.js`
- **State Management**: Uses `useState` for `formData`, `progress`, and `isPopupOpen`.
- **Progress Bar Update**: `updateProgress()` calculates completed fields and updates progress.
- **Form Handling**:
  - Updates `formData` state on input change.
  - Shows a popup on form submission.

### `PopUp.js`
- **Props**:
  - `isOpen`: Controls visibility of the popup.
  - `onClose`: Closes the popup when clicked.
- **Popup Layout**:
  - Displays earned points and rewards.
  - Includes a button to take an ESA test.
  - Has a close button.

## How It Works
1. Users fill in the education form.
2. The progress bar updates dynamically.
3. On submission, a popup appears displaying rewards.
4. Users can close the popup or proceed with further actions.

## Technologies Used
- **React**: Frontend UI framework
- **Tailwind CSS**: Styling and responsive design
- **JavaScript (ES6+)**: Logic and state management

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Added new feature"`).
4. Push to branch (`git push origin feature-name`).
5. Submit a pull request.



