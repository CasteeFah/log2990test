import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public title = 'LOG2990';
    public message: string;
    public socket =  io('http://localhost:3000');

    constructor() { }

    public ngOnInit(): void {
        this.socket.connect();
        this.socket.on('message', (data) => {
            console.log(data);
        });
    }

    public doSomething() {
        this.socket.emit('custom-event-example', {'variable': 'message'});
    }
}
