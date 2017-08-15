import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  hobbies: string[];


  constructor() { 
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit...');
    
    this.hobbies = ['Boxing', 'Shooting', 'Writing Code', 'Lifting'];
  }

  addHobby(hobby){
    let displayDate = new Date().toLocaleDateString();
    console.log('Added Hobby:' + " " + (hobby) + " " + "on" + " " + displayDate);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    let displayDate = new Date().toLocaleDateString();
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        console.log('Deleted Hobby:' + " " + (hobby) + " " + "on" + " " + displayDate);
        this.hobbies.splice(i, 1);
      }
    }
  }
}
