const { FiCpu, FiZap, FiFastForward, FiUserCheck, FiGlobe, FiLock } = require("react-icons/fi");

const featuresData = [
  {
    id: 1,
    icon: <FiCpu size={20}/>,
    title: "Effortless Discovery",
    desc: "Say goodbye to endless scrolling. Our intuitive interface lets you effortlessly discover the items you love."
  },
  {
    id: 2,
    icon: <FiLock size={20}/>,
    title: "Secure Transactions",
    desc: "Trust and safety are paramount. With robust security features and bult-in payment protection."
  },
  {
    id: 3,
    icon: <FiZap size={20}/>,
    title: "Instant Connection",
    desc: "Connect with like-minded buyers and sellers instantly through our integrated messaging system."
  },
  {
    id: 4,
    icon: <FiFastForward size={20}/>,
    title: "Seamless Transactions",
    desc: "From browsing to checkout, we've streamlined every step of the buying process."
  },
  {
    id: 5,
    icon: <FiUserCheck size={20}/>,
    title: "Personalized Experience",
    desc: "Your journey is unique, and so is your shopping experience."
  },
  {
    id: 6,
    icon: <FiGlobe size={20}/>,
    title: "Global Reach, Local Touch",
    desc: "With SellSpot, the world is your marketplace. Reach buyers and sellers from around the globe."
  }
]

export { featuresData }