import noPhoto from "@/assets/images/no_photo.png"

export default {
  data() {
    return {
      noPhoto
    }
  },
  methods: {
    parseEyecatch(data) {
      return data ? data.fields.file.url : this.noPhoto;
    },
  }
}