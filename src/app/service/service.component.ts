import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

@Injectable()
export class ServiceComponent implements OnInit {
  records ={}


  constructor(private http: HttpClient) {


  }

  getData(){
  	return this.http.get('http://127.0.0.1:8080/demo/aliens').subscribe(data =>{
  		console.log(JSON.stringify(data))
  	})
  }

  ngOnInit() {
  	this.records = this.getData();
  }

}
