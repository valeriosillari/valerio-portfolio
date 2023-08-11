<template>
    <div class="b-page-privacy-policy">
        <div class="container">
            <h1>
                {{ props.pageTitle }}
            </h1>

            <h2>The boring (but very important) part.</h2>

            <p>Last updated: August 01, 2023</p>

            <p>
                Here some info about data I could collect by you and third-part
                services I use (and so how <em>they</em> could collect data
                about you)
            </p>

            <h3>Do I collect any data about you?</h3>

            <p>
                No. At the moment I don't use any tracking and analytics scripts
                or code to collect and detect any info from you.
            </p>

            <p>
                Maybe in the future I will implement some of them, but for now
                nothing.
            </p>

            <h3>Do I use cookies?</h3>

            <p>No.</p>

            <h3>Do I disclose any information to outside parties?</h3>

            <p>
                I do not sell, trade or transfer to outside parties any
                information. This does not include trusted third parties who
                assist in operating this website, so long as those parties agree
                to keep this information confidential. No personally
                identifiable visitor information may be provided to other
                parties for marketing, advertising, or other uses.
            </p>

            <h4>Which third-part service am I using on this website?</h4>

            <ul>
                <li>
                    <h5>Vercel</h5>
                    <p>I use Vercel to host (and deploy) this website.</p>
                    <p>
                        Here all info about their&nbsp;
                        <AtomsLinkExternal
                            url="https://vercel.com/legal/privacy-policy"
                            text="privacy policy"
                        />
                    </p>
                </li>

                <li>
                    <h5>Google Fonts</h5>
                    <p>
                        I use Google Fonts to get very nice text and typography.
                    </p>
                    <p>
                        Here all info about their&nbsp;
                        <AtomsLinkExternal
                            url="https://developers.google.com/fonts/faq/privacy?hl=en#:~:text=Fonts%20Web%20API%3F-,What%20does%20using%20the%20Google%20Fonts%20Web%20API%20mean%20for,not%20set%20or%20log%20cookies."
                            text="privacy policy"
                        />
                    </p>
                </li>
            </ul>

            <h3>Questions?</h3>
            <p>
                If you have any questions about these Terms, you may contact me
                at one of my social profiles, or my&nbsp;
                <AtomsLinkEmail title="My email for further info/questions" />
                .
            </p>

            <AtomsButtonLink
                to="/"
                text="Back to the home page"
                classnames="is-button-privacy-policy"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const props = defineProps({
    pageTitle: {
        type: String,
        default: 'Privacy Policy',
    },
})

useHead({
    title: `${props.pageTitle} | ${runtimeConfig.public.metaHeadDefaultTitleShort}`,
    meta: [
        {
            name: 'description',
            content: `${props.pageTitle} Page | ${runtimeConfig.public.metaHeadDefaultTitleShort}`,
        },
    ],
})
</script>

<style lang="scss">
.b-page-privacy-policy {
    padding-top: $space_06;
    padding-bottom: $space_06;

    .is-button-privacy-policy {
        margin-top: $space_03;
    }
}
</style>
