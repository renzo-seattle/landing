import request from "../utils/request";
import poll from "../utils/poll";

class CustomerService {
  constructor() {}

  async initiateVerification({ email }) {
    const { results, error } = await request
      .callInternal({
        route: "/api/customer-signup",
        method: "post",
        data: { email },
      })
      .then((results) => {
        return { results };
      })
      .catch((error) => {
        return { error };
      });
  }

  async submitCustomerInformation(customer) {
    const { host, error } = await request
      .callInternal({
        method: "post",
        route: "/api/customer-complete-signup",
        data: customer,
      })
      .then((results) => {
        const host = results.data;
        return { host };
      })
      .catch((error) => {
        return { error };
      });

    if (error) {
      throw error;
    } else {
      await this.navigateToInstance(host);
    }
  }

  async navigateToInstance(host) {
    await poll(this.checkHealth, 1000);
    if (typeof document !== "undefined") {
      window.location = `https://${host}/login`;
    }
  }

  async checkHealth() {
    return request.callInternal({
      method: "get",
      route: "/api/health",
    });
  }
}

export { CustomerService };
