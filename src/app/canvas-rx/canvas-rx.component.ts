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
  selector: 'app-canvas-rx',
  templateUrl: './canvas-rx.component.html',
  styleUrls: ['./canvas-rx.component.css']
})
export class CanvasRxComponent implements OnInit, AfterViewInit {
  /** Template reference to the canvas element */
  @ViewChild('canvasEl') canvasEl: ElementRef;
  /** Canvas 2d context */
  private ctx: CanvasRenderingContext2D;

  constructor() {}
  ngOnInit(): void {}

  ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvasEl.nativeElement;
    this.ctx = canvasEl.getContext('2d');
    this.ctx.lineWidth = 1;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = '#000';
    this.ctx.beginPath();
    this.c(canvasEl).subscribe(e => {
      this.draw(e);
    });
  }

  draw = function(e) {
    this.ctx.lineTo(e.clientX, e.clientY); // 移到滑鼠在的位置
    this.ctx.stroke(); // 畫畫
  };

  c = function(canvasEl: HTMLCanvasElement) {
    return fromEvent(canvasEl, 'mousedown').pipe(
      //因為沒有重新設定x軸和y軸的值，
      //所以第二次後會開始出現劃出從上一次up的位置畫到這次down的位置的線條
      concatMap(e =>
        fromEvent(canvasEl, 'mousemove').pipe(
          takeUntil(fromEvent(canvasEl, 'mouseup'))
        )
      )
    );
  };

  d = function(canvasEl: HTMLCanvasElement) {
    return fromEvent(canvasEl, 'mousedown').pipe(
      //先重新設定x軸和y軸
      // tap(e => ctx.moveTo(e.clientX, e.clientY)),
      //再做move與up的監聽
      concatMap(e =>
        fromEvent(canvasEl, 'mousemove').pipe(
          takeUntil(fromEvent(canvasEl, 'mouseup'))
        )
      )
    );
  };
  test = function(e) {};
}
