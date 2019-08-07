<template>
    <div class="nav">
        <div class="nav--logo">
            <a href="" class="nav--logo--link">
                <img src="../assets/logo.png" alt="Home">
            </a>
        </div>
        <div class="nav--features">
            <ul class="nav--features--feature">
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
            size: String
        },
        data() {
            return {
                list: []
            }
        },
        watch: {
            /*size(newValue) {
                for (let i=0; i<newValue; i++) {
                    this.list.push({
                        value: 'item-value-' + i,
                        display: 'item-display-' + i    
                    });
                }
            }*/
        },
        methods: {
            createList() {
                for (let i=0; i<this.size; i++) {
                    this.list.push({
                        value: 'Button' + i,
                        display: 'Button' + i
                    });
                }
            }
        },
        created() {
            this.createList();
        }
    }
</script>

<style>
    .nav {
        display: flex; 
        justify-content: space-between;
    }

    .nav--logo {
        display: inline-block; 
        margin-left: 5px; 
        margin-top: 2px
    }

    .nav--logo--link {
        text-decoration: none;
    }

    .nav--logo--link img {
        height: 2.5rem;
    }

    .nav--features {
        display: inline-block; 
    }

    .nav--features--feature {
        display: flex;
        flex-direction: row-reverse;
        padding: 0;
        margin-top: 5px;
    }

    .nav--features--feature li {
        list-style: none;
        display: inline-block;
        margin: 5px;
        font-size: 15px;
    }

    .nav--features--feature li a {
        text-decoration: none;
    }
</style>