<template>
    <!-- Card -->

        <form>
          <p class="h4 text-center py-4">Step 1 - User Information</p>
          <div class="grey-text">
            <p class="h4 text-center py-4">User</p>
            <label class="form-label" for="firstName">First Name</label>
            <input  id="firstName" error="wrong" group icon="user" success="right" type="text" validate/>

            <label class="form-label" for="lastName">Last Name</label>
            <input  id="lastName" error="wrong" group icon="user" success="right" type="text" validate/>


            <label class="form-label" for="language">Language</label>

            <input id="language" error="wrong" group icon="user" success="right" type="text" validate/>

            <label class="form-label" for="userType"> User Type</label>

            <input id="userType" error="wrong" group icon="user" success="right" type="text" validate/>


            <p class="h4 text-center py-4">Contact Information</p>
            <label class="form-label" for="email"> Email</label>

            <input id="email" error="wrong" group success="right" type="email" validate/>
            <label class="form-label" for="phone"> Phone Number</label>

            <input id="phone"  error="wrong" group success="right" type="phone" validate/>


            <p class="h4 text-center py-4">Address</p>
            <label class="form-label" for="address"> Address</label>

            <input id="address"  error="wrong" group success="right" type="number" validate/>


          </div>
          <div class="text-center py-4 mt-3">
            <button color="cyan" type="submit">Submit</button>
          </div>
        </form>
    <!-- Card -->
  </template>
<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    // make users variable reactive with the ref() function
    const users = ref([

    ]);

    return {
      users
    };
  }
}
</script>