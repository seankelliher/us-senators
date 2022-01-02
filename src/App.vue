<template>
    <header>
        <h1>United State Senate</h1>
        <p>A guide to Senators in the 117th Congress</p>
    </header>
    <nav>
        <button><router-link to="/">State</router-link></button>
        <button><router-link to="/class">Class</router-link></button>
        <button><router-link to="/party">Party</router-link></button>
        <button><router-link to="/leaders">Leaders</router-link></button>
    </nav>
    <router-view />
</template>

<style>
@import "./assets/style.css";
</style>
