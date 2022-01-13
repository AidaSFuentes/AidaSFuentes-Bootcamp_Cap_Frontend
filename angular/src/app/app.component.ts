import { Component } from '@angular/core';
import { LoggerService } from 'src/lib/my-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cursos';

  // constructor(private out: LoggerService){
  //   out.error('es un error')
  //   out.warn('es un warn')
  //   out.info('es un info')
  //   out.log('es un log')

  // }
}
