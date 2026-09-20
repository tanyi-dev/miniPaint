import config from './../../config.js';
import alertify from './../../../../node_modules/alertifyjs/build/alertify.min.js';

class Edit_paste_class {

	paste() {
		var msg = (config.LANG === 'zh') ? '请使用快捷键 Ctrl+V 从剪贴板粘贴。' : 'Use Ctrl+V keyboard shortcut to paste from Clipboard.';
		alertify.error(msg);
	}
}

export default Edit_paste_class;
