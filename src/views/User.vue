<template>
  <div class="container">
    <h3 class="p-3 text-center">POC for Vue</h3>
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
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    // make users variable reactive with the ref() function
    const users = ref([
      { id:1, userName: 'Frank', companyName: 'ABC', userId: 'frank.murphy@test.com', status: 'User', role:'client user', admin:'45064494111', lastUpdated:'Date' },
      { id:2, userName: 'Williams', companyName: 'Honda', userId: 'williams@test.com', status: 'User', role:'client admin', admin:'45064494111', lastUpdated:'Date' },
      { id:3, userName: 'Andrew', companyName: 'Acura', userId: 'andrew@test.com', status: 'User', role:'client user', admin:'45064494111', lastUpdated:'Date' },
      { id:4, userName: 'Murray', companyName: 'Williams', userId: 'murray@test.com', status: 'User', role:'client admin', admin:'45064494111', lastUpdated:'Date' },

    ]);

    return {
      users
    };
  }
}
</script>
