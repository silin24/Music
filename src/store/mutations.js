import {
  SAVE_BANNER,
  SAVE_RECSONG,
  SAVE_NEWSONG,
  SAVE_NEWDVD,
  SAVE_NEWALBUM,
  SAVE_RANKINGLIST,
  SAVE_LISTDETAIL,
  SAVE_USER,
  SAVE_TOKEN,
  LOGOUT,
  SAVE_LOVESONG,
  SAVE_HIGHQUALITYSONG,
  SAVE_VIDEOLABELLIST,
  SAVE_VIDEOLIST,
  SAVE_HOTLIST,
  SAVE_HOTWORD,
  SAVE_SONGDETAIL,
  DEL_SONGDETAIL,
  SAVE_RECDAYSONG,
  SAVE_MUSICURL,
  SAVE_MINISHOW,
  SHOWSONGDETAIL,
  SHOWMINIPLAY,
  SAVE_SONGINFO,
  SAVE_IDARR,
  SAVE_PLAYLISTDATA,
  SAVE_PLAYLIST,
  SAVE_PLAYLISTDETAIL,
  SAVE_CATEGORYLIST,
  SAVE_HOTCATEGORYLIST,
  SAVE_RECSONGLIST,
  SAVE_TAG,
  SAVE_OTHERSONGLIST,
  SAVE_SONGLISTDETAIL,
  SAVE_SONGTIME,
  //ss
  SAVE_SEARCHDATA,
  SAVE_SEARCHSUGGESTDATA
} from "./mutations-type";

export default {
  // 轮播图
  [SAVE_BANNER](state, banner) {
    state.banner = banner;
  },
  //find页推荐歌单
  [SAVE_RECSONG](state, recSong) {
    state.recSong = recSong;
  },
  //新歌
  [SAVE_NEWSONG](state, newSong) {
    state.newSong = newSong;
  },
  //新碟
  [SAVE_NEWDVD](state, newDVD) {
    state.newDVD = newDVD;
  },
  // 新专辑
  [SAVE_NEWALBUM](state, newAlbum) {
    state.newAlbum = newAlbum;
  },
  //排行榜
  [SAVE_RANKINGLIST](state, rankingList) {
    state.rankingList = rankingList;
  },
  //排行榜详情
  [SAVE_LISTDETAIL](state, listDetail) {
    state.listDetail = listDetail;
  },
  //获取歌单详情
  [SAVE_SONGDETAIL](state, songDetail) {
    state.songDetail.push(...songDetail);
  },
  [DEL_SONGDETAIL](state) {
    state.songDetail = [];
  },
  //猜你在追
  [SAVE_LOVESONG](state, loveSong) {
    state.loveSong = loveSong;
  },
  //精选歌单  音乐故事 声之剧场 广播电台 用一个api
  [SAVE_HIGHQUALITYSONG](state, highqualitySong) {
    state.highqualitySong = highqualitySong;
  },
  //获取视频标签列表
  [SAVE_VIDEOLABELLIST](state, videoLabelList) {
    state.videoLabelList = videoLabelList;
  },
  //获取视频标签对应视频数据
  [SAVE_VIDEOLIST](state, videoList) {
    state.videoList = videoList;
  },
  //获取热搜列表
  [SAVE_HOTLIST](state, hotList) {
    state.hotList = hotList;
  },
  //搜索
  [SAVE_SEARCHDATA](state, SearchData) {
    state.SearchData = SearchData;
  },
  [SAVE_SEARCHSUGGESTDATA](state, SearchSuggestData) {
    state.SearchSuggestData = SearchSuggestData;
  },
  //获取默认热搜关键词
  [SAVE_HOTWORD](state, hotWord) {
    state.hotWord = hotWord;
  },
  //获取每日推荐歌曲
  [SAVE_RECDAYSONG](state, recDaySong) {
    // state.recDaySong.length ==0 && (state.recDaySong = recDaySong);
    state.recDaySong = recDaySong;
  },
  //获取音频地址
  [SAVE_MUSICURL](state, musicUrl) {
    state.musicUrl = musicUrl;
  },
  //是否展示音乐播放页面
  [SHOWSONGDETAIL](state, showSongDetail) {
    state.showSongDetail = showSongDetail;
  },
  //mini音乐播放
  [SHOWMINIPLAY](state, showMiniPlay) {
    state.showMiniPlay = showMiniPlay;
  },
  // 保存播放列表
  [SAVE_SONGINFO](state, songInfo) {
    state.songInfo = songInfo;
  },
  //音乐播放列表id集合
  [SAVE_IDARR](state, idArr) {
    state.idArr = idArr;
  },
  // 播放列表数据
  [SAVE_PLAYLISTDATA](state, playListData) {
    state.playListData = playListData;
  },
  //用于切换播放显示
  [SAVE_MINISHOW](state, miniShow) {
    state.miniShow = miniShow;
  },
  //保存用户数据
  [SAVE_USER](state, user) {
    state.user = user;
  },
  //保存token
  [SAVE_TOKEN](state, token) {
    state.token = token;
  },
  // 退出登录
  [LOGOUT](state) {
    // 情况了vuex中的用户信息
    state.user = {};
    state.token = "";
    // 情况localStorage中的token
    localStorage.removeItem("token_key");
  },
//歌单分类
  [SAVE_CATEGORYLIST](state,categorylist) {
    state.categorylist = categorylist;
  },
  //热门歌单分类
  [SAVE_HOTCATEGORYLIST](state,hotCategorylist) {
    state.hotCategorylist = hotCategorylist;
  },
  //tag name
  [SAVE_TAG](state,tag) {
    state.tag = tag;
  },
 //传入歌单 id 可获取相关歌单
  [SAVE_PLAYLIST](state,playList) {
    state.playList = playList;
  },
  // 歌单详情 包含音乐
  [SAVE_PLAYLISTDETAIL](state,playListDetail) {
    state.playListDetail = playListDetail;
  },
  //获取歌单
  //推荐
  [SAVE_RECSONGLIST](state,RecSongList) {
    state.RecSongList = RecSongList;
  },
  //other 歌单
  [SAVE_OTHERSONGLIST](state,data) {
    let {playlists,tag} = data
    state.otherSongList[tag] = playlists;
  },
  //歌单详情数据
  [SAVE_SONGLISTDETAIL](state,songListDetail) {
    state.songListDetail = songListDetail;
  },
  //音乐详情数据
  [SAVE_SONGTIME](state,songTime) {
    state.songTime = songTime;
  },
};
