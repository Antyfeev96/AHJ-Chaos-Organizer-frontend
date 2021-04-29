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

    this.path1.setAttribute('d', `M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035
    c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201
    C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418
    c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418
    C447.361,287.923,358.746,385.406,255.997,385.406z`);

    this.path2.setAttribute('d', `M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275
    s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516
    s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z`);
    this.svg.append(this.path1, this.path2);
    return this.svg;
  }

  createSettings() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'settings';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 -53 384 384');

    this.path1.setAttribute('d', 'm368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0');
    this.path2.setAttribute('d', 'm368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0');
    this.path3.setAttribute('d', 'm368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0');

    this.svg.append(this.path1, this.path2, this.path3);
    return this.svg;
  }

  createCheck() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'check';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 512 512');

    this.path.setAttribute('d', `m473.074 120.729-203.295 203.296-21.212-21.212 153.765-153.764-38.926-38.926-153.765
     153.765-61.047-61.047-38.926 38.926 61.047 61.047-21.211 21.211-110.578-110.577-38.926 
     38.926 149.503 149.503 60.138-60.137 60.137 60.137 242.222-242.221z`);
    this.svg.append(this.path);
    return this.svg;
  }
}
