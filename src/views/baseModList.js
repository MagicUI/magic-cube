export default {
    list: [{
        name: '标题模块',
        type: 'Title',
        schema: {
            formData: {
                modInfo:{
                    group: "模块信息设置",
                    title: "模块信息设置",
                    fields: [{
                        name: "title",
                        title: "标题",
                        type: 'string'
                    },{
                        name: "color",
                        title: "标题颜色",
                        type: 'string'
                    },{
                        name: "fontSize",
                        title: "标题大小",
                        type: 'string'
                    },{
                        name: "link",
                        title: "跳转链接",
                        type: 'string'
                    }],
                    minRow: 1,
                    maxRow: 1,
                    models: [{
                        title: "标题",
                        color: "white",
                        fontSize: "28px",
                        link: "https://www.mogu.com"
                    }]
                },
                baseInfo:{
                    group: "基本信息设置",
                    title: "基本信息设置",
                    fields: [{
                        name: "bgColor",
                        title: "模块背景",
                        type: 'string'
                    },{
                        name: "marginTop",
                        title: "上边距",
                        type: 'string'
                    },{
                        name: "marginBottom",
                        title: "下边距",
                        type: 'string'
                    },{
                        name: "paddingLeft",
                        title: "左内边距",
                        type: 'string'
                    },{
                        name: "paddingTop",
                        title: "上内边距",
                        type: 'string'
                    },{
                        name: "paddingRight",
                        title: "右内边距",
                        type: 'string'
                    },{
                        name: "paddingBottom",
                        title: "下内边距",
                        type: 'string'
                    }],
                    minRow: 1,
                    maxRow: 1,
                    models: [{
                        bgColor: "#999",
                        marginTop: "10px",
                        marginBottom: 0,
                        paddingTop: "10px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingBottom: "10px"
                    }]
                }
            }
        }
      },{
        name: '文本模块',
        type: 'Text',
        schema: {
            formData: {
                modInfo:{
                    group: "模块信息设置",
                    title: "模块信息设置",
                    fields: [{
                        name: "text",
                        title: "文本内容",
                        type: 'string'
                    },{
                        name: "color",
                        title: "文本颜色",
                        type: 'string'
                    },{
                        name: "fontSize",
                        title: "文本大小",
                        type: 'string'
                    },{
                        name: "textAlign",
                        title: "对齐方式",
                        type: 'string'
                    }],
                    minRow: 1,
                    maxRow: 1,
                    models: [{
                        text: "默认文本",
                        color: "green",
                        fontSize: '20px',
                        textAlign: 'left'
                    }]
                },
                baseInfo:{
                    group: "基本信息设置",
                    title: "基本信息设置",
                    fields: [{
                        name: "bgColor",
                        title: "模块背景",
                        type: 'string'
                    },{
                        name: "marginTop",
                        title: "上边距",
                        type: 'string'
                    },{
                        name: "marginBottom",
                        title: "下边距",
                        type: 'string'
                    },{
                        name: "paddingLeft",
                        title: "左内边距",
                        type: 'string'
                    },{
                        name: "paddingTop",
                        title: "上内边距",
                        type: 'string'
                    },{
                        name: "paddingRight",
                        title: "右内边距",
                        type: 'string'
                    },{
                        name: "paddingBottom",
                        title: "下内边距",
                        type: 'string'
                    }],
                    minRow: 1,
                    maxRow: 1,
                    models: [{
                        bgColor: "#999",
                        marginTop: "10px",
                        marginBottom: 0,
                        paddingTop: "10px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingBottom: "10px"
                    }]
                }
            }
        }
      },{
        name: '单图模块',
        type: 'OnePic',
        schema: {
            formData: {
                modInfo:{
                    group: "模块信息设置",
                    title: "模块信息设置",
                    fields: [{
                        name: "title",
                        title: "主标题",
                        type: 'string'
                    },{
                        name: "subTitle",
                        title: "副标题",
                        type: 'string'
                    },{
                        name: "img",
                        title: "图片",
                        type: 'image'
                    },{
                        name: "link",
                        title: "跳转链接",
                        type: 'string'
                    }],
                    minRow: 1,
                    maxRow: 1,
                    models: [{
                        title: "主标题",
                        subTitle: "父标题",
                        img: "https://s10.mogucdn.com/mlcdn/c45406/170620_40jcjjb4cbbkfeehfcdkj761fkelg_373x280.png",
                        link: "https://www.mogu.com"
                    }]
                },
                baseInfo:{
                    group: "基本信息设置",
                    title: "基本信息设置",
                    fields: [{
                        name: "bgColor",
                        title: "模块背景",
                        type: 'string'
                    },{
                        name: "marginTop",
                        title: "上边距",
                        type: 'string'
                    },{
                        name: "marginBottom",
                        title: "下边距",
                        type: 'string'
                    },{
                        name: "paddingLeft",
                        title: "左内边距",
                        type: 'string'
                    },{
                        name: "paddingTop",
                        title: "上内边距",
                        type: 'string'
                    },{
                        name: "paddingRight",
                        title: "右内边距",
                        type: 'string'
                    },{
                        name: "paddingBottom",
                        title: "下内边距",
                        type: 'string'
                    }],
                    minRow: 1,
                    maxRow: 1,
                    models: [{
                        bgColor: "#999",
                        marginTop: "10px",
                        marginBottom: 0,
                        paddingTop: "10px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingBottom: "10px"
                    }]
                }
            }
        }
      }, {
        name: '双图模块',
        type: 'TwoPic',
        schema: {
            formData: {
                modInfo:{
                    group: "模块信息设置",
                    title: "模块信息设置",
                    fields: [{
                        name: "title",
                        title: "主标题",
                        type: 'string'
                    },{
                        name: "subTitle",
                        title: "副标题",
                        type: 'string'
                    },{
                        name: "img1",
                        title: "图片1",
                        type: 'image'
                    },{
                        name: "link1",
                        title: "跳转链接1",
                        type: 'string'
                    },{
                        name: "img2",
                        title: "图片2",
                        type: 'image'
                    },{
                        name: "link2",
                        title: "跳转链接2",
                        type: 'string'
                    }],
                    minRow: 1,
                    maxRow: 1,
                    models: [{
                        title: "主标题",
                        subTitle: "父标题",
                        img1: "https://s10.mogucdn.com/mlcdn/c45406/170620_40jcjjb4cbbkfeehfcdkj761fkelg_373x280.png",
                        link1: "https://www.mogu.com",
                        img2: "https://s10.mogucdn.com/mlcdn/c45406/170620_40jcjjb4cbbkfeehfcdkj761fkelg_373x280.png",
                        link2: "https://www.mogu.com"
                    }]
                },
                baseInfo:{
                    group: "基本信息设置",
                    title: "基本信息设置",
                    fields: [{
                        name: "bgColor",
                        title: "模块背景",
                        type: 'string'
                    },{
                        name: "marginTop",
                        title: "上边距",
                        type: 'string'
                    },{
                        name: "marginBottom",
                        title: "下边距",
                        type: 'string'
                    },{
                        name: "paddingLeft",
                        title: "左内边距",
                        type: 'string'
                    },{
                        name: "paddingTop",
                        title: "上内边距",
                        type: 'string'
                    },{
                        name: "paddingRight",
                        title: "右内边距",
                        type: 'string'
                    },{
                        name: "paddingBottom",
                        title: "下内边距",
                        type: 'string'
                    }],
                    minRow: 1,
                    maxRow: 1,
                    models: [{
                        bgColor: "#999",
                        marginTop: "10px",
                        marginBottom: 0,
                        paddingTop: "10px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingBottom: "10px"
                    }]
                }
            }
        }
      }]
}