import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Parent2Component implements OnInit {
  text = "";
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.share.subscribe(x => this.text = x)
  }

}
