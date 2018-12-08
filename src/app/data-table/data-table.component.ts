import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
import {RestClient} from '../api.service';
import {User} from '../Models/user';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'username', 'time'];

  listedLadeboard='';
  public topListUsers = Array<User>();

  constructor(private _restClient: RestClient) { }

  ngOnInit() {
    this.dataSource = new DataTableDataSource(this.paginator, this.sort);
    this.getTopListFor(0);
  }

  getTopListFor(level) {
    this._restClient.getTopListFor(level).subscribe(
    data => {
              var users = new Array<User>();
              data["users"].forEach(user => {
                console.log(user['name']);
                //console.log(user['score']);
                //console.log(user['time']);
                let curr_user = new User();
                curr_user.name=user['name'];
                curr_user.score=user['score'];
                curr_user.time=user['time'];
                users.push(curr_user);
              });
              this.topListUsers=users;
            },
    err => console.error(err),
    () => console.log(this.topListUsers),
  );
  }

}
