// 用于图表展示的直播
interface LiveNews {
    // 直播的ID
    id: number
    // 直播的内容
    content: string
    // 直播的图片
    image: string
    // 直播发布时间
    time: string
}

// 封装类型数据
interface Resulter {
    type: string
    result: any
}

/**
 * 直播时间参数
 * 由于后台历史遗留错误，参数顺序反人类
 * @param {string} renewtime 结束时间 时间戳
 * @param {string} end_time 开始时间 时间戳
 * */ 
interface LiveNewsParam {
    renewtime: string
    end_time: string
}

interface newsChartAction {
    pointMouseOver(LiveNews,top?:number,left?:number)
    pointMouseOut(LiveNews,top?:number,left?:number)
    pointClick(LiveNews,top?:number,left?:number)

    chartClick(LiveNews,top?:number,left?:number)
}

// 公用tab切换
// @param{dom} tab外层wrapper ， dom.find('li')
class publicTabSwitch {
    tabDom: JQuery;
    tabIndex: number = 0;

    constructor(private dom: string) {
        let tabDom = $(dom).find('li'),
            self = this;

        if (tabDom.length > 1) {
            tabDom.on('click', function() {
                let $this = $(this);
                self.tabDom = $this;
                self.tabIndex = $this.index();
                self.reset();
            })
        }
    }
    reset() {
        this.tabDom.addClass('active').siblings().removeClass('active');
        this.tabDom.parents('ul').siblings('ul').find('.tab-item-child')
            .eq(this.tabIndex)
            .addClass('select_show')
            .siblings('li')
            .removeClass('select_show');
    }
}

/**
 * addAdsTip 添加广告标识
 * 针对一定的结构才可以使用
 * */ 
class addAdTip {
    constructor() {
        this._dipatch()
    }

    _dipatch() {
        let divs = document.querySelectorAll('.smm-art-label')
        for (let i = 0; i < divs.length; i++) {
            let $this = $(divs[i])
            if ($this.css('position') != 'relative' && $this.css('position') != 'absolute') {
                $this.css('position', 'relative')
            }
            this.addImgElement(divs[i])
        }
    }

    addImgElement(dom) {
        let img = new Image()
        img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAYAAAA1+Nx+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDFCRTE4RTFFQkExMTFFN0I0NUVBOEExQ0IwMDlGMDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDFCRTE4RTJFQkExMTFFN0I0NUVBOEExQ0IwMDlGMDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMUJFMThERkVCQTExMUU3QjQ1RUE4QTFDQjAwOUYwNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMUJFMThFMEVCQTExMUU3QjQ1RUE4QTFDQjAwOUYwNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvE9xYEAAAGNSURBVHjaYmRgYEhjoCFgYqAxYAZiY2wSc+fO1fz169e3O3fu/MZngIeHB5eKigorLnVM6IphbCEhIa4VK1YUwPh5eXkiyGovXboUtH79euOGhgbbrq4uD1wOYEHmLFq0CCU++Pn55V+9egW2RFRUVFNfX39CcnLydZBDNDU1bUHiEhISciD6xIkT7kpKSprz589fX15e/hCrBSBw79696xYWFjvxBQvIxWfPnt1x9erVR3Z2dmBfg9ggvH///tcURXJnZ6c8zNXa2tpyQF+KgDCIDcKgUEAOahZSLQC5UE1N7TAfHx/XgwcP3oBcDZMDWbB58+adO3bs+IbTAmQN2ABIMxCf/f///8yPHz8+BKU0kDgbGxsXKM6AkV6IM4i4ublFL168+JoYn7x+/fr62rVr14uJiU0AYRAb5gCsqQgUtl+/fn09adKkN8QGFzCCjYGpBxwfwsLConiTqb29vUZLS8sSYg0HJdvLly8vAcUDiK+goPANKCaHro6R3LIIlPGI8S0jrQs7gAADAESPpmS2ae3kAAAAAElFTkSuQmCC"
        img.style.width = '24px'
        img.style.height = '14px'
        img.style.position = 'absolute'
        img.style.right = '3px'
        img.style.bottom = '0'
        dom.appendChild(img)
    }
}

export { LiveNews, newsChartAction,Resulter, publicTabSwitch, LiveNewsParam, addAdTip }