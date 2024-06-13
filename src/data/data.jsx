import UCBLogo from "../assets/logos/ucb.png"
import EBLLogo from "../assets/logos/ebl.png"
import UPayLogo from "../assets/logos/upay.png"

export const data = [
  {
    name: "United Commercial Bank PLC",
    category: "bank",
    phone_primary: "16419",
    phone_secondary: "+880910016419",
    email: "complaint@ucb.com.bd",
    url: "https://www.ucb.com.bd",
    logo: UCBLogo,
    human_code: ["1", "9"],
    verified: true,
  },
  {
    name: "Upay",
    category: "bank",
    phone_primary: "16268",
    phone_secondary: "",
    email: "info@upaybd.com",
    url: "https://www.upaybd.com",
    logo: UPayLogo,
    human_code: ["1", "0"],
    verified: true,
  },
  {
    name: "Eastern Bank PLC",
    category: "bank",
    phone_primary: "16230",
    phone_secondary: "+8809612316230",
    email: "https://www.ebl.com.bd",
    logo: EBLLogo,
    human_code: ["1", "1", "6"],
    verified: true,
    notes: "1 -> Regular Service, 1-> Bangla, 6-> Customer Care",
  },
]
