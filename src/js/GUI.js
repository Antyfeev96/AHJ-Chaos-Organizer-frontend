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
    this.mainEl.append(this.chatEl);
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
}
