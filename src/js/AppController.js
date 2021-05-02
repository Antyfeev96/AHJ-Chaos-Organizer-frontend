export default class AppController {
  constructor(gui) {
    this.gui = gui;
  }

  init() {
    this.gui.init();
    this.initConstants();
    this.initListeners();
  }

  initConstants() {
    this.body = document.body;
    this.exitButton = this.body.querySelector('.section__exit');
    this.main = this.body.querySelector('.main');
    this.viewIcon = this.body.querySelector('#view');
    this.input = this.body.querySelector('input');
    this.settingsIcon = this.body.querySelector('#settings');
  }

  initListeners() {
    this.addExitListener();
    this.addViewListener();
    this.addInputListener();
    this.addSettingsListener();
    this.addFilesListener();
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

  addInputListener() {
    this.input.addEventListener('keydown', (e) => {
      if (e.code === 'Enter' && this.input.value !== '') {
        this.gui.createMessage(this.input.value);
        this.input.value = '';
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
      file.addEventListener('click', () => {
        this.body.append(this.gui.createFilesWindow());
        document.getElementById('close').addEventListener('click', () => {
          this.body.querySelector('.files-window').remove();
        });
      });
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
}
