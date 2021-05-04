/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
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
      this.svg.createLoupe(),
      this.svg.createView(),
      this.svg.createSettings(),
    );
    return this.headerButtonsEl;
  }

  createSettings() {
    this.settingsEl = document.createElement('div');
    this.settingsEl.className = 'settings hidden';
    this.settingsEl.append(
      this.createSetting(),
      this.createSetting(),
      this.createSetting(),
      this.createSetting(),
    );
    this.body.append(this.settingsEl);
  }

  createSetting() {
    this.settingEl = document.createElement('div');
    this.settingEl.className = 'setting';
    this.settingEl.textContent = 'Настройка';
    return this.settingEl;
  }

  createChat() {
    this.chatEl = document.createElement('div');
    this.chatEl.className = 'chat';
    return this.chatEl;
  }

  createMessage(text, type, timestamp) {
    this.messageEl = document.createElement('div');
    this.messageEl.className = 'message';
    this.messageEl.append(
      this.createMessageContent(text, type),
      this.createMessageStatus(timestamp),
    );
    this.chatEl.append(this.messageEl);
  }

  createMessageContent(text, type) {
    console.log(type);
    switch (type) {
      default:
        this.messageContentEl = document.createElement('div');
        break;
      case 'link':
        this.messageContentEl = document.createElement('a');
        this.messageContentEl.href = text;
    }
    this.messageContentEl.className = 'message__content';
    this.messageContentEl.textContent = text;
    return this.messageContentEl;
  }

  createMessageStatus(timestamp) {
    this.messageStatusEl = document.createElement('div');
    this.messageStatusEl.className = 'message__status';
    this.messageStatusEl.append(
      this.createMessageTimestamp(timestamp),
      this.svg.createCheck(),
    );
    return this.messageStatusEl;
  }

  createMessageTimestamp(timestamp) {
    this.messageTimestampEl = document.createElement('div');
    this.messageTimestampEl.className = 'message__timestamp';
    this.messageTimestampEl.textContent = timestamp;
    return this.messageTimestampEl;
  }

  createInputBox() {
    this.inputBoxEl = document.createElement('div');
    this.inputBoxEl.className = 'input-box';
    this.inputBoxEl.append(
      this.svg.createPaperclip(),
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
      this.svg.createSmile(),
      this.svg.createMicrophone(),
    );
    return this.inputButtonsEl;
  }

  createSection() {
    this.sectionEl = document.createElement('section');
    this.sectionEl.className = 'section';
    this.sectionEl.append(
      this.createSectionHeader(),
      this.createSectionFiles(),
    );
    return this.sectionEl;
  }

  createSectionHeader() {
    this.sectionHeaderEl = document.createElement('div');
    this.sectionHeaderEl.className = 'section__header';
    this.sectionHeaderEl.append(
      this.createSectionTitle(),
      this.createSectionExit(),
    );
    return this.sectionHeaderEl;
  }

  createSectionTitle() {
    this.sectionTitleEl = document.createElement('div');
    this.sectionTitleEl.className = 'section__title';
    this.sectionTitleEl.textContent = 'Shared media';
    return this.sectionTitleEl;
  }

  createSectionExit() {
    this.sectionExitEl = document.createElement('div');
    this.sectionExitEl.className = 'section__exit';
    this.sectionExitEl.textContent = '🞨';
    return this.sectionExitEl;
  }

  createSectionFiles() {
    this.sectionFilesEl = document.createElement('div');
    this.sectionFilesEl.className = 'section__files';
    this.sectionFilesEl.append(
      this.createFile(322, 'videos'),
      this.createFile(228, 'files'),
      this.createFile(322, 'audio-files'),
      this.createFile(228, 'shared-links'),
      this.createFile(555, 'voice-messages'),
    );
    return this.sectionFilesEl;
  }

  createFile(number, type) {
    switch (type) {
      case 'videos':
        this.icon = this.svg.createVideos();
        break;
      case 'files':
        this.icon = this.svg.createDocs();
        break;
      case 'audio-files':
        this.icon = this.svg.createAudios();
        break;
      case 'shared-links':
        this.icon = this.svg.createLinks();
        break;
      case 'voice-messages':
        this.icon = this.svg.createVoice();
        break;
      default:
        throw new Error('Неверный тип данных');
    }
    this.fileEl = document.createElement('div');
    this.fileEl.className = 'file';
    this.fileEl.append(
      this.icon,
      this.createQuantity(number, type),
    );
    return this.fileEl;
  }

  createQuantity(number, type) {
    if (!Number.isInteger(number)) throw new Error('Количество файлов должно быть числом');
    switch (type) {
      case 'videos':
      case 'files':
      case 'audio-files':
      case 'shared-links':
      case 'voice-messages':
        this.type = type.replace(/-/g, ' ');
        break;
      default:
        throw new Error('Неверный тип данных');
    }
    this.quantityEl = document.createElement('div');
    this.quantityEl.className = 'file__quantity';
    this.quantityEl.textContent = `${number} ${this.type}`;
    return this.quantityEl;
  }

  createFilesWindow() {
    this.window = document.createElement('div');
    this.window.className = 'files-window';
    this.window.append(
      this.createFilesHeader(),
      this.createFilesContent(),
    );
    return this.window;
  }

  createFilesHeader() {
    this.windowHeader = document.createElement('div');
    this.windowHeader.className = 'files-window__header';
    this.span1 = document.createElement('span');
    this.span1.textContent = 'Список файлов';
    this.span2 = document.createElement('span');
    this.span2.textContent = '🞨';
    this.span2.id = 'close';
    this.windowHeader.append(this.span1, this.span2);
    return this.windowHeader;
  }

  createFilesContent() {
    this.windowContent = document.createElement('div');
    this.windowContent.className = 'files-window__content';
    return this.windowContent;
  }
}
