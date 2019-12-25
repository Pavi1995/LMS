import { Component, OnInit } from '@angular/core';
import { Servers } from './servers.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'TestServer';
  serverCreated = false;
  username = '';
  servers = ['Testserver', 'Testserver 2'];
  showSecret = false;
  log = [];
  server: Servers[] = [
    new Servers(
      'Managed-Server1',
      20,
      'Deployed Applications',
      'https://www.oracle.com/us/assets/cw20-t7-1-slide1-2714254.jpg'
    )
  ];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
