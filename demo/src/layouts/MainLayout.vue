<template>
  <q-layout view="HHh LpR fFf">
    <q-header elevated style="background-color: rgba(25,118,210,.65);backdrop-filter: blur(7px)">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <div v-if="$q.screen.width > 500">
          <span style="font-size: 20px;">
            Zhierarchy &nbsp;
          </span>
        </div>

        <q-space/>

        <q-btn flat round @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'brightness_2' : 'brightness_5'"/>

        <div v-if="$q.screen.width > 500">Quasar <span style="font-size: 12px;">v{{ $q.version }}</span></div>

      </q-toolbar>
    </q-header>

    <q-drawer :dark="$q.dark.isActive"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :class="$q.dark.isActive?'':'bg-grey-1'"
    >
      <q-list>
        <q-expansion-item dense style="font-size: 12px;"
                          label="All about Zhierarchy"
                          header-class="text-primary" :expanded-icon="biCaretUp" :expand-icon="biCaretDown"
                          expand-icon-class="text-primary')"
        >
          <q-card class="bg-transparent">
            <q-list>
              <q-item class="text-primary q-ml-md" :active-class="$route.path=='/'?'bg-grey-3':''" to="/" dense clickable>
                <q-item-section>
                  What is Zhierarchy
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-expansion-item>
        <q-expansion-item dense style="font-size: 12px;"
                          label="Developing"
                          header-class="text-primary" :expanded-icon="biCaretUp" :expand-icon="biCaretDown"
                          expand-icon-class="text-primary')"
        >
          <q-card class="bg-transparent">
            <q-item class="text-primary q-ml-md" :active-class="$route.path=='/example-zhierarchy-basic'?'bg-grey-3':''" to="/example-zhierarchy-basic" dense clickable>
              <q-item-section>
                Zhierarchy Basic
              </q-item-section>
            </q-item>
            <q-item class="text-primary q-ml-md" :active-class="$route.path=='/example-zhierarchy-custom'?'bg-grey-3':''" to="/example-zhierarchy-custom" dense clickable>
              <q-item-section>
                Zhierarchy Custom
              </q-item-section>
            </q-item>
            <q-item class="text-primary q-ml-md" :active-class="$route.path=='/example-zhierarchy-slot-demo'?'bg-grey-3':''" to="/example-zhierarchy-slot-demo" dense clickable>
              <q-item-section>
                Zhierarchy Slot Demo
              </q-item-section>
            </q-item>
            <q-item class="text-primary q-ml-md" :active-class="$route.path=='/example-zhierarchy-header-slot-demo'?'bg-grey-3':''" to="/example-zhierarchy-header-slot-demo" dense clickable>
              <q-item-section>
                Zhierarchy Header Slot Demo
              </q-item-section>
            </q-item>
            <q-item class="text-primary q-ml-md" :active-class="$route.path=='/example-zhierarchy-footer-slot-demo'?'bg-grey-3':''" to="/example-zhierarchy-footer-slot-demo" dense clickable>
              <q-item-section>
                Zhierarchy Footer Slot Demo
              </q-item-section>
            </q-item>
            <q-item class="text-primary q-ml-md" :active-class="$route.path=='/example-zhierarchy-footer-demo'?'bg-grey-3':''" to="/example-zhierarchy-footer-demo" dense clickable>
              <q-item-section>
                Zhierarchy Footer Demo
              </q-item-section>
            </q-item>
            <q-item class="text-primary q-ml-md" :active-class="$route.path=='/example-zhierarchy-row-click-demo'?'bg-grey-3':''" to="/example-zhierarchy-row-click-demo" dense clickable>
              <q-item-section>
                Zhierarchy Row Click Demo
              </q-item-section>
            </q-item>
            <q-item class="text-primary q-ml-md" :active-class="$route.path=='/example-zhierarchy-default-expand-all'?'bg-grey-3':''" to="/example-zhierarchy-default-expand-all" dense clickable>
              <q-item-section>
                Zhierarchy Default Expand All
              </q-item-section>
            </q-item>
            <q-item class="text-primary q-ml-md" :active-class="$route.path=='/example-zhierarchy-filter-demo'?'bg-grey-3':''" to="/example-zhierarchy-filter-demo" dense clickable>
              <q-item-section>
                Zhierarchy Filter Demo
              </q-item-section>
            </q-item>
          </q-card>
        </q-expansion-item>
        <q-expansion-item dense style="font-size: 12px;"
                          label="Contributing"
                          header-class="text-primary" :expanded-icon="biCaretUp" :expand-icon="biCaretDown"
                          expand-icon-class="text-primary')"
        >
          <q-card class="bg-transparent">
            <q-item class="text-primary q-ml-md" :active-class="$route.path=='/sponsor'?'bg-grey-3':''" to="/sponsor" dense clickable>
              <q-item-section>
                Sponsor
              </q-item-section>
            </q-item>
          </q-card>
        </q-expansion-item>
        <q-separator/>
        <q-expansion-item dense style="font-size: 12px;"
                          label="Help"
                          header-class="text-primary" :expanded-icon="biCaretUp" :expand-icon="biCaretDown"
                          expand-icon-class="text-primary')"
        >
          <q-card class="bg-transparent">
            <q-item class="text-primary q-ml-md" type="a"
                    @click="openLink('https://github.com/pratik227/quasar-zhierarchy')" dense clickable>
              <q-item-section>
                Github
              </q-item-section>
              <q-item-section side>
                <q-btn type="a" rounded dense size="md" icon="fab fa-github" flat color="primary"></q-btn>
              </q-item-section>
            </q-item>
            <q-item class="text-primary q-ml-md" type="a" @click="openLink('https://twitter.com/pratikPatel_227')" dense
                    clickable>
              <q-item-section>
                Twitter
              </q-item-section>
              <q-item-section side>
                <q-btn type="a" rounded dense size="md" icon="fab fa-twitter" flat color="primary"></q-btn>
              </q-item-section>
            </q-item>
          </q-card>
        </q-expansion-item>
      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer elevated class="glass" style="background-color: #77a2e1">
      <q-toolbar>
        <div class="full-width text-center">This documentation site for Zhierarchy is a work in progress. If you see something missing or inaccurate, please create a PR on the <markdown-link to="https://github.com/pratik227/quasar-zhierarchy" style="color: white;">GitHub repo</markdown-link>.</div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import {defineComponent, ref} from 'vue'
import {biCaretDown, biCaretDownFill, biCaretUp} from '@quasar/extras/bootstrap-icons'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    const $route = useRoute();

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      biCaretDown,
      biCaretUp,
      biCaretDownFill,
      expand: ref(false),
      openLink(href) {
        window.open(href)
      }
    }
  }
})
</script>
