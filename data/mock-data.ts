import type { BettingSite } from "../types"

const defaultTerms = "18+ | New customers only | Min deposit & wagering requirements apply | T&Cs apply | BeGambleAware.org"

const rawSites: Omit<BettingSite, "score">[] = [
  {
    id: "betfred",
    name: "Betfred",
    logo: "/betfred.webp",
    bonus: "Get £50 Free Bets",
    welcomeOffer: "£50 Free Bets",
    terms: "18+ | New customers | Deposit & bet £10 on Sports to get £50 in Free Bets | Free Bets valid 7 days | T&Cs apply | BeGambleAware.org",
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.betfred.com/",
    reviews: 3648,
  },
  {
    id: "betvictor",
    name: "BetVictor",
    logo: "/betvictor.webp",
    bonus: "Get £30 Free Bets",
    welcomeOffer: "£30 Free Bets",
    terms: "18+ | New customers | Bet £5 to get £30 in Free Bets | Valid 7 days | T&Cs apply | BeGambleAware.org",
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betvictor.com/",
    reviews: 4081,
  },

  {
    id: "ladbrokes",
    name: "Ladbrokes",
    logo: "/ladbrokes.webp",
    bonus: "Only £5 to Claim £30 Welcome Bonus",
    welcomeOffer: "£30 Welcome Bonus",
    terms: "18+ | New customers | Deposit £5, bet £5 to receive £30 Free Bets | Valid 7 days | T&Cs apply | BeGambleAware.org",
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.ladbrokes.com/",
    reviews: 3701,
  },
  {
    id: "boylesports",
    name: "BoyleSports",
    logo: "/boylesports.webp",
    bonus: "£40 Welcome Offer",
    welcomeOffer: "New Customers Only",
    terms: "18+ | New customers only | Min deposit £10 | T&Cs apply | BeGambleAware.org",
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.boylesports.com",
    reviews: 3168,
  },

  {
    id: "midnite",
    name: "Midnite",
    logo: "/midnite.webp",
    bonus: "Get £30 in Free Bets",
    welcomeOffer: "£30 Free Bets",
    terms: "18+ | New customers | Deposit & bet £10 to get £30 in Free Bets | T&Cs apply | BeGambleAware.org",
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.midnite.com",
    reviews: 4025,
  },
]

/** Ranking: 1st place = highest score (9.8), descending by 0.1 */
export const bettingSites: BettingSite[] = rawSites.map((site, index) => ({
  ...site,
  score: Math.round((9.8 - index * 0.15) * 10) / 10,
}))
