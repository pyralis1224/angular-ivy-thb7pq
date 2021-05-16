import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { from, fromEvent } from 'rxjs';
import {
  concatMap,
  mapTo,
  takeUntil,
  takeWhile,
  tap,
  debounceTime,
  map
} from 'rxjs/operators';

import $ from 'jquery';

@Component({
  selector: 'app-input-rx',
  templateUrl: './input-rx.component.html',
  styleUrls: ['./input-rx.component.css']
})
export class InputRxComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var elem = $('.auto-complete');
    var source = fromEvent(elem, 'input');
    var subscription = source.subscribe(function(e) {
      console.log($(e));
    });
  }
}
