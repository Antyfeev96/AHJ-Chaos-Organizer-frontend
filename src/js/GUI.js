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
      this.createFormBox(),
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
      case 'message':
        this.messageContentEl = document.createElement('div');
        this.messageContentEl.textContent = text;
        break;
      case 'link':
        this.messageContentEl = document.createElement('a');
        this.messageContentEl.href = text;
        this.messageContentEl.textContent = text;
        break;
      case 'image':
        this.messageContentEl = document.createElement('a');
        this.messageContentEl.href = text;
        this.messageContentEl.download = 'image';
        this.img = document.createElement('img');
        this.img.src = text;
        this.messageContentEl.append(this.img);
        break;
      case 'video':
        this.messageContentEl = document.createElement('video');
        this.messageContentEl.controls = 'controls';
        this.source = document.createElement('source');
        this.source.src = text;
        this.messageContentEl.append(this.source);
        break;
      case 'audio':
        this.messageContentEl = document.createElement('audio');
        this.messageContentEl.controls = 'controls';
        this.source = document.createElement('source');
        this.source.src = text;
        this.messageContentEl.append(this.source);
        break;
      default:
        break;
    }
    this.messageContentEl.className = 'message__content';
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

  createFormBox() {
    this.inputBoxEl = document.createElement('form');
    this.inputBoxEl.className = 'input-box';
    this.inputBoxEl.id = 'form';
    this.inputBoxEl.append(
      this.createInputFile(),
      this.createFormSubmit(),
      this.svg.createPaperclip(),
      this.createInputEl(),
      this.createInputButtons(),
    );
    return this.inputBoxEl;
  }

  createFormSubmit() {
    this.submit = document.createElement('input');
    this.submit.type = 'submit';
    this.submit.id = 'submit-button';
    return this.submit;
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
      this.svg.createCamera(),
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
      this.createFile(0, 'message'),
      this.createFile(0, 'link'),
      this.createFile(0, 'image'),
      this.createFile(0, 'video'),
      this.createFile(0, 'audio'),
    );
    return this.sectionFilesEl;
  }

  createSectionCoords(lang, long, accuracy) {
    this.coordsEl = document.createElement('div');
    this.coordsEl.className = 'section__coords';
    this.coordsEl.textContent = 'Ваше текущее местоположение';
    this.p1 = document.createElement('p');
    this.p1.textContent = `Широта: ${lang}`;
    this.p2 = document.createElement('p');
    this.p2.textContent = `Долгота: ${long}`;
    this.p3 = document.createElement('p');
    this.p3.textContent = `Точность: плюс-минус ${accuracy} метров`;
    this.coordsEl.append(this.p1, this.p2, this.p3);
    this.sectionEl.append(this.coordsEl);
  }

  createFile(number, type) {
    switch (type) {
      case 'message':
        this.icon = this.svg.createDocs();
        break;
      case 'link':
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
    this.fileEl.className = `file ${type}`;
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
      case 'message':
      case 'audio':
      case 'link':
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
        case 'message':
          this.windowContent.append(
            this.createTextItem(message.text, message.timestamp, message.type),
          );
          break;
        case 'video':
          this.windowContent.append(
            this.createVideoItem(message.text, message.timestamp),
          );
          break;
        case 'image':
          this.windowContent.append(
            this.createImageItem(message.text, message.timestamp),
          );
          break;
        case 'audio':
          this.windowContent.append(
            this.createAudioItem(message.text, message.timestamp),
          );
          break;
        default:
          break;
      }
    }
    return this.windowContent;
  }

  createTextItem(text, timestamp, type) {
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

  createImageItem(text, timestamp) {
    this.item = document.createElement('div');
    this.item.className = 'files-window__item';
    this.itemContent = document.createElement('img');
    this.itemContent.src = `lazy${text}`;
    this.itemTime = document.createElement('span');
    this.itemTime.textContent = timestamp;
    this.item.append(this.itemContent, this.itemTime);
    return this.item;
  }

  createVideoItem(text, timestamp) {
    this.item = document.createElement('div');
    this.item.className = 'files-window__item';
    this.video = document.createElement('video');
    this.video.controls = 'controls';
    this.videoContent = document.createElement('source');
    this.videoContent.src = text;
    this.video.append(this.videoContent);
    this.itemTime = document.createElement('span');
    this.itemTime.textContent = timestamp;
    this.item.append(this.video, this.itemTime);
    return this.item;
  }

  createAudioItem(text, timestamp) {
    this.item = document.createElement('div');
    this.item.className = 'files-window__item';
    this.audio = document.createElement('audio');
    this.audio.controls = 'controls';
    this.audioContent = document.createElement('source');
    this.audioContent.src = text;
    this.audio.append(this.audioContent);
    this.itemTime = document.createElement('span');
    this.itemTime.textContent = timestamp;
    this.item.append(this.audio, this.itemTime);
    return this.item;
  }

  createEmojiBox() {
    this.emojiBox = document.createElement('div');
    this.emojiBox.className = 'emoji';
    this.body.append(this.emojiBox);
    const emojis = [
      '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😋', '😊',
      '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙',
    ];
    for (const emoji of emojis) {
      this.emojiBox.append(this.createEmoji(emoji));
    }
  }

  createEmoji(emoji) {
    this.emoji = document.createElement('div');
    this.emoji.className = 'emoji__item';
    this.emoji.textContent = emoji;
    return this.emoji;
  }
}
