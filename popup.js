document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  // 自动聚焦并选中输入框
  searchInput.focus();
  searchInput.select();

  // 回车触发搜索
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  // 点击按钮触发搜索
  searchButton.addEventListener('click', performSearch);

  function performSearch() {
    const keyword = searchInput.value.trim();
    if (!keyword) return;

    // 获取当前标签页URL
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const currentTab = tabs[0];
      const url = new URL(currentTab.url);
      
      // 提取一级域名
      const hostParts = url.hostname.split('.');
      const domain = hostParts.length >= 2 
        ? hostParts.slice(-2).join('.') 
        : url.hostname;
      
      // 构建Bing搜索URL
      const searchUrl = new URL('https://www.bing.com/search');
      searchUrl.searchParams.append('q', `site:${domain} ${keyword}`);

      // 在新标签页中打开搜索结果
      chrome.tabs.create({url: searchUrl.toString()});
    });
  }
});