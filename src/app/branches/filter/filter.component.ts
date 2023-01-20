import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 @Input() one:number=0;
 @Input() two:number=0;
 @Input() three:number=0;
 @Input() four:number=0;
 @Input() five:number=0;
}
