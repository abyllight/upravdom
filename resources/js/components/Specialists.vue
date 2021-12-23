<template>
    <div v-if="specialists">
        <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-1/3">
                <div class="flex items-center mb-4">
                    <img :src="company.logo" class="w-16"/>
                    <p class="text-xl ml-3">{{company.name}}</p>
                </div>
                <p>{{company.description}}</p>
            </div>
            <div class="md:w-2/3">
                <p class="text-3xl mb-10">{{service.title}}</p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a
                        v-for="specialist in specialists"
                        :key="specialist.id"
                        class="cursor-pointer mb-4"
                        :href="specialist.link"
                        target="_blank"
                    >
                        <div class="flex items-center">
                            <img :src="specialist.avatar" class="rounded w-20 hover:scale-105"/>
                            <div class="ml-3">
                                <p class="text-lg leading-tight mb-1">{{specialist.name}}</p>
                                <p class="font-light">от {{specialist.price}}тг</p>
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
    name: "Specialists",
    props: ['id', 'c_id'],
    data() {
        return {
            company: {},
            specialists: [],
            service: {}
        }
    },
    mounted() {
        this.getServiceSpecialists()
    },
    methods: {
        getServiceSpecialists(){
            let id = parseInt(this.id)
            let service = services.find(x => x.id === id)
            this.service = service

            if (service && service.companies) {
                let company_id = parseInt(this.c_id)
                this.company = service.companies.find(x => x.id === company_id)
                if (!this.company){
                    this.specialists = service.companies
                }
                this.specialists = this.company.specialists
            }
        }
    }
}
</script>
