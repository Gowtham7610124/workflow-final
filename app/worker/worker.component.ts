import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  isShown: boolean = false ; 
  design:boolean = false;
  analysis:boolean = false;
  raw_material:boolean = false;
  start_work:boolean=false;
  finished_product:boolean=false;
  purchase_teams:boolean=false;
  next_day:boolean=false;
  att_progress:boolean=false;
  safty_progres:boolean=false;
  analysis_info:boolean=false;
  analys_complete:boolean=false;
  stimulation_complete:boolean=false;
  stimulation_progress:boolean=false;
  raw_complete:boolean=false;
  raw_progress:boolean=false;
  machine_progress:boolean=false;
  machine_complete:boolean=false;
  product_complete:boolean=false;
  product_progress:boolean=false;
  show1:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }
  attendence_progress(){
    this.att_progress = !this.att_progress;
  }
 
  toggleShow() {
    this.isShown = ! this.isShown;
    this.att_progress = !this.att_progress;
  }
  
  design_container(){
    this.design = ! this.design;
    this.safty_progres=!this.safty_progres;
  }
  safty_progress(){
    
    this.safty_progres= !this.safty_progres;
  }

  analysis_progress(){
    this.analysis_info = ! this.analysis_info;
  }
  analysis_container(){
    this.analys_complete=!this.analys_complete;
    this.analysis_info=!this.analysis_info;
    this.analysis=!this.analysis;
  }
  raw_container(){
    this.raw_progress=!this.raw_progress;
  }
  stimulation_container(){
    this.stimulation_progress=!this.stimulation_progress;
    
  }
  

  rawMaterial_container(){
    this.stimulation_progress=!this.stimulation_progress;
    this.raw_material = ! this.raw_material;
    this.stimulation_complete=!this.stimulation_complete;
  }

  start_container(){
    this.start_work = ! this.start_work;
    this.raw_complete=!this.raw_complete;
    this.raw_progress=!this.raw_progress;
  }
  machine_container(){
    this.machine_progress=!this.machine_progress;
  }
  finish_container(){
    this.finished_product = ! this.finished_product;
    this.machine_progress=!this.machine_progress;
    this.machine_complete=!this.machine_complete;
  }
  product_container(){
    this.product_progress=!this.product_progress;
  }

  purchase_team(){
    this.purchase_teams = ! this.purchase_teams;
    this.product_complete=!this.product_complete;
    this.product_progress=!this.product_progress;
  }
  next_container(){
    this.next_day = ! this.next_day;
  }


}
