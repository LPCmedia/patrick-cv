import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'lpc-section',
  templateUrl: './section.component.html',
  styleUrls: ['section.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SectionComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
