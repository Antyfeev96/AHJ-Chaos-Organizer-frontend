/* eslint-disable prefer-destructuring */
export default class AppController {
  constructor(gui, api) {
    this.gui = gui;
    this.api = api;
  }

  init() {
    this.gui.init();
    this.initConstants();
    this.initListeners();
  }

  async initConstants() {
    this.body = document.body;
    this.container = this.body.querySelector('.container');
    this.exitButton = this.body.querySelector('.section__exit');
    this.main = this.body.querySelector('.main');
    this.viewIcon = this.body.querySelector('#view');
    this.input = this.body.querySelector('#input');
    this.settingsIcon = this.body.querySelector('#settings');
    this.paperclip = this.body.querySelector('#paperclip');
    this.fileControl = this.body.querySelector('.input-file');
    this.preview = this.body.querySelector('#preview');
    await this.changeQuantity();
  }

  initListeners() {
    this.addExitListener();
    this.addViewListener();
    this.addPaperclipListener();
    this.addInputListener();
    this.addChangeListener();
    this.addSettingsListener();
    this.addFilesListener();
    this.addMediaListener();
    this.addDropListener();
  }

  addExitListener() {
    this.exitButton.addEventListener('click', () => {
      this.exitButton.closest('.section').style.display = 'none';
      this.main.style.width = `${100}%`;
      this.viewIcon.classList.toggle('focus');
      this.getCoords();
    });
  }

  addViewListener() {
    this.viewIcon.addEventListener('click', () => {
      switch (this.viewIcon.classList.contains('focus')) {
        case true:
          this.exitButton.closest('.section').style.display = 'none';
          this.viewIcon.classList.remove('focus');
          this.main.style.width = `${100}%`;
          break;
        case false:
          this.exitButton.closest('.section').style.display = 'block';
          this.viewIcon.classList.add('focus');
          this.main.style.width = `${70}%`;
          break;
        default:
          break;
      }
      this.getCoords();
    });
  }

  addChangeListener() {
    this.fileControl.addEventListener('change', async () => {
      const file = this.fileControl.files[0];
      await this.sendFile(file);
      await this.changeQuantity();
    });
  }

  async sendFile(file) {
    this.name = file.name;
    if (file.type.startsWith('image')) {
      this.type = 'image';
    } else if (file.type.startsWith('video')) {
      this.type = 'video';
    } else if (file.type.startsWith('audio')) {
      this.type = 'audio';
    }
    const blob = URL.createObjectURL(file);
    this.text = await new Response(blob).text();
    const obj = {
      name: this.name,
      text: this.text,
      type: this.type,
    };
    const { text, type, timestamp } = await this.api.sendMedia(obj);
    this.gui.createMessage(text, type, timestamp);
  }

  addPaperclipListener() {
    this.paperclip.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.fileControl.dispatchEvent(new MouseEvent('click'));
    });
  }

  addInputListener() {
    this.input.addEventListener('keydown', async (e) => {
      if (e.code === 'Enter' && this.input.value !== '') {
        this.type = this.input.value.startsWith('http') || this.input.value.startsWith('https') ? 'link' : 'message';
        const {
          text,
          type,
          timestamp,
          length,
        } = await this.api.request('POST', {
          type: this.type,
          text: this.input.value,
        });
        console.log(length);
        this.gui.createMessage(text, type, timestamp);
        this.input.value = '';
        await this.changeQuantity();
      }
    });
  }

  addSettingsListener() {
    this.settingsIcon.addEventListener('click', () => {
      switch (this.body.querySelector('.settings')) {
        case null:
          this.gui.createSettings();
          this.getCoords();
          break;
        default:
          this.body.querySelector('.settings').remove();
          break;
      }
    });
  }

  addFilesListener() {
    Array.from(this.body.querySelectorAll('.file')).forEach((file) => {
      file.addEventListener('click', async () => {
        if (document.querySelector('.files-window') !== null) return;
        const type = file.querySelector('svg').id;
        if (type === 'message' || type === 'link') {
          this.array = await this.api.request('GET', {
            text: `give-${type}`,
            type,
          });
          this.body.append(this.gui.createFilesWindow(this.array));
          document.getElementById('close').addEventListener('click', () => {
            this.body.querySelector('.files-window').remove();
          });
          await this.changeQuantity();
        }
      });
    });
  }

  addMediaListener() {
    Array.from(this.body.querySelectorAll('.file')).forEach((file) => {
      file.addEventListener('click', async () => {
        if (document.querySelector('.files-window') !== null) return;
        const type = file.querySelector('svg').id;
        if (type === 'video' || type === 'image' || type === 'audio') {
          this.array = await this.api.request('GET', {
            text: `give-${type}`,
            type,
          });
          this.body.append(this.gui.createFilesWindow(this.array));
          document.getElementById('close').addEventListener('click', () => {
            this.body.querySelector('.files-window').remove();
          });
        }
        await this.changeQuantity();
      });
    });
  }

  addDropListener() {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
      this.container.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
    });

    this.container.addEventListener('drop', async (e) => {
      this.data = e.dataTransfer;
      this.file = this.data.files[0]; // линтер ругается на эту строчку, но на мой взгляд,
      // она более читабельна, чем [this.file] = this.data.files
      await this.sendFile(this.file);
    });
  }

  getCoords() {
    if (this.body.querySelector('.settings') === null) return;
    this.settingsIcon = this.body.querySelector('#settings');
    this.settings = this.body.querySelector('.settings');
    this.coords = this.settingsIcon.getBoundingClientRect();
    this.settings.style.top = `${this.coords.top + 20}px`;
    this.settings.style.left = `${this.coords.left - 150}px`;
  }

  async changeQuantity() {
    const types = ['message', 'link', 'image', 'video', 'audio'];
    types.forEach(async (type) => {
      const length = await this.api.giveLength(type);
      const number = length[1];
      const el = this.body.querySelector(`#${type}`).nextSibling;
      el.textContent = '';
      el.textContent = `${number} ${type}`;
    });
  }
}

// Смайлики
