<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const nameUser = ref('');
const email = ref('');
const router = useRouter();



const handleSubmit = async () => {
    try {
        const userData = {
            name: nameUser.value,
            email: email.value
        };

        let response = await axios.post('api/users', userData);
        console.log(response.data);
        router.back();
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <div class="container">
        <div class="card mt-4">
            <div class="card-header">
                <h3 class="card-title">
                    <span class="card-title-text">User Profile</span>
                    <router-link to="/" class="btn btn-sm float-end btn-success">Back</router-link>
                </h3>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="name_user" class="form-label">Name</label>
                    <input type="text" v-model="nameUser" class="form-control" id="name_user" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">email</label>
                    <input type="email" v-model="email" class="form-control" id="exampleInputPassword1">
                </div>
                <button @click="handleSubmit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
</template>