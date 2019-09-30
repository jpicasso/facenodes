$(document).ready(function () {

    //**********************************************************************************
    // Last Updated 20190.09.07   
    // *********************************************************************************



    //**********************************************************************************
    //**********************************************************************************
    // Array / Database Loads  
    // *********************************************************************************
    // *********************************************************************************

    // declare global database variables to be used in JS code
    var library_persons_pictures = [];
    var library_persons_names = [];
    var library_persons_notes = [];
    var library_personGroups_groups = [];
    var library_personGroups_persons = [];
    var library_groups = [];

    updateArraysFromLocal();
    //uses local storage to assign new values to arrays
    function updateArraysFromLocal() {
        library_persons_pictures = JSON.parse(window.localStorage.getItem('library_persons_pictures_local'));
        library_persons_names = JSON.parse(window.localStorage.getItem('library_persons_names_local'));
        library_persons_notes = JSON.parse(window.localStorage.getItem('library_persons_notes_local'));
        library_personGroups_groups = JSON.parse(window.localStorage.getItem('library_personGroups_groups_local'));
        library_personGroups_persons = JSON.parse(window.localStorage.getItem('library_personGroups_persons_local'));
        library_groups = JSON.parse(window.localStorage.getItem('library_groups_local'));

        if (library_persons_names == null) {
            restoreDefaultFaceCards();
            updateArraysFromLocal();
        }
    }

    // restores default arrays when restore default function is called
    function restoreDefaultFaceCards() {
        library_persons_pictures = ['url(images/faceNodes/tomCruise.png', 'url(images/faceNodes/georgeClooney.png', 'url(images/faceNodes/taylorSwift.png', 'url(images/faceNodes/donaldTrump.png', 'url(images/faceNodes/georgeWashington.png', 'url(images/faceNodes/abrahamLincoln.png', 'url(images/faceNodes/henryFord.png', 'url(images/faceNodes/plato.png', 'url(images/faceNodes/socrates.png', 'url(images/faceNodes/aristotle.png', 'url(images/faceNodes/marcusAurellius.png'];

        //reset local storage
        window.localStorage.setItem('library_persons_pictures_local', JSON.stringify(library_persons_pictures));

        library_persons_names = ['Tom Cruise', 'George Clooney', 'Taylor Swift', 'Donald Trump', 'George Washington', 'Abraham Lincoln', 'Henry Ford', 'Plato', 'Socrates', 'Aristotle', 'Marcus Aurellius'];

        //reset local storage
        window.localStorage.setItem('library_persons_names_local', JSON.stringify(library_persons_names));

        library_persons_notes = ['Wife: Katie Holmes 2006-12, Nicole Kidman 1990-01; Movies: Risky Business (83), Top Gun (86), Rain Man (88), Days of Thunder (90), A few Good Men (92), Vanilla Sky (01), Minority Report (02), The Last Samurai (03)', 'Wife: Amal (since 2014); Movies: From Dusk til Dawn (96), The Perfect Storm (00), Oceans Eleven (01), Up in the Air (09), The Ides of March (11), Gravity (13)', 'Height: 510; Birthday: Dec 13, 1989; Born in Reading, PA', '45th president of the U.S.; 63; Born 1946; Wife - Melania; Children: Donald Jr, Ivanka, Eric, Tiffany, Barron', '1st president of the U.S. (from 1789 to 1797', '16th president of U.S. (1861 until assassinated in 1865)', '(1863-1947) - Founder of Ford and developed the assembly line system for car mass production (didnt invent it though); President of Ford 1906-1919 and 43-45; Model T was first car; Published antisemitic book (The International Jew)', '(428 BC - 348 BC) Founded first school for higher thought; Wrote Symposium and Republic; Student of Socrates', '(470 - 399 BC) Executed by drinking Hemlock; Socratic Method = solve a problem by breaking it into smaller questions; "the unexamined life is not worth living"', '(384-322 BC) Student of Plato from age 17 (joined Platos Academy); Tutored Alexander the Great beginning in 343 BC', '(121-180) - Roman Emperor from 161-180; Stoic philosopher; Last of the Five Great Emperors; Son - Commodus (emperor from 177-192)'];

        //reset local storage
        window.localStorage.setItem('library_persons_notes_local', JSON.stringify(library_persons_notes));

        library_personGroups_groups = ['Celebrities', 'Celebrities', 'Celebrities', 'Celebrities', 'USHistory', 'USHistory', 'USHistory', 'USHistory', 'Philosophers', 'Philosophers', 'Philosophers', 'Philosophers'];

        //reset local storage
        window.localStorage.setItem('library_personGroups_groups_local', JSON.stringify(library_personGroups_groups));

        library_personGroups_persons = ['0', '1', '2', '3', '3', '4', '5', '6', '7', '8', '9', '10'];

        //reset local storage
        window.localStorage.setItem('library_personGroups_persons_local', JSON.stringify(library_personGroups_persons));

        library_groups = ['NotAssigned', 'Celebrities', 'USHistory', 'Philosophers']

        //reset local storage
        window.localStorage.setItem('library_groups_local', JSON.stringify(library_groups));

        //refreshes page
        location.reload();
    }

    //**********************************************************************************
    //**********************************************************************************
    // Face Cards....flash cards engine  
    // *********************************************************************************
    // *********************************************************************************
    var x = 0;
    var faceOrNotes = 'notes';

    // temporary global variables to store names that have been selected within the group
    var selectedFaceGroups = [];
    var selectedPictures = [];
    var selectedNames = [];
    var selectedNotes = [];

    //Change Picture when you press next button
    function changePicture() {
        event.preventDefault();
        faceOrNotes = 'face';
        $('#FaceBox').css('background', selectedPictures[x]);
        $('#FaceBox').css('background-size', 'cover');
        $('#FaceBox').css('background-position', 'center');
        $('#FaceBox').css('background-repeat', 'no-repeat');
        $('#FaceBoxText').text("");
        $('#FaceBoxText-notes').text("");
    }

    function changeNote() {
        event.preventDefault();
        faceOrNotes = 'notes';
        $('#FaceBox').css('background', '');
        $('#FaceBoxText').text(selectedNames[x]);
        $('#FaceBoxText-notes').text(selectedNotes[x]);
        $('#FaceBox').attr('class', 'textWindow');
        if (x == selectedNames.length - 1) {
            x = 0;
        } else {
            x = x + 1;
        }
    }
    function runNextFace() {
        if (faceOrNotes == 'face') {
            return changeNote();
        } else {
            return changePicture();
        }
    }

    //get selected groups and load them from the library to the selected groups
    function getSelectedFaceGroups() {
        x = 0;
        selectedFaceGroups = [];
        selectedPictures = [];
        selectedNames = [];
        selectedNotes = [];

        var formFaceVar = document.forms[0];
        var i;
        //loops through each checkbox to see if selected and then adds selected check boxes to the array selectedFaceGroups
        for (i = 0; i < formFaceVar.length; i++) {
            if (formFaceVar[i].checked) {
                selectedFaceGroups.push(formFaceVar[i].value);
            }
        }

        // goes through each selected category
        for (y = 0; y < selectedFaceGroups.length; y++) {
            //checks entire library of person groups to see if selected category is there and then uses the personID to adds pictures from library to selected arrays if it is  
            for (z = 0; z < library_personGroups_groups.length; z++) {
                if (selectedFaceGroups[y] == library_personGroups_groups[z]) {
                    var v = library_personGroups_persons[z];
                    selectedPictures.push(library_persons_pictures[v]);
                    selectedNames.push(library_persons_names[v]);
                    selectedNotes.push(library_persons_notes[v]);
                }
            }
        }
    }

    //load form section function to reload all checkboxes"
    loadGroupsToFaceCards();
    function loadGroupsToFaceCards() {
        for (i = 0; i < library_groups.length; i++) {
            $('#groups').append("<label class='CheckBoxContainer'> " + library_groups[i]
                + "<input type='checkbox' name='categories' value='" + library_groups[i] + "'> <span class='checkmark'></span></label>");
        }
    }

    //****************************************************************************
    //****************************************************************************
    // View / Edit Groups  
    // ***************************************************************************
    // ***************************************************************************

    function addGroup() {
        //gets group name from user and adds group to library_groups and then adds it to the end of the table

        //*******Need to add verification of group name so that user introduce cross-site scripting */
        var newGroup = prompt('Enter group name', 'Enter name here');
        library_groups.push(newGroup);

        //update local storage
        window.localStorage.setItem('library_groups_local', JSON.stringify(library_groups));

        var z = library_groups.length - 1;
        $('#tableGroup').append("<tr id='tr" + z + "'> <td class='span10'> " + newGroup + "</td> <td class='span1'> <button value = '" + z + "'class='btn-edit'> </button> </td> <td class='span1'> <button value = '" + z + "' class='btn-delete'> </button> </td></tr>");

    }

    loadGroups();
    function loadGroups() {
        //builds new group table based on whats in library_groups
        //assigns edit and delete buttons value based on group Id
        console.log('test');
        for (i = 0; i < library_groups.length; i++) {
            $('#tableGroup').append("<tr id='tr" + i + "'> <td id='td" + i + "' class='span10'> " + library_groups[i] + "</td> <td class='span1'> <button value = '" + i + "'class='btn-edit'> </button> </td> <td class='span1'> <button value = '" + i + "' class='btn-delete'> </button> </td></tr>");
        }
    }

    var rowNumber = 0;

    function deleteGroup() {
        //capture row value from button input
        rowNumber = $(this).val();
        var rowValue = '#tr' + rowNumber;
        if (rowNumber == library_groups.length - 1) {
            //use row value to delete the appropriate row the from table 
            $(rowValue).remove();

            //use row value to delete the appropriate row from the library_groups
            library_groups.splice(rowNumber, 1);

            //update local storage
            window.localStorage.setItem('library_groups_local', JSON.stringify(library_groups));

        } else {
            //delete rowValue from array
            library_groups.splice(rowNumber, 1);

            //update local storage
            window.localStorage.setItem('library_groups_local', JSON.stringify(library_groups));

            //first delete all rows currently and then reload all groups
            // this is to avoid the row id in the table to not match the array value
            for (i = 0; i < library_groups.length + 1; i++) {
                var rowValue = '#tr' + i;
                $(rowValue).remove();
            }
            return loadGroups();
        }
    }

    //function edits group name
    function editGroup() {
        //capture row value from button input
        rowNumber = $(this).val();
        var tdValue = '#td' + rowNumber;
        var editedGroup = prompt('Edit group name', library_groups[rowNumber]);

        //update array
        library_groups[rowNumber] = editedGroup;

        //update local storage
        window.localStorage.setItem('library_groups_local', JSON.stringify(library_groups));

        //use row value to edit the appropriate row the from table 
        $(tdValue).html(library_groups[rowNumber]);
    }

    //**********************************************************************************
    //**********************************************************************************
    // View Persons section 
    // *********************************************************************************
    // *********************************************************************************

    //function loadPersons creates a new table for each group of people and adds all listed persons to that group in seperate rows
    //Assigns identifiers to tables based on library_groups and assigns identifiers to table rows based on library_personGroups_groups

    loadPersons();
    function loadPersons() {
        for (j = 0; j < library_groups.length; j++) {
            //add group table header
            var classGroup = 'table' + library_groups[j];
            var classGroupSelector = '.table' + library_groups[j];
            $('#viewGroups').append("<table class='tablePerson " + classGroup + "'><tr><th colspan=3>" + library_groups[j] + " </th></tr> </table>")
            //add persons to each group
            //edit person takes you to edit person link page
            for (i = 0; i < library_personGroups_groups.length; i++) {
                if (library_groups[j] == library_personGroups_groups[i]) {
                    $(classGroupSelector).append("<tr id='tr" + i + "'> <td id='td" + i + "' class='span10'> " + library_persons_names[library_personGroups_persons[i]] + "</td> <td class='span1'> <button value = '" + i + "'class='btn-edit'>  </button>  </td> <td class='span1'> <button value = '" + i + "' class='btn-delete'> </button> </td></tr>");
                }
            }
            //add row for adding a person
            //add person takes you to edit person link
            $('#viewGroups').append("<tr id='trAdd'><td class='tableAddRow span10' colspan=2> Add Person </td> <td class='span2'> <button value= '" + library_groups[j] + "' class='btn-add addPerson'> </button> <td></tr>");
        }
    }

    //function deletePersonsGroup deletes individual from library_personGroups_groups, then deletes all tables, then reloads table with updated library_personGroups_groups using the loadPersons function
    function deletePersonsGroup() {
        //capture row value from button input
        rowNumber = $(this).val();
        var rowValue = '#tr' + rowNumber;
        individualsId = library_personGroups_persons[rowNumber];

        //delete rowValue from array
        library_personGroups_groups.splice(rowNumber, 1);
        library_personGroups_persons.splice(rowNumber, 1);

        //if person no longer is any groups, put them in uassigned
        assignNAtoPersonsGroups();

        //update local storage
        window.localStorage.setItem('library_personGroups_groups_local', JSON.stringify(library_personGroups_groups));
        window.localStorage.setItem('library_personGroups_persons_local', JSON.stringify(library_personGroups_persons));

        // delete all rows with persons in them
        for (i = 0; i < library_personGroups_groups.length + 1; i++) {
            var rowValue = '#tr' + i;
            $(rowValue).remove();
        }
        // delete all table group headers
        for (j = 0; j < library_groups.length; j++) {
            var classGroup = '.table' + library_groups[j];
            $(classGroup).remove();
            $('#trAdd').remove();
        }

        //then reload all rows and persons
        loadPersons();
    }

    function assignNAtoPersonsGroups() {
        //if person no longer is any groups, put them in uassigned
        console.log(individualsId);
        for (i = 0; i < library_personGroups_groups.length; i++) {
            if (library_personGroups_persons[i] == individualsId) {
                return; 
            } else if (i == library_personGroups_groups.length-1) {
                library_personGroups_groups.push('NotAssigned');
                library_personGroups_persons.push(individualsId);
            }
        }
    }

    //**********************************************************************************
    //**********************************************************************************
    // Edit / Add Persons section 
    // ********************************************************************************
    // ********************************************************************************

    //get individuals ID when loading individuals page
    var individualsId = 0;
    function loadIndividualsGroups() {
        //builds new individual tablegroup table based on whats in library_personGroups_groups
        //assigns delete buttons value based on group Id
        for (i = 0; i < library_personGroups_persons.length; i++) {
            if (library_personGroups_persons[i] == individualsId) {
                $('#tableIndividualPersonsGroups').append("<tr id='tr" + i + "'> <td id='td" + i + "' class='span10'> " + library_personGroups_groups[i] + "</td> <td class='span2'> <button value = '" + i + "' class='btn-delete'> </button> </td></tr>");
            }
        }
    }

    function addIndividualGroup() {
        //adds values to the PersonsGroup table...library_personGroups_persons and library_personGroups_groups
        var newIndividualsGroup = $("#addIndividualsGroup").val();
        library_personGroups_groups.push(newIndividualsGroup);
        library_personGroups_persons.push(individualsId);

        //update local storage
        window.localStorage.setItem('library_personGroups_groups_local', JSON.stringify(library_personGroups_groups));
        window.localStorage.setItem('library_personGroups_persons_local', JSON.stringify(library_personGroups_persons));

        //then deletes the table and reloads it
        // delete all rows
        for (i = 0; i < library_personGroups_groups.length + 1; i++) {
            var rowValue = '#tr' + i;
            $(rowValue).remove();
        }
        //reload table
        return loadIndividualsGroups();

    }
    function deleteIndividualGroup() {
        //delete values of the PersonsGroup table...library_personGroups_persons and library_personGroups_groups
        //then deletes the table and reloads it

        //capture row value from button input
        rowNumber = $(this).val();
        var rowValue = '#tr' + rowNumber;

        //delete rowValue from array
        library_personGroups_groups.splice(rowNumber, 1);
        library_personGroups_persons.splice(rowNumber, 1);

        assignNAtoPersonsGroups();

        //update local storage
        window.localStorage.setItem('library_personGroups_groups_local', JSON.stringify(library_personGroups_groups));
        window.localStorage.setItem('library_personGroups_persons_local', JSON.stringify(library_personGroups_persons));

        // delete all rows
        for (i = 0; i < library_personGroups_groups.length + 1; i++) {
            var rowValue = '#tr' + i;
            $(rowValue).remove();
        }

        //then reload all rows and persons
        return loadIndividualsGroups();
    }

    //adds group options to add group on individual page
    for (i = 0; i < library_groups.length; i++) {
        $('#addIndividualsGroup').append('<option>' + library_groups[i] + '</option>');
    }

    // takes user to view / edit person page and loads up that person
    function editPerson() {
        // get value of which person was clicked
        individualsId = library_personGroups_persons[$(this).val()];
        window.localStorage.setItem('individualsID_local', individualsId)
        //takes user to view /edit person page
        window.location.href = 'FaceCardsEditPerson.html';
        //loads up that person
        loadIndividual();
    }

    loadIndividual();
    //takes variable from library_personGroups_persons and loads picture, name, notes, and groups
    function loadIndividual() {
        individualsId = window.localStorage.getItem('individualsID_local');
        // load picture
        $('#FaceBox-EditFace').css('background', library_persons_pictures[individualsId]);
        $('#FaceBox-EditFace').css('background-size', 'cover');
        $('#FaceBox-EditFace').css('background-position', 'center');
        $('#FaceBox-EditFace').css('background-repeat', 'no-repeat');
        $('#FaceBox-EditFace-p').text("");
        $('#FaceBoxText-notes').text("");

        // load name and notes
        $('#FaceBox-EditNotes-name').html(library_persons_names[individualsId]);
        $('#FaceBox-EditNotes').text(library_persons_notes[individualsId]);

        //load groups
        return loadIndividualsGroups();
    }

    //edit persons name and then fill in the page
    function editPersonName() {
        //prompts user for input and then update array
        library_persons_names[individualsId] = prompt("Edit Person's Name", library_persons_names[individualsId]);

        //update local storage
        window.localStorage.setItem('library_persons_names_local', JSON.stringify(library_persons_names));

        //update name on page  
        $('#FaceBox-EditNotes-name').html(library_persons_names[individualsId]);
    }

    //edit persons notes and then fill in the page
    function editPersonNotes() {
        //prompts user for input and then update array
        library_persons_notes[individualsId] = prompt("Edit Person's Notes", library_persons_notes[individualsId]);

        //update local storage
        window.localStorage.setItem('library_persons_notes_local', JSON.stringify(library_persons_notes));

        //update name on page  
        $('#FaceBox-EditNotes').html(library_persons_notes[individualsId]);
    }

    //edit persons pictures 
    function editPersonPicture() {
        //prompts user for input and then update array
        library_persons_pictures[individualsId] = "url(" + prompt("Edit full url of website", library_persons_pictures[individualsId]);

        //update local storage
        window.localStorage.setItem('library_persons_pictures_local', JSON.stringify(library_persons_pictures));

        //update picture on page  
        $('#FaceBox-EditFace').css('background', library_persons_pictures[individualsId]);
        $('#FaceBox-EditFace').css('background-size', 'cover');
        $('#FaceBox-EditFace').css('background-position', 'center');
        $('#FaceBox-EditFace').css('background-repeat', 'no-repeat');
        $('#FaceBox-EditFace-p').text("");
        $('#FaceBoxText-notes').text("");
    }

    //use a series of prompts to get info about new person
    function addPerson() {
        //create new individual ID and put at end of persons table
        individualsId = library_persons_names.length + 1;

        //update local storage with new individualID
        window.localStorage.setItem('individualsID_local', individualsId)

        //adds values to the PersonsGroup table...library_personGroups_persons and library_personGroups_groups
        var newIndividualsGroup = $(this).val();
        library_personGroups_groups.push(newIndividualsGroup);
        library_personGroups_persons.push(individualsId);

        //update local storage
        window.localStorage.setItem('library_personGroups_groups_local', JSON.stringify(library_personGroups_groups));
        window.localStorage.setItem('library_personGroups_persons_local', JSON.stringify(library_personGroups_persons));

        editPersonName();
        editPersonNotes();
        editPersonPicture();

        //takes user to view /edit person page
        window.location.href = 'FaceCardsEditPerson.html';
    }


    //deletes person from person db and personGroups db
    function deletePerson() {
        var x = prompt('type "yes" to confirm', 'type yes here');
        if (x == "yes") {
            //delete invidiuals from all persons tables and personGroups tables
            library_persons_pictures.splice(individualsId, 1);
            library_persons_names.splice(individualsId, 1);
            library_persons_notes.splice(individualsId, 1);

            //loop through persons groups and delete all rows with the person in it
            for (i = 0; i < library_personGroups_groups.length + 1; i++) {
                if (library_personGroups_persons[i] == individualsId) {
                    library_personGroups_groups.splice(i, 1);
                    library_personGroups_persons.splice(i, 1);
                }
            }

            //update local storage
            window.localStorage.setItem('library_personGroups_groups_local', JSON.stringify(library_personGroups_groups));
            window.localStorage.setItem('library_personGroups_persons_local', JSON.stringify(library_personGroups_persons));
            window.localStorage.setItem('library_persons_pictures_local', JSON.stringify(library_persons_pictures));
            window.localStorage.setItem('library_persons_notes_local', JSON.stringify(library_persons_notes));
            window.localStorage.setItem('library_persons_names_local', JSON.stringify(library_persons_names));

            //takes user to view Persons page
            window.location.href = 'FaceCardsPersons.html';
        }

    }

    //**********************************************************************************
    //**********************************************************************************
    // Buttons that call functions
    // ********************************************************************************
    // ********************************************************************************

    // Buttons on FaceCards page
    $('#nextFace').click(runNextFace);
    $('#groups').change(getSelectedFaceGroups);
    $('.formSection').on('change', '#groups', getSelectedFaceGroups);


    //Buttons on FaceCardsGroups page
    $('#addGroup').click(addGroup);
    $('#tableGroup').on('click', '.btn-delete', deleteGroup);
    $('#tableGroup').on('click', '.btn-edit', editGroup);

    //buttons on FaceCardsPersons page
    $('#viewGroups').on('click', '.btn-delete', deletePersonsGroup);
    $('#viewGroups').on('click', '.btn-edit', editPerson);
    $('#viewGroups').on('click', '.addPerson', addPerson);

    //buttons on FaceCardsEditPerson page
    $('#addIndividualsGroup').change(addIndividualGroup);
    $('#tableIndividualPersonsGroups').on('click', '.btn-delete', deleteIndividualGroup);
    $('#FaceBox-EditFace').on('click', '.btn-edit', editPersonPicture);
    $('#btn-faceBox-name').click(editPersonName);
    $('#btn-faceBox-notes').click(editPersonNotes);
    $('#btn-restoreDefaults').click(restoreDefaultFaceCards);
    $('#btn-faceBox-deletePerson').click(deletePerson);
})

   //**********************************************************************************
    // LEFT OFF HERE
    // ********************************************************************************


