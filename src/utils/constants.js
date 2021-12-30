export const pageurl = {
  HOMEPAGE: '/',
  SIGNUP: '/signup',
  CATEGORY: '/category',
  CONTACTUS: '/contact',
  ABOUT: '/about',
  SPORT: '/sport',
  NEWSFEEDS: '/allnews',
  SIGNIN: '/login',
  PRIVACYPOLICY: '/privacy-policy',
  GOVERNANCE: '/governance',
  BUSINESS: '/business',
  COOKIEPOLICY: '/cookie-policy',
  ENTERTAINMENT: '/entertainment',
  SUBSCRIBE: '/subscribe',
  SIGNUPSUCCESSFUL: '/success',
  LIFESTYLE: '/lifestyles',
  FAQ: '/faq',
  DISCOVERAFRICA: '/africa',
  ERROR404: '/error404',
  PODCAST: '/podcast',
  ADVERTISING: '/advertising',
  CODEOFETHICS: '/code-of-ethics',
  WRITEFORUS: '/write-for-us',
}

const REVERSEPROXY_URL = 'https://stormy-citadel-49738.herokuapp.com/' // Custom reverse proxy
const APPLE_PODCAST_URL = 'https://itunes.apple.com/'

export const BASE_URL = String(REVERSEPROXY_URL + APPLE_PODCAST_URL)

const HOME_SCREEN_PODCAST_COLLECTION_IDS =
  '278981407,863897795,1191775648,582272991,1200361736,1322200189,1379959217,998568017,1081244497,1062418176,1334878780,316045799,480486345,265307784,643055307,1057255460,1077418457,268213039,1258635512,169078375'

export const HOMESCREEN_API_URL = String(
  `${BASE_URL}lookup?id=${HOME_SCREEN_PODCAST_COLLECTION_IDS}`,
)
