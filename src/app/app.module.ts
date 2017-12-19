import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BoardService } from './Services/board.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentModule } from './Student/Student.module';
import { BoardComponent } from './Components/board/board.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StudentModule,
    AppRoutingModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
