export default class SVG {
  createLoupe() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.g1 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.g2 = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'loupe';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 512.005 512.005');

    this.path.setAttribute('d', `M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
    S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
    c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
     M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z`);
    this.g2.append(this.path);
    this.g1.append(this.g2);
    this.svg.append(this.g1);
    return this.svg;
  }

  createView() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'view';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 511.999 511.999');
  }
}
