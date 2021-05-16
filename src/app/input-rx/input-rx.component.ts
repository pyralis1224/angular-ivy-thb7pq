import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, mapTo, takeUntil, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-input-rx',
  templateUrl: './input-rx.component.html',
  styleUrls: ['./input-rx.component.css']
})
export class InputRxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
