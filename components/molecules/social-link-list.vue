<template>
    <div :class="['b-social-link-list', props.classnames]">
        <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="blank"
            class="social-link-item"
        >
            <font-awesome-icon
                :icon="['fab', link.icon]"
                class="social-link-icon"
            />
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
    classnames: {
        type: String,
        default: null,
    },
})

// https://dev.to/ceceliacreates/using-fontawesome-icons-with-nuxt-3-50cd
const socialLinks = [
    {
        name: 'Twitter',
        url: 'https://twitter.com/stellavalerio/',
        icon: 'twitter',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/valeriosillari/',
        icon: 'linkedin',
    },
    {
        name: 'GitHub',
        url: 'https://github.com/valeriosillari/',
        icon: 'github',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/stellavalerio/',
        icon: 'instagram',
    },
]
</script>

<style lang="scss">
.b-social-link-list {
    &.is-section-contact {
        .social-link-item {
            margin: $space_02 $space_01;
        }

        .social-link-icon {
            width: 44px;
            height: 44px;
        }
    }

    // footer component
    &.is-footer {
        .social-link-item {
            margin-left: $space_01;
            color: $color_footer_link;

            &:hover {
                color: $color_footer_link_hvr;
            }

            &:first-child {
                margin-left: $space_00;
            }
        }

        .social-link-icon {
            width: 24px;
            height: 24px;
        }
    }
}

@include breakpoint($breakpoint_sm) {
    .b-social-link-list {
        &.is-section-contact {
            .social-link-item {
                margin: $space_02;
            }
        }
        &.is-footer {
            text-align: right;
        }
    }
}
</style>
