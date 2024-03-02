/**
Los interceptores en Angular son una característica poderosa que te permite interceptar y manipular 
las solicitudes HTTP entrantes y salientes, así como las respuestas. Esto te brinda la capacidad de 
realizar tareas comunes de manera centralizada, como agregar encabezados a las solicitudes, manejar 
errores, realizar acciones antes y después de las solicitudes, entre otros.

A continuación, explicaré los interceptores en Angular de manera más avanzada, cubriendo cómo crear 
tus propios interceptores personalizados y cómo gestionar múltiples interceptores en una aplicación.

Creación de un Interceptor Personalizado:
Para crear un interceptor personalizado en Angular, necesitas implementar la interfaz HttpInterceptor. 
Esto requiere que definas un método intercept() donde puedes realizar lógica personalizada antes y 
después de las solicitudes HTTP.
*/

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Realizar acciones antes de enviar la solicitud, como agregar encabezados
    const modifiedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer token') });

    // Continuar con la solicitud modificada
    return next.handle(modifiedReq);
  }
}
/**------------------------------------------------------------------------------------------------*/

/**_-----------------------------------Registro de un Interceptor: ----------------------------------
Una vez que has creado tu interceptor, necesitas proporcionarlo al módulo de tu aplicación para que 
Angular lo pueda utilizar. Esto se hace normalmente en el módulo que proporciona el servicio HTTP. */

import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './my-interceptor';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ]
})
export class MyModule { }
/**------------------------------------------------------------------------------------------------*/

/**_-----------------------------------Gestión de Múltiples Interceptores:----------------------------
Angular permite encadenar múltiples interceptores para una solicitud HTTP. Esto es útil si necesitas 
dividir la lógica de interceptación en múltiples interceptores, cada uno responsable de una tarea 
específica. */

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Realizar acciones antes de enviar la solicitud
    console.log('Second Interceptor');

    // Continuar con la solicitud
    return next.handle(req);
  }
}

//En el módulo, puedes registrar varios interceptores de esta manera:
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true }
]

/**
  En este caso, MyInterceptor se ejecutará primero, seguido de SecondInterceptor.

Uso Avanzado:
Los interceptores pueden ser utilizados para una variedad de propósitos avanzados, como la gestión de 
errores global, la caché de solicitudes, la internacionalización de solicitudes, etc. También puedes 
hacer uso de las capacidades de los observables de RxJS dentro de los interceptores para manipular y 
transformar las solicitudes y respuestas de manera flexible.

Recuerda siempre tener en cuenta el orden de ejecución de los interceptores cuando trabajes con múltiples 
interceptores, ya que puede afectar el comportamiento de tus solicitudes HTTP. Además, asegúrate de 
manejar correctamente las suscripciones a los observables para evitar posibles fugas de memoria.
 ***/




