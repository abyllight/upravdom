<template>
    <Navbar/>
    <div class="max-w-7xl px-3 mx-auto mt-10">
        <router-view/>
    </div>
    <FooterSection/>
</template>

<script>
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
export default {
    name: "App",
    components: {
        FooterSection,
        Navbar,
        Home
    },
    setup: () => ({
    })
}
</script>
