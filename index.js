experience1 = `
    <h3 class="company-name">Web Developer @ Turn 14 
    <span class="toggle-icon" onclick="toggleExperience()">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#16A1D5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        >
        <path d="M5 12l14 0" />
        <path d="M13 18l6 -6" />
        <path d="M13 6l6 6" />
    </svg>
    </span> 
    </h3>
    <ul class="compant-desc">
        <li class="company-info">
            Utilized HTML, CSS, JavaScript, and PHP to design and develop website features
        </li>
        <li class="company-info">
            Developed efficient database table designs to be seamlessly integrated with 
            CakePHP framework, ensuring optimal performance and reliability                
        </li>
        <li class="company-info">
            Collaborated with development team utilizing Git, 
            Agile methodologies, and Redmine to streamline project 
            management and ensure successful project delivery                
        </li>    
    </ul>
`

experience2 = `
    <h3 class="company-name">Software Engineer @ Comcast 
    <span class="toggle-icon" onclick="toggleExperience()">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#16A1D5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        >
        <path d="M5 12l14 0" />
        <path d="M13 18l6 -6" />
        <path d="M13 6l6 6" />
    </svg>
    </span>
    </h3>
    <ul class="compant-desc">
        <li class="company-info">
            Developed ranking algorithms to improve personalized content recommendations for over one million Comcast video platform users
        </li>
        <li class="company-info">
            Contributed to API development by building and refining REST APIs for user personalization, improving backend functionality for video services like Peacock           
        </li>
        <li class="company-info">
            Documented data pipelines for transformer model generation using Databricks and AWS         
        </li>    
    </ul>
`

experience3 = `
    <h3 class="company-name">Data Engineer @ Future Standard 
    <span class="toggle-icon" onclick="toggleExperience()">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#16A1D5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        >
        <path d="M5 12l14 0" />
        <path d="M13 18l6 -6" />
        <path d="M13 6l6 6" />
    </svg>
    </span>
    </h3>
    <ul class="compant-desc">
        <li class="company-info">
            Designed and deployed an end-to-end ETL pipeline, streamlining reporting and improving data flow
        </li>
        <li class="company-info">
            Diagnosed and resolved an issue in the ETL process that was corrupting CRM by incorrectly overwriting valid data,
improving data integrity
        </li>
        <li class="company-info">
            Replaced static, hardcoded queries with a dynamic logic layer that leveraged real-time CRM data, eliminating
manual updates and testing cycles         
        </li>    
    </ul>
`

$(document).ready(function() {
    //mail icon action
    current = -1;
    toggleExperience();
    $('#copy-email').on('click', function() {
        navigator.clipboard.writeText('ishandesai12@gmail.com')
    });

    $('[data-toggle="tooltip"]').tooltip({
        trigger : 'click',
        container: 'body',
    })
    
    setInterval(function () {
        $('[data-toggle="tooltip"]').tooltip('hide'); 
    }, 5000);
});

function toggleExperience() {
    const experiences = [experience3, experience2, experience1];
    const experienceContent = document.getElementById("company-cards");
    current = (current + 1) % experiences.length;
    experienceContent.innerHTML = experiences[current];
}