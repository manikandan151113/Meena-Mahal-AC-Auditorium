export type Language = 'en' | 'ta';

export interface TranslationSet {
  // Navigation / Header
  brandName: string;
  brandSub: string;
  home: string;
  facilities: string;
  aboutGallery: string;
  bookings: string;
  bookNowBtn: string;
  langSwitchedEn: string;
  langSwitchedTa: string;

  // Hero Section
  heroTitle: string;
  heroSub: string;
  soundOn: string;
  soundOff: string;
  exploreAuditorium: string;
  scheduleTourBtn: string;

  // Spaces / Facilities
  facilitiesTitle: string;
  facilitiesSubtitle: string;
  designedEvents: string;
  viewDetails: string;
  facilityInsight: string;
  specifications: string;
  seatingCapacity: string;
  coolingSystem: string;
  acousticControl: string;
  lightingArtistry: string;
  tableMaterials: string;
  suitesCount: string;
  climateControl: string;
  lotCapacity: string;
  areaSecurity: string;
  recordLifespan: string;
  activeCameraCount: string;
  generatorType: string;
  activationSpeed: string;
  extraStandards: string;

  // Facilities Titles & Descriptions
  titleAcHall: string;
  descAcHall: string;
  titleDining: string;
  descDining: string;
  titleSuites: string;
  descSuites: string;
  titleParking: string;
  descParking: string;
  titleCctv: string;
  descCctv: string;
  titleGenerator: string;
  descGenerator: string;

  // Experience Section
  experienceHeading: string;
  experienceSubtitle: string;
  experienceIntro: string;
  curationsTitle: string;
  curatorLabel: string;
  galleryFeast: string;
  galleryStage: string;
  galleryWalkway: string;
  galleryTagline: string;

  // Testimonials
  experiencesTitle: string;
  testimonialsHeading: string;
  testimonialsSubtitle: string;
  test1Quote: string;
  test2Quote: string;
  test3Quote: string;

  // Contact / Bookings
  contactDeskTitle: string;
  contactDeskDesc: string;
  venueAddressLabel: string;
  venueAddressText: string;
  contactPhoneLabel: string;
  contactEmailLabel: string;

  // Booking Contact Modal
  bookingModalHeaderTag: string;
  bookingModalTitle: string;
  bookingModalDesc: string;
}

export const translations: Record<Language, TranslationSet> = {
  en: {
    brandName: "Meena Mahal",
    brandSub: "Auditorium",
    home: "Home",
    facilities: "Facilities",
    aboutGallery: "About & Gallery",
    bookings: "Bookings",
    bookNowBtn: "Book Now",
    langSwitchedEn: "Switched to English",
    langSwitchedTa: "தமிழுக்கு மாற்றப்பட்டது",

    heroTitle: "Meena Mahal AC Auditorium",
    heroSub: "Experience Sankarankovil’s premier air-conditioned wedding kalyana mandapam. Designed with high-ceiling gold-trimmed architecture and luxury catering spaces for your glorious celebrations.",
    soundOn: "Sound On",
    soundOff: "Sound Off",
    exploreAuditorium: "Explore Auditorium",
    scheduleTourBtn: "Book Auditorium Now",

    facilitiesTitle: "WORLD-CLASS AMENITIES",
    facilitiesSubtitle: "Our Facilities",
    designedEvents: "Designed For Flawless Events",
    viewDetails: "VIEW DETAIL DETAILS",
    facilityInsight: "FACILITY INSIGHT",
    specifications: "Specifications",
    seatingCapacity: "Seating Capacity",
    coolingSystem: "Cooling System",
    acousticControl: "Acoustic Control",
    lightingArtistry: "Lighting Artistry",
    tableMaterials: "Table Materials",
    suitesCount: "Suites Count",
    climateControl: "Climate Control",
    lotCapacity: "Lot Capacity",
    areaSecurity: "Area Security",
    recordLifespan: "Record Lifespan",
    activeCameraCount: "Active Camera Count",
    generatorType: "Generator Type",
    activationSpeed: "Power Up Speed",
    extraStandards: "EXTRA STANDARDS & CONVENIENCES",

    titleAcHall: "Grand A/C Auditorium",
    descAcHall: "Our primary high-ceiling kalyana mandapam, fully air-conditioned and designed with expert acoustic controls, opulent lighting, custom executive seating, and glorious gold-trimmed borders to host your grand audience in perfect grandeur.",
    titleDining: "Grand Dining Hall",
    descDining: "A spacious, highly organized banquet dining experience. Built with polished traditional granite serving tables, multiple state-of-the-art handwashing bays, and dedicated aisles for easy serving to keep things clean and efficient.",
    titleSuites: "Plush Bride & Groom Suites",
    descSuites: "Two fully air-conditioned private sanctuaries designed uniquely for the bride and groom. Furnished with luxurious dressings, spacious seating, and elegant full-length golden vanities for an atmospheric preparing space.",
    titleParking: "Ample Secured Parking",
    descParking: "A large, fully paved, and well-lit secure compound inside our premises. Facilitates smooth entry and exit of both cars and bikes so your guests can park without a single worry.",
    titleCctv: "24/7 Smart CCTV Coverage",
    descCctv: "Continuous digital camera surveillance covering key hall gates, main lobbies, dining areas, corridors, and car parks ensuring ultimate security and complete event assurance throughout.",
    titleGenerator: "100% Generator Backup Power",
    descGenerator: "A heavy power-generation backup engine capable of lighting up the entire auditorium, running air conditioners, and keeping all lights active instantly in case of main board outages.",

    experienceHeading: "CELEBRATIONS OF LEGACY",
    experienceSubtitle: "The Ceremony Experience",
    experienceIntro: "At Meena Mahal, we host memories that echo for generations. Our space blends traditional Tamil wedding aesthetics with absolute luxury.",
    curationsTitle: "EXCLUSIVE ADORNMENT SCHEMES",
    curatorLabel: "CURATOR",
    galleryFeast: "Traditional Grand Banquet Feast",
    galleryStage: "Vibrant Floral Royal Stage Detail",
    galleryWalkway: "The Grand Entrance Red Carpet Walk",
    galleryTagline: "GALLERY LANDMARKS",

    experiencesTitle: "CLIENT EXPERIENCES",
    testimonialsHeading: "Happy Testimonials",
    testimonialsSubtitle: "Testimonials will be added soon. Check back later to hear from families who have celebrated at our auditorium.",
    test1Quote: "[Placeholder for a real client testimonial about the air-conditioned hall and dining space.]",
    test2Quote: "[Placeholder for a real client testimonial about the stage design and architecture.]",
    test3Quote: "[Placeholder for a real client testimonial about the parking setup and generator backup.]",

    contactDeskTitle: "Booking & Enquiries Helpdesk",
    contactDeskDesc: "For bookings, date availability checks, physical site tour scheduling, or pricing quotes, call us directly.",
    venueAddressLabel: "VENUE ADDRESS",
    venueAddressText: "Weavers Colony, Lakshmiyapuram, Sankarankovil, Tamil Nadu 627756",
    contactPhoneLabel: "CONTACT PHONE",
    contactEmailLabel: "EMAIL ADDRESS",

    bookingModalHeaderTag: "DIRECT BOOKING HELPDESK",
    bookingModalTitle: "Book Meena Mahal Auditorium",
    bookingModalDesc: "For bookings and enquiries, please contact us directly by phone to check availability and reserve your date.",
  },
  ta: {
    brandName: "மீனா மஹால்",
    brandSub: "மண்டபம்",
    home: "முகப்பு",
    facilities: "வசதிகள்",
    aboutGallery: "விவரம் & கேலரி",
    bookings: "பதிவுகள்",
    bookNowBtn: "இப்போதே பதிவுசெய்",
    langSwitchedEn: "Switched to English",
    langSwitchedTa: "தமிழுக்கு மாற்றப்பட்டது",

    heroTitle: "மீனா மஹால் குளிரூட்டப்பட்ட மண்டபம்",
    heroSub: "சங்கரன்கோவிலின் முதன்மையான ஏசி திருமண மண்டபத்தை அனுபவியுங்கள். உயர்தர தங்க வடிவமைப்பு மற்றும் நவீன சமையல் வசதிகளுடன் உங்கள் வீட்டு சுபகாரியங்களை சொகுசாக கொண்டாடுங்கள்.",
    soundOn: "ஒலி இயக்கு",
    soundOff: "ஒலியை நிறுத்து",
    exploreAuditorium: "மண்டபத்தை சுற்றிப்பார்",
    scheduleTourBtn: "இப்போதே தொடர்பு கொள்ளவும்",

    facilitiesTitle: "உலகத்தரம் வாய்ந்த நன்மைகள்",
    facilitiesSubtitle: "எங்கள் வசதிகள்",
    designedEvents: "குறைபாடற்ற கொண்டாட்டங்களுக்கு முன்னுரிமை",
    viewDetails: "முழு விபரம் பார்க்க",
    facilityInsight: "வசதி பற்றிய பார்வை",
    specifications: "வசதிகள் விபரம்",
    seatingCapacity: "இருக்கை கொள்ளளவு",
    coolingSystem: "குளிரூட்டும் வசதி",
    acousticControl: "ஒலியியல் கட்டுப்பாடு",
    lightingArtistry: "அழகிய விளக்குகள்",
    tableMaterials: "சாப்பாட்டு மேஜை",
    suitesCount: "சிறப்பு அறைகள் எண்ணிக்கை",
    climateControl: "ஏசி கட்டுப்பாடு",
    lotCapacity: "வண்டி நிறுத்துமிடம்",
    areaSecurity: "பாதுகாப்பு வசதி",
    recordLifespan: "சிசிடிவி பதிவு நாட்கள்",
    activeCameraCount: "செயலிலுள்ள கேமராக்கள்",
    generatorType: "மின் இயற்றி வகை",
    activationSpeed: "மின்சாரம் மாறும் வேகம்",
    extraStandards: "கூடுதல் நன்மைகள் மற்றும் வசதிகள்",

    titleAcHall: "பிரமாண்ட ஏசி மண்டபம்",
    descAcHall: "எங்கள் முதன்மையான குளிரூட்டப்பட்ட திருமண மண்டபம், நேர்த்தியான ஒலியியல் கட்டுப்பாடு, அழகிய ஜொலிக்கும் விளக்குகள், சொகுசு இருக்கைகள் மற்றும் தங்க நிற வேலைப்பாடுகளுடன் கூடிய பெரிய மண்டபமாகும்.",
    titleDining: "பிரமாண்ட பெரிய உணவுக்கூடம்",
    descDining: "அனைவரும் அமர்ந்து சாப்பிடக்கூடிய பெரிய சுத்தமான டைனிங் ஹால். பளபளப்பான கல் மேஜைகள், நவீன கை கழுவும் வசதிகள் மற்றும் உணவு பரிமாற வசதியான தனித்தனி நடைபாதைகள் கொண்டது.",
    titleSuites: "மணமகன் & மணமகள் சொகுசு அறைகள்",
    descSuites: "மணமகன் மற்றும் மணமகளுக்கு தனித்தனியாக குளிர்சாதன வசதி கொண்ட அழகிய அறைகள். சொகுசு சோபா, பெரிய நிலைக்கண்ணாடி மற்றும் ஒப்பனை வசதிகளுடன் கூடிய சிறந்த தனி அறை.",
    titleParking: "விசாலமான வண்டி நிறுத்துமிடம்",
    descParking: "எங்கள் வளாகத்திற்குள்ளேயே பாதுகாப்பான, நன்கு விளக்குகள் பொருத்தப்பட்ட பெரிய பார்க்கிங் ஏரியா. கார்கள் மற்றும் இருசக்கர வாகனங்கள் எளிதாக வந்து செல்ல வசதியாக அமைந்துள்ளது.",
    titleCctv: "24/7 சிசிடிவி கேமரா கண்காணிப்பு",
    descCctv: "மண்டப வாசல், நடைபாதைகள், சமையல் கூடம் மற்றும் பார்க்கிங் ஆகிய முக்கிய இடங்களை 24 மணி நேரமும் கண்காணிக்கும் வகையில் நவீன கேமராக்கள் பொருத்தப்பட்டுள்ளது.",
    titleGenerator: "100% ஜெனரேட்டர் மின்சார வசதி",
    descGenerator: "மின் தடை ஏற்பட்டால் உடனே இயங்கும் நவீன சக்திவாய்ந்த சைலண்ட் ஜெனரேட்டர் வசதி உள்ளது, இதனால் ஏசி மற்றும் விளக்குகள் தடையின்றி இயங்கும்.",

    experienceHeading: "பாரம்பரிய கொண்டாட்டங்கள்",
    experienceSubtitle: "திருமண அனுபவம்",
    experienceIntro: "மீனா மஹாலில், தலைமுறைகள் தாண்டியும் பேசப்படும் அழகிய நினைவுகளை உருவாக்குங்கள். பாரம்பரிய தமிழ் கலாச்சார அழகும் நவீன சொகுசுகளும் இணையும் இடம்.",
    curationsTitle: "சிறப்பு அலங்கார திட்டங்கள்",
    curatorLabel: "அலங்காரம்",
    galleryFeast: "சுவையான பாரம்பரிய பந்தி விருந்து",
    galleryStage: "மலர் அலங்காரத்துடன் கூடிய கம்பீர மேடை",
    galleryWalkway: "பிரமாண்ட வரவேற்பு சிவப்பு கம்பள பாதை",
    galleryTagline: "மண்டபக் காட்சிகள்",

    experiencesTitle: "வாடிக்கையாளர் திருப்தி",
    testimonialsHeading: "மகிழ்ச்சியான விமர்சனங்கள்",
    testimonialsSubtitle: "வாடிக்கையாளர் சான்றுகள் விரைவில் சேர்க்கப்படும். எங்கள் மண்டபத்தில் சுப நிகழ்வுகள் நடத்திய குடும்பங்களின் கருத்துகளை இங்கே காணலாம்.",
    test1Quote: "[குளிரூட்டப்பட்ட மண்டபம் மற்றும் உணவுக்கூடம் பற்றிய உண்மையான வாடிக்கையாளர் சான்றுக்கான இடம்.]",
    test2Quote: "[மேடை அலங்காரம் மற்றும் கட்டிடக்கலை பற்றிய உண்மையான வாடிக்கையாளர் சான்றுக்கான இடம்.]",
    test3Quote: "[பார்க்கிங் மற்றும் ஜெனரேட்டர் வசதி பற்றிய உண்மையான வாடிக்கையாளர் சான்றுக்கான இடம்.]",

    contactDeskTitle: "முன்பதிவு மற்றும் தொடர்பு மையம்",
    contactDeskDesc: "தேதிகள் கிடைப்பது, முன்பதிவு மற்றும் கட்டண விவரங்களை அறிய எங்களை நேரடியாக தொலைபேசியில் தொடர்பு கொள்ளவும்.",
    venueAddressLabel: "மண்டப முகவரி",
    venueAddressText: "நெசவாளர் காலனி, லட்சுமியாபுரம், சங்கரன்கோவில், தமிழ்நாடு 627756",
    contactPhoneLabel: "தொடர்பு எண்",
    contactEmailLabel: "மின்னஞ்சல் முகவரி",

    bookingModalHeaderTag: "நேரடி முன்பதிவு மையம்",
    bookingModalTitle: "மீனா மஹால் முன்பதிவு மற்றும் தொடர்பு",
    bookingModalDesc: "முன்பதிவு மற்றும் தேதிகள் விவரங்களுக்கு, எங்களை நேரடியாக தொலைபேசியில் தொடர்பு கொள்ளவும்.",
  }
};
