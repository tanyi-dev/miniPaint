import config from ./../../config.js;
import Dialog_class from ./../../libs/popup.js;

class Help_about_class {

	constructor() {
		this.POP = new Dialog_class();
	}

	//about
	about() {
		var email = "support@webpseditor.com";	
		var isZh = (config.LANG === "zh");
		
		var settings = {
			title: isZh ? "关于" : "About",
			params: [
				{title: "", html: "<div style=\"text-align:center;margin-bottom:10px;\"><img style=\"width:64px;height:64px;border-radius:14px;box-shadow:0 4px 12px rgba(0,0,0,0.3);\" class=\"about-logo\" alt=\"Web PSEditor Logo\" src=\"images/favicon.png\" /></div>"},
				{title: isZh ? "名称：" : "Name:", html: "<strong style=\"font-size:15px;color:#38bdf8;\">Web PSEditor</strong> <span style=\"color:#888;font-size:12px;\">(" + (isZh ? "在线PS图片编辑器" : "Online Image Editor") + ")</span>"},
				{title: isZh ? "版本：" : "Version:", value: "v1.0.0 (Core 4.14)"},
				{title: isZh ? "描述：" : "Description:", value: isZh ? "轻量、免安装、安全私密的纯网页 HTML5 专业图像处理工具。" : "Lightweight, privacy-first, in-browser HTML5 professional image editor."},
				{title: isZh ? "发布运营：" : "Publisher:", value: "Web PSEditor Team"},
				{title: isZh ? "官方网站：" : "Website:", html: "<a href=\"https://webpseditor.com/\" target=\"_blank\" style=\"color:#38bdf8;text-decoration:none;font-weight:500;\">https://webpseditor.com/</a>"},
				{title: isZh ? "开源致谢：" : "License & Core:", html: "<span style=\"color:#94a3b8;font-size:12px;\">Powered by <a href=\"https://github.com/viliusle/miniPaint\" target=\"_blank\" style=\"color:#60a5fa;\">miniPaint</a> under MIT License</span>"},
				{title: isZh ? "联系支持：" : "Support:", html: "<a href=\"mailto:" + email + "\" style=\"color:#94a3b8;\">" + email + "</a>"},
			],
		};
		this.POP.show(settings);
	}

}

export default Help_about_class;
