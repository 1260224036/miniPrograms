Page({

  /**
   * 页面的初始数据
   */
  data: {
    //当前被选中的navItem
    currentNavIndex:0,
    navList:[],
    swiperList:[],
    videosList:[]
  },
  getNavList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success(res){
        that.setData({
          navList:res.data.data.navList
        }); 
      }    
    })  
  },
  getSwiperList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res) {
        that.setData({
          swiperList: res.data.data.swiperList
        });
        // console.log(res)
      }
    })
  },
  getVideosList() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res) {
        that.setData({
          videosList: res.data.data.videosList
        });
        // console.log(res);
      }
    })
  },

  setCurrentNav(ev) {
    this.setData({
      currentNavIndex:ev.target.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();  
    this.getSwiperList(); 
    this.getVideosList();
  },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})