<template>
    <div class="login-container">

        <div class="login-card">

            <div class="text-center mb-4">

                <div class="logo">
                    <i class="bi bi-mortarboard-fill"></i>
                </div>

                <h2 class="fw-bold mt-3">
                    EduCampus
                </h2>

                <p class="text-muted">
                    Sistema de Gestión Escolar
                </p>

            </div>

            <form @submit.prevent="iniciarSesion">

                <div class="mb-3">

                    <label class="form-label">
                        Correo electrónico
                    </label>

                    <div class="input-group">

                        <span class="input-group-text">
                            <i class="bi bi-envelope"></i>
                        </span>

                        <input
                            type="email"
                            class="form-control"
                            placeholder="correo@ejemplo.com"
                            v-model="form.email"
                            required
                        >

                    </div>

                </div>

                <div class="mb-3">

                    <label class="form-label">
                        Contraseña
                    </label>

                    <div class="input-group">

                        <span class="input-group-text">
                            <i class="bi bi-lock"></i>
                        </span>

                        <input
                            type="password"
                            class="form-control"
                            placeholder="Contraseña"
                            v-model="form.password"
                            required
                        >

                    </div>

                </div>

                <button
                    type="submit"
                    class="btn btn-primary w-100"
                >
                    <i class="bi bi-box-arrow-in-right me-2"></i>
                    Iniciar sesión
                </button>

            </form>

        </div>

    </div>
</template>

<script setup>

import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = reactive({
    email: '',
    password: ''
});

const iniciarSesion = () => {

    console.log('Datos del formulario:', form);

    router.push('/dashboard');

};

</script>

<style scoped>

.login-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f4f6f9;
    padding: 20px;
}

.login-card {
    width: 100%;
    max-width: 430px;
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.10);
}

.logo {
    width: 70px;
    height: 70px;
    margin: auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0d6efd;
    color: white;
    font-size: 32px;
}

</style>
