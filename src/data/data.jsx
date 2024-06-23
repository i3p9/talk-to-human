import UCBLogo from "../assets/logos/sm/ucb_bank.png"
import EBLLogo from "../assets/logos/sm/ebl_bank.png"
import UPayLogo from "../assets/logos/sm/upay_wallet.png"
import BkashLogo from "../assets/logos/sm/bkash_wallet.png"
import CityBankLogo from "../assets/logos/sm/city_bank.png"
import ABBankLogo from "../assets/logos/sm/ab_bank.png"
import MTBLogo from "../assets/logos/sm/mtb_bank.png"
import NagadLogo from "../assets/logos/sm/nagad_wallet.png"
import BRACLogo from "../assets/logos/sm/brac_bank.png"
import IslamiBankLogo from "../assets/logos/sm/islami_bank.png"
import SonaliBankLogo from "../assets/logos/sm/sonali_bank.png"
import DutchBanglaLogo from "../assets/logos/sm/dutch_bangla_bank.png"
import HaierBangladesh from "../assets/logos/sm/haier_bd.png"
import { dynamicSort } from "../utils/utils"

export const data = [
  {
    name: "United Commercial Bank PLC",
    id: "ucb_bank",
    category: "bank",
    phone_primary: "16419",
    phone_secondary: "+8809610016419",
    email: "complaint@ucb.com.bd",
    url: "https://www.ucb.com.bd",
    logo: UCBLogo,
    human_code: ["1", "9"],
    color_scheme: ["#404041", "#D33732", "#404041"],
    verified: true,
  },
  {
    name: "Upay",
    id: "upay_wallet",
    category: "wallet",
    phone_primary: "16268",
    phone_secondary: "09610916268",
    email: "info@upaybd.com",
    url: "https://www.upaybd.com",
    logo: UPayLogo,
    human_code: ["1", "0"],
    color_scheme: ["#F8D849", "#2253A0", "#221F20"],
    verified: true,
  },
  {
    name: "Eastern Bank PLC",
    id: "ebl_bank",
    category: "bank",
    phone_primary: "16230",
    phone_secondary: "09612316230",
    email: "info@ebl-bd.com",
    url: "https://www.ebl.com.bd",
    logo: EBLLogo,
    human_code: ["1", "1", "6"],
    verified: true,
    color_scheme: ["#2559A5", "#53AC59", "#F6C445"],
    notes: "1 -> Regular Service, 1-> Bangla, 6-> Customer Care",
  },
  {
    name: "bKash",
    id: "bkash_wallet",
    category: "wallet",
    phone_primary: "16247",
    phone_secondary: "0255663001",
    email: "support@bkash.com",
    url: "https://www.bkash.com",
    logo: BkashLogo,
    human_code: ["1", "0"],
    verified: true,
    color_scheme: ["#CF316E", "#91263A", "#221F20"],
  },
  {
    name: "City Bank PLC",
    id: "city_bank",
    category: "bank",
    phone_primary: "16234",
    phone_secondary: "028331040",
    email: "complaint.cell@thecitybank.com",
    url: "https://www.citybankplc.com",
    logo: CityBankLogo,
    human_code: ["1", "0"],
    verified: true,
    // color_scheme: ["#DFE0E4", "#DA3832", "#242121"],
    color_scheme: ["#DFE0E4", "#DA3832", "#242121"],
  },
  {
    name: "AB Bank PLC",
    id: "ab_bank",
    category: "bank",
    phone_primary: "16207",
    phone_secondary: "09678916207",
    email: "support@abbl.com",
    url: "https://abbl.com",
    logo: ABBankLogo,
    human_code: ["1", "1"],
    verified: true,
    //color_scheme: ["#211F20", "#DB3830", "#FFFFFF"],
    color_scheme: ["#DB3830", "#DB3830", "#211F20"],
  },
  {
    name: "Mutual Trust Bank PLC",
    id: "mtb_bank",
    category: "bank",
    phone_primary: "16219",
    phone_secondary: "09604016219",
    email: "info@mutualtrustbank.com",
    url: "https://www.mutualtrustbank.com",
    logo: MTBLogo,
    human_code: ["0"],
    verified: true,
    //color_scheme: ["#DA3730", "#242424", "#429452"],
    color_scheme: ["#DA3730", "#429452", "#242424"],
  },
  {
    name: "Nagad",
    id: "nagad_wallet",
    category: "wallet",
    phone_primary: "16167",
    phone_secondary: "09609616167",
    email: "info@nagad.com.bd",
    url: "https://nagad.com.bd",
    logo: NagadLogo,
    human_code: ["0"],
    verified: true,
    //color_scheme: ["#E9993E", "#FFFFFF", "#DA3832"],
    color_scheme: ["#DA3832", "#E9993E", "#FFFFFF"],
  },
  {
    name: "BRAC Bank PLC",
    id: "brac_bank",
    category: "bank",
    phone_primary: "16221",
    phone_secondary: "0255668055",
    additional: {
      phone_toll_free: "08000016221",
      phone_overseas: "0255668055",
      phone_overseas_2: "09611223344",
    },
    email: "enquiry@bracbank.com",
    url: "https://www.bracbank.com",
    logo: BRACLogo,
    human_code: ["1", "0"],
    verified: true,
    //color_scheme: ["#3070B6", "#C7D5E9", "#DCAA3D"],
    color_scheme: ["#3070B6", "#DCAA3D", "#C7D5E9"],
  },
  {
    name: "Islami Bank Bangladesh PLC",
    id: "islami_bank",
    category: "bank",
    phone_primary: "16259",
    phone_secondary: "028331090",
    email: "info@islamibankbd.com",
    url: "https://www.islamibankbd.com",
    logo: IslamiBankLogo,
    human_code: ["1", "0"],
    verified: true,
    color_scheme: ["#2A481F", "#2A481F", "#FFFFFF"],
  },
  {
    name: "Sonali Bank PLC",
    id: "sonali_bank",
    category: "bank",
    phone_primary: "16639",
    phone_secondary: "09610016639",
    email: "support@sonalibank.com.bd",
    url: "https://www.sonalibank.com.bd",
    logo: SonaliBankLogo,
    human_code: ["1", "6"],
    verified: true,
    color_scheme: ["#3D43A8", "#DAB446", "#FFFFFF"],
  },
  {
    name: "Dutch Bangla Bank",
    id: "dutch_bangla_bank",
    category: "bank",
    phone_primary: "16216",
    phone_secondary: "09666716216",
    email: "cards@dutchbanglabank.com",
    url: "https://www.dutchbanglabank.com",
    additional: {
      email_internet_banking: "ibsupport@dutchbanglabank.com",
    },
    logo: DutchBanglaLogo,
    human_code: ["0"],
    color_scheme: ["#2F318D", "#DA3832", "#43924D"],
    verified: false,
  },
  {
    name: "Haier Bangladesh",
    category: "appliences",
    phone_primary: "16678",
    phone_secondary: "09666880099",
    email: "bd.info@haier.com.bd",
    url: "https://haier.com/bd",
    logo: HaierBangladesh,
    human_code: ["1"],
    verified: false,
  },

  // {
  //   //do not touch, copy and paste above
  //   name: "",
  //   category: "",
  //   phone_primary: "",
  //   phone_secondary: "",
  //   email: "",
  //   url: "",
  //   logo: EBLLogo,
  //   human_code: [""],
  //   verified: false,
  // },
]

export const sortedData = data.sort(dynamicSort("id"))
