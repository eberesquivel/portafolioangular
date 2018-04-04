import { Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',

})
export class ProductosComponent {

  constructor (private route:ActivatedRoute) {

      route.params.subscribe( parametros =>{
        console.log(parametros);
        console.log(parametros ['id']);
  })

}


}
