<template>
    <div>
        <div ref="box"
            @click="openDiv"
            class="relative rounded-md shadow-md flex flex-col justify-center items-center text-center p-3 h-48 md:h-56 cursor-pointer bg-white hover:scale-105"
        >
            <img :src="service.img" class="w-16"/>
            <p class="text-base mt-3">{{service.title}}</p>
            <transition name="slide">
                <div v-if="service.showDiv" class="w-12 overflow-hidden inline-block absolute -bottom-2">
                    <div class="bg-gray-700 h-8 w-8 rotate-45 transform origin-bottom-left"></div>
                </div>
            </transition>
        </div>
        <div
            class="absolute z-10 inset-x-0 text-white px-4 bg-gray-700 rounded-md max-h-0 overflow-y-hidden transition-all duration-300 ease-in-out"
            :class="service.showDiv ? 'max-h-screen pt-6 pb-12' : 'max-h-0'"
        >
            <div class="w-full my-1">
                <div class="flex justify-between items-center">
                    <p class="text-2xl mb-8">{{service.title}}</p>
                    <img src="/images/close.svg" class="w-10 -mt-8 cursor-pointer" @click="closeDiv"/>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    <div v-for="company in service.companies">
                        <div v-if="company.specialists">
                            <router-link :to="{ name: 'Specialists', params: { id: service.id, c_id: company.id } }">
                                <div
                                    v-if="company.specialists"
                                    class="flex flex-col items-center gap-2"
                                >
                                    <img :src="company.logo" class="h-14 rounded"/>
                                    <div class="text-center">
                                        <p>{{company.name}}</p>
                                        <p class="text-sm">{{company.specialists.length}} специалистов</p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div v-else>
                            <a :href="company.link" target="_blank" class="cursor-pointer">
                                <div class="flex flex-col justify-center items-center gap-2">
                                    <img :src="company.logo" class="h-14 rounded"/>
                                    <p>{{company.name}}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            this.$emit('show-div', this.service.id)

            let element = this.$refs.box;
            let top = element.offsetTop;

            window.scrollTo(0, top + 480);
        },
        closeDiv(){
            this.$emit('close-div')
        }
    }
}
</script>
<style scoped>
</style>
