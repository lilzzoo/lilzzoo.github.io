// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-写写",
    title: "写写",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-读读",
          title: "读读",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "books-一间只属于自己的房间",
          title: '一间只属于自己的房间',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%B8%80%E9%97%B4%E5%8F%AA%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84%E6%88%BF%E9%97%B4/";
            },},{id: "books-万水千山走遍",
          title: '万水千山走遍',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%B8%87%E6%B0%B4%E5%8D%83%E5%B1%B1%E8%B5%B0%E9%81%8D/";
            },},{id: "books-三体",
          title: '三体',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%B8%89%E4%BD%93/";
            },},{id: "books-不能承受的生命之轻",
          title: '不能承受的生命之轻',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%B8%8D%E8%83%BD%E6%89%BF%E5%8F%97%E7%9A%84%E7%94%9F%E5%91%BD%E4%B9%8B%E8%BD%BB/";
            },},{id: "books-东方快车谋杀案",
          title: '东方快车谋杀案',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%B8%9C%E6%96%B9%E5%BF%AB%E8%BD%A6%E8%B0%8B%E6%9D%80%E6%A1%88/";
            },},{id: "books-东藏记",
          title: '东藏记',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%B8%9C%E8%97%8F%E8%AE%B0/";
            },},{id: "books-乡土中国",
          title: '乡土中国',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%B9%A1%E5%9C%9F%E4%B8%AD%E5%9B%BD/";
            },},{id: "books-人性能达到的境界",
          title: '人性能达到的境界',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%BA%BA%E6%80%A7%E8%83%BD%E8%BE%BE%E5%88%B0%E7%9A%84%E5%A2%83%E7%95%8C/";
            },},{id: "books-人生的智慧",
          title: '人生的智慧',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%BA%BA%E7%94%9F%E7%9A%84%E6%99%BA%E6%85%A7/";
            },},{id: "books-从零开始的女性主义",
          title: '从零开始的女性主义',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84%E5%A5%B3%E6%80%A7%E4%B8%BB%E4%B9%89/";
            },},{id: "books-你是你吃出来的",
          title: '你是你吃出来的',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%BD%A0%E6%98%AF%E4%BD%A0%E5%90%83%E5%87%BA%E6%9D%A5%E7%9A%84/";
            },},{id: "books-你是你吃出来的2",
          title: '你是你吃出来的2',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%BD%A0%E6%98%AF%E4%BD%A0%E5%90%83%E5%87%BA%E6%9D%A5%E7%9A%842/";
            },},{id: "books-俗女养成记",
          title: '俗女养成记',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E4%BF%97%E5%A5%B3%E5%85%BB%E6%88%90%E8%AE%B0/";
            },},{id: "books-倚天屠龙记",
          title: '倚天屠龙记',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%80%9A%E5%A4%A9%E5%B1%A0%E9%BE%99%E8%AE%B0/";
            },},{id: "books-动机与人格",
          title: '动机与人格',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%8A%A8%E6%9C%BA%E4%B8%8E%E4%BA%BA%E6%A0%BC/";
            },},{id: "books-动物农场",
          title: '动物农场',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%8A%A8%E7%89%A9%E5%86%9C%E5%9C%BA/";
            },},{id: "books-北归记",
          title: '北归记',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%8C%97%E5%BD%92%E8%AE%B0/";
            },},{id: "books-南京大屠杀",
          title: '南京大屠杀',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80/";
            },},{id: "books-南渡记",
          title: '南渡记',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%8D%97%E6%B8%A1%E8%AE%B0/";
            },},{id: "books-厌女",
          title: '厌女',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%8E%8C%E5%A5%B3/";
            },},{id: "books-呐喊",
          title: '呐喊',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%91%90%E5%96%8A/";
            },},{id: "books-地下室手记",
          title: '地下室手记',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%9C%B0%E4%B8%8B%E5%AE%A4%E6%89%8B%E8%AE%B0/";
            },},{id: "books-城南旧事",
          title: '城南旧事',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%9F%8E%E5%8D%97%E6%97%A7%E4%BA%8B/";
            },},{id: "books-墙上的斑点",
          title: '墙上的斑点',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%A2%99%E4%B8%8A%E7%9A%84%E6%96%91%E7%82%B9/";
            },},{id: "books-天龙八部",
          title: '天龙八部',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%A4%A9%E9%BE%99%E5%85%AB%E9%83%A8/";
            },},{id: "books-嫌疑人x的献身",
          title: '嫌疑人X的献身',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%AB%8C%E7%96%91%E4%BA%BAX%E7%9A%84%E7%8C%AE%E8%BA%AB/";
            },},{id: "books-存在心理学",
          title: '存在心理学',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%AD%98%E5%9C%A8%E5%BF%83%E7%90%86%E5%AD%A6/";
            },},{id: "books-孽子",
          title: '孽子',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%AD%BD%E5%AD%90/";
            },},{id: "books-射雕英雄传",
          title: '射雕英雄传',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%B0%84%E9%9B%95%E8%8B%B1%E9%9B%84%E4%BC%A0/";
            },},{id: "books-心理与力学",
          title: '心理与力学',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E5%BF%83%E7%90%86%E4%B8%8E%E5%8A%9B%E5%AD%A6/";
            },},{id: "books-悲剧人偶",
          title: '悲剧人偶',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%82%B2%E5%89%A7%E4%BA%BA%E5%81%B6/";
            },},{id: "books-成为波伏瓦",
          title: '成为波伏瓦',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%88%90%E4%B8%BA%E6%B3%A2%E4%BC%8F%E7%93%A6/";
            },},{id: "books-我-厌男",
          title: '我,厌男',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%88%91,%E5%8E%8C%E7%94%B7/";
            },},{id: "books-我们仨",
          title: '我们仨',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%88%91%E4%BB%AC%E4%BB%A8/";
            },},{id: "books-我本芬芳",
          title: '我本芬芳',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%88%91%E6%9C%AC%E8%8A%AC%E8%8A%B3/";
            },},{id: "books-我的宝贝",
          title: '我的宝贝',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%88%91%E7%9A%84%E5%AE%9D%E8%B4%9D/";
            },},{id: "books-我的第一本算法书",
          title: '我的第一本算法书',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%88%91%E7%9A%84%E7%AC%AC%E4%B8%80%E6%9C%AC%E7%AE%97%E6%B3%95%E4%B9%A6/";
            },},{id: "books-我的阿勒泰",
          title: '我的阿勒泰',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%88%91%E7%9A%84%E9%98%BF%E5%8B%92%E6%B3%B0/";
            },},{id: "books-我脑子里的不速之客",
          title: '我脑子里的不速之客',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%88%91%E8%84%91%E5%AD%90%E9%87%8C%E7%9A%84%E4%B8%8D%E9%80%9F%E4%B9%8B%E5%AE%A2/";
            },},{id: "books-房思琪的初恋乐园",
          title: '房思琪的初恋乐园',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%88%BF%E6%80%9D%E7%90%AA%E7%9A%84%E5%88%9D%E6%81%8B%E4%B9%90%E5%9B%AD/";
            },},{id: "books-指匠",
          title: '指匠',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%8C%87%E5%8C%A0/";
            },},{id: "books-撒哈拉的故事",
          title: '撒哈拉的故事',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%92%92%E5%93%88%E6%8B%89%E7%9A%84%E6%95%85%E4%BA%8B/";
            },},{id: "books-放学后",
          title: '放学后',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%94%BE%E5%AD%A6%E5%90%8E/";
            },},{id: "books-服美役",
          title: '服美役',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%9C%8D%E7%BE%8E%E5%BD%B9/";
            },},{id: "books-杀死一只知更鸟",
          title: '杀死一只知更鸟',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%9D%80%E6%AD%BB%E4%B8%80%E5%8F%AA%E7%9F%A5%E6%9B%B4%E9%B8%9F/";
            },},{id: "books-梦里花落知多少",
          title: '梦里花落知多少',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%A2%A6%E9%87%8C%E8%8A%B1%E8%90%BD%E7%9F%A5%E5%A4%9A%E5%B0%91/";
            },},{id: "books-死亡哲学",
          title: '死亡哲学',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%AD%BB%E4%BA%A1%E5%93%B2%E5%AD%A6/";
            },},{id: "books-沉默的大多数",
          title: '沉默的大多数',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%B2%89%E9%BB%98%E7%9A%84%E5%A4%A7%E5%A4%9A%E6%95%B0/";
            },},{id: "books-活着",
          title: '活着',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%B4%BB%E7%9D%80/";
            },},{id: "books-温柔的夜",
          title: '温柔的夜',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%B8%A9%E6%9F%94%E7%9A%84%E5%A4%9C/";
            },},{id: "books-湿胖",
          title: '湿胖',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E6%B9%BF%E8%83%96/";
            },},{id: "books-灵契",
          title: '灵契',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%81%B5%E5%A5%91/";
            },},{id: "books-爱你就像爱生命",
          title: '爱你就像爱生命',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%88%B1%E4%BD%A0%E5%B0%B1%E5%83%8F%E7%88%B1%E7%94%9F%E5%91%BD/";
            },},{id: "books-爱的艺术",
          title: '爱的艺术',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%88%B1%E7%9A%84%E8%89%BA%E6%9C%AF/";
            },},{id: "books-牙医谋杀案",
          title: '牙医谋杀案',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%89%99%E5%8C%BB%E8%B0%8B%E6%9D%80%E6%A1%88/";
            },},{id: "books-特别可爱特别痛快",
          title: '特别可爱特别痛快',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%89%B9%E5%88%AB%E5%8F%AF%E7%88%B1%E7%89%B9%E5%88%AB%E7%97%9B%E5%BF%AB/";
            },},{id: "books-生死疲劳",
          title: '生死疲劳',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%94%9F%E6%AD%BB%E7%96%B2%E5%8A%B3/";
            },},{id: "books-白夜行",
          title: '白夜行',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%99%BD%E5%A4%9C%E8%A1%8C/";
            },},{id: "books-白蛇",
          title: '白蛇',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%99%BD%E8%9B%87/";
            },},{id: "books-看不见的城市",
          title: '看不见的城市',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%9C%8B%E4%B8%8D%E8%A7%81%E7%9A%84%E5%9F%8E%E5%B8%82/";
            },},{id: "books-社会心理学",
          title: '社会心理学',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%A4%BE%E4%BC%9A%E5%BF%83%E7%90%86%E5%AD%A6/";
            },},{id: "books-神雕侠侣",
          title: '神雕侠侣',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%A5%9E%E9%9B%95%E4%BE%A0%E4%BE%A3/";
            },},{id: "books-秋园",
          title: '秋园',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%A7%8B%E5%9B%AD/";
            },},{id: "books-稻草人手记",
          title: '稻草人手记',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%A8%BB%E8%8D%89%E4%BA%BA%E6%89%8B%E8%AE%B0/";
            },},{id: "books-米尼",
          title: '米尼',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%B1%B3%E5%B0%BC/";
            },},{id: "books-经济学",
          title: '经济学',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%BB%8F%E6%B5%8E%E5%AD%A6/";
            },},{id: "books-绿毛水怪",
          title: '绿毛水怪',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%BB%BF%E6%AF%9B%E6%B0%B4%E6%80%AA/";
            },},{id: "books-罗生门",
          title: '罗生门',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E7%BD%97%E7%94%9F%E9%97%A8/";
            },},{id: "books-自愈力的真相",
          title: '自愈力的真相',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E8%87%AA%E6%84%88%E5%8A%9B%E7%9A%84%E7%9C%9F%E7%9B%B8/";
            },},{id: "books-西征记",
          title: '西征记',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E8%A5%BF%E5%BE%81%E8%AE%B0/";
            },},{id: "books-解密",
          title: '解密',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E8%A7%A3%E5%AF%86/";
            },},{id: "books-记一忘三二",
          title: '记一忘三二',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E8%AE%B0%E4%B8%80%E5%BF%98%E4%B8%89%E4%BA%8C/";
            },},{id: "books-豆子芝麻茶",
          title: '豆子芝麻茶',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E8%B1%86%E5%AD%90%E8%8A%9D%E9%BA%BB%E8%8C%B6/";
            },},{id: "books-身体由我",
          title: '身体由我',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E8%BA%AB%E4%BD%93%E7%94%B1%E6%88%91/";
            },},{id: "books-轻舔丝绒",
          title: '轻舔丝绒',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E8%BD%BB%E8%88%94%E4%B8%9D%E7%BB%92/";
            },},{id: "books-送你一匹马",
          title: '送你一匹马',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E9%80%81%E4%BD%A0%E4%B8%80%E5%8C%B9%E9%A9%AC/";
            },},{id: "books-长得好看能当饭吃吗",
          title: '长得好看能当饭吃吗',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E9%95%BF%E5%BE%97%E5%A5%BD%E7%9C%8B%E8%83%BD%E5%BD%93%E9%A5%AD%E5%90%83%E5%90%97/";
            },},{id: "books-雨季不再来",
          title: '雨季不再来',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E9%9B%A8%E5%AD%A3%E4%B8%8D%E5%86%8D%E6%9D%A5/";
            },},{id: "books-青蛇",
          title: '青蛇',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E9%9D%92%E8%9B%87/";
            },},{id: "books-飘",
          title: '飘',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E9%A3%98/";
            },},{id: "books-高效能人士的七个习惯",
          title: '高效能人士的七个习惯',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E9%AB%98%E6%95%88%E8%83%BD%E4%BA%BA%E5%A3%AB%E7%9A%84%E4%B8%83%E4%B8%AA%E4%B9%A0%E6%83%AF/";
            },},{id: "books-鳄鱼手记",
          title: '鳄鱼手记',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E9%B3%84%E9%B1%BC%E6%89%8B%E8%AE%B0/";
            },},{id: "books-鼠疫",
          title: '鼠疫',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/%E9%BC%A0%E7%96%AB/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
