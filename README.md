# Donation Website

## Overview
This project is a donation website built using HTML5, Tailwind CSS, and JavaScript for the frontend, with a Django backend and MySQL database. The website features a dark-red theme (RGB(60,0,8)) and is designed to provide an immersive user experience with 3D layered cards, parallax scrolling backgrounds, micro-interactions, and smooth animations.

## Project Structure
```
donation-website
├── frontend
│   ├── index.html
│   ├── about.html
│   ├── donate.html
│   ├── contact.html
│   ├── css
│   │   ├── styles.css
│   │   └── animations.css
│   └── js
│       ├── main.js
│       ├── animations.js
│       ├── parallax.js
│       └── interactions.js
├── backend
│   ├── manage.py
│   ├── donation_project
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── donations
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── serializers.py
│   ├── accounts
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── views.py
│   │   └── urls.py
│   └── templates
│       └── base.html
├── static
│   ├── css
│   └── js
├── requirements.txt
├── .env
└── README.md
```

## Features
- **Responsive Design**: The website is fully responsive and adapts to various screen sizes.
- **3D Layered Cards**: Engaging card designs that provide information about the cause and donation options.
- **Parallax Scrolling**: Background images that create a sense of depth as users scroll.
- **Micro-Interactions**: Subtle animations that enhance user engagement and feedback.
- **Smooth Animations**: CSS animations for transitions and effects throughout the site.

## Setup Instructions
1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd donation-website
   ```

2. **Frontend Setup**:
   - Navigate to the `frontend` directory.
   - Open `index.html` in a web browser to view the homepage.

3. **Backend Setup**:
   - Navigate to the `backend` directory.
   - Create a virtual environment and activate it:
     ```
     python -m venv venv
     source venv/bin/activate  # On Windows use `venv\Scripts\activate`
     ```
   - Install the required packages:
     ```
     pip install -r ../requirements.txt
     ```
   - Set up the database in the `.env` file with your MySQL credentials.
   - Run migrations:
     ```
     python manage.py migrate
     ```
   - Create a superuser for the admin interface:
     ```
     python manage.py createsuperuser
     ```
   - Start the server:
     ```
     python manage.py runserver
     ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.