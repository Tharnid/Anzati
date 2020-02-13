import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server can be created!!!';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {}, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    // this.serverCreationStatus = 'Server was created!!!';
    this.serverCreationStatus = 'Server was created!!! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
