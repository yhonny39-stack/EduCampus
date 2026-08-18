<template>

    <div class="app-layout">

        <!-- MENÚ ÚNICO -->
        <EduCampusNavbar />

        <!-- CONTENIDO DE CADA PÁGINA -->
        <main class="app-content">

            <router-view />

        </main>

    </div>

</template>


<script setup>

import EduCampusNavbar from '../components/EduCampusNavbar.vue'

</script>


<style scoped>

.app-layout {

    min-height: 100vh;

    background: #f2f5f9;

}

.app-content {

    width: 100%;

    min-height: calc(100vh - 72px);

}

</style>
