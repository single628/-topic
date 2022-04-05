import request from './network'

//请求题目数据
export function getAllTopicList(){
    return request({
        url:"/task/getAllTask",
        method:'GET'
    })
}
// 请求所有用户的排名
export function getAllRankList(){
    return request({
        url:"/rank/getAllRankList",
        method:'GET'
    })
}

// 将用户所做的题目数量、速度等写入数据库
export function updateRank(data){
    return request({
        url:'/rank/updateRank',
        method:'post',
        data:data
    })
}

// 请求用户某天做过某题的分数
export function getSingleTaskScore(old_data){
    return request({
        url:"/score/SingleTaskScore",
        method:'GET',
        data:old_data
    })
}

// 将分数写入数据库
export function updateScore(data){
    return request({
        url:'/score/updateScore',
        method:'post',
        data:data
    })
}
// 指定用户的数据
export function getUserScore(data){
    return request({
        url:'/score/getUserScore',
        method:'get',
        data:data
    })
}