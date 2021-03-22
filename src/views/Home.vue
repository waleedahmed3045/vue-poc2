<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">List of users</div>
          <div class="panel-body">
            <table class="table table-striped table-bordered ">
              <thead class="thead-dark">
              <tr>
                <th>User Name</th>
                <th>Company Name</th>
                <th>User ID</th>
                <th>Status</th>
                <th>Role</th>
                <th>Admin</th>
                <th>Last Updated</th>

              </tr>
              </thead>
              <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.userName }}</td>
                <td>{{ user.companyName }}</td>
                <td>{{ user.userId }}</td>
                <td>{{ user.status }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.admin }}</td>
                <td>{{ user.lastUpdated }}</td>

              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: 'Tivoli Users Screen',
  props: {
    msg: String
  },

  data: function () {
    return {
      users: []
    }
  },

  methods: {

    getUsers() {

      axios.get(`http://localhost:4000/users`).then((response) => this.users = response.data)
          .catch((error) => console.log(error.message))

    }

  },

  created() {
    this.getUsers();
  },
}
</script>
