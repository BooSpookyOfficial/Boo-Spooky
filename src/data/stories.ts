export interface Story {
  title: string;
  content: string[];
  image: string;
  imageAlt: string;
  layout: 'left' | 'right' | 'top' | 'bottom' | 'center';
}

export const stories: Story[] = [
  {
    title: "How I Got Stuck Like This",
    content: [
      "Okay, so picture this: I'm at the pharaoh's funeral, right? And I thought it would be hilarious to crack a joke about him 'wrapping up' his reign. Yeah, turns out ancient Egyptian priests have zero sense of humor.",
      "Next thing I know, I'm cursed for all eternity. And here's the kicker - being dead somehow made my jokes even worse. Now I'm stuck making terrible puns, and literally nobody wants to hear them. My dating life is... well, non-existent."
    ],
    image: "https://res.cloudinary.com/dtm10i7bj/image/upload/v1750595353/att.zWXcSJJE9nF_iW6sco9TMmyo7SIEPzPa3TYQ3ofKiRo_dq1fym.jpg",
    imageAlt: "Ancient Egyptian funeral scene with supernatural consequences",
    layout: "left"
  },
  {
    title: "My Supernatural Powers Have a Mind of Their Own",
    content: [
      "So every single night at midnight, my supernatural energy just... takes off. Like, it literally manifests itself and starts floating around town doing whatever it wants. It's mortifying.",
      "I thought maybe I could make some money off it, so I tried filming it for TikTok. But the manifestations are absolutely terrible at performing. Like, worse than a dad at a wedding terrible. Plus they keep getting tangled in power lines and I have to go sort them out at 3 AM. The neighbors think I'm weird."
    ],
    image: "https://res.cloudinary.com/dtm10i7bj/image/upload/v1750595354/att.vpwHgKKTjUo0MBsDE1sFCPzRTvc2CvCqKKfNj7vAwZE_mefjbu.jpg",
    imageAlt: "Supernatural energy manifestations causing chaos",
    layout: "right"
  },
  {
    title: "My First Haunting Was a Total Disaster",
    content: [
      "I spent weeks getting ready for my first real haunting at the local library. Practiced my scariest 'BOO!' in the mirror for hours. Then I show up and... the librarian is deaf. I felt like such an idiot.",
      "But you know what? Instead of giving up, I learned sign language. Now I volunteer there every day helping people find books. Turns out you can still be helpful even when you're dead. Plus, the librarian makes amazing coffee and doesn't judge my terrible jokes."
    ],
    image: "https://res.cloudinary.com/dtm10i7bj/image/upload/v1750595353/att.PeSumw0pALrGNo35aRH1GiLsUdLRVqGw0_EJ04cjIpM_wnjaht.jpg",
    imageAlt: "Library volunteer work with supernatural assistance",
    layout: "center"
  },
  {
    title: "My Tomb is Now a Tourist Trap",
    content: [
      "Went back to check out my old tomb and found it crawling with tourists! They turned my burial chamber into a tacky gift shop. My sarcophagus is literally stuffed with plastic pyramids and cheesy t-shirts that say 'I survived the curse!'",
      "The tour guide kept butchering my life story, so I started whispering corrections from the shadows. Now people think it's this amazing 'interactive tour.' Little do they know it's just me being annoyed and correcting the record. At least I'm getting good Yelp reviews."
    ],
    image: "https://res.cloudinary.com/dtm10i7bj/image/upload/v1750595354/att.RuQvJs4BVMNkNf0Cj0vv56WdJuAY1qG-drxzh0vyhJA_qnoazh.jpg",
    imageAlt: "Ancient tomb converted into modern tourist attraction",
    layout: "left"
  },
  {
    title: "Laundromat Chaos",
    content: [
      "Thought I'd be clever and wash my supernatural-affected clothes at the laundromat. Big mistake. Apparently my curse is contagious - every piece of fabric in there came alive and started doing its own thing.",
      "Picture me running around in a floral bedsheet, chasing my clothes while towels are folding themselves and sheets are flying around. The other customers were... not amused. Still banned from three laundromats. Now I have to drive 20 minutes to find one that'll let me in."
    ],
    image: "https://res.cloudinary.com/dtm10i7bj/image/upload/v1750595354/att.HkNDzxZWmllvg2zbZE5DTvDXQuR7hF8EXkQIyYs1rp4_xqkrhk.jpg",
    imageAlt: "Chaotic laundromat scene with supernatural fabric mayhem",
    layout: "right"
  },
  {
    title: "Grocery Shopping is Awkward",
    content: [
      "You'd think being dead means you don't need groceries, but I still get hungry! Problem is, every time I walk into a store, the automatic doors go crazy, the lights flicker, and all the milk expires instantly.",
      "I've learned to shop at 3 AM when there's only one tired cashier who's too exhausted to care about weird supernatural stuff. Shoutout to Derek at the 24-hour mart - you're the real MVP, buddy."
    ],
    image: "",
    imageAlt: "Late night grocery shopping with supernatural complications",
    layout: "center"
  },
  {
    title: "Want More Weird Stories?",
    content: [
      "So that's just a taste of my bizarre undead life! Trust me, there's way more where that came from. Like the time I accidentally got a job at a haunted house (they thought I was really committed to the role), or when I tried to get a driver's license and the DMV computer crashed.",
      "If you want to hear more of my ridiculous adventures, follow me on Twitter @boospooky_! I post new stories all the time, plus random thoughts about being dead in the modern world. Fair warning though - my tweets are just as bad as my real-life jokes.",
      "Thanks for reading, and remember - being weird is way more fun than being normal! 👻"
    ],
    image: "",
    imageAlt: "Follow Boo Spooky on social media for more supernatural stories",
    layout: "center"
  }
];