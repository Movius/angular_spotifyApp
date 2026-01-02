import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://restcountries.com/v3.1/lang/spanish')
      .subscribe((respuesta: any) => {
        this.paises = respuesta;
        console.log(this.paises);
      });
  }

}
