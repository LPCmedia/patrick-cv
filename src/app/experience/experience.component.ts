import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'lpc-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ExperienceComponent implements OnInit {

  @Input() timeFrame: string;
  @Input() title: string;
  @Input() company: string;
  @Input() hasResponsabilities = true;

  constructor() { }

  ngOnInit() {
    // if (this.hasResponsabilities === undefined) {
    //   this.hasResponsabilities = true;
    // }
  }

}
