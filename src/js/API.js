/* eslint-disable consistent-return */
export default class API {
  constructor() {
    this.url = 'http://localhost:7070';
  }

  async request(method, obj) {
    const { text, type } = obj;
    switch (method) {
      case 'GET':
        try {
          this.formData = new FormData();
          this.formData.set('text', text);
          this.formData.set('type', type);

          this.response = await fetch(
            `${this.url}/?text=${this.formData.get('text')}&type=${this.formData.get('type')}`,
            {
              method,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              mode: 'cors',
            },
          );
          this.result = await this.response.json();
          return this.result;
        } catch (error) {
          console.log(error);
        }
        break;
      case 'POST':
        try {
          this.formData = new FormData();
          this.formData.set('text', text);
          this.formData.set('type', type);

          this.response = await fetch(
            `${this.url}/?text=${this.formData.get('text')}&type=${this.formData.get('type')}`,
            {
              method,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              mode: 'cors',
            },
          );
          this.result = await this.response.json();
          return this.result;
        } catch (error) {
          console.log(error);
        }
        break;
      default:
        break;
    }
  }

  async sendMedia(file) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      this.response = await fetch(
        this.url,
        {
          method: 'POST',
          body: formData,
          mode: 'cors',
        },
      );
      this.result = await this.response.json();
      return this.result;
    } catch (error) {
      console.log(error);
    }
  }

  async giveLength(array) {
    try {
      this.formData = new FormData();
      this.formData.set('array', array);

      this.response = await fetch(
        `${this.url}/?array=${this.formData.get('array')}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          mode: 'cors',
        },
      );
      this.result = await this.response.json();
      return this.result;
    } catch (error) {
      console.log(error);
    }
  }

  async takeSideMedia(type) {
    try {
      this.formData = new FormData();
      this.formData.set('media', type);

      this.response = await fetch(
        `${this.url}/?media=${this.formData.get('media')}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          mode: 'cors',
        },
      );
      this.result = await this.response.json();
      return this.result;
    } catch (error) {
      console.log(error);
    }
  }

  async initLoading() {
    try {
      const formData = new FormData();
      formData.append('init', 'init');
      this.response = await fetch(
        `${this.url}/?init=${this.formData.get('init')}`,
        {
          method: 'POST',
          mode: 'cors',
        },
      );
      this.result = await this.response.json();
      return this.result;
    } catch (error) {
      console.log(error);
    }
  }
}
