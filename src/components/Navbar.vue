<template>
 <header class="header">
    <Transition name="header__notes">
    <div class="header__notes" v-show="header === true">
        <div class="header__title">Контакты</div>
        <button class="header__search" @click="header = false">
            <img src="../assets/img/search.png" alt="">
        </button>
    </div>
     </Transition>
     <Transition name="header__Form">
    <div class="header__form" v-show="header === false">
      <button class="header__back" @click="header = true">
        <img src="../assets/img/back.svg" alt="">
      </button>
      <input 
      type="text" 
      class="header__input" 
      placeholder="Поиск..."
      v-model="search"
      >
      <button class="header__cancel" @click="search = ''">
         <img src="../assets/img/cancel.png" alt="">
      </button>
    </div>
     </Transition>
 </header>

</template>

<script>
    export default{
      data() {
        return {
            // imgSearch: '',
            // imgBack: '',
            // imgCancel: '',
            header: true,
            search: ''
        }
      },
      watch: {
        search(value){
            this.$emit('searchValue', value)
        }
      }
    }
</script>


<style>

    .header{
        background: #F3EDF7;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.3);
        padding: 18px 20px;
        height: 70px;
        overflow: hidden;
    }

    .header__notes,
    .header__form{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header__title{
        font-size: 22px;
        line-height: 28px;
        color: #1c1b1f;
    }

    .header__input{
        display: block;
        width: 90%;
        background: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        line-height: 20px;
        color: #9d9d9d;
    }

    .header__notes-enter-active,
    .header__notes-leave-active{
        transition: 0.5s linear;
    }

    .header__notes-enter-from,
    .header__notes-leave-to{
        opacity: 0;
        transform: translateY(-200px);
    }

    .header__notes-enter-to,
    .header__notes-leave-from{
        opacity: 1;
        transform: translateY(0px);
    }
    
    .header__form-enter-active,
    .header__form-leave-active{
        transition: 0.5s linear;
    }

    .header__form-enter-from,
    .header__form-leave-to{
        opacity: 0;
        transform: translateY(200px);
    }

    .header__form-enter-to,
    .header__form-leave-from{
        opacity: 1;
        transform: translateY(0px);
    }
</style>