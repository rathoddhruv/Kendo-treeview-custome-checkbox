import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { AppComponent } from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TreeViewModule,
        InputsModule,
        FormsModule
    ]
})
export class AppModule { }
