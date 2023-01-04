import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoReducer } from './reducers/todo.reducer';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { DisplayTodoComponent } from './components/display-todo/display-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    DisplayTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todos:TodoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
