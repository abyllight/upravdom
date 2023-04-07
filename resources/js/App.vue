<template>
    <Navbar/>
    <Banner/>
    <div id="services" class="max-w-7xl px-4 mx-auto">
        <router-view/>
    </div>
</template>

<script>
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
import Banner from "./components/Banner";
export default {
    name: "App",
    components: {
        Banner,
        Navbar,
        Home
    },
    setup: () => ({
    })
}
</script>
