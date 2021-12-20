<template>
    <div class="bg-gray-800 py-3 text-white mt-16">
        <div class="max-w-6xl mx-auto px-3">
            <div class="flex flex-col md:flex-row md:justify-around md:items-center py-8">
                <div class="flex flex-col md:flex-row gap-8 md:gap-28">
                    <div>
                        <div
                            class="flex justify-between items-start cursor-pointer md:cursor-auto"
                        >
                            <p class="font-semibold uppercase mb-4 text-lg">Навигация</p>
                        </div>
                        <div class="flex flex-col font-light">
                            <a class="mb-3.5" href="/">Главная</a>
                        </div>
                    </div>
                    <div>
                        <div
                            class="flex justify-between items-start cursor-pointer md:cursor-auto"
                        >
                            <p class="font-semibold uppercase mb-4 text-lg">Контакты</p>
                        </div>
                        <div class="flex flex-col font-light">
                            <div class="mb-2">
                                <p class="font-medium text-footer-label mb-1">Адрес</p>
                                <p>Фурманова 14А</p>
                            </div>
                            <div class="mb-2">
                                <p class="font-medium text-footer-label mb-1">E-mail</p>
                                <a href="mailto:tkfarm@gmail.com">upravdom@gmail.com</a>
                            </div>
                            <div>
                                <p class="font-medium text-footer-label mb-1">Телефон</p>
                                <a href="tel:+77084224242">+7 (777) 777 - 77 - 77</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between text-sm border-t border-white md:border-0 py-3">
                <p class="uppercase"><span class="font-light">2021 ©</span> <span class="font-semibold">Управдом</span></p>
                <p>Все права защищены</p>
            </div>
        </div>
    </div>
</template>
<style>
.bounce-enter-active {
    animation: bounce-in 1.3s;
}
.bounce-leave-active {
    animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
</style>
<script>
export default {
    name: "FooterSection",
    data: () => ({
        first: true,
        second: true,
        up: '/img/up.svg',
        down: '/img/down.svg',
        popUp: false
    }),
    computed:{
        isLarge() {
            return screen.width >= 760
        }
    },
    methods: {
        collapseFirst(){
            if (this.isLarge) return true
            this.first =! this.first
        },
        collapseSecond(){
            if (this.isLarge) return true
            this.second =! this.second
        }
    }
}
</script>
