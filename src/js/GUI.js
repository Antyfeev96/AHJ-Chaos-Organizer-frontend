export default class GUI {
  constructor(svg) {
    this.body = document.body;
    this.svg = svg;
  }

  init() {
    this.body.append(this.createContainer());
  }

  createContainer() {
    this.containerEl = document.createElement('div');
    this.containerEl.className = 'container';
    this.containerEl.append(
      this.createMain(),
      this.createSection(),
    );
    return this.containerEl;
  }

  createMain() {
    this.mainEl = document.createElement('main');
    this.mainEl.className = 'main';
    this.mainEl.append(
      this.createHeader(),
      this.createChat(),
      this.createInputBox(),
    );
    return this.mainEl;
  }

  createHeader() {
    this.headerEl = document.createElement('header');
    this.headerEl.className = 'header';
    this.headerEl.append(
      this.createHeaderTitle(),
      this.createHeaderButtons(),
    );
    return this.headerEl;
  }

  createHeaderTitle() {
    this.headerTitleEl = document.createElement('div');
    this.headerTitleEl.className = 'header__title';
    this.headerTitleEl.textContent = 'Saved messages';
    return this.headerTitleEl;
  }

  createHeaderButtons() {
    this.headerButtonsEl = document.createElement('div');
    this.headerButtonsEl.className = 'header__buttons';
    this.headerButtonsEl.append(
      this.createLoupe(),
      this.createView(),
      this.createSettings(),
    );
    return this.headerButtonsEl;
  }

  createChat() {
    this.chatEl = document.createElement('div');
    this.chatEl.className = 'chat';
    this.chatEl.append(this.createMessage());
    return this.chatEl;
  }

  createMessage() {
    this.messageEl = document.createElement('div');
    this.messageEl.className = 'message';
    this.messageEl.append(
      this.createMessageContent('Hello!'),
      this.createMessageStatus(),
    );
    return this.messageEl;
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
    this.inputBoxEl = document.createElement('div');
    this.inputBoxEl.className = 'input-box';
    this.inputBoxEl.append(
      this.createPaperclip(),
      this.createInputEl(),
      this.createInputButtons(),
    );
    return this.inputBoxEl;
  }

  createInputEl() {
    this.inputEl = document.createElement('input');
    this.inputEl.className = 'input-box__input';
    this.inputEl.placeholder = 'Write a message...';
    this.inputEl.type = 'text';
    return this.inputEl;
  }

  createInputButtons() {
    this.inputButtonsEl = document.createElement('div');
    this.inputButtonsEl.className = 'input-box__buttons';
    this.inputButtonsEl.append(
      this.createSmile(),
      this.createMicrophone(),
    );
    return this.inputButtonsEl;
  }

  createSection() {
    this.sectionEl = document.createElement('section');
    this.sectionEl.className = 'section';
    return this.sectionEl;
  }

  createLoupe() {
    return this.svg.createLoupe();
  }

  createView() {
    return this.svg.createView();
  }

  createSettings() {
    return this.svg.createSettings();
  }

  createCheck() {
    return this.svg.createCheck();
  }

  createPaperclip() {
    return this.svg.createPaperclip();
  }

  createSmile() {
    return this.svg.createSmile();
  }

  createMicrophone() {
    return this.svg.createMicrophone();
  }
}
