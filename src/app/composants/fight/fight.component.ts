import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  varDisplay : String = "none";

  displayModal(){
    this.varDisplay = "block";
  }

  hideModal(){
    this.varDisplay = "none";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
