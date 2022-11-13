export default {
	markdown: {
		theme: {
			light: "github-dark",
			dark: "github-dark",
		},
	},
	appearance: true,
	title: "Trigger.js",
	themeConfig: {
		logo: "https://avatars.githubusercontent.com/u/92779165?s=200&v=4",
		socialLinks: [
			{ icon: "github", link: "https://github.com/triggerjs/trigger" },
			{
				icon: {
					svg: `
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
						>
							<defs>
								<rect id="path_0" x="0" y="0" width="16" height="16" />
							</defs>
							<g opacity="1" transform="translate(0 0)  rotate(0 8 8)">
								<mask id="bg-mask-0" fill="white">
									<use xlink:href="#path_0"></use>
								</mask>
								<g mask="url(#bg-mask-0)">
									<path
										transform="translate(3.405636254173606 2.011421875)  rotate(0 4.5315107638289165 3.6051583494068833)"
										opacity="1"
										d="M3.40094 1.48C3.42094 1.49 3.69094 1.7 3.99094 1.94L4.53094 2.38L4.61094 2.32C4.66094 2.28 4.98094 2.03 5.32094 1.75C5.67094 1.48 5.97094 1.24 5.99094 1.23C6.02094 1.21 6.03094 1.19 6.03094 1.18C6.03094 1.18 5.88094 1.05 5.70094 0.91C5.51094 0.76 5.34094 0.63 5.32094 0.61C5.08094 0.41 4.55094 0 4.53094 0C4.52094 0 4.22094 0.23 3.86094 0.52C3.50094 0.8 3.17094 1.07 3.12094 1.11L3.03094 1.18L3.20094 1.31C3.30094 1.39 3.39094 1.46 3.40094 1.48Z M0.59 4.11755C0.74 4.23755 0.95 4.39755 1.06 4.48755C1.36 4.72755 1.56 4.88755 3.06 6.06755C3.81 6.65755 4.45 7.15755 4.48 7.17755C4.54 7.21755 4.54 7.21755 4.6 7.17755C4.68 7.10755 4.76 7.04755 4.85 6.97755C4.96 6.89755 5.08 6.79755 5.12 6.75755C5.59 6.38755 6.37 5.77755 6.4 5.75755C6.42 5.73755 6.59 5.59755 6.79 5.44755C6.98 5.29755 7.38 4.98755 7.67 4.75755C7.96 4.52755 8.39 4.18755 8.63 3.99755C8.88 3.80755 9.07 3.64755 9.06 3.62755C9.05 3.61755 8.16 2.89755 8.13 2.87755C8.11 2.86755 7.84 3.07755 7.51 3.33755C4.52 5.69755 4.55 5.67755 4.49 5.64755C4.44 5.61755 4.31 5.50755 3.49 4.85755C3.35 4.74755 3.2 4.62755 3.16 4.59755C3.11 4.56755 3.02 4.48755 2.95 4.43755C2.88 4.37755 2.78 4.30755 2.74 4.26755C2.53 4.10755 1.63 3.39755 1.15 3.01755C1.05 2.93755 0.97 2.87755 0.96 2.87755C0.94 2.87755 0.78 2.99755 0.6 3.14755C0.42 3.29755 0.25 3.43755 0.22 3.44755C0.19 3.46755 0.14 3.51755 0.11 3.54755C0.07 3.58755 0.03 3.60755 0.02 3.60755C-0.03 3.60755 0.01 3.65755 0.12 3.74755C0.19 3.79755 0.26 3.85755 0.28 3.87755C0.3 3.88755 0.44 3.99755 0.59 4.11755Z "
									/>
									<path

										transform="translate(0.42835214113940534 7.293661384133669)  rotate(0 7.5241129919302985 3.3452711600436964)"
										opacity="1"
										d="M14.57,1.14C14.57,1.13 14.66,1.07 14.76,0.99C14.86,0.91 14.97,0.83 15,0.8L15.05,0.76L14.89,0.64C14.81,0.57 14.73,0.51 14.73,0.5C14.71,0.48 14.38,0.21 14.26,0.12C14.19,0.07 14.14,0.03 14.14,0.02C14.12,-0.03 14.03,0.02 13.68,0.3C13.47,0.46 13.28,0.61 13.25,0.63C13.23,0.66 13.09,0.76 12.94,0.88C12.8,0.99 12.68,1.09 12.67,1.09C12.66,1.1 12.57,1.18 12.45,1.27C12.34,1.35 12.21,1.45 12.18,1.48C12.1,1.55 12.09,1.55 11.86,1.73C11.77,1.8 11.68,1.87 11.66,1.89C11.64,1.9 11.35,2.14 11,2.41C10.66,2.68 10.35,2.92 10.33,2.94C10.3,2.96 10.1,3.12 9.88,3.29C9.66,3.47 9.24,3.79 8.95,4.03C8.66,4.26 8.29,4.55 8.13,4.67C7.97,4.8 7.77,4.96 7.68,5.03L7.51,5.16L7.45,5.11C7.41,5.08 7.37,5.06 7.37,5.05C7.36,5.04 7.29,4.99 7.21,4.92C7.02,4.78 6.98,4.75 6.95,4.72C6.93,4.7 6.88,4.66 6.83,4.63C6.78,4.59 6.73,4.55 6.73,4.55C6.72,4.54 6.62,4.46 6.5,4.36C6.38,4.27 6.27,4.18 6.25,4.17C6.23,4.15 5.98,3.95 5.7,3.73C5.42,3.51 5.15,3.3 5.1,3.27C5.01,3.19 4.58,2.85 3.15,1.72C2.61,1.3 2.01,0.83 1.82,0.68C1.05,0.06 0.96,0 0.93,0C0.92,0 0.71,0.16 0.48,0.35C0.24,0.54 0.03,0.72 0.01,0.74C-0.02,0.77 -0.07,0.73 1.26,1.78C1.78,2.19 1.77,2.18 2.16,2.49C2.33,2.62 2.73,2.94 3.07,3.2C3.66,3.67 3.77,3.76 3.89,3.85C3.92,3.88 4.25,4.13 4.61,4.42C4.98,4.71 5.77,5.34 6.38,5.81C6.99,6.29 7.49,6.69 7.5,6.69C7.51,6.69 7.62,6.62 7.73,6.53C8.07,6.26 9.14,5.42 9.32,5.28C9.41,5.21 9.52,5.12 9.57,5.08C9.62,5.04 9.67,5 9.68,4.99C9.7,4.98 9.87,4.84 10.06,4.69C10.39,4.44 10.99,3.97 11.07,3.9C11.09,3.88 11.15,3.84 11.21,3.79C11.26,3.75 11.33,3.69 11.35,3.67C11.38,3.65 11.59,3.49 11.81,3.31C12.27,2.96 12.47,2.79 13.19,2.22C13.46,2.01 13.7,1.83 13.72,1.81C13.76,1.78 14.21,1.42 14.42,1.26C14.49,1.2 14.56,1.15 14.57,1.14Z "
									/>
								</g>
							</g>
						</svg>`,
				},
				link: "https://juejin.cn/post/7023662755668295711",
			},
			{
				icon: {
					svg: `
					<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<g>
						<path fill="none" d="M0 0h24v24H0z"/>
						<path d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 1 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0zm.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.199 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25z"/>
					</g>
				</svg>				
				`,
				},
				link: "https://www.bilibili.com/video/BV1xU4y1c7uq/?spm_id_from=333.999.0.0",
			},
		],
		sidebar: {
			"/guide/": [
				{
					text: "Introduce",
					items: [
						{ text: "Introduce", link: "/guide/introduce" },
						{ text: "Getting Started", link: "/guide/getting-started" },
					],
				},
				{
					text: "Guide",
					items: [
						{ text: "The tg- Attributes", link: "/guide/the-tg-attr" },
						{ text: "Value Mapping", link: "/guide/value-mapping" },
						{ text: "Steps & Step", link: "/guide/steps&step" },
						{ text: "The mode of tg-filter", link: "/guide/mode-tg-fillter" },
						{ text: "tg-edge Explaination", link: "/guide/tg-edge-expl" },
						{ text: "Javascript Event", link: "/guide/js-event" },
						{ text: "Customising the Prefix", link: "/guide/custom-prefix" },
					],
				},
				{
					text: "Last",
					items: [
						{ text: "Contribute", link: "/guide/contribute" },
						{ text: "License", link: "/guide/license" },
					],
				},
			],
			"/zh-hans/guide/": [
				{
					text: "介绍",
					items: [
						{ text: "简介", link: "/zh-hans/guide/introduce" },
						{ text: "快速开始", link: "/zh-hans/guide/getting-started" },
					],
				},
				{
					text: "Guide",
					items: [
						{ text: "tg- 属性列表", link: "/zh-hans/guide/the-tg-attr" },
						{ text: "映射 (Value Mapping)", link: "/zh-hans/guide/value-mapping" },
						{ text: "Steps & Step", link: "/zh-hans/guide/steps&step" },
						{ text: "tg-filter 的模式", link: "/zh-hans/guide/mode-tg-fillter" },
						{ text: "tg-edge 图解", link: "/zh-hans/guide/tg-edge-expl" },
						{ text: "JavaScript 事件", link: "/zh-hans/guide/js-event" },
						{ text: "自定义前缀", link: "/zh-hans/guide/custom-prefix" },
					],
				},
				{
					text: "Last",
					items: [
						{ text: "参与开发", link: "/zh-hans/guide/contribute" },
						{ text: "授权协议", link: "/zh-hans/guide/license" },
					],
				},
			],
		},
		nav: [
			{ text: "Guide", link: "/guide/getting-started" },
			{
				text: "Languages",
				items: [
					{ text: "English", link: "/" },
					{ text: "简体中文", link: "/zh-hans/" },
				],
			},
			{
				text: "v1.0.8",
				items: [
					{ text: "release", link: "https://github.com/triggerjs/trigger/releases/" },
					{ text: "issues", link: "https://github.com/triggerjs/trigger/issues" },
				],
			},
		],
		footer: {
			message: "Released under the MIT License.",
			copyright: `Copyright © ${new Date().getFullYear()} Masye`,
		},
	},
};
