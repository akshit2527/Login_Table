import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule

import { AppComponent } from './app.component';
import { AttackTableComponent } from './attack table/attack-table.component'; // ✅ Ensure correct path

@NgModule({
  declarations: [
    AppComponent,
    AttackTableComponent  // ✅ Register the component here
  ],
  imports: [
    BrowserModule,
    FormsModule  // ✅ Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
