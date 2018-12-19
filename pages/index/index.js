//index.js
//获取应用实例
const app = getApp()
Page({
  data:{
    todolist:[
      {
        todo:"1",
        complete:false
      },
      {
        todo: "2",
        complete: false
      },
      {
        todo: "3",
        complete: false
      },
      {
        todo: "4",
        complete: false
      }
  ],
    newlist:""
  },
  addname(event){
    if (event.detail.value){
      this.data.newlist= event.detail.value;
      this.data.todolist.push({todo:this.data.newlist,complete:false});
      this.setData({
        todolist: this.data.todolist,
        newlist: ""
      })
    }
  },
  fn(event){
    let index=event.currentTarget.dataset.index
    this.data.todolist[index].complete = !this.data.todolist[index].complete;
    this.setData({
      todolist: this.data.todolist,
      newlist: ""
    })
  }
})
