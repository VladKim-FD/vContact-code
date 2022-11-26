<script >
  // import { RouterLink, RouterView } from "vue-router";
  import Navbar from "./components/Navbar.vue";
  import Contacts from "./components/Contacts.vue";
  import Modal from "./components/Modal.vue";
  import AddButton from "./components/AddButton.vue";
  
  export default{
    components: {
      Navbar,
      Contacts,
      Modal,
      AddButton
    },
    data(){
      return {
        currentId: 1,
        modalOpen: false,
         contacts: [],
         edit: false,
         editContact: {},
         search: ''
      }
    },
    created(){
      this.getContacts()
      console.log(this.contacts);
    },
    computed: {
      filterContacts(){
        return this.search ? 
        this.contacts.filter(contact => {
          for(let key in contact){
            if(String(contact[key]).toLowerCase().includes(this.search.toLowerCase())){
              return contact;
            }
          }
        })
        : this.contacts;
      },     
    },
    methods: {
      openModal(){
        this.modalOpen = true
      },
      closeModal(){
        this.modalOpen = false
        this.edit = false
      },
      addContact(item){
          this.contacts.push(item)
          this.modalOpen = false
          console.log(this.contacts);
      },
      deleteContact(id){
          let index = this.contacts.findIndex(contact => contact.id == id)
          this.contacts.splice(index, 1)
      },
      changeContact(id){
      this.edit = this.modalOpen = true
      let pickedContact = this.contacts.find(contact => contact.id == id)
      this.editContact = pickedContact
      },
      editedContact(contactEdited){
        this.contacts.forEach(contact => {
          if(contact.id == contactEdited.id) {
            contact.fullName = contactEdited.fullName
            contact.phoneNumber = contactEdited.phoneNumber
            contact.email = contactEdited.email
            contact.category = contactEdited.category
          }
        })
      },
      getContacts(){
        const localContacts = localStorage.contacts
        if(localContacts){
          this.contacts = JSON.parse(localContacts)
        }
      }
    },
    watch: {
      contacts: {
        handler(newContacts){
          localStorage.contacts = JSON.stringify(this.contacts)
        },
        deep: true
      }
    }
  }
</script>
<template>
  <Navbar 
  @searchValue="search = $event"
  />
  <Contacts 
  :contacts="filterContacts"
  @delContact="deleteContact" 
  @changeContact="changeContact"
  :search="search"
  />
  <Modal 
  :contacts="contacts"
  :edit="edit"
  :editContact="editContact"
  @addContact="addContact"
  :currentId="currentId" 
  v-show="modalOpen" 
  @closeModal="closeModal" 
  @editedContact="editedContact"
  />
  <AddButton 
  @openModal="openModal" 
  />
  <!-- <RouterView /> -->
</template>






