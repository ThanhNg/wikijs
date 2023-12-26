<template lang="pug">
  v-list.radius-0(dense, :nav='nav')
      template(v-for='item in items')
        template(v-if='item.isFolder && item.depth == 1', no-action, active)
          v-divider.my-2
          v-subheader.pl-4 {{ item.title }}
          tree-list(:items='item.children', :nav='false')
        v-list-group(v-else-if='item.isFolder', v-model='item.active', no-action, to="/dev")
          v-list-item(slot='activator')
            v-list-item-avatar(size='24')
              v-icon mdi-folder
            v-list-item-title {{item.title}}
          tree-list(:items='item.children', :nav='false')
        v-list-item(v-else, v-model='item.active', :href='`/` + item.locale + `/` + item.path', color='primary')
          v-list-item-avatar(size='24')
            v-icon(v-if='item.path == "home"') mdi-home
            v-icon(v-else) mdi-text-box
          v-list-item-title {{ item.title }}
</template>
<script>
export default {
  name: 'tree-list',
  props: ['items', 'nav']
}
</script>