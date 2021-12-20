<template>
    <div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 relative">
            <ServiceCard v-for="service in services" :key="service.id" :service="service" @show-div="showDiv" @close-div="closeDiv"/>
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
    },
    methods: {
        showDiv(id){
            this.closeDiv()
            this.services.find(x => x.id === id).showDiv = true
        },
        closeDiv(){
            this.services.map(x => {
                x.showDiv = false
            })
        }
    }
}
</script>
