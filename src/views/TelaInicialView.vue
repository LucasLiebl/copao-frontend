<template>
    <div class="tela-inicial">
        <h1>Welcome to Our Site</h1>
        <p>This is an introduction to our site. Please choose an option below:</p>
        <div class="buttons">
            <router-link to="/home">
                <button>Go to Home</button>
            </router-link>
            <router-link to="/login">
                <button>Login</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TelaInicialView',
};
</script>

<style scoped>
.tela-inicial {
    text-align: center;
    margin-top: 50px;
}

.buttons {
    margin-top: 20px;
}

button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>