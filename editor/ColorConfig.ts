// Copyright (c) John Nesky and contributing authors, distributed under the MIT license, see accompanying the LICENSE.md file.

import {BeepBoxOption, DictionaryArray, toNameMap} from "../synth/SynthConfig.js";
import {Song} from "../synth/synth.js";
import {HTML} from "imperative-html/dist/esm/elements-strict.js";

export interface ChannelColors extends BeepBoxOption {
	readonly secondaryChannel: string;
	readonly primaryChannel:   string;
	readonly secondaryNote: string;
	readonly primaryNote: string;
}

export class ColorConfig {
	public static readonly themes: {[name: string]: string} = {
		"dark classic": `
			:root {
				--page-margin: black;
				--editor-background: black;
				--hover-preview: white;
				--playhead: white;
				--primary-text: white;
				--secondary-text: #000000;
				--inverted-text: black;
				--text-selection: rgba(119,68,255,0.99);
				--box-selection-fill: rgba(255,255,255,0.2);
				--loop-accent: #000000;
				--link-accent: #000000;
				--ui-widget-background: #000000;
				--ui-widget-focus: #000000;
				--pitch-background: #000000;
				--tonic: #FFFF00;
				--fifth-note: #7F8000;
				--white-piano-key: #FFFFFF
				--black-piano-key: #000000;
				--pitch1-secondary-channel: #FFFF00;
				--pitch1-primary-channel:   #FFFF00;
				--pitch1-secondary-note:    #FFFF00;
				--pitch1-primary-note:      #FFFF00;
				--pitch2-secondary-channel: #FFFF00;
				--pitch2-primary-channel:   #FFFF00;
				--pitch2-secondary-note:    #FFFF00;
				--pitch2-primary-note:      #FFFF00;
				--pitch3-secondary-channel: #FFFF00;
				--pitch3-primary-channel:   #FFFF00;
				--pitch3-secondary-note:    #FFFF00;
				--pitch3-primary-note:      #FFFF00;
				--pitch4-secondary-channel: #FFFF00;
				--pitch4-primary-channel:   #FFFF00;
				--pitch4-secondary-note:    #FFFF00;
				--pitch4-primary-note:      #FFFF00;
				--pitch5-secondary-channel: #FFFF00;
				--pitch5-primary-channel:   #FFFF00;
				--pitch5-secondary-note:    #FFFF00;
				--pitch5-primary-note:      #FFFF00;
				--pitch6-secondary-channel: #FFFF00;
				--pitch6-primary-channel:   #FFFF00;
				--pitch6-secondary-note:    #FFFF00;
				--pitch6-primary-note:      #FFFF00;
				--pitch7-secondary-channel: #FFFF00;
				--pitch7-primary-channel:   #FFFF00;
				--pitch7-secondary-note:    #FFFF00;
				--pitch7-primary-note:      #FFFF00;
				--pitch8-secondary-channel: #FFFF00;
				--pitch8-primary-channel:   #FFFF00;
				--pitch8-secondary-note:    #FFFF00;
				--pitch8-primary-note:      #FFFF00;
				--pitch9-secondary-channel: #FFFF00;
				--pitch9-primary-channel:   #FFFF00;
				--pitch9-secondary-note:    #FFFF00;
				--pitch9-primary-note:      #FFFF00;
				--pitch10-secondary-channel:#FFFF00;
				--pitch10-primary-channel:  #FFFF00;
				--pitch10-secondary-note:   #FFFF00;
				--pitch10-primary-note:     #FFFF00;
				--noise1-secondary-channel: #FFFF00;
				--noise1-primary-channel:   #FFFF00;
				--noise1-secondary-note:    #FFFF00;
				--noise1-primary-note:      #FFFF00;
				--noise2-secondary-channel: #FFFF00;
				--noise2-primary-channel:   #FFFF00;
				--noise2-secondary-note:    #FFFF00;
				--noise2-primary-note:      #FFFF00;
				--noise3-secondary-channel: #FFFF00;
				--noise3-primary-channel:   #FFFF00;
				--noise3-secondary-note:    #FFFF00;
				--noise3-primary-note:      #FFFF00;
				--noise4-secondary-channel: #FFFF00;
				--noise4-primary-channel:   #FFFF00;
				--noise4-secondary-note:    #FFFF00;
				--noise4-primary-note:      #FFFF00;
				--noise5-secondary-channel: #FFFF00;
				--noise5-primary-channel:   #FFFF00;
				--noise5-secondary-note:    #FFFF00;
				--noise5-primary-note:      #FFFF00;
			}
		`,
		"light classic": `
			:root {
				-webkit-text-stroke-width: 0.5px;
				--page-margin: #685d88;
				--editor-background: white;
				--hover-preview: black;
				--playhead: rgba(0,0,0,0.5);
				--primary-text: black;
				--secondary-text: #777;
				--inverted-text: white;
				--text-selection: rgba(200,170,255,0.99);
				--box-selection-fill: rgba(0,0,0,0.1);
				--loop-accent: #98f;
				--link-accent: #74f;
				--ui-widget-background: #ececec;
				--ui-widget-focus: #eee;
				--pitch-background: #ececec;
				--tonic: #f0d6b6;
				--fifth-note: #bbddf0;
				--white-piano-key: #eee;
				--black-piano-key: #666;
				--pitch1-secondary-channel: #6CD9ED;
				--pitch1-primary-channel:   #00A0BD;
				--pitch1-secondary-note:    #34C2DC;
				--pitch1-primary-note:      #00758A;
				--pitch2-secondary-channel: #E3C941;
				--pitch2-primary-channel:   #B49700;
				--pitch2-secondary-note:    #D1B628;
				--pitch2-primary-note:      #836E00;
				--pitch3-secondary-channel: #FF9D61;
				--pitch3-primary-channel:   #E14E00;
				--pitch3-secondary-note:    #F67D3C;
				--pitch3-primary-note:      #B64000;
				--pitch4-secondary-channel: #4BE24B;
				--pitch4-primary-channel:   #00A800;
				--pitch4-secondary-note:    #2DC82D;
				--pitch4-primary-note:      #008000;
				--pitch5-secondary-channel: #FF90FF;
				--pitch5-primary-channel:   #E12EDF;
				--pitch5-secondary-note:    #EC6EEC;
				--pitch5-primary-note:      #A600A5;
				--pitch6-secondary-channel: #B5B5FE;
				--pitch6-primary-channel:   #6969FD;
				--pitch6-secondary-note:    #9393FE;
				--pitch6-primary-note:      #4A4AD7;
				--pitch7-secondary-channel: #C2D848;
				--pitch7-primary-channel:   #8EA800;
				--pitch7-secondary-note:    #B0C82D;
				--pitch7-primary-note:      #6C8000;
				--pitch8-secondary-channel: #FF90A4;
				--pitch8-primary-channel:   #E12E4D;
				--pitch8-secondary-note:    #EC6E85;
				--pitch8-primary-note:      #A6001D;
				--pitch9-secondary-channel: #41E3B5;
				--pitch9-primary-channel:   #00B481;
				--pitch9-secondary-note:    #28D1A1;
				--pitch9-primary-note:      #00835E;
				--pitch10-secondary-channel:#CA77FF;
				--pitch10-primary-channel:  #9609FF;
				--pitch10-secondary-note:   #B54FFF;
				--pitch10-primary-note:     #8400E3;
				--noise1-secondary-channel: #C1C1C1;
				--noise1-primary-channel:   #898989;
				--noise1-secondary-note:    #ADADAD;
				--noise1-primary-note:      #6C6C6C;
				--noise2-secondary-channel: #E8BB8C;
				--noise2-primary-channel:   #BD7D3A;
				--noise2-secondary-note:    #D1A374;
				--noise2-primary-note:      #836342;
				--noise3-secondary-channel: #9BC4EB;
				--noise3-primary-channel:   #4481BE;
				--noise3-secondary-note:    #7CA7D3;
				--noise3-primary-note:      #476685;
				--noise4-secondary-channel: #C5A5E0;
				--noise4-primary-channel:   #8553AE;
				--noise4-secondary-note:    #B290CC;
				--noise4-primary-note:      #684F7D;
				--noise5-secondary-channel: #B8CE93;
				--noise5-primary-channel:   #87A74F;
				--noise5-secondary-note:    #ABC183;
				--noise5-primary-note:      #68784C;
			}
			
			.beepboxEditor button, .beepboxEditor select {
				box-shadow: inset 0 0 0 1px var(--secondary-text);
			}
		`,
	};
	
	public static readonly pageMargin: string = "var(--page-margin)";
	public static readonly editorBackground: string = "var(--editor-background)";
	public static readonly hoverPreview: string = "var(--hover-preview)";
	public static readonly playhead: string = "var(--playhead)";
	public static readonly primaryText: string = "var(--primary-text)";
	public static readonly secondaryText: string = "var(--secondary-text)";
	public static readonly invertedText: string = "var(--inverted-text)";
	public static readonly textSelection: string = "var(--text-selection)";
	public static readonly boxSelectionFill: string = "var(--box-selection-fill)";
	public static readonly loopAccent: string = "var(--loop-accent)";
	public static readonly linkAccent: string = "var(--link-accent)";
	public static readonly uiWidgetBackground: string = "var(--ui-widget-background)";
	public static readonly uiWidgetFocus: string = "var(--ui-widget-focus)";
	public static readonly pitchBackground: string = "var(--pitch-background)";
	public static readonly tonic: string = "var(--tonic)";
	public static readonly fifthNote: string = "var(--fifth-note)";
	public static readonly whitePianoKey: string = "var(--white-piano-key)";
	public static readonly blackPianoKey: string = "var(--black-piano-key)";
	
	public static readonly pitchChannels: DictionaryArray<ChannelColors> = toNameMap([
		{
			name: "pitch1", // cyan
			secondaryChannel: "var(--pitch1-secondary-channel)",
			primaryChannel:   "var(--pitch1-primary-channel)",
			secondaryNote:    "var(--pitch1-secondary-note)",
			primaryNote:      "var(--pitch1-primary-note)",
		}, {
			name: "pitch2", // yellow
			secondaryChannel: "var(--pitch2-secondary-channel)",
			primaryChannel:   "var(--pitch2-primary-channel)",
			secondaryNote:    "var(--pitch2-secondary-note)",
			primaryNote:      "var(--pitch2-primary-note)",
		}, {
			name: "pitch3", // orange
			secondaryChannel: "var(--pitch3-secondary-channel)",
			primaryChannel:   "var(--pitch3-primary-channel)",
			secondaryNote:    "var(--pitch3-secondary-note)",
			primaryNote:      "var(--pitch3-primary-note)",
		}, {
			name: "pitch4", // green
			secondaryChannel: "var(--pitch4-secondary-channel)",
			primaryChannel:   "var(--pitch4-primary-channel)",
			secondaryNote:    "var(--pitch4-secondary-note)",
			primaryNote:      "var(--pitch4-primary-note)",
		}, {
			name: "pitch5", // magenta
			secondaryChannel: "var(--pitch5-secondary-channel)",
			primaryChannel:   "var(--pitch5-primary-channel)",
			secondaryNote:    "var(--pitch5-secondary-note)",
			primaryNote:      "var(--pitch5-primary-note)",
		}, {
			name: "pitch6", // blue
			secondaryChannel: "var(--pitch6-secondary-channel)",
			primaryChannel:   "var(--pitch6-primary-channel)",
			secondaryNote:    "var(--pitch6-secondary-note)",
			primaryNote:      "var(--pitch6-primary-note)",
		}, {
			name: "pitch7", // olive
			secondaryChannel: "var(--pitch7-secondary-channel)",
			primaryChannel:   "var(--pitch7-primary-channel)",
			secondaryNote:    "var(--pitch7-secondary-note)",
			primaryNote:      "var(--pitch7-primary-note)",
		}, {
			name: "pitch8", // red
			secondaryChannel: "var(--pitch8-secondary-channel)",
			primaryChannel:   "var(--pitch8-primary-channel)",
			secondaryNote:    "var(--pitch8-secondary-note)",
			primaryNote:      "var(--pitch8-primary-note)",
		}, {
			name: "pitch9", // teal
			secondaryChannel: "var(--pitch9-secondary-channel)",
			primaryChannel:   "var(--pitch9-primary-channel)",
			secondaryNote:    "var(--pitch9-secondary-note)",
			primaryNote:      "var(--pitch9-primary-note)",
		}, {
			name: "pitch10", // purple
			secondaryChannel: "var(--pitch10-secondary-channel)",
			primaryChannel:   "var(--pitch10-primary-channel)",
			secondaryNote:    "var(--pitch10-secondary-note)",
			primaryNote:      "var(--pitch10-primary-note)",
		},
	]);
	public static readonly noiseChannels: DictionaryArray<ChannelColors> = toNameMap([
		{
			name: "noise1", // gray
			secondaryChannel: "var(--noise1-secondary-channel)",
			primaryChannel:   "var(--noise1-primary-channel)",
			secondaryNote:    "var(--noise1-secondary-note)",
			primaryNote:      "var(--noise1-primary-note)",
		}, {
			name: "noise2", // brown
			secondaryChannel: "var(--noise2-secondary-channel)",
			primaryChannel:   "var(--noise2-primary-channel)",
			secondaryNote:    "var(--noise2-secondary-note)",
			primaryNote:      "var(--noise2-primary-note)",
		}, {
			name: "noise3", // azure
			secondaryChannel: "var(--noise3-secondary-channel)",
			primaryChannel:   "var(--noise3-primary-channel)",
			secondaryNote:    "var(--noise3-secondary-note)",
			primaryNote:      "var(--noise3-primary-note)",
		}, {
			name: "noise4", // purple
			secondaryChannel: "var(--noise4-secondary-channel)",
			primaryChannel:   "var(--noise4-primary-channel)",
			secondaryNote:    "var(--noise4-secondary-note)",
			primaryNote:      "var(--noise4-primary-note)",
		}, {
			name: "noise5", // sage
			secondaryChannel: "var(--noise5-secondary-channel)",
			primaryChannel:   "var(--noise5-primary-channel)",
			secondaryNote:    "var(--noise5-secondary-note)",
			primaryNote:      "var(--noise5-primary-note)",
		},
	]);
	
	public static getChannelColor(song: Song, channel: number): ChannelColors {
		return channel < song.pitchChannelCount
			? ColorConfig.pitchChannels[channel % ColorConfig.pitchChannels.length]
			: ColorConfig.noiseChannels[(channel - song.pitchChannelCount) % ColorConfig.noiseChannels.length];
	}
	
	private static readonly _styleElement: HTMLStyleElement = document.head.appendChild(HTML.style({type: "text/css"}));
	
	public static setTheme(name: string): void {
		let theme: string = this.themes[name];
		if (theme == undefined) theme = this.themes["dark classic"];
		this._styleElement.textContent = theme;
		
		const themeColor = <HTMLMetaElement> document.querySelector("meta[name='theme-color']");
		if (themeColor != null) {
			themeColor.setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue('--ui-widget-background'));
		}
	}
}
