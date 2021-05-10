/* eslint-disable consistent-return */
export default class API {
  async request(method, obj) {
    const { text, type } = obj;
    switch (method) {
      case 'GET':
        try {
          this.formData = new FormData();
          this.formData.set('text', text);
          this.formData.set('type', type);

          this.response = await fetch(
            `https://ahj-chaos-organizer-backend.herokuapp.com/?text=${this.formData.get('text')}&type=${this.formData.get('type')}`,
            {
              method,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
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
            `https://ahj-chaos-organizer-backend.herokuapp.com/?text=${this.formData.get('text')}&type=${this.formData.get('type')}`,
            {
              method,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
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

  async sendMedia(obj) {
    try {
      const { name, text, type } = obj;
      this.formData = new FormData();
      this.formData.set('name', name);
      this.formData.set('text', text);
      this.formData.set('type', type);

      this.response = await fetch(
        `https://ahj-chaos-organizer-backend.herokuapp.com/?name=${this.formData.get('name')}&text=${this.formData.get('text')}&type=${this.formData.get('type')}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      this.result = await this.response.json();
      console.log(this.result);
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
        `https://ahj-chaos-organizer-backend.herokuapp.com/?array=${this.formData.get('array')}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      this.result = await this.response.json();
      return this.result;
    } catch (error) {
      console.log(error);
    }
  }
}
