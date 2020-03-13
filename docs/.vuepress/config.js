module.exports = {
  title: '飞跃高山',
  description:'飞跃高山',
  locales: {
      '/': {
        lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      }
    },
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
  themeConfig: {
	lastUpdated: '上次更新',
	repo: 'JJJuverson/documents',
	editLinks: true,
	editLinkText: '编辑文档',
	docsDir: 'docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
	  {
	          text: 'Languages',
	          ariaLabel: 'Language Menu',
	          items: [
	            { text: 'Chinese', link: '/language/chinese/' },
	            { text: 'Japanese', link: '/language/japanese/' }
	        ]
	    }
    ],
	sidebar: {
	      '/css/': [
	        '',     /* /foo/ */
	        'css1',  /* /foo/one.html */
	        'css2'   /* /foo/two.html */
	      ],
	
	      '/javascript/': [
	        '',      /* /bar/ */
	        'javascript1', /* /bar/three.html */
	        'javascript2'   /* /bar/four.html */
	      ],
	      // fallback
	      '/': [
	        '',        /* / */
	        '/about/',    /* /about.html */
			'/about/test'
	      ]
	    }
  }
}