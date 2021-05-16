import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { canvasTestComponent } from './canvasTest/canvasTest.component';
import { CanvasRxComponent } from './canvas-rx/canvas-rx.component';
import { InputRxComponent } from './input-rx/input-rx.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, canvasTestComponent, CanvasRxComponent, InputRxComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
