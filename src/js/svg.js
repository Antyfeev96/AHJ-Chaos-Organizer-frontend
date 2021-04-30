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

  createPaperclip() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'paperclip';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 511.988 511.988');

    this.path.setAttribute('d', `M489.305,185.463c-8.354-8.309-21.861-8.272-30.17,0.081L202.687,443.379c-33.271,33.271-87.308,33.271-120.641-0.045
    c-33.308-33.325-33.308-87.362,0.004-120.674L346.089,57.234c20.772-20.771,54.543-20.771,75.375,0.045
    c20.826,20.826,20.826,54.593-0.005,75.425L202.727,351.434c-0.014,0.014-0.026,0.03-0.04,0.044
    c-8.333,8.287-21.8,8.276-30.116-0.04c-8.33-8.33-8.33-21.831,0-30.161l105.58-105.602c8.33-8.332,8.329-21.84-0.003-30.17
    c-8.332-8.33-21.84-8.329-30.17,0.003l-105.579,105.6c-24.991,24.991-24.991,65.507,0.002,90.499
    c24.992,24.992,65.508,24.992,90.501,0c0.029-0.029,0.052-0.06,0.08-0.089l218.646-218.646c37.494-37.494,37.494-98.276,0-135.77
    c-37.499-37.472-98.277-37.472-135.749,0L51.84,292.53C1.906,342.464,1.906,423.509,51.876,473.504
    c50.003,49.977,131.049,49.977,181.022,0.004l256.489-257.875C497.695,207.279,497.658,193.772,489.305,185.463z`);
    this.svg.append(this.path);
    return this.svg;
  }

  createSmile() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'smile';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 368 368');

    this.path1.setAttribute('d', `M261.336,226.04c-3.296-2.952-8.36-2.664-11.296,0.624C233.352,245.312,209.288,256,184,256
    c-25.28,0-49.352-10.688-66.04-29.336c-2.952-3.288-8-3.576-11.296-0.624c-3.296,2.944-3.568,8-0.624,11.296
    C125.76,259.368,154.176,272,184,272c29.832,0,58.248-12.64,77.96-34.664C264.904,234.04,264.624,228.984,261.336,226.04z`);
    this.path2.setAttribute('d', `M184,0C82.544,0,0,82.544,0,184s82.544,184,184,184s184-82.544,184-184S285.456,0,184,0z M184,352
    c-92.64,0-168-75.36-168-168S91.36,16,184,16s168,75.36,168,168S276.64,352,184,352z`);
    this.path3.setAttribute('d', `M248,128c-22.056,0-40,17.944-40,40c0,4.416,3.584,8,8,8c4.416,0,8-3.584,8-8c0-13.232,10.768-24,24-24s24,10.768,24,24
    c0,4.416,3.584,8,8,8c4.416,0,8-3.584,8-8C288,145.944,270.056,128,248,128z`);
    this.path4.setAttribute('d', `M144,168c0,4.416,3.584,8,8,8s8-3.584,8-8c0-22.056-17.944-40-40-40c-22.056,0-40,17.944-40,40c0,4.416,3.584,8,8,8
    s8-3.584,8-8c0-13.232,10.768-24,24-24S144,154.768,144,168z`);
    this.svg.append(this.path1, this.path2, this.path3, this.path4);
    return this.svg;
  }

  createMicrophone() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.svg.setAttribute('class', 'icon');
    this.svg.id = 'microphone';
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '-90 1 511 511.99899');

    this.path1.setAttribute('d', 'm332.464844 275.082031c0-8.429687-6.835938-15.265625-15.269532-15.265625-8.433593 0-15.269531 6.835938-15.269531 15.265625 0 74.6875-60.757812 135.445313-135.445312 135.445313-74.683594 0-135.441407-60.757813-135.441407-135.445313 0-8.429687-6.835937-15.265625-15.269531-15.265625-8.433593 0-15.269531 6.835938-15.269531 15.265625 0 86.378907 66.320312 157.539063 150.710938 165.273438v41.105469h-56.664063c-8.433594 0-15.269531 6.835937-15.269531 15.269531 0 8.433593 6.835937 15.269531 15.269531 15.269531h143.871094c8.429687 0 15.265625-6.835938 15.265625-15.269531 0-8.433594-6.835938-15.269531-15.265625-15.269531h-56.667969v-41.105469c84.394531-7.730469 150.714844-78.894531 150.714844-165.273438zm0 0');
    this.path2.setAttribute('d', 'm166.480469 372.851562c53.910156 0 97.769531-43.859374 97.769531-97.769531v-177.316406c0-53.90625-43.859375-97.765625-97.769531-97.765625-53.90625 0-97.765625 43.859375-97.765625 97.765625v177.316406c0 53.910157 43.859375 97.769531 97.765625 97.769531zm-67.230469-275.085937c0-37.070313 30.160156-67.226563 67.230469-67.226563 37.070312 0 67.230469 30.15625 67.230469 67.226563v177.316406c0 37.070313-30.160157 67.230469-67.230469 67.230469-37.070313 0-67.230469-30.160156-67.230469-67.230469zm0 0');
    this.svg.append(this.path1, this.path2);
    return this.svg;
  }
}
