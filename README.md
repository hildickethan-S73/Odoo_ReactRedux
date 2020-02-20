# Odoo_ReactRedux

List/Details with dockerized Odoo backend and React/Redux frontend. 

---

## Getting started

To get the repo running locally:

- Clone this repo
- Install Docker Community Edition
- Install Node.js and npm

### odoo
Run `docker-compose up --build` with ports 8069 and 80 free
Modules are called **ApiREST** and **auth**

### react
`npm install` inside frontend folder, `npm start` to start application

<small>untested on fresh machine</small>

---

## Features

- Register
- Login
- Create
- Update 
- Delete

<br>

| Technical Feature | Where it works |
| - | - |
| Authentication | Login/Register work with JWT token, required to Create |
| Docker | Backend is dockerized |
| Generic API backend | ApiREST module is generic, can read auth module's users too |

---

### Technologies used

* Odoo 12
* React 15.6.1
* Redux 3.7.2
* Docker
* PostgresQL 10
* Caddy

### Other technologies used

* [JWT](https://github.com/jpadilla/pyjwt)

---

Application Structure

| Name | Description |
| - | - |
| myaddons | Odoo addons | 
| Dockerfile | Our Odoo Dockerfile | 
| `myaddons/`ApiREST | ApiREST module | 
| `myaddons/`auth | Auth module | 
| `myaddons/[module]/`controllers | Controller | 
| `myaddons/[module]/`demo | Demonstration data | 
| `myaddons/[module]/`models | Module models |
| `myaddons/[module]/`security | Permission CSV file |
| `myaddons/[module]/`views | XML views for Odoo's interface |
| `myaddons/[module]/`\_\_manifest\_\_ | Module settings |
| frontend | React application | 
| `frontend/`src | Main code folder | 
| `frontend/src/`agent | Superagent file for our Backend requests | 
| `frontend/src/`middleware | Middleware for our store | 
| `frontend/src/`store | Store creation file | 
| `frontend/src/`components | Components folder | 
| `frontend/src/components/`app | Main app component | 
| `frontend/src/components/`Restaurant | Restaurant components folder | 
| `frontend/src/components/`Auth | Auth components folder | 
| `frontend/src/`constants | Constants folder | 
| `frontend/src/`reducers | Reducers folder | 
