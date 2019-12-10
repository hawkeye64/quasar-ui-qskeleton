<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="q-pa-md col-12-sm col-8-md col-6-lg" style="max-width: 800px; width: 100%;">
        <q-skeleton />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton rtl />
        <q-separator color="blue" class="q-mb-md" />

        <q-skeleton-bullet-list />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton-bullet-list rtl />
        <q-separator color="blue" class="q-mb-md" />

        <q-skeleton-code />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton-code rtl />
        <q-separator color="blue" class="q-mb-md" />

        <q-skeleton-facebook />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton-facebook rtl />
        <q-separator color="blue" class="q-mb-md" />

        <q-skeleton-instagram />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton-instagram rtl />
        <q-separator color="blue" class="q-mb-md" />

        <q-skeleton-linkedin />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton-linkedin rtl />
        <q-separator color="blue" class="q-mb-md" />

        <q-skeleton-table />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton-table rtl />
        <q-separator color="blue" class="q-mb-md" />

        <q-skeleton-twitch />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton-twitch rtl />
        <q-separator color="blue" class="q-mb-md" />

        <h4>Customizing</h4>
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton :width="computedWidth" :height="computedHeight">
          <template v-for="r in rows">
            <template v-for="c in columns">
              <rect :key="r + '_' + c" :x="xPos(c)" :y="yPos(r)" rx="3" ry="3" :width="90" :height="90" />
            </template>
          </template>
        </q-skeleton>
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton :width="computedWidth" :height="computedHeight" style="--skeleton-primary-color: #FF0000; --skeleton-secondary-color: #00FF00">
          <template v-for="r in rows">
            <template v-for="c in columns">
              <rect :key="r + '_' + c" :x="xPos(c)" :y="yPos(r)" rx="3" ry="3" :width="90" :height="90" />
            </template>
          </template>
        </q-skeleton>
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton rtl :width="computedWidth" :height="computedHeight" style="--skeleton-primary-color: #FF0000; --skeleton-secondary-color: #00FF00">
          <template v-for="r in rows">
            <template v-for="c in columns">
              <rect :key="r + '_' + c" :x="xPos(c)" :y="yPos(r)" rx="3" ry="3" :width="90" :height="90" />
            </template>
          </template>
        </q-skeleton>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      rows: 5,
      columns: 5
    }
  },

  computed: {
    computedWidth () {
      return this.rows * 100
    },
    computedHeight () {
      return this.columns * 100 - 10
    }
  },

  methods: {
    xPos (column) {
      return 5 + ((column - 1) * 100)
    },
    yPos (row) {
      return (row - 1) * 100
    }
  }
}
</script>
