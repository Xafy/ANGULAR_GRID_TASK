import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dtOptions: DataTables.Settings = {};
  data : any ;
  dtTrigger : Subject<any> = new Subject<any>();

  constructor(private service : DataService ){}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: "simple_numbers",
    }

    this.service.getData().subscribe((data) => {
      this.data = data;
      this.dtTrigger.next(null);
    })
  }
}
