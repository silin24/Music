import {
  getBanner,
  getRecSong,
  getNewSong,
  getNewDVD,
  getNewAlbum,
  getRankingList,
  getListDetail,
  getSongDetail,
  getLoveSong,
  getHighqualityList,
  getVideoLableList,
  getVideoList,
  getHotList,
  getHotWord,
  getRecDaySong,
  getMusicUrl,
  getPlayList,
  getPlayListDetail,
  getCategoryList,
  getHotCategoryList,
  getRecSongList,
  getSongList,
  getAllSongDetail,
  getSearch,
  getSearchSuggest
} from "../api/";
import {
  SAVE_BANNER,
  SAVE_RECSONG,
  SAVE_NEWSONG,
  SAVE_NEWDVD,
  SAVE_NEWALBUM,
  SAVE_RANKINGLIST,
  SAVE_LISTDETAIL,
  SAVE_SONGDETAIL,
  SAVE_LOVESONG,
  SAVE_HIGHQUALITYSONG,
  SAVE_VIDEOLABELLIST,
  SAVE_VIDEOLIST,
  SAVE_HOTLIST,
  SAVE_HOTWORD,
  //搜索
  SAVE_SEARCHDATA,
  SAVE_SEARCHSUGGESTDATA,
  SAVE_RECDAYSONG,
  SAVE_MUSICURL,
  SAVE_PLAYLIST,
  SAVE_PLAYLISTDETAIL,
  SAVE_CATEGORYLIST,
  SAVE_HOTCATEGORYLIST,
  SAVE_RECSONGLIST,
  SAVE_OTHERSONGLIST,
  SAVE_SONGTIME,
} from "./mutations-type";
export default {
  // 轮播图
  async getBannerAction({ commit }) {
    let result = await getBanner();
    // console.log(result);
    !!(result.code === 200) && commit(SAVE_BANNER, result.banners);
  },
  // 推荐歌单
  async getRecSongAction({ commit }) {
    let result = await getRecSong(6);
    // console.log(result.result);
    !!(result.code === 200) && commit(SAVE_RECSONG, result.result);
  },
  //新歌
  async getNewSongAction({ commit }) {
    let result = await getNewSong();
    // console.log(result.result);
    !!(result.code === 200) && commit(SAVE_NEWSONG, result.result);
  },
  //新碟
  async getNewDVDAction({ commit }) {
    let result = await getNewDVD(6, 2020);
    // console.log(result.albums);
    !!(result.code === 200) && commit(SAVE_NEWDVD, result.albums);
  },
  //新专辑
  async getNewAlbumAction({ commit }) {
    let result = await getNewAlbum();
    // console.log(result.albums);
    !!(result.code === 200) && commit(SAVE_NEWALBUM, result.albums);
  },
  //获取排行榜
  async getRankingListAction({ commit }) {
    let result = await getRankingList();
    // console.log(result.list);
    !!(result.code === 200) && commit(SAVE_RANKINGLIST, result.list);
  },
  //获取排行榜详情
  async getListDetailAction({ commit }) {
    let result = await getListDetail();
    // console.log(result.list);
    !!(result.code === 200) && commit(SAVE_LISTDETAIL, result.list);
  },
  //获取歌单详情
  async getSongDetailAction({ commit },id) {
    let result = await getSongDetail(id);
    let list = result.playlist.tracks.splice(0, 3);
    !!(result.code === 200) && commit(SAVE_SONGDETAIL, list);
  },
  //猜你在追
  async getLoveSongAction({ commit }) {
    let result = await getLoveSong(6);
    // console.log(result.list);
    !!(result.code === 200) && commit(SAVE_LOVESONG, result.playlists);
  },
  //精选歌单  音乐故事 声之剧场 广播电台 用一个api
  async getHighqualitySongAction({ commit }) {
    let result = await getHighqualityList();
    // console.log(result.list);
    !!(result.code === 200) && commit(SAVE_HIGHQUALITYSONG, result.playlists);
  },
  //获取视频标签列表
  async getVideoLabelListAction({ commit }) {
    let result = await getVideoLableList();
    // console.log(result.list);
    let list = result.data.splice(0, 15);
    !!(result.code === 200) && commit(SAVE_VIDEOLABELLIST, list);
  },
  //获取视频标签对应视频数据
  async getVideoListAction({ commit },id) {
    let result = await getVideoList(id);
    // console.log(id);
    // console.log(result.list);
    // let list = result.data.splice(0, 15);
    !!(result.code === 200) && commit(SAVE_VIDEOLIST, result.datas);
  },
  //获取热搜列表
  async getHotListAction({ commit }) {
    let result = await getHotList();
    // console.log(id);
    // console.log(result.list);
    // let list = result.data.splice(0, 15);
    !!(result.code === 200) && commit(SAVE_HOTLIST, result.result.hots);
  },
  //获取默认热搜关键词
  async getHotWordAction({ commit }) {
    let result = await getHotWord();
    !!(result.code === 200) && commit(SAVE_HOTWORD, result.data);
  },
  //搜索建议 getSearchSuggest
  async getSearchSuggestAction({ commit },keywords) {
    let result = await getSearchSuggest(keywords);
    !!(result.code === 200) && commit(SAVE_SEARCHSUGGESTDATA, result.result.allMatch);
  },
  //搜索
  async getSearchAction({ commit },keywords) {
    let result = await getSearch(keywords);
    !!(result.code === 200) && commit(SAVE_SEARCHDATA, result.result.songs);
  },
  //获取每日推荐歌曲
  async getRecDaySongAction({ commit }) {
    let result = await getRecDaySong();
    !!(result.code === 200) && commit(SAVE_RECDAYSONG, result.recommend);
  },
  //获取音频地址
  async getMusicUrlAction({ commit },id) {
    let result = await getMusicUrl(id);
    // console.log(result);
    !!(result.code === 200) && commit(SAVE_MUSICURL, result.data);
  },
  //歌单广场
  //歌单分类
  async getCategoryListAction({ commit }) {
    let result = await getCategoryList();
    // console.log(result);
    !!(result.code === 200) && commit(SAVE_CATEGORYLIST, result.sub);
  },
  //热门歌单分类
  async getHotCategoryListAction({ commit }) {
    let result = await getHotCategoryList();
    // console.log(result);
    let tags = result.tags.splice(0,8)
    !!(result.code === 200) && commit(SAVE_HOTCATEGORYLIST, tags);
  },
  //传入歌单 id 可获取相关歌单
  async getPlayListAction({ commit },id) {
    let result = await getPlayList(id);
    // console.log(result);
    !!(result.code === 200) && commit(SAVE_PLAYLIST, result.playlists);
  },
  //获取相关歌单 包含音乐
  async getPlayListDetailAction({ commit },id) {
    let result = await getPlayListDetail(id);
    console.log(result);
    !!(result.code === 200) && commit(SAVE_PLAYLISTDETAIL, result.playlist);
  },
  //推荐歌单
  // async getSongListAction({ commit },tag) {
  //   let result = await gRecetSongList(tag);
  // },
  async getRecSongListAction({ commit },tag) {
    let result = await getRecSongList(tag);
    !!(result.code === 200) && commit(SAVE_RECSONGLIST, result.playlists)
  },
  //other 歌单
  async getOtherSongListAction({ commit },tag) {
    let result = await getSongList(tag);
    let playlists = result.playlists
    !!(result.code === 200) && commit(SAVE_OTHERSONGLIST, {playlists, tag})
  },

  // 获取音乐的详情
  async getAllSongDetailAction({ commit },id) {
    let result = await getAllSongDetail(id);
    console.log(result);
   let time = result.songs[0].dt
    !!(result.code === 200) && commit(SAVE_SONGTIME, time)
  },
};