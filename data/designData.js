export default {
    "list": [{
        "name": "文本模块",
        "type": "text",
        "schema": {
            "formData": {
                "modInfo": {
                    "group": "模块信息设置",
                    "title": "模块信息设置",
                    "fields": [{
                        "name": "text",
                        "title": "文本内容",
                        "type": "string"
                    }, {
                        "name": "color",
                        "title": "文本颜色",
                        "type": "color"
                    }, {
                        "name": "fontSize",
                        "title": "文本大小",
                        "type": "size"
                    }, {
                        "name": "textAlign",
                        "title": "对齐方式",
                        "type": "select",
                        "data": {
                            "left": "左对齐",
                            "right": "右对齐"
                        }
                    }],
                    "minRow": 1,
                    "maxRow": 1,
                    "models": [{
                        "text": "sss默认文本",
                        "color": "green",
                        "fontSize": "20px",
                        "textAlign": "left"
                    }]
                },
                "baseInfo": {
                    "group": "基本信息设置",
                    "title": "基本信息设置",
                    "fields": [{
                        "name": "bgColor",
                        "title": "模块背景",
                        "type": "color"
                    }, {
                        "name": "marginTop",
                        "title": "上边距",
                        "type": "size"
                    }, {
                        "name": "marginBottom",
                        "title": "下边距",
                        "type": "size"
                    }, {
                        "name": "paddingLeft",
                        "title": "左内边距",
                        "type": "size"
                    }, {
                        "name": "paddingTop",
                        "title": "上内边距",
                        "type": "size"
                    }, {
                        "name": "paddingRight",
                        "title": "右内边距",
                        "type": "size"
                    }, {
                        "name": "paddingBottom",
                        "title": "下内边距",
                        "type": "size"
                    }],
                    "minRow": 1,
                    "maxRow": 1,
                    "models": [{
                        "bgColor": "#999",
                        "marginTop": "10px",
                        "marginBottom": 0,
                        "paddingTop": "10px",
                        "paddingLeft": "10px",
                        "paddingRight": "10px",
                        "paddingBottom": "10px"
                    }]
                }
            }
        }
    }, {
        "name": "标题模块",
        "type": "title",
        "schema": {
            "formData": {
                "modInfo": {
                    "group": "模块信息设置",
                    "title": "模块信息设置",
                    "fields": [{
                        "name": "title",
                        "title": "标题",
                        "type": "string"
                    }, {
                        "name": "color",
                        "title": "标题颜色",
                        "type": "color"
                    }, {
                        "name": "fontSize",
                        "title": "标题大小",
                        "type": "size"
                    }, {
                        "name": "link",
                        "title": "跳转链接",
                        "type": "url"
                    }],
                    "minRow": 1,
                    "maxRow": 1,
                    "models": [{
                        "title": "标题fdafd",
                        "color": "white",
                        "fontSize": "28px",
                        "link": "https://www.mogu.com"
                    }]
                },
                "baseInfo": {
                    "group": "基本信息设置",
                    "title": "基本信息设置",
                    "fields": [{
                        "name": "bgColor",
                        "title": "模块背景",
                        "type": "color"
                    }, {
                        "name": "marginTop",
                        "title": "上边距",
                        "type": "size"
                    }, {
                        "name": "marginBottom",
                        "title": "下边距",
                        "type": "size"
                    }, {
                        "name": "paddingLeft",
                        "title": "左内边距",
                        "type": "size"
                    }, {
                        "name": "paddingTop",
                        "title": "上内边距",
                        "type": "size"
                    }, {
                        "name": "paddingRight",
                        "title": "右内边距",
                        "type": "size"
                    }, {
                        "name": "paddingBottom",
                        "title": "下内边距",
                        "type": "size"
                    }],
                    "minRow": 1,
                    "maxRow": 1,
                    "models": [{
                        "bgColor": "#999",
                        "marginTop": "10px",
                        "marginBottom": 0,
                        "paddingTop": "10px",
                        "paddingLeft": "10px",
                        "paddingRight": "10px",
                        "paddingBottom": "10px"
                    }]
                }
            }
        }
    }]
}
