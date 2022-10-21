import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css'],
})
export class Parent1Component implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit(): void {}

  text: string = '';

  updateText(text: string) {
    this.data.updateData(text);
  }
}
