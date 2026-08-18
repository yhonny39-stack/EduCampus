<template>

    <div class="login-page">

        <div class="login-card">

            <!-- ========================= -->
            <!-- LOGO -->
            <!-- ========================= -->

            <div class="logo-container">

                <div class="logo-icon">


                </div>

                <h1>
                    EduCampus
                </h1>

                <p>
                    Sistema de Gestión Académica
                </p>

            </div>


            <!-- ========================= -->
            <!-- TITULO -->
            <!-- ========================= -->

            <div class="login-title">

                <h2>
                    Iniciar sesión
                </h2>

                <span>
                    Ingresa tus datos para continuar
                </span>

            </div>


            <!-- ========================= -->
            <!-- ERROR -->
            <!-- ========================= -->

            <div
                v-if="error"
                class="alert alert-danger login-alert"
            >

                <i class="bi bi-exclamation-circle-fill"></i>

                <span>
                    {{ error }}
                </span>

            </div>


            <!-- ========================= -->
            <!-- FORMULARIO -->
            <!-- ========================= -->

            <form
                @submit.prevent="login"
                class="login-form"
            >


                <!-- CORREO -->

                <div class="form-group">

                    <label for="email">

                        <i class="bi bi-envelope-fill"></i>

                        Correo electrónico

                    </label>


                    <input
                        id="email"
                        type="email"
                        class="form-control"
                        v-model="form.email"
                        placeholder="Ingrese su correo electrónico"
                        autocomplete="email"
                        :disabled="loading"
                        required
                    >

                </div>


                <!-- CONTRASEÑA -->

                <div class="form-group">

                    <label for="password">

                        <i class="bi bi-lock-fill"></i>

                        Contraseña

                    </label>


                    <div class="password-container">

                        <input
                            id="password"
                            :type="
                                showPassword
                                ? 'text'
                                : 'password'
                            "
                            class="form-control"
                            v-model="form.password"
                            placeholder="Ingrese su contraseña"
                            autocomplete="current-password"
                            :disabled="loading"
                            required
                        >


                        <button
                            type="button"
                            class="password-button"
                            @click="
                                showPassword =
                                !showPassword
                            "
                        >

                            <i
                                :class="
                                    showPassword
                                    ? 'bi bi-eye-slash-fill'
                                    : 'bi bi-eye-fill'
                                "
                            ></i>

                        </button>

                    </div>

                </div>


                <!-- ========================= -->
                <!-- OPCIONES -->
                <!-- ========================= -->

                <div class="login-options">

                    <label class="remember">

                        <input
                            type="checkbox"
                            v-model="form.remember"
                        >

                        <span>
                            Recordarme
                        </span>

                    </label>


                    <a
                        href="#"
                        class="forgot-password"
                        @click.prevent
                    >

                        ¿Olvidaste tu contraseña?

                    </a>

                </div>


                <!-- ========================= -->
                <!-- BOTON -->
                <!-- ========================= -->

                <button
                    type="submit"
                    class="btn-login"
                    :disabled="loading"
                >

                    <span
                        v-if="loading"
                        class="spinner-border spinner-border-sm"
                    ></span>


                    <i
                        v-else
                        class="bi bi-box-arrow-in-right"
                    ></i>


                    <span>

                        {{
                            loading
                            ? 'Ingresando...'
                            : 'Iniciar sesión'
                        }}

                    </span>

                </button>

            </form>


            <!-- ========================= -->
            <!-- FOOTER -->
            <!-- ========================= -->

            <div class="login-footer">

                <p>
                    EduCampus
                </p>

                <span>
                    Sistema de Gestión Académica
                </span>

            </div>

        </div>


        <!-- ========================= -->
        <!-- COPYRIGHT -->
        <!-- ========================= -->

        <div class="copyright">

            © {{ new Date().getFullYear() }} EduCampus

        </div>

    </div>

</template>


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
        linear-gradient(
            135deg,
            #021d43 0%,
            #063b82 55%,
            #0b55a5 100%
        );

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

    background: var(--blanco);

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
        0 0 0 3px
        rgba(6, 59, 130, .12);

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
        0 7px 18px
        rgba(6, 59, 130, .25);

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

    color: rgba(255,255,255,.7);

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
