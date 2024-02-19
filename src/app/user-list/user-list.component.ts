import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  message:string='';
  constructor() { }

  ngOnInit(): void {
  }

  getHelloText(){
    return "Hello Maria!!";
  }
  getMessage(){
    alert("You clicked a button!");
    //console.warn("You clicked a button!");
    //console.log("You clicked a button!");
  }

  getTextMessage(msg:string){
    this.message=msg;
    console.log(msg);
  }
 

}
