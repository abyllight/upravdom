<template>
    <div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 relative">
            <ServiceCard v-for="service in services" :key="service.id" :service="service"/>
        </div>
    </div>
</template>

<script>
import services from "../services";
import ServiceCard from "../components/ServiceCard";
import Navbar from "./Navbar";
export default {
    name: "Home",
    components: {
        ServiceCard
    },
    data: () => ({
        services: []
    }),
    created() {
        this.services = services
    }
}
</script>
