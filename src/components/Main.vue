<template>
    <div>
        <b-table striped hover :items="users"></b-table>
        <b-alert show>Default Alert</b-alert>
        <button @click="addUser"> Add User </button>
        <button @click="removeUser"> Remove User </button>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Main',
        computed: mapState({
            users: state => state.users.users
        }),
        methods: {
            addUser() {
                this.$store.dispatch('addUserAction', {
                    age: 33, first_name: 'Lin', last_name: 'Welch'
                })
            },
            removeUser() {
                this.$store.dispatch('removeUserAction', {
                    age: 33, first_name: 'Lin', last_name: 'Welch'
                })
            }
        }
        // methods: mapActions('users', [
        //     'addUserAction',
        //     'removeUserAction'
        // ])
    }
</script>

<style>

</style>