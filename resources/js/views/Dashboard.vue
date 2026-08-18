<template>

    <div class="container py-5">

        <div class="card shadow">

            <div class="card-body">

                <h1>
                    Bienvenido a EduCampus
                </h1>

                <p>
                    Has iniciado sesión correctamente.
                </p>

                <p v-if="user">

                    Usuario:
                    <strong>
                        {{ user.name }}
                    </strong>

                </p>

                <button
                    class="btn btn-danger"
                    @click="logout"
                >

                    <i class="bi bi-box-arrow-right me-2"></i>

                    Cerrar sesión

                </button>

            </div>

        </div>

    </div>

</template>


<script setup>

import { ref, onMounted } from 'vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const user = ref(null);


onMounted(async () => {

    try {

        const response = await fetch('/user', {

            headers: {

                'Accept': 'application/json'

            },

            credentials: 'same-origin'

        });


        if (!response.ok) {

            router.push('/login');

            return;

        }


        const data = await response.json();

        user.value = data.user;

    }

    catch (error) {

        router.push('/login');

    }

});


const logout = async () => {

    try {

        await fetch('/logout', {

            method: 'POST',

            headers: {

                'Accept': 'application/json',

                'X-CSRF-TOKEN': document
                    .querySelector('meta[name="csrf-token"]')
                    ?.getAttribute('content')

            },

            credentials: 'same-origin'

        });

        sessionStorage.removeItem('educampus_user');

        router.push('/login');

    }

    catch (error) {

        console.error(error);

    }

};

</script>
