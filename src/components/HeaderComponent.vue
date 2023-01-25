<template>
    <header>
        <div id="mainNavigation" class="">
            <nav role="navigation">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="search">
                        <form>
                            <input type="search" placeholder="Search...">
                        </form>
                    </div>
                    <div class="py-3 text-center border-bottom">
                        <img src="../assets/image/logo.png" alt="" class="invert">
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <a href="#"><i class="fa-solid fa-cart-shopping fa-xl mx-2" style="color: black;"></i></a>
                        <a href="#"><i class="fa-regular fa-user fa-xl" style="color: black;"></i></a>
                    </div>
                </div>
            </nav>
            <div class="navbar-expand-md py-3">
                <div class="d-flex justify-content-around align-items-center text-center" id="navbarNavDropdown">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item " v-for="(item, index) in menuItems" :key="index">
                            <router-link :to="{ name: item.routeName }" class="nav-link">{{ item.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>        
    </header>    
</template>


<script>
    export default {
        name: 'AppHeader',
        data(){
            return {
                menuItems: [
                    {
                        label: 'Home',
                        routeName: ''
                    },
                    {
                        label: 'Makeup',
                        routeName: ''
                    },
                    {
                        label: 'Shop Our Sets',
                        routeName: ''
                    },
                    {
                        label: 'Find Your Shade',
                        routeName: ''
                    },
                    {
                        label: 'Sale',
                        routeName: ''
                    },
                    {
                        label: 'Explore',
                        routeName: ''
                    }
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>
#mainNavigation {
    // position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 123;
        // padding-bottom: 20px;

    a {
        font-family: 'Cabin', sans-serif;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4)}
        .nav-item {
            min-width: 12vw;

            a {
                color: #000;
            }

            a:hover {
                background-color: #000;
                color: #fff;
            }
        }
    #navbarNavDropdown.show .navbar-nav {
        background: #000;
        padding: 12px;
    }
}


/* SEARCH BAR */
.search input[type=search]::-webkit-search-decoration,
.search input[type=search]::-webkit-search-cancel-button {
    display: none;
}

.search input[type=search] {
    outline: none;
    box-sizing: content-box;
    font-size: 100%;
    background: transparent url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzOSAxMzkiIGhlaWdodD0iMTM5cHgiIGlkPSJGaW5kIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMzkgMTM5IiB3aWR0aD0iMTM5cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0xMjcuNTU4LDExMS45NjFMMTAwLjI0OSw4NC42NWM0LjY0LTcuMzg3LDcuMzMzLTE2LjExOCw3LjMzMy0yNS40ODhjMC0yNi41MDktMjEuNDktNDcuOTk2LTQ3Ljk5OC00Ny45OTYgIGMtMjYuNTA4LDAtNDcuOTk2LDIxLjQ4Ny00Ny45OTYsNDcuOTk2YzAsMjYuNTEsMjEuNDg3LDQ3Ljk5NSw0Ny45OTYsNDcuOTk1YzEwLjE5NywwLDE5LjY0Mi0zLjE4OCwyNy40MTQtOC42MDVsMjYuOTg0LDI2Ljk4NiAgYzEuODc1LDEuODczLDQuMzMzLDIuODA2LDYuNzg4LDIuODA2YzIuNDU4LDAsNC45MTMtMC45MzMsNi43OTEtMi44MDZDMTMxLjMwOCwxMjEuNzg3LDEzMS4zMDgsMTE1LjcxMSwxMjcuNTU4LDExMS45NjF6ICAgTTU5LjU4NCw5MS42MDdjLTE3LjkxNywwLTMyLjQ0My0xNC41MjUtMzIuNDQzLTMyLjQ0M1M0MS42NjcsMjYuNzIsNTkuNTg0LDI2LjcyYzE3LjkxOCwwLDMyLjQ0MywxNC41MjYsMzIuNDQzLDMyLjQ0NCAgUzc3LjUwMiw5MS42MDcsNTkuNTg0LDkxLjYwN3oiLz48L3N2Zz4=') no-repeat 0 center;

    background-size: 25px;
    border: none;
    border-bottom: 3px solid transparent;
    color: transparent;
    padding: 10px;
    width: 10px;
    margin: 10px 0;
    cursor: pointer;
    z-index: 5;
    transition: all .5s;
}

.search input[type=search]:focus {
    width: 300px;
    padding-left: 32px;
    background: none;
    border-bottom: 3px solid #333;
    color: #333;
    cursor: auto;
}

.search input[type=search]:hover {
    border-bottom: 3px solid #333;
}

input::-webkit-input-placeholder {
    color: transparent;
}

input:focus::-webkit-input-placeholder {
    color: #333;
}
</style>