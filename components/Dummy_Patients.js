// status 
// 0 -> to be checked
// 1 -> checked
// 2 -> cancelled

const patientRecords = [
    {
        id: 1,
        name: "Rahul Roy",
        appointment_date: "02-11-2022",
        status: 0,
        description: "The patient is suffering from reddish itches on the sides of the arms and thighs. The problem is also associated with frequent sleep breaks.",
        type: "patient",
        fees: 2000,
        isAdmitted: false,
        helperAssigned: false,
        profilePic: "/rahul.jfif",
        email: "rahul@gmail.com",
        password: "123"
    },
    {
        id: 2,
        name: "Navneet Bhole",
        appointment_date: "28-10-2022",
        status: 1,
        description: "The patient is suffering from brain disorder. Frequent sleep breaks. Memory Loss.",
        type: "patient",
        fees: 4000,
        isAdmitted: true,
        helperAssigned: true,
        profilePic: "/rahul.jfif",
        email: "rahul@gmail.com",
        password: "123"
    },
    {
        id: 3,
        name: "Vinit Wagh",
        appointment_date: "13-10-2022",
        status: 2,
        description: "The patient is unable to see properly (blurred vision). Hair loss and frequent urination. Body pain and weakness",
        type: "patient",
        fees: 4500,
        isAdmitted: false,
        helperAssigned: false,
        profilePic: "/rahul.jfif",
        email: "rahul@gmail.com",
        password: "123"
    },
    {
        id: 4,
        name: "Nischay Nagar",
        appointment_date: "26-11-2022",
        status: 0,
        description: "The patient is affected with a certain skin infection that is causing body pain too. High fever and weakness",
        type: "patient",
        fees: 3000,
        isAdmitted: false,
        helperAssigned: false,
        profilePic: "/rahul.jfif",
        email: "rahul@gmail.com",
        password: "123"
    },
    {
        id: 5,
        name: "Anshuman Bharadwaj",
        appointment_date: "07-10-2022",
        status: 1,
        description: "The patient has a sprain. May be a fracture so urgent check required",
        type: "patient",
        fees: 4000,
        isAdmitted: false,
        helperAssigned: true,
        profilePic: "/rahul.jfif",
        email: "rahul@gmail.com",
        password: "123"
    },
    {
        id: 6,
        name: "Gaurav Chotta",
        appointment_date: "09-11-2022",
        status: 0,
        description: "The patient is suffering from high fever and frequent vomitting. Stomach pain and weakness in body.",
        type: "patient",
        fees: 3000,
        isAdmitted: false,
        helperAssigned: false,
        profilePic: "/rahul.jfif",
        email: "rahul@gmail.com",
        password: "123"
    },
    {
        id: 7,
        name: "Tejas Dutta",
        appointment_date: "03-11-2022",
        status: 0,
        description: "The patient is feeling frequent headaches. Loss of body weight.",
        type: "patient",
        fees: 2000,
        isAdmitted: false,
        helperAssigned: false,
        profilePic: "/rahul.jfif",
        email: "rahul@gmail.com",
        password: "123"
    }
]

module.exports = patientRecords;