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
      this.createInputFile(),
      this.svg.createPaperclip(),
      this.createInputEl(),
      this.createInputButtons(),
    );
    return this.inputBoxEl;
  }

  createInputFile() {
    this.inputFile = document.createElement('input');
    this.inputFile.type = 'file';
    this.inputFile.name = 'file';
    this.inputFile.className = 'input-file';
    return this.inputFile;
  }

  createInputEl() {
    this.inputEl = document.createElement('input');
    this.inputEl.className = 'input-box__input';
    this.inputEl.id = 'input';
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
      this.createFile(228, 'messages'),
      this.createFile(228, 'links'),
      this.createFile(555, 'image'),
      this.createFile(322, 'video'),
      this.createFile(322, 'audio'),
    );
    return this.sectionFilesEl;
  }

  createFile(number, type) {
    switch (type) {
      case 'messages':
        this.icon = this.svg.createDocs();
        break;
      case 'links':
        this.icon = this.svg.createLinks();
        break;
      case 'video':
        this.icon = this.svg.createVideos();
        break;
      case 'image':
        this.icon = this.svg.createImages();
        break;
      case 'audio':
        this.icon = this.svg.createAudios();
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
      case 'video':
      case 'messages':
      case 'audio':
      case 'links':
      case 'image':
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

  createFilesWindow(array) {
    this.window = document.createElement('div');
    this.window.className = 'files-window';
    this.window.append(
      this.createFilesHeader(),
      this.createFilesContent(array),
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

  createFilesContent(array) {
    this.windowContent = document.createElement('div');
    this.windowContent.className = 'files-window__content';
    for (const message of array) {
      switch (message.type) {
        case 'link':
        case 'text':
          this.windowContent.append(
            this.createFilesItem(message.message, message.timestamp, message.type),
          );
          break;
        case 'videos':
          this.windowContent.append(
            this.createVideoItem(message.message, message.timestamp),
          );
          break;
        default:
          break;
      }
    }
    return this.windowContent;
  }

  createFilesItem(text, timestamp, type) {
    this.item = document.createElement('div');
    this.item.className = 'files-window__item';
    if (type === 'link') {
      this.itemText = document.createElement('a');
      this.itemText.href = text;
      this.itemText.textContent = text;
    } else {
      this.itemText = document.createElement('span');
      this.itemText.textContent = text;
    }
    this.itemTime = document.createElement('span');
    this.itemTime.textContent = timestamp;
    this.item.append(this.itemText, this.itemTime);
    return this.item;
  }

  createVideoItem(text, timestamp) {
    this.item = document.createElement('div');
    this.item.className = 'files-window__item';
    this.itemContent = document.createElement('img');
    this.itemContent.src = text;
    this.itemTime = document.createElement('span');
    this.itemTime.textContent = timestamp;
    this.item.append(this.itemContent, this.itemTime);
    return this.item;
  }

  // createPreview() {
  //   this.preview = document.createElement('img');
  //   this.preview.id = 'preview';
  //   return this.preview;
  // }
}
