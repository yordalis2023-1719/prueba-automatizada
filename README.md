Prueba Automatizada de Google

Este proyecto tiene como objetivo automatizar pruebas sobre la página web de Google utilizando Selenium WebDriver y Mocha. Las pruebas se ejecutan en JavaScript y verifican la funcionalidad de la búsqueda en Google, incluyendo la verificación de títulos y la realización de búsquedas en Google.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura:

- **`test.js`**: Contiene las pruebas automatizadas de Google utilizando Selenium y Mocha.
- **`test_extra.js`**: Pruebas adicionales, como la búsqueda de "Gatos" y "Noticias de tecnología".
- **`utils.js`**: Archivo que contiene funciones auxiliares, como la función para tomar capturas de pantalla.
- **`package.json`**: Contiene las dependencias del proyecto, incluyendo Mocha, Selenium y otros paquetes.
- **`mochawesome-report`**: Carpeta que almacena los informes generados por el reporte Mochawesome.
- **`screenshots`**: Carpeta donde se guardan las capturas de pantalla de las pruebas ejecutadas.

## Requisitos

Antes de ejecutar las pruebas, asegúrate de tener los siguientes requisitos instalados:

1. **Node.js**: Descargar e instalar Node.js desde https://nodejs.org/
2. **Selenium WebDriver**: Usado para interactuar con el navegador.
3. **Mocha**: Framework de pruebas para JavaScript.
4. **Chromedriver**: Necesario para controlar el navegador Google Chrome.

Los resultados de las pruebas se guardarán en el archivo `mochawesome.json` y `mochawesome.html` dentro de la carpeta `mochawesome-report`.

## Capturas de Pantalla

Las pruebas automatizadas tomarán capturas de pantalla en cada paso importante y las guardarán en la carpeta `screenshots`.

