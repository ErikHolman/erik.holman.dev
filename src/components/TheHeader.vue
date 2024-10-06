<script setup lang="ts">
// import { defineProps } from 'vue'
const props = defineProps(['pageName'])
</script>

<template>
    <div>
        <div class="header">
            <div class="links">
                <a href="/"> erik.holman.dev</a> | {{ props.pageName }}
                <!-- erik.holman.dev should be a router link  home -->
                <!-- pageName is a variable that will update current page -->
            </div>
            <form id="search" class="search">
                <fieldset>
                    <div class="searchItem">
                        <label for="globalSearch">The Web </label>
                        <input
                            name="searchType"
                            type="radio"
                            id="globalSearch"
                            class="radio"
                            value="global"
                            checked
                        />
                    </div>
                    <div class="searchItem">
                        <label for="localSearch">erik.holman.dev </label>
                        <input
                            name="searchType"
                            type="radio"
                            id="localSearch"
                            class="radio"
                            value="local"
                        />
                    </div>
                </fieldset>
                <input
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    value=""
                    placeholder="let's find some shit"
                />
                <button type="submit">Search</button>
            </form>
            <div class="manage">
                <a href="/help">Help</a> | <a href="https://vuejs.org">Sign Out</a>
            </div>
            <!-- 'Help' will lead to a help page tbd, but related to erik.holman.dev -->
            <!-- 'Sign Out' will lead VueJS homepage since this site is Vue -->
        </div>
        <div class="subheader">
            <li>Home</li>
            <span class="spacer">|</span>
            <li>Browse</li>
            <span class="spacer">|</span>
            <li>Search</li>
            <span class="spacer">|</span>
            <li>Invite</li>
            <span class="spacer">|</span>
            <li>Film</li>
            <span class="spacer">|</span>
            <li>Mail</li>
            <span class="spacer">|</span>
            <li>Blog</li>
            <span class="spacer">|</span>
            <li>Favorites</li>
            <span class="spacer">|</span>
            <li>Forum</li>
            <span class="spacer">|</span>
            <li>Groups</li>
            <span class="spacer">|</span>
            <li>Events</li>
            <span class="spacer">|</span>
            <li>Videos</li>
            <span class="spacer">|</span>
            <li>Music</li>
            <span class="spacer">|</span>
            <li>Comedy</li>
            <span class="spacer">|</span>
            <li>Classifieds</li>
        </div>
    </div>
</template>

<style scoped>
.subheader {
    background-color: rgb(113, 151, 199);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 1.5em;
    color: white;
    flex-direction: row;
}

.subheader li {
    list-style-type: none;
    font-size: smaller;
}

.subheader .spacer {
    color: black;
    margin: 0, 0.25em;
    font-size: smaller;
}
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80vw;
    height: 3em;
    color: white;
    background-color: rgb(0, 0, 255);
    border-radius: 0.25em 0.25em 0 0;
    padding: 0.5em;
    align-items: center;
}

form {
    display: flex;
    flex-direction: row;
    border: none;
    width: 50%;
    align-items: center;
}

form fieldset {
    border: none;
    display: flex;
    flex-direction: row;
}

form fieldset .searchItem,
form button {
    margin-left: 1em;
}

form #searchTerm {
    height: 2.25em;
}

form button {
    height: 2.6em;
    background-color: white;
}

@media (min-width: 1024px) {
}
</style>
