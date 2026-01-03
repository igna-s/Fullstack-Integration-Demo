# 👔 Sistema de Recursos Humanos

> **Gestión eficiente de empleados con una interfaz moderna y un backend robusto.**

![Status](https://img.shields.io/badge/Status-En%20Desarrollo-green?style=for-the-badge)
![License](https://img.shields.io/badge/Licencia-MIT-blue?style=for-the-badge)

Este proyecto es una aplicación Full Stack diseñada para simplificar la administración de personal. Combina la potencia de **Django** en el backend con la interactividad de **React** en el frontend, ofreciendo una experiencia de usuario fluida y agradable.

---

## 🚀 Tecnologías

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

## 🛠️ Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu entorno local.

### 1. Backend (Django)

Navega a la carpeta raíz donde se encuentra `manage.py`:

```bash
# 1. Crear entorno virtual (opcional pero recomendado)
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate

# 2. Instalar dependencias
# (Asegúrate de tener mysqlclient, djangorestframework, django-cors-headers)
pip install django djangorestframework django-cors-headers mysqlclient

# 3. Configurar Base de Datos
# Asegúrate de tener MySQL corriendo y crea una base de datos llamada 'recursos_humanos_db'
# usuario: root, pass: admin (o ajusta en settings.py)

# 4. Migraciones
python manage.py makemigrations
python manage.py migrate

# 5. Correr servidor
python manage.py runserver 8080
```

El backend estará disponible en `http://localhost:8080`.

### 2. Frontend (React + Vite)

Navega a la carpeta `rh-react`:

```bash
cd rh-react

# 1. Instalar dependencias
npm install

# 2. Correr servidor de desarrollo
npm run dev
```

El frontend estará disponible generalmente en `http://localhost:5173`.

---

## 📸 Vistazo Rápido

*(Aquí puedes agregar capturas de pantalla de tu aplicación funcionando)*

| Listado de Empleados | Agregar Empleado |
|:--------------------:|:----------------:|
| ![Listado](/ruta/a/screenshot1.png) | ![Formulario](/ruta/a/screenshot2.png) |

---

## ✨ Características Principales

*   **CRUD Completo:** Crear, leer, actualizar y eliminar registros de empleados.
*   **API RESTful:** Comunicación eficiente entre cliente y servidor.
*   **Diseño Responsivo:** Interfaz adaptable a diferentes dispositivos.
*   **Validaciones:** Manejo de errores y validación de datos en ambos extremos.
