# 中国古代历史时间轴网页开发设计文档

## 1. 项目概述

本项目旨在开发一个适合中小学生学习的中国古代历史时间轴网页，通过直观的时间轴形式按年代顺序展示中国古代历史重大事件，帮助学生更好地理解历史发展脉络。

### 1.1 核心功能
- 按年代顺序展示中国古代历史事件
- 提供搜索功能，可按事件、人物或地点搜索
- 支持按朝代筛选历史事件
- 响应式设计，适配不同设备屏幕

### 1.2 目标用户
中小学生，特别是历史课程学习者

## 2. 技术栈选择

考虑到用户是编程新手，选择了简单易上手的技术栈：

- **HTML5**：页面结构搭建
- **CSS3**：页面样式和布局设计
- **原生JavaScript**：交互功能实现

不使用任何框架或库，确保代码简单易懂，便于学习和修改。

## 3. 页面结构设计

网页采用清晰的模块化结构，分为以下几个主要部分：

### 3.1 页面头部（Header）
- 网站标题："中国古代历史时间轴"
- 网站描述："按年代顺序展示中国古代历史重大事件，适合中小学生学习"

### 3.2 搜索和筛选功能区（Filter Section）
- 搜索框：用于搜索历史事件、人物或地点
- 朝代筛选下拉菜单：用于按朝代筛选历史事件
- 重置按钮：用于重置所有筛选条件

### 3.3 时间轴展示区（Timeline Container）
- 垂直时间轴中心线
- 历史事件卡片：包含朝代标签、年份、事件名称、地点和主要人物
- 事件卡片交替排列在时间轴两侧

### 3.4 页脚（Footer）
- 版权信息和数据来源说明

## 4. 数据结构设计

### 4.1 历史事件数据结构

历史事件数据采用JavaScript数组对象形式存储，每个事件包含以下字段：

| 字段名 | 数据类型 | 描述 |
|--------|----------|------|
| year | Number | 事件发生的年份（公元前用负数表示） |
| date | String | 事件发生的具体时间（如："公元前221年"） |
| dynasty | String | 事件发生的朝代（如："秦朝"） |
| event | String | 历史事件名称（如："秦朝建立"） |
| location | String | 事件发生的地点（如："咸阳"） |
| people | String | 事件涉及的主要人物（如："秦始皇嬴政"） |

### 4.2 示例数据

```javascript
const historicalEvents = [
    {
        year: -221,
        date: "公元前221年",
        dynasty: "秦朝",
        event: "秦朝建立",
        location: "咸阳（今陕西咸阳）",
        people: "秦始皇嬴政"
    },
    // 更多历史事件...
];
```

## 5. 时间轴实现方案

### 5.1 布局设计

- 使用CSS的绝对定位和伪元素创建垂直时间轴中心线
- 事件卡片采用左右交替排列的布局方式
- 每个事件卡片包含一个圆形节点，连接到时间轴中心线上

### 5.2 关键CSS技术

```css
/* 创建时间轴中心线 */
.timeline::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: #4CAF50;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
}

/* 左侧事件卡片 */
.timeline-item:nth-child(odd) {
    left: 0;
}

/* 右侧事件卡片 */
.timeline-item:nth-child(even) {
    left: 50%;
}

/* 事件节点样式 */
.timeline-item::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    border: 4px solid #4CAF50;
    border-radius: 50%;
    top: 15px;
    z-index: 1;
}
```

## 6. 功能模块详细说明

### 6.1 时间轴渲染功能

**功能描述**：将历史事件数据动态渲染到时间轴上

**实现步骤**：
1. 按年份对历史事件进行排序
2. 遍历排序后的事件数组
3. 为每个事件创建DOM元素
4. 将创建的元素添加到时间轴容器中

**关键代码**：
```javascript
function renderTimeline(events) {
    // 按年份排序事件
    const sortedEvents = [...events].sort((a, b) => a.year - b.year);
    
    // 生成时间轴事件
    sortedEvents.forEach(event => {
        // 创建事件项元素和内容
        // ...
    });
}
```

### 6.2 搜索功能

**功能描述**：根据用户输入的关键词搜索历史事件

**实现步骤**：
1. 获取用户输入的搜索关键词
2. 遍历历史事件数据
3. 检查事件的名称、人物或地点是否包含搜索关键词
4. 过滤出符合条件的事件
5. 重新渲染时间轴

**关键代码**：
```javascript
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    // 过滤事件
    const filteredEvents = historicalEvents.filter(event => {
        return event.event.toLowerCase().includes(searchTerm) ||
               event.people.toLowerCase().includes(searchTerm) ||
               event.location.toLowerCase().includes(searchTerm);
    });
    
    // 重新渲染时间轴
    renderTimeline(filteredEvents);
}
```

### 6.3 朝代筛选功能

**功能描述**：根据用户选择的朝代筛选历史事件

**实现步骤**：
1. 从历史事件数据中提取所有不重复的朝代
2. 将朝代添加到下拉菜单中
3. 监听下拉菜单的变化事件
4. 根据用户选择的朝代过滤事件
5. 重新渲染时间轴

**关键代码**：
```javascript
function initDynastyFilter() {
    // 提取所有不重复的朝代
    const dynasties = [...new Set(historicalEvents.map(event => event.dynasty))];
    
    // 为每个朝代创建选项
    dynasties.forEach(dynasty => {
        const option = document.createElement('option');
        option.value = dynasty;
        option.textContent = dynasty;
        dynastyFilter.appendChild(option);
    });
}
```

### 6.4 重置功能

**功能描述**：重置所有筛选条件，显示完整的历史事件时间轴

**实现步骤**：
1. 清空搜索输入框
2. 重置朝代筛选下拉菜单为默认选项
3. 重新渲染完整的时间轴

**关键代码**：
```javascript
function handleReset() {
    // 清空搜索输入框
    document.getElementById('searchInput').value = '';
    
    // 重置朝代筛选
    document.getElementById('dynastyFilter').value = '';
    
    // 重新渲染完整的时间轴
    renderTimeline(historicalEvents);
}
```

## 7. 响应式设计考虑

为了确保网页在不同设备上都能良好显示，采用了响应式设计：

### 7.1 移动端适配
- 将时间轴中心线从中间移到左侧
- 所有事件卡片改为左侧排列
- 调整字体大小和内边距，确保在小屏幕上的可读性

### 7.2 平板设备适配
- 保持基本布局不变
- 调整搜索和筛选区域的布局

**关键CSS技术**：
```css
/* 平板和手机响应式设计 */
@media screen and (max-width: 768px) {
    /* 时间轴中心线调整到左侧 */
    .timeline::after {
        left: 28px;
    }
    
    /* 所有事件卡片占满宽度 */
    .timeline-item {
        width: 100%;
        padding-left: 5rem;
        padding-right: 1rem;
    }
    
    /* 取消偶数事件卡片的左侧偏移 */
    .timeline-item:nth-child(even) {
        left: 0;
    }
}
```

## 8. 代码结构说明

### 8.1 文件结构

```
├── index.html          # 主页面文件
├── styles.css          # 样式文件
├── script.js           # JavaScript功能文件
└── README.md           # 项目说明文档
```

### 8.2 代码组织

- **HTML文件**：清晰的模块化结构，使用语义化标签
- **CSS文件**：按功能模块组织样式，使用注释分隔不同部分
- **JavaScript文件**：
  - 历史事件数据定义在文件顶部
  - 页面加载完成后执行初始化函数
  - 功能函数独立定义，便于维护和修改
  - 添加详细注释，解释代码功能

## 9. 如何扩展和修改

### 9.1 添加新的历史事件

在`script.js`文件中，找到`historicalEvents`数组，按照相同的数据结构添加新的事件对象：

```javascript
{
    year: 事件年份,          // 公元前用负数表示
    date: "具体时间",       // 如："公元前221年"
    dynasty: "朝代",         // 如："秦朝"
    event: "事件名称",       // 如："秦朝建立"
    location: "发生地点",     // 如："咸阳"
    people: "主要人物"        // 如："秦始皇嬴政"
}
```

### 9.2 修改样式

在`styles.css`文件中，可以修改以下内容来自定义网页外观：

- 颜色方案：修改`header`、`timeline`等元素的背景色
- 字体：修改`body`的`font-family`属性
- 布局：调整元素的`padding`、`margin`和`width`等属性

### 9.3 添加新功能

可以在`script.js`文件中添加新的函数来实现额外功能，例如：
- 按年份范围筛选
- 添加事件详情弹窗
- 实现事件分类功能

## 10. 总结

本项目采用简单的技术栈和清晰的代码结构，实现了一个功能完整、界面友好的中国古代历史时间轴网页。通过本项目，编程新手可以学习到：

- HTML页面结构的搭建
- CSS布局和样式设计，包括响应式设计
- JavaScript基本语法和DOM操作
- 数据处理和交互功能实现

代码中添加了详细的注释，便于理解和修改，可以作为学习前端开发的入门示例。
