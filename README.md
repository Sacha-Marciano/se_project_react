# React + Vite project : WTWR

This code is the front-end of the WTWR app. The app shows a weather card depending on the temperature of the location of the user and shows compatible clothes to wear for the weather.
It communicates with WeatherAPI and a customized database via a local server.
Website link: [https://watowear.jumpingcrab.com]
Repo of the local server: [https://github.com/Sacha-Marciano/se_project_express]

## Technical Description

This app is using React and Vite, as also API calls, to display the weather and a proposition of clothes to wear according to the localisation's weather.

## Updates

From new to old:

- v4.1.2: README update
- v4.1.1: Fix after failed connections
- v4.1.0: Change base URL
- v4.0.0: upload to server
- v3.2.0: Fix variables default values
- v3.1.0: Include email and password validation
- v3.0.0: Connect to back-end
- v2.5.2: Update README.md
- v2.5.1: Implement Esc close for open popups
- v2.5.0: fix "Need correcting" comments
- v2.4.1: Fix project's submission issues - rename MainApp.jsx to Main.jsx
- v2.4.0: final changes before submission
- v2.3.2: Restructure components, modify index.html to be accorded to the app design
- v2.3.1: create API mock local server, usie calls to the local server to display info on UI
- v2.3.0: add delete button on card's modals
- v2.2.0: create and implement 'Add item' modal ton control form's input
- v2.1.0: route Main and Profile sections using React router
- v2.0.0: create functional toggle temperature unit switch
- v1.2.1: Restructure App and modals
- v1.2.0: Enable browser's validation on forms inputs
- v1.1.2: Restructure directories
- v1.1.1: Implement modals (ModalWithForm & ItemModal)
- v1.1.0: Implement app content (Header, MainApp & Footer)
- v1.0.0: Create directories and structure App, Header & Footer

## Tools

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
