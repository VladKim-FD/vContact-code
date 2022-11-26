<template>

    <div class="contacts__item">
        <div class="contacts__item-info" :class="{between: !grid}">
            <h3 class="full-name">{{contact.fullName}}</h3>
            <h4 class="phone-number">{{contact.phoneNumber}}</h4>
            <h4 class="email">{{contact.email}}</h4>
            <h5 class="categoria">{{contact.category}}</h5>
        </div>
        <div class="contacts__item-btns" 
        >
            <button class="contacts__item-btn edit" @click="$emit('changeContact', contact.id)">
               <img src="../assets/img/change.png" alt="">
               <span>РЕДАКТИРОВАТЬ</span>
            </button>
            <button class="contacts__item-btn del" @click="$emit('delContact', contact.id )">
               <img src="../assets/img/delete.png" alt="">
               <span>УДАЛИТЬ</span>
            </button>
        </div>    
    </div>
</template>

<script>
export default{
    
    props: {
        grid: Boolean,
        contact: Object
    },
   data(){
    return {
        imgEdit: '',
        imgDel: ''
    }
   }
}
</script>

<style>
.contacts__item{
    background: linear-gradient(0deg, rgba(103, 80, 164, 0.05), rgba(103, 80, 164, 0.05)), #fffbfe;
    box-shadow: 0px 1px 2px  rgba(0, 0, 0, 0.15), 0px 1px 3px 1px rgba(0, 0, 0, 0.3);
    border-radius: 16px ;
    padding: 16px 16px 28px 16px;
}   

.contacts__item-info{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.full-name{
    font-size: 20px;
    line-height: 24px;
    font-family: 'RM';
}

.phone-number{
    /* color: #cac4d0; */
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.25px;
}

.email{
    /* color: #cac4d0; */
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.25px;
}

.categoria{
    font-size: 18px;
    line-height: 22px;
    font-family: 'RM';
    color: rgb(96, 80, 80);
}

.contacts__item-btns{
    display: flex;
    justify-content: flex-end;
    gap: 15px;
}

.contacts__item-btn{
    display: flex;
    align-items: center;
    gap: 10px;
    background: transparent;
    padding: 12px;
    border-radius: 5px;
    border: none;
    outline: none;
}

.contacts__item-btn span{
   font-size: 14px;
   line-height: 20px;
   font-family: 'RM';
}

.edit{
    color: #6750a4;
}
.edit:hover{
    background: #e6ddff;
    cursor: pointer;
}

.del{
    color: #cf1b1b;
}
.del:hover{
    background: #ffe1e1;
    cursor: pointer;
}

.between{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>