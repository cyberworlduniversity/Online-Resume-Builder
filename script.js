/* =========================================================
   ONLINE RESUME BUILDER
   JavaScript Functionality
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       GET ELEMENTS
    ===================================================== */

    const addEducationBtn =
        document.getElementById("addEducationBtn");

    const addProjectBtn =
        document.getElementById("addProjectBtn");

    const addCertificationBtn =
        document.getElementById("addCertificationBtn");

    const generateResumeBtn =
        document.getElementById("generateResumeBtn");

    const printResumeBtn =
        document.getElementById("printResumeBtn");

    const downloadResumeBtn =
        document.getElementById("downloadResumeBtn");

    const atsCheckBtn =
        document.getElementById("atsCheckBtn");

    const atsResult =
        document.getElementById("atsResult");

    const resumeFile =
        document.getElementById("resumeFile");

    const uploadCheckBtn =
        document.getElementById("uploadCheckBtn");

    const removeResumeFileBtn =
        document.getElementById("removeResumeFileBtn");

    const uploadFileName =
        document.getElementById("uploadFileName");

    const uploadResult =
        document.getElementById("uploadResult");

    const resetBtn =
        document.getElementById("resetBtn");

    const educationContainer =
        document.getElementById("educationContainer");

    const projectsContainer =
        document.getElementById("projectsContainer");

    const certificationsContainer =
        document.getElementById("certificationsContainer");

    const mainContainer =
        document.getElementById("mainContainer");

    const backToEditorBtn =
        document.getElementById("backToEditorBtn");

    const navAtsBtn =
        document.getElementById("navAtsBtn");

    const uploadChecker =
        document.getElementById("uploadChecker");

    const backFromAtsBtn =
        document.getElementById("backFromAtsBtn");


    /* =====================================================
       UTILITY FUNCTION
    ===================================================== */

    function escapeHTML(value) {

        if (value === null || value === undefined) {
            return "";
        }

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    function getValue(id) {

        const element = document.getElementById(id);

        return element
            ? element.value.trim()
            : "";
    }


    function splitValues(value) {

        if (!value) {
            return [];
        }

        return value
            .split(",")
            .map(item => item.trim())
            .filter(item => item !== "");
    }


    /* =====================================================
       EDUCATION
    ===================================================== */

    let educationCount =
        educationContainer.querySelectorAll(".education-item").length;


    addEducationBtn.addEventListener("click", function () {

        educationCount++;

        const educationHTML = `
            <div class="dynamic-item education-item">
                <div class="item-header">
                    <h4>Education ${educationCount}</h4>
                    <button type="button" class="remove-btn">Remove</button>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Degree / Course</label>
                        <input type="text" name="degree[]" placeholder="e.g. B.Sc. Computer Science">
                    </div>
                    <div class="form-group">
                        <label>Institution / College</label>
                        <input type="text" name="institution[]" placeholder="Enter college/university name">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Department</label>
                        <input type="text" name="department[]" placeholder="e.g. Computer Science">
                    </div>
                    <div class="form-group">
                        <label>Location</label>
                        <input type="text" name="educationLocation[]" placeholder="City, State">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Start Year</label>
                        <input type="text" name="educationStart[]" placeholder="2024">
                    </div>
                    <div class="form-group">
                        <label>End Year</label>
                        <input type="text" name="educationEnd[]" placeholder="2027 / Present">
                    </div>
                    <div class="form-group">
                        <label>CGPA / Percentage</label>
                        <input type="text" name="grade[]" placeholder="e.g. 8.5 CGPA">
                    </div>
                </div>
            </div>
        `;

        educationContainer.insertAdjacentHTML("beforeend", educationHTML);
        updateEducationNumbers();

    });


    /* =====================================================
       PROJECTS
    ===================================================== */

    let projectCount =
        projectsContainer.querySelectorAll(".project-item").length;


    addProjectBtn.addEventListener("click", function () {

        projectCount++;

        const projectHTML = `
            <div class="dynamic-item project-item">

                <div class="item-header">

                    <h4>Project ${projectCount}</h4>

                    <button
                        type="button"
                        class="remove-btn"
                    >
                        Remove
                    </button>

                </div>


                <div class="form-group">

                    <label>Project Title</label>

                    <input
                        type="text"
                        name="projectTitle[]"
                        placeholder="e.g. Online Resume Builder"
                    >

                </div>


                <div class="form-row">

                    <div class="form-group">

                        <label>Technologies Used</label>

                        <input
                            type="text"
                            name="projectTechnology[]"
                            placeholder="HTML, CSS, JavaScript"
                        >

                    </div>


                    <div class="form-group">

                        <label>Project Link</label>

                        <input
                            type="url"
                            name="projectLink[]"
                            placeholder="https://github.com/..."
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label>Project Description</label>

                    <textarea
                        name="projectDescription[]"
                        rows="4"
                        placeholder="Describe your project..."
                    ></textarea>

                </div>

            </div>
        `;

        projectsContainer.insertAdjacentHTML(
            "beforeend",
            projectHTML
        );

        updateProjectNumbers();

    });


    /* =====================================================
       CERTIFICATIONS
    ===================================================== */

    let certificationCount =
        certificationsContainer.querySelectorAll(
            ".certification-item"
        ).length;


    addCertificationBtn.addEventListener("click", function () {

        certificationCount++;

        const certificationHTML = `
            <div class="dynamic-item certification-item">

                <div class="item-header">

                    <h4>Certification ${certificationCount}</h4>

                    <button
                        type="button"
                        class="remove-btn"
                    >
                        Remove
                    </button>

                </div>


                <div class="form-row">

                    <div class="form-group">

                        <label>Certification Name</label>

                        <input
                            type="text"
                            name="certificationName[]"
                            placeholder="e.g. Certified Ethical Hacker"
                        >

                    </div>


                    <div class="form-group">

                        <label>Issuing Organization</label>

                        <input
                            type="text"
                            name="certificationOrganization[]"
                            placeholder="e.g. EC-Council"
                        >

                    </div>

                </div>


                <div class="form-row">

                    <div class="form-group">

                        <label>Issue Year</label>

                        <input
                            type="text"
                            name="certificationYear[]"
                            placeholder="2026"
                        >

                    </div>


                    <div class="form-group">

                        <label>Credential ID</label>

                        <input
                            type="text"
                            name="credentialId[]"
                            placeholder="Optional"
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label>
                        Credential / Certificate Link
                    </label>

                    <input
                        type="url"
                        name="certificateLink[]"
                        placeholder="https://..."
                    >

                </div>

            </div>
        `;

        certificationsContainer.insertAdjacentHTML(
            "beforeend",
            certificationHTML
        );

        updateCertificationNumbers();

    });


    /* =====================================================
       REMOVE DYNAMIC ITEMS
    ===================================================== */

    document.addEventListener("click", function (event) {

        if (
            event.target.classList.contains("remove-btn")
        ) {

            const item =
                event.target.closest(".dynamic-item");

            if (!item) {
                return;
            }

            const parent =
                item.parentElement;

            const itemType =
                item.classList.contains("education-item")
                    ? "education"
                    : item.classList.contains("project-item")
                        ? "project"
                        : "certification";


            /*
             * Keep at least one entry in each section.
             */
            if (
                parent.children.length <= 1
            ) {

                alert(
                    `At least one ${itemType} entry is required.`
                );

                return;
            }


            item.remove();


            if (itemType === "education") {
                updateEducationNumbers();
            }

            if (itemType === "project") {
                updateProjectNumbers();
            }

            if (itemType === "certification") {
                updateCertificationNumbers();
            }

        }

    });


    /* =====================================================
       UPDATE ITEM NUMBERS
    ===================================================== */

    function updateEducationNumbers() {

        const items =
            educationContainer.querySelectorAll(
                ".education-item"
            );

        items.forEach(function (item, index) {

            const heading =
                item.querySelector(".item-header h4");

            if (heading) {
                heading.textContent =
                    `Education ${index + 1}`;
            }

        });

        educationCount = items.length;

    }


    function updateProjectNumbers() {

        const items =
            projectsContainer.querySelectorAll(
                ".project-item"
            );

        items.forEach(function (item, index) {

            const heading =
                item.querySelector(".item-header h4");

            if (heading) {
                heading.textContent =
                    `Project ${index + 1}`;
            }

        });

        projectCount = items.length;

    }


    function updateCertificationNumbers() {

        const items =
            certificationsContainer.querySelectorAll(
                ".certification-item"
            );

        items.forEach(function (item, index) {

            const heading =
                item.querySelector(".item-header h4");

            if (heading) {
                heading.textContent =
                    `Certification ${index + 1}`;
            }

        });

        certificationCount = items.length;

    }


    /* =====================================================
       GENERATE RESUME
    ===================================================== */

    generateResumeBtn.addEventListener(
        "click",
        function () {
            generateResume();
            mainContainer.classList.add("preview-only");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    );

    backToEditorBtn.addEventListener(
        "click",
        function () {
            mainContainer.classList.remove("preview-only");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    );

    navAtsBtn.addEventListener(
        "click",
        function () {
            mainContainer.classList.remove("preview-only");
            mainContainer.classList.add("ats-only");
            uploadChecker.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    );

    backFromAtsBtn.addEventListener(
        "click",
        function () {
            mainContainer.classList.remove("ats-only");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    );


    function generateResume() {

        /*
         * Personal Details
         */

        const fullName =
            getValue("fullName");

        const jobTitle =
            getValue("jobTitle");

        const email =
            getValue("email");

        const phone =
            getValue("phone");

        const address =
            getValue("address");

        const linkedin =
            getValue("linkedin");

        const github =
            getValue("github");

        const portfolio =
            getValue("portfolio");


        /*
         * Summary
         */

        const summary =
            getValue("summary");


        /*
         * Skills
         */

        const technicalSkills =
            getValue("technicalSkills");

        const softSkills =
            getValue("softSkills");

        const tools =
            getValue("tools");


        /*
         * Other Details
         */

        const achievements =
            getValue("achievements");

        const languages =
            getValue("languages");


        /* =================================================
           UPDATE PERSONAL INFORMATION
        ================================================= */

        document.getElementById(
            "previewName"
        ).textContent =
            fullName || "Your Name";


        document.getElementById(
            "previewJobTitle"
        ).textContent =
            jobTitle || "Professional Title";


        document.getElementById(
            "previewEmail"
        ).textContent =
            email || "email@example.com";


        document.getElementById(
            "previewPhone"
        ).textContent =
            phone || "+91 XXXXX XXXXX";


        document.getElementById(
            "previewAddress"
        ).textContent =
            address || "Your Address";


        /* =================================================
           SOCIAL LINKS
        ================================================= */

        updateLink(
            "previewLinkedin",
            linkedin,
            "LinkedIn"
        );


        updateLink(
            "previewGithub",
            github,
            "GitHub"
        );


        updateLink(
            "previewPortfolio",
            portfolio,
            "Portfolio"
        );


        /* =================================================
           SUMMARY
        ================================================= */

        document.getElementById(
            "previewSummary"
        ).textContent =
            summary ||
            "Your professional summary will appear here.";


        /* =================================================
           SKILLS
        ================================================= */

        document.getElementById(
            "previewTechnicalSkills"
        ).textContent =
            technicalSkills || "-";


        document.getElementById(
            "previewSoftSkills"
        ).textContent =
            softSkills || "-";


        document.getElementById(
            "previewTools"
        ).textContent =
            tools || "-";


        /* =================================================
           EDUCATION
        ================================================= */

        generateEducationPreview();


        /* =================================================
           PROJECTS
        ================================================= */

        generateProjectPreview();


        /* =================================================
           CERTIFICATIONS
        ================================================= */

        generateCertificationPreview();


        /* =================================================
           ACHIEVEMENTS
        ================================================= */

        document.getElementById(
            "previewAchievements"
        ).textContent =
            achievements || "-";


        /* =================================================
           LANGUAGES
        ================================================= */

        document.getElementById(
            "previewLanguages"
        ).textContent =
            languages || "-";


        /*
         * Scroll to preview
         */

        if (mainContainer.classList.contains("preview-only")) {
            document.getElementById(
                "resumePreview"
            ).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    }


    /* =====================================================
       UPDATE LINKS
    ===================================================== */

    function updateLink(
        elementId,
        url,
        defaultText
    ) {

        const link =
            document.getElementById(elementId);

        if (!link) {
            return;
        }

        if (url) {

            link.href = url;
            link.textContent = defaultText;
            link.style.display = "inline";

        } else {

            link.removeAttribute("href");
            link.style.display = "none";

        }

    }


    /* =====================================================
       GENERATE EDUCATION PREVIEW
    ===================================================== */

    function generateEducationPreview() {

        const preview =
            document.getElementById(
                "previewEducation"
            );


        const items =
            educationContainer.querySelectorAll(
                ".education-item"
            );


        preview.innerHTML = "";


        let hasData = false;


        items.forEach(function (item) {

            const degree =
                item.querySelector(
                    'input[name="degree[]"]'
                )?.value.trim() || "";


            const institution =
                item.querySelector(
                    'input[name="institution[]"]'
                )?.value.trim() || "";


            const department =
                item.querySelector(
                    'input[name="department[]"]'
                )?.value.trim() || "";


            const location =
                item.querySelector(
                    'input[name="educationLocation[]"]'
                )?.value.trim() || "";


            const startYear =
                item.querySelector(
                    'input[name="educationStart[]"]'
                )?.value.trim() || "";


            const endYear =
                item.querySelector(
                    'input[name="educationEnd[]"]'
                )?.value.trim() || "";


            const grade =
                item.querySelector(
                    'input[name="grade[]"]'
                )?.value.trim() || "";


            if (
                !degree &&
                !institution &&
                !department &&
                !location &&
                !startYear &&
                !endYear &&
                !grade
            ) {
                return;
            }


            hasData = true;


            const dateRange =
                startYear || endYear
                    ? `${escapeHTML(startYear)}${startYear && endYear ? " - " : ""}${escapeHTML(endYear)}`
                    : "";


            const details = [
                department,
                location,
                dateRange,
                grade
            ]
                .filter(Boolean)
                .map(escapeHTML)
                .join(" • ");


            const educationHTML = `
                <div class="education-preview-item">

                    <h4>
                        ${escapeHTML(
                            degree || "Degree / Course"
                        )}
                    </h4>

                    <div class="institution">
                        ${escapeHTML(
                            institution || "Institution"
                        )}
                    </div>

                    ${
                        details
                            ? `<div class="education-details">${details}</div>`
                            : ""
                    }

                </div>
            `;


            preview.insertAdjacentHTML(
                "beforeend",
                educationHTML
            );

        });


        if (!hasData) {

            preview.innerHTML = `
                <div class="preview-placeholder">
                    Education details will appear here.
                </div>
            `;

        }

    }


    /* =====================================================
       GENERATE PROJECT PREVIEW
    ===================================================== */

    function generateProjectPreview() {

        const preview =
            document.getElementById(
                "previewProjects"
            );


        const items =
            projectsContainer.querySelectorAll(
                ".project-item"
            );


        preview.innerHTML = "";


        let hasData = false;


        items.forEach(function (item) {

            const title =
                item.querySelector(
                    'input[name="projectTitle[]"]'
                )?.value.trim() || "";


            const technology =
                item.querySelector(
                    'input[name="projectTechnology[]"]'
                )?.value.trim() || "";


            const link =
                item.querySelector(
                    'input[name="projectLink[]"]'
                )?.value.trim() || "";


            const description =
                item.querySelector(
                    'textarea[name="projectDescription[]"]'
                )?.value.trim() || "";


            if (
                !title &&
                !technology &&
                !link &&
                !description
            ) {
                return;
            }


            hasData = true;


            const projectHTML = `
                <div class="project-preview-item">

                    <h4>
                        ${escapeHTML(
                            title || "Project"
                        )}
                    </h4>

                    ${
                        technology
                            ? `
                                <div class="project-tech">
                                    Technologies:
                                    ${escapeHTML(technology)}
                                </div>
                              `
                            : ""
                    }

                    ${
                        description
                            ? `
                                <p>
                                    ${escapeHTML(description)}
                                </p>
                              `
                            : ""
                    }

                    ${
                        link
                            ? `
                                <a
                                    href="${escapeHTML(link)}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                              `
                            : ""
                    }

                </div>
            `;


            preview.insertAdjacentHTML(
                "beforeend",
                projectHTML
            );

        });


        if (!hasData) {

            preview.innerHTML = `
                <div class="preview-placeholder">
                    Your projects will appear here.
                </div>
            `;

        }

    }


    /* =====================================================
       GENERATE CERTIFICATION PREVIEW
    ===================================================== */

    function generateCertificationPreview() {

        const preview =
            document.getElementById(
                "previewCertifications"
            );


        const items =
            certificationsContainer.querySelectorAll(
                ".certification-item"
            );


        preview.innerHTML = "";


        let hasData = false;


        items.forEach(function (item) {

            const name =
                item.querySelector(
                    'input[name="certificationName[]"]'
                )?.value.trim() || "";


            const organization =
                item.querySelector(
                    'input[name="certificationOrganization[]"]'
                )?.value.trim() || "";


            const year =
                item.querySelector(
                    'input[name="certificationYear[]"]'
                )?.value.trim() || "";


            const credentialId =
                item.querySelector(
                    'input[name="credentialId[]"]'
                )?.value.trim() || "";


            const link =
                item.querySelector(
                    'input[name="certificateLink[]"]'
                )?.value.trim() || "";


            if (
                !name &&
                !organization &&
                !year &&
                !credentialId &&
                !link
            ) {
                return;
            }


            hasData = true;


            const certificationHTML = `
                <div class="certification-preview-item">

                    <h4>
                        ${escapeHTML(
                            name || "Certification"
                        )}
                    </h4>

                    <p>
                        ${escapeHTML(
                            organization || ""
                        )}

                        ${
                            year
                                ? ` • ${escapeHTML(year)}`
                                : ""
                        }

                        ${
                            credentialId
                                ? ` • Credential ID: ${escapeHTML(credentialId)}`
                                : ""
                        }
                    </p>

                    ${
                        link
                            ? `
                                <a
                                    href="${escapeHTML(link)}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style="font-size: 11px; color: #2563eb;"
                                >
                                    View Certificate
                                </a>
                              `
                            : ""
                    }

                </div>
            `;


            preview.insertAdjacentHTML(
                "beforeend",
                certificationHTML
            );

        });


        if (!hasData) {

            preview.innerHTML = `
                <div class="preview-placeholder">
                    Your certifications will appear here.
                </div>
            `;

        }

    }


    /* =====================================================
       LIVE PREVIEW
    ===================================================== */

    const liveFields = [

        "fullName",
        "jobTitle",
        "email",
        "phone",
        "address",
        "linkedin",
        "github",
        "portfolio",
        "summary",
        "technicalSkills",
        "softSkills",
        "tools",
        "achievements",
        "languages"

    ];


    liveFields.forEach(function (fieldId) {

        const field =
            document.getElementById(fieldId);

        if (!field) {
            return;
        }

        field.addEventListener(
            "input",
            generateResume
        );

    });


    /*
     * Dynamic fields also update the preview.
     */

    document.addEventListener(
        "input",
        function (event) {

            if (
                event.target.closest(
                    ".dynamic-item"
                )
            ) {
                generateResume();
            }

        }
    );


    /* =====================================================
       RESET FORM
    ===================================================== */

    resetBtn.addEventListener(
        "click",
        function () {

            setTimeout(function () {

                /*
                 * Remove all additional education entries.
                 */

                const educationItems =
                    educationContainer.querySelectorAll(
                        ".education-item"
                    );

                educationItems.forEach(
                    function (item, index) {

                        if (index > 0) {
                            item.remove();
                        }

                    }
                );


                /*
                 * Remove all additional projects.
                 */

                const projectItems =
                    projectsContainer.querySelectorAll(
                        ".project-item"
                    );

                projectItems.forEach(
                    function (item, index) {

                        if (index > 0) {
                            item.remove();
                        }

                    }
                );


                /*
                 * Remove all additional certifications.
                 */

                const certificationItems =
                    certificationsContainer.querySelectorAll(
                        ".certification-item"
                    );

                certificationItems.forEach(
                    function (item, index) {

                        if (index > 0) {
                            item.remove();
                        }

                    }
                );


                updateEducationNumbers();
                updateProjectNumbers();
                updateCertificationNumbers();


                /*
                 * Restore preview.
                 */

                document.getElementById(
                    "previewName"
                ).textContent = "Your Name";


                document.getElementById(
                    "previewJobTitle"
                ).textContent =
                    "Professional Title";


                document.getElementById(
                    "previewEmail"
                ).textContent =
                    "email@example.com";


                document.getElementById(
                    "previewPhone"
                ).textContent =
                    "+91 XXXXX XXXXX";


                document.getElementById(
                    "previewAddress"
                ).textContent =
                    "Your Address";


                document.getElementById(
                    "previewSummary"
                ).textContent =
                    "Your professional summary will appear here.";


                document.getElementById(
                    "previewTechnicalSkills"
                ).textContent = "-";


                document.getElementById(
                    "previewSoftSkills"
                ).textContent = "-";


                document.getElementById(
                    "previewTools"
                ).textContent = "-";


                document.getElementById(
                    "previewAchievements"
                ).textContent = "-";


                document.getElementById(
                    "previewLanguages"
                ).textContent = "-";


                document.getElementById(
                    "previewEducation"
                ).innerHTML = `
                    <div class="preview-placeholder">
                        Education details will appear here.
                    </div>
                `;


                document.getElementById(
                    "previewProjects"
                ).innerHTML = `
                    <div class="preview-placeholder">
                        Your projects will appear here.
                    </div>
                `;


                document.getElementById(
                    "previewCertifications"
                ).innerHTML = `
                    <div class="preview-placeholder">
                        Your certifications will appear here.
                    </div>
                `;


                /*
                 * Hide optional profile links.
                 */

                [
                    "previewLinkedin",
                    "previewGithub",
                    "previewPortfolio"
                ].forEach(function (id) {

                    const link =
                        document.getElementById(id);

                    link.removeAttribute("href");
                    link.style.display = "none";

                });

            }, 0);

        }
    );


    /* =====================================================
       PRINT / SAVE AS PDF
    ===================================================== */

    printResumeBtn.addEventListener(
        "click",
        function () {

            /*
             * Make sure the latest data is displayed.
             */

            generateResume();

            /*
             * Open browser print dialog.
             *
             * User can choose:
             * Printer
             * Save as PDF
             */
            window.print();

        }
    );


    /* =====================================================
       DOWNLOAD RESUME
    ===================================================== */

    downloadResumeBtn.addEventListener(
        "click",
        function () {

            generateResume();
            window.print();

        }
    );


    /* =====================================================
       ATS FRIENDLINESS CHECK
    ===================================================== */

    atsCheckBtn.addEventListener(
        "click",
        function () {

            generateResume();

            const checks = [
                {
                    label: "Full name",
                    passed: Boolean(getValue("fullName"))
                },
                {
                    label: "Professional title",
                    passed: Boolean(getValue("jobTitle"))
                },
                {
                    label: "Email and phone",
                    passed: Boolean(getValue("email")) && Boolean(getValue("phone"))
                },
                {
                    label: "Professional summary",
                    passed: getValue("summary").length >= 40
                },
                {
                    label: "Technical skills",
                    passed: splitValues(getValue("technicalSkills")).length >= 3
                },
                {
                    label: "Education details",
                    passed: Array.from(educationContainer.querySelectorAll(".education-item")).some(item =>
                        item.querySelector('input[name="degree[]"]')?.value.trim() &&
                        item.querySelector('input[name="institution[]"]')?.value.trim()
                    )
                },
                {
                    label: "Project experience",
                    passed: Array.from(projectsContainer.querySelectorAll(".project-item")).some(item =>
                        item.querySelector('input[name="projectTitle[]"]')?.value.trim() &&
                        item.querySelector('textarea[name="projectDescription[]"]')?.value.trim()
                    )
                },
                {
                    label: "Certifications or achievements",
                    passed: Boolean(getValue("achievements")) || Array.from(certificationsContainer.querySelectorAll(".certification-item")).some(item =>
                        item.querySelector('input[name="certificationName[]"]')?.value.trim()
                    )
                }
            ];

            const passedCount =
                checks.filter(check => check.passed).length;

            const score =
                Math.round((passedCount / checks.length) * 100);

            const missing =
                checks
                    .filter(check => !check.passed)
                    .map(check => check.label);

            atsResult.hidden = false;
            atsResult.className =
                `ats-result ${score >= 75 ? "is-good" : score >= 50 ? "is-medium" : "is-low"}`;

            atsResult.innerHTML = `
                <div class="ats-score">ATS score <strong>${score}%</strong></div>
                <p>${score >= 75 ? "Good ATS foundation. Keep your formatting simple and use keywords from the job description." : "Add the missing resume content below to improve ATS matching."}</p>
                ${missing.length ? `<ul>${missing.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>` : "<p class=\"ats-success\">All key ATS checks passed.</p>"}
            `;

            atsResult.scrollIntoView({ behavior: "smooth", block: "nearest" });

        }
    );


    resumeFile.addEventListener(
        "change",
        function () {
            const hasFile = Boolean(resumeFile.files[0]);

            uploadFileName.textContent =
                hasFile
                    ? resumeFile.files[0].name
                    : "No file selected";

            removeResumeFileBtn.hidden = !hasFile;
        }
    );


    removeResumeFileBtn.addEventListener(
        "click",
        function () {
            resumeFile.value = "";
            uploadFileName.textContent = "No file selected";
            uploadResult.hidden = true;
            uploadResult.textContent = "";
            removeResumeFileBtn.hidden = true;
        }
    );


    uploadCheckBtn.addEventListener(
        "click",
        async function () {

            const file = resumeFile.files[0];

            if (!file) {
                uploadResult.hidden = false;
                uploadResult.className = "upload-result is-warning";
                uploadResult.textContent = "Choose a .txt, .md, or .html resume file first.";
                return;
            }

            const extension =
                file.name.split(".").pop().toLowerCase();

            if (!["txt", "md", "html"].includes(extension)) {
                uploadResult.hidden = false;
                uploadResult.className = "upload-result is-warning";
                uploadResult.textContent = "This browser checker supports text-based resume files: .txt, .md, and .html.";
                return;
            }

            const fileText =
                await file.text();

            const plainText =
                fileText
                    .replace(/<[^>]*>/g, " ")
                    .replace(/[#*_`]/g, " ")
                    .replace(/\s+/g, " ")
                    .trim();

            const checks = [
                {
                    label: "Contact email",
                    passed: /[\w.+-]+@[\w-]+\.[\w.-]+/.test(plainText)
                },
                {
                    label: "Phone number",
                    passed: /(?:\+?\d[\d\s().-]{7,}\d)/.test(plainText)
                },
                {
                    label: "Summary or profile section",
                    passed: /\b(summary|profile|objective)\b/i.test(plainText)
                },
                {
                    label: "Skills section",
                    passed: /\bskills?\b/i.test(plainText)
                },
                {
                    label: "Experience or projects",
                    passed: /\b(experience|employment|projects?)\b/i.test(plainText)
                },
                {
                    label: "Education section",
                    passed: /\beducation\b/i.test(plainText)
                },
                {
                    label: "Readable content",
                    passed: plainText.split(/\s+/).filter(Boolean).length >= 80
                }
            ];

            const score =
                Math.round(checks.filter(check => check.passed).length / checks.length * 100);

            const missing =
                checks.filter(check => !check.passed).map(check => check.label);

            uploadResult.hidden = false;
            uploadResult.className = `upload-result ${score >= 75 ? "is-good" : score >= 50 ? "is-warning" : "is-low"}`;
            uploadResult.innerHTML = `
                <strong>ATS score: ${score}%</strong>
                <span>${missing.length ? `Improve: ${missing.map(item => escapeHTML(item)).join(", ")}.` : "Core ATS checks passed."}</span>
            `;

        }
    );


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    /*
     * Hide empty social links initially.
     */

    [
        "previewLinkedin",
        "previewGithub",
        "previewPortfolio"
    ].forEach(function (id) {

        const link =
            document.getElementById(id);

        if (link) {
            link.style.display = "none";
        }

    });


    /*
     * Generate initial preview.
     */

    generateResume();

});
