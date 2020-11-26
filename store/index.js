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

const parseContent = (text) => {
  const sections = text.split("\n\n")
  const contents = sections.map(section => `<p>${section.split("\n").join("</p><p>")}</p>`)
  return `<section>${contents.join("</section><section>")}</section>`
}

export const getters = {
  topImage(state) {
    return state.content.fields.heroImage.fields.file.url
  },
  firstMessage(state) {
    return parseContent(state.content.fields.firstMessage)
  }
}