import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { InicioComponent } from './app/inicio/inicio.component';
import { RegistroComponent } from './app/registro/registro.component';
import { FooterComponent } from './app/footer/footer.component';




bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  const routes = [
    { path: '', component: InicioComponent },
    { path: 'registro', component: RegistroComponent }
  ];
  
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      FooterComponent
    ]
  });