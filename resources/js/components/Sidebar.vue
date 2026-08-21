<template>
    <aside class="sidebar" :class="{ 'sidebar-open': menuOpen }">

        <!-- LOGO -->
        <div class="sidebar-header">
                                    <img :src="'/images/logo-escudo.png'" alt="EduCampus - Plataforma educativa" />


            <div class="brand">
                <span class="brand-name">EduCampus</span>
                <small>Gestión Educativa</small>
            </div>

            <button
                class="btn-close-menu d-lg-none"
                @click="menuOpen = false"
            >
                <i class="bi bi-x-lg"></i>
            </button>
        </div>

        <!-- PERFIL -->
        <div class="user-profile">
            <div class="user-avatar">
                <i class="bi bi-person-fill"></i>
            </div>

            <div class="user-info">
                <strong>Administrador</strong>
                <small>Administrador</small>
            </div>

            <i class="bi bi-chevron-down"></i>
        </div>

        <!-- MENÚ -->
        <nav class="menu">

            <p class="menu-title">PRINCIPAL</p>

            <router-link
                to="/dashboard"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-grid-1x2-fill"></i>
                <span>Inicio</span>
            </router-link>

            <router-link
                to="/cursos"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-book-fill"></i>
                <span>Mis Cursos</span>
            </router-link>

            <router-link
                to="/horario"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-calendar3"></i>
                <span>Mi Horario</span>
            </router-link>

            <router-link
                to="/tareas"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-journal-check"></i>
                <span>Tareas</span>
            </router-link>


            <p class="menu-title">ACADÉMICO</p>

            <router-link
                to="/estudiantes"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-people-fill"></i>
                <span>Estudiantes</span>
            </router-link>

            <router-link
                to="/notas"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-bar-chart-fill"></i>
                <span>Notas</span>
            </router-link>

            <router-link
                to="/logros"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-award-fill"></i>
                <span>Logros</span>
            </router-link>

            <router-link
                to="/inasistencias"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-calendar-x-fill"></i>
                <span>Inasistencias</span>
            </router-link>


            <p class="menu-title">SEGUIMIENTO</p>

            <router-link
                to="/observador"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-eye-fill"></i>
                <span>Observador</span>
            </router-link>

            <router-link
                to="/observaciones"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-chat-left-text-fill"></i>
                <span>Observaciones</span>
            </router-link>

            <router-link
                to="/atencion-padres"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-person-hearts"></i>
                <span>Atención a Padres</span>
            </router-link>

            <router-link
                to="/remisiones"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-arrow-right-circle-fill"></i>
                <span>Remisiones</span>
            </router-link>


            <p class="menu-title">COMUNICACIONES</p>

            <router-link
                to="/mensajes"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-envelope-fill"></i>
                <span>Mensajes</span>

                <span class="notification">3</span>
            </router-link>

            <router-link
                to="/novedades"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-megaphone-fill"></i>
                <span>Novedades</span>
            </router-link>

            <router-link
                to="/circulares"
                class="menu-item"
                @click="closeMobile"
            >
                <i class="bi bi-file-earmark-text-fill"></i>
                <span>Circulares</span>
            </router-link>

        </nav>

        <!-- PARTE INFERIOR -->
        <div class="sidebar-footer">

            <router-link
                to="/configuracion"
                class="menu-item"
            >
                <i class="bi bi-gear-fill"></i>
                <span>Configuración</span>
            </router-link>

            <button
                class="menu-item logout"
                @click="cerrarSesion"
            >
                <i class="bi bi-box-arrow-right"></i>
                <span>Cerrar sesión</span>
            </button>

        </div>

    </aside>

    <!-- OVERLAY MOBILE -->
    <div
        v-if="menuOpen"
        class="sidebar-overlay d-lg-none"
        @click="menuOpen = false"
    ></div>
</template>


<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuOpen = ref(false)

const closeMobile = () => {
    menuOpen.value = false
}

const cerrarSesion = () => {

    // Aquí posteriormente conectamos
    // la función de logout de Laravel

    router.push('/login')
}

</script>


<style scoped>

.sidebar {
    position: fixed;
    top: 0;
    left: 0;

    width: 270px;
    height: 100vh;

    background: #ffffff;

    border-right: 1px solid #e5e7eb;

    display: flex;
    flex-direction: column;

    z-index: 1050;

    overflow-y: auto;
}


/* HEADER */

.sidebar-header {
    height: 75px;

    display: flex;
    align-items: center;

    padding: 12px 18px;

    border-bottom: 1px solid #e5e7eb;
}

.logo {
    width: 45px;
    height: 45px;

    object-fit: contain;

    margin-right: 10px;
}

.brand {
    display: flex;
    flex-direction: column;
}

.brand-name {
    font-size: 20px;
    font-weight: 700;

    color: #063b82;
}

.brand small {
    color: #6b7280;
    font-size: 11px;
}


/* PERFIL */

.user-profile {
    margin: 15px;

    padding: 12px;

    border-radius: 10px;

    background: #f2f5f9;

    display: flex;
    align-items: center;

    gap: 10px;
}

.user-avatar {
    width: 40px;
    height: 40px;

    border-radius: 50%;

    background: #063b82;

    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
}

.user-info {
    flex: 1;

    display: flex;
    flex-direction: column;
}

.user-info strong {
    font-size: 13px;
    color: #24344d;
}

.user-info small {
    font-size: 11px;
    color: #6b7280;
}


/* MENU */

.menu {
    padding: 0 12px;
}

.menu-title {
    font-size: 10px;

    font-weight: 700;

    color: #9ca3af;

    margin: 20px 10px 8px;

    letter-spacing: .6px;
}

.menu-item {
    width: 100%;

    min-height: 44px;

    padding: 10px 12px;

    margin-bottom: 3px;

    border-radius: 8px;

    display: flex;
    align-items: center;

    gap: 12px;

    color: #4b5563;

    text-decoration: none;

    font-size: 14px;

    transition: .2s;

    border: none;

    background: transparent;

    text-align: left;
}

.menu-item i {
    width: 20px;

    font-size: 17px;

    text-align: center;
}

.menu-item:hover {
    background: #f2f5f9;

    color: #063b82;
}


/* ACTIVO */

.menu-item.router-link-active {
    background: #063b82;

    color: #ffffff;

    font-weight: 600;
}

.menu-item.router-link-active:hover {
    background: #063b82;

    color: white;
}


/* NOTIFICACIONES */

.notification {
    margin-left: auto;

    background: #d71920;

    color: white;

    font-size: 10px;

    min-width: 20px;
    height: 20px;

    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
}


/* FOOTER */

.sidebar-footer {
    margin-top: auto;

    padding: 12px;

    border-top: 1px solid #e5e7eb;
}

.logout {
    color: #d71920;
}

.logout:hover {
    background: #fff1f2;

    color: #a90008;
}


/* MOBILE */

.btn-close-menu {
    margin-left: auto;

    border: none;

    background: transparent;

    font-size: 18px;
}

.sidebar-overlay {
    position: fixed;

    inset: 0;

    background: rgba(0,0,0,.4);

    z-index: 1040;
}


/* SCROLL */

.sidebar::-webkit-scrollbar {
    width: 5px;
}

.sidebar::-webkit-scrollbar-thumb {
    background: #ccd5e1;

    border-radius: 10px;
}


@media (max-width: 991px) {

    .sidebar {
        transform: translateX(-100%);

        transition: transform .3s ease;
    }

    .sidebar.sidebar-open {
        transform: translateX(0);
    }

}

</style>
