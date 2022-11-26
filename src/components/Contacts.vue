<template>
    <div class="contacts">
        <div class="container">
            <div class="contacts__top">
                <h2 class="contacts__title">{{ contacts.length > 0 ? 'Все заметки' : 'Нет заметок' }}</h2>
                <button class="contacts__btn" @click="grid = !grid">
                    <img src="../assets/img/list.png" alt="" v-if="grid">
                    <img src="../assets/img/list.png" alt="" v-else>
                    <span>{{ grid ? 'Список' : 'Сетка' }}</span>
                </button>
            </div>
            <div class="contacts__list" :class="{ active: !grid }">
                <ContactItem :grid="grid" v-for="contact in contacts" :key="contact.id" :contact="contact"
                    @changeContact="$emit('changeContact', contact.id)"
                    @delContact="$emit('delContact', contact.id)" />
            </div>
        </div>
    </div>

</template>

<script>
import ContactItem from './ContactItem.vue';
export default {
    components: {
        ContactItem
    },
    data() {
        return {
            // imgList: 'src/assets/img/list.png',
            // imgGrid: 'src/assets/img/grid.png',
            grid: true
        }
    },
    props: {
        contacts: {
            typeof: Array
        }
    }
}
</script>

<style>
.contacts {
    margin-top: 30px;
    padding-bottom: 50px;
}

.contacts__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contacts__title {
    font-size: 22px;
    line-height: 28px;
    color: #323232;
}

.contacts__btn {
    background: linear-gradient(0deg, rgba(103, 80, 164, 0.11), rgba(103, 80, 164, 0.11)), #fffbfe;
    box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    cursor: pointer;
    width: 120px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border: none;
    outline: none;
}

.contacts__btn span {
    color: #6750a4;
    font-size: 14px;
    line-height: 20px;
    font-family: 'RM';
}

.contacts__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 30px;
}

.contacts__list.active {
    grid-template-columns: 1fr;
}

@media (max-width: 1200px) {
    .contacts__list {
        grid-template-columns: repeat(3, 1fr);
    }

    .contacts__item {
        grid-column: span 1;
    }
}

@media (max-width: 1024px) {
    .contacts__list {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 724px) {
    .contacts__list {
        grid-template-columns: 1fr;
    }

    .contacts__item {
        text-align: center;
    }

    .contacts__btn {
        display: none;
    }
}

@media (max-width: 340px) {

    .contacts__list{
        display: flex;
        flex-direction: column;
    }
    .contacts__item{
        max-width: 100%;
    }

    .contacts__item-btns{
        gap: 10px;
    }

    .contacts__item-btn{
        padding: 12px 0;
    }
}
</style>