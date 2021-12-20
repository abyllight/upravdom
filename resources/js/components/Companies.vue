<template>
    <div v-if="companies">
        <div class="flex flex-col md:flex-row">
            <div class="md:w-2/3 mx-auto">
                <p class="text-3xl mb-10">{{service.title}}</p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a
                        v-for="company in companies"
                        :key="company.id"
                        class="cursor-pointer mb-4"
                        :href="company.link"
                        target="_blank"
                    >
                        <div class="flex items-center">
                            <img :src="company.logo" class="rounded shadow-md w-20 h-20 hover:scale-105"/>
                            <div class="ml-3">
                                <p class="text-lg leading-tight mb-1">{{company.name}}</p>
                                <p class="font-light">от {{company.price}}тг</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import services from "../services";
export default {
    name: "Companies",
    props: ['id'],
    data() {
        return {
            companies: {},
            service: {}
        }
    },
    mounted() {
        this.getServiceCompanies()
    },
    methods: {
        getServiceCompanies(){
            let id = parseInt(this.id)
            let service = services.find(x => x.id === id)
            this.service = service
            this.companies = service.companies
        }
    }
}
</script>
