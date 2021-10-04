# SEP Data Science Website

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

Node.js is required to build and serve the Angular app. See [https://nodejs.org/en/download/](https://nodejs.org/en/download/) for instructions on how to download and install Node.js. For installation on a Ubuntu 20.04.03 LTS server see installation instructions at [https://tecadmin.net/how-to-install-angular-cli-on-ubuntu-20-04/](https://tecadmin.net/how-to-install-angular-cli-on-ubuntu-20-04/).

Make sure to install the correct version of Angular CLI:
```
npm install -g @angular/cli@10.2.0 
```

If you have any problems with missing modules make sure to run `npm install` in the project root folder:
```
npm install
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run the following command to make a production build:
```
ng build --prod
```

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Apache HTTP server

The build artifacts in the `dist/` directory can be published using a HTTP server. The instructions here assumes that you have the Apache HTTP Server 2.4 [installed](https://httpd.apache.org/docs/2.4/install.html)

### /var/www/html

Copy the files in the folder `dist/sep-ai-web/` to the folder `/var/www/html/` on your server (replacing any existing files).

### https

To enable HTTPS on Apache follow the instructions at [https://www.arubacloud.com/tutorial/how-to-enable-https-protocol-with-apache-2-on-ubuntu-20-04.aspx](https://www.arubacloud.com/tutorial/how-to-enable-https-protocol-with-apache-2-on-ubuntu-20-04.aspx)
