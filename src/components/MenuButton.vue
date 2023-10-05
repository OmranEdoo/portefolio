<template>
    <a href="/">
        <div id="menu" class="d-flex flex-column justify-center align-center">
            <div class="menuBar" />
            <div class="menuBar" />
            <div class="menuBar" />
            <div class="menuBar" />
        </div>
    </a>
</template>

<script>
export default {
    name: 'MenuButton'
}
</script>

<style>
#menu {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: rgba(80, 80, 80, 0.5);
    position: fixed;
    top: 50px;
    right: 50px;
    z-index: 10;
    transition: transform .2s ease-in-out;
}

#menu:hover {
    transform: rotate(90deg);
    background-color: rgba(149, 152, 180, 0.5);
}

.menuBar {
    margin-bottom: 3px;
    margin-top: 3px;
    width: 30px;
    height: 2px;
    background-color: #E0FFFF;
}
</style>