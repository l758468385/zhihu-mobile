import request from './http'

// 获取今日新闻信息
export const getTodayNews = (params = {}) => {
    return request('/api/news_latest',params)
}