/* eslint-disable class-methods-use-this */
export default class API {
  constructor() {
    this.ws = new WebSocket('ws://localhost:7070/ws');
  }

  initWS() {
    this.ws.addEventListener('open', () => this.openListener());
    this.ws.addEventListener('message', (e) => this.messageListener(e));
    this.ws.addEventListener('close', (e) => this.closeListener(e));
    this.ws.addEventListener('error', () => this.errorListener());
  }

  openListener() {
    console.log('Server is open');
  }

  errorListener() {
    console.log('error');
  }

  closeListener(e) {
    if (e.wasClean) {
      console.log(`Соединение закрыто, код ${e.code}, причина ${e.reason}`);
    }
    this.ws = new WebSocket('ws://localhost:7070/ws');
    this.initWS();
  }

  messageListener(e) {
    this.response = JSON.parse(e.data);
    console.log(this.response);
  }

  sendMessage(text, type) {
    this.request = {
      text,
      type,
    };
    this.ws.send(JSON.stringify(this.request));
  }
}
