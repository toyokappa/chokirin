<template lang="pug">
.store-info
  .container
    .row
      .offset-lg-1.col-lg-10
        .map(ref="map")
    .row
      .offset-lg-1.col-lg-5.col-sm-6
        .info
          .label
            fa.mr-2(:icon="faMapMarkerAlt")
            span 住所
          .item
            .unit 〒371-0013
            a.value(href="https://goo.gl/maps/7Fw1MaHFiRv4dzG9A", target="new") 群馬県前橋市片貝町4丁目17-24-17-2 オペラハウス101
          .excuse 住所をクリックでGoogleMapが表示されます
        .info
          .label
            fa.mr-2(:icon="faPhoneAlt")
            span 電話番号
          .item
            a.value(href="tel:0278966287") 0278-96-6287
        .info
          .label
            fa.mr-2(:icon="faClock")
            span 営業時間
          .item
            span.mr-2 平日
            span.value.mr-2 9:00 ~ 20:00
            span.excuse カット最終受付 18:30
          .item
            span.mr-2 休日
            span.value.mr-2 9:00 ~ 19:00
            span.excuse カット最終受付 17:30
      .col-lg-5.col-sm-6
        .info
          .label
            fa.mr-2(:icon="faBed")
            span 定休日
          .item
            .value 不定休
          .excuse
            div ※ 電話に出ない場合がありますので
            div LINEでのご予約やお問い合わせをおすすめします。
        .info.mb-0
          .label
            fa.mr-2(:icon="faHome")
            span アクセス
          .item
            span.unit.mr-2 駐車場
            span.value あり
          .item
            span.unit.mr-2 最寄り駅
            span.value 前橋駅
            span.unit もしくは
            span.value 前橋大島駅
    .row.mt-4
      .offset-lg-1.col-lg-11.col-sm-12
        p-reserve-button
</template> 

<script>
import datetimeParserMixin from "@/components/mixins/datetimeParserMixin";
import descriptionParserMixin from "@/components/mixins/descriptionParserMixin";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
  faBed,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import pReserveButton from "@/components/parts/ReserveButton";
import mapIcon from "@/assets/images/map-icon.png";

export default {
  mixins: [datetimeParserMixin, descriptionParserMixin],
  components: {
    pReserveButton,
  },
  data() {
    return {
      faMapMarkerAlt,
      faPhoneAlt,
      faClock,
      faBed,
      faHome,
    };
  },
  mounted() {
    const latlng = new this.$google.maps.LatLng(
      36.38580542323723,
      139.09472765386062
    );
    const map = new this.$google.maps.Map(this.$refs.map, {
      center: latlng,
      zoom: 14,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      zoomControl: false,
    });
    new this.$google.maps.Marker({
      position: latlng,
      map,
      icon: {
        url: mapIcon,
        scaledSize: new google.maps.Size(100, 91),
      },
    });
  },
};
</script>

<style lang="sass" scoped>
.store-info
  .map
    width: 100%
    padding-bottom: 50%
    background-size: cover
    background-position: center center
    margin-bottom: 30px
    @include media-breakpoint-down(md)
      padding-bottom: 75%
  .info
    margin-bottom: 30px
    .label
      color: $primary-grey
      font-size: 20px
      font-weight: bold
      margin-bottom: 8px
      display: flex
      align-items: center
    .item
      font-weight: bold
      margin-bottom: 10px
      .value
        color: inherit
        font-size: 22px
      .unit
        font-size: 14px
    .excuse
      color: $primary-grey
      font-size: 14px
  .event-submit
    margin-top: 20px
    .submit-button
      display: inline-block
      color: $primary-grey
      font-size: 24px
      font-weight: bold
      background-color: $accent-color
      padding: 12px 30px
      border: 3px solid $accent-color
      border-radius: 5px
      cursor: pointer
      transition: 0.3s
      &:hover
        opacity: 0.7
        text-decoration: none
</style>