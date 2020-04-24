console.log('site-box')

const currentTabURL = (): string | void => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
    const url = tabs[0].url
    return url
  })
}
