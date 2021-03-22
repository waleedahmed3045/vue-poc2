import { ref, reactive } from "vue";
import axios from "axios";

class State {
  userURL = ref("");
  users = reactive([]);
  numberOfUsers = ref(5);

  async getUserUrl() {
    //
    const results = await axios.get(`http://localhost:4000/users`);
    return results.data
  }

  async getUser() {
    this.userURL.value = await this.getUserUrl();
  };

  async getUsers() {
    this.users.splice(0, this.users.length);
    for (let x = 0; x < this.numberOfUsers.value; ++x) {
      const result = await this.getUser();
      this.users.push({ url: result });
    }
  }

}

export default new State();