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
    this.url = 'https://ahj-chaos-organizer-backend.herokuapp.com';
    this.container = this.body.querySelector('.container');
    this.exitButton = this.body.querySelector('.section__exit');
    this.main = this.body.querySelector('.main');
    this.viewIcon = this.body.querySelector('#view');
    this.input = this.body.querySelector('#input');
    this.camera = this.body.querySelector('#camera');
    this.microphone = this.body.querySelector('#microphone');
    this.settingsIcon = this.body.querySelector('#settings');
    this.smileIcon = this.body.querySelector('#smile');
    this.paperclip = this.body.querySelector('#paperclip');
    this.fileControl = this.body.querySelector('.input-file');
    this.preview = this.body.querySelector('#preview');
    this.form = this.body.querySelector('#form');
    this.submit = this.body.querySelector('#submit');
    await this.changeQuantity();
    this.watchGeolocation();
  }

  initListeners() {
    this.addExitListener();
    this.addViewListener();
    this.addPaperclipListener();
    this.addInputListener();
    this.addMediaFileListener();
    this.addSettingsListener();
    this.addDropListener();
    this.emojiListener();
    this.cameraListener();
    this.microphoneListener();
    this.onLoadListener();
    this.preventSubmit();
    this.lazyLoad();
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

  addMediaFileListener() {
    this.fileControl.addEventListener('change', async () => {
      const [file] = this.fileControl.files;
      const { link, type, timestamp } = await this.api.sendMedia(file);
      this.gui.createMessage(link, type, timestamp);
      await this.changeQuantity();
    });
  }

  async onLoadListener() {
    Array.from(this.body.querySelectorAll('.file')).forEach((file) => {
      file.addEventListener('click', async (e) => {
        if (document.querySelector('.files-window') !== null) return;
        const type = e.target.closest('.file').classList[1];
        const response = await this.api.takeSideMedia(type);
        this.body.append(this.gui.createFilesWindow(response));
        await this.changeQuantity();
        document.getElementById('close').addEventListener('click', () => {
          this.body.querySelector('.files-window').remove();
        });
        this.lazyLoad();
      });
    });
  }

  addPaperclipListener() {
    this.paperclip.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.fileControl.dispatchEvent(new MouseEvent('click'));
    });
  }

  preventSubmit() {
    this.form.addEventListener('submit', (e) => e.preventDefault());
  }

  addInputListener() {
    this.input.addEventListener('keydown', async (e) => {
      if (e.code === 'Enter' && this.input.value !== '') {
        this.type = this.input.value.startsWith('http') || this.input.value.startsWith('https') ? 'link' : 'message';
        const {
          text,
          type,
          timestamp,
        } = await this.api.request('POST', {
          type: this.type,
          text: this.input.value,
        });
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

  cameraListener() {
    this.camera.addEventListener('click', async () => {
      if (!this.recorder || this.recorder.state === 'inactive') {
        this.videoStream();
      } else {
        this.recorder.stop();
        this.stream.getTracks().forEach((track) => track.stop());
      }
    });
  }

  microphoneListener() {
    this.microphone.addEventListener('click', async () => {
      if (!this.recorder || this.recorder.state === 'inactive') {
        this.audioStream();
      } else {
        this.recorder.stop();
        this.stream.getTracks().forEach((track) => track.stop());
      }
    });
  }

  async videoStream() {
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    this.recorder = new MediaRecorder(this.stream);
    this.chunks = [];

    this.recorder.addEventListener('start', () => {
      this.camera.classList.toggle('active');
      console.log('recording started');
    });

    this.recorder.addEventListener('dataavailable', (event) => {
      this.chunks.push(event.data);
    });

    this.recorder.addEventListener('stop', async () => {
      this.camera.classList.toggle('active');
      console.log('recording stopped');

      const { link, type, timestamp } = await this.api.sendMedia(this.chunks[0]);
      this.gui.createMessage(link, type, timestamp);
      await this.changeQuantity();
    });

    this.recorder.start();
  }

  async audioStream() {
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    this.recorder = new MediaRecorder(this.stream);
    this.chunks = [];

    this.recorder.addEventListener('start', () => {
      this.microphone.classList.toggle('active');
      console.log('recording started');
    });

    this.recorder.addEventListener('dataavailable', (event) => {
      this.chunks.push(event.data);
    });

    this.recorder.addEventListener('stop', async () => {
      this.microphone.classList.toggle('active');
      console.log('recording stopped');

      const { link, type, timestamp } = await this.api.sendMedia(this.chunks[0]);
      this.gui.createMessage(link, type, timestamp);
      await this.changeQuantity();
    });

    this.recorder.start();
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
      const [file] = this.data.files;
      const { link, type, timestamp } = await this.api.sendMedia(file);
      this.gui.createMessage(link, type, timestamp);
      await this.changeQuantity();
    });
  }

  emojiListener() {
    this.body.addEventListener('mouseover', (event) => {
      if (event.target.id === 'smile' && this.body.querySelector('.emoji') === null) {
        this.gui.createEmojiBox();
        this.emoji = document.querySelector('.emoji');
        this.smileCoords = this.smileIcon.getBoundingClientRect();
        this.emoji.style.top = `${this.smileCoords.y - 130}px`;
        this.emoji.style.left = `${this.smileCoords.x - 60}px`;
        this.smileIcon.classList.add('active');
        this.emoji.addEventListener('click', (e) => {
          this.input.value += e.target.textContent;
        });
      }
    });

    this.body.addEventListener('mouseover', (event) => {
      if (this.emoji) {
        if ((event.target.closest('.icon') || event.target.closest('.emoji')) === null) {
          this.emoji.remove();
          this.smileIcon.classList.remove('active');
        }
      }
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

  watchGeolocation() {
    if (navigator.geolocation) {
      this.options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      const success = (pos) => {
        const { coords } = pos;
        if (this.body.querySelector('.section__coords')) {
          this.body.querySelector('.section__coords').remove();
        }
        this.gui.createSectionCoords(coords.latitude, coords.longitude, coords.accuracy);
      };

      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };

      this.geoId = navigator.geolocation.watchPosition(success, error, this.options);
    }
  }

  lazyLoad() {
    if (document.querySelector('.files-window__item') === null) return;
    this.fileItems = document.querySelectorAll('.files-window__item');
    let timer = 1000;
    this.fileItems.forEach((item) => {
      const elem = item.firstChild;
      timer += 250;
      setTimeout(() => {
        elem.src = elem.dataset.src;
      }, timer);
    });
  }
}
