import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { UserEditComponent } from "./user-edit.component";
import { MaterialModule } from "../Material.module";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        CommonModule,
        ButtonModule,
        CardModule,
        TableModule,
        PaginatorModule,
        MaterialModule
             

    ],
    declarations: [
        UserEditComponent
    ],
    exports: [
        UserEditComponent
    ]
})
export class UserEditModule {
}
