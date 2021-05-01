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
  }

  initListeners() {
    this.addExitListener();
    this.addViewIcon();
  }

  addExitListener() {
    this.exitButton.addEventListener('click', () => {
      this.exitButton.closest('.section').style.display = 'none';
      this.main.style.width = `${100}%`;
      this.viewIcon.classList.toggle('focus');
    });
  }

  addViewIcon() {
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
    });
  }
}
