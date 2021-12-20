<template>
    <Navbar/>
    <div class="max-w-7xl px-3 mx-auto mt-10">
        <router-view/>
    </div>
</template>

<script>
import Home from "./components/Home";
import Navbar from "./components/Navbar";
export default {
    name: "App",
    components: {
        Navbar,
        Home
    },
    setup: () => ({
    })
}
</script>
