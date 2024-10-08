<script setup lang="ts"></script>

<template>
    <div class="homeContainer">
        <div class="leftContent">
            <div class="name">Erik Holman</div>
            <div class="bio">
                <div class="profilePic">
                    <img src="../image.png" /><br />
                    View My: Pics | Videos
                </div>
                <div class="profileData">
                    <div class="quote">":-)"</div>
                    <div class="demographics">
                        Male<br />
                        Age<br />
                        Location<br />
                        Location<br />
                        Location<br />
                    </div>
                    <div class="lastLogin">Last Login:<br />{date}</div>
                </div>
            </div>
            <div class="contact">
                <table>
                    <tr>
                        <td>Contacting Erik</td>
                    </tr>
                    <tr>
                        <td>Send Email</td>
                        <td>Forward to a Friend</td>
                    </tr>
                    <tr>
                        <td>Add to Friends</td>
                        <td>Add to Favorites</td>
                    </tr>
                    <tr>
                        <td>Instant Message</td>
                        <td>Block User</td>
                    </tr>
                    <tr>
                        <td>Add to Group</td>
                        <td>Rank User</td>
                    </tr>
                </table>
            </div>
            <div class="url">
                <strong>My URL:</strong>
                https://erik.holman.dev
            </div>
        </div>
        <div class="rightContent">
            <dev class="networkStatus"> Erik is looking for a full time remote position. </dev>
        </div>
    </div>
</template>

<style scoped>
.homeContainer {
    display: flex;
    align-items: stretch;
}

.homeContainer .leftContent,
.homeContainer .rightContent {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border: 1px solid red;
    padding: 1em;
}

.homeContainer .leftContent .name,
.homeContainer .leftContent .bio,
.homeContainer .leftContent .contact,
.homeContainer .leftContent .url {
    display: flex;
    flex-direction: row;
    border: 1px solid purple;
}

.homeContainer .leftContent .bio .profilePic {
    margin-right: 5em;
}
.homeContainer .leftContent .bio .profileData {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    font-size: smaller;
}

.homeContainer .leftContent .bio img {
    height: 180px;
    width: 180px;
    border: 1px solid grey;
}

.homeContainer .leftContent .contact {
    flex-direction: column;
}

.homeContainer .leftContent .contact table {
    border: 1px;
}

.homeContainer .leftContent .url {
    padding: 1em;
    flex-direction: column;
}
</style>
