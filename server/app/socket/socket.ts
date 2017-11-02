import * as SocketIO from 'socket.io';
import * as http from 'http';

export class SocketControl {
    private socketManager: SocketIO.Server;
    private users = 0;
    private clients: string[];


    public init(server: http.Server) {
        this.clients = new Array<string>();
        this.socketManager = SocketIO.listen(server);

        this.socketManager.on('connection', (thisSocket) => {
            console.log('socket connected');
            this.users++;
            this.clients.push(thisSocket.id);

            thisSocket.emit('message', 'hello');

            this.socketManager.emit('message', 'user online : ' + this.users);

            thisSocket.on('disconnect', () => {
                this.socketManager.emit('disconnected');

                this.users = this.users - 1;
                this.socketManager.emit('message', 'byebye : ' + this.users);
            })

            thisSocket.on('custom-event-example', (data:any) => {
                thisSocket.emit('message', 'someone clicked do');
            })
        })

    }
}1
