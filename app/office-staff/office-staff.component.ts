import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-staff',
  templateUrl: './office-staff.component.html',
  styleUrls: ['./office-staff.component.css']
})
export class OfficeStaffComponent implements OnInit {
  
  constructor() { }
  first:boolean=false;
  second:boolean=false;
  third:boolean=false;
  forth:boolean=false;
  fifth:boolean=false;
  sixth:boolean=false;
  seventh:boolean=false;
  c1_completed:boolean=false;
  c1_progress:boolean=false;
  c2_completed:boolean=false;
  c2_progress:boolean=false;
  c3_completed:boolean=false;
  c3_progress:boolean=false;
  c4_completed:boolean=false;
  c4_progress:boolean=false;
  c5_completed:boolean=false;
  c5_progress:boolean=false;
  c6_progress:boolean=false;
  c6_completed:boolean=false;
  c7_completed:boolean=false;
  c7_progress:boolean=false;
  ngOnInit(): void {
  }
  first_c1(){
    this.c1_progress=!this.c1_progress;
  }
  first_container(){
    this.first = ! this.first;
    this.c1_progress=!this.c1_progress;
    this.c1_completed=!this.c1_completed;
  }
  second_c2(){
    this.c2_progress=!this.c2_progress;
  }
  second_container(){
    this.second = ! this.second;
    this.c2_progress=!this.c2_progress;
    this.c2_completed=!this.c2_completed;
  }
  c3_container(){
    this.c3_progress=!this.c3_progress;
  }
  third_container(){
    this.third = ! this.third;
    this.c3_completed=!this.c3_completed;
    this.c3_progress=!this.c3_progress;
  }
  c4_container(){
    this.c4_progress=!this.c4_progress;
  }
  forth_container(){
    this.forth = ! this.forth;
    this.c4_progress=!this.c4_progress;
    this.c4_completed=!this.c4_completed;
  }
  c5_container(){
    this.c5_progress=!this.c5_progress;
  }
  fifth_container(){
    this.fifth = ! this.fifth;
    this.c5_completed=!this.c5_completed;
    this.c5_progress=!this.c5_progress;
  }
  c6_container(){
    this.c6_progress=!this.c6_progress;
  }
  sixth_container(){
    this.sixth = ! this.sixth;
    this.c6_progress=!this.c6_progress;
    this.c6_completed=!this.c6_completed;
  }
  c7_container(){
    this.c7_progress=!this.c7_progress;

  }
  seventh_container(){
    this.seventh = ! this.seventh;
    this.c7_completed=!this.c7_completed;
    this.c7_progress=!this.c7_progress;
  }
  
 
}
