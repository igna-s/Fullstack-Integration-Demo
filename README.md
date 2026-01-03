# 👔 Human Resources System

> **Efficient employee management with a modern interface and a robust backend.**


This project is designed primarily as an educational resource to learn about frameworks. It demonstrates the practical integration of **Django** for the backend and **React** for the frontend, serving as a comprehensive guide for full-stack development patterns.

This Full Stack application simplifies personnel administration by combining the power of **Django** in the backend with the interactivity of **React** in the frontend, offering a smooth and pleasant user experience.

---

## 🚀 Technologies

### Backend
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Django REST Framework](https://img.shields.io/badge/Django%20REST-ff1709?style=for-the-badge&logo=django&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## 🛠️ Installation and Configuration

Follow these steps to set up the project locally.

### 1. Backend (Django)

Navigate to the root folder where `manage.py` is located:

```bash
# 1. Create virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# 2. Install dependencies
# (Ensure you have mysqlclient, djangorestframework, django-cors-headers)
pip install django djangorestframework django-cors-headers mysqlclient

# 3. Configure Database
# Ensure MySQL is running and create a database named 'recursos_humanos_db'
# user: root, pass: admin (or adjust in settings.py)

# 4. Migrations
python manage.py makemigrations
python manage.py migrate

# 5. Run server
python manage.py runserver 8080
```

The backend will be available at `http://localhost:8080`.

### 2. Frontend (React + Vite)

Navigate to the `rh-react` folder:

```bash
cd rh-react

# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

The frontend will generally be available at `http://localhost:5173`.

---

## 📸 Quick Look

*(Add screenshots of your application running here)*

| Employee List | Add Employee |
|:--------------------:|:----------------:|
| ![List](/path/to/screenshot1.png) | ![Form](/path/to/screenshot2.png) |

---

## ✨ Main Features

*   **Full CRUD:** Create, read, update, and delete employee records.
*   **RESTful API:** Efficient communication between client and server.
*   **Responsive Design:** Interface adaptable to different devices.
*   **Validations:** Error handling and data validation on both ends.

