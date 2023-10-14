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

  private _newServerName: String;
  public get newServerName(): String {
    return this._newServerName;
  }
  public set newServerName(value: String) {
    this._newServerName = value;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
    console.info('ngOnInit run');
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! ' + this.newServerName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.newServerName = (<HTMLInputElement>event.target).value;
  }

}
