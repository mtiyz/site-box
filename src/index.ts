// settings
const loopMinute = 5

const getCurrentTabURL = (): string | void => {
  // eslint-disable-next-line no-undef
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const url = tabs[0].url
    return url
  })
}

const toDomain = (url: string): string | void => {
  return url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)?.[1]
}

const initDomain = (): string | void => {
  const url = getCurrentTabURL()
  if (url) {
    return toDomain(url)
  }
}

let currentTabDomain = initDomain()

setInterval(() => {
  const url = getCurrentTabURL()
  if (typeof url === 'string') {
    const domain = toDomain(url)
    if (domain === currentTabDomain) {
      // TODO: 時間を増やす
    } else {
      currentTabDomain = domain
      // TODO: 時間を増やす
    }
  }
}, loopMinute * 60000)
