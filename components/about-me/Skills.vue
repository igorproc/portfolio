<template>
  <div class="app-skills-list">
    <ui-message
      v-for="skill in skillsList"
      :key="skill.id"
      class="app-skills-list__group group-item"
    >
      <h4 class="group-item__title">
        {{ skill.label }}
      </h4>

      <div class="group-item__experience-list experience-list">
        <div
          v-for="experienceItem in skill.items"
          :key="experienceItem.id"
          class="experience-list__item"
        >
          <p class="experience-list__item-label">
            {{ experienceItem.label }}
          </p>
        </div>
      </div>
    </ui-message>
  </div>
</template>

<script setup lang="ts">
// Utils
import { generateId } from '~/utils/generateId'

const { t } = useI18n()

const skillsList = [
  {
    id: generateId(),
    label: t('aboutMe.skillsList.first.title'),
    items: [
      {
        id: generateId(),
        label: 'S3 object store',
      },
      {
        id: generateId(),
        label: 'GraphQl',
      },
      {
        id: generateId(),
        label: 'MySql Database',
      },
      {
        id: generateId(),
        label: 'Figma',
      },
      {
        id: generateId(),
        label: 'CSS Preprocessors',
      },
      {
        id: generateId(),
        label: 'Coding PHP & Laravel',
      },
    ],
  },
  {
    id: generateId(),
    label: t('aboutMe.skillsList.second.title'),
    items: [
      {
        id: generateId(),
        label: 'Build Architecture',
      },
      {
        id: generateId(),
        label: 'Seo friendly website development',
      },
      {
        id: generateId(),
        label: 'Coding JavaScript',
      },
      {
        id: generateId(),
        label: 'Coding TypeScript',
      },
      {
        id: generateId(),
        label: 'Coding HTML5',
      },
      {
        id: generateId(),
        label: 'Coding CSS3',
      },
    ],
  },
  {
    id: generateId(),
    label: t('aboutMe.skillsList.third.title'),
    items: [
      {
        id: generateId(),
        label: 'Nuxt.js',
      },
      {
        id: generateId(),
        label: 'Node js intermediate',
      },
      {
        id: generateId(),
        label: 'MySql Database',
      },
      {
        id: generateId(),
        label: 'Figma',
      },
      {
        id: generateId(),
        label: 'CSS Preprocessors',
      },
      {
        id: generateId(),
        label: 'Coding PHP & Laravel',
      },
    ],
  },
]
</script>

<style lang="scss">
.app-skills-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16rem;

  &__group {
    width: 100%;

    .group-item {
      &__title {
        color: map-get($theme-palette, 'primary');
        font-weight: 800;
        font-size: 18rem;
      }

      &__experience-list {
        margin-top: 18rem;

        .experience-list__item-label {
          margin-top: 8rem;
          color: map-get($theme-palette, 'primary');
          font-size: 16rem;
          font-weight: bold;
        }
      }
    }
  }

  @media #{map-get($display-rules, 'sm')} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    &__group {
      width: 48%;
      height: 220rem;

      .group-item {
        &__title {
          font-size: 16rem;
        }

        &__experience-list {
          margin-top: 12rem;

          .experience-list__item-label {
            font-size: 14rem;
          }
        }
      }
    }
  }

  @media #{map-get($display-rules, 'md')} {
    &__group {
      width: 32%;
      height: 270rem;
      align-items: flex-start !important;
    }
  }

  @media #{map-get($display-rules, 'lg')} {
    &__group {
      .group-item {
        &__title {
          font-size: 18rem;
        }

        &__experience-list {
          margin-top: 18rem;

          .experience-list__item-label {
            font-size: 16rem;
          }
        }
      }
    }
  }

  @media #{map-get($display-rules, 'xl')} {
    &__group {
      height: 250rem;
    }
  }
}
</style>
