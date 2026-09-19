# Online Resume Builder

A browser-based resume builder for students and job seekers.

## Files

- `index.html` - Resume form, preview, ATS tools, and page structure.
- `style.css` - Blue modern interface, responsive layout, animations, and print styles.
- `script.js` - Resume generation, dynamic sections, ATS scoring, upload checking, PDF printing, and navigation.

## Use

1. Open `index.html` in a browser.
2. Enter your personal, education, skills, project, certification, achievement, and language details.
3. Select **Next: Resume Preview**.
4. Use **Download PDF** and choose **Save as PDF** in the browser print dialog.

## ATS Check

Use **ATS Resume Check** in the top navigation to open the separate ATS page. Upload a text-based resume file and select **Check upload**.

Supported upload formats:

- `.txt`
- `.md`
- `.html`

The checker reviews contact details, summary/profile, skills, experience/projects, education, and readable content length.

## Notes

This is a client-side application. No server or installation is required. PDF creation uses the browser's built-in print-to-PDF feature.
