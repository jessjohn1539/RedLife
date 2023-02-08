
// $(window).on("load", ()=>{

// });

let districtArr = [
    ["Nicobars", "North & South Andaman", "South Andaman"],
    ["Alluri",
        "Sitharama Raju",
        "Anakapalli",
        "Ananthapuram",
        "Annamayya Bapatla",
        "Chittoor",
        "East Godavari",
        "Eluru", "Guntur",
        "Kakinada",
        "Kona Seema",
        "Krishna",
        "Kurnool",
        "Manyam",
        "NTR District",
        "Nandyal",
        "Palnadu",
        "Prakasam",
        "SPS Nellore",
        "Sri Satyasai District",
        "Sri. Balaji Dist",
        "Srikakulam",
        " Vishakhapatnam",
        " Vizianagaram",
        " West Godavari",
        " YSR Kadapa"],
    ["Changlang",
        " Tirap",
        " Anjaw",
        " Lohit",
        " Upper Dibang Valley",
        " Lower Dibang Valley",
        " West Siang",
        " East Siang",
        " Lower Subansiri",
        " Upper Siang",
        " Kurung Kumey",
        " Upper Subansiri",
        " East Kameng",
        " Papum Pare",
        " Tawang",
        "West Kameng"],
    ["Cachar", "Hailakandi", "Karimganj",
        "Dima Hasao", "East Karbi Anglong", "West Karbi Anglong", "Morigaon Nagaon",
        "Baksa", "Barpeta", "Bongaigaon", "Chirang", "Dhubri", "Goalpara", "Nalbari", "Kamrup Metropolitan", "Kamrup Rural", " Kokrajhar", "South Salmara-Mankachar",
        "Darrang", "Sonitpur", "Udalguri",
        "Charaideo", " Dhemaji", "Dibrugarh", "Golaghat", "Jorhat", "Lakhimpur", "Majuli Sivasagar", "Tinsukia"],
    ["Araria",
        "Aurangabad",
        "Banka",
        "Begusarai",
        "Kaimur",
        "Bhagalpur",
        "Bhojpur",
        "Buxar",
        " Darbhanga",
        " Gaya",
        "Gopalganj",
        "Jahanabad",
        "Jamui",
        "Arwal",
        "Katihar",
        "Khagaria",
        "Kishanganj",
        "Lakhisarai",
        "Madhepura",
        "Madhubani",
        "Munger",
        "Muzaffarpur",
        "Nalanda",
        "Nawada",
        "Paschim Champaran",
        "Patna",
        "Purba Champaran",
        "Purnia",
        "Rohtas",
        "Saharsa",
        "Samastipur",
        "Saran",
        "Sheikhpura",
        "Sheohar",
        "Sitamarhi",
        "Siwan",
        "Supaul",
        "Vaishali"],
    ["Chandigarh"],
    ["Sakti",

        "Dhamtari",

        " Raipur",

        " Durg",

        " Baloda Bazar",

        " Kondagaon",

        " Sukma",

        " Raigarh",

        " Kabirdham",

        " Gariaband",

        " Surajpur",

        " Bijapur",

        " Bemetara",

        "Kanker",

        " Sarangarh-Bilaigarh",

        " Khairagarh-Chhuikhadan-Gandai",

        " Bilaspur",

        " Rajnandgaon",

        " Chowki",

        " Dantewada",

        " Balrampur",

        " Balod",

        " Mahasamund",

        " Gaurella-Pendra-Marwahi",

        " Jashpur",

        " Janjgir-Champa",

        " Koriya",

        " Manendragarh-Chirmiri-Bharatpur",

        "  Bastar",

        " Narayanpur",

        " Surguja",

        " Mohla-Manpur",

        " Mungeli"],
    ['Dadra & Nagar Haveli'],
    ["Daman", "Diu"],
    ["Central", "East", "New Delhi", "North East", "North West",
        "Shahdara", "South", "South East", "South West", "West"],
    ["North Goa", "South Goa"],
    ["Ahmedabad",
        "Amreli",
        "Anand",
        "Aravali",
        " Banaskantha",
        " Bharuch",
        " Bhavnagar",
        " Botad",
        " Chhota udaipur",
        " Dahod",
        " Devbhoomi Dwarka",
        " Gandhinagar",
        " Gir Somnath",
        " Jamnagar",
        "Junagadh",
        " Kachchh",
        "Kheda",
        " Mahisagar",
        "Mehsana",
        "Morbi",
        "Narmada",
        " Navsari",
        " Panchmahal",
        " Patan",
        " Porbander",
        " Rajkot",
        " Sabarkantha",
        " Surat",
        " Surendranagar",
        "Tapi",
        "The Dangs",
        " Vadodara",
        " Valsad"],
    ["Ambal",
        "Bhiwani",
        "Charkhi Dadri",
        "Faridabad",
        "Fatehabad",
        "Gurgram",
        "Hissar ",
        "Jind",
        "Karnal",
        "Kethal",
        "Kurushet",
        "Mahen",
        "Mewat",
        " Palwal",
        "Panipat",
        " Rewari ",
        "Sirsa ",
        "Sonipat",
        "Yamunanagar"],
    ["Kangra",
        "Sirmur",
        "Solan",
        "Una"],
    ["Kargil"],
    ["Bokaro", "Dhanbad"],
    ["Bagalkot",
        "Bangalore",
        "Bangalore Rural	",
        "Belgaum	",
        "Bellary	",
        "Bidar",
        "Bijapur	",
        "Chamarajanagar	",
        "Chikkaballapura	",
        "Chikmagalur	",
        "Chitradurga	",
        "Dakshina Kannada",
        "Davanagere	",
        "Dharwad	",
        "Gadag	",
        "Gulbarga	",
        "Hassan	",
        "Haveri	",
        "Kodagu	",
        "Kolar",
        "Koppal	",
        "Mandya	",
        "Mysore	",
        "Raichur	",
        "Ramanagara	",
        "Shimoga",
        "Tumkur	",
        "Udupi	",
        "Uttara Kannada	",
        "Yadgir"],
    ["Kasaragod", "Kannur",
        "Wayanad",
        "Kozhikkode", " Malappuram",
        "Palakkad",
        "Thrissur", "Eranakulam",
        "Thiruvananthapuram", "Kollam", "Alappuzha", "Pathanamthitta", " Kottayam", "Idukki"],
    [],
    [],
    [],
    ["Ahmadnagar"
        , "Akola	"
        , "Amravati	"
        , "Aurangabad"
        , "Bhandara	"
        , "Bid	"
        , "Buldana	"
        , "Chandrapur	"
        , "Dhule	"
        , "Gadchiroli"
        , "Gondiya	"
        , "Hingoli	"
        , "Jalgaon	"
        , "Jalna	"
        , "Kolhapur	"
        , "Latur	"
        , "Mumbai City	"
        , "Mumbai Suburban"
        , "Nagpur	"
        , "Nanded"
        , "	Nandurbar"
        , "	Nashik"
        , "	Osmanabad"
        , "	Palghar	"
        , "	Parbhani	"
        , "	Pune	"
        , "	Raigarh	"
        , "	Ratnagiri"
        , "	Sangli	"
        , "	Satara	"
        , "	Sindhudurg"	
        , "	Solapur	"
        , "	Thane	"
        , "	Wardha	"
        , "	Washim	"
        , "	Yavatmal"],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],


]
let districts = document.querySelector("#distList")

let sts = document.querySelector("#states")
console.log(sts.value)

sts.addEventListener("input", function () {
    districts.innerHTML = `<option value="-1" selected>Select District</option>`
    districtArr[sts.value].forEach((ele, index) => {
        districts.innerHTML += `<option value="${index}">${ele}</option>`
    })
})