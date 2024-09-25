# Entrega Maquetación Front End

Objetivo de la entrega:
* Desarrollar en código los mockups elaborados con la herramienta Figma para un entorno mobile y web.

Figma prototipos de interacción:
* Web: https://www.figma.com/proto/sDnMd7bnGAe5GcFiWLfm1S/Mockups?node-id=7-3&node-type=ca[…]ntent-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A3
* Mobile: https://www.figma.com/proto/sDnMd7bnGAe5GcFiWLfm1S/Mockups?node-id=4-2&node-type=fr[…]ntent-scaling=fixed&page-id=1%3A2&starting-point-node-id=4%3A2

## Web - Front End

### Prerequisito

* Tener en el computador la versión de node <code>20.12.2</code> instalada.
  * Descargar directamentente de la página oficial de nodejs en el enlace: https://nodejs.org/en/blog/release/v20.12.2
  * Descargar el paquete <code>nvm</code> que permite el manejo de multiples versiones de nodejs: https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
    * Instalar nvm en Linux y macOS:
      * Abre una terminal y ejecuta el siguiente comando de curl:<br/>
        <code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash</code>
      * Luego, ejecuta este comando para cargar nvm en la terminal:<br/>
        <code>source ~/.bashrc</code> o  <code>source ~/.zshrc</code>
    * Instalar nvm en Windows:
      * Descarga el instalador desde el repositorio oficial de nvm-windows:<br/>
        https://github.com/coreybutler/nvm-windows/releases
      * Ejecuta el instalador .exe y siguir las instrucciones.
        
### Ejecución aplicación web

Para correr la aplicación web "Up to date at work's" se debe seguir los siguientes pasos (comandos):

1. Ubicarse en la carpeta <code>web</code> dentro del repositorio clonado previamente.
2. Abrir la terminal integrada en el editor de código seleccionado se recomienda utilizar <code>visual studio code</code>.
3. Si se está utilizando el manejador de versiones de nodejs <code>nvm</code> ingresar los comandos <code>nvm install</code> y <code>nvm use</code> para configurar la versión de nodejs. 
5. Ingresar el comando <code>npm install</code> para instalar las dependencias necesarias del proyecto de react.
6. Ingresar el comando <code>npm run dev</code> para correr el proyecto de react.
7. Abrir en el navegador el proyecto de react ingresando a la url: http://localhost:3000/

### Video demo funcional web

A continuación se presenta el enlace que lleva al video demo funcional de la aplicación web: 

## Mobile - Front End

### Prerequisito

* Tener en el computador el framework <code>flutter</code> instalado.
  * Instalar flutter en Windows:
     * Descarga el archivo comprimido desde el sitio oficial:<br/>
      https://docs.flutter.dev/get-started/install
     * Extraer el contenido del archivo .zip en una ubicación de preferencia.
     * Abrir el panel de control y dirigirse a la opción "Sistema" → "Configuración avanzada del sistema" → "Variables de entorno".
     * En las variables del sistema buscar Path y selecciona "Editar".
     * Agregar la ruta donde está Flutter: C:\src\flutter\bin.
  * Instalar flutter en macOS:
     * Requisitos previos:
      * Tener Xcode instalado para compilar aplicaciones iOS.
      * Tener Homebrew instalado.
     * Abrir una terminal y ejecutar el siguiente comando para clonar Flutter:<br/>
      <code>git clone https://github.com/flutter/flutter.git -b stable</code>
     * Agregar la variable de entorno de Flutter al PATH:<br/>
      <code>export PATH="$PATH:[ruta_a_flutter donde se descargo]/flutter/bin"</code>
   * Instalar Android Studio:
     * Descargar e instalar Android Studio desde:<br/>
      https://developer.android.com/studio
     * Instalar el plugin de Flutter desde el menú de <code>Plugins</code>.
     * Configurar los SDKs de Android y crear un emulador.

### Ejecución aplicación mobile

Para correr la aplicación mobile "Up to date at work's" se debe seguir los siguientes pasos (comandos):

1. Ubicarse en la carpeta <code>mobile</code> dentro del repositorio clonado previamente.
2. Abrir la terminal integrada en el editor de código seleccionado se recomienda utilizar <code>visual studio code</code>.
3. Ingresar el comando <code>flutter pub get</code> para instalar las dependencias necesarias del proyecto de flutter.
4. Ingresar el comando <code>flutter run lib/main.dart</code> para correr el proyecto de flutter.

Adicionalmente, si se requiere generar el apk de la aplicación mobile utilizar el comando <code>flutter build apk --release</code>

### Video demo funcional mobile

A continuación se presenta el video demo funcional de la aplicación mobile: 

https://github.com/user-attachments/assets/e26fc2a9-504a-4d89-8a9d-e6e9c3dd526c
