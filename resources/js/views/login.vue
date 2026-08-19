<template>

    <div class="login-page">
        <div class="background-decoration decoration-one"></div>
        <div class="background-decoration decoration-two"></div>
        <div class="background-decoration decoration-three"></div>
        <div class="login-wrapper">
            <div class="brand-panel">
                <div class="brand-content">
                    <div class="brand-logo">
                        <div class="logo-shield">

                            <img :src="'/images/logo-escudo.png'" alt="EduCampus - Plataforma educativa" />
                        </div>
                    </div>
                    <h1>
                        Edu<span>Campus</span>
                    </h1>
                    <div class="gold-line"></div>
                    <h2>
                        Sistema de Gestión Académica
                    </h2>
                    <p>
                        Una plataforma diseñada para facilitar
                        la gestión académica de nuestra comunidad educativa.
                    </p>
                    <!-- Características -->
                    <div class="brand-features">
                        <div class="feature">
                            <div class="feature-icon">
                                <i class="bi bi-mortarboard-fill"></i>
                            </div>
                            <div>
                                <strong>Gestión académica</strong>
                                <small>Todo en un solo lugar</small>
                            </div>
                        </div>
                        <div class="feature">
                            <div class="feature-icon">
                                <i class="bi bi-people-fill"></i>
                            </div>
                            <div>
                                <strong>Comunidad educativa</strong>
                                <small>Conectados y organizados</small>
                            </div>
                        </div>
                        <div class="feature">
                            <div class="feature-icon">
                                <i class="bi bi-shield-check"></i>
                            </div>
                            <div>
                                <strong>Información segura</strong>
                                <small>Protección de tus datos</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-circle circle-one"></div>
                <div class="panel-circle circle-two"></div>
            </div>
            <div class="login-card">
                <div class="login-header">
                    <div class="mobile-logo">
                        <div class="mobile-logo-icon">
                            EC
                        </div>
                    </div>
                    <span class="welcome">
                        BIENVENIDO
                    </span>
                    <h2>
                        Iniciar sesión
                    </h2>
                    <p>
                        Ingresa tus datos para continuar
                    </p>
                </div>
                <div v-if="error" class="login-alert">
                    <div class="alert-icon">
                        <i class="bi bi-exclamation-triangle-fill"></i>
                    </div>
                    <div class="alert-text">
                        <strong>Acceso no disponible</strong>
                        <span>{{ error }}</span>
                    </div>
                </div>
                <form @submit.prevent="login" class="login-form">
                    <div class="form-group">
                        <label for="email">
                            <i class="bi bi-envelope-fill"></i>
                            Correo electrónico
                        </label>
                        <div class="input-container">
                            <i class="bi bi-person input-icon"></i>
                            <input id="email" type="email" class="form-control" v-model="form.email"
                                placeholder="Ingrese su correo electrónico" autocomplete="email" :disabled="loading"
                                required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">
                            <i class="bi bi-lock-fill"></i>
                            Contraseña
                        </label>


                        <div class="input-container password-container">

                            <i class="bi bi-key-fill input-icon"></i>

                            <input id="password" :type="showPassword ? 'text' : 'password'" class="form-control"
                                v-model="form.password" placeholder="Ingrese su contraseña"
                                autocomplete="current-password" :disabled="loading" required>

                            <button type="button" class="password-button" @click="showPassword = !showPassword"
                                :disabled="loading" tabindex="-1">

                                <i :class="showPassword
                                    ? 'bi bi-eye-slash-fill'
                                    : 'bi bi-eye-fill'
                                    "></i>

                            </button>

                        </div>

                    </div>


                    <!-- ================================================= -->
                    <!-- OPCIONES -->
                    <!-- ================================================= -->

                    <div class="login-options">

                        <label class="remember">

                            <input type="checkbox" v-model="form.remember" :disabled="loading">

                            <span class="custom-check"></span>

                            <span>
                                Recordarme
                            </span>

                        </label>


                        <a href="#" class="forgot-password" @click.prevent>
                            ¿Olvidaste tu contraseña?
                        </a>

                    </div>


                    <!-- ================================================= -->
                    <!-- BOTÓN -->
                    <!-- ================================================= -->

                    <button type="submit" class="btn-login" :disabled="loading">

                        <span v-if="loading" class="spinner-border spinner-border-sm"></span>

                        <i v-else class="bi bi-box-arrow-in-right"></i>

                        <span>
                            {{
                                loading
                                    ? 'Ingresando...'
                                    : 'Iniciar sesión'
                            }}
                        </span>

                    </button>

                </form>


                <!-- ================================================= -->
                <!-- SEGURIDAD -->
                <!-- ================================================= -->

                <div class="security-message">

                    <i class="bi bi-shield-lock-fill"></i>

                    <span>
                        Tu información se encuentra protegida
                    </span>

                </div>


                <!-- ================================================= -->
                <!-- FOOTER -->
                <!-- ================================================= -->

                <div class="login-footer">

                    <span>
                        EduCampus
                    </span>

                    <span class="separator">
                        •
                    </span>

                    <span>
                        Sistema de Gestión Académica
                    </span>

                </div>

            </div>

        </div>


        <!-- ================================================= -->
        <!-- COPYRIGHT -->
        <!-- ================================================= -->

        <div class="copyright">

            © {{ new Date().getFullYear() }}

            <strong>EduCampus</strong>

            · Todos los derechos reservados

        </div>

    </div>

</template>


<style scoped>
/* ========================================================= */
/* VARIABLES */
/* ========================================================= */

.login-page {
    --azul: #063b82;
    --azul-oscuro: #021d43;
    --azul-profundo: #01152f;
    --azul-claro: #0b55a5;

    --rojo: #d71920;
    --rojo-oscuro: #a90008;
    --rojo-claro: #ef3339;

    --dorado: #e5b62f;
    --dorado-claro: #f5d66c;

    --blanco: #ffffff;
    --gris-fondo: #f3f6fa;
    --gris-borde: #d8e0ea;
    --texto: #24344d;
    --texto-suave: #718096;

    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    padding: 35px 25px;

    overflow: hidden;

    background:
        radial-gradient(circle at 10% 10%,
            rgba(229, 182, 47, .10),
            transparent 30%),
        linear-gradient(135deg,
            #eef3f9 0%,
            #f7f9fc 50%,
            #edf2f8 100%);

    font-family:
        "Segoe UI",
        Roboto,
        Arial,
        sans-serif;
}


/* ========================================================= */
/* DECORACIONES */
/* ========================================================= */

.background-decoration {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
}

.decoration-one {
    width: 450px;
    height: 450px;

    top: -250px;
    right: -150px;

    background: rgba(6, 59, 130, .06);
}

.decoration-two {
    width: 300px;
    height: 300px;

    bottom: -170px;
    left: -120px;

    background: rgba(215, 25, 32, .05);
}

.decoration-three {
    width: 180px;
    height: 180px;

    top: 15%;
    left: 5%;

    border: 25px solid rgba(229, 182, 47, .06);
}


/* ========================================================= */
/* WRAPPER */
/* ========================================================= */

.login-wrapper {

    width: 100%;
    max-width: 1080px;

    min-height: 650px;

    display: grid;

    grid-template-columns: 45% 55%;


    border-radius: 24px;

    overflow: hidden;

    position: relative;

    z-index: 2;

}


/* ========================================================= */
/* PANEL IZQUIERDO */
/* ========================================================= */

.brand-panel {

    position: relative;

    overflow: hidden;

    display: flex;
    align-items: center;

    padding: 60px 55px;

    color: white;

    background:
        linear-gradient(145deg,
            var(--azul-oscuro),
            var(--azul),
            #084b98);
}


/* Línea roja superior */

.brand-panel::before {

    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 7px;

    background:
        linear-gradient(90deg,
            var(--rojo),
            var(--dorado),
            var(--rojo));

}


/* Contenido */

.brand-content {

    position: relative;

    z-index: 3;

    width: 100%;
}


/* ========================================================= */
/* LOGO */
/* ========================================================= */

.brand-logo {

    margin-bottom: 25px;
}

.logo-shield {

    width: 82px;
    height: 94px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;



    box-shadow:
        0 10px 30px rgba(0, 0, 0, .2);
}

.logo-shield span {

    font-size: 25px;
    font-weight: 900;

    color: var(--azul-oscuro);

    letter-spacing: -1px;
}


/* ========================================================= */
/* MARCA */
/* ========================================================= */

.brand-panel h1 {

    margin: 0;

    font-size: 48px;

    line-height: 1;

    font-weight: 800;

    letter-spacing: -2px;
}

.brand-panel h1 span {
    color: var(--dorado-claro);
}


.gold-line {

    width: 75px;
    height: 4px;

    margin: 18px 0;

    border-radius: 10px;

    background: var(--dorado);
}


.brand-panel h2 {

    margin: 0 0 18px;

    font-size: 18px;

    font-weight: 600;

    color: #ffffff;
}


.brand-panel p {

    max-width: 370px;

    margin: 0;

    color: rgba(255, 255, 255, .75);

    font-size: 14px;

    line-height: 1.7;
}


/* ========================================================= */
/* CARACTERÍSTICAS */
/* ========================================================= */

.brand-features {

    margin-top: 40px;

    display: flex;
    flex-direction: column;

    gap: 18px;
}


.feature {

    display: flex;

    align-items: center;

    gap: 14px;
}


.feature-icon {

    width: 42px;
    height: 42px;

    flex-shrink: 0;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 10px;

    color: var(--dorado-claro);

    background: rgba(255, 255, 255, .08);

    border: 1px solid rgba(245, 214, 108, .25);
}


.feature strong {

    display: block;

    font-size: 13px;

    color: white;
}


.feature small {

    display: block;

    margin-top: 3px;

    color: rgba(255, 255, 255, .55);

    font-size: 11px;
}


/* ========================================================= */
/* CÍRCULOS DECORATIVOS */
/* ========================================================= */

.panel-circle {

    position: absolute;

    border-radius: 50%;

    pointer-events: none;
}

.circle-one {

    width: 350px;
    height: 350px;

    right: -190px;
    bottom: -190px;

    border: 55px solid rgba(229, 182, 47, .08);
}

.circle-two {

    width: 180px;
    height: 180px;

    right: 40px;
    top: -100px;

    background: rgba(215, 25, 32, .08);
}


/* ========================================================= */
/* LOGIN CARD */
/* ========================================================= */

.login-card {

    display: flex;

    flex-direction: column;

    justify-content: center;

    padding: 55px 70px;

    background: white;
}


/* ========================================================= */
/* HEADER LOGIN */
/* ========================================================= */

.login-header {

    margin-bottom: 35px;
}


.welcome {

    display: inline-block;

    margin-bottom: 9px;

    color: var(--rojo);

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 2px;
}


.login-header h2 {

    margin: 0;

    color: var(--azul-oscuro);

    font-size: 32px;

    font-weight: 800;

    letter-spacing: -.8px;
}


.login-header p {

    margin: 8px 0 0;

    color: var(--texto-suave);

    font-size: 14px;
}


/* ========================================================= */
/* LOGO MÓVIL */
/* ========================================================= */

.mobile-logo {

    display: none;
}


/* ========================================================= */
/* ALERTA */
/* ========================================================= */

.login-alert {

    display: flex;

    align-items: center;

    gap: 13px;

    padding: 13px 15px;

    margin-bottom: 22px;

    border-radius: 10px;

    border-left: 4px solid var(--rojo);

    background: #fff1f2;

    color: #842029;
}


.alert-icon {

    font-size: 18px;

    color: var(--rojo);
}


.alert-text {

    display: flex;

    flex-direction: column;

    gap: 2px;

    font-size: 12px;
}


.alert-text strong {
    font-size: 12px;
}

.alert-text span {
    color: #9b4a4f;
}


/* ========================================================= */
/* FORMULARIO */
/* ========================================================= */

.login-form {

    width: 100%;
}


.form-group {

    margin-bottom: 22px;
}


.form-group label {

    display: flex;

    align-items: center;

    gap: 7px;

    margin-bottom: 9px;

    color: var(--texto);

    font-size: 13px;

    font-weight: 700;
}


.form-group label i {

    color: var(--rojo);

    font-size: 14px;
}


/* ========================================================= */
/* INPUTS */
/* ========================================================= */

.input-container {

    position: relative;
}


.input-icon {

    position: absolute;

    left: 17px;

    top: 50%;

    transform: translateY(-50%);

    z-index: 2;

    color: #9aa7b8;

    font-size: 16px;

    pointer-events: none;
}


.form-control {

    width: 100%;

    height: 52px;

    padding: 0 17px 0 48px;

    border: 1px solid var(--gris-borde);

    border-radius: 10px;

    color: var(--texto);

    background: #fbfcfe;

    font-size: 14px;

    outline: none;

    transition: all .25s ease;

    box-shadow: none;
}


.form-control::placeholder {
    color: #a7b0bd;
}


.form-control:hover {
    border-color: #b8c5d5;
}


.form-control:focus {

    border-color: var(--azul);

    background: white;

    box-shadow:
        0 0 0 3px rgba(6, 59, 130, .09);
}


.input-container:focus-within .input-icon {
    color: var(--azul);
}


/* ========================================================= */
/* CONTRASEÑA */
/* ========================================================= */

.password-container .form-control {

    padding-right: 52px;
}


.password-button {

    position: absolute;

    right: 5px;
    top: 5px;

    width: 42px;
    height: 42px;

    border: none;

    border-radius: 8px;

    background: transparent;

    color: #8a97a8;

    cursor: pointer;

    transition: .2s;
}


.password-button:hover {

    color: var(--azul);

    background: #f1f5f9;
}


/* ========================================================= */
/* OPCIONES */
/* ========================================================= */

.login-options {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin: 4px 0 28px;

    font-size: 12px;
}


.remember {

    display: flex;

    align-items: center;

    gap: 8px;

    cursor: pointer;

    color: #65748a;
}


.remember input {

    width: 16px;
    height: 16px;

    accent-color: var(--rojo);

    cursor: pointer;
}


.forgot-password {

    color: var(--azul);

    font-weight: 700;

    text-decoration: none;

    transition: .2s;
}


.forgot-password:hover {

    color: var(--rojo);

    text-decoration: underline;
}


/* ========================================================= */
/* BOTÓN LOGIN */
/* ========================================================= */

.btn-login {

    width: 100%;

    height: 54px;

    display: flex;

    align-items: center;
    justify-content: center;

    gap: 10px;

    border: none;

    border-radius: 10px;

    color: white;

    background:
        linear-gradient(135deg,
            var(--rojo),
            var(--rojo-oscuro));

    font-size: 14px;

    font-weight: 800;

    letter-spacing: .2px;

    cursor: pointer;

    position: relative;

    overflow: hidden;

    transition:
        transform .2s ease,
        box-shadow .2s ease;
}


.btn-login::before {

    content: "";

    position: absolute;

    top: 0;
    left: -100%;

    width: 100%;
    height: 100%;

    background:
        linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, .18),
            transparent);

    transition: left .5s ease;
}


.btn-login:hover {

    transform: translateY(-2px);

    box-shadow:
        0 10px 25px rgba(215, 25, 32, .25);
}


.btn-login:hover::before {
    left: 100%;
}


.btn-login:active {
    transform: translateY(0);
}


.btn-login:disabled {

    opacity: .7;

    cursor: not-allowed;

    transform: none;
}


/* ========================================================= */
/* SEGURIDAD */
/* ========================================================= */

.security-message {

    display: flex;

    align-items: center;
    justify-content: center;

    gap: 7px;

    margin-top: 25px;

    color: #8996a7;

    font-size: 11px;
}


.security-message i {

    color: var(--dorado);

    font-size: 14px;
}


/* ========================================================= */
/* FOOTER LOGIN */
/* ========================================================= */

.login-footer {

    display: flex;

    justify-content: center;

    align-items: center;

    gap: 8px;

    margin-top: 30px;

    padding-top: 20px;

    border-top: 1px solid #edf0f4;

    color: #9aa5b4;

    font-size: 10px;
}


.login-footer span:first-child {

    color: var(--azul);

    font-weight: 800;
}


.separator {
    color: var(--dorado);
}


/* ========================================================= */
/* COPYRIGHT */
/* ========================================================= */

.copyright {

    position: relative;

    z-index: 2;

    margin-top: 20px;

    color: #8996a7;

    font-size: 11px;

    text-align: center;
}


.copyright strong {
    color: var(--azul);
}


/* ========================================================= */
/* TABLET */
/* ========================================================= */

@media (max-width: 991px) {

    .login-wrapper {

        max-width: 760px;

        grid-template-columns: 1fr;
    }


    .brand-panel {

        display: none;
    }


    .login-card {

        padding: 55px 80px;
    }


    .mobile-logo {

        display: block;

        margin-bottom: 22px;
    }


    .mobile-logo-icon {

        width: 58px;
        height: 58px;

        display: flex;

        align-items: center;
        justify-content: center;

        border-radius: 15px;

        color: var(--azul-oscuro);

        background:
            linear-gradient(135deg,
                var(--dorado-claro),
                var(--dorado));

        font-size: 18px;
        font-weight: 900;

        box-shadow:
            0 8px 20px rgba(229, 182, 47, .25);
    }

}


/* ========================================================= */
/* CELULAR */
/* ========================================================= */

@media (max-width: 600px) {

    .login-page {

        padding: 20px 15px;

        justify-content: center;
    }


    .login-wrapper {

        min-height: auto;

        border-radius: 18px;
    }


    .login-card {

        padding: 35px 25px 30px;
    }


    .login-header {

        margin-bottom: 28px;
    }


    .login-header h2 {

        font-size: 27px;
    }


    .login-options {

        align-items: flex-start;

        gap: 15px;

        flex-direction: column;
    }


    .forgot-password {

        align-self: flex-end;
    }


    .login-footer {

        flex-wrap: wrap;

        text-align: center;
    }


    .copyright {

        font-size: 10px;

        line-height: 1.5;
    }

}


/* ========================================================= */
/* CELULAR PEQUEÑO */
/* ========================================================= */

@media (max-width: 400px) {

    .login-card {

        padding: 30px 20px 25px;
    }


    .login-header h2 {

        font-size: 25px;
    }


    .form-control {

        height: 50px;

        font-size: 13px;
    }


    .btn-login {

        height: 52px;
    }

}
</style>

<script setup>
const logoEscudo = '/images/logo-escudo.png';
import { reactive, ref } from 'vue';

import { useRouter } from 'vue-router';


const router = useRouter();


const loading = ref(false);

const error = ref('');

const showPassword = ref(false);


const form = reactive({

    email: '',

    password: '',

    remember: false

});


const login = async () => {

    error.value = '';

    loading.value = true;


    try {

        const csrfToken =
            document
                .querySelector(
                    'meta[name="csrf-token"]'
                )
                ?.getAttribute('content');


        const response = await fetch('/login', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

                'Accept': 'application/json',

                'X-CSRF-TOKEN': csrfToken

            },

            credentials: 'same-origin',

            body: JSON.stringify({

                email: form.email,

                password: form.password,

                remember: form.remember

            })

        });


        const data = await response.json();


        if (!response.ok) {

            throw new Error(
                data.message ||
                'No fue posible iniciar sesión.'
            );

        }


        if (data.success) {

            sessionStorage.setItem(
                'educampus_user',
                JSON.stringify(data.user)
            );


            router.push('/dashboard');

        }

    }

    catch (err) {

        error.value =
            err.message ||
            'Ocurrió un error al iniciar sesión.';

    }

    finally {

        loading.value = false;

    }

};

</script>


<style scoped>
/* ================================================= */
/* VARIABLES EDUCampus */
/* ================================================= */

.login-page {

    --azul: #063b82;

    --azul-oscuro: #021d43;

    --azul-claro: #0b55a5;

    --rojo: #d71920;

    --dorado: #e5b62f;

    --dorado-claro: #f5d66c;

    --blanco: #ffffff;

    --gris-fondo: #f2f5f9;

    --gris-borde: #ccd5e1;

    --texto: #24344d;

}


/* ================================================= */
/* PAGINA */
/* ================================================= */

.login-page {

    min-height: 100vh;

    width: 100%;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-direction: column;

    padding: 30px 20px;

    background:
        linear-gradient(135deg,
            #021d43 0%,
            #063b82 55%,
            #0b55a5 100%);

    position: relative;

    overflow: hidden;

}


/* ================================================= */
/* DECORACIONES */
/* ================================================= */

.login-page::before {

    content: "";

    position: absolute;

    width: 450px;

    height: 450px;

    border-radius: 50%;

    background: rgba(229, 182, 47, .10);

    top: -220px;

    right: -150px;

}


.login-page::after {

    content: "";

    position: absolute;

    width: 350px;

    height: 350px;

    border-radius: 50%;

    background: rgba(215, 25, 32, .08);

    bottom: -180px;

    left: -120px;

}


/* ================================================= */
/* TARJETA */
/* ================================================= */

.login-card {

    position: relative;

    z-index: 2;

    width: 100%;

    max-width: 460px;

    padding: 42px;


    border-radius: 22px;

    box-shadow:
        0 25px 70px rgba(0, 0, 0, .28);

}


/* ================================================= */
/* LOGO */
/* ================================================= */

.logo-container {

    text-align: center;

    margin-bottom: 28px;

}


.logo-icon {

    width: 90px;

    height: 90px;

    margin: 0 auto 15px;

    display: flex;

    align-items: center;

    justify-content: center;

    background: #f2f5f9;

    border-radius: 20px;

    overflow: hidden;

}


.logo-icon img {

    width: 78px;

    height: 78px;

    object-fit: contain;

}


.logo-container h1 {

    margin: 0;

    color: var(--azul);

    font-size: 32px;

    font-weight: 800;

    letter-spacing: -.5px;

}


.logo-container p {

    margin: 5px 0 0;

    color: #6c757d;

    font-size: 14px;

}


/* ================================================= */
/* TITULO */
/* ================================================= */

.login-title {

    text-align: center;

    margin-bottom: 25px;

}


.login-title h2 {

    margin: 0 0 5px;

    color: var(--texto);

    font-size: 25px;

    font-weight: 700;

}


.login-title span {

    color: #6c757d;

    font-size: 14px;

}


/* ================================================= */
/* ERROR */
/* ================================================= */

.login-alert {

    display: flex;

    align-items: center;

    gap: 9px;

    border-radius: 10px;

    font-size: 14px;

    margin-bottom: 20px;

}


/* ================================================= */
/* FORMULARIO */
/* ================================================= */

.form-group {

    margin-bottom: 20px;

}


.form-group label {

    display: block;

    margin-bottom: 8px;

    color: var(--texto);

    font-size: 14px;

    font-weight: 600;

}


.form-group label i {

    color: var(--azul);

    margin-right: 6px;

}


/* ================================================= */
/* INPUT */
/* ================================================= */

.form-control {

    width: 100%;

    height: 52px;

    padding: 10px 15px;

    border: 1px solid var(--gris-borde);

    border-radius: 10px;

    outline: none;

    background: #ffffff;

    color: var(--texto);

    font-size: 15px;

    transition:
        border-color .2s,
        box-shadow .2s;

}


.form-control::placeholder {

    color: #9aa5b5;

}


.form-control:focus {

    border-color: var(--azul);

    box-shadow:
        0 0 0 3px rgba(6, 59, 130, .12);

}


/* ================================================= */
/* PASSWORD */
/* ================================================= */

.password-container {

    position: relative;

}


.password-container .form-control {

    padding-right: 50px;

}


.password-button {

    position: absolute;

    top: 50%;

    right: 13px;

    transform: translateY(-50%);

    width: 35px;

    height: 35px;

    display: flex;

    align-items: center;

    justify-content: center;

    border: none;

    background: transparent;

    color: #687588;

    cursor: pointer;

    font-size: 17px;

}


.password-button:hover {

    color: var(--azul);

}


/* ================================================= */
/* OPCIONES */
/* ================================================= */

.login-options {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 15px;

    margin: 3px 0 24px;

}


.remember {

    display: flex;

    align-items: center;

    gap: 7px;

    color: #6c757d;

    font-size: 13px;

    cursor: pointer;

    white-space: nowrap;

}


.remember input {

    width: 16px;

    height: 16px;

    accent-color: var(--azul);

}


.forgot-password {

    color: var(--azul);

    font-size: 13px;

    font-weight: 600;

    text-decoration: none;

    white-space: nowrap;

}


.forgot-password:hover {

    color: var(--rojo);

}


/* ================================================= */
/* BOTON */
/* ================================================= */

.btn-login {

    width: 100%;

    height: 53px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 9px;

    border: none;

    border-radius: 10px;

    background: var(--azul);

    color: #ffffff;

    font-size: 16px;

    font-weight: 700;

    cursor: pointer;

    transition:
        background .2s,
        transform .2s,
        box-shadow .2s;

}


.btn-login:hover {

    background: var(--azul-oscuro);

    transform: translateY(-1px);

    box-shadow:
        0 7px 18px rgba(6, 59, 130, .25);

}


.btn-login:disabled {

    opacity: .7;

    cursor: not-allowed;

    transform: none;

}


/* ================================================= */
/* FOOTER */
/* ================================================= */

.login-footer {

    text-align: center;

    margin-top: 28px;

    padding-top: 18px;

    border-top: 1px solid #e7ebf0;

}


.login-footer p {

    margin: 0;

    color: var(--azul);

    font-size: 14px;

    font-weight: 700;

}


.login-footer span {

    display: block;

    margin-top: 3px;

    color: #9aa4b2;

    font-size: 11px;

}


/* ================================================= */
/* COPYRIGHT */
/* ================================================= */

.copyright {

    position: relative;

    z-index: 2;

    margin-top: 18px;

    color: rgba(255, 255, 255, .7);

    font-size: 11px;

}


/* ================================================= */
/* TABLET */
/* ================================================= */

@media (max-width: 768px) {

    .login-page {

        padding: 25px 15px;

    }


    .login-card {

        max-width: 450px;

        padding: 38px 30px;

    }

}


/* ================================================= */
/* CELULAR */
/* ================================================= */

@media (max-width: 576px) {

    .login-page {

        padding: 20px 12px;

    }


    .login-card {

        padding: 32px 22px;

        border-radius: 18px;

    }


    .logo-icon {

        width: 78px;

        height: 78px;

        border-radius: 16px;

    }


    .logo-icon img {

        width: 68px;

        height: 68px;

    }


    .logo-container h1 {

        font-size: 29px;

    }


    .logo-container p {

        font-size: 13px;

    }


    .login-title h2 {

        font-size: 23px;

    }


    .login-options {

        align-items: flex-start;

    }


    .forgot-password {

        text-align: right;

    }

}


/* ================================================= */
/* CELULAR PEQUEÑO */
/* ================================================= */

@media (max-width: 400px) {

    .login-page {

        padding: 15px 10px;

    }


    .login-card {

        padding: 28px 18px;

    }


    .logo-icon {

        width: 70px;

        height: 70px;

    }


    .logo-icon img {

        width: 60px;

        height: 60px;

    }


    .logo-container h1 {

        font-size: 27px;

    }


    .login-options {

        flex-direction: column;

        align-items: flex-start;

        gap: 10px;

    }


    .forgot-password {

        text-align: left;

    }


    .form-control {

        height: 50px;

        font-size: 14px;

    }


    .btn-login {

        height: 51px;

    }

}
</style>
