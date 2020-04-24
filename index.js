console.log('site-box')

const currentTabURL = () => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
    const url = tabs[0].url
    return url
  })
}
