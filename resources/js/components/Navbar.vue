<template>
    <div class="w-full bg-gray-200 shadow">
        <div class="py-5 px-4 max-w-7xl mx-auto flex gap-x-10 items-center">
            <router-link to="/" class="cursor-pointer">
                <img :src="logo" class="w-8 md:w-28">
            </router-link>
            <div class="flex items-center justify-between w-full">
                <div>
                    <router-link to="/" class="cursor-pointer hover:text-orange-400">
                        Услуги для дома
                    </router-link>
                </div>
                <a class="flex items-center gap-2 cursor-pointer">
                    <img src="/images/location.svg" class="w-7"/>
                    <p class="hover:text-orange-400">Алматы</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data: () => ({
        logo_sm: '/images/logo/icon.png',
        logo_lg: '/images/logo/logo3.png'
    }),
    computed:{
        logo(){
            return window.innerWidth <= 425 ? this.logo_sm : this.logo_lg
        }
    }
}
</script>
