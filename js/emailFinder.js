$(document).ready(function(){

    var firstName;
    var lastName;
    var companyName;
    var emailType;
    var toEmail;
    var bccEmail;
    var bccEmailArray = ["firstEmail","secondEmail"];

    function generateEmails () {
        event.preventDefault();
        firstName = $('#fName').val();
        lastName = $('#lName').val();
        companyName = $('#cName').val();
        emailType = $('#eType').val();
        bccEmail ="";
        toEmail = firstName + "." + lastName + "@" + companyName;
        bccEmail = firstName + lastName + "@" + companyName;
        bccEmailArray[0] = firstName.slice(0,1) + lastName + "@" + companyName;
        bccEmailArray[1] = lastName + "." + firstName + "@" + companyName;
        bccEmailArray[2] = firstName + lastName.slice(0,1) + "@" + companyName;
        bccEmailArray[3] = lastName.slice(0,1) + lastName + "@" + companyName;
        bccEmailArray[4] = firstName.slice(0,1) + lastName.slice(0,1) + "@" + companyName;
        bccEmailArray[5] = firstName + "@" + companyName;
        bccEmailArray[6] = lastName + "@" + companyName;
        bccEmailArray[7] = firstName + "_" + lastName + "@" + companyName;
        
        
        //loop that puts 9 emails from Array into one string
        for (var i=0; i<7; i++) {
            bccEmail = bccEmail + emailType + ' ' + bccEmailArray[i];
        }

        $('#toOutput').html(toEmail);
        $('#bccSpan').html(bccEmail);
        

    }

    $('form').submit(generateEmails);
})