<script setup lang="ts">
const todayDate = new Date()
const dayFormat = todayDate.toLocaleDateString()
</script>

<template>
    <div class="homeContainer">
        <div class="leftContent">
            <div class="name"><h2>Erik Holman</h2></div>
            <div class="bio">
                <div>
                    <div class="profilePic border"></div>
                    <div class="profileMedia">
                        View: <a href="https://images.google.com" target="_blank">Pics</a> |
                        <a href="https://youtube.com" target="_blank">Videos</a>
                    </div>
                </div>
                <div class="profileData">
                    <div class="quote">"[inspirational quote generator]"</div>
                    <div class="demographics">
                        Old enough to have actually used this<br />
                        Greater Seattle Area<br />
                    </div>
                    <div class="lastLogin">Last Login:<br />{{ dayFormat }}</div>
                </div>
            </div>
            <div class="contact border">
                <table>
                    <thead>
                        <tr>
                            <th colspan="2" align="left">
                                <div>Contacting Erik</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="socials email">
                                <a
                                    href="mailto:erik@holman.dev?subject=I%20Found%20Your%20Portfolio!"
                                    >Send Message</a
                                >
                            </td>
                            <td class="socials forward" title="Please clap.">
                                <a href="mailto:?subject=Look%20At%20This%20Portfolio!"
                                    >Forward to a Friend</a
                                >
                            </td>
                        </tr>
                        <tr>
                            <td class="socials addFriend" title="If not friend, why friend shaped?">
                                <a href="https://github.com/erikholman" target="_blank"
                                    >Add to Friends</a
                                >
                            </td>
                            <td
                                class="socials favorite"
                                title="Press CMD + D to bookmark this page"
                            >
                                <a href="https://github.com/erikholman" target="_blank"
                                    >Add to Favorites</a
                                >
                            </td>
                        </tr>
                        <tr>
                            <td class="socials instant" title="*AOL login noises*">
                                <a href="https://github.com/erikholman" target="_blank"
                                    >Instant Message</a
                                >
                            </td>
                            <td class="socials block" title="Lose this URL...">
                                <a href="https://github.com/erikholman" target="_blank"
                                    >Block User</a
                                >
                            </td>
                        </tr>
                        <tr>
                            <td class="socials group" title="Send me an invite?">
                                <a href="https://github.com/erikholman" target="_blank"
                                    >Add to Group</a
                                >
                            </td>
                            <td class="socials rank" title="'Top 8' or bust">
                                <a href="https://github.com/erikholman" target="_blank"
                                    >Rank User</a
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="url border">
                <div class="heading">My URL:</div>
                <a
                    href="https://github.com/erikholman"
                    class="socials urlIcon"
                    title="Find the sauce"
                    target="_blank"
                    >Erik @ GitHub</a
                >
            </div>
        </div>
        <div class="rightContent">
            <dev class="networkStatus border"
                ><h2>Erik is looking for a full time remote position.</h2></dev
            >
            <div class="blogArea">
                <div>Erik's Latest Blog Entry [Subscribe to this Blog]</div>
            </div>
            <div class="blurbs">
                <div class="heading">Erik's Blurbs</div>
                <div class="about">
                    <span class="heading">About me:</span>
                    <span class="content"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/_variables.scss';
@import '../styles/_utils.scss';

.homeContainer {
    display: flex;
    align-items: stretch;
    width: 100%;

    .leftContent,
    .rightContent {
        display: flex;
        flex-direction: column;
        padding: 1em;
    }

    .leftContent {
        width: 40%;

        .name,
        .bio,
        .contact,
        .url {
            display: flex;
            flex-direction: row;
        }

        .bio,
        .name {
            padding-bottom: 1em;
        }

        .bio {
            .profileMedia {
                margin-top: 1em;
                text-align: center;
                a {
                    background-color: transparent;
                    text-align: center;
                    color: $darkBlue;
                }
                a:hover {
                    background-color: $darkBack;
                    color: $lightGrey;
                    font-weight: 500;
                    width: 100%;
                }
            }
            .profilePic {
                height: 160px;
                width: 200px;
                background: url('../assets/Erik_Profile.png') no-repeat center;
                background-size: cover;
            }
            .profileData {
                margin-left: 3em;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-around;
                font-size: smaller;
            }
        }

        .contact {
            flex-direction: column;

            table {
                thead {
                    background-color: $lightBlue;
                    color: $white;

                    th {
                        padding-left: 0.5em;
                        tr {
                            div {
                                font-weight: bolder !important;
                            }
                        }
                    }
                }

                tbody {
                    tr {
                        td {
                            width: 50%;
                        }

                        td.socials {
                            a {
                                background-color: transparent;
                                padding-left: 0.5em;
                                text-align: left;
                                color: black;
                                display: flex;
                            }

                            a:hover {
                                background-color: $darkBack;
                                color: $lightGrey;
                                font-weight: 500;
                                width: 100%;
                            }
                        }

                        td.forward {
                            a::before {
                                content: '🔗';
                                padding-right: 0.25em;
                            }
                        }
                    }
                }
            }
        }

        .url {
            margin: 1em 0;
            padding: 0.25em;
            width: 100%;
            flex-direction: column;

            .heading {
                font-weight: 800;
            }

            a::before {
                content: url('../assets/github-mark_sm.png');
                padding-right: 0.25em;
                padding-top: 0.25em;
            }

            a {
                display: flex;
                flex-direction: row;
                align-items: center;
                color: black;
            }
            a:hover {
                background-color: $darkBack;
                color: $lightGrey;
                font-weight: 500;
                width: 100%;
            }
        }
    }

    .rightContent {
        flex-grow: 2;
        .networkStatus {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 20%;
        }
        .blogArea {
        }
        .blurbs {
        }
    }
}
</style>
