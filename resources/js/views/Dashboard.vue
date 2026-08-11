<template>

    <div class="container py-5">

        <div class="d-flex justify-content-between align-items-center mb-4">

            <div>
                <h1 class="fw-bold">Bienvenido a EduCampus</h1>

                <p class="text-muted">
                    Sistema de Gestión Escolar
                </p>
            </div>

            <button class="btn btn-outline-danger" @click="cerrarSesion">
                <i class="bi bi-box-arrow-right me-2"></i>
                Cerrar sesión
            </button>

        </div>


        <div class="row g-4">

            <div class="col-md-4">

                <div class="card border-0 shadow-sm">

                    <div class="card-body">

                        <i class="bi bi-people fs-1 text-primary"></i>

                        <h5 class="mt-3">
                            Estudiantes
                        </h5>

                        <h2>
                            0
                        </h2>

                    </div>

                </div>

            </div>


            <div class="col-md-4">

                <div class="card border-0 shadow-sm">

                    <div class="card-body">

                        <i class="bi bi-person-workspace fs-1 text-success"></i>

                        <h5 class="mt-3">
                            Docentes
                        </h5>

                        <h2>
                            0
                        </h2>

                    </div>

                </div>

            </div>


            <div class="col-md-4">

                <div class="card border-0 shadow-sm">

                    <div class="card-body">

                        <i class="bi bi-book fs-1 text-warning"></i>

                        <h5 class="mt-3">
                            Cursos
                        </h5>

                        <h2>
                            0
                        </h2>

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>


<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

const cerrarSesion = () => {

    router.push('/login');

};

</script>
