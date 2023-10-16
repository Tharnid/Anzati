  import { Component } from '@angular/core';

@Component({
  // selector: [app-servers], // This is an attribute selector
  // selector: '.app-servers', // This is a class selector
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverId = 10;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event:    Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

 getServerStatus() {
    return this.serverStatus;
 }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
