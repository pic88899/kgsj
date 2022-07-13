window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/app_skins/components/AlertSkin.exml'] = window.AlertSkin = (function (_super) {
	__extends(AlertSkin, _super);
	var AlertSkin$Skin1 = 	(function (_super) {
		__extends(AlertSkin$Skin1, _super);
		function AlertSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AlertSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "closebtn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AlertSkin$Skin1;
	})(eui.Skin);

	var AlertSkin$Skin2 = 	(function (_super) {
		__extends(AlertSkin$Skin2, _super);
		function AlertSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AlertSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cancel_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AlertSkin$Skin2;
	})(eui.Skin);

	var AlertSkin$Skin3 = 	(function (_super) {
		__extends(AlertSkin$Skin3, _super);
		function AlertSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AlertSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x07536b;
			t.textColor = 0xfdfddb;
			t.verticalCenter = 0;
			return t;
		};
		return AlertSkin$Skin3;
	})(eui.Skin);

	function AlertSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","cancelBtn","confirmBtn","contentTF"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = AlertSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.2;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 36;
		t.y = 386;
		t.elementsContent = [this._Image1_i(),this.closeBtn_i(),this.cancelBtn_i(),this.confirmBtn_i(),this.contentTF_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 438;
		t.scale9Grid = new egret.Rectangle(84,83,506,500);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "infobg2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 29;
		t.anchorOffsetY = 29;
		t.label = "";
		t.x = 642;
		t.y = 40;
		t.skinName = AlertSkin$Skin1;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Button();
		this.cancelBtn = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 40;
		t.label = "";
		t.visible = false;
		t.x = 200;
		t.y = 328;
		t.skinName = AlertSkin$Skin2;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new eui.Button();
		this.confirmBtn = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 28;
		t.horizontalCenter = 0;
		t.label = "确 定";
		t.y = 344;
		t.skinName = AlertSkin$Skin3;
		return t;
	};
	_proto.contentTF_i = function () {
		var t = new eui.Label();
		this.contentTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 198;
		t.size = 32;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x503a1d;
		t.verticalAlign = "middle";
		t.width = 538;
		t.x = 76;
		t.y = 88;
		return t;
	};
	return AlertSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/components/BannerItemSkin.exml'] = window.BannerItemSkin = (function (_super) {
	__extends(BannerItemSkin, _super);
	function BannerItemSkin() {
		_super.call(this);
		this.skinParts = ["banner"];
		
		this.height = 289;
		this.width = 687;
		this.elementsContent = [this.banner_i()];
	}
	var _proto = BannerItemSkin.prototype;

	_proto.banner_i = function () {
		var t = new eui.Image();
		this.banner = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "banner1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return BannerItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/components/BannerSkin.exml'] = window.BannerSkin = (function (_super) {
	__extends(BannerSkin, _super);
	function BannerSkin() {
		_super.call(this);
		this.skinParts = ["list","content","scroller","dotBar"];
		
		this.elementsContent = [this.scroller_i(),this.dotBar_i()];
	}
	var _proto = BannerSkin.prototype;

	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.height = 289;
		t.width = 687;
		t.viewport = this.content_i();
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.percentHeight = 100;
		t.x = 273;
		t.y = 41;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto.dotBar_i = function () {
		var t = new eui.TabBar();
		this.dotBar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.5;
		t.itemRendererSkinName = DotSelectedItemSkin;
		t.y = 295;
		t.layout = this._HorizontalLayout3_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.d = "1";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.d = "2";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.d = "3";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.d = "4";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		return t;
	};
	return BannerSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/components/DotSelectedItemSkin.exml'] = window.DotSelectedItemSkin = (function (_super) {
	__extends(DotSelectedItemSkin, _super);
	function DotSelectedItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","visible",false)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image2","visible",false)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = DotSelectedItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "slot_s_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "slot_d_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return DotSelectedItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/components/NoticeSkin.exml'] = window.NoticeSkin = (function (_super) {
	__extends(NoticeSkin, _super);
	function NoticeSkin() {
		_super.call(this);
		this.skinParts = ["noticeTF","maskRec"];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.noticeTF_i(),this.maskRec_i()];
	}
	var _proto = NoticeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tx_notice_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "tx_notice_ic_png";
		t.x = 18;
		t.y = 8;
		return t;
	};
	_proto.noticeTF_i = function () {
		var t = new eui.Label();
		this.noticeTF = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 40;
		t.size = 26;
		t.stroke = 2;
		t.text = "公告：";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 626;
		t.x = 64;
		t.y = 4;
		return t;
	};
	_proto.maskRec_i = function () {
		var t = new eui.Rect();
		this.maskRec = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.width = 646;
		t.x = 59;
		t.y = 3;
		return t;
	};
	return NoticeSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/components/SystemTipSkin.exml'] = window.SystemTipSkin = (function (_super) {
	__extends(SystemTipSkin, _super);
	function SystemTipSkin() {
		_super.call(this);
		this.skinParts = ["messageTF"];
		
		this.elementsContent = [this._Image1_i(),this.messageTF_i()];
	}
	var _proto = SystemTipSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sysTipBg_png";
		return t;
	};
	_proto.messageTF_i = function () {
		var t = new eui.Label();
		this.messageTF = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Lucida Family";
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.size = 26;
		t.stroke = 2;
		t.text = "系统提示";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	return SystemTipSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/home/ActivitySkin.exml'] = window.ActivitySkin = (function (_super) {
	__extends(ActivitySkin, _super);
	var ActivitySkin$Skin4 = 	(function (_super) {
		__extends(ActivitySkin$Skin4, _super);
		function ActivitySkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActivitySkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "back_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ActivitySkin$Skin4;
	})(eui.Skin);

	function ActivitySkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","item1","item2","item3"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.closeBtn_i(),this._Label1_i(),this.item1_i(),this.item2_i(),this.item3_i()];
	}
	var _proto = ActivitySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "bg2_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "titlebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 37;
		t.label = "";
		t.x = 76;
		t.y = 42;
		t.skinName = ActivitySkin$Skin4;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "精彩活动";
		t.x = 308;
		t.y = 108;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Image();
		this.item1 = t;
		t.source = "activitybanner_png";
		t.x = 12;
		t.y = 194;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Image();
		this.item2 = t;
		t.source = "activitybanner2_png";
		t.x = 12;
		t.y = 514;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Image();
		this.item3 = t;
		t.source = "activitybanner3_png";
		t.x = 12;
		t.y = 834;
		return t;
	};
	return ActivitySkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/home/HomeSkin.exml'] = window.HomeSkin = (function (_super) {
	__extends(HomeSkin, _super);
	var HomeSkin$Skin5 = 	(function (_super) {
		__extends(HomeSkin$Skin5, _super);
		function HomeSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "czmenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return HomeSkin$Skin5;
	})(eui.Skin);

	var HomeSkin$Skin6 = 	(function (_super) {
		__extends(HomeSkin$Skin6, _super);
		function HomeSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ggmenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return HomeSkin$Skin6;
	})(eui.Skin);

	var HomeSkin$Skin7 = 	(function (_super) {
		__extends(HomeSkin$Skin7, _super);
		function HomeSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dtmenu_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return HomeSkin$Skin7;
	})(eui.Skin);

	var HomeSkin$Skin8 = 	(function (_super) {
		__extends(HomeSkin$Skin8, _super);
		function HomeSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "kfmenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return HomeSkin$Skin8;
	})(eui.Skin);

	var HomeSkin$Skin9 = 	(function (_super) {
		__extends(HomeSkin$Skin9, _super);
		function HomeSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "memenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return HomeSkin$Skin9;
	})(eui.Skin);

	var HomeSkin$Skin10 = 	(function (_super) {
		__extends(HomeSkin$Skin10, _super);
		function HomeSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomeSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "kefuicon2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomeSkin$Skin10;
	})(eui.Skin);

	function HomeSkin() {
		_super.call(this);
		this.skinParts = ["item1","item2","rechargeBtn","noticeBtn","hallBtn","kfBtn","meBtn","kfBtn2"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this.item1_i(),this.item2_i(),this._Group1_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Label1_i(),this.kfBtn2_i()];
	}
	var _proto = HomeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp5_png";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topbar1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Image();
		this.item1 = t;
		t.source = "item1_png";
		t.x = 22;
		t.y = 570;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Image();
		this.item2 = t;
		t.source = "item2_png";
		t.x = 22;
		t.y = 810;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 115;
		t.width = 750;
		t.x = 0;
		t.elementsContent = [this._Image3_i(),this.rechargeBtn_i(),this.noticeBtn_i(),this.hallBtn_i(),this.kfBtn_i(),this.meBtn_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "bottombar_png";
		t.y = 0;
		return t;
	};
	_proto.rechargeBtn_i = function () {
		var t = new eui.Button();
		this.rechargeBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.x = 86;
		t.y = 59;
		t.skinName = HomeSkin$Skin5;
		return t;
	};
	_proto.noticeBtn_i = function () {
		var t = new eui.Button();
		this.noticeBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 240;
		t.y = 59;
		t.skinName = HomeSkin$Skin6;
		return t;
	};
	_proto.hallBtn_i = function () {
		var t = new eui.Button();
		this.hallBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 382;
		t.y = 69;
		t.skinName = HomeSkin$Skin7;
		return t;
	};
	_proto.kfBtn_i = function () {
		var t = new eui.Button();
		this.kfBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 516;
		t.y = 59;
		t.skinName = HomeSkin$Skin8;
		return t;
	};
	_proto.meBtn_i = function () {
		var t = new eui.Button();
		this.meBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 658;
		t.y = 59;
		t.skinName = HomeSkin$Skin9;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "logo3_png";
		t.x = 44;
		t.y = 96;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "banner1_png";
		t.visible = false;
		t.x = 32;
		t.y = 170;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "gameicon_png";
		t.x = 38;
		t.y = 520;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "所有游戏";
		t.textColor = 0x191919;
		t.x = 84;
		t.y = 520;
		return t;
	};
	_proto.kfBtn2_i = function () {
		var t = new eui.Button();
		this.kfBtn2 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.label = "";
		t.x = 666;
		t.y = 1106;
		t.skinName = HomeSkin$Skin10;
		return t;
	};
	return HomeSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/home/RechargeActivitySkin.exml'] = window.RechargeActivitySkin = (function (_super) {
	__extends(RechargeActivitySkin, _super);
	var RechargeActivitySkin$Skin11 = 	(function (_super) {
		__extends(RechargeActivitySkin$Skin11, _super);
		function RechargeActivitySkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RechargeActivitySkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "closebtn3_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RechargeActivitySkin$Skin11;
	})(eui.Skin);

	function RechargeActivitySkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","content","closerectBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = RechargeActivitySkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 37;
		t.y = 217;
		t.elementsContent = [this.closeBtn_i(),this._Image1_i(),this.content_i(),this._Label1_i(),this.closerectBtn_i()];
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 39;
		t.anchorOffsetY = 43;
		t.label = "";
		t.x = 587;
		t.y = 8;
		t.skinName = RechargeActivitySkin$Skin11;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.source = "iframebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 561;
		t.lineSpacing = 8;
		t.multiline = true;
		t.size = 24;
		t.text = "充值500以上的送 58.88 积分\n充值1000以上的送 88.88 积分";
		t.textAlign = "left";
		t.textColor = 0x008f0d;
		t.verticalAlign = "top";
		t.width = 582;
		t.x = 46;
		t.y = 87;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "活动详情";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 129;
		t.x = 253;
		t.y = 21;
		return t;
	};
	_proto.closerectBtn_i = function () {
		var t = new eui.Rect();
		this.closerectBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 98;
		t.width = 102;
		t.x = 537;
		t.y = -43;
		return t;
	};
	return RechargeActivitySkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/home/RedpacketTixianSkin.exml'] = window.RedpacketTixianSkin = (function (_super) {
	__extends(RedpacketTixianSkin, _super);
	var RedpacketTixianSkin$Skin12 = 	(function (_super) {
		__extends(RedpacketTixianSkin$Skin12, _super);
		function RedpacketTixianSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RedpacketTixianSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hb_closebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RedpacketTixianSkin$Skin12;
	})(eui.Skin);

	function RedpacketTixianSkin() {
		_super.call(this);
		this.skinParts = ["title","moneyTF","closeBtn","closerectBtn","confirmBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = RedpacketTixianSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 55;
		t.y = 217;
		t.elementsContent = [this._Image1_i(),this.title_i(),this.moneyTF_i(),this._Label1_i(),this.closeBtn_i(),this.closerectBtn_i(),this._Label2_i(),this.confirmBtn_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.source = "hb_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 44;
		t.text = "可领取红包：";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 375;
		t.x = 136;
		t.y = 169;
		return t;
	};
	_proto.moneyTF_i = function () {
		var t = new eui.Label();
		this.moneyTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 80;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0xdf5535;
		t.verticalAlign = "middle";
		t.width = 450;
		t.x = 64;
		t.y = 307;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.stroke = 2;
		t.strokeColor = 0xffffff;
		t.text = "红包";
		t.textAlign = "center";
		t.textColor = 0xae6c28;
		t.verticalAlign = "middle";
		t.width = 129;
		t.x = 259;
		t.y = 15;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 39;
		t.anchorOffsetY = 43;
		t.label = "";
		t.x = 609;
		t.y = 78;
		t.skinName = RedpacketTixianSkin$Skin12;
		return t;
	};
	_proto.closerectBtn_i = function () {
		var t = new eui.Rect();
		this.closerectBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 98;
		t.width = 102;
		t.x = 531;
		t.y = 11;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "立 即 提 现";
		t.textColor = 0xb76324;
		t.y = 595;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new eui.Rect();
		this.confirmBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.width = 432;
		t.x = 101;
		t.y = 575;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "投注满10000可以领红包";
		t.textAlign = "center";
		t.y = 687;
		return t;
	};
	return RedpacketTixianSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/home/XiaoXiDetailSkin.exml'] = window.XiaoXiDetailSkin = (function (_super) {
	__extends(XiaoXiDetailSkin, _super);
	var XiaoXiDetailSkin$Skin13 = 	(function (_super) {
		__extends(XiaoXiDetailSkin$Skin13, _super);
		function XiaoXiDetailSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = XiaoXiDetailSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "closebtn7_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return XiaoXiDetailSkin$Skin13;
	})(eui.Skin);

	function XiaoXiDetailSkin() {
		_super.call(this);
		this.skinParts = ["title","content","closeBtn","closerect"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = XiaoXiDetailSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 16;
		t.elementsContent = [this._Image1_i(),this.title_i(),this.content_i(),this.closeBtn_i(),this._Label1_i(),this.closerect_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.source = "infobg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "公告";
		t.textAlign = "center";
		t.textColor = 0x181818;
		t.verticalAlign = "middle";
		t.visible = false;
		t.percentWidth = 90;
		t.y = 123;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 598;
		t.lineSpacing = 8;
		t.multiline = true;
		t.size = 26;
		t.text = "111";
		t.textAlign = "left";
		t.textColor = 0x181818;
		t.verticalAlign = "top";
		t.width = 652;
		t.x = 42;
		t.y = 178;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 13;
		t.anchorOffsetY = 13;
		t.label = "";
		t.x = 663;
		t.y = 64;
		t.skinName = XiaoXiDetailSkin$Skin13;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "公告";
		t.x = 335;
		t.y = 46;
		return t;
	};
	_proto.closerect_i = function () {
		var t = new eui.Rect();
		this.closerect = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.width = 82;
		t.x = 621;
		t.y = 36;
		return t;
	};
	return XiaoXiDetailSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/home/XiaoXiListSkin.exml'] = window.XiaoXiListSkin = (function (_super) {
	__extends(XiaoXiListSkin, _super);
	var XiaoXiListSkin$Skin14 = 	(function (_super) {
		__extends(XiaoXiListSkin$Skin14, _super);
		function XiaoXiListSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = XiaoXiListSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "czmenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return XiaoXiListSkin$Skin14;
	})(eui.Skin);

	var XiaoXiListSkin$Skin15 = 	(function (_super) {
		__extends(XiaoXiListSkin$Skin15, _super);
		function XiaoXiListSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = XiaoXiListSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ggmenu_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return XiaoXiListSkin$Skin15;
	})(eui.Skin);

	var XiaoXiListSkin$Skin16 = 	(function (_super) {
		__extends(XiaoXiListSkin$Skin16, _super);
		function XiaoXiListSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = XiaoXiListSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dtmenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return XiaoXiListSkin$Skin16;
	})(eui.Skin);

	var XiaoXiListSkin$Skin17 = 	(function (_super) {
		__extends(XiaoXiListSkin$Skin17, _super);
		function XiaoXiListSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = XiaoXiListSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "kfmenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return XiaoXiListSkin$Skin17;
	})(eui.Skin);

	var XiaoXiListSkin$Skin18 = 	(function (_super) {
		__extends(XiaoXiListSkin$Skin18, _super);
		function XiaoXiListSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = XiaoXiListSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "memenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return XiaoXiListSkin$Skin18;
	})(eui.Skin);

	function XiaoXiListSkin() {
		_super.call(this);
		this.skinParts = ["list","scroller","prevBtn","nextBtn","pageTF","tipTF","rechargeBtn","noticeBtn","hallBtn","kfBtn","meBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this.scroller_i(),this._Group2_i(),this._Label1_i(),this._Image3_i(),this._Group3_i(),this._Image5_i(),this.tipTF_i(),this._Group4_i()];
	}
	var _proto = XiaoXiListSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp6_png";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 142;
		t.top = 144;
		t.width = 708;
		t.x = 29;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = XiaoXiItemSkin;
		t.left = 0;
		t.right = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = -2;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 68;
		t.visible = false;
		t.x = 307;
		t.elementsContent = [this.prevBtn_i(),this.nextBtn_i(),this.pageTF_i()];
		return t;
	};
	_proto.prevBtn_i = function () {
		var t = new eui.Image();
		this.prevBtn = t;
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 22;
		t.source = "prevpagebtn_png";
		t.y = 15;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Image();
		this.nextBtn = t;
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 22;
		t.source = "nextpagebtn_png";
		t.x = 154;
		t.y = 15;
		return t;
	};
	_proto.pageTF_i = function () {
		var t = new eui.Label();
		this.pageTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0x60260e;
		t.text = "1/1";
		t.textAlign = "center";
		t.textColor = 0xf0e565;
		t.verticalAlign = "middle";
		t.width = 101;
		t.x = 27;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "公告";
		t.textColor = 0xffffff;
		t.x = 344;
		t.y = 66;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "logo3_png";
		t.x = 16.88;
		t.y = 52.88;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 29;
		t.y = 144;
		t.elementsContent = [this._Image4_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "noticeitem_bg_png";
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "系统公告";
		t.textColor = 0x333333;
		t.width = 654;
		t.x = 31;
		t.y = 34;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "0000-00-00 00:00:00";
		t.textAlign = "right";
		t.textColor = 0xb8b8b8;
		t.width = 252;
		t.x = 425;
		t.y = 100;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "noticeitem_bg_png";
		t.visible = false;
		t.x = 29;
		t.y = 284;
		return t;
	};
	_proto.tipTF_i = function () {
		var t = new eui.Label();
		this.tipTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 26;
		t.strokeColor = 0x60260e;
		t.text = "暂无记录";
		t.textColor = 0x000000;
		t.visible = false;
		t.y = 182;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 115;
		t.width = 750;
		t.x = 0;
		t.elementsContent = [this._Image6_i(),this.rechargeBtn_i(),this.noticeBtn_i(),this.hallBtn_i(),this.kfBtn_i(),this.meBtn_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "bottombar_png";
		t.y = 0;
		return t;
	};
	_proto.rechargeBtn_i = function () {
		var t = new eui.Button();
		this.rechargeBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.x = 86;
		t.y = 59;
		t.skinName = XiaoXiListSkin$Skin14;
		return t;
	};
	_proto.noticeBtn_i = function () {
		var t = new eui.Button();
		this.noticeBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 240;
		t.y = 61;
		t.skinName = XiaoXiListSkin$Skin15;
		return t;
	};
	_proto.hallBtn_i = function () {
		var t = new eui.Button();
		this.hallBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 382;
		t.y = 59;
		t.skinName = XiaoXiListSkin$Skin16;
		return t;
	};
	_proto.kfBtn_i = function () {
		var t = new eui.Button();
		this.kfBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 516;
		t.y = 59;
		t.skinName = XiaoXiListSkin$Skin17;
		return t;
	};
	_proto.meBtn_i = function () {
		var t = new eui.Button();
		this.meBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 658;
		t.y = 59;
		t.skinName = XiaoXiListSkin$Skin18;
		return t;
	};
	return XiaoXiListSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/index/DataHistoryPotSkin.exml'] = window.DataHistoryPotSkin = (function (_super) {
	__extends(DataHistoryPotSkin, _super);
	function DataHistoryPotSkin() {
		_super.call(this);
		this.skinParts = ["bg","num"];
		
		this.height = 29;
		this.width = 29;
		this.elementsContent = [this.bg_i(),this.num_i()];
	}
	var _proto = DataHistoryPotSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 29;
		t.horizontalCenter = 0;
		t.source = "num3_png";
		t.verticalCenter = 0;
		t.width = 29;
		return t;
	};
	_proto.num_i = function () {
		var t = new eui.Label();
		this.num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return DataHistoryPotSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/index/HallHistoryPotSkin.exml'] = window.HallHistoryPotSkin = (function (_super) {
	__extends(HallHistoryPotSkin, _super);
	function HallHistoryPotSkin() {
		_super.call(this);
		this.skinParts = ["potList"];
		
		this.elementsContent = [this.potList_i()];
	}
	var _proto = HallHistoryPotSkin.prototype;

	_proto.potList_i = function () {
		var t = new eui.Group();
		this.potList = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return HallHistoryPotSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/index/HallHistoryPotSkin2.exml'] = window.HallHistoryPotSkin2 = (function (_super) {
	__extends(HallHistoryPotSkin2, _super);
	function HallHistoryPotSkin2() {
		_super.call(this);
		this.skinParts = ["potList2"];
		
		this.elementsContent = [this.potList2_i()];
	}
	var _proto = HallHistoryPotSkin2.prototype;

	_proto.potList2_i = function () {
		var t = new eui.Group();
		this.potList2 = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return HallHistoryPotSkin2;
})(eui.Skin);generateEUI.paths['resource/app_skins/index/HistoryPotSkin.exml'] = window.HistoryPotSkin = (function (_super) {
	__extends(HistoryPotSkin, _super);
	function HistoryPotSkin() {
		_super.call(this);
		this.skinParts = ["bg","num"];
		
		this.height = 31;
		this.width = 31;
		this.elementsContent = [this.bg_i(),this.num_i()];
	}
	var _proto = HistoryPotSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "num3_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.num_i = function () {
		var t = new eui.Label();
		this.num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return HistoryPotSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/index/HyQishuItemSkin.exml'] = window.HyQishuItemSkin = (function (_super) {
	__extends(HyQishuItemSkin, _super);
	function HyQishuItemSkin() {
		_super.call(this);
		this.skinParts = ["qishu","n1","n2","n3","n4","n5","n6","n7","n8","da","dan","xiao","shuang"];
		
		this.elementsContent = [this._Image1_i(),this.qishu_i(),this.n1_i(),this.n2_i(),this.n3_i(),this.n4_i(),this.n5_i(),this.n6_i(),this.n7_i(),this.n8_i(),this.da_i(),this.dan_i(),this.xiao_i(),this.shuang_i()];
	}
	var _proto = HyQishuItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "qishuitembg_png";
		t.x = 114;
		t.y = 6;
		return t;
	};
	_proto.qishu_i = function () {
		var t = new eui.Label();
		this.qishu = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.textColor = 0x382f11;
		t.verticalAlign = "middle";
		t.width = 100;
		return t;
	};
	_proto.n1_i = function () {
		var t = new eui.Group();
		this.n1 = t;
		t.x = 100;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "shuzi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.size = 22;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.n2_i = function () {
		var t = new eui.Group();
		this.n2 = t;
		t.x = 140;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "shuzi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.size = 22;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.n3_i = function () {
		var t = new eui.Group();
		this.n3 = t;
		t.x = 184;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "shuzi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.size = 22;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.n4_i = function () {
		var t = new eui.Group();
		this.n4 = t;
		t.x = 224;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Label4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "shuzi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.size = 22;
		t.text = "4";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.n5_i = function () {
		var t = new eui.Group();
		this.n5 = t;
		t.x = 262;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Label5_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "shuzi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.size = 22;
		t.text = "5";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.n6_i = function () {
		var t = new eui.Group();
		this.n6 = t;
		t.x = 305;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Label6_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "shuzi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.size = 22;
		t.text = "6";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.n7_i = function () {
		var t = new eui.Group();
		this.n7 = t;
		t.x = 343;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this._Label7_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "shuzi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.size = 22;
		t.text = "7";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.n8_i = function () {
		var t = new eui.Group();
		this.n8 = t;
		t.x = 381;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this._Label8_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "shuzi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.size = 22;
		t.text = "8";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.da_i = function () {
		var t = new eui.Image();
		this.da = t;
		t.source = "da_png";
		t.x = 449;
		t.y = 0;
		return t;
	};
	_proto.dan_i = function () {
		var t = new eui.Image();
		this.dan = t;
		t.source = "dan_png";
		t.x = 580;
		t.y = 0;
		return t;
	};
	_proto.xiao_i = function () {
		var t = new eui.Image();
		this.xiao = t;
		t.source = "xiao_png";
		t.x = 515;
		t.y = 0;
		return t;
	};
	_proto.shuang_i = function () {
		var t = new eui.Image();
		this.shuang = t;
		t.source = "shuang_png";
		t.x = 648;
		t.y = 0;
		return t;
	};
	return HyQishuItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/items/BankTypeItemRenderSkin.exml'] = window.BankTypeItemRenderSkin = (function (_super) {
	__extends(BankTypeItemRenderSkin, _super);
	function BankTypeItemRenderSkin() {
		_super.call(this);
		this.skinParts = ["nameTF"];
		
		this.elementsContent = [this.nameTF_i()];
	}
	var _proto = BankTypeItemRenderSkin.prototype;

	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "--";
		t.width = 420;
		return t;
	};
	return BankTypeItemRenderSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/items/GameRuleItemSkin.exml'] = window.GameRuleItemSkin = (function (_super) {
	__extends(GameRuleItemSkin, _super);
	function GameRuleItemSkin() {
		_super.call(this);
		this.skinParts = ["gw","nameTF","rateTF","weaponTF","rewardTF"];
		
		this.elementsContent = [this._Image1_i(),this.gw_i(),this.nameTF_i(),this.rateTF_i(),this.weaponTF_i(),this.rewardTF_i()];
	}
	var _proto = GameRuleItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(78,6,474,43);
		t.source = "ruleitembg_png";
		t.visible = false;
		t.width = 568;
		return t;
	};
	_proto.gw_i = function () {
		var t = new eui.Image();
		this.gw = t;
		t.height = 76;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "guaiwu_json.gw12_png";
		t.width = 76;
		t.x = 27;
		t.y = 0;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.width = 75;
		t.x = 81;
		t.y = 18;
		return t;
	};
	_proto.rateTF_i = function () {
		var t = new eui.Label();
		this.rateTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 111;
		t.x = 161;
		t.y = 18;
		return t;
	};
	_proto.weaponTF_i = function () {
		var t = new eui.Label();
		this.weaponTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 111;
		t.x = 307;
		t.y = 18;
		return t;
	};
	_proto.rewardTF_i = function () {
		var t = new eui.Label();
		this.rewardTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 111;
		t.x = 437;
		t.y = 18;
		return t;
	};
	return GameRuleItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/items/GerenReportItemSkin.exml'] = window.GerenReportItemSkin = (function (_super) {
	__extends(GerenReportItemSkin, _super);
	function GerenReportItemSkin() {
		_super.call(this);
		this.skinParts = ["nameTF","bg","balanceTF","fhTF","fdTF","chakanBtn"];
		
		this.elementsContent = [this.nameTF_i(),this.bg_i(),this.balanceTF_i(),this.fhTF_i(),this.fdTF_i(),this.chakanBtn_i()];
	}
	var _proto = GerenReportItemSkin.prototype;

	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.size = 24;
		t.text = "--\n--";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 154;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0xa7a8aa;
		t.height = 2;
		t.width = 714;
		t.y = 46;
		return t;
	};
	_proto.balanceTF_i = function () {
		var t = new eui.Label();
		this.balanceTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 104;
		t.x = 190;
		t.y = 8;
		return t;
	};
	_proto.fhTF_i = function () {
		var t = new eui.Label();
		this.fhTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 104;
		t.x = 334;
		t.y = 8;
		return t;
	};
	_proto.fdTF_i = function () {
		var t = new eui.Label();
		this.fdTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 104;
		t.x = 454;
		t.y = 8;
		return t;
	};
	_proto.chakanBtn_i = function () {
		var t = new eui.Label();
		this.chakanBtn = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "查看";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 582;
		t.y = 8;
		return t;
	};
	return GerenReportItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/items/RechargeRecordItemSkin.exml'] = window.RechargeRecordItemSkin = (function (_super) {
	__extends(RechargeRecordItemSkin, _super);
	function RechargeRecordItemSkin() {
		_super.call(this);
		this.skinParts = ["timeTF","bg","moneyTF","statusTF"];
		
		this.elementsContent = [this.timeTF_i(),this.bg_i(),this.moneyTF_i(),this.statusTF_i()];
	}
	var _proto = RechargeRecordItemSkin.prototype;

	_proto.timeTF_i = function () {
		var t = new eui.Label();
		this.timeTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "0000-00-00 00:00";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 214;
		t.x = 10;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0xa7a8aa;
		t.height = 2;
		t.width = 714;
		t.y = 40;
		return t;
	};
	_proto.moneyTF_i = function () {
		var t = new eui.Label();
		this.moneyTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 214;
		t.x = 258;
		return t;
	};
	_proto.statusTF_i = function () {
		var t = new eui.Label();
		this.statusTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "处理中";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 214;
		t.x = 504;
		return t;
	};
	return RechargeRecordItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/items/ReportItemSkin.exml'] = window.ReportItemSkin = (function (_super) {
	__extends(ReportItemSkin, _super);
	function ReportItemSkin() {
		_super.call(this);
		this.skinParts = ["accountTF","tzTF","fdTF","ykTF","fhTF"];
		
		this.elementsContent = [this.accountTF_i(),this._Rect1_i(),this.tzTF_i(),this.fdTF_i(),this.ykTF_i(),this.fhTF_i()];
	}
	var _proto = ReportItemSkin.prototype;

	_proto.accountTF_i = function () {
		var t = new eui.Label();
		this.accountTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "--\n--";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 154;
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xa7a8aa;
		t.height = 2;
		t.width = 714;
		t.y = 48;
		return t;
	};
	_proto.tzTF_i = function () {
		var t = new eui.Label();
		this.tzTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 104;
		t.x = 190;
		t.y = 8;
		return t;
	};
	_proto.fdTF_i = function () {
		var t = new eui.Label();
		this.fdTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 104;
		t.x = 334;
		t.y = 8;
		return t;
	};
	_proto.ykTF_i = function () {
		var t = new eui.Label();
		this.ykTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 104;
		t.x = 482;
		t.y = 8;
		return t;
	};
	_proto.fhTF_i = function () {
		var t = new eui.Label();
		this.fhTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 596;
		t.y = 8;
		return t;
	};
	return ReportItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/items/SelectDateItemSkin.exml'] = window.SelectDateItemSkin = (function (_super) {
	__extends(SelectDateItemSkin, _super);
	function SelectDateItemSkin() {
		_super.call(this);
		this.skinParts = ["selectImg","numTF"];
		
		this.elementsContent = [this.selectImg_i(),this.numTF_i()];
	}
	var _proto = SelectDateItemSkin.prototype;

	_proto.selectImg_i = function () {
		var t = new eui.Image();
		this.selectImg = t;
		t.source = "dateitembg_png";
		return t;
	};
	_proto.numTF_i = function () {
		var t = new eui.Label();
		this.numTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.size = 36;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return SelectDateItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/items/TixianRecordItemSkin.exml'] = window.TixianRecordItemSkin = (function (_super) {
	__extends(TixianRecordItemSkin, _super);
	function TixianRecordItemSkin() {
		_super.call(this);
		this.skinParts = ["shijian","bg","jine","statusTF"];
		
		this.elementsContent = [this.shijian_i(),this.bg_i(),this.jine_i(),this.statusTF_i()];
	}
	var _proto = TixianRecordItemSkin.prototype;

	_proto.shijian_i = function () {
		var t = new eui.Label();
		this.shijian = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "0000-00-00 00:00";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 214;
		t.x = 10;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0xa7a8aa;
		t.height = 2;
		t.width = 714;
		t.y = 40;
		return t;
	};
	_proto.jine_i = function () {
		var t = new eui.Label();
		this.jine = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 214;
		t.x = 258;
		return t;
	};
	_proto.statusTF_i = function () {
		var t = new eui.Label();
		this.statusTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "处理中";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 214;
		t.x = 504;
		return t;
	};
	return TixianRecordItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/items/XiaoXiItemSkin.exml'] = window.XiaoXiItemSkin = (function (_super) {
	__extends(XiaoXiItemSkin, _super);
	function XiaoXiItemSkin() {
		_super.call(this);
		this.skinParts = ["ltitle","ltime"];
		
		this.elementsContent = [this._Image1_i(),this.ltitle_i(),this.ltime_i()];
	}
	var _proto = XiaoXiItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "noticeitem_bg_png";
		return t;
	};
	_proto.ltitle_i = function () {
		var t = new eui.Label();
		this.ltitle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "系统公告";
		t.textColor = 0x333333;
		t.width = 654;
		t.x = 31;
		t.y = 34;
		return t;
	};
	_proto.ltime_i = function () {
		var t = new eui.Label();
		this.ltime = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "0000-00-00 00:00:00";
		t.textAlign = "right";
		t.textColor = 0xb8b8b8;
		t.width = 252;
		t.x = 425;
		t.y = 100;
		return t;
	};
	return XiaoXiItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/items/ZhangBianMingXiItemSkin.exml'] = window.ZhangBianMingXiItemSkin = (function (_super) {
	__extends(ZhangBianMingXiItemSkin, _super);
	function ZhangBianMingXiItemSkin() {
		_super.call(this);
		this.skinParts = ["ltime","lamount","lnote","ldir","lbalance"];
		
		this.elementsContent = [this.ltime_i(),this._Rect1_i(),this.lamount_i(),this.lnote_i(),this.ldir_i(),this.lbalance_i()];
	}
	var _proto = ZhangBianMingXiItemSkin.prototype;

	_proto.ltime_i = function () {
		var t = new eui.Label();
		this.ltime = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 42;
		t.size = 24;
		t.text = "0000-00-00 00:00\n333";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 214;
		t.x = 10;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xa7a8aa;
		t.height = 2;
		t.width = 714;
		t.y = 46;
		return t;
	};
	_proto.lamount_i = function () {
		var t = new eui.Label();
		this.lamount = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 226;
		t.y = 8;
		return t;
	};
	_proto.lnote_i = function () {
		var t = new eui.Label();
		this.lnote = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "处理中";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 160;
		t.x = 564;
		t.y = 8;
		return t;
	};
	_proto.ldir_i = function () {
		var t = new eui.Label();
		this.ldir = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 334;
		t.y = 8;
		return t;
	};
	_proto.lbalance_i = function () {
		var t = new eui.Label();
		this.lbalance = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 456;
		t.y = 8;
		return t;
	};
	return ZhangBianMingXiItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/LoadingSkin.exml'] = window.LoadingSkin = (function (_super) {
	__extends(LoadingSkin, _super);
	function LoadingSkin() {
		_super.call(this);
		this.skinParts = ["progressTF","versionTF"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.progressTF_i(),this.versionTF_i(),this._Label1_i()];
	}
	var _proto = LoadingSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 7;
		t.source = "logo4_png";
		t.visible = true;
		t.y = 222;
		return t;
	};
	_proto.progressTF_i = function () {
		var t = new eui.Label();
		this.progressTF = t;
		t.bottom = 154;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 0;
		t.size = 26;
		t.stroke = 2;
		t.text = "0%";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 124;
		return t;
	};
	_proto.versionTF_i = function () {
		var t = new eui.Label();
		this.versionTF = t;
		t.bottom = 14;
		t.fontFamily = "Microsoft YaHei";
		t.right = 16;
		t.size = 20;
		t.text = "版本号：1.0";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bottom = 62;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 20;
		t.size = 18;
		t.text = "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。";
		t.textColor = 0x000000;
		t.width = 550;
		return t;
	};
	return LoadingSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/login/NLoginSkin.exml'] = window.NLoginSkin = (function (_super) {
	__extends(NLoginSkin, _super);
	var NLoginSkin$Skin19 = 	(function (_super) {
		__extends(NLoginSkin$Skin19, _super);
		function NLoginSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","chk_s_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NLoginSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "chk_d_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.size = 24;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			t.x = 32;
			return t;
		};
		return NLoginSkin$Skin19;
	})(eui.Skin);

	var NLoginSkin$Skin20 = 	(function (_super) {
		__extends(NLoginSkin$Skin20, _super);
		function NLoginSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NLoginSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.y = 35;
			return t;
		};
		return NLoginSkin$Skin20;
	})(eui.Skin);

	function NLoginSkin() {
		_super.call(this);
		this.skinParts = ["accountTF","pswTF","remChk","forgetBtn","loginBtn","regBtn","kefuBtn","eyeImg","eyeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.accountTF_i(),this.pswTF_i(),this.remChk_i(),this.forgetBtn_i(),this._Image2_i(),this._Rect1_i(),this._Rect2_i(),this.loginBtn_i(),this.regBtn_i(),this.kefuBtn_i(),this.eyeImg_i(),this.eyeBtn_i()];
	}
	var _proto = NLoginSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "loginBg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.accountTF_i = function () {
		var t = new eui.EditableText();
		this.accountTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "输入用户名";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 616;
		t.x = 94;
		t.y = 580;
		return t;
	};
	_proto.pswTF_i = function () {
		var t = new eui.EditableText();
		this.pswTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "输入用户名";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 480;
		t.x = 94;
		t.y = 718;
		return t;
	};
	_proto.remChk_i = function () {
		var t = new eui.CheckBox();
		this.remChk = t;
		t.label = "记住密码";
		t.x = 84;
		t.y = 824;
		t.skinName = NLoginSkin$Skin19;
		return t;
	};
	_proto.forgetBtn_i = function () {
		var t = new eui.Label();
		this.forgetBtn = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 12;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "忘记密码?";
		t.textColor = 0x000000;
		t.x = 604;
		t.y = 830;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "logo2_png";
		t.touchEnabled = false;
		t.x = 300;
		t.y = 182;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 80;
		t.y = 647;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 80;
		t.y = 785;
		return t;
	};
	_proto.loginBtn_i = function () {
		var t = new eui.Button();
		this.loginBtn = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.label = "登  录";
		t.x = 370;
		t.y = 1112;
		t.skinName = NLoginSkin$Skin20;
		return t;
	};
	_proto.regBtn_i = function () {
		var t = new eui.Label();
		this.regBtn = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "立即注册";
		t.textColor = 0x1c92ff;
		t.x = 544;
		t.y = 1206;
		return t;
	};
	_proto.kefuBtn_i = function () {
		var t = new eui.Label();
		this.kefuBtn = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "联系客服";
		t.textColor = 0x1c92ff;
		t.x = 82;
		t.y = 1206;
		return t;
	};
	_proto.eyeImg_i = function () {
		var t = new eui.Image();
		this.eyeImg = t;
		t.source = "eye_close_png";
		t.x = 598;
		t.y = 744;
		return t;
	};
	_proto.eyeBtn_i = function () {
		var t = new eui.Rect();
		this.eyeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.width = 94;
		t.x = 580;
		t.y = 722;
		return t;
	};
	return NLoginSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/login/NRegisterSkin.exml'] = window.NRegisterSkin = (function (_super) {
	__extends(NRegisterSkin, _super);
	var NRegisterSkin$Skin21 = 	(function (_super) {
		__extends(NRegisterSkin$Skin21, _super);
		function NRegisterSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NRegisterSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.y = 35;
			return t;
		};
		return NRegisterSkin$Skin21;
	})(eui.Skin);

	function NRegisterSkin() {
		_super.call(this);
		this.skinParts = ["invitecodeTF","accountTF","pswTF","pswTF2","trueNameTF","regBtn","l1","l2","l3","l4","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this.invitecodeTF_i(),this.accountTF_i(),this.pswTF_i(),this.pswTF2_i(),this.trueNameTF_i(),this.regBtn_i(),this._Image3_i(),this.l1_i(),this.l2_i(),this.l3_i(),this._Label1_i(),this.l4_i(),this._Image4_i(),this._Label2_i(),this.closeBtn_i()];
	}
	var _proto = NRegisterSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp2_png";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 80;
		t.y = 239;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 80;
		t.y = 377;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 80;
		t.y = 519;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 80;
		t.y = 659;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.visible = false;
		t.width = 570;
		t.x = 80;
		t.y = 799;
		return t;
	};
	_proto.invitecodeTF_i = function () {
		var t = new eui.EditableText();
		this.invitecodeTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入推荐码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 592;
		return t;
	};
	_proto.accountTF_i = function () {
		var t = new eui.EditableText();
		this.accountTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入用户名";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 222;
		t.y = 172;
		return t;
	};
	_proto.pswTF_i = function () {
		var t = new eui.EditableText();
		this.pswTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 312;
		return t;
	};
	_proto.pswTF2_i = function () {
		var t = new eui.EditableText();
		this.pswTF2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请再次输入密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 452;
		return t;
	};
	_proto.trueNameTF_i = function () {
		var t = new eui.EditableText();
		this.trueNameTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入真实姓名";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 392;
		t.x = 248;
		t.y = 592;
		return t;
	};
	_proto.regBtn_i = function () {
		var t = new eui.Button();
		this.regBtn = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.bottom = 66;
		t.horizontalCenter = -1.5;
		t.label = "立即注册";
		t.skinName = NRegisterSkin$Skin21;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "zc-text_png";
		t.x = 308;
		t.y = 24;
		return t;
	};
	_proto.l1_i = function () {
		var t = new eui.Label();
		this.l1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 账号";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 194;
		return t;
	};
	_proto.l2_i = function () {
		var t = new eui.Label();
		this.l2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 密码";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 334;
		return t;
	};
	_proto.l3_i = function () {
		var t = new eui.Label();
		this.l3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 确认密码";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 474;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 真实姓名";
		t.textColor = 0x181818;
		t.visible = false;
		t.x = 94;
		t.y = 614;
		return t;
	};
	_proto.l4_i = function () {
		var t = new eui.Label();
		this.l4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 推荐码";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 614;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "注册";
		t.textColor = 0xffffff;
		t.x = 344;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	return NRegisterSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/me/AddDailiSkin.exml'] = window.AddDailiSkin = (function (_super) {
	__extends(AddDailiSkin, _super);
	var AddDailiSkin$Skin22 = 	(function (_super) {
		__extends(AddDailiSkin$Skin22, _super);
		function AddDailiSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AddDailiSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.y = 35;
			return t;
		};
		return AddDailiSkin$Skin22;
	})(eui.Skin);

	function AddDailiSkin() {
		_super.call(this);
		this.skinParts = ["l1","l2","l3","l4","l5","accountTF","passwordTF","repasswordTF","fdTF","fhTF","confirmBtn","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.l1_i(),this.l2_i(),this.l3_i(),this.l4_i(),this.l5_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this.accountTF_i(),this.passwordTF_i(),this.repasswordTF_i(),this.fdTF_i(),this.fhTF_i(),this.confirmBtn_i(),this._Image2_i(),this._Label1_i(),this.closeBtn_i()];
	}
	var _proto = AddDailiSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.l1_i = function () {
		var t = new eui.Label();
		this.l1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 代理账号";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 194;
		return t;
	};
	_proto.l2_i = function () {
		var t = new eui.Label();
		this.l2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 密码";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 334;
		return t;
	};
	_proto.l3_i = function () {
		var t = new eui.Label();
		this.l3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 确认密码";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 474;
		return t;
	};
	_proto.l4_i = function () {
		var t = new eui.Label();
		this.l4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 返点";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 614;
		return t;
	};
	_proto.l5_i = function () {
		var t = new eui.Label();
		this.l5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 分红";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 754;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 239;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 379;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 519;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 659;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 799;
		return t;
	};
	_proto.accountTF_i = function () {
		var t = new eui.EditableText();
		this.accountTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入原密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 170;
		return t;
	};
	_proto.passwordTF_i = function () {
		var t = new eui.EditableText();
		this.passwordTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入新密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 312;
		return t;
	};
	_proto.repasswordTF_i = function () {
		var t = new eui.EditableText();
		this.repasswordTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请再次输入密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 452;
		return t;
	};
	_proto.fdTF_i = function () {
		var t = new eui.EditableText();
		this.fdTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请再次输入返点";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 592;
		return t;
	};
	_proto.fhTF_i = function () {
		var t = new eui.EditableText();
		this.fhTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请再次输入分红";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 732;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new eui.Button();
		this.confirmBtn = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.bottom = 68;
		t.horizontalCenter = 0;
		t.label = "确认添加";
		t.skinName = AddDailiSkin$Skin22;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "添加代理";
		t.textColor = 0xffffff;
		t.x = 316;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	return AddDailiSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/me/AddHuiyuanSkin.exml'] = window.AddHuiyuanSkin = (function (_super) {
	__extends(AddHuiyuanSkin, _super);
	var AddHuiyuanSkin$Skin23 = 	(function (_super) {
		__extends(AddHuiyuanSkin$Skin23, _super);
		function AddHuiyuanSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AddHuiyuanSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.y = 35;
			return t;
		};
		return AddHuiyuanSkin$Skin23;
	})(eui.Skin);

	function AddHuiyuanSkin() {
		_super.call(this);
		this.skinParts = ["l1","l2","l3","accountTF","passwordTF","repasswordTF","confirmBtn","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this.l1_i(),this.l2_i(),this.l3_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this.accountTF_i(),this.passwordTF_i(),this.repasswordTF_i(),this.confirmBtn_i(),this._Image3_i(),this._Label1_i(),this.closeBtn_i()];
	}
	var _proto = AddHuiyuanSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp13_png";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.l1_i = function () {
		var t = new eui.Label();
		this.l1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 会员账号";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 194;
		return t;
	};
	_proto.l2_i = function () {
		var t = new eui.Label();
		this.l2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 密码";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 334;
		return t;
	};
	_proto.l3_i = function () {
		var t = new eui.Label();
		this.l3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 确认密码";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 474;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 239;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 379;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 519;
		return t;
	};
	_proto.accountTF_i = function () {
		var t = new eui.EditableText();
		this.accountTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入账号";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 170;
		return t;
	};
	_proto.passwordTF_i = function () {
		var t = new eui.EditableText();
		this.passwordTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 312;
		return t;
	};
	_proto.repasswordTF_i = function () {
		var t = new eui.EditableText();
		this.repasswordTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请再次输入密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 452;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new eui.Button();
		this.confirmBtn = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.bottom = 66;
		t.label = "确认添加";
		t.x = 372;
		t.skinName = AddHuiyuanSkin$Skin23;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "添加会员";
		t.textColor = 0xffffff;
		t.x = 316;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	return AddHuiyuanSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/me/BindMobileSkin.exml'] = window.BindMobileSkin = (function (_super) {
	__extends(BindMobileSkin, _super);
	var BindMobileSkin$Skin24 = 	(function (_super) {
		__extends(BindMobileSkin$Skin24, _super);
		function BindMobileSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BindMobileSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "green-button_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.stroke = 3;
			t.strokeColor = 0x07536b;
			t.textColor = 0xfdfddb;
			t.verticalCenter = 0;
			return t;
		};
		return BindMobileSkin$Skin24;
	})(eui.Skin);

	function BindMobileSkin() {
		_super.call(this);
		this.skinParts = ["mobileTF","confirmBtn","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Label1_i(),this._Image5_i(),this.mobileTF_i(),this._Label2_i(),this.confirmBtn_i(),this.closeBtn_i()];
	}
	var _proto = BindMobileSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "kbg2_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 4;
		t.scale9Grid = new egret.Rectangle(93,161,558,968);
		t.source = "kbg_png";
		t.top = 40;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "biaoti-bar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "bdsjh-text_png";
		t.x = 272;
		t.y = 22;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0x60260e;
		t.text = "手机号：";
		t.textColor = 0xf0e565;
		t.x = 120;
		t.y = 284;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "l_inputbg2_png";
		t.x = 246;
		t.y = 260;
		return t;
	};
	_proto.mobileTF_i = function () {
		var t = new eui.EditableText();
		this.mobileTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 62;
		t.promptColor = 0xffffff;
		t.size = 22;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 334;
		t.x = 258;
		t.y = 266;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "*该资金密码对资金安全非常重要，请务必牢记并妥善保管";
		t.textColor = 0xff0000;
		t.x = 76;
		t.y = 368;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new eui.Button();
		this.confirmBtn = t;
		t.anchorOffsetX = 109;
		t.anchorOffsetY = 39;
		t.bottom = 320;
		t.horizontalCenter = -1.5;
		t.label = "绑定";
		t.skinName = BindMobileSkin$Skin24;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.width = 82;
		t.x = 4;
		t.y = 4;
		return t;
	};
	return BindMobileSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/me/BindTixianSkin.exml'] = window.BindTixianSkin = (function (_super) {
	__extends(BindTixianSkin, _super);
	var BindTixianSkin$Skin25 = 	(function (_super) {
		__extends(BindTixianSkin$Skin25, _super);
		function BindTixianSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BindTixianSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.y = 35;
			return t;
		};
		return BindTixianSkin$Skin25;
	})(eui.Skin);

	var BindTixianSkin$Skin26 = 	(function (_super) {
		__extends(BindTixianSkin$Skin26, _super);
		function BindTixianSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BindTixianSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "closebtn7_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BindTixianSkin$Skin26;
	})(eui.Skin);

	function BindTixianSkin() {
		_super.call(this);
		this.skinParts = ["bindBtn","select","l3","l4","l2","l1","bankAccountNameTF","bankNumTF","bankNameTF","bankTypeTF","list","scroller","bankTypeG","closeBtn","closerect"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = BindTixianSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this._Group2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.8;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 11;
		t.y = 279;
		t.elementsContent = [this._Image1_i(),this.bindBtn_i(),this.select_i(),this.l3_i(),this.l4_i(),this.l2_i(),this.l1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this.bankAccountNameTF_i(),this.bankNumTF_i(),this.bankNameTF_i(),this.bankTypeTF_i(),this.bankTypeG_i(),this.closeBtn_i(),this._Label2_i(),this.closerect_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.source = "infobg_png";
		return t;
	};
	_proto.bindBtn_i = function () {
		var t = new eui.Button();
		this.bindBtn = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.horizontalCenter = -1.5;
		t.label = "绑 定";
		t.y = 708;
		t.skinName = BindTixianSkin$Skin25;
		return t;
	};
	_proto.select_i = function () {
		var t = new eui.Group();
		this.select = t;
		t.touchChildren = false;
		t.visible = false;
		t.x = 236;
		t.y = 357;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "l_inputbg2_png";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 66;
		t.size = 24;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 299;
		t.x = 16;
		t.y = 2;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "mine_bind_input_ic_dropdown_png";
		t.x = 324;
		t.y = 28;
		return t;
	};
	_proto.l3_i = function () {
		var t = new eui.Label();
		this.l3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 银行名称";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 420;
		return t;
	};
	_proto.l4_i = function () {
		var t = new eui.Label();
		this.l4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 开户行";
		t.textColor = 0x181818;
		t.x = 96;
		t.y = 554;
		return t;
	};
	_proto.l2_i = function () {
		var t = new eui.Label();
		this.l2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 银行账号";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 286;
		return t;
	};
	_proto.l1_i = function () {
		var t = new eui.Label();
		this.l1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 账号名称";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 176;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 80;
		t.y = 219;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 80;
		t.y = 330;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 80;
		t.y = 465;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 80;
		t.y = 601;
		return t;
	};
	_proto.bankAccountNameTF_i = function () {
		var t = new eui.EditableText();
		this.bankAccountNameTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入账号名称";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 236;
		t.y = 154;
		return t;
	};
	_proto.bankNumTF_i = function () {
		var t = new eui.EditableText();
		this.bankNumTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入银行账号";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 236;
		t.y = 260;
		return t;
	};
	_proto.bankNameTF_i = function () {
		var t = new eui.EditableText();
		this.bankNameTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入银行名称";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 236;
		t.y = 396;
		return t;
	};
	_proto.bankTypeTF_i = function () {
		var t = new eui.EditableText();
		this.bankTypeTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入开户行";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 236;
		t.y = 530;
		return t;
	};
	_proto.bankTypeG_i = function () {
		var t = new eui.Group();
		this.bankTypeG = t;
		t.visible = false;
		t.x = 239;
		t.y = 440;
		t.elementsContent = [this._Image4_i(),this.scroller_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 310;
		t.scale9Grid = new egret.Rectangle(82,84,484,318);
		t.source = "m_rect1_png";
		t.width = 320;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 284;
		t.scrollPolicyH = "off";
		t.width = 302;
		t.x = 8;
		t.y = 18;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 13;
		t.anchorOffsetY = 13;
		t.label = "";
		t.x = 663;
		t.y = 64;
		t.skinName = BindTixianSkin$Skin26;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "绑定银行卡";
		t.x = 287;
		t.y = 46;
		return t;
	};
	_proto.closerect_i = function () {
		var t = new eui.Rect();
		this.closerect = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.width = 82;
		t.x = 621;
		t.y = 36;
		return t;
	};
	return BindTixianSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/me/BindTixianSkin2.exml'] = window.BindTixianSkin2 = (function (_super) {
	__extends(BindTixianSkin2, _super);
	var BindTixianSkin2$Skin27 = 	(function (_super) {
		__extends(BindTixianSkin2$Skin27, _super);
		function BindTixianSkin2$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BindTixianSkin2$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.y = 35;
			return t;
		};
		return BindTixianSkin2$Skin27;
	})(eui.Skin);

	var BindTixianSkin2$Skin28 = 	(function (_super) {
		__extends(BindTixianSkin2$Skin28, _super);
		function BindTixianSkin2$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BindTixianSkin2$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "closebtn7_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BindTixianSkin2$Skin28;
	})(eui.Skin);

	function BindTixianSkin2() {
		_super.call(this);
		this.skinParts = ["bindBtn","l2","l1","alipay_accountNameTF","alipay_accountTF","closeBtn","closerect"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = BindTixianSkin2.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.8;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 11;
		t.y = 279;
		t.elementsContent = [this._Image1_i(),this.bindBtn_i(),this.l2_i(),this.l1_i(),this._Rect2_i(),this._Rect3_i(),this.alipay_accountNameTF_i(),this.alipay_accountTF_i(),this.closeBtn_i(),this._Label1_i(),this.closerect_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.source = "infobg_png";
		return t;
	};
	_proto.bindBtn_i = function () {
		var t = new eui.Button();
		this.bindBtn = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.horizontalCenter = -1.5;
		t.label = "绑 定";
		t.y = 608;
		t.skinName = BindTixianSkin2$Skin27;
		return t;
	};
	_proto.l2_i = function () {
		var t = new eui.Label();
		this.l2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 支付宝账号";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 286;
		return t;
	};
	_proto.l1_i = function () {
		var t = new eui.Label();
		this.l1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 真实姓名";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 176;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 80;
		t.y = 219;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 80;
		t.y = 330;
		return t;
	};
	_proto.alipay_accountNameTF_i = function () {
		var t = new eui.EditableText();
		this.alipay_accountNameTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入真实姓名";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 276;
		t.y = 154;
		return t;
	};
	_proto.alipay_accountTF_i = function () {
		var t = new eui.EditableText();
		this.alipay_accountTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入支付宝账号";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 276;
		t.y = 260;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 13;
		t.anchorOffsetY = 13;
		t.label = "";
		t.x = 663;
		t.y = 64;
		t.skinName = BindTixianSkin2$Skin28;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "绑定支付宝";
		t.x = 287;
		t.y = 46;
		return t;
	};
	_proto.closerect_i = function () {
		var t = new eui.Rect();
		this.closerect = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.width = 82;
		t.x = 621;
		t.y = 36;
		return t;
	};
	return BindTixianSkin2;
})(eui.Skin);generateEUI.paths['resource/app_skins/me/DailiFenhongSkin.exml'] = window.DailiFenhongSkin = (function (_super) {
	__extends(DailiFenhongSkin, _super);
	var DailiFenhongSkin$Skin29 = 	(function (_super) {
		__extends(DailiFenhongSkin$Skin29, _super);
		function DailiFenhongSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DailiFenhongSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_btn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DailiFenhongSkin$Skin29;
	})(eui.Skin);

	var DailiFenhongSkin$Skin30 = 	(function (_super) {
		__extends(DailiFenhongSkin$Skin30, _super);
		function DailiFenhongSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DailiFenhongSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tiqu_btn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DailiFenhongSkin$Skin30;
	})(eui.Skin);

	function DailiFenhongSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","tiquBtn","nameTF","idTF","fhlTF","zhouqiTF","tdykTF","yjjlTF","timeTF"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.closeBtn_i(),this.tiquBtn_i(),this.nameTF_i(),this.idTF_i(),this.fhlTF_i(),this.zhouqiTF_i(),this.tdykTF_i(),this.yjjlTF_i(),this._Label1_i(),this._Image5_i(),this.timeTF_i()];
	}
	var _proto = DailiFenhongSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "reg_bg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "top_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "dailifenhong_text_png";
		t.y = 32;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "dailifenhong_rect_png";
		t.x = -6;
		t.y = 298;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 43;
		t.label = "";
		t.x = 48;
		t.y = 64;
		t.skinName = DailiFenhongSkin$Skin29;
		return t;
	};
	_proto.tiquBtn_i = function () {
		var t = new eui.Button();
		this.tiquBtn = t;
		t.anchorOffsetX = 328;
		t.anchorOffsetY = 52;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 706;
		t.skinName = DailiFenhongSkin$Skin30;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "用户名：--";
		t.textColor = 0xabf4fd;
		t.width = 358;
		t.x = 32;
		t.y = 164;
		return t;
	};
	_proto.idTF_i = function () {
		var t = new eui.Label();
		this.idTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "游戏ID：--";
		t.textColor = 0xabf4fd;
		t.width = 358;
		t.x = 386;
		t.y = 164;
		return t;
	};
	_proto.fhlTF_i = function () {
		var t = new eui.Label();
		this.fhlTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "代理分红率：--";
		t.textColor = 0xabf4fd;
		t.width = 358;
		t.x = 32;
		t.y = 224;
		return t;
	};
	_proto.zhouqiTF_i = function () {
		var t = new eui.Label();
		this.zhouqiTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "结算周期：--";
		t.textColor = 0xabf4fd;
		t.width = 350;
		t.x = 394;
		t.y = 224;
		return t;
	};
	_proto.tdykTF_i = function () {
		var t = new eui.Label();
		this.tdykTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "团队盈亏：--";
		t.textColor = 0xabf4fd;
		t.width = 700;
		t.x = 32;
		t.y = 342;
		return t;
	};
	_proto.yjjlTF_i = function () {
		var t = new eui.Label();
		this.yjjlTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "预计奖励：--";
		t.textColor = 0xabf4fd;
		t.width = 700;
		t.x = 32;
		t.y = 414;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "结算周期倒计时：";
		t.textColor = 0xabf4fd;
		t.width = 257;
		t.x = 170;
		t.y = 548;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "report_time_icon_png";
		t.x = 422;
		t.y = 548;
		return t;
	};
	_proto.timeTF_i = function () {
		var t = new eui.Label();
		this.timeTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "00:00:00";
		t.textColor = 0xffffff;
		t.width = 240;
		t.x = 472;
		t.y = 548;
		return t;
	};
	return DailiFenhongSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/me/DengLuMiMaSkin.exml'] = window.DengLuMiMaSkin = (function (_super) {
	__extends(DengLuMiMaSkin, _super);
	var DengLuMiMaSkin$Skin31 = 	(function (_super) {
		__extends(DengLuMiMaSkin$Skin31, _super);
		function DengLuMiMaSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DengLuMiMaSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.y = 35;
			return t;
		};
		return DengLuMiMaSkin$Skin31;
	})(eui.Skin);

	function DengLuMiMaSkin() {
		_super.call(this);
		this.skinParts = ["l1","l2","l3","btnOK","mima0TF","mima1TF","mima2TF","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this.l1_i(),this.l2_i(),this.l3_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this.btnOK_i(),this.mima0TF_i(),this.mima1TF_i(),this.mima2TF_i(),this._Image3_i(),this._Label1_i(),this.closeBtn_i()];
	}
	var _proto = DengLuMiMaSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp7_png";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.l1_i = function () {
		var t = new eui.Label();
		this.l1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 原密码";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 194;
		return t;
	};
	_proto.l2_i = function () {
		var t = new eui.Label();
		this.l2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 新密码";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 334;
		return t;
	};
	_proto.l3_i = function () {
		var t = new eui.Label();
		this.l3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 确认密码";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 474;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 239;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 379;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 519;
		return t;
	};
	_proto.btnOK_i = function () {
		var t = new eui.Button();
		this.btnOK = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.bottom = 69;
		t.horizontalCenter = 0;
		t.label = "提 交";
		t.skinName = DengLuMiMaSkin$Skin31;
		return t;
	};
	_proto.mima0TF_i = function () {
		var t = new eui.EditableText();
		this.mima0TF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入原密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 170;
		return t;
	};
	_proto.mima1TF_i = function () {
		var t = new eui.EditableText();
		this.mima1TF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入新密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 312;
		return t;
	};
	_proto.mima2TF_i = function () {
		var t = new eui.EditableText();
		this.mima2TF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请再次输入密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 452;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "登陆密码";
		t.textColor = 0xffffff;
		t.x = 316;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	return DengLuMiMaSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/me/NMeSkin.exml'] = window.NMeSkin = (function (_super) {
	__extends(NMeSkin, _super);
	var NMeSkin$Skin32 = 	(function (_super) {
		__extends(NMeSkin$Skin32, _super);
		function NMeSkin$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NMeSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn4_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.verticalCenter = 0;
			return t;
		};
		return NMeSkin$Skin32;
	})(eui.Skin);

	var NMeSkin$Skin33 = 	(function (_super) {
		__extends(NMeSkin$Skin33, _super);
		function NMeSkin$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NMeSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn4_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.verticalCenter = 0;
			return t;
		};
		return NMeSkin$Skin33;
	})(eui.Skin);

	var NMeSkin$Skin34 = 	(function (_super) {
		__extends(NMeSkin$Skin34, _super);
		function NMeSkin$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NMeSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "czmenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return NMeSkin$Skin34;
	})(eui.Skin);

	var NMeSkin$Skin35 = 	(function (_super) {
		__extends(NMeSkin$Skin35, _super);
		function NMeSkin$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NMeSkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ggmenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return NMeSkin$Skin35;
	})(eui.Skin);

	var NMeSkin$Skin36 = 	(function (_super) {
		__extends(NMeSkin$Skin36, _super);
		function NMeSkin$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NMeSkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dtmenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return NMeSkin$Skin36;
	})(eui.Skin);

	var NMeSkin$Skin37 = 	(function (_super) {
		__extends(NMeSkin$Skin37, _super);
		function NMeSkin$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NMeSkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "kfmenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return NMeSkin$Skin37;
	})(eui.Skin);

	var NMeSkin$Skin38 = 	(function (_super) {
		__extends(NMeSkin$Skin38, _super);
		function NMeSkin$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NMeSkin$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "memenu_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return NMeSkin$Skin38;
	})(eui.Skin);

	function NMeSkin() {
		_super.call(this);
		this.skinParts = ["nameTF","idTF","vipImg","bindBtn","bindBtn2","quitBtn","balanceTF","tixianTF","yingyuTF","zhuanzhangBtn","exchangeBtn","yongjinTF","tiquBtn","dlreportBtn","mobileBtn","grreportBtn","tuiguangBtn","adddailiBtn","addhuiyuanBtn","pswBtn","zijinpswBtn","kefuBtn","rechargeBtn","noticeBtn","hallBtn","kfBtn","meBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this.bindBtn_i(),this.bindBtn2_i(),this._Image5_i(),this.quitBtn_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.balanceTF_i(),this.tixianTF_i(),this.yingyuTF_i(),this.zhuanzhangBtn_i(),this.exchangeBtn_i(),this.tiquBtn_i(),this.dlreportBtn_i(),this.mobileBtn_i(),this.grreportBtn_i(),this.tuiguangBtn_i(),this.adddailiBtn_i(),this.addhuiyuanBtn_i(),this.pswBtn_i(),this.zijinpswBtn_i(),this.kefuBtn_i(),this._Group2_i()];
	}
	var _proto = NMeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp12_png";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topbar3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "whiterect2_png";
		t.x = 20;
		t.y = 220;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 50;
		t.y = 74;
		t.elementsContent = [this._Image4_i(),this.nameTF_i(),this.idTF_i(),this.vipImg_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "defaultface_png";
		t.touchEnabled = true;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 34;
		t.size = 26;
		t.text = "--";
		t.width = 196;
		t.x = 136;
		t.y = 6;
		return t;
	};
	_proto.idTF_i = function () {
		var t = new eui.Label();
		this.idTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "ID:--";
		t.width = 180;
		t.x = 146;
		t.y = 46;
		return t;
	};
	_proto.vipImg_i = function () {
		var t = new eui.Image();
		this.vipImg = t;
		t.source = "vip1_png";
		t.x = 148;
		t.y = 84;
		return t;
	};
	_proto.bindBtn_i = function () {
		var t = new eui.Button();
		this.bindBtn = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 31;
		t.label = "绑定银行卡";
		t.x = 462;
		t.y = 130;
		t.skinName = NMeSkin$Skin32;
		return t;
	};
	_proto.bindBtn2_i = function () {
		var t = new eui.Button();
		this.bindBtn2 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 31;
		t.label = "绑定支付宝";
		t.x = 644;
		t.y = 130;
		t.skinName = NMeSkin$Skin33;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "m_titlebar_png";
		t.x = 34;
		t.y = 168;
		return t;
	};
	_proto.quitBtn_i = function () {
		var t = new eui.Group();
		this.quitBtn = t;
		t.x = 50;
		t.y = 946;
		t.elementsContent = [this._Image6_i(),this._Label1_i(),this._Image7_i(),this._Rect2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "tcdlbtn_png";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "退出登录";
		t.textColor = 0x373737;
		t.x = 52;
		t.y = 6;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "arrowicon_png";
		t.x = 630;
		t.y = 6;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 670;
		t.x = -12;
		t.y = 59;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "余额";
		t.textColor = 0x9b9b9b;
		t.x = 100;
		t.y = 244;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "提现";
		t.textColor = 0x9b9b9b;
		t.x = 354;
		t.y = 246;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "盈余";
		t.textColor = 0x9b9b9b;
		t.x = 588;
		t.y = 246;
		return t;
	};
	_proto.balanceTF_i = function () {
		var t = new eui.Label();
		this.balanceTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.strokeColor = 0x60260e;
		t.text = "0.00";
		t.textAlign = "center";
		t.textColor = 0x139afe;
		t.verticalAlign = "middle";
		t.width = 206;
		t.x = 26;
		t.y = 296;
		return t;
	};
	_proto.tixianTF_i = function () {
		var t = new eui.Label();
		this.tixianTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.strokeColor = 0x60260e;
		t.text = "0.00";
		t.textAlign = "center";
		t.textColor = 0x139afe;
		t.verticalAlign = "middle";
		t.width = 228;
		t.x = 268;
		t.y = 296;
		return t;
	};
	_proto.yingyuTF_i = function () {
		var t = new eui.Label();
		this.yingyuTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.strokeColor = 0x60260e;
		t.text = "0.00";
		t.textAlign = "center";
		t.textColor = 0x139afe;
		t.verticalAlign = "middle";
		t.width = 212;
		t.x = 504;
		t.y = 296;
		return t;
	};
	_proto.zhuanzhangBtn_i = function () {
		var t = new eui.Group();
		this.zhuanzhangBtn = t;
		t.x = 68;
		t.y = 382;
		t.elementsContent = [this._Image8_i(),this._Label5_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "zzbtn_png";
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "转账";
		t.textColor = 0x373737;
		t.x = 16;
		t.y = 88;
		return t;
	};
	_proto.exchangeBtn_i = function () {
		var t = new eui.Group();
		this.exchangeBtn = t;
		t.x = 238;
		t.y = 382;
		t.elementsContent = [this._Image9_i(),this._Label6_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "dhbtn_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "兑换";
		t.textColor = 0x373737;
		t.x = 16;
		t.y = 88;
		return t;
	};
	_proto.tiquBtn_i = function () {
		var t = new eui.Group();
		this.tiquBtn = t;
		t.x = 424;
		t.y = 382;
		t.elementsContent = [this._Image10_i(),this.yongjinTF_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "yjbtn_png";
		t.x = 0;
		return t;
	};
	_proto.yongjinTF_i = function () {
		var t = new eui.Label();
		this.yongjinTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.strokeColor = 0xffffff;
		t.text = "0.00";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 198;
		t.x = -58;
		t.y = 92;
		return t;
	};
	_proto.dlreportBtn_i = function () {
		var t = new eui.Group();
		this.dlreportBtn = t;
		t.x = 600;
		t.y = 382;
		t.elementsContent = [this._Image11_i(),this._Label7_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "dlbbbtn_png";
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "代理报表";
		t.textColor = 0x373737;
		t.x = -6;
		t.y = 88;
		return t;
	};
	_proto.mobileBtn_i = function () {
		var t = new eui.Group();
		this.mobileBtn = t;
		t.visible = false;
		t.x = 30;
		t.y = 988;
		t.elementsContent = [this._Image12_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "bdsjhbtn_png";
		return t;
	};
	_proto.grreportBtn_i = function () {
		var t = new eui.Group();
		this.grreportBtn = t;
		t.x = 68;
		t.y = 526;
		t.elementsContent = [this._Image13_i(),this._Label8_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "grbbbtn_png";
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "个人报表";
		t.textColor = 0x373737;
		t.x = -6;
		t.y = 88;
		return t;
	};
	_proto.tuiguangBtn_i = function () {
		var t = new eui.Group();
		this.tuiguangBtn = t;
		t.x = 238;
		t.y = 526;
		t.elementsContent = [this._Image14_i(),this._Label9_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "tgljbtn_png";
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "推广链接";
		t.textColor = 0x373737;
		t.x = -6;
		t.y = 88;
		return t;
	};
	_proto.adddailiBtn_i = function () {
		var t = new eui.Group();
		this.adddailiBtn = t;
		t.x = 600;
		t.y = 526;
		t.elementsContent = [this._Image15_i(),this._Label10_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "tjdlbtn_png";
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "添加代理";
		t.textColor = 0x373737;
		t.x = -6;
		t.y = 88;
		return t;
	};
	_proto.addhuiyuanBtn_i = function () {
		var t = new eui.Group();
		this.addhuiyuanBtn = t;
		t.x = 424;
		t.y = 526;
		t.elementsContent = [this._Image16_i(),this._Label11_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "tjhybtn_png";
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "添加会员";
		t.textColor = 0x373737;
		t.x = -6;
		t.y = 88;
		return t;
	};
	_proto.pswBtn_i = function () {
		var t = new eui.Group();
		this.pswBtn = t;
		t.x = 50;
		t.y = 696;
		t.elementsContent = [this._Image17_i(),this._Label12_i(),this._Image18_i(),this._Rect3_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "dlmmicon_png";
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "登陆密码";
		t.textColor = 0x373737;
		t.x = 52;
		t.y = 4;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "arrowicon_png";
		t.x = 632;
		t.y = 6;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 670;
		t.x = -12;
		t.y = 55;
		return t;
	};
	_proto.zijinpswBtn_i = function () {
		var t = new eui.Group();
		this.zijinpswBtn = t;
		t.x = 48;
		t.y = 780;
		t.elementsContent = [this._Image19_i(),this._Label13_i(),this._Image20_i(),this._Rect4_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "zjmmicon_png";
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "资金密码";
		t.textColor = 0x373737;
		t.x = 54;
		t.y = -2;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "arrowicon_png";
		t.x = 634;
		t.y = -2;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 670;
		t.x = -12;
		t.y = 55;
		return t;
	};
	_proto.kefuBtn_i = function () {
		var t = new eui.Group();
		this.kefuBtn = t;
		t.x = 48;
		t.y = 866;
		t.elementsContent = [this._Image21_i(),this._Label14_i(),this._Image22_i(),this._Rect5_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "lxkfbtn_png";
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "联系客服";
		t.textColor = 0x373737;
		t.x = 54;
		t.y = -2;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "arrowicon_png";
		t.x = 634;
		t.y = -2;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 670;
		t.x = -12;
		t.y = 55;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 115;
		t.width = 750;
		t.x = 0;
		t.elementsContent = [this._Image23_i(),this.rechargeBtn_i(),this.noticeBtn_i(),this.hallBtn_i(),this.kfBtn_i(),this.meBtn_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "bottombar_png";
		t.y = 0;
		return t;
	};
	_proto.rechargeBtn_i = function () {
		var t = new eui.Button();
		this.rechargeBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.x = 86;
		t.y = 59;
		t.skinName = NMeSkin$Skin34;
		return t;
	};
	_proto.noticeBtn_i = function () {
		var t = new eui.Button();
		this.noticeBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 240;
		t.y = 61;
		t.skinName = NMeSkin$Skin35;
		return t;
	};
	_proto.hallBtn_i = function () {
		var t = new eui.Button();
		this.hallBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 382;
		t.y = 59;
		t.skinName = NMeSkin$Skin36;
		return t;
	};
	_proto.kfBtn_i = function () {
		var t = new eui.Button();
		this.kfBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 516;
		t.y = 59;
		t.skinName = NMeSkin$Skin37;
		return t;
	};
	_proto.meBtn_i = function () {
		var t = new eui.Button();
		this.meBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 658;
		t.y = 59;
		t.skinName = NMeSkin$Skin38;
		return t;
	};
	return NMeSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/me/SelectFaceSkin.exml'] = window.SelectFaceSkin = (function (_super) {
	__extends(SelectFaceSkin, _super);
	var SelectFaceSkin$Skin39 = 	(function (_super) {
		__extends(SelectFaceSkin$Skin39, _super);
		function SelectFaceSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SelectFaceSkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "pop_btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SelectFaceSkin$Skin39;
	})(eui.Skin);

	var SelectFaceSkin$Skin40 = 	(function (_super) {
		__extends(SelectFaceSkin$Skin40, _super);
		function SelectFaceSkin$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SelectFaceSkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "all_pop_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.horizontalCenter = 0;
			t.stroke = 2;
			t.verticalCenter = 0;
			return t;
		};
		return SelectFaceSkin$Skin40;
	})(eui.Skin);

	function SelectFaceSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","confirmBtn","head1","head2","head3","head4","head5","head6"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group8_i()];
	}
	var _proto = SelectFaceSkin.prototype;

	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this._Group7_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.8;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 300;
		t.elementsContent = [this._Image1_i(),this.closeBtn_i(),this.confirmBtn_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 380;
		t.scale9Grid = new egret.Rectangle(67,83,406,498);
		t.source = "info_bg_png";
		t.width = 682;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 44;
		t.label = "";
		t.x = 666;
		t.y = 16;
		t.skinName = SelectFaceSkin$Skin39;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new eui.Button();
		this.confirmBtn = t;
		t.anchorOffsetX = 149;
		t.anchorOffsetY = 47;
		t.horizontalCenter = 0;
		t.label = "确定";
		t.y = 288;
		t.skinName = SelectFaceSkin$Skin40;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 83;
		t.width = 83;
		t.x = 36;
		t.y = 112;
		t.elementsContent = [this.head1_i()];
		return t;
	};
	_proto.head1_i = function () {
		var t = new eui.Image();
		this.head1 = t;
		t.horizontalCenter = 0;
		t.source = "headpic1_select_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 83;
		t.width = 83;
		t.x = 142;
		t.y = 112;
		t.elementsContent = [this.head2_i()];
		return t;
	};
	_proto.head2_i = function () {
		var t = new eui.Image();
		this.head2 = t;
		t.horizontalCenter = 0;
		t.source = "headpic2_default_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 83;
		t.width = 83;
		t.x = 248;
		t.y = 112;
		t.elementsContent = [this.head3_i()];
		return t;
	};
	_proto.head3_i = function () {
		var t = new eui.Image();
		this.head3 = t;
		t.horizontalCenter = 0;
		t.source = "headpic3_default_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 83;
		t.width = 83;
		t.x = 354;
		t.y = 112;
		t.elementsContent = [this.head4_i()];
		return t;
	};
	_proto.head4_i = function () {
		var t = new eui.Image();
		this.head4 = t;
		t.horizontalCenter = 0;
		t.source = "headpic4_default_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 83;
		t.width = 83;
		t.x = 460;
		t.y = 112;
		t.elementsContent = [this.head5_i()];
		return t;
	};
	_proto.head5_i = function () {
		var t = new eui.Image();
		this.head5 = t;
		t.horizontalCenter = 0;
		t.source = "headpic5_default_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 83;
		t.width = 83;
		t.x = 566;
		t.y = 112;
		t.elementsContent = [this.head6_i()];
		return t;
	};
	_proto.head6_i = function () {
		var t = new eui.Image();
		this.head6 = t;
		t.horizontalCenter = 0;
		t.source = "headpic6_default_png";
		t.verticalCenter = 0;
		return t;
	};
	return SelectFaceSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/me/TuiguangSkin.exml'] = window.TuiguangSkin = (function (_super) {
	__extends(TuiguangSkin, _super);
	var TuiguangSkin$Skin41 = 	(function (_super) {
		__extends(TuiguangSkin$Skin41, _super);
		function TuiguangSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TuiguangSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.y = 35;
			return t;
		};
		return TuiguangSkin$Skin41;
	})(eui.Skin);

	var TuiguangSkin$Skin42 = 	(function (_super) {
		__extends(TuiguangSkin$Skin42, _super);
		function TuiguangSkin$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TuiguangSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.y = 35;
			return t;
		};
		return TuiguangSkin$Skin42;
	})(eui.Skin);

	function TuiguangSkin() {
		_super.call(this);
		this.skinParts = ["copyLinkBtn","copyCodeBtn","inviteCodeTF","qrcode","closeBtn","linkTF"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this._Image3_i(),this.copyLinkBtn_i(),this.copyCodeBtn_i(),this.inviteCodeTF_i(),this.qrcode_i(),this._Image4_i(),this.closeBtn_i(),this._Label1_i(),this._Image5_i(),this.linkTF_i()];
	}
	var _proto = TuiguangSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp4_jpg";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topbar1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "whiterect_png";
		t.x = 22;
		t.y = 322;
		return t;
	};
	_proto.copyLinkBtn_i = function () {
		var t = new eui.Button();
		this.copyLinkBtn = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.label = "复制链接";
		t.x = 374;
		t.y = 623;
		t.skinName = TuiguangSkin$Skin41;
		return t;
	};
	_proto.copyCodeBtn_i = function () {
		var t = new eui.Button();
		this.copyCodeBtn = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.label = "复制邀请码";
		t.x = 372;
		t.y = 756;
		t.skinName = TuiguangSkin$Skin42;
		return t;
	};
	_proto.inviteCodeTF_i = function () {
		var t = new eui.Label();
		this.inviteCodeTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 54;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "--";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 536;
		t.y = 828;
		return t;
	};
	_proto.qrcode_i = function () {
		var t = new eui.Image();
		this.qrcode = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 218;
		t.width = 218;
		t.x = 264;
		t.y = 966;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "推广链接";
		t.textColor = 0xffffff;
		t.x = 314;
		t.y = 66;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "logo5_png";
		t.x = 334;
		t.y = 142;
		return t;
	};
	_proto.linkTF_i = function () {
		var t = new eui.Label();
		this.linkTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 132;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "http://";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 640;
		t.y = 410;
		return t;
	};
	return TuiguangSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/me/XiaJiZhuanZhangSkin.exml'] = window.XiaJiZhuanZhangSkin = (function (_super) {
	__extends(XiaJiZhuanZhangSkin, _super);
	var XiaJiZhuanZhangSkin$Skin43 = 	(function (_super) {
		__extends(XiaJiZhuanZhangSkin$Skin43, _super);
		function XiaJiZhuanZhangSkin$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = XiaJiZhuanZhangSkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.y = 35;
			return t;
		};
		return XiaJiZhuanZhangSkin$Skin43;
	})(eui.Skin);

	function XiaJiZhuanZhangSkin() {
		_super.call(this);
		this.skinParts = ["l1","l2","l3","accountTF","amountTF","pswTF","btnOK","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.l1_i(),this.l2_i(),this.l3_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this.accountTF_i(),this.amountTF_i(),this.pswTF_i(),this.btnOK_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this.closeBtn_i()];
	}
	var _proto = XiaJiZhuanZhangSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.l1_i = function () {
		var t = new eui.Label();
		this.l1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 收款人ID";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 194;
		return t;
	};
	_proto.l2_i = function () {
		var t = new eui.Label();
		this.l2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 转账金额";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 334;
		return t;
	};
	_proto.l3_i = function () {
		var t = new eui.Label();
		this.l3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 资金密码";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 474;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 239;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 379;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 519;
		return t;
	};
	_proto.accountTF_i = function () {
		var t = new eui.EditableText();
		this.accountTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入原密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 170;
		return t;
	};
	_proto.amountTF_i = function () {
		var t = new eui.EditableText();
		this.amountTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入新密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 312;
		return t;
	};
	_proto.pswTF_i = function () {
		var t = new eui.EditableText();
		this.pswTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请再次输入密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 452;
		return t;
	};
	_proto.btnOK_i = function () {
		var t = new eui.Button();
		this.btnOK = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.bottom = 69;
		t.horizontalCenter = 0;
		t.label = "提 交";
		t.skinName = XiaJiZhuanZhangSkin$Skin43;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "*资金密码需要在设置界面设置";
		t.textColor = 0xff0000;
		t.y = 566;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "下级转账";
		t.textColor = 0xffffff;
		t.x = 316;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	return XiaJiZhuanZhangSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/me/ZhangBianMingXiSkin.exml'] = window.ZhangBianMingXiSkin = (function (_super) {
	__extends(ZhangBianMingXiSkin, _super);
	function ZhangBianMingXiSkin() {
		_super.call(this);
		this.skinParts = ["lname","tipTF","list","scroller","prevBtn","nextBtn","pageTF","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this.lname_i(),this._Group1_i(),this.tipTF_i(),this.scroller_i(),this._Group3_i(),this._Image3_i(),this._Label6_i(),this.closeBtn_i()];
	}
	var _proto = ZhangBianMingXiSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp10_png";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lname_i = function () {
		var t = new eui.Label();
		this.lname = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.size = 22;
		t.text = "--";
		t.textAlign = "left";
		t.textColor = 0x211f03;
		t.top = 148;
		t.verticalAlign = "middle";
		t.width = 534;
		t.x = 27;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 17;
		t.y = 198;
		t.elementsContent = [this._Rect2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this._Rect7_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x438cff;
		t.height = 60;
		t.width = 715;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "时间";
		t.textAlign = "center";
		t.textColor = 0xf4f9ff;
		t.verticalAlign = "middle";
		t.width = 97;
		t.x = 65;
		t.y = 18;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "存入";
		t.textAlign = "center";
		t.textColor = 0xf4f9ff;
		t.verticalAlign = "middle";
		t.width = 97;
		t.x = 227;
		t.y = 18;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "转出";
		t.textAlign = "center";
		t.textColor = 0xf4f9ff;
		t.verticalAlign = "middle";
		t.width = 97;
		t.x = 333;
		t.y = 18;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "余额";
		t.textAlign = "center";
		t.textColor = 0xf4f9ff;
		t.verticalAlign = "middle";
		t.width = 97;
		t.x = 455;
		t.y = 18;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "说明";
		t.textAlign = "center";
		t.textColor = 0xf4f9ff;
		t.verticalAlign = "middle";
		t.width = 97;
		t.x = 593;
		t.y = 18;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1;
		t.x = 223;
		t.y = -2;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1;
		t.x = 323;
		t.y = -2;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1;
		t.x = 441;
		t.y = -2;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1;
		t.x = 441;
		t.y = -2;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1;
		t.x = 567;
		t.y = -2;
		return t;
	};
	_proto.tipTF_i = function () {
		var t = new eui.Label();
		this.tipTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 45;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 176;
		t.y = 305;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.top = 274;
		t.width = 728;
		t.x = 16;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = ZhangBianMingXiItemSkin;
		t.left = 0;
		t.right = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 5;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 68;
		t.visible = false;
		t.x = 307;
		t.elementsContent = [this.prevBtn_i(),this.nextBtn_i(),this.pageTF_i()];
		return t;
	};
	_proto.prevBtn_i = function () {
		var t = new eui.Image();
		this.prevBtn = t;
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 22;
		t.source = "prevpagebtn_png";
		t.y = 15;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Image();
		this.nextBtn = t;
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 22;
		t.source = "nextpagebtn_png";
		t.x = 154;
		t.y = 15;
		return t;
	};
	_proto.pageTF_i = function () {
		var t = new eui.Label();
		this.pageTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0x60260e;
		t.text = "1/1";
		t.textAlign = "center";
		t.textColor = 0xf0e565;
		t.verticalAlign = "middle";
		t.width = 114;
		t.x = 23;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "账变明细";
		t.textColor = 0xffffff;
		t.x = 316;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	return ZhangBianMingXiSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/me/ZiJinMiMaSkin.exml'] = window.ZiJinMiMaSkin = (function (_super) {
	__extends(ZiJinMiMaSkin, _super);
	var ZiJinMiMaSkin$Skin44 = 	(function (_super) {
		__extends(ZiJinMiMaSkin$Skin44, _super);
		function ZiJinMiMaSkin$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZiJinMiMaSkin$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.y = 35;
			return t;
		};
		return ZiJinMiMaSkin$Skin44;
	})(eui.Skin);

	function ZiJinMiMaSkin() {
		_super.call(this);
		this.skinParts = ["l1","l2","l3","btnOK","mima0TF","mima1TF","mima2TF","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.l1_i(),this.l2_i(),this.l3_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this.btnOK_i(),this._Image2_i(),this.mima0TF_i(),this.mima1TF_i(),this.mima2TF_i(),this._Label1_i(),this.closeBtn_i(),this._Label2_i()];
	}
	var _proto = ZiJinMiMaSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.l1_i = function () {
		var t = new eui.Label();
		this.l1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 原密码";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 194;
		return t;
	};
	_proto.l2_i = function () {
		var t = new eui.Label();
		this.l2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 新密码";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 334;
		return t;
	};
	_proto.l3_i = function () {
		var t = new eui.Label();
		this.l3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 确认密码";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 474;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 239;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 379;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 1;
		t.width = 570;
		t.x = 80;
		t.y = 519;
		return t;
	};
	_proto.btnOK_i = function () {
		var t = new eui.Button();
		this.btnOK = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.bottom = 69;
		t.horizontalCenter = 0;
		t.label = "提 交";
		t.skinName = ZiJinMiMaSkin$Skin44;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto.mima0TF_i = function () {
		var t = new eui.EditableText();
		this.mima0TF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入原密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 170;
		return t;
	};
	_proto.mima1TF_i = function () {
		var t = new eui.EditableText();
		this.mima1TF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入新密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 312;
		return t;
	};
	_proto.mima2TF_i = function () {
		var t = new eui.EditableText();
		this.mima2TF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请再次输入密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 248;
		t.y = 452;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "资金密码";
		t.textColor = 0xffffff;
		t.x = 316;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 33.5;
		t.size = 20;
		t.text = "*该资金密码对资金安全非常重要，请务必牢记并妥善保管";
		t.textAlign = "left";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 623;
		t.y = 544;
		return t;
	};
	return ZiJinMiMaSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/recharge/AccountInfoSkin.exml'] = window.AccountInfoSkin = (function (_super) {
	__extends(AccountInfoSkin, _super);
	var AccountInfoSkin$Skin45 = 	(function (_super) {
		__extends(AccountInfoSkin$Skin45, _super);
		function AccountInfoSkin$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AccountInfoSkin$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x07536b;
			t.textColor = 0xfdfddb;
			t.verticalCenter = 0;
			return t;
		};
		return AccountInfoSkin$Skin45;
	})(eui.Skin);

	var AccountInfoSkin$Skin46 = 	(function (_super) {
		__extends(AccountInfoSkin$Skin46, _super);
		function AccountInfoSkin$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AccountInfoSkin$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "closebtn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AccountInfoSkin$Skin46;
	})(eui.Skin);

	function AccountInfoSkin() {
		_super.call(this);
		this.skinParts = ["bank_accountNameTF","bank_bankNameTF","bank_bankNumTF","confirmBtn","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = AccountInfoSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 38;
		t.y = 217;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.bank_accountNameTF_i(),this._Label2_i(),this.bank_bankNameTF_i(),this._Label3_i(),this.bank_bankNumTF_i(),this.confirmBtn_i(),this.closeBtn_i(),this._Label4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.source = "infobg2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0x60260e;
		t.text = "账户名：";
		t.textColor = 0xf0e565;
		t.width = 108;
		t.x = 102;
		t.y = 152;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "l_inputbg2_png";
		t.x = 209;
		t.y = 133;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "l_inputbg2_png";
		t.x = 209;
		t.y = 223;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "l_inputbg2_png";
		t.x = 209;
		t.y = 315;
		return t;
	};
	_proto.bank_accountNameTF_i = function () {
		var t = new eui.EditableText();
		this.bank_accountNameTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "--";
		t.textColor = 0xffffff;
		t.width = 358;
		t.x = 222;
		t.y = 152;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0x60260e;
		t.text = "银行名称：";
		t.textColor = 0xf0e565;
		t.width = 171;
		t.x = 82;
		t.y = 242;
		return t;
	};
	_proto.bank_bankNameTF_i = function () {
		var t = new eui.EditableText();
		this.bank_bankNameTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "--";
		t.textColor = 0xffffff;
		t.width = 351;
		t.x = 226;
		t.y = 242;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0x60260e;
		t.text = "银行卡号：";
		t.textColor = 0xf0e565;
		t.width = 132;
		t.x = 86;
		t.y = 334;
		return t;
	};
	_proto.bank_bankNumTF_i = function () {
		var t = new eui.EditableText();
		this.bank_bankNumTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "--";
		t.textColor = 0xffffff;
		t.width = 344;
		t.x = 230;
		t.y = 334;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new eui.Button();
		this.confirmBtn = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 28;
		t.horizontalCenter = 0;
		t.label = "更新";
		t.y = 498;
		t.skinName = AccountInfoSkin$Skin45;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 29;
		t.anchorOffsetY = 29;
		t.label = "";
		t.x = 642;
		t.y = 40;
		t.skinName = AccountInfoSkin$Skin46;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.text = "账号信息";
		t.textAlign = "center";
		t.textColor = 0x43280d;
		t.verticalAlign = "middle";
		t.width = 195;
		t.x = 238;
		t.y = 21;
		return t;
	};
	return AccountInfoSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/recharge/AccountInfoSkin2.exml'] = window.AccountInfoSkin2 = (function (_super) {
	__extends(AccountInfoSkin2, _super);
	var AccountInfoSkin2$Skin47 = 	(function (_super) {
		__extends(AccountInfoSkin2$Skin47, _super);
		function AccountInfoSkin2$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AccountInfoSkin2$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.stroke = 3;
			t.strokeColor = 0x07536b;
			t.textColor = 0xfdfddb;
			t.verticalCenter = 0;
			return t;
		};
		return AccountInfoSkin2$Skin47;
	})(eui.Skin);

	var AccountInfoSkin2$Skin48 = 	(function (_super) {
		__extends(AccountInfoSkin2$Skin48, _super);
		function AccountInfoSkin2$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AccountInfoSkin2$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "closebtn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AccountInfoSkin2$Skin48;
	})(eui.Skin);

	function AccountInfoSkin2() {
		_super.call(this);
		this.skinParts = ["alipay_accountTF","alipay_accountNameTF","confirmBtn","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = AccountInfoSkin2.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 38;
		t.y = 217;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this.alipay_accountTF_i(),this._Label2_i(),this.alipay_accountNameTF_i(),this.confirmBtn_i(),this.closeBtn_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.source = "infobg2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "l_inputbg2_png";
		t.x = 237;
		t.y = 183;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "l_inputbg2_png";
		t.x = 237;
		t.y = 315;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0x60260e;
		t.text = "支付宝账号：";
		t.textColor = 0xf0e565;
		t.width = 171;
		t.x = 86;
		t.y = 202;
		return t;
	};
	_proto.alipay_accountTF_i = function () {
		var t = new eui.EditableText();
		this.alipay_accountTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "--";
		t.textColor = 0xffffff;
		t.width = 351;
		t.x = 250;
		t.y = 202;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0x60260e;
		t.text = "真实姓名：";
		t.textColor = 0xf0e565;
		t.width = 132;
		t.x = 106;
		t.y = 334;
		return t;
	};
	_proto.alipay_accountNameTF_i = function () {
		var t = new eui.EditableText();
		this.alipay_accountNameTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "--";
		t.textColor = 0xffffff;
		t.width = 344;
		t.x = 250;
		t.y = 334;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new eui.Button();
		this.confirmBtn = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 28;
		t.horizontalCenter = 0;
		t.label = "更新";
		t.y = 498;
		t.skinName = AccountInfoSkin2$Skin47;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 29;
		t.anchorOffsetY = 29;
		t.label = "";
		t.x = 642;
		t.y = 40;
		t.skinName = AccountInfoSkin2$Skin48;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.text = "账号信息";
		t.textAlign = "center";
		t.textColor = 0x43280d;
		t.verticalAlign = "middle";
		t.width = 195;
		t.x = 238;
		t.y = 21;
		return t;
	};
	return AccountInfoSkin2;
})(eui.Skin);generateEUI.paths['resource/app_skins/recharge/RechargeInfoSkin.exml'] = window.RechargeInfoSkin = (function (_super) {
	__extends(RechargeInfoSkin, _super);
	var RechargeInfoSkin$Skin49 = 	(function (_super) {
		__extends(RechargeInfoSkin$Skin49, _super);
		function RechargeInfoSkin$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RechargeInfoSkin$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.y = 35;
			return t;
		};
		return RechargeInfoSkin$Skin49;
	})(eui.Skin);

	function RechargeInfoSkin() {
		_super.call(this);
		this.skinParts = ["tipTF1","l1","nameTF","numTypeTF","banknumTF","l3","moneyTF","l4","banknameTF","dingdanTF","infoTF","moneyTF2","copyBtn1","copyBtn2","copyBtn3","copyBtn4","paytypeImg","confirmBtn","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this.tipTF1_i(),this.l1_i(),this.nameTF_i(),this.numTypeTF_i(),this.banknumTF_i(),this.l3_i(),this.moneyTF_i(),this.l4_i(),this.banknameTF_i(),this._Label1_i(),this.dingdanTF_i(),this.infoTF_i(),this.moneyTF2_i(),this.copyBtn1_i(),this.copyBtn2_i(),this.copyBtn3_i(),this.copyBtn4_i(),this.paytypeImg_i(),this.confirmBtn_i(),this._Image3_i(),this._Label2_i(),this.closeBtn_i()];
	}
	var _proto = RechargeInfoSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp6_jpg";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 78;
		t.y = 379;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 78;
		t.y = 517;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 78;
		t.y = 657;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 78;
		t.y = 797;
		return t;
	};
	_proto.tipTF1_i = function () {
		var t = new eui.Label();
		this.tipTF1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 9;
		t.size = 25;
		t.text = "您需转账生成金额0.00，否则不到账";
		t.textColor = 0x000000;
		t.y = 211;
		return t;
	};
	_proto.l1_i = function () {
		var t = new eui.Label();
		this.l1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 收款人姓名";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 334;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 46;
		t.size = 22;
		t.text = "--";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 278;
		t.x = 282;
		t.y = 323;
		return t;
	};
	_proto.numTypeTF_i = function () {
		var t = new eui.Label();
		this.numTypeTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 银行卡号";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 472;
		return t;
	};
	_proto.banknumTF_i = function () {
		var t = new eui.Label();
		this.banknumTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 48;
		t.size = 22;
		t.text = "--";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 242;
		t.x = 282;
		t.y = 460;
		return t;
	};
	_proto.l3_i = function () {
		var t = new eui.Label();
		this.l3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 收款金额";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 614;
		return t;
	};
	_proto.moneyTF_i = function () {
		var t = new eui.Label();
		this.moneyTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 44;
		t.size = 22;
		t.text = "0.00";
		t.textAlign = "left";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 254;
		t.x = 282;
		t.y = 606;
		return t;
	};
	_proto.l4_i = function () {
		var t = new eui.Label();
		this.l4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 收款银行";
		t.textColor = 0x181818;
		t.x = 94;
		t.y = 752;
		return t;
	};
	_proto.banknameTF_i = function () {
		var t = new eui.Label();
		this.banknameTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 62;
		t.size = 22;
		t.text = "--";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 258;
		t.x = 282;
		t.y = 733;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "订单号：";
		t.textColor = 0x181818;
		t.x = 85;
		t.y = 833;
		return t;
	};
	_proto.dingdanTF_i = function () {
		var t = new eui.Label();
		this.dingdanTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 56;
		t.size = 24;
		t.text = "--";
		t.textAlign = "left";
		t.textColor = 0x181818;
		t.verticalAlign = "middle";
		t.width = 533;
		t.x = 183;
		t.y = 814;
		return t;
	};
	_proto.infoTF_i = function () {
		var t = new eui.Label();
		this.infoTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 86;
		t.lineSpacing = 26;
		t.size = 24;
		t.text = "充值说明：充值请带尾数，充值后，点击充值成功按钮";
		t.textAlign = "left";
		t.textColor = 0x181818;
		t.width = 614;
		t.x = 85;
		t.y = 877;
		return t;
	};
	_proto.moneyTF2_i = function () {
		var t = new eui.Label();
		this.moneyTF2 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 22;
		t.lineSpacing = 12;
		t.size = 22;
		t.text = "请按金额0.00充值，金额不符，无法到账！！！";
		t.textAlign = "left";
		t.textColor = 0xff0000;
		t.width = 628;
		t.y = 999;
		return t;
	};
	_proto.copyBtn1_i = function () {
		var t = new eui.Label();
		this.copyBtn1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "复制";
		t.textColor = 0xff0000;
		t.x = 574;
		t.y = 334;
		return t;
	};
	_proto.copyBtn2_i = function () {
		var t = new eui.Label();
		this.copyBtn2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "复制";
		t.textColor = 0xff0000;
		t.x = 574;
		t.y = 472;
		return t;
	};
	_proto.copyBtn3_i = function () {
		var t = new eui.Label();
		this.copyBtn3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "复制";
		t.textColor = 0xff0000;
		t.x = 574;
		t.y = 614;
		return t;
	};
	_proto.copyBtn4_i = function () {
		var t = new eui.Label();
		this.copyBtn4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "复制";
		t.textColor = 0xff0000;
		t.x = 574;
		t.y = 750;
		return t;
	};
	_proto.paytypeImg_i = function () {
		var t = new eui.Image();
		this.paytypeImg = t;
		t.source = "yhkfk-text_png";
		t.x = 274;
		t.y = 22;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new eui.Button();
		this.confirmBtn = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.bottom = 66;
		t.horizontalCenter = -1.5;
		t.label = "充值成功";
		t.skinName = RechargeInfoSkin$Skin49;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "银行卡付款";
		t.textColor = 0xffffff;
		t.x = 298;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	return RechargeInfoSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/recharge/RechargeInfoSkin2.exml'] = window.RechargeInfoSkin2 = (function (_super) {
	__extends(RechargeInfoSkin2, _super);
	var RechargeInfoSkin2$Skin50 = 	(function (_super) {
		__extends(RechargeInfoSkin2$Skin50, _super);
		function RechargeInfoSkin2$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RechargeInfoSkin2$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.y = 35;
			return t;
		};
		return RechargeInfoSkin2$Skin50;
	})(eui.Skin);

	function RechargeInfoSkin2() {
		_super.call(this);
		this.skinParts = ["tipTF1","dingdanTF","infoTF","moneyTF2","paytypeImg","confirmBtn","closeBtn","qrcode"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this.tipTF1_i(),this._Label1_i(),this.dingdanTF_i(),this.infoTF_i(),this.moneyTF2_i(),this.paytypeImg_i(),this.confirmBtn_i(),this._Image3_i(),this._Label2_i(),this.closeBtn_i(),this._Image4_i(),this.qrcode_i()];
	}
	var _proto = RechargeInfoSkin2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp6_jpg";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tipTF1_i = function () {
		var t = new eui.Label();
		this.tipTF1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 9;
		t.size = 25;
		t.text = "您需转账生成金额0.00，否则不到账";
		t.textColor = 0x000000;
		t.y = 211;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "订单号：";
		t.textColor = 0x181818;
		t.x = 85;
		t.y = 713;
		return t;
	};
	_proto.dingdanTF_i = function () {
		var t = new eui.Label();
		this.dingdanTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 56;
		t.size = 24;
		t.text = "--";
		t.textAlign = "left";
		t.textColor = 0x181818;
		t.verticalAlign = "middle";
		t.width = 533;
		t.x = 183;
		t.y = 694;
		return t;
	};
	_proto.infoTF_i = function () {
		var t = new eui.Label();
		this.infoTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 86;
		t.lineSpacing = 26;
		t.size = 24;
		t.text = "扫码加微信好友，转账成功后，返回确认充值成功。";
		t.textAlign = "left";
		t.textColor = 0x181818;
		t.width = 614;
		t.x = 85;
		t.y = 757;
		return t;
	};
	_proto.moneyTF2_i = function () {
		var t = new eui.Label();
		this.moneyTF2 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 22;
		t.lineSpacing = 12;
		t.size = 22;
		t.text = "请按金额0.00充值，金额不符，无法到账！！！";
		t.textAlign = "left";
		t.textColor = 0xff0000;
		t.width = 628;
		t.y = 839;
		return t;
	};
	_proto.paytypeImg_i = function () {
		var t = new eui.Image();
		this.paytypeImg = t;
		t.source = "yhkfk-text_png";
		t.x = 274;
		t.y = 22;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new eui.Button();
		this.confirmBtn = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.bottom = 66;
		t.horizontalCenter = -1.5;
		t.label = "充值成功";
		t.skinName = RechargeInfoSkin2$Skin50;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "微信好友付款";
		t.textColor = 0xffffff;
		t.x = 298;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 390;
		t.horizontalCenter = 16;
		t.scale9Grid = new egret.Rectangle(87,67,527,83);
		t.source = "grayrect_png";
		t.width = 420;
		t.y = 256;
		return t;
	};
	_proto.qrcode_i = function () {
		var t = new eui.Image();
		this.qrcode = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 370;
		t.width = 390;
		t.x = 196;
		t.y = 266;
		return t;
	};
	return RechargeInfoSkin2;
})(eui.Skin);generateEUI.paths['resource/app_skins/recharge/RechargeRecordSkin.exml'] = window.RechargeRecordSkin = (function (_super) {
	__extends(RechargeRecordSkin, _super);
	function RechargeRecordSkin() {
		_super.call(this);
		this.skinParts = ["tipTF","list","scroller","totalTF","totalSuccessTF","totalMoneyTF","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.tipTF_i(),this.scroller_i(),this._Group2_i(),this._Image3_i(),this._Label7_i(),this.closeBtn_i()];
	}
	var _proto = RechargeRecordSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp8_png";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x438cff;
		t.height = 60;
		t.width = 715;
		t.x = 18;
		t.y = 150;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.width = 1;
		t.x = 244;
		t.y = 150;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.width = 1;
		t.x = 512;
		t.y = 150;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "充值时间";
		t.textColor = 0xf4f9ff;
		t.x = 74;
		t.y = 166;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "充值金额";
		t.textColor = 0xf4f9ff;
		t.x = 328;
		t.y = 166;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "状态";
		t.textColor = 0xf4f9ff;
		t.x = 600;
		t.y = 166;
		return t;
	};
	_proto.tipTF_i = function () {
		var t = new eui.Label();
		this.tipTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 45;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 176;
		t.y = 265;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 900;
		t.width = 730;
		t.x = 14;
		t.y = 224;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = ZhangBianMingXiItemSkin;
		t.left = 0;
		t.right = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 48;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Label4_i(),this._Label5_i(),this._Label6_i(),this.totalTF_i(),this.totalSuccessTF_i(),this.totalMoneyTF_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x4a0000;
		t.text = "总计（笔）";
		t.textColor = 0x000000;
		t.x = -10;
		t.y = 32;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x4a0000;
		t.text = "总金额";
		t.textColor = 0x000000;
		t.x = 274;
		t.y = 32;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x4a0000;
		t.text = "充值成功";
		t.textColor = 0x000000;
		t.x = 498;
		t.y = 32;
		return t;
	};
	_proto.totalTF_i = function () {
		var t = new eui.Label();
		this.totalTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 146;
		t.x = -36;
		t.y = 82;
		return t;
	};
	_proto.totalSuccessTF_i = function () {
		var t = new eui.Label();
		this.totalSuccessTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 146;
		t.x = 466;
		t.y = 84;
		return t;
	};
	_proto.totalMoneyTF_i = function () {
		var t = new eui.Label();
		this.totalMoneyTF = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 146;
		t.x = 244;
		t.y = 74;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "充值记录";
		t.textColor = 0xffffff;
		t.x = 316;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	return RechargeRecordSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/recharge/RechargeSkin.exml'] = window.RechargeSkin = (function (_super) {
	__extends(RechargeSkin, _super);
	var RechargeSkin$Skin51 = 	(function (_super) {
		__extends(RechargeSkin$Skin51, _super);
		function RechargeSkin$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RechargeSkin$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.y = 35;
			return t;
		};
		return RechargeSkin$Skin51;
	})(eui.Skin);

	var RechargeSkin$Skin52 = 	(function (_super) {
		__extends(RechargeSkin$Skin52, _super);
		function RechargeSkin$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RechargeSkin$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "czmenu_s_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return RechargeSkin$Skin52;
	})(eui.Skin);

	var RechargeSkin$Skin53 = 	(function (_super) {
		__extends(RechargeSkin$Skin53, _super);
		function RechargeSkin$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RechargeSkin$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ggmenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return RechargeSkin$Skin53;
	})(eui.Skin);

	var RechargeSkin$Skin54 = 	(function (_super) {
		__extends(RechargeSkin$Skin54, _super);
		function RechargeSkin$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RechargeSkin$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "dtmenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return RechargeSkin$Skin54;
	})(eui.Skin);

	var RechargeSkin$Skin55 = 	(function (_super) {
		__extends(RechargeSkin$Skin55, _super);
		function RechargeSkin$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RechargeSkin$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "kfmenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return RechargeSkin$Skin55;
	})(eui.Skin);

	var RechargeSkin$Skin56 = 	(function (_super) {
		__extends(RechargeSkin$Skin56, _super);
		function RechargeSkin$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RechargeSkin$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "memenu_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return RechargeSkin$Skin56;
	})(eui.Skin);

	function RechargeSkin() {
		_super.call(this);
		this.skinParts = ["d2_1","price2_1","d2_2","price2_2","d2_3","price2_3","d2_4","price2_4","d2_5","price2_5","d2_6","price2_6","d2_7","price2_7","d2_8","price2_8","d2_9","price2_9","wxGroup","rechargeBtn","tipTF","recordBtn","closeBtn","tab1","tab2","tab3","tab4","select1","select2","select3","select4","noticeBtn","hallBtn","kfBtn","meBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.wxGroup_i(),this.rechargeBtn_i(),this.tipTF_i(),this.recordBtn_i(),this._Label1_i(),this._Image2_i(),this._Label2_i(),this.closeBtn_i(),this._Image3_i(),this.tab1_i(),this.tab2_i(),this.tab3_i(),this.tab4_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.select4_i(),this._Group10_i()];
	}
	var _proto = RechargeSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.wxGroup_i = function () {
		var t = new eui.Group();
		this.wxGroup = t;
		t.x = 66;
		t.y = 380;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.d2_1_i(),this.price2_1_i()];
		return t;
	};
	_proto.d2_1_i = function () {
		var t = new eui.Image();
		this.d2_1 = t;
		t.source = "bluebtn2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.price2_1_i = function () {
		var t = new eui.Label();
		this.price2_1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.strokeColor = 0x3a1400;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 154;
		t.x = 20;
		t.y = 22;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 220;
		t.y = 0;
		t.elementsContent = [this.d2_2_i(),this.price2_2_i()];
		return t;
	};
	_proto.d2_2_i = function () {
		var t = new eui.Image();
		this.d2_2 = t;
		t.source = "rectbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.price2_2_i = function () {
		var t = new eui.Label();
		this.price2_2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.strokeColor = 0x3a1400;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0x438cff;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 154;
		t.x = 12;
		t.y = 20;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 434;
		t.y = 0;
		t.elementsContent = [this.d2_3_i(),this.price2_3_i()];
		return t;
	};
	_proto.d2_3_i = function () {
		var t = new eui.Image();
		this.d2_3 = t;
		t.source = "rectbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.price2_3_i = function () {
		var t = new eui.Label();
		this.price2_3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.strokeColor = 0x3a1400;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0x438cff;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 154;
		t.x = 12;
		t.y = 20;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 6;
		t.y = 106;
		t.elementsContent = [this.d2_4_i(),this.price2_4_i()];
		return t;
	};
	_proto.d2_4_i = function () {
		var t = new eui.Image();
		this.d2_4 = t;
		t.source = "rectbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.price2_4_i = function () {
		var t = new eui.Label();
		this.price2_4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.strokeColor = 0x3a1400;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0x438cff;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 154;
		t.x = 12;
		t.y = 18;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 220;
		t.y = 106;
		t.elementsContent = [this.d2_5_i(),this.price2_5_i()];
		return t;
	};
	_proto.d2_5_i = function () {
		var t = new eui.Image();
		this.d2_5 = t;
		t.source = "rectbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.price2_5_i = function () {
		var t = new eui.Label();
		this.price2_5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.strokeColor = 0x3a1400;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0x438cff;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 154;
		t.x = 12;
		t.y = 18;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 434;
		t.y = 106;
		t.elementsContent = [this.d2_6_i(),this.price2_6_i()];
		return t;
	};
	_proto.d2_6_i = function () {
		var t = new eui.Image();
		this.d2_6 = t;
		t.source = "rectbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.price2_6_i = function () {
		var t = new eui.Label();
		this.price2_6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.strokeColor = 0x3a1400;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0x438cff;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 154;
		t.x = 12;
		t.y = 18;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 6;
		t.y = 206;
		t.elementsContent = [this.d2_7_i(),this.price2_7_i()];
		return t;
	};
	_proto.d2_7_i = function () {
		var t = new eui.Image();
		this.d2_7 = t;
		t.source = "rectbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.price2_7_i = function () {
		var t = new eui.Label();
		this.price2_7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.strokeColor = 0x3a1400;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0x438cff;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 154;
		t.x = 12;
		t.y = 18;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 220;
		t.y = 206;
		t.elementsContent = [this.d2_8_i(),this.price2_8_i()];
		return t;
	};
	_proto.d2_8_i = function () {
		var t = new eui.Image();
		this.d2_8 = t;
		t.source = "rectbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.price2_8_i = function () {
		var t = new eui.Label();
		this.price2_8 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.strokeColor = 0x3a1400;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0x438cff;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 154;
		t.x = 12;
		t.y = 18;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 434;
		t.y = 206;
		t.elementsContent = [this.d2_9_i(),this.price2_9_i()];
		return t;
	};
	_proto.d2_9_i = function () {
		var t = new eui.Image();
		this.d2_9 = t;
		t.source = "rectbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.price2_9_i = function () {
		var t = new eui.Label();
		this.price2_9 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.strokeColor = 0x3a1400;
		t.text = "200";
		t.textAlign = "center";
		t.textColor = 0x438cff;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 154;
		t.x = 12;
		t.y = 18;
		return t;
	};
	_proto.rechargeBtn_i = function () {
		var t = new eui.Button();
		this.rechargeBtn = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.bottom = 140;
		t.horizontalCenter = -1.5;
		t.label = "充  值";
		t.skinName = RechargeSkin$Skin51;
		return t;
	};
	_proto.tipTF_i = function () {
		var t = new eui.Label();
		this.tipTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 242;
		t.lineSpacing = 12;
		t.size = 24;
		t.text = "注意：\n1. 请你先点击充值按钮下单成功后再转账；\n2.请你在下单成功的页面详细查看订单的实际金额和说明，\n为避免支付风控，实际金额可能会浮动小位数，所以转账不能\n忽略金额的小位数，否则充值失败造成损失本平台概不负责！";
		t.visible = false;
		t.width = 714;
		t.x = 32;
		t.y = 946;
		return t;
	};
	_proto.recordBtn_i = function () {
		var t = new eui.Label();
		this.recordBtn = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 15;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "充值记录";
		t.textColor = 0xffffff;
		t.x = 688;
		t.y = 95;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "充值金额";
		t.textColor = 0x191919;
		t.x = 38;
		t.y = 298;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "充值";
		t.textColor = 0xffffff;
		t.x = 344;
		t.y = 72;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "logo3_png";
		t.x = 16;
		t.y = 52;
		return t;
	};
	_proto.tab1_i = function () {
		var t = new eui.Label();
		this.tab1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "支付宝充值";
		t.textColor = 0x438cff;
		t.x = 74;
		t.y = 208;
		return t;
	};
	_proto.tab2_i = function () {
		var t = new eui.Label();
		this.tab2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "银行卡充值";
		t.textColor = 0xbcbcbc;
		t.x = 262;
		t.y = 208;
		return t;
	};
	_proto.tab3_i = function () {
		var t = new eui.Label();
		this.tab3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "微信充值";
		t.textColor = 0xbcbcbc;
		t.x = 446;
		t.y = 210;
		return t;
	};
	_proto.tab4_i = function () {
		var t = new eui.Label();
		this.tab4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "U币充值";
		t.textColor = 0xbcbcbc;
		t.x = 588;
		t.y = 210;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.source = "bluebtn3_png";
		t.x = 118;
		t.y = 246;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.source = "bluebtn3_png";
		t.x = 306;
		t.y = 246;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.source = "bluebtn3_png";
		t.x = 478;
		t.y = 246;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.source = "bluebtn3_png";
		t.x = 618;
		t.y = 246;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 115;
		t.width = 750;
		t.x = 0;
		t.elementsContent = [this._Image4_i(),this._Button1_i(),this.noticeBtn_i(),this.hallBtn_i(),this.kfBtn_i(),this.meBtn_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "bottombar_png";
		t.y = 0;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.x = 86;
		t.y = 59;
		t.skinName = RechargeSkin$Skin52;
		return t;
	};
	_proto.noticeBtn_i = function () {
		var t = new eui.Button();
		this.noticeBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 240;
		t.y = 61;
		t.skinName = RechargeSkin$Skin53;
		return t;
	};
	_proto.hallBtn_i = function () {
		var t = new eui.Button();
		this.hallBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 382;
		t.y = 59;
		t.skinName = RechargeSkin$Skin54;
		return t;
	};
	_proto.kfBtn_i = function () {
		var t = new eui.Button();
		this.kfBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 516;
		t.y = 59;
		t.skinName = RechargeSkin$Skin55;
		return t;
	};
	_proto.meBtn_i = function () {
		var t = new eui.Button();
		this.meBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 658;
		t.y = 59;
		t.skinName = RechargeSkin$Skin56;
		return t;
	};
	return RechargeSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/recharge/TixianRecordSkin.exml'] = window.TixianRecordSkin = (function (_super) {
	__extends(TixianRecordSkin, _super);
	function TixianRecordSkin() {
		_super.call(this);
		this.skinParts = ["tipTF","list","scroller","totalTF","totalSuccessTF","totalMoneyTF","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.tipTF_i(),this.scroller_i(),this._Group2_i(),this._Image2_i(),this._Label7_i(),this.closeBtn_i()];
	}
	var _proto = TixianRecordSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x438cff;
		t.height = 60;
		t.width = 715;
		t.x = 18;
		t.y = 150;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.width = 1;
		t.x = 244;
		t.y = 150;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.width = 1;
		t.x = 512;
		t.y = 150;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "提现时间";
		t.textColor = 0xf4f9ff;
		t.x = 74;
		t.y = 166;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "提现金额";
		t.textColor = 0xf4f9ff;
		t.x = 328;
		t.y = 166;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "状态";
		t.textColor = 0xf4f9ff;
		t.x = 600;
		t.y = 166;
		return t;
	};
	_proto.tipTF_i = function () {
		var t = new eui.Label();
		this.tipTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 45;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 176;
		t.y = 265;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 900;
		t.width = 730;
		t.x = 14;
		t.y = 224;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = ZhangBianMingXiItemSkin;
		t.left = 0;
		t.right = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 48;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Label4_i(),this._Label5_i(),this._Label6_i(),this.totalTF_i(),this.totalSuccessTF_i(),this.totalMoneyTF_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x4a0000;
		t.text = "总计（笔）";
		t.textColor = 0x000000;
		t.x = -10;
		t.y = 32;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x4a0000;
		t.text = "总金额";
		t.textColor = 0x000000;
		t.x = 274;
		t.y = 32;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x4a0000;
		t.text = "提现成功";
		t.textColor = 0x000000;
		t.x = 498;
		t.y = 32;
		return t;
	};
	_proto.totalTF_i = function () {
		var t = new eui.Label();
		this.totalTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 146;
		t.x = -36;
		t.y = 82;
		return t;
	};
	_proto.totalSuccessTF_i = function () {
		var t = new eui.Label();
		this.totalSuccessTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 146;
		t.x = 466;
		t.y = 84;
		return t;
	};
	_proto.totalMoneyTF_i = function () {
		var t = new eui.Label();
		this.totalMoneyTF = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 146;
		t.x = 244;
		t.y = 74;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "提现记录";
		t.textColor = 0xffffff;
		t.x = 316;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	return TixianRecordSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/recharge/TixianSkin.exml'] = window.TixianSkin = (function (_super) {
	__extends(TixianSkin, _super);
	var TixianSkin$Skin57 = 	(function (_super) {
		__extends(TixianSkin$Skin57, _super);
		function TixianSkin$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TixianSkin$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn4_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.textColor = 0xfdfddb;
			t.verticalCenter = 0;
			return t;
		};
		return TixianSkin$Skin57;
	})(eui.Skin);

	var TixianSkin$Skin58 = 	(function (_super) {
		__extends(TixianSkin$Skin58, _super);
		function TixianSkin$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TixianSkin$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn4_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.textColor = 0xfdfddb;
			t.verticalCenter = 0;
			return t;
		};
		return TixianSkin$Skin58;
	})(eui.Skin);

	var TixianSkin$Skin59 = 	(function (_super) {
		__extends(TixianSkin$Skin59, _super);
		function TixianSkin$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TixianSkin$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.textColor = 0xffffff;
			t.y = 35;
			return t;
		};
		return TixianSkin$Skin59;
	})(eui.Skin);

	function TixianSkin() {
		_super.call(this);
		this.skinParts = ["todayRechargeTF","todayTixianTF","todayLiushuiTF","todayTixianTF2","totalRechargeTF","totalLiushuiTF","balanceTF","chakanBtn1","chakanBtn2","minMoneyTF","maxMoneyTF","l1","l2","passwordTF","moneyTF","confirmBtn","recordBtn","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.todayRechargeTF_i(),this.todayTixianTF_i(),this.todayLiushuiTF_i(),this.todayTixianTF2_i(),this.totalRechargeTF_i(),this.totalLiushuiTF_i(),this.balanceTF_i(),this._Group1_i(),this._Group2_i(),this._Rect2_i(),this._Rect3_i(),this.minMoneyTF_i(),this.maxMoneyTF_i(),this.l1_i(),this._Label1_i(),this.l2_i(),this._Image6_i(),this._Image7_i(),this.passwordTF_i(),this.moneyTF_i(),this.confirmBtn_i(),this.recordBtn_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Image8_i(),this._Label11_i(),this.closeBtn_i()];
	}
	var _proto = TixianSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 336;
		t.scale9Grid = new egret.Rectangle(87,60,527,94);
		t.source = "grayrect_png";
		t.x = 26;
		t.y = 140;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "grayrect_png";
		t.x = 26;
		t.y = 488;
		return t;
	};
	_proto.todayRechargeTF_i = function () {
		var t = new eui.Label();
		this.todayRechargeTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xfe2324;
		t.verticalAlign = "middle";
		t.width = 130;
		t.x = 84;
		t.y = 206;
		return t;
	};
	_proto.todayTixianTF_i = function () {
		var t = new eui.Label();
		this.todayTixianTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xfe2324;
		t.verticalAlign = "middle";
		t.width = 229;
		t.x = 32;
		t.y = 316;
		return t;
	};
	_proto.todayLiushuiTF_i = function () {
		var t = new eui.Label();
		this.todayLiushuiTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xfe2324;
		t.verticalAlign = "middle";
		t.width = 270;
		t.x = 242;
		t.y = 206;
		return t;
	};
	_proto.todayTixianTF2_i = function () {
		var t = new eui.Label();
		this.todayTixianTF2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xfe2324;
		t.verticalAlign = "middle";
		t.width = 168;
		t.x = 294;
		t.y = 316;
		return t;
	};
	_proto.totalRechargeTF_i = function () {
		var t = new eui.Label();
		this.totalRechargeTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xfe2324;
		t.verticalAlign = "middle";
		t.width = 197;
		t.x = 498;
		t.y = 206;
		return t;
	};
	_proto.totalLiushuiTF_i = function () {
		var t = new eui.Label();
		this.totalLiushuiTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xfe2324;
		t.verticalAlign = "middle";
		t.width = 206;
		t.x = 494;
		t.y = 316;
		return t;
	};
	_proto.balanceTF_i = function () {
		var t = new eui.Label();
		this.balanceTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xfe2324;
		t.verticalAlign = "middle";
		t.width = 243;
		t.x = 30;
		t.y = 414;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 321;
		t.y = 536;
		t.elementsContent = [this.chakanBtn1_i(),this._Image4_i()];
		return t;
	};
	_proto.chakanBtn1_i = function () {
		var t = new eui.Button();
		this.chakanBtn1 = t;
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 26;
		t.label = "查看";
		t.x = 59;
		t.y = 96;
		t.skinName = TixianSkin$Skin57;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "alipayicon_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 93;
		t.y = 536;
		t.elementsContent = [this._Image5_i(),this.chakanBtn2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "bankicon_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chakanBtn2_i = function () {
		var t = new eui.Button();
		this.chakanBtn2 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 31;
		t.label = "查 看";
		t.x = 75;
		t.y = 102;
		t.skinName = TixianSkin$Skin58;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 90;
		t.y = 815;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 570;
		t.x = 90;
		t.y = 955;
		return t;
	};
	_proto.minMoneyTF_i = function () {
		var t = new eui.Label();
		this.minMoneyTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xfe2324;
		t.verticalAlign = "middle";
		t.width = 320;
		t.x = 430;
		t.y = 554;
		return t;
	};
	_proto.maxMoneyTF_i = function () {
		var t = new eui.Label();
		this.maxMoneyTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xfe2324;
		t.verticalAlign = "middle";
		t.width = 213;
		t.x = 486;
		t.y = 642;
		return t;
	};
	_proto.l1_i = function () {
		var t = new eui.Label();
		this.l1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 资金密码";
		t.textColor = 0x181818;
		t.x = 110;
		t.y = 770;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.size = 20;
		t.text = "*初始资金密码为123456，为安全起见请前往设置修改密码";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 700;
		t.y = 1004;
		return t;
	};
	_proto.l2_i = function () {
		var t = new eui.Label();
		this.l2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "* 提现金额";
		t.textColor = 0x181818;
		t.x = 110;
		t.y = 910;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "l_inputbg2_png";
		t.x = 252;
		t.y = 796;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "l_inputbg2_png";
		t.x = 252;
		t.y = 934;
		return t;
	};
	_proto.passwordTF_i = function () {
		var t = new eui.EditableText();
		this.passwordTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入资金密码";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 270;
		t.y = 748;
		return t;
	};
	_proto.moneyTF_i = function () {
		var t = new eui.EditableText();
		this.moneyTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入提现金额";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 270;
		t.y = 888;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new eui.Button();
		this.confirmBtn = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.bottom = 62;
		t.horizontalCenter = -1.5;
		t.label = "提  现";
		t.skinName = TixianSkin$Skin59;
		return t;
	};
	_proto.recordBtn_i = function () {
		var t = new eui.Label();
		this.recordBtn = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 15;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "提现记录";
		t.textColor = 0xffffff;
		t.x = 686;
		t.y = 87;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.strokeColor = 0x372b09;
		t.text = "总充值";
		t.textColor = 0x211f03;
		t.x = 124;
		t.y = 172;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.strokeColor = 0x372b09;
		t.text = "实时充值";
		t.textColor = 0x211f03;
		t.x = 334;
		t.y = 172;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.strokeColor = 0x372b09;
		t.text = "总流水";
		t.textColor = 0x211f03;
		t.x = 568;
		t.y = 170;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.strokeColor = 0x372b09;
		t.text = "今日提现次数";
		t.textColor = 0x211f03;
		t.x = 94;
		t.y = 276;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.strokeColor = 0x372b09;
		t.text = "今日提现额度";
		t.textColor = 0x211f03;
		t.x = 314;
		t.y = 276;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.strokeColor = 0x372b09;
		t.text = "实时流水";
		t.textColor = 0x211f03;
		t.x = 558;
		t.y = 276;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.strokeColor = 0x372b09;
		t.text = "账户余额";
		t.textColor = 0x211f03;
		t.x = 114;
		t.y = 380;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.strokeColor = 0x372b09;
		t.text = "可提现最小金额";
		t.textColor = 0x211f03;
		t.x = 528;
		t.y = 518;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.strokeColor = 0x372b09;
		t.text = "可提现最大金额";
		t.textColor = 0x211f03;
		t.x = 528;
		t.y = 606;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "提现";
		t.textColor = 0xffffff;
		t.x = 344;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	return TixianSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/report/DailiNavigateItemSkin.exml'] = window.DailiNavigateItemSkin = (function (_super) {
	__extends(DailiNavigateItemSkin, _super);
	function DailiNavigateItemSkin() {
		_super.call(this);
		this.skinParts = ["nameTF","arrowTF"];
		
		this.elementsContent = [this.nameTF_i(),this.arrowTF_i()];
	}
	var _proto = DailiNavigateItemSkin.prototype;

	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "本级";
		t.textAlign = "left";
		t.textColor = 0xff1e1e;
		t.width = 76;
		return t;
	};
	_proto.arrowTF_i = function () {
		var t = new eui.Label();
		this.arrowTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = ">";
		t.textColor = 0xff1e1e;
		t.width = 41;
		t.x = 56;
		return t;
	};
	return DailiNavigateItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/report/ModifyFenhongSkin.exml'] = window.ModifyFenhongSkin = (function (_super) {
	__extends(ModifyFenhongSkin, _super);
	var ModifyFenhongSkin$Skin60 = 	(function (_super) {
		__extends(ModifyFenhongSkin$Skin60, _super);
		function ModifyFenhongSkin$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ModifyFenhongSkin$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.stroke = 3;
			t.strokeColor = 0x07536b;
			t.textColor = 0xfdfddb;
			t.verticalCenter = 0;
			return t;
		};
		return ModifyFenhongSkin$Skin60;
	})(eui.Skin);

	var ModifyFenhongSkin$Skin61 = 	(function (_super) {
		__extends(ModifyFenhongSkin$Skin61, _super);
		function ModifyFenhongSkin$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ModifyFenhongSkin$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "closebtn7_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ModifyFenhongSkin$Skin61;
	})(eui.Skin);

	function ModifyFenhongSkin() {
		_super.call(this);
		this.skinParts = ["curRateTF","submitBtn","rateTF","l1","closeBtn","closerect"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group2_i()];
	}
	var _proto = ModifyFenhongSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp4_jpg";
		t.visible = false;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.2;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 9;
		t.y = 277;
		t.elementsContent = [this._Image2_i(),this.curRateTF_i(),this.submitBtn_i(),this._Label1_i(),this.rateTF_i(),this.l1_i(),this._Rect2_i(),this._Label2_i(),this.closeBtn_i(),this.closerect_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.source = "infobg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.curRateTF_i = function () {
		var t = new eui.Label();
		this.curRateTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "当前分红系数：--";
		t.textAlign = "center";
		t.textColor = 0x181818;
		t.verticalAlign = "middle";
		t.width = 461;
		t.y = 172;
		return t;
	};
	_proto.submitBtn_i = function () {
		var t = new eui.Button();
		this.submitBtn = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.horizontalCenter = 0.5;
		t.label = "确 认";
		t.y = 660;
		t.skinName = ModifyFenhongSkin$Skin60;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -47.5;
		t.size = 18;
		t.text = "分红系数只能上调，不可以下调，请谨慎使用";
		t.textColor = 0xff0000;
		t.width = 463;
		t.y = 412;
		return t;
	};
	_proto.rateTF_i = function () {
		var t = new eui.EditableText();
		this.rateTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入分红";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 268;
		t.y = 314;
		return t;
	};
	_proto.l1_i = function () {
		var t = new eui.Label();
		this.l1 = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.size = 26;
		t.text = "* 设置新分红：";
		t.textColor = 0x181818;
		t.verticalAlign = "middle";
		t.x = 97;
		t.y = 333;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xa7a8aa;
		t.height = 2;
		t.width = 570;
		t.x = 78;
		t.y = 380;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "修改分红系数";
		t.y = 46;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 13;
		t.anchorOffsetY = 13;
		t.label = "";
		t.x = 663;
		t.y = 64;
		t.skinName = ModifyFenhongSkin$Skin61;
		return t;
	};
	_proto.closerect_i = function () {
		var t = new eui.Rect();
		this.closerect = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.width = 82;
		t.x = 621;
		t.y = 36;
		return t;
	};
	return ModifyFenhongSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/report/ModifyRateSkin.exml'] = window.ModifyRateSkin = (function (_super) {
	__extends(ModifyRateSkin, _super);
	var ModifyRateSkin$Skin62 = 	(function (_super) {
		__extends(ModifyRateSkin$Skin62, _super);
		function ModifyRateSkin$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ModifyRateSkin$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 30;
			t.stroke = 3;
			t.strokeColor = 0x07536b;
			t.textColor = 0xfdfddb;
			t.verticalCenter = 0;
			return t;
		};
		return ModifyRateSkin$Skin62;
	})(eui.Skin);

	var ModifyRateSkin$Skin63 = 	(function (_super) {
		__extends(ModifyRateSkin$Skin63, _super);
		function ModifyRateSkin$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ModifyRateSkin$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "closebtn7_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ModifyRateSkin$Skin63;
	})(eui.Skin);

	function ModifyRateSkin() {
		_super.call(this);
		this.skinParts = ["curRateTF","submitBtn","rateTF","l1","closeBtn","closerect"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group2_i()];
	}
	var _proto = ModifyRateSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp4_jpg";
		t.visible = false;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.2;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 9;
		t.y = 277;
		t.elementsContent = [this._Image2_i(),this.curRateTF_i(),this.submitBtn_i(),this._Label1_i(),this.rateTF_i(),this.l1_i(),this._Rect2_i(),this._Label2_i(),this.closeBtn_i(),this.closerect_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.source = "infobg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.curRateTF_i = function () {
		var t = new eui.Label();
		this.curRateTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "当前返利系数：--";
		t.textAlign = "center";
		t.textColor = 0x181818;
		t.verticalAlign = "middle";
		t.width = 461;
		t.y = 172;
		return t;
	};
	_proto.submitBtn_i = function () {
		var t = new eui.Button();
		this.submitBtn = t;
		t.anchorOffsetX = 255;
		t.anchorOffsetY = 58;
		t.horizontalCenter = 0.5;
		t.label = "确 认";
		t.y = 660;
		t.skinName = ModifyRateSkin$Skin62;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -47.5;
		t.size = 18;
		t.text = "返利系数只能上调，不可以下调，请谨慎使用";
		t.textColor = 0xff0000;
		t.width = 463;
		t.y = 412;
		return t;
	};
	_proto.rateTF_i = function () {
		var t = new eui.EditableText();
		this.rateTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.prompt = "请输入返利";
		t.promptColor = 0x919191;
		t.size = 26;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 392;
		t.x = 268;
		t.y = 314;
		return t;
	};
	_proto.l1_i = function () {
		var t = new eui.Label();
		this.l1 = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.size = 26;
		t.text = "* 设置新返利：";
		t.textColor = 0x181818;
		t.verticalAlign = "middle";
		t.x = 97;
		t.y = 333;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xa7a8aa;
		t.height = 2;
		t.width = 570;
		t.x = 78;
		t.y = 380;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "修改返利系数";
		t.y = 46;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 13;
		t.anchorOffsetY = 13;
		t.label = "";
		t.x = 663;
		t.y = 64;
		t.skinName = ModifyRateSkin$Skin63;
		return t;
	};
	_proto.closerect_i = function () {
		var t = new eui.Rect();
		this.closerect = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.width = 82;
		t.x = 621;
		t.y = 36;
		return t;
	};
	return ModifyRateSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/report/NGerenReportSkin.exml'] = window.NGerenReportSkin = (function (_super) {
	__extends(NGerenReportSkin, _super);
	function NGerenReportSkin() {
		_super.call(this);
		this.skinParts = ["list","scroller","tipTF","prevBtn","nextBtn","pageTF","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this.scroller_i(),this.tipTF_i(),this._Group2_i(),this._Label1_i(),this._Label2_i(),this._Image3_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Image4_i(),this._Label8_i(),this.closeBtn_i()];
	}
	var _proto = NGerenReportSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp15_png";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x438cff;
		t.height = 60;
		t.width = 715;
		t.x = 18;
		t.y = 200;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.width = 1;
		t.x = 180;
		t.y = 200;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.width = 1;
		t.x = 340;
		t.y = 200;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.width = 1;
		t.x = 458;
		t.y = 200;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.width = 1;
		t.x = 584;
		t.y = 200;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.bounces = true;
		t.top = 274;
		t.width = 720;
		t.x = 16;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		return t;
	};
	_proto.tipTF_i = function () {
		var t = new eui.Label();
		this.tipTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 45;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 176;
		t.y = 305;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 48;
		t.horizontalCenter = 0;
		t.visible = false;
		t.elementsContent = [this.prevBtn_i(),this.nextBtn_i(),this.pageTF_i()];
		return t;
	};
	_proto.prevBtn_i = function () {
		var t = new eui.Image();
		this.prevBtn = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 26;
		t.source = "prevbtn_png";
		t.y = 15;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Image();
		this.nextBtn = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 26;
		t.source = "nextbtn_png";
		t.x = 154;
		t.y = 15;
		return t;
	};
	_proto.pageTF_i = function () {
		var t = new eui.Label();
		this.pageTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.strokeColor = 0x60260e;
		t.text = "1/1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 101;
		t.x = 27;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "当前位置：";
		t.textColor = 0x211f03;
		t.x = 24;
		t.y = 152;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "本级";
		t.textColor = 0xff1e1e;
		t.visible = false;
		t.x = 134;
		t.y = 152;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "titlebar1_png";
		t.x = 52;
		t.y = 182;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "会员名";
		t.textColor = 0xffffff;
		t.x = 76;
		t.y = 216;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "金额（元）";
		t.textColor = 0xffffff;
		t.x = 216;
		t.y = 216;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "分红";
		t.textColor = 0xffffff;
		t.x = 376;
		t.y = 216;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "返点";
		t.textColor = 0xffffff;
		t.x = 496;
		t.y = 216;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x60260e;
		t.text = "账变";
		t.textColor = 0xffffff;
		t.x = 634;
		t.y = 218;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "个人报表";
		t.textColor = 0xffffff;
		t.x = 314;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	return NGerenReportSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/report/NReportSkin.exml'] = window.NReportSkin = (function (_super) {
	__extends(NReportSkin, _super);
	var NReportSkin$Skin64 = 	(function (_super) {
		__extends(NReportSkin$Skin64, _super);
		function NReportSkin$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NReportSkin$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bluebtn4_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.textColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return NReportSkin$Skin64;
	})(eui.Skin);

	function NReportSkin() {
		_super.call(this);
		this.skinParts = ["searchBtn","fromDateTF","fromGroup","toDateTF","toGroup","totalTF","totalFdTF","totalZBTF","totalFHTF","list","scroller","tipTF","dlfhTF","grfhTF","tdfhTF","xjfhTF","zhyeTF","yjczTF","jsrqTF","djsTF","posG","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Rect2_i(),this.searchBtn_i(),this.fromGroup_i(),this.toGroup_i(),this._Group1_i(),this._Group2_i(),this.scroller_i(),this.tipTF_i(),this.dlfhTF_i(),this.grfhTF_i(),this.tdfhTF_i(),this.xjfhTF_i(),this.zhyeTF_i(),this.yjczTF_i(),this.jsrqTF_i(),this.djsTF_i(),this._Label7_i(),this._Label8_i(),this.posG_i(),this._Label9_i(),this._Image12_i(),this._Label10_i(),this.closeBtn_i()];
	}
	var _proto = NReportSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp16_png";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 444;
		t.scale9Grid = new egret.Rectangle(87,61,527,90);
		t.source = "grayrect_png";
		t.x = 24;
		t.y = 142;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.source = "m_rect1_png";
		t.x = 58;
		t.y = 114;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 162;
		t.scale9Grid = new egret.Rectangle(80,57,485,348);
		t.source = "m_rect2_png";
		t.top = 710;
		t.x = 58;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "titlebar1_png";
		t.x = 52;
		t.y = 568;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "dailitimebg_png";
		t.x = 90;
		t.y = 398;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "greyrect2_png";
		t.x = 84;
		t.y = 424;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xcfcfcf;
		t.height = 65;
		t.strokeColor = 0xcfcfcf;
		t.width = 66;
		t.x = 342;
		t.y = 422;
		return t;
	};
	_proto.searchBtn_i = function () {
		var t = new eui.Button();
		this.searchBtn = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 31;
		t.label = "搜 索";
		t.x = 610;
		t.y = 536;
		t.skinName = NReportSkin$Skin64;
		return t;
	};
	_proto.fromGroup_i = function () {
		var t = new eui.Group();
		this.fromGroup = t;
		t.anchorOffsetX = 0;
		t.width = 230;
		t.x = 90;
		t.y = 428;
		t.elementsContent = [this._Image9_i(),this.fromDateTF_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "mine_bind_input_ic_dropdown_png";
		t.x = 178;
		t.y = 22;
		return t;
	};
	_proto.fromDateTF_i = function () {
		var t = new eui.Label();
		this.fromDateTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.strokeColor = 0xff0000;
		t.text = "01月01日";
		t.textAlign = "center";
		t.textColor = 0x211f03;
		t.verticalAlign = "middle";
		t.width = 178;
		t.x = -2;
		t.y = 18;
		return t;
	};
	_proto.toGroup_i = function () {
		var t = new eui.Group();
		this.toGroup = t;
		t.anchorOffsetX = 0;
		t.width = 232;
		t.x = 424;
		t.y = 428;
		t.elementsContent = [this._Image10_i(),this.toDateTF_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "mine_bind_input_ic_dropdown_png";
		t.x = 188;
		t.y = 20;
		return t;
	};
	_proto.toDateTF_i = function () {
		var t = new eui.Label();
		this.toDateTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.strokeColor = 0xff0000;
		t.text = "01月01日";
		t.textAlign = "center";
		t.textColor = 0x211f03;
		t.verticalAlign = "middle";
		t.width = 178;
		t.x = 2;
		t.y = 16;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 38;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image11_i(),this._Label1_i(),this.totalTF_i(),this.totalFdTF_i(),this.totalZBTF_i(),this.totalFHTF_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 81;
		t.scale9Grid = new egret.Rectangle(81,34,486,43);
		t.source = "kuang2_png";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x4a0000;
		t.text = "总计（笔）";
		t.textColor = 0x000000;
		t.x = -2;
		t.y = 18;
		return t;
	};
	_proto.totalTF_i = function () {
		var t = new eui.Label();
		this.totalTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.strokeColor = 0xff0000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 178;
		t.x = 114;
		t.y = 16;
		return t;
	};
	_proto.totalFdTF_i = function () {
		var t = new eui.Label();
		this.totalFdTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.strokeColor = 0xff0000;
		t.text = "0.00";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 244;
		t.y = 16;
		return t;
	};
	_proto.totalZBTF_i = function () {
		var t = new eui.Label();
		this.totalZBTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.strokeColor = 0xff0000;
		t.text = "0.00";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 434;
		t.y = 16;
		return t;
	};
	_proto.totalFHTF_i = function () {
		var t = new eui.Label();
		this.totalFHTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0xff0000;
		t.text = "0.00";
		t.textAlign = "center";
		t.textColor = 0xff2d2d;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 552;
		t.y = 16;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 16;
		t.y = 592;
		t.elementsContent = [this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this._Rect7_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x438cff;
		t.height = 60;
		t.width = 715;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.width = 1;
		t.x = 160;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.width = 1;
		t.x = 314;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.width = 1;
		t.x = 472;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 60;
		t.width = 1;
		t.x = 592;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x4a0000;
		t.text = "会员账号";
		t.textColor = 0xffffff;
		t.x = 34;
		t.y = 18;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x4a0000;
		t.text = "投注流水";
		t.textColor = 0xffffff;
		t.x = 184;
		t.y = 18;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x4a0000;
		t.text = "返点收入";
		t.textColor = 0xffffff;
		t.x = 344;
		t.y = 18;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x4a0000;
		t.text = "盈亏";
		t.textColor = 0xffffff;
		t.x = 504;
		t.y = 16;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.strokeColor = 0x4a0000;
		t.text = "分红";
		t.textColor = 0xffffff;
		t.x = 622;
		t.y = 16;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 132;
		t.top = 660;
		t.width = 724;
		t.x = 16;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		return t;
	};
	_proto.tipTF_i = function () {
		var t = new eui.Label();
		this.tipTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 45;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 176;
		t.y = 725;
		return t;
	};
	_proto.dlfhTF_i = function () {
		var t = new eui.Label();
		this.dlfhTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "代理分红率：0%";
		t.textColor = 0x211f03;
		t.width = 296;
		t.x = 86;
		t.y = 162;
		return t;
	};
	_proto.grfhTF_i = function () {
		var t = new eui.Label();
		this.grfhTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "个人应得分红：0";
		t.textAlign = "right";
		t.textColor = 0x211f03;
		t.width = 296;
		t.x = 368;
		t.y = 162;
		return t;
	};
	_proto.tdfhTF_i = function () {
		var t = new eui.Label();
		this.tdfhTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "团队预计分红：0%";
		t.textColor = 0x211f03;
		t.width = 296;
		t.x = 84;
		t.y = 208;
		return t;
	};
	_proto.xjfhTF_i = function () {
		var t = new eui.Label();
		this.xjfhTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "应发下级分红：0";
		t.textAlign = "right";
		t.textColor = 0x211f03;
		t.width = 296;
		t.x = 368;
		t.y = 206;
		return t;
	};
	_proto.zhyeTF_i = function () {
		var t = new eui.Label();
		this.zhyeTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "账号余额：0";
		t.textColor = 0x211f03;
		t.width = 296;
		t.x = 86;
		t.y = 254;
		return t;
	};
	_proto.yjczTF_i = function () {
		var t = new eui.Label();
		this.yjczTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "预计充值：0";
		t.textAlign = "right";
		t.textColor = 0x211f03;
		t.width = 296;
		t.x = 368;
		t.y = 254;
		return t;
	};
	_proto.jsrqTF_i = function () {
		var t = new eui.Label();
		this.jsrqTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "下次结算日期：--";
		t.textColor = 0x211f03;
		t.width = 592;
		t.x = 86;
		t.y = 300;
		return t;
	};
	_proto.djsTF_i = function () {
		var t = new eui.Label();
		this.djsTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "结算倒计时：--";
		t.textColor = 0x211f03;
		t.width = 592;
		t.x = 86;
		t.y = 346;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "日期选择";
		t.textColor = 0x211f03;
		t.width = 592;
		t.x = 82;
		t.y = 388;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "当前位置";
		t.textColor = 0x211f03;
		t.x = 84;
		t.y = 524;
		return t;
	};
	_proto.posG_i = function () {
		var t = new eui.Group();
		this.posG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.width = 306;
		t.x = 198;
		t.y = 504;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "到";
		t.textColor = 0x211f03;
		t.x = 364;
		t.y = 444;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "代理报表";
		t.textColor = 0xffffff;
		t.x = 314;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	return NReportSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/report/SelectDateSkin.exml'] = window.SelectDateSkin = (function (_super) {
	__extends(SelectDateSkin, _super);
	var SelectDateSkin$Skin65 = 	(function (_super) {
		__extends(SelectDateSkin$Skin65, _super);
		function SelectDateSkin$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SelectDateSkin$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "prevbtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SelectDateSkin$Skin65;
	})(eui.Skin);

	var SelectDateSkin$Skin66 = 	(function (_super) {
		__extends(SelectDateSkin$Skin66, _super);
		function SelectDateSkin$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SelectDateSkin$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nextbtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SelectDateSkin$Skin66;
	})(eui.Skin);

	var SelectDateSkin$Skin67 = 	(function (_super) {
		__extends(SelectDateSkin$Skin67, _super);
		function SelectDateSkin$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SelectDateSkin$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "closebtn7_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SelectDateSkin$Skin67;
	})(eui.Skin);

	function SelectDateSkin() {
		_super.call(this);
		this.skinParts = ["prevBtn","nextBtn","monthTF","list","closeBtn","closerect"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group2_i()];
	}
	var _proto = SelectDateSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp7_jpg";
		t.visible = false;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 10;
		t.y = 278;
		t.elementsContent = [this._Image2_i(),this.prevBtn_i(),this.nextBtn_i(),this.monthTF_i(),this.list_i(),this.closeBtn_i(),this._Label1_i(),this.closerect_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.source = "infobg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.prevBtn_i = function () {
		var t = new eui.Button();
		this.prevBtn = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 26;
		t.label = "";
		t.x = 284;
		t.y = 160;
		t.skinName = SelectDateSkin$Skin65;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Button();
		this.nextBtn = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 26;
		t.label = "";
		t.x = 462;
		t.y = 160;
		t.skinName = SelectDateSkin$Skin66;
		return t;
	};
	_proto.monthTF_i = function () {
		var t = new eui.Label();
		this.monthTF = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 42;
		t.size = 30;
		t.text = "1月";
		t.textAlign = "center";
		t.textColor = 0x181818;
		t.verticalAlign = "middle";
		t.width = 130;
		t.x = 312;
		t.y = 140;
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 490;
		t.width = 630;
		t.x = 56;
		t.y = 244;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 2;
		t.requestedColumnCount = 11;
		t.verticalGap = 10;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 13;
		t.anchorOffsetY = 13;
		t.label = "";
		t.x = 663;
		t.y = 64;
		t.skinName = SelectDateSkin$Skin67;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "日期选择";
		t.y = 46;
		return t;
	};
	_proto.closerect_i = function () {
		var t = new eui.Rect();
		this.closerect = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.width = 82;
		t.x = 621;
		t.y = 36;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "dateitembg_png";
		t.visible = false;
		t.x = 56;
		t.y = 244;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "dateitembg_png";
		t.visible = false;
		t.x = 112;
		t.y = 244;
		return t;
	};
	return SelectDateSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/tl/GameRuleSkin.exml'] = window.GameRuleSkin = (function (_super) {
	__extends(GameRuleSkin, _super);
	var GameRuleSkin$Skin68 = 	(function (_super) {
		__extends(GameRuleSkin$Skin68, _super);
		function GameRuleSkin$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameRuleSkin$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "closebtn4_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameRuleSkin$Skin68;
	})(eui.Skin);

	function GameRuleSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","closerectBtn","infoTF","list","scroller","nameTF","rateTF","weaponTF","rewardTF"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group4_i()];
	}
	var _proto = GameRuleSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 217;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.closeBtn_i(),this._Image3_i(),this._Label1_i(),this.closerectBtn_i(),this.infoTF_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this.scroller_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.source = "rulebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "rulebg2_png";
		t.x = 24;
		t.y = 285;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 15;
		t.anchorOffsetY = 14;
		t.label = "";
		t.x = 591;
		t.y = 40;
		t.skinName = GameRuleSkin$Skin68;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "backBtn2_png";
		t.visible = false;
		t.x = 22;
		t.y = 27;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "玩法介绍";
		t.x = 248;
		t.y = 23;
		return t;
	};
	_proto.closerectBtn_i = function () {
		var t = new eui.Rect();
		this.closerectBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 76;
		t.x = 546;
		t.y = 7;
		return t;
	};
	_proto.infoTF_i = function () {
		var t = new eui.Label();
		this.infoTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 176;
		t.lineSpacing = 10;
		t.size = 24;
		t.text = "玩法介绍...";
		t.width = 602;
		t.x = 16;
		t.y = 101;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "怪物种类";
		t.textColor = 0xfdcc37;
		t.x = 56;
		t.y = 307;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "进攻概率";
		t.textColor = 0xfdcc37;
		t.x = 196;
		t.y = 307;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "畏惧武器";
		t.textColor = 0xfdcc37;
		t.x = 340;
		t.y = 307;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "消灭奖励";
		t.textColor = 0xfdcc37;
		t.x = 472;
		t.y = 307;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 672;
		t.width = 578;
		t.x = 27;
		t.y = 353;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 9;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 27;
		t.y = 353;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.nameTF_i(),this.rateTF_i(),this.weaponTF_i(),this.rewardTF_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(78,6,474,43);
		t.source = "ruleitembg_png";
		t.visible = false;
		t.width = 568;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "guaiwu_json.gw12_png";
		t.x = 27;
		t.y = 0;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.width = 75;
		t.x = 81;
		t.y = 18;
		return t;
	};
	_proto.rateTF_i = function () {
		var t = new eui.Label();
		this.rateTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 111;
		t.x = 161;
		t.y = 18;
		return t;
	};
	_proto.weaponTF_i = function () {
		var t = new eui.Label();
		this.weaponTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 111;
		t.x = 307;
		t.y = 18;
		return t;
	};
	_proto.rewardTF_i = function () {
		var t = new eui.Label();
		this.rewardTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 111;
		t.x = 437;
		t.y = 18;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 27;
		t.y = 417;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(78,6,474,43);
		t.source = "ruleitembg_png";
		t.visible = false;
		t.width = 568;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "guaiwu_json.gw12_png";
		t.x = 27;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.width = 75;
		t.x = 81;
		t.y = 18;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 111;
		t.x = 161;
		t.y = 18;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 111;
		t.x = 307;
		t.y = 18;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 111;
		t.x = 437;
		t.y = 18;
		return t;
	};
	return GameRuleSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/tl/GuaiWuSkin.exml'] = window.GuaiWuSkin = (function (_super) {
	__extends(GuaiWuSkin, _super);
	function GuaiWuSkin() {
		_super.call(this);
		this.skinParts = ["gw"];
		
		this.height = 160;
		this.width = 160;
		this.elementsContent = [this.gw_i()];
	}
	var _proto = GuaiWuSkin.prototype;

	_proto.gw_i = function () {
		var t = new eui.Image();
		this.gw = t;
		t.horizontalCenter = 0;
		t.source = "gw60_png";
		t.verticalCenter = 0;
		return t;
	};
	return GuaiWuSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/tl/HallGuaiItemSkin.exml'] = window.HallGuaiItemSkin = (function (_super) {
	__extends(HallGuaiItemSkin, _super);
	function HallGuaiItemSkin() {
		_super.call(this);
		this.skinParts = ["taName","gw","timeBg","ltimes","taIdBg","taId"];
		
		this.elementsContent = [this._Image1_i(),this.taName_i(),this._Group1_i(),this.timeBg_i(),this.ltimes_i(),this.taIdBg_i(),this.taId_i()];
	}
	var _proto = HallGuaiItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "aniitembg_png";
		t.visible = true;
		return t;
	};
	_proto.taName_i = function () {
		var t = new eui.Label();
		this.taName = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.textColor = 0xf000ef;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 120;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 72;
		t.width = 116;
		t.x = 6;
		t.y = 40;
		t.elementsContent = [this.gw_i()];
		return t;
	};
	_proto.gw_i = function () {
		var t = new eui.Image();
		this.gw = t;
		t.horizontalCenter = 0;
		t.source = "gw72_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.timeBg_i = function () {
		var t = new eui.Image();
		this.timeBg = t;
		t.source = "rect3bg_png";
		t.visible = true;
		t.x = 30;
		t.y = 148;
		return t;
	};
	_proto.ltimes_i = function () {
		var t = new eui.Label();
		this.ltimes = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0次";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 62;
		t.x = 40;
		t.y = 154;
		return t;
	};
	_proto.taIdBg_i = function () {
		var t = new eui.Image();
		this.taIdBg = t;
		t.source = "num3_png";
		t.x = 52;
		t.y = 4;
		return t;
	};
	_proto.taId_i = function () {
		var t = new eui.Label();
		this.taId = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.size = 20;
		t.text = "3";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 30;
		t.x = 52;
		t.y = 4;
		return t;
	};
	return HallGuaiItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/tl/HallRateItemSkin.exml'] = window.HallRateItemSkin = (function (_super) {
	__extends(HallRateItemSkin, _super);
	function HallRateItemSkin() {
		_super.call(this);
		this.skinParts = ["numBg","taId","gw","lrate","llian"];
		
		this.height = 48;
		this.width = 218;
		this.elementsContent = [this.numBg_i(),this.taId_i(),this._Group1_i(),this.lrate_i(),this.llian_i()];
	}
	var _proto = HallRateItemSkin.prototype;

	_proto.numBg_i = function () {
		var t = new eui.Image();
		this.numBg = t;
		t.height = 24;
		t.source = "num3_png";
		t.width = 24;
		t.x = 18;
		t.y = 8;
		return t;
	};
	_proto.taId_i = function () {
		var t = new eui.Label();
		this.taId = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 34;
		t.x = 14;
		t.y = 12;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 50;
		t.x = 46;
		t.y = -11;
		t.elementsContent = [this.gw_i()];
		return t;
	};
	_proto.gw_i = function () {
		var t = new eui.Image();
		this.gw = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "gw12_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lrate_i = function () {
		var t = new eui.Label();
		this.lrate = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "3.00%";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 78;
		t.x = 78;
		t.y = 12;
		return t;
	};
	_proto.llian_i = function () {
		var t = new eui.Label();
		this.llian = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "0连";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.width = 48;
		t.x = 136;
		t.y = 12;
		return t;
	};
	return HallRateItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/tl/JingongRecordItemSkin.exml'] = window.JingongRecordItemSkin = (function (_super) {
	__extends(JingongRecordItemSkin, _super);
	function JingongRecordItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","shijian","gwName","taName"];
		
		this.elementsContent = [this.bg_i(),this.shijian_i(),this.gwName_i(),this.taName_i()];
	}
	var _proto = JingongRecordItemSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0x062348;
		t.height = 66;
		t.width = 680;
		return t;
	};
	_proto.shijian_i = function () {
		var t = new eui.Label();
		this.shijian = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0000-00-00 00:00";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 18;
		t.y = 22;
		return t;
	};
	_proto.gwName_i = function () {
		var t = new eui.Label();
		this.gwName = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 188;
		t.x = 254;
		t.y = 22;
		return t;
	};
	_proto.taName_i = function () {
		var t = new eui.Label();
		this.taName = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 188;
		t.x = 474;
		t.y = 22;
		return t;
	};
	return JingongRecordItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/tl/JingongRecordSkin.exml'] = window.JingongRecordSkin = (function (_super) {
	__extends(JingongRecordSkin, _super);
	var JingongRecordSkin$Skin69 = 	(function (_super) {
		__extends(JingongRecordSkin$Skin69, _super);
		function JingongRecordSkin$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JingongRecordSkin$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "back_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JingongRecordSkin$Skin69;
	})(eui.Skin);

	function JingongRecordSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","list","scroller"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group3_i()];
	}
	var _proto = JingongRecordSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.elementsContent = [this._Image1_i(),this.closeBtn_i(),this._Image2_i(),this._Rect2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Group1_i(),this.scroller_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "jgjlbg_png";
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 37;
		t.label = "";
		t.x = 67;
		t.y = 52;
		t.skinName = JingongRecordSkin$Skin69;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "jgtitle_png";
		t.x = 228;
		t.y = 28;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x155ab2;
		t.height = 60;
		t.width = 680;
		t.x = 34;
		t.y = 148;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "进攻时间";
		t.x = 78;
		t.y = 162;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "进攻怪物";
		t.x = 312;
		t.y = 162;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "畏惧武器";
		t.x = 546;
		t.y = 162;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 34;
		t.y = 226;
		t.elementsContent = [this._Rect3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x062348;
		t.height = 66;
		t.visible = false;
		t.width = 680;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "0000-00-00 00:00";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 18;
		t.y = 22;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 188;
		t.x = 254;
		t.y = 22;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 188;
		t.x = 474;
		t.y = 22;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1030;
		t.width = 692;
		t.x = 34;
		t.y = 226;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetY = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 16;
		return t;
	};
	return JingongRecordSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/tl/KaiJiangJieGuoSkin.exml'] = window.KaiJiangJieGuoSkin = (function (_super) {
	__extends(KaiJiangJieGuoSkin, _super);
	var KaiJiangJieGuoSkin$Skin70 = 	(function (_super) {
		__extends(KaiJiangJieGuoSkin$Skin70, _super);
		function KaiJiangJieGuoSkin$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = KaiJiangJieGuoSkin$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "closetbtn6_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return KaiJiangJieGuoSkin$Skin70;
	})(eui.Skin);

	function KaiJiangJieGuoSkin() {
		_super.call(this);
		this.skinParts = ["gw","ta","jifen","taTF","gwTF","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Group3_i()];
	}
	var _proto = KaiJiangJieGuoSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp8_jpg";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.8;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 33;
		t.y = 321;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this._Group2_i(),this.jifen_i(),this.taTF_i(),this.gwTF_i(),this._Image3_i(),this._Label1_i(),this.closeBtn_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "resultbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.width = 120;
		t.x = 340;
		t.y = 344;
		t.elementsContent = [this.gw_i()];
		return t;
	};
	_proto.gw_i = function () {
		var t = new eui.Image();
		this.gw = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "gw12_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.width = 120;
		t.x = 186;
		t.y = 352;
		t.elementsContent = [this.ta_i()];
		return t;
	};
	_proto.ta_i = function () {
		var t = new eui.Image();
		this.ta = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "weapon8_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.jifen_i = function () {
		var t = new eui.Label();
		this.jifen = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 26;
		t.text = "+0";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 168;
		t.x = 328;
		t.y = 463;
		return t;
	};
	_proto.taTF_i = function () {
		var t = new eui.Label();
		this.taTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "箭塔";
		t.textAlign = "center";
		t.textColor = 0x503a1d;
		t.verticalAlign = "middle";
		t.width = 132;
		t.x = 47;
		t.y = 401;
		return t;
	};
	_proto.gwTF_i = function () {
		var t = new eui.Label();
		this.gwTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "箭塔";
		t.textAlign = "center";
		t.textColor = 0x503a1d;
		t.verticalAlign = "middle";
		t.width = 132;
		t.x = 473;
		t.y = 401;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "goldicon_png";
		t.x = 217;
		t.y = 551;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "击中";
		t.textColor = 0xffffff;
		t.x = 301;
		t.y = 403;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 34;
		t.anchorOffsetY = 34;
		t.label = "";
		t.x = 635;
		t.y = 83;
		t.skinName = KaiJiangJieGuoSkin$Skin70;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "jifenicon_png";
		t.x = 247;
		t.y = 453;
		return t;
	};
	return KaiJiangJieGuoSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/tl/TestSkin.exml'] = window.TestSkin = (function (_super) {
	__extends(TestSkin, _super);
	function TestSkin() {
		_super.call(this);
		this.skinParts = ["scroller","potView","myGroup"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.scroller_i(),this.myGroup_i()];
	}
	var _proto = TestSkin.prototype;

	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 318;
		t.scrollPolicyH = "off";
		t.width = 720;
		t.x = 26;
		t.y = 690;
		return t;
	};
	_proto.myGroup_i = function () {
		var t = new eui.Group();
		this.myGroup = t;
		t.elementsContent = [this.potView_i()];
		return t;
	};
	_proto.potView_i = function () {
		var t = new TlXiazhuHistoryPotView();
		this.potView = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "HallHistoryPotSkin";
		return t;
	};
	return TestSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/tl/TlIndexSkin.exml'] = window.HallSkin = (function (_super) {
	__extends(HallSkin, _super);
	var HallSkin$Skin71 = 	(function (_super) {
		__extends(HallSkin$Skin71, _super);
		function HallSkin$Skin71() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "czmenu_s_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return HallSkin$Skin71;
	})(eui.Skin);

	var HallSkin$Skin72 = 	(function (_super) {
		__extends(HallSkin$Skin72, _super);
		function HallSkin$Skin72() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "hallbtn2_s_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return HallSkin$Skin72;
	})(eui.Skin);

	var HallSkin$Skin73 = 	(function (_super) {
		__extends(HallSkin$Skin73, _super);
		function HallSkin$Skin73() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "tzmenu_s_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return HallSkin$Skin73;
	})(eui.Skin);

	var HallSkin$Skin74 = 	(function (_super) {
		__extends(HallSkin$Skin74, _super);
		function HallSkin$Skin74() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "kfmenu_s_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return HallSkin$Skin74;
	})(eui.Skin);

	var HallSkin$Skin75 = 	(function (_super) {
		__extends(HallSkin$Skin75, _super);
		function HallSkin$Skin75() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallSkin$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "memenu_s_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 26;
			t.stroke = 2;
			t.y = 125;
			return t;
		};
		return HallSkin$Skin75;
	})(eui.Skin);

	function HallSkin() {
		_super.call(this);
		this.skinParts = ["pagePotGroup","pageBar","aniList","rateList","potView","qibg","qiList","tableGroup","tableScroller","tjnum1","tjnum2","tjnum3","tjnum4","mallBtn","hallBtn","xzBtn","kfBtn","meBtn","titlebar"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.aniList_i(),this.rateList_i(),this.potView_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.titlebar_i()];
	}
	var _proto = HallSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "indexbg_png";
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 12;
		t.y = 544;
		t.elementsContent = [this._Image2_i(),this.pageBar_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(91,35,546,211);
		t.source = "i_rect1_png";
		t.width = 742;
		t.x = -8;
		return t;
	};
	_proto.pageBar_i = function () {
		var t = new eui.Group();
		this.pageBar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 226;
		t.verticalCenter = 0.5;
		t.width = 20;
		t.x = 707;
		t.elementsContent = [this.pagePotGroup_i()];
		return t;
	};
	_proto.pagePotGroup_i = function () {
		var t = new eui.Group();
		this.pagePotGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 4;
		return t;
	};
	_proto.aniList_i = function () {
		var t = new eui.List();
		this.aniList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 466;
		t.itemRendererSkinName = HallGuaiItemSkin;
		t.width = 496;
		t.x = 4;
		t.y = 66;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 3;
		t.requestedColumnCount = 4;
		t.requestedRowCount = 2;
		t.verticalGap = 17;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.rateList_i = function () {
		var t = new eui.List();
		this.rateList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.itemRendererSkinName = HallRateItemSkin;
		t.width = 242;
		t.x = 506;
		t.y = 66;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection2_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 1;
		return t;
	};
	_proto._ArrayCollection2_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.potView_i = function () {
		var t = new TlHistoryPotList();
		this.potView = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 256;
		t.skinName = "HallHistoryPotSkin";
		t.width = 684;
		t.x = 17;
		t.y = 552;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 120;
		t.top = 842;
		t.x = 23;
		t.elementsContent = [this.qibg_i(),this._Image3_i(),this.tableScroller_i()];
		return t;
	};
	_proto.qibg_i = function () {
		var t = new eui.Image();
		this.qibg = t;
		t.bottom = 0;
		t.scale9Grid = new egret.Rectangle(88,49,532,22);
		t.source = "qishukuang_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "qishutitlebg_png";
		t.x = 25;
		t.y = 10;
		return t;
	};
	_proto.tableScroller_i = function () {
		var t = new eui.Scroller();
		this.tableScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 10;
		t.top = 52;
		t.width = 682;
		t.x = 15;
		t.viewport = this.tableGroup_i();
		return t;
	};
	_proto.tableGroup_i = function () {
		var t = new eui.Group();
		this.tableGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.qiList_i()];
		return t;
	};
	_proto.qiList_i = function () {
		var t = new eui.List();
		this.qiList = t;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 506;
		t.y = 468;
		t.elementsContent = [this._Image4_i(),this._Label1_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this.tjnum1_i(),this.tjnum2_i(),this.tjnum3_i(),this.tjnum4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 62;
		t.scale9Grid = new egret.Rectangle(30,15,182,18);
		t.source = "gwcsitembg_png";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "本场推荐";
		t.textColor = 0xffffff;
		t.x = 11;
		t.y = 4;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "num0bg_png";
		t.x = 28;
		t.y = 24;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "num0bg_png";
		t.x = 80;
		t.y = 24;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "num0bg_png";
		t.x = 130;
		t.y = 22;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "num0bg_png";
		t.x = 184;
		t.y = 22;
		return t;
	};
	_proto.tjnum1_i = function () {
		var t = new eui.Label();
		this.tjnum1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 38;
		t.x = 26;
		t.y = 28;
		return t;
	};
	_proto.tjnum2_i = function () {
		var t = new eui.Label();
		this.tjnum2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 38;
		t.x = 78;
		t.y = 28;
		return t;
	};
	_proto.tjnum3_i = function () {
		var t = new eui.Label();
		this.tjnum3 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 38;
		t.x = 126;
		t.y = 28;
		return t;
	};
	_proto.tjnum4_i = function () {
		var t = new eui.Label();
		this.tjnum4 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 38;
		t.x = 182;
		t.y = 28;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.bottom = -4;
		t.height = 115;
		t.width = 750;
		t.x = 0;
		t.elementsContent = [this._Image9_i(),this.mallBtn_i(),this.hallBtn_i(),this.xzBtn_i(),this.kfBtn_i(),this.meBtn_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "bottombar_png";
		return t;
	};
	_proto.mallBtn_i = function () {
		var t = new eui.Button();
		this.mallBtn = t;
		t.anchorOffsetX = 33;
		t.anchorOffsetY = 63;
		t.label = "";
		t.x = 92;
		t.y = 65;
		t.skinName = HallSkin$Skin71;
		return t;
	};
	_proto.hallBtn_i = function () {
		var t = new eui.Button();
		this.hallBtn = t;
		t.anchorOffsetX = 36;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 224;
		t.y = 67;
		t.skinName = HallSkin$Skin72;
		return t;
	};
	_proto.xzBtn_i = function () {
		var t = new eui.Button();
		this.xzBtn = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 378;
		t.y = 49;
		t.skinName = HallSkin$Skin73;
		return t;
	};
	_proto.kfBtn_i = function () {
		var t = new eui.Button();
		this.kfBtn = t;
		t.anchorOffsetX = 34;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 522;
		t.y = 67;
		t.skinName = HallSkin$Skin74;
		return t;
	};
	_proto.meBtn_i = function () {
		var t = new eui.Button();
		this.meBtn = t;
		t.anchorOffsetX = 33;
		t.anchorOffsetY = 63;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 646;
		t.y = 71;
		t.skinName = HallSkin$Skin75;
		return t;
	};
	_proto.titlebar_i = function () {
		var t = new eui.Image();
		this.titlebar = t;
		t.horizontalCenter = 0.5;
		t.source = "blswzname_png";
		t.y = 10;
		return t;
	};
	return HallSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/tl/TlXiazhuHistoryPotSkin.exml'] = window.TlXiazhuHistoryPotSkin = (function (_super) {
	__extends(TlXiazhuHistoryPotSkin, _super);
	function TlXiazhuHistoryPotSkin() {
		_super.call(this);
		this.skinParts = ["potList"];
		
		this.elementsContent = [this.potList_i()];
	}
	var _proto = TlXiazhuHistoryPotSkin.prototype;

	_proto.potList_i = function () {
		var t = new eui.Group();
		this.potList = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return TlXiazhuHistoryPotSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/tl/TlIndexSkin2.exml'] = window.TlIndexSkin2 = (function (_super) {
	__extends(TlIndexSkin2, _super);
	var TlIndexSkin2$Skin76 = 	(function (_super) {
		__extends(TlIndexSkin2$Skin76, _super);
		function TlIndexSkin2$Skin76() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TlIndexSkin2$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "repeatbetbtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TlIndexSkin2$Skin76;
	})(eui.Skin);

	var TlIndexSkin2$Skin77 = 	(function (_super) {
		__extends(TlIndexSkin2$Skin77, _super);
		function TlIndexSkin2$Skin77() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bet_s_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TlIndexSkin2$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bet_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.stroke = 2;
			t.strokeColor = 0x000000;
			t.y = 22;
			return t;
		};
		return TlIndexSkin2$Skin77;
	})(eui.Skin);

	var TlIndexSkin2$Skin78 = 	(function (_super) {
		__extends(TlIndexSkin2$Skin78, _super);
		function TlIndexSkin2$Skin78() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bet_s_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TlIndexSkin2$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bet_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.stroke = 2;
			t.strokeColor = 0x000000;
			t.y = 22;
			return t;
		};
		return TlIndexSkin2$Skin78;
	})(eui.Skin);

	var TlIndexSkin2$Skin79 = 	(function (_super) {
		__extends(TlIndexSkin2$Skin79, _super);
		function TlIndexSkin2$Skin79() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bet_s_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TlIndexSkin2$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bet_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.stroke = 2;
			t.strokeColor = 0x000000;
			t.y = 22;
			return t;
		};
		return TlIndexSkin2$Skin79;
	})(eui.Skin);

	var TlIndexSkin2$Skin80 = 	(function (_super) {
		__extends(TlIndexSkin2$Skin80, _super);
		function TlIndexSkin2$Skin80() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bet_s_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TlIndexSkin2$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bet_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.stroke = 2;
			t.strokeColor = 0x000000;
			t.y = 22;
			return t;
		};
		return TlIndexSkin2$Skin80;
	})(eui.Skin);

	var TlIndexSkin2$Skin81 = 	(function (_super) {
		__extends(TlIndexSkin2$Skin81, _super);
		function TlIndexSkin2$Skin81() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TlIndexSkin2$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "whitebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.textColor = 0x5463f8;
			t.verticalCenter = 0;
			return t;
		};
		return TlIndexSkin2$Skin81;
	})(eui.Skin);

	var TlIndexSkin2$Skin82 = 	(function (_super) {
		__extends(TlIndexSkin2$Skin82, _super);
		function TlIndexSkin2$Skin82() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TlIndexSkin2$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "whitebtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 24;
			t.textColor = 0x5463f8;
			t.verticalCenter = 0;
			return t;
		};
		return TlIndexSkin2$Skin82;
	})(eui.Skin);

	function TlIndexSkin2() {
		_super.call(this);
		this.skinParts = ["qibg","aniList","rateList","tjnum1","tjnum2","tjnum3","tjnum4","qiList","tableGroup","tableScroller","potView2","scroller2","dataGroup","jindutiao","jindutiao2","tiaoGroup","ltips","jinduGroup","gw","exitGuang","exitNormal","feichuanTip","arrow7","weapon7","nameTF7","beiTF7","goldTF7","ta7","arrow3","weapon3","nameTF3","beiTF3","goldTF3","ta3","arrow8","weapon8","nameTF8","beiTF8","goldTF8","ta8","arrow5","weapon5","nameTF5","beiTF5","goldTF5","ta5","arrow2","weapon2","nameTF2","beiTF2","goldTF2","ta2","arrow4","weapon4","nameTF4","beiTF4","goldTF4","ta4","arrow6","weapon6","nameTF6","beiTF6","goldTF6","ta6","arrow1","weapon1","nameTF1","beiTF1","goldTF1","ta1","gwjgGroup","nameTF","idTF","balanceTF","repeatBtn","bet1","bet2","bet3","bet4","potView","scroller","gameNameTF","rechargeBtn","touzhuBtn","xzGroup","tab1","tab2","tabrect1","tabrect2","select1","select2","closerect"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this.dataGroup_i(),this.xzGroup_i(),this.tab1_i(),this.tab2_i(),this.tabrect1_i(),this.tabrect2_i(),this.select1_i(),this.select2_i(),this._Label11_i(),this._Image40_i(),this.closerect_i()];
	}
	var _proto = TlIndexSkin2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "temp1_jpg";
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dataGroup_i = function () {
		var t = new eui.Group();
		this.dataGroup = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image3_i(),this.qibg_i(),this._Image4_i(),this.aniList_i(),this.rateList_i(),this._Rect2_i(),this._Label1_i(),this._Group1_i(),this._Image9_i(),this.tableScroller_i(),this.scroller2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 404;
		t.scale9Grid = new egret.Rectangle(93,79,564,475);
		t.source = "gwsjbg_png";
		t.x = 4;
		t.y = 208;
		return t;
	};
	_proto.qibg_i = function () {
		var t = new eui.Image();
		this.qibg = t;
		t.anchorOffsetY = 0;
		t.height = 313;
		t.scale9Grid = new egret.Rectangle(93,79,564,475);
		t.source = "gwsjbg_png";
		t.x = 0;
		t.y = 1021;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "gwratebg_png";
		t.x = 562;
		t.y = 214;
		return t;
	};
	_proto.aniList_i = function () {
		var t = new eui.List();
		this.aniList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 424;
		t.itemRendererSkinName = HallGuaiItemSkin;
		t.width = 556;
		t.x = 4;
		t.y = 214;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 6;
		t.requestedColumnCount = 4;
		t.requestedRowCount = 2;
		t.verticalGap = 8;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.rateList_i = function () {
		var t = new eui.List();
		this.rateList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.itemRendererSkinName = HallRateItemSkin;
		t.width = 200;
		t.x = 548;
		t.y = 210;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection2_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = -3;
		return t;
	};
	_proto._ArrayCollection2_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9d9d9;
		t.height = 2;
		t.width = 690;
		t.x = 30;
		t.y = 678;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "实时数据";
		t.textColor = 0x000000;
		t.x = 32;
		t.y = 638;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 196;
		t.x = 564;
		t.y = 568;
		t.elementsContent = [this._Label2_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this.tjnum1_i(),this.tjnum2_i(),this.tjnum3_i(),this.tjnum4_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "本场推荐";
		t.textColor = 0x000000;
		t.x = 5;
		t.y = 8;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "num0bg_png";
		t.visible = false;
		t.x = 10;
		t.y = 44;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "num0bg_png";
		t.visible = false;
		t.x = 54;
		t.y = 44;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "num0bg_png";
		t.visible = false;
		t.x = 96;
		t.y = 44;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "num0bg_png";
		t.visible = false;
		t.x = 138;
		t.y = 44;
		return t;
	};
	_proto.tjnum1_i = function () {
		var t = new eui.Label();
		this.tjnum1 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 38;
		t.x = 6;
		t.y = 48;
		return t;
	};
	_proto.tjnum2_i = function () {
		var t = new eui.Label();
		this.tjnum2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 38;
		t.x = 50;
		t.y = 48;
		return t;
	};
	_proto.tjnum3_i = function () {
		var t = new eui.Label();
		this.tjnum3 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 38;
		t.x = 92;
		t.y = 48;
		return t;
	};
	_proto.tjnum4_i = function () {
		var t = new eui.Label();
		this.tjnum4 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 22;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 38;
		t.x = 134;
		t.y = 48;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "qishubar_png";
		t.x = 6;
		t.y = 1024;
		return t;
	};
	_proto.tableScroller_i = function () {
		var t = new eui.Scroller();
		this.tableScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 9;
		t.top = 1084;
		t.width = 724;
		t.x = 14;
		t.viewport = this.tableGroup_i();
		return t;
	};
	_proto.tableGroup_i = function () {
		var t = new eui.Group();
		this.tableGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.qiList_i()];
		return t;
	};
	_proto.qiList_i = function () {
		var t = new eui.List();
		this.qiList = t;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		return t;
	};
	_proto.scroller2_i = function () {
		var t = new eui.Scroller();
		this.scroller2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 318;
		t.scrollPolicyH = "off";
		t.width = 720;
		t.x = 26;
		t.y = 690;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.potView2_i()];
		return t;
	};
	_proto.potView2_i = function () {
		var t = new TlHistoryPotList();
		this.potView2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "TlXiazhuHistoryPotSkin";
		return t;
	};
	_proto.xzGroup_i = function () {
		var t = new eui.Group();
		this.xzGroup = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this._Image10_i(),this._Group5_i(),this.scroller_i(),this._Image39_i(),this.gameNameTF_i(),this.rechargeBtn_i(),this.touzhuBtn_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "num3_png";
		t.visible = false;
		t.x = 30;
		t.y = 320;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.elementsContent = [this._Image11_i(),this.jinduGroup_i(),this.gw_i(),this.exitGuang_i(),this._Group3_i(),this.ta7_i(),this.ta3_i(),this.ta8_i(),this.ta5_i(),this.ta2_i(),this.ta4_i(),this.ta6_i(),this.ta1_i(),this.gwjgGroup_i(),this._Group4_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "map_png";
		t.x = 0;
		t.y = 498;
		return t;
	};
	_proto.jinduGroup_i = function () {
		var t = new eui.Group();
		this.jinduGroup = t;
		t.x = 221;
		t.y = 559;
		t.elementsContent = [this.tiaoGroup_i(),this.ltips_i()];
		return t;
	};
	_proto.tiaoGroup_i = function () {
		var t = new eui.Group();
		this.tiaoGroup = t;
		t.x = 14;
		t.y = -14;
		t.elementsContent = [this._Image12_i(),this.jindutiao_i(),this.jindutiao2_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "m_progress1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jindutiao_i = function () {
		var t = new eui.Image();
		this.jindutiao = t;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.source = "m_progress2_png";
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto.jindutiao2_i = function () {
		var t = new eui.Image();
		this.jindutiao2 = t;
		t.anchorOffsetY = 0;
		t.mask = this.jindutiao;
		t.scaleX = 1;
		t.source = "m_progress2_png";
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto.ltips_i = function () {
		var t = new eui.Label();
		this.ltips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 39;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "怪物进攻倒计时 0s";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 307;
		t.x = -7;
		t.y = -55;
		return t;
	};
	_proto.gw_i = function () {
		var t = new GuaiWuSprite();
		this.gw = t;
		t.height = 100;
		t.skinName = "GuaiWuSkin";
		t.width = 100;
		t.x = 546;
		t.y = 996;
		return t;
	};
	_proto.exitGuang_i = function () {
		var t = new eui.Image();
		this.exitGuang = t;
		t.source = "hx_caveicon2_png";
		t.x = 533;
		t.y = 989;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 544;
		t.y = 966;
		t.elementsContent = [this.exitNormal_i(),this._Image13_i(),this.feichuanTip_i()];
		return t;
	};
	_proto.exitNormal_i = function () {
		var t = new eui.Image();
		this.exitNormal = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 55;
		t.source = "hx_caveicon_png";
		t.x = 55;
		t.y = 77;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 26;
		t.source = "feiji_icon1_png";
		t.visible = false;
		t.x = 117;
		t.y = 21;
		return t;
	};
	_proto.feichuanTip_i = function () {
		var t = new eui.Rect();
		this.feichuanTip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = -11;
		t.y = -2;
		return t;
	};
	_proto.ta7_i = function () {
		var t = new eui.Group();
		this.ta7 = t;
		t.x = 6;
		t.y = 596;
		t.elementsContent = [this.arrow7_i(),this.weapon7_i(),this._Image14_i(),this._Image15_i(),this._Label3_i(),this._Image16_i(),this.nameTF7_i(),this.beiTF7_i(),this.goldTF7_i()];
		return t;
	};
	_proto.arrow7_i = function () {
		var t = new eui.Image();
		this.arrow7 = t;
		t.source = "quanquan_png";
		t.x = 64;
		return t;
	};
	_proto.weapon7_i = function () {
		var t = new eui.Image();
		this.weapon7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon7_png";
		t.x = 58;
		t.y = -36;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 50;
		t.y = 47;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 50;
		t.y = 78;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "7";
		t.textColor = 0xffffff;
		t.x = 62;
		t.y = 53;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 126;
		t.y = -45;
		return t;
	};
	_proto.nameTF7_i = function () {
		var t = new eui.Label();
		this.nameTF7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.stroke = 2;
		t.text = "熔岩";
		t.textAlign = "center";
		t.width = 64;
		t.x = 70;
		t.y = 52;
		return t;
	};
	_proto.beiTF7_i = function () {
		var t = new eui.Label();
		this.beiTF7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 44;
		t.x = 130;
		t.y = -34;
		return t;
	};
	_proto.goldTF7_i = function () {
		var t = new eui.Label();
		this.goldTF7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 74;
		t.x = 61;
		t.y = 84;
		return t;
	};
	_proto.ta3_i = function () {
		var t = new eui.Group();
		this.ta3 = t;
		t.x = 438;
		t.y = 567;
		t.elementsContent = [this.arrow3_i(),this.weapon3_i(),this._Image17_i(),this._Image18_i(),this._Label4_i(),this._Image19_i(),this.nameTF3_i(),this.beiTF3_i(),this.goldTF3_i()];
		return t;
	};
	_proto.arrow3_i = function () {
		var t = new eui.Image();
		this.arrow3 = t;
		t.source = "quanquan_png";
		t.x = 64;
		return t;
	};
	_proto.weapon3_i = function () {
		var t = new eui.Image();
		this.weapon3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon3_png";
		t.x = 59;
		t.y = -29;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 48;
		t.y = 53;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 48;
		t.y = 84;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "3";
		t.textColor = 0xffffff;
		t.x = 58;
		t.y = 59;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 126;
		t.y = -45;
		return t;
	};
	_proto.nameTF3_i = function () {
		var t = new eui.Label();
		this.nameTF3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.stroke = 2;
		t.text = "灭龙果";
		t.textAlign = "center";
		t.width = 66;
		t.x = 68;
		t.y = 60;
		return t;
	};
	_proto.beiTF3_i = function () {
		var t = new eui.Label();
		this.beiTF3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 44;
		t.x = 130;
		t.y = -33;
		return t;
	};
	_proto.goldTF3_i = function () {
		var t = new eui.Label();
		this.goldTF3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 76;
		t.x = 55;
		t.y = 90;
		return t;
	};
	_proto.ta8_i = function () {
		var t = new eui.Group();
		this.ta8 = t;
		t.x = 196;
		t.y = 760;
		t.elementsContent = [this.arrow8_i(),this.weapon8_i(),this._Image20_i(),this._Image21_i(),this._Label5_i(),this._Image22_i(),this.nameTF8_i(),this.beiTF8_i(),this.goldTF8_i()];
		return t;
	};
	_proto.arrow8_i = function () {
		var t = new eui.Image();
		this.arrow8 = t;
		t.source = "quanquan_png";
		t.x = 64;
		return t;
	};
	_proto.weapon8_i = function () {
		var t = new eui.Image();
		this.weapon8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon8_png";
		t.x = 61;
		t.y = -41;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.y = -5;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.y = 26;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "8";
		t.textColor = 0xffffff;
		t.x = 7;
		t.y = 1;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 126;
		t.y = -45;
		return t;
	};
	_proto.nameTF8_i = function () {
		var t = new eui.Label();
		this.nameTF8 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.stroke = 2;
		t.text = "地狱魔瞳";
		t.textAlign = "center";
		t.width = 79;
		t.x = 20;
		t.y = 1;
		return t;
	};
	_proto.beiTF8_i = function () {
		var t = new eui.Label();
		this.beiTF8 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 42;
		t.x = 128;
		t.y = -33;
		return t;
	};
	_proto.goldTF8_i = function () {
		var t = new eui.Label();
		this.goldTF8 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 6;
		t.y = 32;
		return t;
	};
	_proto.ta5_i = function () {
		var t = new eui.Group();
		this.ta5 = t;
		t.x = 332;
		t.y = 752;
		t.elementsContent = [this.arrow5_i(),this.weapon5_i(),this._Image23_i(),this._Image24_i(),this._Label6_i(),this._Image25_i(),this.nameTF5_i(),this.beiTF5_i(),this.goldTF5_i()];
		return t;
	};
	_proto.arrow5_i = function () {
		var t = new eui.Image();
		this.arrow5 = t;
		t.source = "quanquan_png";
		t.x = 74;
		return t;
	};
	_proto.weapon5_i = function () {
		var t = new eui.Image();
		this.weapon5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon5_png";
		t.x = 42;
		t.y = -45;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 48;
		t.y = 39;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 48;
		t.y = 70;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "5";
		t.textColor = 0xffffff;
		t.x = 58;
		t.y = 44;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 126;
		t.y = -45;
		return t;
	};
	_proto.nameTF5_i = function () {
		var t = new eui.Label();
		this.nameTF5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.stroke = 2;
		t.text = "铁象牙";
		t.textAlign = "center";
		t.width = 59;
		t.x = 69;
		t.y = 45;
		return t;
	};
	_proto.beiTF5_i = function () {
		var t = new eui.Label();
		this.beiTF5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 45;
		t.x = 128;
		t.y = -33;
		return t;
	};
	_proto.goldTF5_i = function () {
		var t = new eui.Label();
		this.goldTF5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 76;
		t.x = 54;
		t.y = 75;
		return t;
	};
	_proto.ta2_i = function () {
		var t = new eui.Group();
		this.ta2 = t;
		t.x = 552;
		t.y = 901;
		t.elementsContent = [this.arrow2_i(),this.weapon2_i(),this._Image26_i(),this._Image27_i(),this._Label7_i(),this._Image28_i(),this.nameTF2_i(),this.beiTF2_i(),this.goldTF2_i()];
		return t;
	};
	_proto.arrow2_i = function () {
		var t = new eui.Image();
		this.arrow2 = t;
		t.source = "quanquan_png";
		t.x = 74;
		t.y = -20;
		return t;
	};
	_proto.weapon2_i = function () {
		var t = new eui.Image();
		this.weapon2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon2_png";
		t.x = 71;
		t.y = -55;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 64;
		t.y = 31;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 64;
		t.y = 64;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "2";
		t.textColor = 0xffffff;
		t.x = 72;
		t.y = 37;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 126;
		t.y = -65;
		return t;
	};
	_proto.nameTF2_i = function () {
		var t = new eui.Label();
		this.nameTF2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.stroke = 2;
		t.text = "投石车";
		t.textAlign = "center";
		t.width = 59;
		t.x = 85;
		t.y = 38;
		return t;
	};
	_proto.beiTF2_i = function () {
		var t = new eui.Label();
		this.beiTF2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 44;
		t.x = 128;
		t.y = -53;
		return t;
	};
	_proto.goldTF2_i = function () {
		var t = new eui.Label();
		this.goldTF2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 78;
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.ta4_i = function () {
		var t = new eui.Group();
		this.ta4 = t;
		t.x = 183;
		t.y = 930;
		t.elementsContent = [this.arrow4_i(),this.weapon4_i(),this._Image29_i(),this._Image30_i(),this._Label8_i(),this._Image31_i(),this.nameTF4_i(),this.beiTF4_i(),this.goldTF4_i()];
		return t;
	};
	_proto.arrow4_i = function () {
		var t = new eui.Image();
		this.arrow4 = t;
		t.source = "quanquan_png";
		t.x = 74;
		return t;
	};
	_proto.weapon4_i = function () {
		var t = new eui.Image();
		this.weapon4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon4_png";
		t.x = 58;
		t.y = -33;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 60;
		t.y = 25;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 60;
		t.y = 56;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "4";
		t.textColor = 0xffffff;
		t.x = 70;
		t.y = 31;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 128;
		t.y = -45;
		return t;
	};
	_proto.nameTF4_i = function () {
		var t = new eui.Label();
		this.nameTF4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.stroke = 2;
		t.text = "仙人球";
		t.textAlign = "center";
		t.width = 68;
		t.x = 79;
		t.y = 31;
		return t;
	};
	_proto.beiTF4_i = function () {
		var t = new eui.Label();
		this.beiTF4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 44;
		t.x = 132;
		t.y = -33;
		return t;
	};
	_proto.goldTF4_i = function () {
		var t = new eui.Label();
		this.goldTF4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 78;
		t.x = 67;
		t.y = 63;
		return t;
	};
	_proto.ta6_i = function () {
		var t = new eui.Group();
		this.ta6 = t;
		t.x = 146;
		t.y = 1081;
		t.elementsContent = [this.arrow6_i(),this.weapon6_i(),this._Image32_i(),this._Image33_i(),this._Label9_i(),this._Image34_i(),this.nameTF6_i(),this.beiTF6_i(),this.goldTF6_i()];
		return t;
	};
	_proto.arrow6_i = function () {
		var t = new eui.Image();
		this.arrow6 = t;
		t.source = "quanquan_png";
		t.x = 74;
		return t;
	};
	_proto.weapon6_i = function () {
		var t = new eui.Image();
		this.weapon6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon6_png";
		t.x = 58;
		t.y = -33;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 26;
		t.y = 49;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 26;
		t.y = 80;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "6";
		t.textColor = 0xffffff;
		t.x = 36;
		t.y = 57;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 124;
		t.y = -43;
		return t;
	};
	_proto.nameTF6_i = function () {
		var t = new eui.Label();
		this.nameTF6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.stroke = 2;
		t.text = "食豚花";
		t.textAlign = "center";
		t.width = 70;
		t.x = 45;
		t.y = 56;
		return t;
	};
	_proto.beiTF6_i = function () {
		var t = new eui.Label();
		this.beiTF6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 43;
		t.x = 127;
		t.y = -29;
		return t;
	};
	_proto.goldTF6_i = function () {
		var t = new eui.Label();
		this.goldTF6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 78;
		t.x = 32;
		t.y = 86;
		return t;
	};
	_proto.ta1_i = function () {
		var t = new eui.Group();
		this.ta1 = t;
		t.x = 327;
		t.y = 1078;
		t.elementsContent = [this.arrow1_i(),this.weapon1_i(),this._Image35_i(),this._Image36_i(),this._Label10_i(),this._Image37_i(),this.nameTF1_i(),this.beiTF1_i(),this.goldTF1_i()];
		return t;
	};
	_proto.arrow1_i = function () {
		var t = new eui.Image();
		this.arrow1 = t;
		t.source = "quanquan_png";
		t.x = 85;
		return t;
	};
	_proto.weapon1_i = function () {
		var t = new eui.Image();
		this.weapon1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon1_png";
		t.x = 69;
		t.y = -33;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 68;
		t.y = 43;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 68;
		t.y = 74;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "1";
		t.textColor = 0xffffff;
		t.x = 77;
		t.y = 49;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 136;
		t.y = -51;
		return t;
	};
	_proto.nameTF1_i = function () {
		var t = new eui.Label();
		this.nameTF1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.stroke = 2;
		t.text = "毒蘑菇";
		t.textAlign = "center";
		t.width = 68;
		t.x = 87;
		t.y = 51;
		return t;
	};
	_proto.beiTF1_i = function () {
		var t = new eui.Label();
		this.beiTF1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 40;
		t.x = 142;
		t.y = -39;
		return t;
	};
	_proto.goldTF1_i = function () {
		var t = new eui.Label();
		this.goldTF1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 74;
		t.y = 80;
		return t;
	};
	_proto.gwjgGroup_i = function () {
		var t = new eui.Group();
		this.gwjgGroup = t;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.visible = false;
		t.x = 0;
		t.y = 788;
		t.elementsContent = [this._Image38_i()];
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.source = "m_guaiwujingong_png";
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 1217;
		t.elementsContent = [this._Rect3_i(),this.nameTF_i(),this.idTF_i(),this.balanceTF_i(),this.repeatBtn_i(),this.bet1_i(),this.bet2_i(),this.bet3_i(),this.bet4_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x4d549d;
		t.height = 117;
		t.width = 750;
		t.x = 0;
		return t;
	};
	_proto.nameTF_i = function () {
		var t = new eui.Label();
		this.nameTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "账号：--";
		t.width = 158;
		t.x = 28;
		t.y = 19;
		return t;
	};
	_proto.idTF_i = function () {
		var t = new eui.Label();
		this.idTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "ID：--";
		t.width = 158;
		t.x = 28;
		t.y = 47;
		return t;
	};
	_proto.balanceTF_i = function () {
		var t = new eui.Label();
		this.balanceTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "积分：--";
		t.width = 158;
		t.x = 28;
		t.y = 79;
		return t;
	};
	_proto.repeatBtn_i = function () {
		var t = new eui.Button();
		this.repeatBtn = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 31;
		t.label = "";
		t.x = 642;
		t.y = 59;
		t.skinName = TlIndexSkin2$Skin76;
		return t;
	};
	_proto.bet1_i = function () {
		var t = new eui.RadioButton();
		this.bet1 = t;
		t.label = "1";
		t.x = 190;
		t.y = 17;
		t.skinName = TlIndexSkin2$Skin77;
		return t;
	};
	_proto.bet2_i = function () {
		var t = new eui.RadioButton();
		this.bet2 = t;
		t.label = "10";
		t.value = "10";
		t.x = 278;
		t.y = 17;
		t.skinName = TlIndexSkin2$Skin78;
		return t;
	};
	_proto.bet3_i = function () {
		var t = new eui.RadioButton();
		this.bet3 = t;
		t.label = "100";
		t.value = "100";
		t.x = 370;
		t.y = 17;
		t.skinName = TlIndexSkin2$Skin79;
		return t;
	};
	_proto.bet4_i = function () {
		var t = new eui.RadioButton();
		this.bet4 = t;
		t.label = "500";
		t.value = "500";
		t.x = 458;
		t.y = 17;
		t.skinName = TlIndexSkin2$Skin80;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 844;
		t.scrollPolicyH = "off";
		t.top = 320;
		t.width = 712;
		t.x = 30;
		t.viewport = this._Group6_i();
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.potView_i()];
		return t;
	};
	_proto.potView_i = function () {
		var t = new TlXiazhuHistoryPotView();
		this.potView = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "TlXiazhuHistoryPotSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bluerect2_png";
		t.x = 8;
		t.y = 206;
		return t;
	};
	_proto.gameNameTF_i = function () {
		var t = new eui.Label();
		this.gameNameTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "部落守卫战";
		t.x = 32;
		t.y = 240;
		return t;
	};
	_proto.rechargeBtn_i = function () {
		var t = new eui.Button();
		this.rechargeBtn = t;
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 21;
		t.label = "充值";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 471;
		t.y = 253;
		t.skinName = TlIndexSkin2$Skin81;
		return t;
	};
	_proto.touzhuBtn_i = function () {
		var t = new eui.Button();
		this.touzhuBtn = t;
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 21;
		t.label = "投注记录";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 627;
		t.y = 253;
		t.skinName = TlIndexSkin2$Skin82;
		return t;
	};
	_proto.tab1_i = function () {
		var t = new eui.Label();
		this.tab1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "立即投注";
		t.textColor = 0x438cff;
		t.x = 144;
		t.y = 148;
		return t;
	};
	_proto.tab2_i = function () {
		var t = new eui.Label();
		this.tab2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "基础数据";
		t.textColor = 0xbcbcbc;
		t.x = 512;
		t.y = 148;
		return t;
	};
	_proto.tabrect1_i = function () {
		var t = new eui.Rect();
		this.tabrect1 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.width = 188;
		t.x = 104;
		t.y = 132;
		return t;
	};
	_proto.tabrect2_i = function () {
		var t = new eui.Rect();
		this.tabrect2 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.width = 188;
		t.x = 468;
		t.y = 132;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.source = "bluebtn3_png";
		t.x = 176;
		t.y = 186;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.source = "bluebtn3_png";
		t.x = 554;
		t.y = 186;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.text = "繁星酷狗官网实时数据";
		t.textColor = 0xffffff;
		t.x = 228;
		t.y = 66;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto.closerect_i = function () {
		var t = new eui.Rect();
		this.closerect = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	return TlIndexSkin2;
})(eui.Skin);generateEUI.paths['resource/app_skins/tl/TouZhuJiLuItemSkin.exml'] = window.TouZhuJiLuItemSkin = (function (_super) {
	__extends(TouZhuJiLuItemSkin, _super);
	function TouZhuJiLuItemSkin() {
		_super.call(this);
		this.skinParts = ["qishu","timeTF","gw","numTF","tz","winTF","select1","select2","select3","select4","select5","select6","select7","select8","gw1","countTF1","countTF2","countTF3","countTF4","countTF5","countTF6","countTF7","countTF8","gw2","gw3","gw4","gw5","gw6","gw7","gw8","winresult","failresult"];
		
		this.elementsContent = [this._Rect1_i(),this.qishu_i(),this.timeTF_i(),this._Image1_i(),this._Label1_i(),this._Group1_i(),this.numTF_i(),this._Label2_i(),this.tz_i(),this._Label3_i(),this.winTF_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.select4_i(),this.select5_i(),this.select6_i(),this.select7_i(),this.select8_i(),this.gw1_i(),this._Label4_i(),this.countTF1_i(),this.countTF2_i(),this.countTF3_i(),this.countTF4_i(),this.countTF5_i(),this.countTF6_i(),this.countTF7_i(),this.countTF8_i(),this.gw2_i(),this._Label5_i(),this.gw3_i(),this._Label6_i(),this.gw4_i(),this._Label7_i(),this.gw5_i(),this._Label8_i(),this.gw6_i(),this._Label9_i(),this.gw7_i(),this._Label10_i(),this.gw8_i(),this._Label11_i(),this._Label12_i(),this.winresult_i(),this.failresult_i()];
	}
	var _proto = TouZhuJiLuItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x438cff;
		t.height = 60;
		t.width = 750;
		return t;
	};
	_proto.qishu_i = function () {
		var t = new eui.Label();
		this.qishu = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 27;
		t.text = "部落守卫战 --期";
		t.textColor = 0xfffcff;
		t.width = 350;
		t.x = 34;
		t.y = 14;
		return t;
	};
	_proto.timeTF_i = function () {
		var t = new eui.Label();
		this.timeTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 27;
		t.text = "0000-00-00 00:00:00";
		t.textAlign = "right";
		t.textColor = 0xfffcff;
		t.verticalAlign = "middle";
		t.width = 350;
		t.x = 368;
		t.y = 12;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 323;
		t.scale9Grid = new egret.Rectangle(87,52,527,106);
		t.source = "grayrect_png";
		t.width = 715;
		t.x = 20;
		t.y = 156;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x438cff;
		t.text = "本期开奖：";
		t.textColor = 0xffffff;
		t.x = 22;
		t.y = 112;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 100;
		t.width = 100;
		t.x = 129;
		t.y = 64;
		t.elementsContent = [this.gw_i()];
		return t;
	};
	_proto.gw_i = function () {
		var t = new eui.Image();
		this.gw = t;
		t.horizontalCenter = 0;
		t.source = "gw42_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.numTF_i = function () {
		var t = new eui.Label();
		this.numTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.stroke = 2;
		t.text = "（4号）";
		t.textColor = 0x000000;
		t.x = 216;
		t.y = 112;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.strokeColor = 0xffffff;
		t.text = "总投注：";
		t.textColor = 0xff0000;
		t.x = 54;
		t.y = 170;
		return t;
	};
	_proto.tz_i = function () {
		var t = new eui.Label();
		this.tz = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0.00";
		t.textColor = 0xff0000;
		t.width = 200;
		t.x = 134;
		t.y = 170;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "总盈亏：";
		t.textColor = 0xff0000;
		t.x = 538;
		t.y = 170;
		return t;
	};
	_proto.winTF_i = function () {
		var t = new eui.Label();
		this.winTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0.00";
		t.textColor = 0xff0000;
		t.width = 85;
		t.x = 622;
		t.y = 172;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.source = "tzjlitem_s_png";
		t.x = 50;
		t.y = 206;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.source = "tzjlitem_s_png";
		t.x = 222;
		t.y = 204;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.source = "tzjlitem_s_png";
		t.x = 394;
		t.y = 204;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.source = "tzjlitem_s_png";
		t.x = 566;
		t.y = 202;
		return t;
	};
	_proto.select5_i = function () {
		var t = new eui.Image();
		this.select5 = t;
		t.source = "tzjlitem_s_png";
		t.x = 50;
		t.y = 330;
		return t;
	};
	_proto.select6_i = function () {
		var t = new eui.Image();
		this.select6 = t;
		t.source = "tzjlitem_s_png";
		t.x = 222;
		t.y = 330;
		return t;
	};
	_proto.select7_i = function () {
		var t = new eui.Image();
		this.select7 = t;
		t.source = "tzjlitem_s_png";
		t.x = 394;
		t.y = 330;
		return t;
	};
	_proto.select8_i = function () {
		var t = new eui.Image();
		this.select8 = t;
		t.source = "tzjlitem_s_png";
		t.x = 566;
		t.y = 330;
		return t;
	};
	_proto.gw1_i = function () {
		var t = new eui.Image();
		this.gw1 = t;
		t.source = "gw12_png";
		t.touchEnabled = false;
		t.x = 62;
		t.y = 192;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "（1号）";
		t.textColor = 0xffffff;
		t.x = 134;
		t.y = 228;
		return t;
	};
	_proto.countTF1_i = function () {
		var t = new eui.Label();
		this.countTF1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0/1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 140;
		t.x = 58;
		t.y = 276;
		return t;
	};
	_proto.countTF2_i = function () {
		var t = new eui.Label();
		this.countTF2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0/1";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 140;
		t.x = 238;
		t.y = 274;
		return t;
	};
	_proto.countTF3_i = function () {
		var t = new eui.Label();
		this.countTF3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0/1";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 140;
		t.x = 402;
		t.y = 274;
		return t;
	};
	_proto.countTF4_i = function () {
		var t = new eui.Label();
		this.countTF4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0/1";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 140;
		t.x = 574;
		t.y = 270;
		return t;
	};
	_proto.countTF5_i = function () {
		var t = new eui.Label();
		this.countTF5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0/1";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 140;
		t.x = 60;
		t.y = 400;
		return t;
	};
	_proto.countTF6_i = function () {
		var t = new eui.Label();
		this.countTF6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0/1";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 140;
		t.x = 230;
		t.y = 400;
		return t;
	};
	_proto.countTF7_i = function () {
		var t = new eui.Label();
		this.countTF7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0/1";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 140;
		t.x = 404;
		t.y = 400;
		return t;
	};
	_proto.countTF8_i = function () {
		var t = new eui.Label();
		this.countTF8 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "0/1";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 140;
		t.x = 574;
		t.y = 398;
		return t;
	};
	_proto.gw2_i = function () {
		var t = new eui.Image();
		this.gw2 = t;
		t.source = "gw22_png";
		t.touchEnabled = false;
		t.x = 231;
		t.y = 194;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "（2号）";
		t.textColor = 0xffffff;
		t.x = 298;
		t.y = 224;
		return t;
	};
	_proto.gw3_i = function () {
		var t = new eui.Image();
		this.gw3 = t;
		t.source = "gw32_png";
		t.touchEnabled = false;
		t.x = 399;
		t.y = 192;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "（3号）";
		t.textColor = 0xffffff;
		t.x = 476;
		t.y = 226;
		return t;
	};
	_proto.gw4_i = function () {
		var t = new eui.Image();
		this.gw4 = t;
		t.source = "gw42_png";
		t.touchEnabled = false;
		t.x = 572;
		t.y = 189;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "（4号）";
		t.textColor = 0xffffff;
		t.x = 640;
		t.y = 224;
		return t;
	};
	_proto.gw5_i = function () {
		var t = new eui.Image();
		this.gw5 = t;
		t.source = "gw52_png";
		t.touchEnabled = false;
		t.x = 55;
		t.y = 321;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "（5号）";
		t.textColor = 0xffffff;
		t.x = 124;
		t.y = 348;
		return t;
	};
	_proto.gw6_i = function () {
		var t = new eui.Image();
		this.gw6 = t;
		t.source = "gw62_png";
		t.touchEnabled = false;
		t.x = 229;
		t.y = 312;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "（6号）";
		t.textColor = 0xffffff;
		t.x = 290;
		t.y = 348;
		return t;
	};
	_proto.gw7_i = function () {
		var t = new eui.Image();
		this.gw7 = t;
		t.source = "gw72_png";
		t.touchEnabled = false;
		t.x = 389;
		t.y = 309;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "（7号）";
		t.textColor = 0xffffff;
		t.x = 470;
		t.y = 344;
		return t;
	};
	_proto.gw8_i = function () {
		var t = new eui.Image();
		this.gw8 = t;
		t.source = "gw82_png";
		t.touchEnabled = false;
		t.x = 570;
		t.y = 312;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "（8号）";
		t.textColor = 0xffffff;
		t.x = 636;
		t.y = 352;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "说明：中奖金额/投注金额";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.width = 284;
		t.x = 424;
		t.y = 450;
		return t;
	};
	_proto.winresult_i = function () {
		var t = new eui.Image();
		this.winresult = t;
		t.source = "m_ying_png";
		t.x = 616;
		t.y = 102;
		return t;
	};
	_proto.failresult_i = function () {
		var t = new eui.Image();
		this.failresult = t;
		t.source = "m_kui_png";
		t.visible = false;
		t.x = 594;
		t.y = 102;
		return t;
	};
	return TouZhuJiLuItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/tl/TouZhuJiLuSkin.exml'] = window.TouZhuJiLuSkin = (function (_super) {
	__extends(TouZhuJiLuSkin, _super);
	function TouZhuJiLuSkin() {
		_super.call(this);
		this.skinParts = ["list","scroller","closeBtn","prevBtn","nextBtn","pageTF"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.scroller_i(),this._Image2_i(),this._Label1_i(),this.closeBtn_i(),this._Group2_i()];
	}
	var _proto = TouZhuJiLuSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "topbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 146;
		t.width = 750;
		t.x = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = TouZhuJiLuItemSkin;
		t.left = 0;
		t.right = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 26;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "closebtn1_png";
		t.x = 28;
		t.y = 68;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "投注记录";
		t.textColor = 0xffffff;
		t.y = 66;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Rect();
		this.closeBtn = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.width = 112;
		t.x = 6;
		t.y = 10;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 17;
		t.horizontalCenter = 0;
		t.elementsContent = [this.prevBtn_i(),this.nextBtn_i(),this.pageTF_i()];
		return t;
	};
	_proto.prevBtn_i = function () {
		var t = new eui.Image();
		this.prevBtn = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 26;
		t.source = "prevbtn_png";
		t.x = 25;
		t.y = 26;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Image();
		this.nextBtn = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 26;
		t.source = "nextbtn_png";
		t.x = 158;
		t.y = 26;
		return t;
	};
	_proto.pageTF_i = function () {
		var t = new eui.Label();
		this.pageTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "1/1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 70;
		t.x = 60;
		t.y = 10;
		return t;
	};
	return TouZhuJiLuSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/tl/XiaZhuSkin.exml'] = window.XiaZhuSkin = (function (_super) {
	__extends(XiaZhuSkin, _super);
	function XiaZhuSkin() {
		_super.call(this);
		this.skinParts = ["jindutiao","jindutiao2","tiaoGroup","ltips","jinduGroup","gw","exitGuang","exitNormal","feichuanTip","arrow7","weapon7","nameTF7","beiTF7","goldTF7","ta7","arrow3","weapon3","nameTF3","beiTF3","goldTF3","ta3","arrow8","weapon8","nameTF8","beiTF8","goldTF8","ta8","arrow5","weapon5","nameTF5","beiTF5","goldTF5","ta5","arrow2","weapon2","nameTF2","beiTF2","goldTF2","ta2","arrow4","weapon4","nameTF4","beiTF4","goldTF4","ta4","arrow6","weapon6","nameTF6","beiTF6","goldTF6","ta6","arrow1","weapon1","nameTF1","beiTF1","goldTF1","ta1","gwjgGroup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = XiaZhuSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 1334;
		t.width = 750;
		t.elementsContent = [this.jinduGroup_i(),this.gw_i(),this.exitGuang_i(),this._Group1_i(),this.ta7_i(),this.ta3_i(),this.ta8_i(),this.ta5_i(),this.ta2_i(),this.ta4_i(),this.ta6_i(),this.ta1_i(),this.gwjgGroup_i()];
		return t;
	};
	_proto.jinduGroup_i = function () {
		var t = new eui.Group();
		this.jinduGroup = t;
		t.x = 221;
		t.y = 539;
		t.elementsContent = [this.tiaoGroup_i(),this.ltips_i()];
		return t;
	};
	_proto.tiaoGroup_i = function () {
		var t = new eui.Group();
		this.tiaoGroup = t;
		t.x = 14;
		t.y = -14;
		t.elementsContent = [this._Image1_i(),this.jindutiao_i(),this.jindutiao2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "m_progress1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jindutiao_i = function () {
		var t = new eui.Image();
		this.jindutiao = t;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.source = "m_progress2_png";
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto.jindutiao2_i = function () {
		var t = new eui.Image();
		this.jindutiao2 = t;
		t.anchorOffsetY = 0;
		t.mask = this.jindutiao;
		t.scaleX = 1;
		t.source = "m_progress2_png";
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto.ltips_i = function () {
		var t = new eui.Label();
		this.ltips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 39;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "怪物进攻倒计时 0s";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 307;
		t.x = -7;
		t.y = -55;
		return t;
	};
	_proto.gw_i = function () {
		var t = new GuaiWuSprite();
		this.gw = t;
		t.height = 100;
		t.skinName = "GuaiWuSkin";
		t.width = 100;
		t.x = 546;
		t.y = 996;
		return t;
	};
	_proto.exitGuang_i = function () {
		var t = new eui.Image();
		this.exitGuang = t;
		t.source = "hx_caveicon2_png";
		t.x = 533;
		t.y = 989;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 544;
		t.y = 966;
		t.elementsContent = [this.exitNormal_i(),this._Image2_i(),this.feichuanTip_i()];
		return t;
	};
	_proto.exitNormal_i = function () {
		var t = new eui.Image();
		this.exitNormal = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 55;
		t.source = "hx_caveicon_png";
		t.x = 55;
		t.y = 77;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 26;
		t.source = "feiji_icon1_png";
		t.visible = false;
		t.x = 117;
		t.y = 21;
		return t;
	};
	_proto.feichuanTip_i = function () {
		var t = new eui.Rect();
		this.feichuanTip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = -11;
		t.y = -2;
		return t;
	};
	_proto.ta7_i = function () {
		var t = new eui.Group();
		this.ta7 = t;
		t.x = 28;
		t.y = 574;
		t.elementsContent = [this.arrow7_i(),this.weapon7_i(),this._Image3_i(),this._Image4_i(),this._Label1_i(),this._Image5_i(),this.nameTF7_i(),this.beiTF7_i(),this.goldTF7_i()];
		return t;
	};
	_proto.arrow7_i = function () {
		var t = new eui.Image();
		this.arrow7 = t;
		t.source = "quanquan_png";
		t.x = 64;
		return t;
	};
	_proto.weapon7_i = function () {
		var t = new eui.Image();
		this.weapon7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon7_png";
		t.x = 58;
		t.y = -36;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 50;
		t.y = 47;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 50;
		t.y = 78;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.stroke = 2;
		t.text = "7";
		t.textColor = 0xffffff;
		t.x = 48;
		t.y = 43;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 126;
		t.y = -45;
		return t;
	};
	_proto.nameTF7_i = function () {
		var t = new eui.Label();
		this.nameTF7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.stroke = 2;
		t.text = "熔岩";
		t.textAlign = "center";
		t.width = 64;
		t.x = 70;
		t.y = 52;
		return t;
	};
	_proto.beiTF7_i = function () {
		var t = new eui.Label();
		this.beiTF7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 44;
		t.x = 130;
		t.y = -34;
		return t;
	};
	_proto.goldTF7_i = function () {
		var t = new eui.Label();
		this.goldTF7 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 74;
		t.x = 61;
		t.y = 84;
		return t;
	};
	_proto.ta3_i = function () {
		var t = new eui.Group();
		this.ta3 = t;
		t.x = 496;
		t.y = 555;
		t.elementsContent = [this.arrow3_i(),this.weapon3_i(),this._Image6_i(),this._Image7_i(),this._Label2_i(),this._Image8_i(),this.nameTF3_i(),this.beiTF3_i(),this.goldTF3_i()];
		return t;
	};
	_proto.arrow3_i = function () {
		var t = new eui.Image();
		this.arrow3 = t;
		t.source = "quanquan_png";
		t.x = 64;
		return t;
	};
	_proto.weapon3_i = function () {
		var t = new eui.Image();
		this.weapon3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon3_png";
		t.x = 59;
		t.y = -29;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 48;
		t.y = 53;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 48;
		t.y = 84;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.stroke = 2;
		t.text = "3";
		t.textColor = 0xf000ef;
		t.x = 46;
		t.y = 51;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 126;
		t.y = -45;
		return t;
	};
	_proto.nameTF3_i = function () {
		var t = new eui.Label();
		this.nameTF3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.stroke = 2;
		t.text = "灭龙果";
		t.textAlign = "center";
		t.width = 66;
		t.x = 68;
		t.y = 60;
		return t;
	};
	_proto.beiTF3_i = function () {
		var t = new eui.Label();
		this.beiTF3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 44;
		t.x = 130;
		t.y = -33;
		return t;
	};
	_proto.goldTF3_i = function () {
		var t = new eui.Label();
		this.goldTF3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 76;
		t.x = 55;
		t.y = 90;
		return t;
	};
	_proto.ta8_i = function () {
		var t = new eui.Group();
		this.ta8 = t;
		t.x = 204;
		t.y = 758;
		t.elementsContent = [this.arrow8_i(),this.weapon8_i(),this._Image9_i(),this._Image10_i(),this._Label3_i(),this._Image11_i(),this.nameTF8_i(),this.beiTF8_i(),this.goldTF8_i()];
		return t;
	};
	_proto.arrow8_i = function () {
		var t = new eui.Image();
		this.arrow8 = t;
		t.source = "quanquan_png";
		t.x = 64;
		return t;
	};
	_proto.weapon8_i = function () {
		var t = new eui.Image();
		this.weapon8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon8_png";
		t.x = 61;
		t.y = -41;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.y = -5;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.y = 26;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.stroke = 2;
		t.text = "8";
		t.textColor = 0xffffff;
		t.x = -1;
		t.y = -9;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 126;
		t.y = -45;
		return t;
	};
	_proto.nameTF8_i = function () {
		var t = new eui.Label();
		this.nameTF8 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.stroke = 2;
		t.text = "地狱魔瞳";
		t.textAlign = "center";
		t.width = 79;
		t.x = 20;
		t.y = 1;
		return t;
	};
	_proto.beiTF8_i = function () {
		var t = new eui.Label();
		this.beiTF8 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 42;
		t.x = 128;
		t.y = -33;
		return t;
	};
	_proto.goldTF8_i = function () {
		var t = new eui.Label();
		this.goldTF8 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 6;
		t.y = 32;
		return t;
	};
	_proto.ta5_i = function () {
		var t = new eui.Group();
		this.ta5 = t;
		t.x = 336;
		t.y = 726;
		t.elementsContent = [this.arrow5_i(),this.weapon5_i(),this._Image12_i(),this._Image13_i(),this._Label4_i(),this._Image14_i(),this.nameTF5_i(),this.beiTF5_i(),this.goldTF5_i()];
		return t;
	};
	_proto.arrow5_i = function () {
		var t = new eui.Image();
		this.arrow5 = t;
		t.source = "quanquan_png";
		t.x = 74;
		return t;
	};
	_proto.weapon5_i = function () {
		var t = new eui.Image();
		this.weapon5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon5_png";
		t.x = 42;
		t.y = -45;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 48;
		t.y = 39;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 48;
		t.y = 70;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.stroke = 2;
		t.text = "5";
		t.textColor = 0x0862cc;
		t.x = 50;
		t.y = 36;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 126;
		t.y = -45;
		return t;
	};
	_proto.nameTF5_i = function () {
		var t = new eui.Label();
		this.nameTF5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.stroke = 2;
		t.text = "铁象牙";
		t.textAlign = "center";
		t.width = 59;
		t.x = 69;
		t.y = 45;
		return t;
	};
	_proto.beiTF5_i = function () {
		var t = new eui.Label();
		this.beiTF5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 45;
		t.x = 128;
		t.y = -33;
		return t;
	};
	_proto.goldTF5_i = function () {
		var t = new eui.Label();
		this.goldTF5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 76;
		t.x = 54;
		t.y = 75;
		return t;
	};
	_proto.ta2_i = function () {
		var t = new eui.Group();
		this.ta2 = t;
		t.x = 506;
		t.y = 871;
		t.elementsContent = [this.arrow2_i(),this.weapon2_i(),this._Image15_i(),this._Image16_i(),this._Label5_i(),this._Image17_i(),this.nameTF2_i(),this.beiTF2_i(),this.goldTF2_i()];
		return t;
	};
	_proto.arrow2_i = function () {
		var t = new eui.Image();
		this.arrow2 = t;
		t.source = "quanquan_png";
		t.x = 74;
		t.y = -20;
		return t;
	};
	_proto.weapon2_i = function () {
		var t = new eui.Image();
		this.weapon2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon2_png";
		t.x = 71;
		t.y = -55;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 64;
		t.y = 31;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 64;
		t.y = 64;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.stroke = 2;
		t.text = "2";
		t.textColor = 0xffffff;
		t.x = 62;
		t.y = 27;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 126;
		t.y = -65;
		return t;
	};
	_proto.nameTF2_i = function () {
		var t = new eui.Label();
		this.nameTF2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.stroke = 2;
		t.text = "投石车";
		t.textAlign = "center";
		t.width = 59;
		t.x = 85;
		t.y = 38;
		return t;
	};
	_proto.beiTF2_i = function () {
		var t = new eui.Label();
		this.beiTF2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 44;
		t.x = 128;
		t.y = -53;
		return t;
	};
	_proto.goldTF2_i = function () {
		var t = new eui.Label();
		this.goldTF2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 78;
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.ta4_i = function () {
		var t = new eui.Group();
		this.ta4 = t;
		t.x = 183;
		t.y = 890;
		t.elementsContent = [this.arrow4_i(),this.weapon4_i(),this._Image18_i(),this._Image19_i(),this._Label6_i(),this._Image20_i(),this.nameTF4_i(),this.beiTF4_i(),this.goldTF4_i()];
		return t;
	};
	_proto.arrow4_i = function () {
		var t = new eui.Image();
		this.arrow4 = t;
		t.source = "quanquan_png";
		t.x = 74;
		return t;
	};
	_proto.weapon4_i = function () {
		var t = new eui.Image();
		this.weapon4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon4_png";
		t.x = 58;
		t.y = -33;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 60;
		t.y = 25;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 60;
		t.y = 56;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.stroke = 2;
		t.text = "4";
		t.textColor = 0xfa0002;
		t.x = 56;
		t.y = 21;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 128;
		t.y = -45;
		return t;
	};
	_proto.nameTF4_i = function () {
		var t = new eui.Label();
		this.nameTF4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.stroke = 2;
		t.text = "仙人球";
		t.textAlign = "center";
		t.width = 68;
		t.x = 79;
		t.y = 31;
		return t;
	};
	_proto.beiTF4_i = function () {
		var t = new eui.Label();
		this.beiTF4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 44;
		t.x = 132;
		t.y = -33;
		return t;
	};
	_proto.goldTF4_i = function () {
		var t = new eui.Label();
		this.goldTF4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 78;
		t.x = 67;
		t.y = 63;
		return t;
	};
	_proto.ta6_i = function () {
		var t = new eui.Group();
		this.ta6 = t;
		t.x = 172;
		t.y = 1049;
		t.elementsContent = [this.arrow6_i(),this.weapon6_i(),this._Image21_i(),this._Image22_i(),this._Label7_i(),this._Image23_i(),this.nameTF6_i(),this.beiTF6_i(),this.goldTF6_i()];
		return t;
	};
	_proto.arrow6_i = function () {
		var t = new eui.Image();
		this.arrow6 = t;
		t.source = "quanquan_png";
		t.x = 74;
		return t;
	};
	_proto.weapon6_i = function () {
		var t = new eui.Image();
		this.weapon6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon6_png";
		t.x = 58;
		t.y = -33;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 26;
		t.y = 49;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 26;
		t.y = 80;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.stroke = 2;
		t.text = "6";
		t.textColor = 0xf9601f;
		t.x = 26;
		t.y = 45;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 124;
		t.y = -43;
		return t;
	};
	_proto.nameTF6_i = function () {
		var t = new eui.Label();
		this.nameTF6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.stroke = 2;
		t.text = "食豚花";
		t.textAlign = "center";
		t.width = 70;
		t.x = 45;
		t.y = 56;
		return t;
	};
	_proto.beiTF6_i = function () {
		var t = new eui.Label();
		this.beiTF6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 43;
		t.x = 127;
		t.y = -29;
		return t;
	};
	_proto.goldTF6_i = function () {
		var t = new eui.Label();
		this.goldTF6 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 78;
		t.x = 32;
		t.y = 86;
		return t;
	};
	_proto.ta1_i = function () {
		var t = new eui.Group();
		this.ta1 = t;
		t.x = 299;
		t.y = 1032;
		t.elementsContent = [this.arrow1_i(),this.weapon1_i(),this._Image24_i(),this._Image25_i(),this._Label8_i(),this._Image26_i(),this.nameTF1_i(),this.beiTF1_i(),this.goldTF1_i()];
		return t;
	};
	_proto.arrow1_i = function () {
		var t = new eui.Image();
		this.arrow1 = t;
		t.source = "quanquan_png";
		t.x = 85;
		return t;
	};
	_proto.weapon1_i = function () {
		var t = new eui.Image();
		this.weapon1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weapon1_png";
		t.x = 69;
		t.y = -33;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 68;
		t.y = 43;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "xzgoldbg_png";
		t.x = 68;
		t.y = 74;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.stroke = 2;
		t.text = "1";
		t.textColor = 0xffffff;
		t.x = 67;
		t.y = 41;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "xz_yuan2_png";
		t.x = 136;
		t.y = -51;
		return t;
	};
	_proto.nameTF1_i = function () {
		var t = new eui.Label();
		this.nameTF1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.stroke = 2;
		t.text = "毒蘑菇";
		t.textAlign = "center";
		t.width = 68;
		t.x = 87;
		t.y = 51;
		return t;
	};
	_proto.beiTF1_i = function () {
		var t = new eui.Label();
		this.beiTF1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "X10";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 40;
		t.x = 142;
		t.y = -39;
		return t;
	};
	_proto.goldTF1_i = function () {
		var t = new eui.Label();
		this.goldTF1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 74;
		t.y = 80;
		return t;
	};
	_proto.gwjgGroup_i = function () {
		var t = new eui.Group();
		this.gwjgGroup = t;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.x = 0;
		t.y = 588;
		t.elementsContent = [this._Image27_i()];
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "m_guaiwujingong_png";
		return t;
	};
	return XiaZhuSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(81,2,490,15);
		t.source = "l_progress1_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(81,2,490,15);
		t.source = "l_progress2_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 14;
		t.text = "0%";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);