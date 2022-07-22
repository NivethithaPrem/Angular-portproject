import { Component, OnInit } from '@angular/core';
import { PortprojectService } from '../portproject.service';

@Component({
  selector: 'app-portproject',
  templateUrl: './portproject.component.html',
  styleUrls: ['./portproject.component.scss']
})
export class PortprojectComponent implements OnInit {
  public Port:any;
  constructor(private service:PortprojectService ) { }

  ngOnInit(): void {this.getports();
  }
  private getports():void{
    this.service.getport().subscribe(result=>{this.Port=result;});
  }

}
