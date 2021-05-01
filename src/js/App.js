import AppController from './AppController';
import GUI from './GUI';
import SVG from './svg';

const app = new AppController(new GUI(new SVG()));

app.init();
