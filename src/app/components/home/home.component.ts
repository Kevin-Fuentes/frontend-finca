import { Component, OnInit } from '@angular/core';
import { FincaService } from './../../services/finca.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
fincas:any
  constructor(private fSErvices: FincaService) { 
    this.fSErvices.getFinca().subscribe(
      (res) => {
        this.fincas = res;
        console.log(this.fincas);
        
    }

  )

  }

  ngOnInit(): void {
  }

  eliminar(id) {
    this.fSErvices.deleteFinca(id).subscribe((res) => {
      console.log(res);
      this.fSErvices.getFinca().subscribe(
        (res) => {
          this.fincas = res;
          console.log(this.fincas);
          
      }
  
    )
    });
  }
}
