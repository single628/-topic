// 对请求封装

// 显示加载中
function network(req){
    wx.showLoading({
        title:"数据加载中ing",
    })

    return new Promise((resolve,reject)=>{
        wx.request({
            url:"http://localhost:3038"+req.url,
            method:req.method,
            timeout:5000,
            header:{'content-type':'application/x-www-form-urlencoded'},//解决请求不到数据
            data:req.data,
            success:function(res){
                    resolve(res.data);
            },
            fail:function(){reject('接口请求失败')},
            complete:res=>{
                wx.hideLoading()
            }
        })
    })
}

async function request(req){
    return await network(req)
}

export default request;

