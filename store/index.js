export const state = () => ({
  scrollTop: 0,
  clientWidth: 0,
  isFixed: false,
  content: {}
})

export const mutations = {
  scroll(state, scrollTop) {
    state.scrollTop = scrollTop
  },
  resize(state, clientWidth) {
    state.clientWidth = clientWidth
  },
  fix(state, isFixed) {
    state.isFixed = isFixed
  },
  loadContent(state, content) {
    state.content = content
  }
}