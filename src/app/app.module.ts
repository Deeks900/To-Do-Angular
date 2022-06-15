// NgModule is a decorator for a angular class
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { HeaderComponent } from './layout/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    TodoFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
