<template>
    <router-view></router-view>
</template>
<script>
    export default {
        name: 'App',
        data () {
            return {}
        },
        created () {
            // this.$aliOss.setOptions({
            //     // fileUrl: 'aaa/bbb.jpg',
            //     prefix: 'lalala/',
            //     onlyPath: 'uuid/'
            // })
            // this.$log.echo({
            //     $http: this.$http,
            //     processEnv: process.env,
            //     store: this.$store,
            //     $aliOss: this.$aliOss
            // }, 'app.vue created', 'log', 'local')
        },
        methods: {
            /**
             * 测试功能
             * @returns {function(*): string} demo
             */
            test () {
                return (a) => {
                    return 'fdfdf'
                }
            }
        }
    }
</script>
<style lang="scss">
</style>
