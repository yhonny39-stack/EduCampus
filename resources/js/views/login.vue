<template>
    <div class="login-page">
        <div class="login-wrapper">

            <!-- PANEL IZQUIERDO -->
            <section class="brand-panel">
                <div class="brand-overlay"></div>

                <div class="brand-content">
                    <div class="brand-logo">
                        <i class="bi bi-mortarboard-fill"></i>
                    </div>

                    <h1 class="brand-title">
                        Edu<span>Campus</span>
                    </h1>

                    <div class="brand-line"></div>

                    <p class="brand-subtitle">
                        Sistema de Gestión Escolar
                    </p>

                    <div class="welcome">
                        <h2>
                            Bienvenido a <span>EduCampus</span>
                        </h2>

                        <p>
                            La plataforma integral para administrar
                            y mejorar la experiencia educativa.
                        </p>
                    </div>
                    <!-- IMAGEN DE EDUCAMPUС -->
                    <div class="education-image">
                        <img :src="'/images/educampus-login.jpg'" alt="EduCampus - Plataforma educativa" />
                    </div>

                    <div class="features">

                        <div class="feature">
                            <div class="feature-icon blue">
                                <i class="bi bi-people-fill"></i>
                            </div>

                            <div>
                                <h3>Gestión Integral</h3>
                                <p>
                                    Administra estudiantes, docentes
                                    y cursos de forma eficiente.
                                </p>
                            </div>
                        </div>

                        <div class="feature">
                            <div class="feature-icon green">
                                <i class="bi bi-bar-chart-fill"></i>
                            </div>

                            <div>
                                <h3>Información en Tiempo Real</h3>
                                <p>
                                    Accede a reportes y estadísticas
                                    actualizadas.
                                </p>
                            </div>
                        </div>

                        <div class="feature">
                            <div class="feature-icon purple">
                                <i class="bi bi-shield-check-fill"></i>
                            </div>

                            <div>
                                <h3>Seguridad Garantizada</h3>
                                <p>
                                    Protegemos la información
                                    de tu institución.
                                </p>
                            </div>
                        </div>

                        <div class="feature">
                            <div class="feature-icon orange">
                                <i class="bi bi-bell-fill"></i>
                            </div>

                            <div>
                                <h3>Comunicación Fluida</h3>
                                <p>
                                    Mejora la comunicación entre
                                    todos los actores.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <!-- PANEL DERECHO -->
            <section class="form-panel">

                <div class="form-content">

                    <!-- LOGO -->
                    <div class="login-logo">
                        <i class="bi bi-mortarboard-fill"></i>
                    </div>

                    <h1 class="login-title">
                        EduCampus
                    </h1>

                    <p class="login-subtitle">
                        Sistema de Gestión Escolar
                    </p>

                    <div class="separator">
                        <span></span>
                        <p>Inicia sesión para continuar</p>
                        <span></span>
                    </div>

                    <!-- FORMULARIO -->
                    <form @submit.prevent="iniciarSesion">

                        <!-- CORREO -->
                        <div class="form-group">

                            <label for="email">
                                Correo electrónico
                            </label>

                            <div class="input-wrapper">

                                <div class="input-icon">
                                    <i class="bi bi-envelope"></i>
                                </div>

                                <input id="email" v-model="form.email" type="email" class="form-control-custom"
                                    placeholder="correo@ejemplo.com" autocomplete="email" required />

                            </div>
                        </div>

                        <!-- CONTRASEÑA -->
                        <div class="form-group">

                            <label for="password">
                                Contraseña
                            </label>

                            <div class="input-wrapper">

                                <div class="input-icon">
                                    <i class="bi bi-lock"></i>
                                </div>

                                <input id="password" v-model="form.password"
                                    :type="mostrarPassword ? 'text' : 'password'"
                                    class="form-control-custom password-input" placeholder="Contraseña"
                                    autocomplete="current-password" required />

                                <button type="button" class="password-toggle"
                                    @click="mostrarPassword = !mostrarPassword"
                                    :aria-label="mostrarPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'">
                                    <i :class="mostrarPassword
                                        ? 'bi bi-eye-slash'
                                        : 'bi bi-eye'"></i>
                                </button>

                            </div>
                        </div>

                        <!-- OPCIONES -->
                        <div class="form-options">

                            <label class="remember">

                                <input v-model="recordarme" type="checkbox" />

                                <span class="checkmark"></span>

                                <span>
                                    Recordarme
                                </span>

                            </label>

                            <button type="button" class="forgot-password" @click="recuperarPassword">
                                ¿Olvidaste tu contraseña?
                            </button>

                        </div>

                        <!-- BOTÓN -->
                        <button type="submit" class="login-button">
                            <i class="bi bi-box-arrow-in-right"></i>

                            <span>
                                Iniciar sesión
                            </span>
                        </button>

                    </form>

                    <!-- PIE -->
                    <div class="login-footer">

                        <div class="footer-separator">
                            <span></span>

                            <div class="footer-circle">
                                <i class="bi bi-mortarboard-fill"></i>
                            </div>

                            <span></span>
                        </div>

                        <p>
                            © {{ anioActual }}
                            <strong>EduCampus</strong>.
                            Todos los derechos reservados.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    </div>
</template>


<script setup>

import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = reactive({
    email: '',
    password: ''
});

const recordarme = ref(false);

const mostrarPassword = ref(false);

const anioActual = new Date().getFullYear();

const iniciarSesion = () => {

    console.log('Datos del formulario:', {
        email: form.email,
        password: form.password,
        recordarme: recordarme.value
    });

    router.push('/dashboard');
};

const recuperarPassword = () => {

    alert(
        'La recuperación de contraseña estará disponible próximamente.'
    );

};

</script>


<style scoped>
* {
    box-sizing: border-box;
}

.login-page {
    min-height: 100vh;
    width: 100%;
    background:
        radial-gradient(circle at top right,
            rgba(13, 110, 253, 0.12),
            transparent 35%),
        #eef4fc;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 35px;
}

.login-wrapper {
    width: 100%;
    max-width: 1200px;
    min-height: 720px;

    display: grid;
    grid-template-columns: 0.95fr 1.05fr;

    background: white;

    border-radius: 28px;

    overflow: hidden;

    box-shadow:
        0 25px 70px rgba(13, 54, 100, 0.18);
}


/* =========================================
   PANEL IZQUIERDO
========================================= */

.brand-panel {
    position: relative;

    overflow: hidden;

    color: white;

    background:
        linear-gradient(145deg,
            rgba(5, 49, 116, 0.97),
            rgba(13, 110, 253, 0.88));

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 55px 50px;
}

.brand-panel::before {
    content: "";

    position: absolute;

    width: 450px;
    height: 450px;

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.06);

    top: -180px;
    left: -180px;
}

.brand-panel::after {
    content: "";

    position: absolute;

    width: 500px;
    height: 500px;

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.05);

    bottom: -280px;
    right: -220px;
}

.brand-overlay {
    position: absolute;

    inset: 0;

    background:
        linear-gradient(to bottom,
            transparent 55%,
            rgba(0, 35, 90, 0.25));

    pointer-events: none;
}

.brand-content {
    position: relative;
    z-index: 2;

    width: 100%;
    max-width: 430px;
}


/* LOGO */

.brand-logo {
    width: 92px;
    height: 92px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.13);

    border: 1px solid rgba(255, 255, 255, 0.28);

    box-shadow:
        0 15px 35px rgba(0, 0, 0, 0.18);

    margin-bottom: 20px;
}

.brand-logo i {
    font-size: 48px;
}


/* TITULO */

.brand-title {
    margin: 0;

    font-size: 52px;
    line-height: 1;

    font-weight: 800;

    letter-spacing: -2px;
}

.brand-title span {
    color: #63a4ff;
}

.brand-line {
    width: 75px;
    height: 4px;

    border-radius: 10px;

    background: white;

    margin: 18px 0 12px;
}

.brand-subtitle {
    margin: 0;

    font-size: 18px;

    color: rgba(255, 255, 255, 0.84);

    font-weight: 400;
}


/* BIENVENIDA */

.welcome {
    margin-top: 55px;
    margin-bottom: 35px;
}

.welcome h2 {
    margin: 0 0 12px;

    font-size: 27px;

    font-weight: 700;
}

.welcome h2 span {
    color: #64a7ff;
}

.welcome p {
    margin: 0;

    max-width: 390px;

    line-height: 1.6;

    font-size: 16px;

    color: rgba(255, 255, 255, 0.82);
}


/* CARACTERISTICAS */

.features {
    display: flex;
    flex-direction: column;

    gap: 22px;
}

.feature {
    display: flex;

    align-items: flex-start;

    gap: 16px;
}

.feature-icon {
    min-width: 48px;
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 13px;

    color: white;

    font-size: 21px;
}

.feature-icon.blue {
    background: #2387ff;
}

.feature-icon.green {
    background: #18c88a;
}

.feature-icon.purple {
    background: #8757e8;
}

.feature-icon.orange {
    background: #ffad22;
}

.feature h3 {
    margin: 1px 0 4px;

    font-size: 15px;

    font-weight: 700;
}

.feature p {
    margin: 0;

    font-size: 13px;

    line-height: 1.5;

    color: rgba(255, 255, 255, 0.72);
}


/* =========================================
   PANEL DERECHO
========================================= */

.form-panel {
    background: white;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 60px 70px;
}

.form-content {
    width: 100%;
    max-width: 500px;
}


/* LOGO */

.login-logo {
    width: 82px;
    height: 82px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto 18px;

    border-radius: 50%;

    background: #e8f1ff;

    color: #0d6efd;

    box-shadow:
        0 8px 25px rgba(13, 110, 253, 0.12);
}

.login-logo i {
    font-size: 43px;
}


/* TITULO */

.login-title {
    text-align: center;

    margin: 0;

    color: #102a50;

    font-size: 34px;

    font-weight: 800;
}

.login-subtitle {
    text-align: center;

    margin: 6px 0 0;

    color: #7a8ca5;

    font-size: 16px;
}


/* SEPARADOR */

.separator {
    display: flex;

    align-items: center;

    gap: 16px;

    margin: 38px 0 34px;
}

.separator span {
    flex: 1;

    height: 1px;

    background: #dfe6ef;
}

.separator p {
    margin: 0;

    white-space: nowrap;

    color: #64748b;

    font-size: 14px;
}


/* FORMULARIO */

.form-group {
    margin-bottom: 25px;
}

.form-group label {
    display: block;

    margin-bottom: 9px;

    color: #172b4d;

    font-size: 15px;

    font-weight: 700;
}

.input-wrapper {
    position: relative;

    display: flex;
    align-items: center;

    width: 100%;
}

.input-icon {
    position: absolute;

    left: 0;

    width: 56px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #0d6efd;

    background: #eef5ff;

    border-radius: 11px 0 0 11px;

    z-index: 1;
}

.input-icon i {
    font-size: 19px;
}

.form-control-custom {
    width: 100%;
    height: 58px;

    padding: 0 18px 0 70px;

    border: 1px solid #d6deea;

    border-radius: 11px;

    background: white;

    color: #172b4d;

    font-size: 15px;

    outline: none;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

.form-control-custom::placeholder {
    color: #9aa9bc;
}

.form-control-custom:focus {
    border-color: #0d6efd;

    box-shadow:
        0 0 0 4px rgba(13, 110, 253, 0.10);
}

.password-input {
    padding-right: 58px;
}

.password-toggle {
    position: absolute;

    right: 15px;

    border: none;

    background: transparent;

    color: #7b8ca3;

    cursor: pointer;

    font-size: 18px;

    padding: 5px;

    z-index: 2;
}

.password-toggle:hover {
    color: #0d6efd;
}


/* OPCIONES */

.form-options {
    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 15px;

    margin-top: -3px;

    margin-bottom: 30px;
}

.remember {
    display: flex;

    align-items: center;

    gap: 9px;

    cursor: pointer;

    color: #56677e;

    font-size: 14px;
}

.remember input {
    display: none;
}

.checkmark {
    width: 19px;
    height: 19px;

    border: 1.5px solid #c9d3e1;

    border-radius: 5px;

    position: relative;

    transition: 0.2s;
}

.remember input:checked+.checkmark {
    background: #0d6efd;

    border-color: #0d6efd;
}

.remember input:checked+.checkmark::after {
    content: "";

    position: absolute;

    left: 6px;
    top: 2px;

    width: 5px;
    height: 10px;

    border: solid white;

    border-width: 0 2px 2px 0;

    transform: rotate(45deg);
}

.forgot-password {
    border: none;

    background: transparent;

    color: #0d6efd;

    font-size: 14px;

    font-weight: 600;

    cursor: pointer;

    padding: 0;
}

.forgot-password:hover {
    text-decoration: underline;
}


/* BOTON */

.login-button {
    width: 100%;
    height: 58px;

    display: flex;

    align-items: center;
    justify-content: center;

    gap: 12px;

    border: none;

    border-radius: 11px;

    background:
        linear-gradient(135deg,
            #0d6efd,
            #0756d8);

    color: white;

    font-size: 16px;

    font-weight: 700;

    cursor: pointer;

    box-shadow:
        0 10px 22px rgba(13, 110, 253, 0.25);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.login-button:hover {
    transform: translateY(-2px);

    box-shadow:
        0 14px 28px rgba(13, 110, 253, 0.32);
}

.login-button:active {
    transform: translateY(0);
}

.login-button i {
    font-size: 20px;
}


/* FOOTER */

.login-footer {
    margin-top: 45px;

    text-align: center;
}

.footer-separator {
    display: flex;

    align-items: center;

    gap: 12px;

    margin-bottom: 20px;
}

.footer-separator span {
    flex: 1;

    height: 1px;

    background: #e2e8f0;
}

.footer-circle {
    width: 34px;
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #e1e8f1;

    border-radius: 50%;

    color: #0d6efd;

    background: white;
}

.footer-circle i {
    font-size: 15px;
}

.login-footer p {
    margin: 0;

    color: #8998ab;

    font-size: 13px;
}

.login-footer strong {
    color: #0d6efd;
}


/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 1000px) {

    .login-wrapper {
        grid-template-columns: 1fr;

        max-width: 600px;
    }

    .brand-panel {
        display: none;
    }

    .form-panel {
        padding: 55px 45px;
    }
}


@media (max-width: 576px) {

    .login-page {
        padding: 0;

        background: white;
    }

    .login-wrapper {
        min-height: 100vh;

        border-radius: 0;

        box-shadow: none;
    }

    .form-panel {
        padding: 40px 25px;
    }

    .login-title {
        font-size: 30px;
    }

    .separator {
        margin: 30px 0;
    }

    .form-options {
        align-items: flex-start;
        flex-direction: column;
    }

    .forgot-password {
        align-self: flex-end;
    }

    .login-footer {
        margin-top: 35px;
    }
}

.education-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
}

.education-image img {
    width: 100%;
    max-width: 430px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.12));
}
</style>
