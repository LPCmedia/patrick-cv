import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'lpc-other-experience',
  templateUrl: './other-experience.component.html',
  styleUrls: ['./other-experience.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OtherExperienceComponent implements OnInit {

  @Input() timeFrame: string;
  @Input() title: string;
  @Input() company: string;

  constructor() { }

  ngOnInit() {
    // if (this.hasResponsabilities === undefined) {
    //   this.hasResponsabilities = true;
    // }
  }

}
