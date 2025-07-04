# Agency Website

## Overview
This project is an agency website designed to showcase services and facilitate client scheduling through Calendly. It is built using HTML, CSS, and JavaScript, and follows a modular structure for easy maintenance and scalability.

## Project Structure
```
agency-website
├── src
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   └── components
│       ├── header.html
│       ├── footer.html
│       └── services.html
├── README.md
└── package.json
```

## Features
- **Responsive Design**: The website is designed to be fully responsive, ensuring a seamless experience on both desktop and mobile devices.
- **Service Listings**: Detailed descriptions of services offered by the agency, with a clear call to action for potential clients.
- **Calendly Integration**: Direct links to Calendly for easy scheduling of appointments.
- **Modular Components**: The use of HTML components for the header, footer, and services sections allows for easy updates and maintenance.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd agency-website
   ```
3. Install dependencies (if any):
   ```
   npm install
   ```
4. Open `src/index.html` in your web browser to view the website.

## Linking to Calendly
To link to your Calendly account, update the link in the `src/components/header.html` file. Replace the placeholder URL with your actual Calendly link:
```html
<a href="https://calendly.com/your-calendly-link" target="_blank">Schedule a Meeting</a>
```

## License
This project is licensed under the MIT License. See the LICENSE file for more details.