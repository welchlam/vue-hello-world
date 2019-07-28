<template>
    <div class="container">
        <div class="logo">
            <a href="">
                <img src="../assets/logo.png" alt="Home">
            </a>
        </div>
        <div class="feature">
            <ul>
                <li v-for="(item, index) in list" :key="index">
                    <div><a href="">{{item.display}}</a></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            size: Number
        },
        data() {
            return {
                list: []
            }
        },
        watch: {
            size(newValue) {
                for (let i=0; i<newValue; i++) {
                    this.list.push({
                        value: 'item-value-' + i,
                        display: 'item-display-' + i    
                    });
                }
            }
        },
        methods: {
            createList() {
                for (let i=0; i<this.size; i++) {
                    this.list.push({
                        value: 'item-value-' + i,
                        display: 'item-display-' + i    
                    });
                }
            }
        },
        created() {
            for (let i=0; i<this.size; i++) {
                this.list.push({
                    value: 'Button' + i,
                    display: 'Button' + i    
                });
            }
        }
    }
</script>

<style>
    .container {
        display: flex; 
        justify-content: space-between;
    }

    .logo {
        display: inline-block; 
        margin-left: 5px; 
        margin-top: 2px
    }

    .feature {
        display: inline-block; 
    }

    img {
        height: 2.5rem;
    }

    ul {
        display: flex;
        flex-direction: row-reverse;
        padding: 0;
        margin-top: 5px;
    }

    li {
        list-style: none;
        display: inline-block;
        margin: 5px;
        font-size: 15px;
    }

    a {
        text-decoration: none;
    }
</style>