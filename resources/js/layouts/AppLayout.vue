<template>
    <div class="app-layout">

        <!-- MENÚ LATERAL -->
        <Sidebar />

        <!-- CONTENIDO PRINCIPAL -->
        <main class="main-content">

            <!-- BARRA SUPERIOR -->
            <header class="topbar">

                <div>
                    <button class="mobile-menu" @click="toggleSidebar">
                        <i class="bi bi-list"></i>
                    </button>

                    <span class="page-title">
                        {{ pageTitle }}
                    </span>
                </div>

                <div class="topbar-right">

                    <button class="topbar-button">
                        <i class="bi bi-bell"></i>
                        <span class="notification-dot"></span>
                    </button>

                    <div class="topbar-user">
                        <div class="topbar-avatar">
                            A
                        </div>

                        <div class="topbar-user-info">
                            <strong>Administrador</strong>
                            <small>Administrador</small>
                        </div>
                    </div>

                </div>

            </header>


            <!-- CONTENIDO DE CADA PÁGINA -->
            <section class="page-content">

                <router-view />

            </section>

        </main>

    </div>
</template>


<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Sidebar from '../components/Sidebar.vue'

const route = useRoute()

const pageTitle = computed(() => {

    return route.meta.title || 'EduCampus'

})

const toggleSidebar = () => {

    // Posteriormente podemos controlar
    // el Sidebar desde aquí para móviles.

}

</script>


<style scoped>

.app-layout {
    min-height: 100vh;

    background: #f2f5f9;
}


/* CONTENIDO */

.main-content {

    margin-left: 270px;

    min-height: 100vh;

}


/* BARRA SUPERIOR */

.topbar {

    height: 75px;

    background: #ffffff;

    border-bottom: 1px solid #e5e7eb;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 30px;

    position: sticky;

    top: 0;

    z-index: 900;

}


.page-title {

    font-size: 20px;

    font-weight: 700;

    color: #24344d;

}


/* BOTÓN MOBILE */

.mobile-menu {

    display: none;

    border: none;

    background: transparent;

    font-size: 25px;

    color: #063b82;

    margin-right: 10px;

}


/* DERECHA */

.topbar-right {

    display: flex;

    align-items: center;

    gap: 20px;

}


.topbar-button {

    width: 40px;

    height: 40px;

    border: none;

    background: #f2f5f9;

    border-radius: 50%;

    color: #4b5563;

    font-size: 18px;

    position: relative;

}


.notification-dot {

    position: absolute;

    top: 7px;

    right: 7px;

    width: 7px;

    height: 7px;

    background: #d71920;

    border-radius: 50%;

}


/* USUARIO */

.topbar-user {

    display: flex;

    align-items: center;

    gap: 10px;

}


.topbar-avatar {

    width: 40px;

    height: 40px;

    border-radius: 50%;

    background: #063b82;

    color: #ffffff;

    display: flex;

    align-items: center;

    justify-content: center;

    font-weight: 700;

}


.topbar-user-info {

    display: flex;

    flex-direction: column;

}


.topbar-user-info strong {

    font-size: 13px;

    color: #24344d;

}


.topbar-user-info small {

    font-size: 11px;

    color: #6b7280;

}


/* CONTENIDO */

.page-content {

    padding: 30px;

}


/* TABLET */

@media (max-width: 991px) {

    .main-content {

        margin-left: 0;

    }

    .mobile-menu {

        display: inline-block;

    }

}


/* CELULAR */

@media (max-width: 767px) {

    .topbar {

        padding: 0 15px;

    }

    .topbar-user-info {

        display: none;

    }

    .page-content {

        padding: 20px 15px;

    }

}

</style>
