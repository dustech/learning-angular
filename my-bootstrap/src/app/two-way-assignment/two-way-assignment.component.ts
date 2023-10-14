import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-assignment',
  templateUrl: './two-way-assignment.component.html',
  styleUrls: ['./two-way-assignment.component.css']
})
export class TwoWayAssignmentComponent implements OnInit {

  public get isResetEnabled(): boolean {
    return (this.username === '') ? false : true;

  }
  onReset(event: MouseEvent) {

    this.username = '';
  }
  ngOnInit(): void {
    this.username = '';
  }

  private _username: string;
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

}
