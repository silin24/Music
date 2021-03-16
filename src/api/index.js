import ajax from './ajax'

// 1、获取banner
export const getBanner = () => ajax({
  url:`/banner?type=2`

})
//2.获取推荐歌单
export const getRecSong = (limit) => ajax({
  url:`/personalized?limit=${limit}`,
  // headers:{
  //   needToken:true
  // }
})
//获取新歌
export const getNewSong = () => ajax.get('/personalized/newsong')
//获取新碟
export const getNewDVD = (limit,year) => ajax.get(`/top/album?limit=${limit}&year=${year}`)
//获取新专辑
export const getNewAlbum = () => ajax.get('/album/newest')
//获取排行榜
export const getRankingList = () => ajax.get('/toplist')
//获取排行榜详情
export const getListDetail = () => ajax.get('/toplist/detail')
//获取歌单详情动态
export const getSongDetail = (id) => ajax.get(`/playlist/detail/dynamic?id=${id}`)
//猜你在追
export const getLoveSong = (limit) => ajax({
  url:`/top/playlist?limit=${limit}&order=new`,
})
//精选歌单  音乐故事 声之剧场 广播电台 用一个api
export const getHighqualityList = () => ajax({
  url:`/top/playlist/highquality?before=1503639064232&limit=24`,
})
//获取视频标签列表
export const getVideoLableList = () => ajax({
  url:`/video/group/list`,
})
//获取视频标签对应视频数据
export const getVideoList = (id) => ajax({
  url:`/video/group?id=${id}`,
})
//获取热搜列表
export const getHotList = () => ajax({
  url:`/search/hot`,
})
//获取默认热搜关键词
export const getHotWord = () => ajax({
  url:`/search/hot/detail`,
})
//搜索建议  /search/suggest?keywords= 海阔天空&type=mobile
export const getSearchSuggest = (keywords) => ajax({
  url:`/search/suggest?keywords=${keywords}&type=mobile`,
})
//搜索 /search?keywords=海阔天空&limit=10
export const getSearch = (keywords) => ajax({
  url:`/search?keywords=${keywords}`,
})
//获取每日推荐歌曲
export const getRecDaySong = () => ajax({
  url:`/recommend/songs`,
})
//获取音频地址
export const getMusicUrl = (id) => ajax({
  url:`/song/url?id=${id}`,
})
// 歌单广场
//歌单分类
export const getCategoryList = () => ajax({
  url:`/playlist/catlist`,
})
//热门歌单分类
export const getHotCategoryList = () => ajax({
  url:`/playlist/hot`,
})
//传入歌单 id 可获取相关歌单
export const getPlayList = (id) => ajax({
  url:`/related/playlist?id=${id}`,
})
// 获取歌单详情 能看到歌单名字, 但看不到具体歌单内容  返回的trackIds是完整的，可拿全部trackIds请求一次song/detail 接口获取所有歌曲的详情 /song/detail?ids=507795651
export const getPlayListDetail = (id) => ajax({
  url:`/playlist/detail?id=${id}`,
})
// 获取音乐的详情     http://localhost:3000/song/detail?ids=507795651
export const getAllSongDetail = (id) => ajax({
  url:`/song/detail?ids=${id}`,
})
//推荐歌单
export const getRecSongList = (tag) => ajax({
  url:`/top/playlist?tag=${tag}`,
})
//网友精选碟歌单
// export const getSongList = ({tag,offset,limit}) => ajax({
  export const getSongList = (tag) => ajax({
  // url:`/top/playlist?tag=${tag}`,
  url:`/top/playlist?cat=${tag}`
})
//自动登录
export const autoLogin = () => ajax({
  url:'/auto_login',
  headers:{
    needToken:true
  }
 })