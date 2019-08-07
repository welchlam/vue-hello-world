<template>
    <div class="side">
        <ul class="side--features">
            <li v-for="(user, index) in users" :key="index">
                <div><a href="">{{user.first_name}}</a></div>
            </li>
        </ul>

        <b-alert show>Default Alert</b-alert>
    </div>
</template>

<script>
    // import { mapState } from 'vuex'

    export default {
        name: 'Sidebar',
        data() {
            return {
                // users: this.$store.state.users.users
            }
        },
        computed: {
            users() {
                return this.$store.state.users.users
            }
        }
        // computed: mapState({
        //     users: state => state.users.users
        // }),
    }
</script>

<style>
    .side {
        padding: 10px;
    }

    .side--features {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .side--features li {
        list-style: none;
        margin: 5px;
    }

    .side--features li a {
        text-decoration: none;
        font-size: 30px;
    }
</style>