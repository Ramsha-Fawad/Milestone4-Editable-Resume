document.getElementById("resume-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    generateResume();
});

function generateResume() {
    // Get values from the form fields
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const objective = (document.getElementById("objective") as HTMLTextAreaElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const graduationDate = (document.getElementById("graduation-date") as HTMLInputElement).value;
    const educationAchievements = (document.getElementById("education-achievements") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
    const period = (document.getElementById("period") as HTMLInputElement).value;
    const organization = (document.getElementById("organization") as HTMLInputElement).value;
    const experienceDetails = (document.getElementById("experience-details") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    // Create resume content
    const resumeContent = `
        <div class="resume-section" id="personal-details">
            <h3>Personal Details</h3>
            <p><strong>Name:</strong> <span class="editable" contenteditable="true">${name}</span></p>
            <p><strong>Email:</strong> <span class="editable" contenteditable="true">${email}</span></p>
            <p><strong>Phone:</strong> <span class="editable" contenteditable="true">${phone}</span></p>
            <p><strong>Address:</strong> <span class="editable" contenteditable="true">${address}</span></p>
        </div>
        <div class="resume-section" id="resume-objective">
            <h3>Resume Objective</h3>
            <p><span class="editable" contenteditable="true">${objective}</span></p>
        </div>
        <div class="resume-section" id="education">
            <h3>Education</h3>
            <p><strong>Degree:</strong> <span class="editable" contenteditable="true">${degree}</span></p>
            <p><strong>Institution:</strong> <span class="editable" contenteditable="true">${institution}</span></p>
            <p><strong>Graduation Date:</strong> <span class="editable" contenteditable="true">${graduationDate}</span></p>
            <p><strong>Achievements:</strong> <span class="editable" contenteditable="true">${educationAchievements}</span></p>
        </div>
        <div class="resume-section" id="work-experience">
            <h3>Work Experience</h3>
            <p><strong>Job Title:</strong> <span class="editable" contenteditable="true">${jobTitle}</span></p>
            <p><strong>Period:</strong> <span class="editable" contenteditable="true">${period}</span></p>
            <p><strong>Organization:</strong> <span class="editable" contenteditable="true">${organization}</span></p>
            <p><strong>Experience Details:</strong> <span class="editable" contenteditable="true">${experienceDetails}</span></p>
        </div>
        <div class="resume-section" id="skills">
            <h3>Skills</h3>
            <p><span class="editable" contenteditable="true">${skills}</span></p>
        </div>
    `;

    // Insert generated resume content into the output div
    document.getElementById("resume-output")!.innerHTML = resumeContent;

    // Attach event listeners to editable sections
    enableInlineEditing();
}

function enableInlineEditing() {
    const editableElements = document.querySelectorAll(".editable");

    editableElements.forEach((element) => {
        const htmlElement = element as HTMLElement;  // Cast `element` to `HTMLElement`

        htmlElement.addEventListener("focus", () => {
            htmlElement.classList.add("editing");
        });

        htmlElement.addEventListener("blur", () => {
            htmlElement.classList.remove("editing");
        });

        htmlElement.addEventListener("input", () => {
            // Optionally log the content being edited
            console.log("Updated content:", htmlElement.textContent);
        });
    });
}

