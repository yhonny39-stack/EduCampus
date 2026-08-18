<template>
    <nav class="educampus-navbar">

        <!-- LOGO / MARCA -->
        <div class="navbar-brand-area">

            <button
                class="btn-menu-mobile"
                @click="menuAbierto = !menuAbierto"
            >
                <i class="bi bi-list"></i>
            </button>

            <router-link
                to="/dashboard"
                class="educampus-brand"
            >
                <div class="brand-icon">
                    <i class="bi bi-mortarboard-fill"></i>
                </div>

                <div class="brand-text">
                    <span class="brand-name">EduCampus</span>
                    <small>Gestión Académica</small>
                </div>
            </router-link>

        </div>


        <!-- MENÚ -->
        <div
            class="navbar-menu"
            :class="{ 'menu-visible': menuAbierto }"
        >

            <!-- INICIO -->
            <router-link
                to="/dashboard"
                class="nav-item"
                @click="cerrarMenu"
            >
                <i class="bi bi-house-door"></i>
                <span>Inicio</span>
            </router-link>


            <!-- ACADÉMICO -->
            <div class="nav-dropdown">

                <button
                    class="nav-item nav-button"
                    @click="toggleDropdown('academico')"
                >
                    <i class="bi bi-mortarboard"></i>
                    <span>Académico</span>
                    <i class="bi bi-chevron-down arrow"></i>
                </button>

                <div
                    v-if="dropdownActivo === 'academico'"
                    class="dropdown-menu-custom"
                >

                    <router-link
                        to="/cursos"
                        @click="cerrarMenu"
                    >
                        <i class="bi bi-collection"></i>
                        Mis Cursos
                    </router-link>

                    <router-link
                        to="/horarios"
                        @click="cerrarMenu"
                    >
                        <i class="bi bi-calendar3"></i>
                        Mi Horario
                    </router-link>

                    <router-link
                        to="/tareas"
                        @click="cerrarMenu"
                    >
                        <i class="bi bi-journal-text"></i>
                        Tareas
                    </router-link>

                    <router-link
                        to="/notas"
                        @click="cerrarMenu"
                    >
                        <i class="bi bi-bar-chart"></i>
                        Notas
                    </router-link>

                    <router-link
                        to="/logros"
                        @click="cerrarMenu"
                    >
                        <i class="bi bi-trophy"></i>
                        Logros
                    </router-link>

                </div>

            </div>


            <!-- ESTUDIANTES -->
            <router-link
                to="/estudiantes"
                class="nav-item"
                @click="cerrarMenu"
            >
                <i class="bi bi-people"></i>
                <span>Estudiantes</span>
            </router-link>


            <!-- PLANEADOR -->
            <router-link
                to="/planeador"
                class="nav-item"
                @click="cerrarMenu"
            >
                <i class="bi bi-clipboard-check"></i>
                <span>Planeador</span>
            </router-link>


            <!-- COMUNICACIONES -->
            <div class="nav-dropdown">

                <button
                    class="nav-item nav-button"
                    @click="toggleDropdown('comunicaciones')"
                >
                    <i class="bi bi-chat-dots"></i>
                    <span>Comunicaciones</span>
                    <i class="bi bi-chevron-down arrow"></i>
                </button>

                <div
                    v-if="dropdownActivo === 'comunicaciones'"
                    class="dropdown-menu-custom"
                >

                    <router-link
                        to="/mensajes"
                        @click="cerrarMenu"
                    >
                        <i class="bi bi-envelope"></i>
                        Mensajes
                    </router-link>

                    <router-link
                        to="/novedades"
                        @click="cerrarMenu"
                    >
                        <i class="bi bi-megaphone"></i>
                        Novedades
                    </router-link>

                    <router-link
                        to="/circulares"
                        @click="cerrarMenu"
                    >
                        <i class="bi bi-file-earmark-text"></i>
                        Circulares
                    </router-link>

                </div>

            </div>


            <!-- SEGUIMIENTO -->
            <div class="nav-dropdown">

                <button
                    class="nav-item nav-button"
                    @click="toggleDropdown('seguimiento')"
                >
                    <i class="bi bi-clipboard-data"></i>
                    <span>Seguimiento</span>
                    <i class="bi bi-chevron-down arrow"></i>
                </button>

                <div
                    v-if="dropdownActivo === 'seguimiento'"
                    class="dropdown-menu-custom"
                >

                    <router-link
                        to="/inasistencias"
                        @click="cerrarMenu"
                    >
                        <i class="bi bi-calendar-x"></i>
                        Inasistencias
                    </router-link>

                    <router-link
                        to="/observador"
                        @click="cerrarMenu"
                    >
                        <i class="bi bi-person-lines-fill"></i>
                        Observador
                    </router-link>

                    <router-link
                        to="/observaciones-boletin"
                        @click="cerrarMenu"
                    >
                        <i class="bi bi-chat-square-text"></i>
                        Observaciones Boletín
                    </router-link>

                </div>

            </div>


            <!-- PADRES -->
            <router-link
                to="/atencion-padres"
                class="nav-item"
                @click="cerrarMenu"
            >
                <i class="bi bi-person-hearts"></i>
                <span>Atención Padres</span>
            </router-link>


            <!-- REMISIONES -->
            <router-link
                to="/remisiones"
                class="nav-item"
                @click="cerrarMenu"
            >
                <i class="bi bi-arrow-right-square"></i>
                <span>Remisiones</span>
            </router-link>

        </div>


        <!-- USUARIO -->
        <div class="navbar-user">

            <button
                class="user-button"
                @click="usuarioMenu = !usuarioMenu"
            >

                <div class="user-avatar">
                    <i class="bi bi-person-fill"></i>
                </div>

                <div class="user-info">
                    <strong>{{ usuario.nombre }}</strong>
                    <small>{{ usuario.rol }}</small>
                </div>

                <i class="bi bi-chevron-down"></i>

            </button>


            <div
                v-if="usuarioMenu"
                class="user-dropdown"
            >

                <router-link to="/perfil">
                    <i class="bi bi-person"></i>
                    Mi perfil
                </router-link>

                <router-link to="/configuracion">
                    <i class="bi bi-gear"></i>
                    Configuración
                </router-link>

                <hr>

                <button @click="cerrarSesion">
                    <i class="bi bi-box-arrow-right"></i>
                    Cerrar sesión
                </button>

            </div>

        </div>

    </nav>
</template>


<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuAbierto = ref(false)
const dropdownActivo = ref(null)
const usuarioMenu = ref(false)

const usuario = ref({
    nombre: 'Administrador',
    rol: 'Administrador'
})


function toggleDropdown(nombre) {

    if (dropdownActivo.value === nombre) {
        dropdownActivo.value = null
    } else {
        dropdownActivo.value = nombre
    }

}


function cerrarMenu() {

    menuAbierto.value = false
    dropdownActivo.value = null

}


function cerrarSesion() {

    usuarioMenu.value = false

    // Aquí posteriormente conectaremos
    // el logout de Laravel.

    router.push('/login')

}

</script>


<style scoped>

.educampus-navbar {

    height: 72px;

    width: 100%;

    background: #ffffff;

    border-bottom: 1px solid #dfe5ec;

    display: flex;

    align-items: center;

    padding: 0 24px;

    position: sticky;

    top: 0;

    z-index: 1000;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

}


/* MARCA */

.navbar-brand-area {

    display: flex;

    align-items: center;

    flex-shrink: 0;

}

.educampus-brand {

    display: flex;

    align-items: center;

    text-decoration: none;

    color: #063b82;

}

.brand-icon {

    width: 42px;

    height: 42px;

    border-radius: 10px;

    background: #063b82;

    color: white;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 21px;

    margin-right: 10px;

}

.brand-text {

    display: flex;

    flex-direction: column;

    line-height: 1.1;

}

.brand-name {

    font-size: 21px;

    font-weight: 800;

}

.brand-text small {

    font-size: 10px;

    color: #667085;

    margin-top: 3px;

}


/* MENÚ */

.navbar-menu {

    display: flex;

    align-items: center;

    gap: 4px;

    margin-left: 30px;

    flex: 1;

}

.nav-item {

    border: none;

    background: transparent;

    color: #344054;

    text-decoration: none;

    padding: 10px 12px;

    border-radius: 8px;

    display: flex;

    align-items: center;

    gap: 7px;

    font-size: 14px;

    font-weight: 600;

    white-space: nowrap;

    transition: all .2s ease;

}

.nav-item i {

    font-size: 16px;

}

.nav-item:hover {

    background: #eef4fb;

    color: #063b82;

}

.router-link-active {

    color: #063b82;

    background: #eef4fb;

}


/* DROPDOWN */

.nav-dropdown {

    position: relative;

}

.nav-button {

    cursor: pointer;

}

.arrow {

    font-size: 11px !important;

    margin-left: 2px;

}

.dropdown-menu-custom {

    position: absolute;

    top: calc(100% + 8px);

    left: 0;

    min-width: 220px;

    background: white;

    border: 1px solid #e1e7ef;

    border-radius: 10px;

    padding: 7px;

    box-shadow: 0 10px 30px rgba(0,0,0,.12);

}

.dropdown-menu-custom a {

    display: flex;

    align-items: center;

    gap: 10px;

    text-decoration: none;

    color: #344054;

    padding: 10px 12px;

    border-radius: 7px;

    font-size: 14px;

}

.dropdown-menu-custom a:hover {

    background: #eef4fb;

    color: #063b82;

}


/* USUARIO */

.navbar-user {

    position: relative;

    flex-shrink: 0;

}

.user-button {

    border: none;

    background: transparent;

    display: flex;

    align-items: center;

    gap: 9px;

    cursor: pointer;

    padding: 6px 8px;

    border-radius: 10px;

}

.user-button:hover {

    background: #f2f5f9;

}

.user-avatar {

    width: 38px;

    height: 38px;

    border-radius: 50%;

    background: #063b82;

    color: white;

    display: flex;

    align-items: center;

    justify-content: center;

}

.user-info {

    display: flex;

    flex-direction: column;

    align-items: flex-start;

}

.user-info strong {

    font-size: 13px;

    color: #24344d;

}

.user-info small {

    font-size: 11px;

    color: #667085;

}

.user-button > i {

    font-size: 11px;

    color: #667085;

}


/* MENÚ USUARIO */

.user-dropdown {

    position: absolute;

    right: 0;

    top: calc(100% + 8px);

    width: 210px;

    background: white;

    border: 1px solid #e1e7ef;

    border-radius: 10px;

    padding: 7px;

    box-shadow: 0 10px 30px rgba(0,0,0,.12);

}

.user-dropdown a,

.user-dropdown button {

    width: 100%;

    display: flex;

    align-items: center;

    gap: 10px;

    border: none;

    background: transparent;

    text-decoration: none;

    color: #344054;

    padding: 10px 12px;

    border-radius: 7px;

    font-size: 14px;

    text-align: left;

}

.user-dropdown a:hover,

.user-dropdown button:hover {

    background: #eef4fb;

    color: #063b82;

}

.user-dropdown hr {

    border: 0;

    border-top: 1px solid #e5e7eb;

    margin: 5px 0;

}


/* BOTÓN MÓVIL */

.btn-menu-mobile {

    display: none;

    border: none;

    background: transparent;

    font-size: 25px;

    color: #063b82;

    margin-right: 8px;

}


/* TABLET */

@media (max-width: 1200px) {

    .navbar-menu {

        gap: 0;

        margin-left: 15px;

    }

    .nav-item {

        padding: 9px 8px;

        font-size: 13px;

    }

    .user-info {

        display: none;

    }

}


/* MÓVIL */

@media (max-width: 900px) {

    .educampus-navbar {

        height: 64px;

        padding: 0 15px;

    }

    .btn-menu-mobile {

        display: block;

    }

    .navbar-menu {

        position: absolute;

        top: 64px;

        left: 0;

        width: 100%;

        background: white;

        border-bottom: 1px solid #dfe5ec;

        box-shadow: 0 10px 25px rgba(0,0,0,.1);

        display: none;

        flex-direction: column;

        align-items: stretch;

        padding: 10px;

        margin: 0;

    }

    .navbar-menu.menu-visible {

        display: flex;

    }

    .nav-item {

        width: 100%;

        padding: 13px;

    }

    .nav-dropdown {

        width: 100%;

    }

    .dropdown-menu-custom {

        position: static;

        box-shadow: none;

        border: none;

        background: #f7f9fc;

        margin: 3px 0 5px;

    }

    .brand-name {

        font-size: 18px;

    }

    .brand-text small {

        display: none;

    }

}


/* CELULAR PEQUEÑO */

@media (max-width: 450px) {

    .user-button > i {

        display: none;

    }

    .user-avatar {

        width: 35px;

        height: 35px;

    }

}

</style>
