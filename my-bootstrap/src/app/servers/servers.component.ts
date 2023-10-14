import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private _allowNewServer: boolean = false;

  public get allowNewServer(): boolean {
    return this._allowNewServer;
  }
  public set allowNewServer(value: boolean) {
    this._allowNewServer = value;
  }

  private _serverCreationStatus = 'No server was created!';

  public get serverCreationStatus() {
    return this._serverCreationStatus;
  }
  public set serverCreationStatus(value) {
    this._serverCreationStatus = value;
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';

  }


}
