<template>
    <component-container
            @onAddNode="onAddNode"
            @onUpdateNode="onUpdateNode"
            @onDeleteNode="onDeleteNode"
            :catalog="catalog"
            ref="componentContainer"></component-container>
</template>

<script>
    import * as catalogApi from '../service/catalog'
    import * as projectApi from '../service/project'

    export default {
        name: 'project-dashboard',
        components: {},
        data () {
            return {
                catalog: {
                    list: []
                },
                dataList: []
            }
        },
        computed: {
            /**
             * URL上的project的uuid
             * @returns {*|string|number}
             */
            projectUuid () {
                return this.$route.params.uuid
            }
        },
        mounted () {
            // this.onAdd()
            this.init()
        },
        methods: {
            async init () {
                await this.getCatalogList()
            },
            /**
             * 左侧目录右键菜单 添加
             * @param opts
             */
            onAddNode (opts) {
                this.$log.echo(opts, '左侧目录右键菜单->添加', 'log')
            },
            /**
             * 左侧目录右键菜单 修改
             * @param opts
             */
            onUpdateNode (opts) {
                this.$log.echo(opts, '左侧目录右键菜单->修改', 'log')
            },
            /**
             * 左侧目录右键菜单 删除
             * @param opts
             */
            onDeleteNode (opts) {
                this.$log.echo(opts, '左侧目录右键菜单->删除', 'log')
            },
            async getCatalogList () {
                const data = await this.$http.fetch(catalogApi.list({
                    projectUuid: this.projectUuid
                }))
                if (data) {
                    this.catalog.list = data.list
                    this.$log.echo(data.list, 'getCatalogList data.list', 'log')
                }
            },
            async getList () {
                const { list } = await this.$http.fetch(projectApi.list({}))
                if (list) {
                    this.dataList = list
                    this.$log.echo(list, 'devops project.vue getList list', 'log')
                }
            },
            async getDetail (uuid) {
                const { detail } = await this.$http.fetch(projectApi.detail({
                    uuid
                }))
                if (detail) {
                    this.$log.echo(detail, 'devops project.vue getDetail detail', 'log')
                }
            },
            onGoDetail (data) {
                this.$router.push({
                    path: `/write/${data.uuid}/dashboard`
                })
            },
            async onOpenForm () {
                this.$refs.formEdit.onOpenDialog()
            }
        }
    }
</script>

<style lang="less" scoped>
    .project-item-col{
        padding: 5px;
    }
    .project-desc{
        line-height: 32px;
        height: 72px;
    }
    .card-footer{
        /*border-top: 1px solid #EBEEF5;*/
        padding-top: 10px;
    }
    .box-card{
        cursor: pointer;
    }
    .project-type{
        &.p-mg{
            margin-top: 20px;
        }
    }
</style>
