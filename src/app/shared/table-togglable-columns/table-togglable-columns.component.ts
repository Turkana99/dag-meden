import { Component, Input, OnDestroy, OnInit, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, skip, Subscription } from 'rxjs';
import { TableMenuDialogComponent } from '../../dialogs/table-menu-dialog/table-menu-dialog.component';

@Component({
  selector: 'table-togglable-columns',
  templateUrl: './table-togglable-columns.component.html',
  styleUrls: ['./table-togglable-columns.component.scss'],
})
export class TableTogglableColumnsComponent implements OnInit, OnDestroy {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: any[] = [];
  filteredColumns: any[] = [];
  filteredColumnKeys: string[] = [];
  private columnsData$ = new BehaviorSubject(this.displayedColumns);
  private columnsDataSubscription = new Subscription();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this._filteredColumns = structuredClone(this.displayedColumns);
    this.displayedColumns = structuredClone(
      this.displayedColumns.map((x) => {
        x.active = true;
        return x;
      })
    );

    this.columnsDataSubscription = this.columnsData$
      .pipe(skip(1))
      .subscribe((val) => {
        this._filteredColumns = structuredClone(val);
        for (const element of this.displayedColumns) {
          element.active = this.filteredColumns.some(
            (x: any) => x.key == element.key
          );
        }
      });
  }

  openDialog() {
    this.dialog.open(TableMenuDialogComponent, {
      position: {
        top: '200px',
      },
      width: '500px',
      data: {
        columnsData$: this.columnsData$,
        allColumns: this.displayedColumns,
      },
    });
  }

  set _filteredColumns(val: any) {
    this.filteredColumns = val;
    this.filteredColumnKeys = structuredClone(this.filteredColumns).map(
      (x) => x.key
    );
  }

  ngOnDestroy(): void {
    this.columnsDataSubscription.unsubscribe();
  }
}
