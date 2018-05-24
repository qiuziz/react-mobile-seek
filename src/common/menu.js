export const financial = [
	{
		title: '2017X+Y预测分析模板',
		key: '1',
		children: [
			{
				title: '利润表',
				key: '11',
				route: '/profits'
			},
			{
				title: '利润表(单车)',
				key: '12',
				route: '/profits-one'
			},
			{
				title: '现金流量表',
				key: '13',
				route: '/cash-traffic'
			},
			{
				title: '单车边际贡献表(手工)',
				key: '14',
				route: '/contribution-margin'
			},
			{
				title: '2017年X月累计 单车边际贡献明细',
				key: '15',
				route: '/contribution-margin-detail'
			},
			{
				title: '月度间偏差分析表',
				key: '16',
				route: '/monthly-deviation'
			},
			{
				title: '年度间偏差分析表',
				key: '17',
				route: '/annual-deviation'
			},
			{
				title: '预测与签约指标偏差分析表',
				key: '18',
				route: '/prediction-budget-deviation'
			},
			{
				title: '预测与去年实际偏差分析表',
				key: '19',
				route: '/prediction-actual-deviation'
			},
		]
	},
	{
		title: '2017经营月报',
		key: '2',
		children: [
			{
				title: '关键指标',
				key: '2_1',
				route: '/kpi'
			}, {
				title: '利润表',
				key: '2_2',
				route: '/profits-monthly'
			}, {
				title: '资产负债表',
				key: '2_3',
				route: '/balance-sheet'
			}, {
				title: '现金流量表',
				key: '2_4',
				route: '/cash-flow'
			}, {
				title: '结构成本',
				key: '2_5',
				route: '/cost-structure'
			}, 
			// {
			// 	title: '分平台产品盈利分析表',
			// 	key: '2_6',
			// 	route: '/platform-product-profitability'
			// }, {
			// 	title: '投资控制',
			// 	key: '2_7',
			// 	route: '/investment-control'
			// }, {
			// 	title: '资产减值',
			// 	key: '2_8',
			// 	route: '/asset-impairment'
			// }, {
			// 	title: '预提费用',
			// 	key: '2_9',
			// 	route: '/accrued-expenses'
			// }, {
			// 	title: '贷款情况',
			// 	key: '2_10',
			// 	route: '/loans'
			// }, {
			// 	title: '应收帐款',
			// 	key: '2_11',
			// 	route: '/receivable'
			// }, {
			// 	title: '结构成本定义',
			// 	key: '2_12',
			// 	route: '/cost-structure-define'
			// },
		]
	},
	{
		title: '2017经营快报',
		key: '3',
		children: [
			{
				title: '合并',
				key: '3_1',
				route: '/merge'
			}, {
				title: '利润同比下降原因分析',
				key: '3_2',
				route: '/drop-analysis'
			}
		]
	},
];

export const sales = [
	{
		title: '日报',
		key: '1',
		route: '/daily',
		children: [
			{
				title: '生产',
				key: '11',
				route: '/purchase'
			},
			{
				title: '批发',
				key: '12',
				route: '/wholesale'
			},
			{
				title: '零售',
				key: '11',
				route: '/retail'
			},
			{
				title: '库存',
				key: '11',
				route: '/inventory'
			},
			{
				title: '库存总量',
				key: '11',
				route: '/inventory-total'
			},
		]
	},

	{
		title: '周报',
		key: '2',
		route: '/weekly',
		children: [
			{
				title: '上汽商用车主要产品零售周报',
				key: '21',
				route: '/retail-weekly'
			},
			{
				title: '上汽商用车销售周报',
				key: '22',
				route: '/sales-weekly'
			},
			{
				title: '上汽商用车整车销售快报',
				key: '23',
				route: '/sales-newsflash'
			},
		]
	},

	{
		title: '月报',
		key: '3',
		route: '/monthly',
		children: [
			{
				title: '商用车销售目标销售情况',
				key: '31',
				route: '/target-completeness'
			},
			{
				title: '上汽商用车销售月报',
				key: '32',
				route: '/sales-monthly'
			},
			{
				title: '上汽商用车整车产品X+Y销售及库存滚动计划',
				key: '33',
				route: '/sales-rolling'
			},
		]
	}
];