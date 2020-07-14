<template>
    <component-container ref="componentContainer">
        <div  slot="content">
            <el-row>
                <el-button type="primary" @click="onOpenForm">新增项目 <i class="el-icon-circle-plus-outline"></i></el-button>
            </el-row>
            <el-row class="project-type">
                <el-divider content-position="left">
                    我创建的项目
                </el-divider>
                <el-col
                    class="project-item-col"
                    v-for="(data) in dataList"
                    :key="data.uuid"
                    :span="4">
                    <el-card shadow="hover" class="box-card">
                        <div slot="header" class="clearfix">
                            <span @click="onGoDetail(data)">{{ data.name }}</span>
                            <el-button style="float: right; padding: 3px 0" type="text">删除</el-button>
                        </div>
                        <div class="project-desc">
                            {{ data.description }}
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row class="project-type p-mg">
                <el-divider content-position="left">我参与的项目</el-divider>
                <el-col
                    class="project-item-col"
                    v-for="n in 6"
                    :key="n + 100"
                    :span="4">
                    <el-card shadow="hover" class="box-card">
                        <div slot="header" class="clearfix">
                            <span>卡片名称</span>
                            <el-button style="float: right; padding: 3px 0" type="text">删除</el-button>
                        </div>
                        <div class="project-desc">
                            项目描述，这是项目的描述
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <project-form @onSaveFinished="getList" ref="formEdit"></project-form>
        </div>
    </component-container>
</template>

<script>
    import * as projectApi from '../service/project'
    import ProjectForm from './project-form'

    export default {
        name: 'project-list',
        components: {
            ProjectForm
        },
        data () {
            return {
                dataList: []
            }
        },
        mounted () {
            // this.onAdd()
            this.init()
        },
        methods: {
            async init () {
                await this.getList()
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
