<script setup lang="ts"></script>

<template>
    <div class="theHeader">
        <div class="header">
            <div class="links">
                <RouterLink to="/">erik.holman.dev</RouterLink> | {{ $route.name }}
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
                <RouterLink to="/help">Help</RouterLink> |
                <a
                    title="I'm built with Vue, click here to learn about it!"
                    href="https://vuejs.org"
                    target="_blank"
                    >Sign Out</a
                >
            </div>
            <!-- 'Help' will lead to a help page tbd, but related to erik.holman.dev -->
        </div>
        <div class="subheader">
            <li><RouterLink to="/">Home</RouterLink></li>
            <span class="spacer">|</span>
            <li><RouterLink to="/browse">Browse</RouterLink></li>
            <span class="spacer">|</span>
            <li><RouterLink to="/search">Search</RouterLink></li>
            <span class="spacer">|</span>
            <li><RouterLink to="/invite">Invite</RouterLink></li>
            <span class="spacer">|</span>
            <li><RouterLink to="/film">Film</RouterLink></li>
            <span class="spacer">|</span>
            <li><RouterLink to="/mail">Mail</RouterLink></li>
            <span class="spacer">|</span>
            <li><RouterLink to="/blog">Blog</RouterLink></li>
            <span class="spacer">|</span>
            <li><RouterLink to="/favorites">Favorites</RouterLink></li>
            <span class="spacer">|</span>
            <li><RouterLink to="/forum">Forum</RouterLink></li>
            <span class="spacer">|</span>
            <li><RouterLink to="/groups">Groups</RouterLink></li>
            <span class="spacer">|</span>
            <li><RouterLink to="/events">Events</RouterLink></li>
            <span class="spacer">|</span>
            <li><RouterLink to="/videos">Videos</RouterLink></li>
            <span class="spacer">|</span>
            <li><RouterLink to="/music">Music</RouterLink></li>
            <span class="spacer">|</span>
            <li><RouterLink to="/comedy">Comedy</RouterLink></li>
            <span class="spacer">|</span>
            <li><RouterLink to="/classifieds">Classifieds</RouterLink></li>
        </div>
    </div>
</template>

<style scoped>
.theHeader {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 100%;

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 3em;
        color: white;
        background-color: rgb(0, 0, 255);
        border-radius: 0.25em 0.25em 0 0;
        padding: 0.5em;
        align-items: center;

        .links {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 25%;
        }

        form {
            display: flex;
            flex-direction: row;
            border: none;
            width: 50%;
            align-items: center;

            fieldset {
                border: none;
                display: flex;
                flex-direction: row;
            }

            .searchItem,
            button {
                margin-left: 1em;
            }

            #searchTerm {
                height: 2.25em;
            }
            button {
                height: 2.6em;
                background-color: white;
            }
        }
    }

    .subheader {
        background-color: rgb(113, 151, 199);
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 1.5em;
        color: white;
        flex-direction: row;

        .spacer {
            color: black;
            margin: 0, 0.25em;
            font-size: smaller;
            cursor: pointer;
        }

        li {
            list-style-type: none;
            font-size: smaller;

            a {
                color: white;
            }
        }
    }
}
</style>
