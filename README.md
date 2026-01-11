# 👔 Human Resources System


![](Screenshot%202026-01-03%20185326.png)

This project is designed primarily as an educational resource to learn about frameworks. It demonstrates the practical integration of **Django** for the backend and **React** for the frontend, serving as a comprehensive guide for full-stack development.

> **🛡️ Security Note**: This project is configured as a public demo. Authentication is intentionally open for ease of access.


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


### ☁️ Cloud / Deployment
![Azure App Service](https://img.shields.io/badge/Azure%20App%20Service-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)
![Azure Static Web Apps](https://img.shields.io/badge/Azure%20Static%20Web%20Apps-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)


---

## ☁️ Deployment

This project is configured to be deployed on **Azure Free Tier**:

- [Frontend – Azure Static Web Apps (F1 Plan, Linux)](https://jolly-tree-03b6dd510.1.azurestaticapps.net/)
- [Backend – Azure App Service (Free Plan)](https://myfirstupload-backend.azurewebsites.net/api/)


👉 **[Read the Deployment Guide](DEPLOY_AZURE.md)** for step-by-step instructions.



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
pip install -r requirements.txt

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

### 🌍 Local vs Cloud Execution

The project uses **Environment Variables** to automatically switch the Backend URL:

- **Local**: Uses `.env.development` -> `http://localhost:8080/api`
- **Cloud**: Uses `.env.production` -> `https://myfirstupload-backend.azurewebsites.net/api`

You don't need to change any code. Just run `npm run dev` for local development, or `npm run build` for production deployment.


---

## ✨ Main Features

*   **Full CRUD:** Create, read, update, and delete employee records.
*   **RESTful API:** Efficient communication between client and server.
*   **Responsive Design:** Interface adaptable to different devices.
*   **Validations:** Error handling and data validation on both ends.
