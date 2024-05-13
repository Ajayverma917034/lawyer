export const caseData = [
    {
        ID: 1,
        Name: "John Doe",
        PracticeArea: "Litigation",
        ArrivalDate: "2024-05-10",
        ClientName: "XYZ Corporation",
        ClientPosition: "CEO",
        RefNumber: "REF123",
        Description: "Handling a complex litigation case for XYZ Corporation."
    },
    {
        ID: 2,
        Name: "Jane Smith",
        PracticeArea: "Corporate Law",
        ArrivalDate: "2024-05-11",
        ClientName: "ABC Ltd.",
        ClientPosition: "CFO",
        RefNumber: "REF456",
        Description: "Providing legal advice on corporate governance issues for ABC Ltd."
    },
    {
        ID: 3,
        Name: "David Johnson",
        PracticeArea: "Intellectual Property",
        ArrivalDate: "2024-05-12",
        ClientName: "LMN Enterprises",
        ClientPosition: "CTO",
        RefNumber: "REF789",
        Description: "Drafting patent applications for innovative technologies developed by LMN Enterprises."
    },
    // Add more entries as needed
    {
        ID: 4,
        Name: "Emily White",
        PracticeArea: "Employment Law",
        ArrivalDate: "2024-05-13",
        ClientName: "PQR Inc.",
        ClientPosition: "HR Director",
        RefNumber: "REF101",
        Description: "Advising on employee relations issues and drafting employment contracts for PQR Inc."
    },
    {
        ID: 5,
        Name: "Michael Brown",
        PracticeArea: "Real Estate Law",
        ArrivalDate: "2024-05-14",
        ClientName: "STU Realty",
        ClientPosition: "Managing Director",
        RefNumber: "REF202",
        Description: "Handling property transactions and lease agreements for STU Realty's commercial properties."
    },
    {
        ID: 6,
        Name: "Sarah Adams",
        PracticeArea: "Family Law",
        ArrivalDate: "2024-05-15",
        ClientName: "DEF Family Services",
        ClientPosition: "Director",
        RefNumber: "REF303",
        Description: "Assisting clients with divorce proceedings, child custody matters, and adoption processes."
    },
    {
        ID: 7,
        Name: "Kevin Wilson",
        PracticeArea: "Banking Law",
        ArrivalDate: "2024-05-16",
        ClientName: "GHI Bank",
        ClientPosition: "Legal Counsel",
        RefNumber: "REF404",
        Description: "Providing legal support for GHI Bank's lending operations and regulatory compliance."
    },
    {
        ID: 8,
        Name: "Emma Garcia",
        PracticeArea: "Immigration Law",
        ArrivalDate: "2024-05-17",
        ClientName: "NOP Immigration Services",
        ClientPosition: "Manager",
        RefNumber: "REF505",
        Description: "Assisting individuals and businesses with visa applications and immigration law compliance."
    },
    {
        ID: 9,
        Name: "Daniel Martinez",
        PracticeArea: "Environmental Law",
        ArrivalDate: "2024-05-18",
        ClientName: "UVW Environmental Group",
        ClientPosition: "Environmental Scientist",
        RefNumber: "REF606",
        Description: "Advising on environmental regulations, pollution control measures, and sustainability initiatives for UVW Environmental Group."
    },
    {
        ID: 10,
        Name: "Olivia Taylor",
        PracticeArea: "Healthcare Law",
        ArrivalDate: "2024-05-19",
        ClientName: "QRS Medical Center",
        ClientPosition: "Hospital Administrator",
        RefNumber: "REF707",
        Description: "Handling medical malpractice claims, regulatory compliance, and healthcare contract negotiations for QRS Medical Center."
    }
];

export const taskData = [
    {
        ID: 1,
        Title: "Project A",
        Type: "Development",
        LastDate: "2024-05-10",
        MatterName: "ABC Corporation",
        View: "Link"
    },
    {
        ID: 2,
        Title: "Project B",
        Type: "Research",
        LastDate: "2024-05-11",
        MatterName: "XYZ Ltd.",
        View: "Link"
    },
    {
        ID: 3,
        Title: "Project C",
        Type: "Consultation",
        LastDate: "2024-05-12",
        MatterName: "LMN Enterprises",
        View: "Link"
    },
    {
        ID: 4,
        Title: "Project D",
        Type: "Training",
        LastDate: "2024-05-13",
        MatterName: "PQR Inc.",
        View: "Link"
    },
    {
        ID: 5,
        Title: "Project E",
        Type: "Marketing",
        LastDate: "2024-05-14",
        MatterName: "STU Realty",
        View: "Link"
    },
    {
        ID: 6,
        Title: "Project F",
        Type: "Event Management",
        LastDate: "2024-05-15",
        MatterName: "DEF Services",
        View: "Link"
    },
    {
        ID: 7,
        Title: "Project G",
        Type: "Financial Analysis",
        LastDate: "2024-05-16",
        MatterName: "GHI Bank",
        View: "Link"
    },
    {
        ID: 8,
        Title: "Project H",
        Type: "Legal Compliance",
        LastDate: "2024-05-17",
        MatterName: "NOP Corporation",
        View: "Link"
    },
    {
        ID: 9,
        Title: "Project I",
        Type: "Quality Assurance",
        LastDate: "2024-05-18",
        MatterName: "UVW Inc.",
        View: "Link"
    },
    {
        ID: 10,
        Title: "Project J",
        Type: "Human Resources",
        LastDate: "2024-05-19",
        MatterName: "QRS Solutions",
        View: "Link"
    }
];

export const meetingData = [
    {
        title: "Team Strategy Meeting",
        startDate: "2024-05-20",
        startTime: "09:00",
        endDate: "2024-05-20",
        endTime: "11:00",
        relatedMatter: ["Quarterly Goals", "Project Updates"],
        description: "This meeting will focus on discussing the strategy for the upcoming quarter and updates on ongoing projects.",
        location: "Conference Room 1",
        meetingType: "In-Person"
    },
    {
        title: "Marketing Presentation",
        startDate: "2024-05-25",
        startTime: "14:00",
        endDate: "2024-05-25",
        endTime: "16:00",
        relatedMatter: ["Product Launch", "Target Audience Analysis"],
        description: "Presentation on the upcoming product launch and analysis of the target audience for marketing campaigns.",
        location: "Boardroom",
        meetingType: "Virtual"
    },
    {
        title: "Team Building Activity",
        startDate: "2024-06-02",
        startTime: "10:00",
        endDate: "2024-06-02",
        endTime: "13:00",
        relatedMatter: ["Team Bonding", "Collaboration"],
        description: "Outdoor team building activity to strengthen teamwork and collaboration.",
        location: "Adventure Park",
        meetingType: "In-Person"
    },
    // Add more data objects as needed
];

export const reminderDate = [
    {
        title: "Doctor's Appointment",
        reminderDate: "2024-05-15",
        reminderTime: "09:30",
        repeat: "None",
        recipients: "patient@example.com",
        summary: "Routine checkup with the doctor.",
    },
    {
        title: "Pay Rent",
        reminderDate: "2024-05-01",
        reminderTime: "12:00",
        repeat: "Monthly",
        recipients: "landlord@example.com",
        summary: "Send rent payment by the due date.",
    },
    {
        title: "Team Standup",
        reminderDate: "2024-05-10",
        reminderTime: "10:00",
        repeat: "Daily",
        recipients: "team@example.com",
        summary: "Daily standup meeting with the team to discuss tasks.",
    },
    {
        title: "Work Anniversary",
        reminderDate: "2024-05-20",
        reminderTime: "00:00",
        repeat: "Yearly",
        recipients: "colleague@example.com",
        summary: "Celebrate work anniversary with a small gathering.",
    },
    {
        title: "Grocery Shopping",
        reminderDate: "2024-05-05",
        reminderTime: "17:30",
        repeat: "Weekly",
        recipients: "family@example.com",
        summary: "Buy groceries for the week.",
    },
    {
        title: "Submit Expense Report",
        reminderDate: "2024-05-25",
        reminderTime: "14:00",
        repeat: "None",
        recipients: "finance@example.com",
        summary: "Submit expense report for reimbursement.",
    },
    {
        title: "Call Grandma",
        reminderDate: "2024-05-08",
        reminderTime: "18:00",
        repeat: "None",
        recipients: "grandma@example.com",
        summary: "Call grandma to check in and catch up.",
    },
    {
        title: "Review Monthly Goals",
        reminderDate: "2024-05-01",
        reminderTime: "09:00",
        repeat: "Monthly",
        recipients: "self@example.com",
        summary: "Review progress on monthly goals and set new ones.",
    },
    {
        title: "Exercise",
        reminderDate: "2024-05-10",
        reminderTime: "07:00",
        repeat: "Daily",
        recipients: "self@example.com",
        summary: "Morning workout session for physical fitness.",
    },
    {
        title: "Submit Quarterly Report",
        reminderDate: "2024-05-31",
        reminderTime: "16:00",
        repeat: "Quarterly",
        recipients: "manager@example.com",
        summary: "Submit quarterly report to the management.",
    }
];
