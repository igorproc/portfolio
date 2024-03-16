<template>
  <div class="ui-card">
    <div class="ui-card__image-container card-image">
      <img :alt="title" :src="imageUrl" class="card-image__image">
      <div class="card-image__expand">
        <slot name="image-expand" />
      </div>
    </div>

    <div class="ui-card__content">
      <div class="ui-card__content-top card-top-content">
        <h3 class="card-top-content__title">
          {{ title }}
        </h3>
        <p class="card-top-content__subtitle">
          {{ subtitle }}
        </p>
      </div>
      <span class="ui-card__content-description">
        {{ description }}
      </span>
      <div class="ui-card__content-actions card-actions">
        <a :href="url" target="_blank" class="card-actions__see-more">
          <span class="card-actions__see-more-label">
            {{ buttonLabel }}
          </span>
          <div class="card-actions__see-more--additional" :class="localeClass" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string,
  subtitle: string,
  imageUrl: string,
  description: string,
  url: string,
  buttonLabel: string,
}

const props = defineProps<Props>()
const {
  title,
  subtitle,
  description,
  imageUrl,
  url,
} = toRefs(props)

const { locale } = useI18n()

const localeClass = computed(() => `--locale-${locale.value}`)
</script>

<style lang="scss" scoped>
.ui-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rem;

  .ui-card__image-container {
    position: relative;

    .card-image {
      &__image {
        object-fit: cover;
        width: 100%;
      }

      &__expand {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 6rem 2rem;
      }
    }
  }

  &__content {
    .ui-card__content-top {
      display: flex;
      align-items: flex-end;
      gap: 12rem;
      margin-bottom: 12rem;

      .card-top-content__title {
        color: map-get($theme-palette, 'primary');
        font-size: 32rem;
        line-height: 1;
      }

      .card-top-content__subtitle {
        color: map-get($theme-palette, 'primary');
        font-weight: 800;
      }
    }

    &-description {
      color: map-get($theme-palette, 'primary');
      font-size: 14rem;
    }

    &-actions {
      margin-top: 12rem;

      .card-actions__see-more {
        text-decoration: unset;

        &-label {
          color: map-get($theme-palette, 'primary');
          font-size: 18rem;
          font-weight: 600;
        }

        &--additional {
          height: 2rem;
          background: map-get($theme-palette, 'primary');

          &.--locale-en {
            width: 9%;
          }

          &.--locale-ru {
            width: 33.5%;
          }
        }
      }
    }
  }

  @media #{map-get($display-rules, 'sm')} {
    flex-direction: row;

    .ui-card__image-container {
      .card-image {
        &__image {
          width: 250rem;
        }
      }
    }

    &__content-actions {
      .card-actions__see-more {
        &--additional {
          &.--locale-en {
            width: 6.4%;
          }

          &.--locale-ru {
            width: 23%;
          }
        }
      }
    }
  }

  @media #{map-get($display-rules, 'md')} {
    width: 567rem;
    height: 233rem;

    .ui-card__image-container {
      .card-image {
        &__image {
          width: 233rem;
          height: 233rem;
        }
      }
    }

    &__content-top {
      .card-top-content {
        display: flex;
      }
    }

    &__description {
      font-size: 12rem;
    }

    &__content-actions {
      .card-actions__see-more {
        &--additional {
          &.--locale-en {
            width: 9%;
          }

          &.--locale-ru {
            width: 32.5%;
          }
        }
      }
    }
  }
}
</style>
