"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../request/http.js");
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  (_easycom_u_button2 + _easycom_u_swiper2)();
}
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
if (!Math) {
  (_easycom_u_button + _easycom_u_swiper + floor)();
}
const floor = () => "../../components/floor/floor.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const data = common_vendor.reactive({
      bannerList: [],
      homeCateList: [],
      floorData: []
    });
    const gosearch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    };
    api_api.getBanner().then((res) => {
      console.log(res);
      data.bannerList = res.message;
    });
    api_api.getHomeCate().then((res) => {
      data.homeCateList = res.message;
    });
    api_api.getFloorData().then((res) => {
      data.floorData = res.message;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(gosearch),
        b: common_vendor.p({
          list: data.bannerList,
          height: "340",
          name: "image_src"
        }),
        c: common_vendor.f(data.homeCateList, (item, index, i0) => {
          return {
            a: item.image_src,
            b: index
          };
        }),
        d: common_vendor.f(data.floorData, (item, index, i0) => {
          return {
            a: "5ab5f0bd-2-" + i0,
            b: common_vendor.p({
              data: item
            }),
            c: index
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/vscode/shix/twoWeek/\u4E25\u9009\u5546\u57CE/yougou-shop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
