import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'Tharngoth',
      level: '20',
      class: 'Templar',
    },
    {
      id: 1,
      name: 'Saldornid',
      level: '20',
      class: 'Nightblade',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
