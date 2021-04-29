export default class GUI {
  constructor(svg) {
    this.body = document.body;
    this.svg = svg;
  }

  init() {
    this.createContainer();
  }

  createContainer() {
    this.containerEl = document.createElement('div');
    this.containerEl.className = 'container';
    this.createMain();
    this.createChat();
    this.body.append(this.containerEl);
  }

  createMain() {
    this.mainEl = document.createElement('main');
    this.mainEl.className = 'main';
    this.createHeader();
    this.containerEl.append(this.mainEl);
  }

  createHeader() {
    this.headerEl = document.createElement('header');
    this.headerEl.className = 'header';
    this.createHeaderTitle();
    this.createHeaderButtons();
    this.createLoupe();
    this.createView();
    this.createSettings();
    this.mainEl.append(this.headerEl);
  }

  createHeaderTitle() {
    this.headerTitleEl = document.createElement('div');
    this.headerTitleEl.className = 'header__title';
    this.headerTitleEl.textContent = 'Saved messages';
    this.headerEl.append(this.headerTitleEl);
  }

  createHeaderButtons() {
    this.headerButtonsEl = document.createElement('div');
    this.headerButtonsEl.className = 'header__buttons';
    this.headerEl.append(this.headerButtonsEl);
  }

  createChat() {
    this.chatEl = document.createElement('div');
    this.chatEl.className = 'chat';
    this.createMessage();
    this.mainEl.append(this.chatEl);
  }

  createMessage() {
    this.messageEl = document.createElement('div');
    this.messageEl.className = 'message';
    this.messageEl.append(
      this.createMessageContent('Hello!'),
      this.createMessageStatus(),
    );
    this.chatEl.append(this.messageEl);
  }

  createMessageContent(text) {
    this.messageContentEl = document.createElement('div');
    this.messageContentEl.className = 'message__content';
    this.messageContentEl.textContent = text;
    return this.messageContentEl;
  }

  createMessageStatus() {
    this.messageStatusEl = document.createElement('div');
    this.messageStatusEl.className = 'message__status';
    this.messageStatusEl.append(
      this.createMessageTimestamp('23:17'),
      this.createCheck(),
    );
    return this.messageStatusEl;
  }

  createMessageTimestamp(time) {
    this.messageTimestampEl = document.createElement('div');
    this.messageTimestampEl.className = 'message__timestamp';
    this.messageTimestampEl.textContent = time;
    return this.messageTimestampEl;
  }

  createInputBox() {
    this.a = 123;
  }

  createLoupe() {
    this.headerButtonsEl.append(this.svg.createLoupe());
  }

  createView() {
    this.headerButtonsEl.append(this.svg.createView());
  }

  createSettings() {
    this.headerButtonsEl.append(this.svg.createSettings());
  }

  createCheck() {
    return this.svg.createCheck();
  }
}
