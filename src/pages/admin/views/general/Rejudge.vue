<template>
    <div class="flex-container">
        <ul class="filter">
            <li>
                <Input v-model="formFilter.username" placeholder="Search Author" @on-enter="handleQueryChange"/>
            </li>
            <li>
                <Input v-model="formFilter.username" placeholder="Search Author" @on-enter="handleQueryChange"/>
            </li>
            <li>
                <Button type="info" icon="refresh" @click="getSubmissions">{{$t('m.Refresh')}}</Button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
      name: 'Rejudge'
    }
</script>

<style scoped lang="less">
    .ivu-btn-text {
        color: #57a3f3;
    }

    .flex-container {
        #main {
            flex: auto;
            margin-right: 18px;
            .filter {
                margin-right: -10px;
            }
        }
        #contest-menu {
            flex: none;
            width: 210px;
        }
    }
</style>
