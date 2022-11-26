<template>
 <Transition name="modal">
    <div class="modal" @click="closeModal">
        <div class="modal__block" @click.stop="">
            <h2 class="modal__title">
                {{edit ? 'Изменить контакт' : 'Добавить контакт'}}
            </h2>
            <div class="modal__inputs">
                <label>
                    <span>ФИО</span>
                    <input type="text" v-model="fullName">
                </label>
                <label>
                    <span>Номер телефона</span>
                    <input type="tel" v-model="phoneNumber"
                    @input="inputNumber"
                    >
                    <p class="warning">{{msg2}}</p>
                </label>
                <label>
                    <span>Email</span>
                    <input type="text" v-model="email" 
                    @input="inputEmail"
                    >
                    <p class="warning">{{msg}}</p>
                </label>
                <label>
                    <span>Категория</span>
                    <input type="text" v-model="category">
                </label>
            </div>
            <div class="modal__btns">
                <button 
                class="modal__btn cancel" 
                @click="closeModal"
                >
                Отмена
               </button>
                <button 
                class="modal__btn add" 
                @click="addContact"
                v-if="!edit"
                >
                Добавить
               </button>
                <button 
                class="modal__btn add" 
                @click="changeContact"
                v-else
                >
                Изменить
                </button>
            </div>
        </div>
    </div>
</Transition>
</template>

<script>
import { computed } from '@vue/reactivity';

import useVuelidate from '@vuelidate/core'
import {email, required} from '@vuelidate/validators'

let re = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
// const phoneNumberCheck = (value) => value.includes('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')

    export default{
        //  closeModal(){
        //     this.$emit("closeModal", false);
        //  }
        setup() {
            return {
                v$: useVuelidate()
              }
        },
        data(){
          return {
             fullName: '',
             phoneNumber: '',
             email: '',
             category: '',
             id: 0,
             addedId: 0,
             condition: false,
             msg: '',
             msg2: '',
             clickOne: 0,
             clickTwo: 0,
             v$: useVuelidate()
          }
        },
        validations(){
           return {
            email: { email, required},
            phoneNumber: { required}
           }
        },
        props: {
            // currentId: Number,
            edit: Boolean,
            editContact: Object,
            contacts: Array
        },
        methods: {
        inputEmail(){
            this.clickOne = 1;
            if(this.clickOne == 1){
                this.v$.email.$dirty = false;
            }
            if(this.v$.email.$invalid){
                this.msg = 'Введите email правильно'
            }
            else if(!this.email.$error){
                this.msg = ''
            }
            console.log(this.v$.email.$dirty);
        },
            closeModal(){
                this.$emit('closeModal', this.condition)
                this.fullName = '';
                this.phoneNumber = '';
                this.email = '';
                this.category = '';
            },
           addContact(contacts){
            if(this.id <= this.contacts.length){
                this.addedId += this.contacts.length
            }
             if(this.name != '' && this.phoneNumber != '' && this.email != '' & this.category != '')
             {
                const item = {
                id: this.addedId,
                fullName: this.fullName,
                phoneNumber: this.phoneNumber,
                email: this.email,
                category: this.category,
             }
             this.$emit('addContact', item)
             this.fullName = '';
                this.phoneNumber = '';
                this.email = '';
                this.category = '';
                this.addedId = 0;
             }
             this.v$.email.$dirty = true
             if(this.clickOne == 1){
                this.v$.email.$dirty = false;
            }
            this.v$.phoneNumber.$dirty = true
             if(this.clickTwo == 1){
                this.v$.phoneNumber.$dirty = false;
            }
            console.log(this.contacts);
           },
           changeContact(){
              if(this.name != '' && this.phoneNumber != '' && this.email != '' & this.category != ''){
                const editedContact = {
                    id: this.editContact.id,
                    fullName: this.fullName,
                    phoneNumber: this.phoneNumber,
                    email: this.email,
                    category: this.category
                }
                this.$emit('editedContact', editedContact)
                this.closeModal()
              }
           },  
        },
        
        // setup(props, context){
        //     const condition = computed(() => {
        //     return false;
        // });
            
        //     return {
        //     condition,
        //     closeModal
        // }
        // },

        
    }
</script>

<style>
    .modal{
        background-color: rgba(0, 0, 0, 0.35);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal__block{
        background: linear-gradient(0deg, rgba(103, 80, 164, 0.11), rgba(103, 80, 164, 0.11)), #fffbfe;
        border-radius: 28px;
        max-width: 312px;
        width: 100%;
        padding: 24px;
    }

    .modal__title{
        color: #1c1b1f;
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 16px;
    }

    .modal__inputs{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .modal__inputs label{
        position: relative;

    }

    .modal__inputs span{
        position: absolute;
        left: 5px;
        top: 5px;
    }

    .modal__inputs input{
        background: #e7e0ec;
        border-radius: 4px;
        width: 100%;
        border: none;
        outline: none;
        padding: 23px 0 9px 16px;
        font-size: 16px;
        line-height: 24px;
        color: #49454f;
        border-bottom: 1px solid #1c1b1f;
    }

    .warning{
        color: red;
        font-size: 16px;
        line-height: 24px;
    }

    .modal__btns{
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 25px;

    }

    .modal__btn{
        font-size: 14px;
        line-height: 20px;
        font-family: 'RM';
        background: transparent;
        padding: 10px 12px;
        text-transform: uppercase;
        border: none;
        outline: none;
    }

    .cancel{
        color: #cf1b1b;
    }
    .cancel:hover{
        background: #ffe1e1;
    cursor: pointer;
    }

    .add{
    color: #6750a4;
    }
   .add:hover{
    background: #e6ddff;
    cursor: pointer;
    }

    .modal-enter-active,
    .modal-leave-active{
        transition: 0.5s linear;
    }

    .modal-enter-from,
    .modal-leave-to{
        opacity: 0;
        transform: scale(1.5);
    }
</style>