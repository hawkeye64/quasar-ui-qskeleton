<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="q-pa-md col-12-sm col-8-md col-6-lg" style="max-width: 800px; width: 100%;">
        <q-skeleton />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton rtl />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton view="bullet-list" />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton view="bullet-list" rtl />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton view="code" />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton view="code" rtl />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton view="facebook" />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton view="facebook" rtl />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton view="instagram" />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton view="instagram" rtl />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton view="linkedin" />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton view="linkedin" rtl />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton view="table" />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton view="table" rtl />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton view="twitch" />
        <q-separator color="blue" class="q-mb-md" />
        <q-skeleton view="twitch" rtl />
        <q-separator color="blue" class="q-mb-md" />
        <h1>Customizing</h1>
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

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
