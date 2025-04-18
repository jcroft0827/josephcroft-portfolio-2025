// Color Variables
const bgColor = "rgb(52, 58, 64)";
const textColor = "rgb(248, 249, 250)";
const ghostColor = "rgb(108, 117, 125)";
const shadeColor = "rgb(108, 117, 125, 0.44)";
const greenColor = "rgb(40, 167, 69)";

// IT Support Experience (HOME) Variables
    // Get the header div that will be clicked
    const itSupportHeader = document.getElementById('it-support-experience-header');
    // Get the content div to show/hide
    const itSupportContent = document.getElementById('it-support-content');
    // Get the arrow divs
    const itSupportArrowClosed = document.getElementById('it-support-arrow-closed');
    const itSupportArrowOpen = document.getElementById('it-support-arrow-open');

// Software Development Enthusiast (HOME) Variables
    // Get the header div that will be clicked
    const softwareDevHeader = document.getElementById('software-development-experience-header');
    // Get the content div to show/hide
    const softwareDevContent = document.getElementById('software-development-content');
    // Get the arrow divs
    const softwareDevArrowClosed = document.getElementById('software-development-arrow-closed');
    const softwareDevArrowOpen = document.getElementById('software-development-arrow-open');

// Web Development Experience (HOME) Variables
    // Get the header div that will be clicked
    const webDevHeader = document.getElementById('web-dev-experience-header');
    // Get the content div to show/hide
    const webDevContent = document.getElementById('web-development-content');
    // Get the arrow divs
    const webDevArrowClosed = document.getElementById('web-development-arrow-closed');
    const webDevArrowOpen = document.getElementById('web-development-arrow-open');

// AWS Experience (HOME) Variables
    // Get the header div that will be clicked
    const awsHeader = document.getElementById('aws-experience-header');
    // Get the content div to show/hide
    const awsContent = document.getElementById('aws-experience-content');
    // Get the arrow divs
    const awsArrowClosed = document.getElementById('aws-arrow-closed');
    const awsArrowOpen = document.getElementById('aws-arrow-open');


// Open IT Support Experience on Home Screen
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listener to the header
    itSupportHeader.addEventListener('click', () => {
        // Toggle content visibility
        const isITSupportExperienceHidden = itSupportContent.style.display === 'none' || itSupportContent.style.display === '';
        itSupportContent.style.display = isITSupportExperienceHidden ? 'block' : 'none';

        // Toggle arrows
        itSupportArrowClosed.style.display = isITSupportExperienceHidden ? 'none' : 'block';
        itSupportArrowOpen.style.display = isITSupportExperienceHidden ? 'block' : 'none';

        // Toggle colors
        itSupportHeader.style.color = isITSupportExperienceHidden ? greenColor : ghostColor;

        // Close Software Dev Options
        softwareDevContent.style.display = 'none';
        softwareDevArrowClosed.style.display = 'block';
        softwareDevArrowOpen.style.display = 'none';
        softwareDevHeader.style.color = ghostColor;
        // Close Web Dev Options
        webDevContent.style.display = 'none';
        webDevArrowClosed.style.display = 'block';
        webDevArrowOpen.style.display = 'none';
        webDevHeader.style.color = ghostColor;
        // Close AWS Options
        awsContent.style.display = 'none';
        awsArrowClosed.style.display = 'block';
        awsArrowOpen.style.display = 'none';
        awsHeader.style.color = ghostColor;
    });
});

// Open Software Development Enthusiast on Home Screen
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listener to header
    softwareDevHeader.addEventListener('click', () => {
        // Toggle content visibility
        const isSoftwareDevHidden = softwareDevContent.style.display === 'none' || softwareDevContent.style.display === '';
        softwareDevContent.style.display = isSoftwareDevHidden ? 'block' : 'none';

        // Toggle arrows
        softwareDevArrowClosed.style.display = isSoftwareDevHidden ? 'none' : 'block';
        softwareDevArrowOpen.style.display = isSoftwareDevHidden ? 'block' : 'none';

        // Toggle colors
        softwareDevHeader.style.color = isSoftwareDevHidden ? greenColor : ghostColor;

        // Close IT Support Options
        itSupportContent.style.display = 'none';
        itSupportArrowClosed.style.display = 'block';
        itSupportArrowOpen.style.display = 'none';
        itSupportHeader.style.color = ghostColor;
        // Close Web Dev Options
        webDevContent.style.display = 'none';
        webDevArrowClosed.style.display = 'block';
        webDevArrowOpen.style.display = 'none';
        webDevHeader.style.color = ghostColor;
        // Close AWS Options
        awsContent.style.display = 'none';
        awsArrowClosed.style.display = 'block';
        awsArrowOpen.style.display = 'none';
        awsHeader.style.color = ghostColor;
    });
});

// Open Web Development Experience on Home Screen
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listener to header
    webDevHeader.addEventListener('click', () => {
        // Toggle content visibility
        const isWebDevHidden = webDevContent.style.display === 'none' || webDevContent.style.display === '';
        webDevContent.style.display = isWebDevHidden ? 'block' : 'none';

        // Toggle arrows
        webDevArrowClosed.style.display = isWebDevHidden ? 'none' : 'block';
        webDevArrowOpen.style.display = isWebDevHidden ? 'block' : 'none';

        // Toggle colors
        webDevHeader.style.color = isWebDevHidden ? greenColor : ghostColor;

        // Close IT Support Options
        itSupportContent.style.display = 'none';
        itSupportArrowClosed.style.display = 'block';
        itSupportArrowOpen.style.display = 'none';
        itSupportHeader.style.color = ghostColor;
        // Close Software Dev Options
        softwareDevContent.style.display = 'none';
        softwareDevArrowClosed.style.display = 'block';
        softwareDevArrowOpen.style.display = 'none';
        softwareDevHeader.style.color = ghostColor;
        // Close AWS Options
        awsContent.style.display = 'none';
        awsArrowClosed.style.display = 'block';
        awsArrowOpen.style.display = 'none';
        awsHeader.style.color = ghostColor;
    });
});

// Open AWS Experience on Home Screen
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listener to header
    awsHeader.addEventListener('click', () => {
        // Toggle content visibility
        const isAWSHidden = awsContent.style.display === 'none' || awsContent.style.display === '';
        awsContent.style.display = isAWSHidden ? 'block' : 'none';

        // Toggle arrows
        awsArrowClosed.style.display = isAWSHidden ? 'none' : 'block';
        awsArrowOpen.style.display = isAWSHidden ? 'block' : 'none';

        // Toggle colors
        awsHeader.style.color = isAWSHidden ? greenColor : ghostColor;

        // Close IT Support Options
        itSupportContent.style.display = 'none';
        itSupportArrowClosed.style.display = 'block';
        itSupportArrowOpen.style.display = 'none';
        itSupportHeader.style.color = ghostColor;
        // Close Software Dev Options
        softwareDevContent.style.display = 'none';
        softwareDevArrowClosed.style.display = 'block';
        softwareDevArrowOpen.style.display = 'none';
        softwareDevHeader.style.color = ghostColor;
        // Close Web Dev Options
        webDevContent.style.display = 'none';
        webDevArrowClosed.style.display = 'block';
        webDevArrowOpen.style.display = 'none';
        webDevHeader.style.color = ghostColor;
    });
});
