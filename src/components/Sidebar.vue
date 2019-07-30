<template>
    <div class="side">
        <ul class="side--features">
            <li>
                <div>
                    <a href="">Item AAA</a>
                </div>
            </li>
            <li>
                <div>
                    <a href="">Item BBB</a>
                </div>
            </li>
            <li>
                <div>
                    <a href="">Item CCC</a>
                </div>
            </li>
            <li>
                <div>
                    <a href="">Item DDD</a>
                </div>
            </li>
            <li>
                <div>
                    <a href="">Item EEE</a>
                </div>
            </li>
            <li>
                <div>
                    <a href="">Item FFF</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        data() {
            return {

            }
        }
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