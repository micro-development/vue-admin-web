<template>
    <it-dialog-container
        :native='dialogInfo'
        ref="itDialogContainer">
        <it-project-form
            :form-data='formData'
            :label-config='labelConfig'
            ref="itProjectForm"></it-project-form>
        <it-dialog-footer
            slot="it-dialog-footer"
            :btn-list="btnList"
            @onCancel="onCancel"
            @onSure="onSure"></it-dialog-footer>
    </it-dialog-container>
</template>

<script>
    import { add, update } from '../service/project.js'
    const modelField = ['uuid', 'name', 'description', 'color', 'permission']
    const modelData = () => {
        return {
            uuid: '',
            name: '',
            description: '',
            color: '',
            permission: 1
        }
    }

    export default {
        name: 'ci-project-form-edit',
        data () {
            return {
                dialogInfo: {
                    title: '新增项目'
                },
                labelConfig: {
                    name: '项目名称',
                    description: '项目描述',
                    color: '项目背景',
                    permission: '项目权限'
                },
                formData: modelData(),
                btnList: [
                    {
                        name: '保存',
                        type: 'primary',
                        method: 'onSure'
                    },
                    {
                        name: '取消',
                        event: 'close',
                        method: 'onCancel'
                    }
                ]
            }
        },
        props: {
            detail: {}
        },
        methods: {
            onOpenDialog () {
                this.$log.echo(this.detail, 'project/form-edit.vue onOpenDialog model', 'log')
                this.formData = modelData()
                this.$refs.itDialogContainer.show()
                if (this.detail) {
                    modelField.forEach((key) => {
                        this.formData[key] = this.detail[key]
                    })
                }
            },
            async onSure () {
                // this.$message.info('点击确定关闭弹框')
                this.$log.echo(this.formData, 'ci-project form-edit onSure this.formData', 'log')
                await this.onSave()
                // this.$refs.itDialogContainer.hide()
            },
            async onSave () {
                const formData = this.formData.uuid ? update(this.formData) : add(this.formData)
                const data = await this.$http.fetch(formData)
                if (data) {
                    this.$message.success('操作成功')
                    this.formData = modelData()
                    this.$refs.itDialogContainer.hide()
                    this.$emit('onSaveFinished')
                }
            },
            onCancel () {
                // this.$message.info('点击取消按钮')
                this.$refs.itDialogContainer.hide()
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
