experience1 = `
    <h3 class="company-name">Web Developer @ Turn 14 
    <span class="toggle-icon" onclick="toggleExperience()">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#16A1D5" viewBox="0 0 256 256"><path d="M88,24V16a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM16,104h8a8,8,0,0,0,0-16H16a8,8,0,0,0,0,16ZM124.42,39.16a8,8,0,0,0,10.74-3.58l8-16a8,8,0,0,0-14.31-7.16l-8,16A8,8,0,0,0,124.42,39.16Zm-96,81.69-16,8a8,8,0,0,0,7.16,14.31l16-8a8,8,0,1,0-7.16-14.31ZM219.31,184a16,16,0,0,1,0,22.63l-12.68,12.68a16,16,0,0,1-22.63,0L132.7,168,115,214.09c0,.1-.08.21-.13.32a15.83,15.83,0,0,1-14.6,9.59l-.79,0a15.83,15.83,0,0,1-14.41-11L32.8,52.92A16,16,0,0,1,52.92,32.8L213,85.07a16,16,0,0,1,1.41,29.8l-.32.13L168,132.69ZM208,195.31,156.69,144h0a16,16,0,0,1,4.93-26l.32-.14,45.95-17.64L48,48l52.2,159.86,17.65-46c0-.11.08-.22.13-.33a16,16,0,0,1,11.69-9.34,16.72,16.72,0,0,1,3-.28,16,16,0,0,1,11.3,4.69L195.31,208Z"></path></svg>
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
    <h3 class="company-name">ML Engineer @ Comcast 
    <span class="toggle-icon" onclick="toggleExperience()">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#16A1D5" viewBox="0 0 256 256"><path d="M88,24V16a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM16,104h8a8,8,0,0,0,0-16H16a8,8,0,0,0,0,16ZM124.42,39.16a8,8,0,0,0,10.74-3.58l8-16a8,8,0,0,0-14.31-7.16l-8,16A8,8,0,0,0,124.42,39.16Zm-96,81.69-16,8a8,8,0,0,0,7.16,14.31l16-8a8,8,0,1,0-7.16-14.31ZM219.31,184a16,16,0,0,1,0,22.63l-12.68,12.68a16,16,0,0,1-22.63,0L132.7,168,115,214.09c0,.1-.08.21-.13.32a15.83,15.83,0,0,1-14.6,9.59l-.79,0a15.83,15.83,0,0,1-14.41-11L32.8,52.92A16,16,0,0,1,52.92,32.8L213,85.07a16,16,0,0,1,1.41,29.8l-.32.13L168,132.69ZM208,195.31,156.69,144h0a16,16,0,0,1,4.93-26l.32-.14,45.95-17.64L48,48l52.2,159.86,17.65-46c0-.11.08-.22.13-.33a16,16,0,0,1,11.69-9.34,16.72,16.72,0,0,1,3-.28,16,16,0,0,1,11.3,4.69L195.31,208Z"></path></svg>
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

$(document).ready(function() {
    //mail icon action
    isExperience1 = true;
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
    const experienceContent = document.getElementById("company-cards");
    experienceContent.innerHTML = isExperience1 ? experience2 : experience1;
    isExperience1 = !isExperience1;
}