
<script setup>

import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

let users = ref([]);
const router = useRouter();

onMounted(() => {
        getUsers();
});

const getUsers = async () => {
    let response = await axios.get('api/users');
    users.value = response.data.users;
}
const userDelete = async (userID) => {
    await axios.delete(`api/users/${userID}`);
    getUsers()
}

</script>

<template>
    <div class="container">
        <div class="card mt-4">
            <div class="card-header">
                <h4>User Record
                    <router-link to="/create" class="btn btn-success btn-sm float-end">Create New User</router-link>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Created_at</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user,index in users" :key="user_id">
                            <td>{{ ++index }}</td>
                            <td>{{ user.user_name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.Created }}</td>
                            <td>
                                <router-link :to="`/edit/${user.user_id}`" class="btn btn-sm btn-success">Edit</router-link>
                                <button class="btn btn-sm btn-danger m-1" @click="userDelete(user.user_id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>