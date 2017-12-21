import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentSearchComponent } from './Components/student-search/student-search.component';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatGridListModule,
  MatListModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StudentService} from '../Services/student.service';
import {FileService} from '../Services/file.service';

@NgModule({
  declarations: [
    StudentSearchComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [StudentService, FileService],
})
export class StudentModule { }
