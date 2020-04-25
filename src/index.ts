console.log('site-box')

const getCurrentTabURL = (): string | void => {
  // eslint-disable-next-line no-undef
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const url = tabs[0].url
    return url
  })
}

getCurrentTabURL()
