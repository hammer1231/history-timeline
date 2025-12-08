// 中国古代历史事件数据
// 数据结构：id、year（年份）、date（具体时间，无则为null）、dynasty（朝代）、event（事件名称）、location（地点）、figures（主要人物）、brief（事件简介）
const historicalEvents = [
    {
        id: 1,
        year: "公元前2070年",
        date: null,
        dynasty: "夏朝",
        event: "夏朝建立",
        location: "阳城（今河南登封）",
        figures: "禹",
        brief: "禹建立夏朝，这是中国历史上第一个王朝，标志着中国从原始社会进入奴隶社会。"
    },
    {
        id: 22,
        year: "公元前1600年",
        date: null,
        dynasty: "夏朝",
        event: "夏朝灭亡",
        location: "夏都斟鄩（今河南偃师）",
        figures: "夏桀",
        brief: "夏桀残暴统治，商汤率领部落联军推翻夏朝，夏朝灭亡。"
    },
    {
        id: 2,
        year: "公元前1600年",
        date: null,
        dynasty: "商朝",
        event: "商朝建立",
        location: "亳（今河南商丘）",
        figures: "汤",
        brief: "商汤灭夏，建立商朝，商朝是中国第一个有直接文字记载的王朝。"
    },
    {
        id: 23,
        year: "公元前1046年",
        date: "公元前1046年2月",
        dynasty: "商朝",
        event: "商朝灭亡",
        location: "朝歌",
        figures: "商纣王",
        brief: "周武王在牧野之战中击败商朝军队，商纣王自焚，商朝灭亡。"
    },
    {
        id: 3,
        year: "公元前1046年",
        date: "公元前1046年2月",
        dynasty: "西周",
        event: "武王伐纣",
        location: "牧野（今河南新乡）",
        figures: "周武王姬发",
        brief: "周武王率领诸侯联军在牧野之战中打败商纣王，商朝灭亡，西周建立。"
    },
    {
        id: 52,
        year: "公元前1046年",
        date: null,
        dynasty: "西周",
        event: "分封制与宗法制确立",
        location: "镐京",
        figures: "周武王、周公旦",
        brief: "西周实行分封制和宗法制，确立了严格的等级制度和宗法关系，对中国古代社会产生深远影响。",
        politicsSystem: "分封制、宗法制"
    },
    {
        id: 4,
        year: "公元前771年",
        date: null,
        dynasty: "西周",
        event: "西周灭亡",
        location: "镐京",
        figures: "周幽王",
        brief: "犬戎攻破镐京，周幽王被杀，西周灭亡。"
    },
    {
        id: 5,
        year: "公元前770年",
        date: null,
        dynasty: "东周",
        event: "东周开始",
        location: "洛邑（今河南洛阳）",
        figures: "周平王",
        brief: "周平王东迁洛邑，东周开始，东周分为春秋和战国两个时期。"
    },
    {
        id: 24,
        year: "公元前256年",
        date: null,
        dynasty: "东周",
        event: "东周灭亡",
        location: "洛邑",
        figures: "周赧王",
        brief: "秦昭襄王派军队攻打东周，周赧王被杀，东周灭亡。"
    },
    {
        id: 72,
        year: "公元前356年",
        date: null,
        dynasty: "战国",
        event: "商鞅变法开始",
        location: "秦国咸阳",
        figures: "商鞅、秦孝公",
        brief: "商鞅在秦孝公支持下开始变法，推行郡县制、奖励耕战、统一度量衡等措施，使秦国迅速强大，为统一六国奠定基础。"
    },
    {
        id: 6,
        year: "公元前221年",
        date: "公元前221年10月",
        dynasty: "秦朝",
        event: "秦始皇统一六国",
        location: "咸阳",
        figures: "嬴政",
        brief: "秦始皇嬴政统一六国，建立中国历史上第一个统一的中央集权制国家。"
    },
    {
        id: 53,
        year: "公元前221年",
        date: null,
        dynasty: "秦朝",
        event: "郡县制确立",
        location: "咸阳",
        figures: "秦始皇",
        brief: "秦始皇废除分封制，推行郡县制，加强中央对地方的控制，成为中国古代政治制度的基础。",
        politicsSystem: "郡县制"
    },
    {
        id: 54,
        year: "公元前221年",
        date: null,
        dynasty: "秦朝",
        event: "统一文字、度量衡",
        location: "咸阳",
        figures: "秦始皇",
        brief: "秦始皇统一文字（小篆）、度量衡和货币，促进了经济文化交流和国家统一。"
    },
    {
        id: 31,
        year: "公元前210年",
        date: "公元前210年9月",
        dynasty: "秦朝",
        event: "秦二世胡亥继位",
        location: "沙丘（今河北广宗）",
        figures: "胡亥、赵高",
        brief: "秦始皇在沙丘驾崩，赵高篡改遗诏，立胡亥为帝，史称秦二世。"
    },
    {
        id: 7,
        year: "公元前209年",
        date: "公元前209年7月",
        dynasty: "秦朝",
        event: "陈胜吴广起义",
        location: "大泽乡（今安徽宿州）",
        figures: "陈胜、吴广",
        brief: "陈胜、吴广在大泽乡发动起义，这是中国历史上第一次大规模的农民起义。"
    },
    {
        id: 25,
        year: "公元前207年",
        date: null,
        dynasty: "秦朝",
        event: "秦朝灭亡",
        location: "咸阳",
        figures: "秦二世胡亥",
        brief: "刘邦率领军队进入咸阳，秦王子婴投降，秦朝灭亡。"
    },
    {
        id: 32,
        year: "公元前202年",
        date: null,
        dynasty: "西汉",
        event: "西汉建立",
        location: "长安",
        figures: "刘邦",
        brief: "刘邦在垓下之战击败项羽，统一中国，建立汉朝，史称西汉。"
    },
    {
        id: 55,
        year: "公元前134年",
        date: null,
        dynasty: "西汉",
        event: "察举制确立",
        location: "长安",
        figures: "汉武帝",
        brief: "汉武帝推行察举制，通过推荐和考察选拔人才，成为汉朝主要的选官制度。"
    },
    {
        id: 73,
        year: "公元前127年",
        date: null,
        dynasty: "西汉",
        event: "推恩令颁布",
        location: "长安",
        figures: "汉武帝刘彻",
        brief: "汉武帝颁布推恩令，削弱诸侯王势力，加强中央集权，巩固了西汉的统一。"
    },
    {
        id: 33,
        year: "公元前141年",
        date: null,
        dynasty: "西汉",
        event: "汉武帝刘彻继位",
        location: "长安",
        figures: "刘彻",
        brief: "汉武帝刘彻继位，开始了长达54年的统治，开创了西汉的鼎盛时期。"
    },
    {
        id: 76,
        year: "公元前119年",
        date: null,
        dynasty: "西汉",
        event: "汉武帝开拓西域",
        location: "西域（今新疆及中亚地区）",
        figures: "汉武帝刘彻、卫青、霍去病",
        brief: "汉武帝派卫青、霍去病多次出击匈奴，收复河套地区，开通丝绸之路，设置西域都护府，将西域纳入西汉版图。"
    },
    {
        id: 34,
        year: "公元8年",
        date: null,
        dynasty: "西汉",
        event: "西汉灭亡",
        location: "长安",
        figures: "王莽",
        brief: "王莽篡汉，建立新朝，西汉灭亡。"
    },
    {
        id: 26,
        year: "公元25年",
        date: null,
        dynasty: "东汉",
        event: "东汉建立",
        location: "洛阳",
        figures: "刘秀",
        brief: "刘秀击败王莽，重建汉朝，定都洛阳，史称东汉。"
    },
    {
        id: 8,
        year: "公元208年",
        date: "公元208年11月",
        dynasty: "东汉",
        event: "赤壁之战",
        location: "赤壁（今湖北赤壁市）",
        figures: "曹操、刘备、孙权",
        brief: "孙刘联军在赤壁大败曹操，奠定了三国鼎立的基础。"
    },
    {
        id: 27,
        year: "公元220年",
        date: null,
        dynasty: "东汉",
        event: "东汉灭亡",
        location: "洛阳",
        figures: "汉献帝刘协",
        brief: "曹丕废汉献帝刘协，自立为帝，东汉灭亡。"
    },
    {
        id: 9,
        year: "公元220年",
        date: null,
        dynasty: "三国",
        event: "魏国建立",
        location: "洛阳",
        figures: "曹丕",
        brief: "曹丕废汉献帝，自立为帝，国号魏，三国时期开始。"
    },
    {
        id: 10,
        year: "公元221年",
        date: null,
        dynasty: "三国",
        event: "蜀汉建立",
        location: "成都",
        figures: "刘备",
        brief: "刘备在成都称帝，国号汉，史称蜀汉。"
    },
    {
        id: 71,
        year: "公元485年",
        date: null,
        dynasty: "北魏",
        event: "孝文帝改革开始",
        location: "平城（今山西大同）",
        figures: "北魏孝文帝拓跋宏",
        brief: "孝文帝推行改革，包括迁都洛阳、穿汉服、说汉语、改汉姓等，促进了民族融合，加速了北魏的封建化进程。"
    },
    {
        id: 11,
        year: "公元222年",
        date: "公元222年6月",
        dynasty: "三国",
        event: "夷陵之战",
        location: "夷陵（今湖北宜昌）",
        figures: "刘备、陆逊",
        brief: "蜀汉刘备为报关羽之仇，率军攻打东吴，被东吴陆逊击败，蜀汉元气大伤。"
    },
    {
        id: 12,
        year: "公元229年",
        date: null,
        dynasty: "三国",
        event: "东吴建立",
        location: "建业（今江苏南京）",
        figures: "孙权",
        brief: "孙权在武昌称帝，国号吴，史称东吴，三国鼎立局面正式形成。"
    },
    {
        id: 13,
        year: "公元234年",
        date: "公元234年8月",
        dynasty: "三国",
        event: "诸葛亮病逝五丈原",
        location: "五丈原（今陕西岐山）",
        figures: "诸葛亮",
        brief: "诸葛亮第六次北伐曹魏，病逝于五丈原，蜀汉失去了最重要的政治和军事领袖。"
    },
    {
        id: 14,
        year: "公元263年",
        date: null,
        dynasty: "三国",
        event: "蜀汉灭亡",
        location: "成都",
        figures: "刘禅、邓艾、钟会",
        brief: "曹魏派邓艾、钟会率军攻打蜀汉，刘禅投降，蜀汉灭亡。"
    },
    {
        id: 15,
        year: "公元265年",
        date: null,
        dynasty: "三国",
        event: "曹魏灭亡",
        location: "洛阳",
        figures: "司马炎",
        brief: "司马炎废魏元帝曹奂，自立为帝，国号晋，史称西晋，曹魏灭亡。"
    },
    {
        id: 16,
        year: "公元280年",
        date: null,
        dynasty: "三国",
        event: "东吴灭亡",
        location: "建业",
        figures: "孙皓、司马炎",
        brief: "西晋派六路大军攻打东吴，孙皓投降，东吴灭亡，三国时代结束，西晋统一全国。"
    },
    {
        id: 35,
        year: "公元581年",
        date: null,
        dynasty: "隋朝",
        event: "隋文帝杨坚继位",
        location: "长安",
        figures: "杨坚",
        brief: "杨坚代周称帝，建立隋朝，结束了南北朝分裂局面。"
    },
    {
        id: 56,
        year: "公元587年",
        date: null,
        dynasty: "隋朝",
        event: "科举制雏形确立",
        location: "长安",
        figures: "隋文帝杨坚",
        brief: "隋文帝开始用分科考试的方法选拔官员，为科举制的正式确立奠定基础。"
    },
    {
        id: 36,
        year: "公元604年",
        date: null,
        dynasty: "隋朝",
        event: "隋炀帝杨广继位",
        location: "长安",
        figures: "杨广",
        brief: "隋炀帝杨广继位，开始了隋朝的鼎盛与灭亡之路。"
    },
    {
        id: 57,
        year: "公元605年",
        date: null,
        dynasty: "隋朝",
        event: "大运河开凿",
        location: "洛阳至余杭",
        figures: "隋炀帝杨广",
        brief: "隋炀帝下令开凿大运河，连接南北交通，促进了经济文化交流，对后世影响深远。"
    },
    {
        id: 58,
        year: "公元606年",
        date: null,
        dynasty: "隋朝",
        event: "科举制正式确立",
        location: "洛阳",
        figures: "隋炀帝杨广",
        brief: "隋炀帝设立进士科，科举制正式确立，成为中国古代选拔官员的主要制度，延续了1300多年。",
        politicsSystem: "科举制"
    },
    {
        id: 28,
        year: "公元618年",
        date: null,
        dynasty: "隋朝",
        event: "隋朝灭亡",
        location: "江都（今江苏扬州）",
        figures: "隋炀帝杨广",
        brief: "隋炀帝杨广残暴统治，各地起义不断，李渊在长安称帝，建立唐朝，隋朝灭亡。"
    },
    {
        id: 37,
        year: "公元618年",
        date: null,
        dynasty: "唐朝",
        event: "唐高祖李渊继位",
        location: "长安",
        figures: "李渊",
        brief: "李渊在长安称帝，建立唐朝，开启了中国历史上的盛唐时期。"
    },
    {
        id: 59,
        year: "公元624年",
        date: null,
        dynasty: "唐朝",
        event: "三省六部制完善",
        location: "长安",
        figures: "唐高祖李渊",
        brief: "唐朝完善三省六部制，明确中央机构的职责和分工，加强了中央集权。",
        politicsSystem: "三省六部制"
    },
    {
        id: 38,
        year: "公元626年",
        date: "公元626年7月",
        dynasty: "唐朝",
        event: "唐太宗李世民继位",
        location: "长安",
        figures: "李世民",
        brief: "李世民发动玄武门之变，杀死太子李建成，不久后继位，史称唐太宗。"
    },
    {
        id: 77,
        year: "公元630年",
        date: null,
        dynasty: "唐朝",
        event: "唐朝灭东突厥",
        location: "漠北地区",
        figures: "唐太宗李世民、李靖",
        brief: "唐太宗派李靖率军出击东突厥，生擒颉利可汗，东突厥灭亡，唐朝版图扩展到漠北，被尊为'天可汗'。"
    },
    {
        id: 78,
        year: "公元646年",
        date: null,
        dynasty: "唐朝",
        event: "唐朝灭薛延陀",
        location: "漠北地区",
        figures: "唐太宗李世民",
        brief: "唐朝联合回纥等部灭亡薛延陀，设置燕然都护府管理漠北，进一步巩固了唐朝在北方的统治。"
    },
    {
        id: 79,
        year: "公元640年",
        date: null,
        dynasty: "唐朝",
        event: "唐朝经营西域",
        location: "西域（今新疆及中亚地区）",
        figures: "唐太宗李世民、侯君集",
        brief: "唐朝灭高昌国，设置安西都护府，后来又灭龟兹等国，将西域大部分地区纳入唐朝版图，加强了对西域的统治。"
    },
    {
        id: 39,
        year: "公元649年",
        date: "公元649年7月",
        dynasty: "唐朝",
        event: "唐高宗李治继位",
        location: "长安",
        figures: "李治",
        brief: "唐高宗李治继位，继续贞观之治的繁荣，后来立武则天为皇后。"
    },
    {
        id: 40,
        year: "公元690年",
        date: "公元690年10月",
        dynasty: "武周",
        event: "武则天称帝",
        location: "洛阳",
        figures: "武则天",
        brief: "武则天改国号为周，史称武周，成为中国历史上唯一的女皇帝。"
    },
    {
        id: 41,
        year: "公元705年",
        date: "公元705年2月",
        dynasty: "唐朝",
        event: "唐中宗李显复位",
        location: "洛阳",
        figures: "李显、张柬之",
        brief: "张柬之等发动神龙革命，武则天退位，李显复位，恢复唐朝国号。"
    },
    {
        id: 42,
        year: "公元712年",
        date: "公元712年9月",
        dynasty: "唐朝",
        event: "唐玄宗李隆基继位",
        location: "长安",
        figures: "李隆基",
        brief: "唐玄宗李隆基继位，开创了开元盛世，唐朝进入鼎盛时期。"
    },
    {
        id: 60,
        year: "公元868年",
        date: null,
        dynasty: "唐朝",
        event: "雕版印刷术成熟",
        location: "敦煌",
        figures: "王玠",
        brief: "唐朝时期雕版印刷术成熟，《金刚经》是世界上现存最早的有明确日期的雕版印刷品。"
    },
    {
        id: 29,
        year: "公元907年",
        date: null,
        dynasty: "唐朝",
        event: "唐朝灭亡",
        location: "洛阳",
        figures: "唐哀帝李柷",
        brief: "朱温废唐哀帝李柷，自立为帝，建立后梁，唐朝灭亡，中国进入五代十国时期。"
    },
    {
        id: 61,
        year: "公元960年",
        date: null,
        dynasty: "北宋",
        event: "北宋建立",
        location: "开封",
        figures: "赵匡胤",
        brief: "赵匡胤发动陈桥兵变，夺取后周政权，建立北宋，结束了五代十国的分裂局面。"
    },
    {
        id: 74,
        year: "公元1069年",
        date: null,
        dynasty: "北宋",
        event: "王安石变法开始",
        location: "开封",
        figures: "王安石、宋神宗",
        brief: "王安石在宋神宗支持下推行变法，包括青苗法、免役法、方田均税法等，旨在富国强兵，但最终失败。"
    },
    {
        id: 62,
        year: "公元1041年",
        date: null,
        dynasty: "北宋",
        event: "活字印刷术发明",
        location: "杭州",
        figures: "毕昇",
        brief: "北宋平民毕昇发明活字印刷术，大大提高了印刷效率，对文化传播和世界文明发展产生深远影响。"
    },
    {
        id: 63,
        year: "公元11世纪",
        date: null,
        dynasty: "北宋",
        event: "指南针应用于航海",
        location: "广州",
        figures: "不详",
        brief: "北宋时期指南针开始应用于航海，促进了海上贸易和航海技术的发展。"
    },
    {
        id: 85,
        year: "公元1127年",
        date: null,
        dynasty: "南宋",
        event: "南宋建立",
        location: "临安（今浙江杭州）",
        figures: "赵构",
        brief: "金兵攻破北宋都城开封，俘虏宋徽宗、宋钦宗，史称靖康之变。赵构在南京应天府即位，建立南宋，后迁都临安。"
    },
    {
        id: 86,
        year: "公元1127年",
        date: null,
        dynasty: "南宋",
        event: "宋高宗继位",
        location: "南京应天府（今河南商丘）",
        figures: "赵构",
        brief: "宋高宗赵构是宋徽宗第九子，宋钦宗之弟，南宋的开国皇帝。"
    },
    {
        id: 87,
        year: "公元1134-1141年",
        date: null,
        dynasty: "南宋",
        event: "岳飞抗金",
        location: "中原地区",
        figures: "岳飞",
        brief: "岳飞率领岳家军多次击败金兵，收复建康、襄阳等地区，取得郾城大捷，为南宋稳定做出重要贡献。"
    },
    {
        id: 88,
        year: "公元1141年",
        date: null,
        dynasty: "南宋",
        event: "绍兴和议",
        location: "临安",
        figures: "宋高宗、秦桧",
        brief: "南宋与金朝签订绍兴和议，规定南宋向金称臣，每年贡银25万两、绢25万匹，划淮水为界，形成南北对峙局面。"
    },
    {
        id: 89,
        year: "公元1142年",
        date: null,
        dynasty: "南宋",
        event: "岳飞被害",
        location: "临安大理寺",
        figures: "岳飞、秦桧",
        brief: "宋高宗和秦桧以莫须有的罪名杀害岳飞，民族英雄含冤而死，宋金和议得以维持。"
    },
    {
        id: 90,
        year: "公元12世纪",
        date: null,
        dynasty: "南宋",
        event: "朱熹创立理学",
        location: "福建",
        figures: "朱熹",
        brief: "朱熹是南宋著名理学家，创立了以理气论为核心的客观唯心主义理学体系，对后世思想文化影响深远。"
    },
    {
        id: 91,
        year: "公元1162年",
        date: null,
        dynasty: "南宋",
        event: "宋孝宗继位",
        location: "临安",
        figures: "赵昚",
        brief: "宋孝宗赵昚是宋太祖七世孙，宋高宗养子，是南宋较有作为的皇帝，主张抗金，改革弊政。"
    },
    {
        id: 92,
        year: "公元1163年",
        date: null,
        dynasty: "南宋",
        event: "隆兴北伐",
        location: "江淮地区",
        figures: "张浚、李显忠",
        brief: "宋孝宗发动隆兴北伐，试图收复失地，但由于宋军内部不和，最终失败，签订隆兴和议。"
    },
    {
        id: 93,
        year: "公元1189年",
        date: null,
        dynasty: "南宋",
        event: "宋光宗继位",
        location: "临安",
        figures: "赵惇",
        brief: "宋光宗赵惇是宋孝宗第三子，在位期间与孝宗关系不和，朝政由李皇后把持，政治腐败。"
    },
    {
        id: 94,
        year: "公元1194年",
        date: null,
        dynasty: "南宋",
        event: "宋宁宗继位",
        location: "临安",
        figures: "赵扩",
        brief: "宋宁宗赵扩是宋光宗次子，在位期间朝政由韩侂胄、史弥远等权臣把持，曾发动开禧北伐。"
    },
    {
        id: 95,
        year: "公元1206年",
        date: null,
        dynasty: "南宋",
        event: "开禧北伐",
        location: "江淮地区",
        figures: "韩侂胄",
        brief: "韩侂胄主持开禧北伐，试图收复失地，但由于准备不足，宋军大败，韩侂胄被杀，签订嘉定和议。"
    },
    {
        id: 96,
        year: "公元1224年",
        date: null,
        dynasty: "南宋",
        event: "宋理宗继位",
        location: "临安",
        figures: "赵昀",
        brief: "宋理宗赵昀是宋宁宗养子，在位前期由史弥远专权，后期亲政，但朝政日益腐败。"
    },
    {
        id: 97,
        year: "公元1234年",
        date: null,
        dynasty: "南宋",
        event: "端平入洛",
        location: "洛阳",
        figures: "赵葵、全子才",
        brief: "南宋联合蒙古灭金后，派兵收复洛阳等地，但由于粮草不继，宋军大败，蒙古与南宋关系破裂。"
    },
    {
        id: 98,
        year: "公元1264年",
        date: null,
        dynasty: "南宋",
        event: "宋度宗继位",
        location: "临安",
        figures: "赵禥",
        brief: "宋度宗赵禥是宋理宗之侄，在位期间沉迷酒色，朝政由贾似道把持，南宋统治日益腐朽。"
    },
    {
        id: 99,
        year: "公元1271年",
        date: null,
        dynasty: "元朝",
        event: "元朝建立",
        location: "大都（今北京）",
        figures: "忽必烈",
        brief: "忽必烈改国号为元，建立元朝，成为中国历史上第一个由少数民族建立的统一王朝。"
    },
    {
        id: 80,
        year: "公元1279年",
        date: null,
        dynasty: "元朝",
        event: "元朝统一中国",
        location: "崖山（今广东江门）",
        figures: "忽必烈、张弘范",
        brief: "元朝灭南宋，统一全中国，结束了自唐末以来长达300多年的分裂局面，版图达到中国历史上的最大范围。"
    },
    {
        id: 65,
        year: "公元1279年",
        date: null,
        dynasty: "元朝",
        event: "行省制确立",
        location: "大都",
        figures: "忽必烈",
        brief: "元朝实行行省制，将全国分为10个行省，加强了中央对地方的管理，对后世行政区划影响深远。",
        politicsSystem: "行省制"
    },
    {
        id: 81,
        year: "公元13世纪末",
        date: null,
        dynasty: "元朝",
        event: "元朝疆域扩张",
        location: "中亚、西亚、东欧地区",
        figures: "成吉思汗、忽必烈",
        brief: "元朝通过多次西征，将疆域扩张到中亚、西亚甚至东欧地区，成为横跨欧亚大陆的庞大帝国，版图面积超过1300万平方公里。"
    },
    {
        id: 43,
        year: "公元1368年",
        date: null,
        dynasty: "明朝",
        event: "明太祖朱元璋继位",
        location: "应天（今江苏南京）",
        figures: "朱元璋",
        brief: "朱元璋在南京称帝，建立明朝，结束了元朝在中国的统治。"
    },
    {
        id: 66,
        year: "公元1370年",
        date: null,
        dynasty: "明朝",
        event: "八股取士制度确立",
        location: "南京",
        figures: "朱元璋",
        brief: "明朝实行八股取士，规定科举考试内容和形式，禁锢了思想，阻碍了科学文化发展。",
        politicsSystem: "八股取士"
    },
    {
        id: 67,
        year: "公元1405年",
        date: null,
        dynasty: "明朝",
        event: "郑和下西洋",
        location: "刘家港（今江苏太仓）",
        figures: "郑和、明成祖朱棣",
        brief: "郑和率领船队七次下西洋，促进了中国与亚非各国的经济文化交流，是世界航海史上的壮举。"
    },
    {
        id: 75,
        year: "公元1581年",
        date: null,
        dynasty: "明朝",
        event: "张居正推行一条鞭法",
        location: "北京",
        figures: "张居正、明神宗",
        brief: "张居正推行一条鞭法，将田赋、徭役、杂税合并为一条，按田亩征收银两，简化了税制，增加了财政收入。"
    },
    {
        id: 44,
        year: "公元1398年",
        date: null,
        dynasty: "明朝",
        event: "建文帝朱允炆继位",
        location: "南京",
        figures: "朱允炆",
        brief: "明太祖朱元璋驾崩，皇太孙朱允炆继位，史称建文帝。"
    },
    {
        id: 45,
        year: "公元1402年",
        date: "公元1402年7月",
        dynasty: "明朝",
        event: "明成祖朱棣继位",
        location: "南京",
        figures: "朱棣",
        brief: "朱棣发动靖难之役，攻破南京，建文帝失踪，朱棣继位，史称明成祖。"
    },
    {
        id: 46,
        year: "公元1424年",
        date: "公元1424年8月",
        dynasty: "明朝",
        event: "明仁宗朱高炽继位",
        location: "北京",
        figures: "朱高炽",
        brief: "明成祖朱棣驾崩，朱高炽继位，实行仁政，史称明仁宗。"
    },
    {
        id: 30,
        year: "公元1644年",
        date: "公元1644年3月",
        dynasty: "明朝",
        event: "明朝灭亡",
        location: "北京",
        figures: "崇祯帝朱由检",
        brief: "李自成率领农民起义军攻入北京，崇祯帝自缢，明朝灭亡。"
    },
    {
        id: 47,
        year: "公元1636年",
        date: "公元1636年4月",
        dynasty: "清朝",
        event: "清太宗皇太极称帝",
        location: "盛京（今辽宁沈阳）",
        figures: "皇太极",
        brief: "皇太极改国号为清，建立清朝，为入关统一中国奠定基础。"
    },
    {
        id: 68,
        year: "公元1757年",
        date: null,
        dynasty: "清朝",
        event: "闭关锁国政策确立",
        location: "北京",
        figures: "乾隆帝弘历",
        brief: "乾隆帝下令关闭除广州外的所有通商口岸，实行闭关锁国政策，导致中国逐渐落后于世界发展潮流。"
    },
    {
        id: 48,
        year: "公元1644年",
        date: "公元1644年10月",
        dynasty: "清朝",
        event: "顺治帝福临继位入关",
        location: "北京",
        figures: "福临、多尔衮",
        brief: "顺治帝福临在北京登基，清朝正式入主中原，开始统治全国。"
    },
    {
        id: 49,
        year: "公元1661年",
        date: "公元1661年2月",
        dynasty: "清朝",
        event: "康熙帝玄烨继位",
        location: "北京",
        figures: "玄烨",
        brief: "顺治帝驾崩，康熙帝玄烨继位，开始了长达61年的统治，开创了康乾盛世。"
    },
    {
        id: 50,
        year: "公元1722年",
        date: "公元1722年12月",
        dynasty: "清朝",
        event: "雍正帝胤禛继位",
        location: "北京",
        figures: "胤禛",
        brief: "康熙帝驾崩，雍正帝胤禛继位，实行一系列改革，加强中央集权。"
    },
    {
        id: 51,
        year: "公元1735年",
        date: "公元1735年10月",
        dynasty: "清朝",
        event: "乾隆帝弘历继位",
        location: "北京",
        figures: "弘历",
        brief: "雍正帝驾崩，乾隆帝弘历继位，继续康雍乾盛世的繁荣，清朝达到鼎盛。"
    },
    {
        id: 20,
        year: "公元1911年",
        date: "公元1911年10月10日",
        dynasty: "清朝",
        event: "辛亥革命爆发",
        location: "武昌（今湖北武汉）",
        figures: "孙中山",
        brief: "武昌起义爆发，辛亥革命开始，推翻了清朝统治，结束了中国两千多年的封建帝制。"
    },
    {
        id: 21,
        year: "公元1912年",
        date: null,
        dynasty: "清朝",
        event: "清朝灭亡",
        location: "北京",
        figures: "溥仪",
        brief: "宣统帝溥仪退位，清朝灭亡，中国进入民国时期。"
    }
];

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化时间轴
    renderEventsAndNavigation(historicalEvents);
    
    // 初始化朝代筛选下拉菜单
    initDynastyFilter();
    
    // 添加事件监听器
    addEventListeners();
});

// 辅助函数：将年份字符串转换为可比较的数字
function yearToNumber(yearStr) {
    const numStr = yearStr.replace(/[^\d-]/g, '');
    const num = parseInt(numStr);
    return yearStr.includes('公元前') ? -num : num;
}

// 渲染历史事件卡片和时间轴导航
// 搜索词高亮函数
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    
    // 创建正则表达式，不区分大小写
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    
    // 使用荧光黄背景和主题色文字高亮搜索词
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function renderEventsAndNavigation(events, searchTerm = '') {
    // 获取容器元素
    const eventsContainer = document.getElementById('eventsContainer');
    const timelineNavigation = document.getElementById('timelineNavigation');
    
    // 清空容器内容
    eventsContainer.innerHTML = '';
    timelineNavigation.innerHTML = '<h3>中国古代历史时间轴</h3>';
    
    // 如果没有搜索结果，显示提示信息
    if (events.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = '未找到相关结果';
        eventsContainer.appendChild(noResults);
        return;
    }
    
    // 按年代正序排序事件（先远古，后近代）
    const sortedEvents = [...events].sort((a, b) => {
        // 首先按年份排序
        const yearA = yearToNumber(a.year);
        const yearB = yearToNumber(b.year);
        
        if (yearA !== yearB) {
            return yearA - yearB;
        }
        
        // 同一年份按月份排序
        if (a.date && b.date) {
            return a.date.localeCompare(b.date, 'zh-CN');
        }
        
        // 没有月份的排后面
        if (a.date && !b.date) return -1;
        if (!a.date && b.date) return 1;
        
        // 同一年份且都没有月份，按事件id排序（代表重要性）
        return a.id - b.id;
    });
    
    // 按朝代分组事件
    const eventsByDynasty = {};
    sortedEvents.forEach(event => {
        if (!eventsByDynasty[event.dynasty]) {
            eventsByDynasty[event.dynasty] = [];
        }
        eventsByDynasty[event.dynasty].push(event);
    });
    
    // 创建时间轴导航列表
    const navList = document.createElement('ul');
    navList.className = 'timeline-nav-list';
    
    // 遍历每个朝代
    Object.keys(eventsByDynasty).forEach(dynasty => {
        // 获取该朝代的所有事件
        const dynastyEvents = eventsByDynasty[dynasty];
        
        // 创建朝代标题
        const dynastyItem = document.createElement('li');
        dynastyItem.className = 'dynasty-item';
        
        const dynastyTitle = document.createElement('div');
        dynastyTitle.className = 'dynasty-title';
        dynastyTitle.innerHTML = `
            <span class="dynasty-name">${dynasty}</span>
            <span class="expand-arrow">▼</span>
        `;
        
        // 添加点击事件监听器，点击时滚动到该朝代的第一张卡片并切换展开/收起状态
        dynastyTitle.addEventListener('click', (e) => {
            // 如果点击的是箭头或标题文本
            if (e.target.classList.contains('dynasty-title') || 
                e.target.classList.contains('dynasty-name') || 
                e.target.classList.contains('expand-arrow')) {
                
                // 切换展开/收起状态
                const isExpanded = yearList.style.display === 'block';
                yearList.style.display = isExpanded ? 'none' : 'block';
                
                // 切换箭头方向
                const arrow = dynastyTitle.querySelector('.expand-arrow');
                arrow.textContent = isExpanded ? '▼' : '▲';
                
                // 如果是展开状态，不执行滚动操作
                if (isExpanded) {
                    return;
                }
                
                // 获取该朝代的第一个事件
                const firstEvent = dynastyEvents[0];
                // 获取第一个事件的ID
                const firstEventId = `event-${firstEvent.id}`;
                // 平滑滚动到对应的事件卡片
                document.getElementById(firstEventId).scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
        
        dynastyItem.appendChild(dynastyTitle);
        
        // 创建年份列表
        const yearList = document.createElement('ul');
        yearList.className = 'year-list';
        // 默认隐藏年份列表
        yearList.style.display = 'none';
        
        // 遍历该朝代的每个事件
        dynastyEvents.forEach(event => {
            // 为事件创建唯一ID
            const eventId = `event-${event.id}`;
            
            // 创建事件卡片
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.id = eventId;
            
            // 构建政治制度标签HTML
            const politicsSystemHtml = event.politicsSystem ? 
                `<div class="event-politics">
                    <strong>政治制度: </strong>
                    ${event.politicsSystem.split('、').map(sys => `<span class="politics-tag">${sys}</span>`).join('')}
                </div>` : '';
            
            // 高亮搜索词
            const highlightedEvent = highlightSearchTerm(event.event, searchTerm);
            const highlightedLocation = highlightSearchTerm(event.location, searchTerm);
            const highlightedFigures = highlightSearchTerm(event.figures, searchTerm);
            const highlightedBrief = highlightSearchTerm(event.brief || '', searchTerm);
            
            eventCard.innerHTML = `
                <div class="event-header">
                    <h4 class="event-title">${highlightedEvent}</h4>
                    <span class="event-year">${event.year}</span>
                </div>
                <span class="dynasty-tag">${event.dynasty}</span>
                <p class="event-date">${event.date || ''}</p>
                <p class="event-location">地点: ${highlightedLocation}</p>
                <p class="event-people">人物: ${highlightedFigures}</p>
                ${politicsSystemHtml}
                <p class="event-brief">${highlightedBrief}</p>
            `;
            
            // 添加事件卡片到容器
            eventsContainer.appendChild(eventCard);
            
            // 创建年份导航项
            const yearItem = document.createElement('li');
            yearItem.className = 'year-item';
            yearItem.textContent = `${event.year} - ${event.event}`;
            yearItem.addEventListener('click', () => {
                // 平滑滚动到对应的事件卡片
                document.getElementById(eventId).scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            });
            
            yearList.appendChild(yearItem);
        });
        
        dynastyItem.appendChild(yearList);
        navList.appendChild(dynastyItem);
    });
    
    timelineNavigation.appendChild(navList);
}

// 在模态窗口中渲染时间轴导航
function renderModalTimelineNavigation(events) {
    // 获取模态窗口中的导航容器
    const modalTimelineNavigation = document.getElementById('modalTimelineNavigation');
    
    // 清空容器内容
    modalTimelineNavigation.innerHTML = '';
    
    // 按年代正序排序事件（先远古，后近代）
    const sortedEvents = [...events].sort((a, b) => {
        // 首先按年份排序
        const yearA = yearToNumber(a.year);
        const yearB = yearToNumber(b.year);
        
        if (yearA !== yearB) {
            return yearA - yearB;
        }
        
        // 同一年份按月份排序
        if (a.date && b.date) {
            return a.date.localeCompare(b.date, 'zh-CN');
        }
        
        // 没有月份的排后面
        if (a.date && !b.date) return -1;
        if (!a.date && b.date) return 1;
        
        // 同一年份且都没有月份，按事件id排序（代表重要性）
        return a.id - b.id;
    });
    
    // 按朝代分组事件
    const eventsByDynasty = {};
    sortedEvents.forEach(event => {
        if (!eventsByDynasty[event.dynasty]) {
            eventsByDynasty[event.dynasty] = [];
        }
        eventsByDynasty[event.dynasty].push(event);
    });
    
    // 创建时间轴导航列表
    const navList = document.createElement('ul');
    navList.className = 'timeline-nav-list';
    
    // 遍历每个朝代
    Object.keys(eventsByDynasty).forEach(dynasty => {
        // 获取该朝代的所有事件
        const dynastyEvents = eventsByDynasty[dynasty];
        
        // 创建朝代标题
        const dynastyItem = document.createElement('li');
        dynastyItem.className = 'dynasty-item';
        
        const dynastyTitle = document.createElement('div');
        dynastyTitle.className = 'dynasty-title';
        dynastyTitle.innerHTML = `
            <span class="dynasty-name">${dynasty}</span>
            <span class="expand-arrow">▼</span>
        `;
        
        // 添加点击事件监听器，点击时展开/收起年份列表
        dynastyTitle.addEventListener('click', (e) => {
            if (e.target.classList.contains('dynasty-title') || 
                e.target.classList.contains('dynasty-name') || 
                e.target.classList.contains('expand-arrow')) {
                
                // 切换展开/收起状态
                const isExpanded = yearList.style.display === 'block';
                yearList.style.display = isExpanded ? 'none' : 'block';
                
                // 切换箭头方向
                const arrow = dynastyTitle.querySelector('.expand-arrow');
                arrow.textContent = isExpanded ? '▼' : '▲';
            }
        });
        
        dynastyItem.appendChild(dynastyTitle);
        
        // 创建年份列表
        const yearList = document.createElement('ul');
        yearList.className = 'year-list';
        // 默认隐藏年份列表
        yearList.style.display = 'none';
        
        // 遍历该朝代的每个事件
        dynastyEvents.forEach(event => {
            // 为事件创建唯一ID
            const eventId = `event-${event.id}`;
            
            // 创建年份导航项
            const yearItem = document.createElement('li');
            yearItem.className = 'year-item';
            yearItem.textContent = `${event.year} - ${event.event}`;
            yearItem.addEventListener('click', () => {
                // 关闭模态窗口
                closeModal();
                
                // 平滑滚动到对应的事件卡片
                setTimeout(() => {
                    document.getElementById(eventId).scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }, 100); // 延迟执行以确保模态窗口已关闭
            });
            
            yearList.appendChild(yearItem);
        });
        
        dynastyItem.appendChild(yearList);
        navList.appendChild(dynastyItem);
    });
    
    modalTimelineNavigation.appendChild(navList);
}

// 初始化朝代筛选下拉菜单
function initDynastyFilter() {
    // 获取筛选下拉菜单
    const dynastyFilter = document.getElementById('dynastyFilter');
    
    // 定义朝代分组
    const dynastyGroups = [
        {
            name: '远古时期',
            dynasties: ['远古']
        },
        {
            name: '夏商周',
            dynasties: ['夏朝', '商朝', '西周', '东周']
        },
        {
            name: '春秋战国',
            dynasties: ['春秋', '战国']
        },
        {
            name: '秦汉',
            dynasties: ['秦朝', '西汉', '东汉']
        },
        {
            name: '三国两晋南北朝',
            dynasties: ['三国', '西晋', '东晋', '南北朝']
        },
        {
            name: '隋唐',
            dynasties: ['隋朝', '唐朝']
        },
        {
            name: '五代十国宋辽夏金',
            dynasties: ['五代十国', '北宋', '南宋', '辽', '夏', '金']
        },
        {
            name: '元明清',
            dynasties: ['元朝', '明朝', '清朝']
        }
    ];
    
    // 提取所有不重复的朝代
    const allDynasties = [...new Set(historicalEvents.map(event => event.dynasty))];
    
    // 为每个分组创建optgroup
    dynastyGroups.forEach(group => {
        // 只显示包含实际事件的分组
        const groupDynasties = group.dynasties.filter(dynasty => allDynasties.includes(dynasty));
        if (groupDynasties.length > 0) {
            const optgroup = document.createElement('optgroup');
            optgroup.label = group.name;
            
            // 为每个朝代创建选项
            groupDynasties.forEach(dynasty => {
                const option = document.createElement('option');
                option.value = dynasty;
                option.textContent = dynasty;
                optgroup.appendChild(option);
            });
            
            dynastyFilter.appendChild(optgroup);
        }
    });
}

// 添加事件监听器
function addEventListeners() {
    // 搜索按钮事件
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', handleSearch);
    
    // 搜索输入框回车事件
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // 朝代筛选事件
    const dynastyFilter = document.getElementById('dynastyFilter');
    dynastyFilter.addEventListener('change', handleFilter);
    
    // 重置按钮事件
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', handleReset);
    
    // 汉堡菜单事件
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    hamburgerMenu.addEventListener('click', openModal);
    
    // 关闭模态窗口事件
    const closeModalBtn = document.getElementById('closeModal');
    closeModalBtn.addEventListener('click', closeModal);
    
    // 点击模态窗口外部关闭
    const modal = document.getElementById('timelineModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // ESC键关闭模态窗口
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// 打开模态窗口
function openModal() {
    const modal = document.getElementById('timelineModal');
    modal.style.display = 'block';
    
    // 在模态窗口中渲染时间轴导航
    renderModalTimelineNavigation(historicalEvents);
}

// 关闭模态窗口
function closeModal() {
    const modal = document.getElementById('timelineModal');
    modal.style.display = 'none';
}

// 搜索功能
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const selectedDynasty = document.getElementById('dynastyFilter').value;
    
    // 过滤事件
    let filteredEvents = historicalEvents;
    
    // 应用搜索过滤
    if (searchTerm) {
        filteredEvents = filteredEvents.filter(event => {
            return event.event.toLowerCase().includes(searchTerm) ||
                   event.figures.toLowerCase().includes(searchTerm) ||
                   event.location.toLowerCase().includes(searchTerm) ||
                   (event.brief && event.brief.toLowerCase().includes(searchTerm));
        });
    }
    
    // 应用朝代过滤
    if (selectedDynasty) {
        filteredEvents = filteredEvents.filter(event => event.dynasty === selectedDynasty);
    }
    
    // 重新渲染时间轴和导航，传递搜索词用于高亮
    renderEventsAndNavigation(filteredEvents, searchTerm);
}

// 筛选功能
function handleFilter() {
    handleSearch(); // 筛选和搜索使用相同的逻辑
}

// 重置功能
function handleReset() {
    // 清空搜索输入框
    document.getElementById('searchInput').value = '';
    
    // 重置朝代筛选
    document.getElementById('dynastyFilter').value = '';
    
    // 重新渲染完整的时间轴和导航
    renderEventsAndNavigation(historicalEvents);
}