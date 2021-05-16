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
  selector: 'app-canvasTest',
  templateUrl: './canvasTest.component.html',
  styleUrls: ['./canvasTest.component.css']
})
export class canvasTestComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
