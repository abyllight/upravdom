<template>
    <div>
        <div
            @click="openDiv"
            class="border relative flex flex-col justify-center items-center text-center p-3 h-48 md:h-56 cursor-pointer hover:bg-gray-100"
        >
            <img src="/images/settings.svg" class="text-gray-200"/>
            <p class="text-base mt-3">{{service.title}}</p>
            <transition name="slide">
                <div v-if="service.showDiv" class="w-12 overflow-hidden inline-block absolute -bottom-2">
                    <div class="bg-gray-700 h-8 w-8 rotate-45 transform origin-bottom-left"></div>
                </div>
            </transition>
        </div>
        <transition name="slide">
            <div v-if="service.showDiv" class="absolute z-10 inset-x-0 text-white px-4 pt-6 pb-12 bg-gray-700">
                <div class="w-full my-1">
                    <div class="flex justify-between items-center">
                        <p class="text-2xl mb-8">{{service.title}}</p>
                        <img src="/images/close.svg" class="w-10 -mt-8 cursor-pointer" @click="closeDiv"/>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        <div v-for="company in service.companies">
                            <div v-if="service.has_only_companies">
                                <a :href="company.link" target="_blank">
                                    <div class="flex flex-col justify-center items-center gap-2">
                                        <img :src="company.logo" class="h-12 rounded"/>
                                        <p>{{company.name}}</p>
                                    </div>
                                </a>
                            </div>
                            <div v-else>
                                <router-link :to="{ name: 'Specialists', params: { id: service.id, c_id: company.id } }">
                                    <div
                                        v-if="company.specialists"
                                        class="flex items-center gap-2"
                                    >
                                        <img :src="company.logo" class="h-16 rounded"/>
                                        <div>
                                            <p>{{company.name}}</p>
                                            <p class="text-sm">{{company.specialists.length}} специалистов</p>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "ServiceCard",
    props: {
        service: Object
    },
    data: () => ({
        showBox: false
    }),
    methods: {
        openDiv(){
            /*if (this.service.has_only_companies) {
                let link = this.$router.resolve({name: 'Companies', params: { id: this.service.id}})
                window.open(link.href, '_self')
                return
            }*/
            this.$emit('show-div', this.service.id)
        },
        closeDiv(){
            this.$emit('close-div')
        }
    }
}
</script>
<style scoped>
</style>
