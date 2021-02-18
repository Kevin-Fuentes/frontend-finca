import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FincaService } from './../../services/finca.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {
  finca = {
    nombre: '',
    capataz:'',
    numH:''
  }
  constructor(private fService: FincaService, private router: Router
    , private activateRouter: ActivatedRoute) {
    if (this.activateRouter.snapshot.params.id) {
      this.fService.getFincaId(this.activateRouter.snapshot.params.id).subscribe((res:{
        nombre: '',
        capataz:'',
        numH:''
      }) => {
        console.log(res);
        
        this.finca = res[0];
      })
    }
   }

  ngOnInit(): void {
  
  }


  guardar(form: NgForm) {
    
    if (this.activateRouter.snapshot.params.id) {
      this.fService.updateFinca(this.activateRouter.snapshot.params.id, form.form.value).subscribe((res) => {
        console.log(res,'actualizado');
        this.router.navigateByUrl('/')
      })
    } else {
      this.fService.createFinca(form.form.value).subscribe((res)=> 
      {
        console.log(res, 'guardado');
     this.router.navigateByUrl('/')
      }
      ) 
    }
 
    
  }

}
