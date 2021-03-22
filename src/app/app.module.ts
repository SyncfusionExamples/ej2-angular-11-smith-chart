import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the SmithchartModule for the Smithchart component
import { SmithchartModule, TooltipRenderService, SmithchartLegendService } from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SmithchartModule
  ],
  providers: [TooltipRenderService, SmithchartLegendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
