/* 
所有路由配置的数组
*/

// import Find from '@/pages/find/find'
// import Video from '@/pages/video/video'
// import My from '@/pages/my/my'
// import Podcast from '@/pages/podcast/podcast'
// import Yuncun from '@/pages/yuncun/yuncun'
// import Login from '@/pages/login/login'
// import Search from '@/pages/search/search'
// import Receveryday from '@/pages/recEveryDay/recEveryDay'
// import SongSquare from '@/pages/songSquare/songSquare'
// import SongListDetail from '@/pages/songListDetail/songListDetail'
// import LatestMusic from '@/pages/latestMusic/latestMusic'


const Find = () => import('@/pages/find/find')
const Video = () => import('@/pages/video/video')
const My = () => import('@/pages/my/my')
const Podcast = () => import('@/pages/podcast/podcast')
const Yuncun = () => import('@/pages/yuncun/yuncun')
const Login = () => import('@/pages/login/login')
const Search = () => import('@/pages/search/search')
const Receveryday = () => import('@/pages/recEveryDay/recEveryDay')
const SongSquare = () => import('@/pages/songSquare/songSquare')
const SongListDetail = () => import('@/pages/songListDetail/songListDetail')
const LatestMusic = () => import('@/pages/latestMusic/latestMusic')
const SearchDetail = () => import('@/pages/searchDetail/searchDetail')


export default [
  {
    path: '/find',
    component: Find,
    name:"Find",
    meta:{
      isShowFooter:true
    },
  },
  {
    path: '/my',
    component: My,
    name:"My",
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/yuncun',
    component: Yuncun,
    name:"Yuncun",
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/podcast',
    component: Podcast,
    name:"Podcast",
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/video',
    component: Video,
    name:"Video",
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    name:"Login",
    component: Login
  },
  {
    path: '/search',
    name:"Search",
    component: Search
  },
  {
    path: '/receveryday',
    component: Receveryday,
    name:"Receveryday"
  },
  {
    path: '/songsquare',
    component: SongSquare,
    name:"SongSquare"
  },
  {
    path: '/songListDetail',
    component: SongListDetail,
    name:"SongListDetail"
  },
  {
    path: '/latestMusic',
    component: LatestMusic,
    name:"LatestMusic"
  },
  {
    path: '/searchDetail',
    component: SearchDetail,
    name:"SearchDetail"
  },
  {
    path: '/',
    redirect: '/find'
  }
]