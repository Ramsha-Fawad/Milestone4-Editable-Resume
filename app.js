var _a;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    generateResume();
});
function generateResume() {
    // Get values from the form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var objective = document.getElementById("objective").value;
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var graduationDate = document.getElementById("graduation-date").value;
    var educationAchievements = document.getElementById("education-achievements").value;
    var jobTitle = document.getElementById("job-title").value;
    var period = document.getElementById("period").value;
    var organization = document.getElementById("organization").value;
    var experienceDetails = document.getElementById("experience-details").value;
    var skills = document.getElementById("skills").value;
    // Create resume content
    var resumeContent = "\n        <div class=\"resume-section\" id=\"personal-details\">\n            <h3>Personal Details</h3>\n            <p><strong>Name:</strong> <span class=\"editable\" contenteditable=\"true\">".concat(name, "</span></p>\n            <p><strong>Email:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(phone, "</span></p>\n            <p><strong>Address:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(address, "</span></p>\n        </div>\n        <div class=\"resume-section\" id=\"resume-objective\">\n            <h3>Resume Objective</h3>\n            <p><span class=\"editable\" contenteditable=\"true\">").concat(objective, "</span></p>\n        </div>\n        <div class=\"resume-section\" id=\"education\">\n            <h3>Education</h3>\n            <p><strong>Degree:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(degree, "</span></p>\n            <p><strong>Institution:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(institution, "</span></p>\n            <p><strong>Graduation Date:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(graduationDate, "</span></p>\n            <p><strong>Achievements:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(educationAchievements, "</span></p>\n        </div>\n        <div class=\"resume-section\" id=\"work-experience\">\n            <h3>Work Experience</h3>\n            <p><strong>Job Title:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(jobTitle, "</span></p>\n            <p><strong>Period:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(period, "</span></p>\n            <p><strong>Organization:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(organization, "</span></p>\n            <p><strong>Experience Details:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(experienceDetails, "</span></p>\n        </div>\n        <div class=\"resume-section\" id=\"skills\">\n            <h3>Skills</h3>\n            <p><span class=\"editable\" contenteditable=\"true\">").concat(skills, "</span></p>\n        </div>\n    ");
    // Insert generated resume content into the output div
    document.getElementById("resume-output").innerHTML = resumeContent;
    // Attach event listeners to editable sections
    addEditableEventListeners();
}
function addEditableEventListeners() {
    // Find all elements with the class 'editable' and add event listeners
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("input", function () {
            // Whenever content changes, update the element's content
            element.innerText = element.innerText.trim();
        });
    });
}
