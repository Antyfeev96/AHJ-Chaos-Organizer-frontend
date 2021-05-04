/* eslint-disable consistent-return */
export default class API {
  async request(method, message) {
    switch (method) {
      case 'GET':
        this.response = await fetch('http://localhost:7070/')
          .then(async (value) => {
            this.data = await value.json();
          })
          .catch((error) => {
            console.log(error);
          });
        break;
      case 'POST':
        try {
          this.formData = new FormData();
          this.formData.set('message', message);

          this.response = await fetch(
            `http://localhost:7070/?message=${this.formData.get('message')}`,
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
    return this.data;
  }

  async postRequest(method, message) {
    if (method !== 'POST') return;

    try {
      this.formData = new FormData();
      this.formData.set('type', 'check');

      this.response = await fetch(
        `http://localhost:7070/?type=${this.formData.get('type')}&message=${message}`,
        {
          method,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: message,
        },
      );

      this.result = await this.response.json();
      return this.result;
    } catch (error) {
      console.log(error);
    }
  }
}
