import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Customers } from '../Model/User.model';
import { loadCUSTOMER, getCUSTOMER, deleteeCUSTOMER } from '../Store/Users/action';
import { getErrormessage, getcustomerlist } from '../Store/Users/selector';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userlisting',
  // standalone: true,
  // imports: [],
  templateUrl: './userlisting.component.html',
  styleUrl: './userlisting.component.css'
})
export class UserlistingComponent implements OnInit {
  Asociatelist!: Customers[];
  datasource: any;
  errormessage='';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isEditable:boolean = false;
  displayedColums: string[] = ["code", "name", "username", "email", "action"]
  constructor(private dialog: MatDialog, private store: Store) {

  }

  ngOnInit(): void {
    this.store.dispatch(loadCUSTOMER());
    this.store.select(getErrormessage).subscribe(res=>{
      this.errormessage=res;
    })
    this.store.select(getcustomerlist).subscribe(item => {
      this.Asociatelist = item;
      this.datasource = new MatTableDataSource<Customers>(this.Asociatelist);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }

  FunctionEdit(code:number){
    this.OpenPopup(code, 'Update Customer');
    this.isEditable = true;
    this.store.dispatch(getCUSTOMER({id:code}))
  }

  OpenPopup(code: number, title: string) {
    this.dialog.open(UserEditComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: code,
        title: title
      }
    })

  }

}
