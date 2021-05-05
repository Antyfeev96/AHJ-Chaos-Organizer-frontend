/* eslint-disable consistent-return */
export default class API {
  async request(method, message) {
    switch (method) {
      case 'GET':
        try {
          this.formData = new FormData();
          this.formData.set('message', message);

          this.response = await fetch(
            `https://ahj-chaos-organizer-backend.herokuapp.com/?message=${this.formData.get('message')}`,
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
          this.formData.set('message', message);

          this.response = await fetch(
            `https://ahj-chaos-organizer-backend.herokuapp.com/?message=${this.formData.get('message')}`,
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
}
