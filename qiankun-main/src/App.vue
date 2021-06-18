<template>
    <div>
        <div id="nav">
            <!-- 主应用可以有自己的路由-->
            <router-link class="link" to="/1">About</router-link>
            <!-- 可以引用其它子应用  -->
            <router-link class="link" to="/sub-vue">vue应用</router-link>
            <router-link class="link" to="/sub-react">react应用</router-link>
        </div>
        <div id="subContainer"></div>
        <router-view />
    </div>
</template>
<script>

</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
.link {
    margin-left: 10px;
}
</style>
