import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BoardComponent } from './Components/board/board.component';
import { StudentSearchComponent } from './Student/Components/student-search/student-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full'},
  { path: 'board', component: BoardComponent },
  { path: 'student', component: StudentSearchComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
