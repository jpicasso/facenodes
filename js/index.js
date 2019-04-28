$(document).ready(function () {


    // initializes array variables and gets the number of words in the array
    var dictionaryCat1 = ["Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","Numbers","family","Dates/time","Food","Food","Dates/time","Dates/time","Dates/time","In a room","Dates/time","Dates/time","In a room","Dates/time","Dates/time","Dates/time","Verbs","Dates/time","Getting Around","Getting Around","Dates/time","Basics","Dates/time","Dates/time","Activities","Dates/time","Basics","Dates/time","Food","Dates/time","Getting to Know You","Getting to Know You","Dates/time","Dates/time","Dates/time","In a room","In a room","Dates/time","Dates/time","Dates/time","Getting to Know You","family","in a room","Getting to Know You","Food","Food","Dates/time","Getting Around","Getting Around","family","In a room","Getting Around","Work","Colors","In a room","Colors","in a room","Getting to Know You","Work","family","family","Color","Color","Activities","Getting to Know You","Basics","Food","Food","Food","in a room","family","Getting to Know You","Food","Food","Food","Food","In a room","Food","Food","Small talk","Verbs","in a room","Colors","in a room","Work","Activities","Food","In a room","Getting to Know You","family","Work","Food","Color","Dates/time","Dates/time","Dates/time","Dates/time","Verbs","Getting to Know You","Getting Around","Food","Work","Food","Food","Dates/time","Getting to Know You","Dates/time","Getting to Know You","Getting to Know You","in a room","Work","in a room","Dates/time","Food","Feelings","Getting Around","Getting Around","Verbs","Getting to Know You","Work","Work","family","family","Getting Around","family","family","Getting to Know You","Dates/time","Getting to Know You","Activities","Food","Food","Food","Getting to Know You","Dates/time","Food","Food","Dates/time","family","Dates/time","Food","family","family","Dates/time","Getting to Know You","Dates/time","Dates/time","Getting to Know You","family","family","Food","Colors","Color","Getting to Know You","Color","Fill in","Getting to Know You","Food","Getting to Know You","In a room","family","In a room","Getting to Know You","Getting to Know You","Getting to Know You","Getting Around","Work","Small talk","Getting Around","Food","Getting to Know You","Getting Around","Small talk","Work","Getting to Know You","Small talk","Small talk","family","Getting to Know You","Food","Work","Feelings","Feelings","Work","Feelings","Feelings","Feelings","Getting Around","Work","Food","Work","getting around","Getting around","Getting to Know You","getting around","Getting to Know You","Getting to Know You","Feelings","Getting to Know You","Getting Around","Getting to Know You","Getting Around","Work","Getting Around","Dates/time","Dates/time","Dates/time","Dates/time","Dates/time","Dates/time","Dates/time","Dates/time","Getting Around","Getting to Know You","Getting to Know You","Feelings","Dates/time","Dates/time","Dates/time","Getting Around","Basics","Getting to Know You","Small talk","Small talk","Time","Work","Small talk","Food","Basics","Dates/time","Small talk","Small talk","Dates/time","Small talk","Dates/time","Small talk","In a room","Dates/time","Food","Dates/time","Dates/time","Food","Dates/time","Dates/time","Dates/time","Dates/time","Getting to Know You","family","Food","Color","Getting to Know You","Food","Basics","in a room","in a room","family","Getting Around","Dates/time","In a room","Dates/time","Basics","Food","Basics","Dates/time","Food","Basics","in a room","Basics","Dates/time","Dates/time","Work","Dates/time","Getting to Know You","Basics","Basics","Basics","Getting to Know You","in a room","Getting to Know You","Getting to Know You","Dates/time","Getting to Know You","Outdoor nouns","Getting Around","Getting to Know You","family","Dates/time","Getting Around","Dates/time","Getting to Know You","Food","Basics","Dates/time","Dates/time","Dates/time","Basics","Getting Around","Dates/time","Food","Food","Food","In a room","Feelings","In a room","Activities","Food","Dates/time","family","Food","Color","Fill in","Getting to Know You","Getting Around","Getting Around","Food","Food","Food","Color","in a room","Small talk","Small talk","Feelings","in a room","Color","Food","Food","Getting Around","family","Work","Basics","Food","Dates/time","Food","Food","Dates/time","Work","Dates/time","Outdoor nouns","Dates/time","Getting around","Food","Dates/time","Feelings","In a room","In a room","Food","Getting to Know You","Food","Feelings","Food","In a room","Dates/time","Dates/time","Getting around","Getting to Know You","In a room","Color","family","in a room","In a room","in a room","family","Basics","in a room","Food","Basics","Dates/time","Food","in a room","In a room","getting around","Food","Getting Around","In a room","Dates/time","Dates/time","Food","Feelings","Feelings","In a room","in a room","Feelings","Getting Around","Dates/time","getting around","Dates/time","Getting to Know You","Dates/time","Dates/time","Dates/time","Getting to Know You","Dates/time","In a room","Dates/time","Verbs","Getting to Know You","Getting to Know You","Verbs","Fill in","Feelings","Feelings","Food","Getting to Know You","Food","Getting to Know You","Activities","Feelings","Food","Verbs","Verbs","Verbs","Verbs","Food","Verbs","Food","Verbs","Verbs","Work","Work","Verbs","Food","Food","Food","Feelings","Verbs","Feelings","Feelings","getting around","Verbs","Food","Getting to Know You","Feelings","Feelings","Getting to Know You","Getting to Know You","Verbs","Feelings","Verbs","Feelings","Verbs","Verbs","Verbs","Verbs","Verbs","Work","Getting Around","Verbs","Verbs","Verbs","Verbs","Verbs","Verbs","Work","Verbs","Verbs","Feelings","Feelings","Feelings","Food","Verbs","Verbs","Verbs","Verbs","Verbs","Verbs","Verbs","Feelings","family","Food","Getting Around","Getting Around","Verbs","Work","Verbs","Dates/time","Dates/time","Dates/time","family","Food","Dates/time","Dates/time","Dates/time","Dates/time","Getting to Know You","Basics","Food","Dates/time","Food","Food","Getting to Know You","Small talk","family","Getting to Know You","Basics","Dates/time","Work","Food","Getting to Know You","in a room","in a room","in a room","in a room","Color","work","work","Small talk","Dates/time","Basics","Work","Small talk","family","Dates/time","Work","Getting to Know You","Food","Dates/time","Getting Around","Getting Around","Dates/time","Work","Work","Getting Around","Dates/time","Getting to Know You","Getting to Know You","Small talk","Getting to Know You","Dates/time","Getting to Know You","Getting Around","Getting Around","Color","Food","Work","Dates/time","Dates/time","Getting to Know You","Feelings","In a room","Work","Color","Dates/time","Basics","Basics","family","Family","Getting Around","Work"];

    var englishDictionary = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","30","31","32","40","50","60","70","80","90","100","101","200","201","300","400","500","600","700","800","900","1000","1101","2000","10000","1000000","2000000","1000000000","'great' (before noun); big (after noun)","a day","a diet","a diet high in proteins and carbohydrates","a half hour","a minute","a month","a pair of shoes","a quarter of an hour","a second","a silk dress","a week","a week from today","a year","a yoga class","about 8:00","across form, opposite","address","after 7:00","again","ago","all year long","amusements","an hour","and","Any other time","apple","April","are you from…?","arm","around 8:00","at about 2:00","at exactly 9:00","at home","at my house","at what time?","August","autumn, fall","back","bad","bag","beautiful","beef","beer","before 9:00","behind","behind","beloved, dear","belt","between","bill","black ","blouse","blue","body","boring","boss","boyfriend/girlfriend","brother/sister","brown dark","brown","bullfight","busy","but ","Can I see the menu?","carbohydrates","carbonated mineral water","cassette recorder","charming","chest","chicken","chicken","chicken cooked in cider","chops","clothing","codfish","coffee","cold (weather)","collected","color tv","colors","compact disc","company","competitions, contests","corn purée","cotton","country","cousin","customer","daily special","dark","day","day after tomorrow","day before yesterday","December","desear","difficult","directions","dish","do they speak spanish","drinks","duck","during","ear","early ","early riser","easy","electronic equipment","employee","equipment","eve","Everything smells good.","excellent","excuse me","excuse me (when you have caused harm)","exercise","eye","factory","factory worker","family","family relationships","far","father/mother","favorite","feat","February","finger","fireworks","fish","fish/seafood","food","foot","For the one hour","fowl","fresh","Friday","friend","from","fruits","godfather/godmother","good","good afternoon","Good bye","good evening/ good night","good morning","good/okay","grandfather/grandmother","grandson/granddaughter","grapes","gray","green","Greetings","grey","guarantee","hair","ham","hand","handkerchief","happy","hat","head","health","Hello!","here","he is looking for a job","hot (weather)","hotel","house speciality","how are you?","how can I help you","How many degrees is it?","how much do you earn a year?","How is it going?","humid","humidity","husband/wife","I am from…","I am hungry","I am not working on Saturday","I don’t think (so).","I do not believe (so).","I do not work on Saturdays","I feel fatigued / tired","I feel well.","I like this model a lot ","I need information","I rest on Saturdays","I want","I work a lot but I do not earn a lot","I would like to try it on","I will be right back.","I am fine","I am going to try it on","I am happy","I am ill","I am interested in video equipment","I am sad","I am sorry","I am tired","I am very grateful to you","important","in","in a while","in an hour","in July","in summer","in th emorning","in the afternoon","in the evening","In the morning","information","interesting","introductions","it appears modern to me","It is 1:30","It is 20 before 5","It is 4:40","It is a first class hotel","It is a good idea. ","It is a pleasure to meet you","It is cold.","It is hot.","It is me","It is necessary","It is nice (bad) weather.","It is not a problem","It is not a problem.","It is one o clock","It is raining.","It is snowing.","It is so late","It is sunny.","It is two o clock","It is windy.","jacket","January","juices","July","June","lamb","last","last (in a series)","late","late (in arriving)","leg","lets see","lettuce","light","likes and dislikes","list","long","loudspeakers","machine","man/woman","map","March","materials","May","maybe","meats","menu","midnight","milkshakes","Miss","model","modern","Monday","Monday and tuesday are vacation days","monthly ","months","mouth","Mr.","Mrs.","much, many, a lot","music","music equipment","My name is John","My name is John","my watch says that It is three o clock","name is","narrow alleyways","near","neck","nephew/niece","next","next (door) to","noon","nose","nothing else","nothing else, nothing more","November","Now","October","of","on the corner","one hour ago","onion","onion","orange","overcoat","pain","pants","parades","pato","per","person","pineapple","pink","plan","pleasant","please","please repeat that","pork","potato","proteins","purple","radio","raincoat","rainy","ready","record player","red","red wine","refried beans","restaurant","reunited, together","salary","salesman","salmon","Saturday","sausage","seafood","seasons","secretary","See you tomorrow","senior citizens home","September","seriously wounded","service","sharp, on the dot","she likes those","shirt","shoes","shopping cart","shoulder","shrimp","sick, ill","sign","silk","Since 8:00","since what time?","situated","skin","skirt","sky blue","small","small box","socks","soft drink","son/daughter","song","sound equipment","soup of the day","special","spring","steak","stereo","stockings","store","strawberry","street","suit","summer","Sunday","supermarket","sure","surely","sweater","television set","terrible","thank you","the day after tomorrow","the department store","the fall","The pleasure is mine","the spring","the summer","the winter","throat","Thursday","tie","time of day, hour","to accept","To be (permanently)","To be (temporary)","to be able, can ","to be careful","to be cold","to be hot","to be hungry","to be in style","to be on a diet","to be pleasing to","to be present at, to witness this event","to be sure","to be thirsty","to begin, commence","to believe","to buy","to call","to cost","to die","to dine, to eat dinner","to do, to make","to drink","to earn","to earn a living","to eat","to eat breakfast","to eat lunch","to eat lunch","to enjoy","to exercise","to feel (health)","to feel like (doing something)","to find, to meet","to go shopping","to have an alcoholic drink","to have an appointment date","to have fever","to have pains","to have plans","to have time","to have to ","to interest","to invite","to lack","to lead (also, to drive)","to leave","to listen to","to live","to look for","to look for a job","to need","to need","to need to, must, ought to","to open","to read","to receive","to rest","to rest","to return","to run","to seem","to seem, appear cheap","to seem, appear expensive","to shop","to shop","to show","to sleep","to smell","to smoke","to speak","to study","to suffer","to take care of the children","to take, to drink, to eat","to the left (of)","to the right (of)","to wear","to work","to write","today","today","Today is monday","together","tomato","tomorow morning","tomorrow","tomorrow afternoon","tomorrow night","tongue","too, also","tossed salad","Tuesday","tuna","tuna","ugly","umbrella(s)","uncle/aunt","unpleasant","until","until 10:00","vaction","vegetables","very","video","video equipment","video recorder","video recorder / machine","violet","waiter","waitress","warm, hot","watch, clock","water","we listen to music","weather","wedding","Wednesday","weekly","welcome!","What are you drinking?","What day is it?","what is the address of the hotel?","what is the restaurant like?","What is todays date?","what is your boss like?","what is your job like","What kind of hotel is it?","What time is it?","Whats going on?","Whats new?","whats the weather like?","Whats your name?","when?","Where are you from?","where is the hotel","which is the better of the two?","white","white wine","Who is your boss?","why?","winter","with","without doubt","wool","work","yellow","yesterday","you (formal)","you (plural)","young person/ young people","your nephew is going to like it a lot","your welcome","you are studying spanish"];

    var spanishDictionary = ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve","veinte","veintiuno","veintidós","veintitrés","treinta","treinta y uno","treinta y dos","cuarenta","cincuenta","sesenta","setenta","ochenta","nuventa","cient, ciento","ciento uno","doscientos (~as)","doscientos uno","trescientos","cuartrocientos","quinientos","seiscientos","setecientos","ochocientos","nuvecientos","mil","mil ciento uno","dos mil","diez mil","un millón","dos millones","un billón; mil millones","grande","un día","una dieta","una dieta alta en proteínas","una media hora","un minuto","un mes","un par de zapatos","un cuarto de hora","un segundo","un vestido de seda","una semana","de hoy en una semana","un año","una clase de yoga","cerca de las ocho","enfrente de","la dirección","después de las siete","otra vez","hace ","todo el año","diversiones","una hora","y","Son las","manzana","abril","es usted de","brazo","más o menos las ocho","a eso de las dos","a las nueve en punto","en casa","en mi casa","¿a qué hora?","agosto","otoño","espalda","malo","bolsa","bonito","la carne de res","cerveza","antes de las nueve","Detrás de","delante de","querido","el cinturón","entre","cuenta","negro","blusa","azul","el cuerpo","aburrido","el jefe","novio/novia","hermano/hermana","café","marrón","las corridas de toros","ocupado","pero","¿Puedo ver el menú?","carbohidratos","gaseosa","grabadora para cintas","encantador","pecho","pollo","gallo, pollo","gallo en chicha","chuletas","ropa","bacalao","el café","el frío","recaudado (recaudar)","televisor de color","colores","disco compacto","compañia","concursos","puré de maíz","el algodón","el país","primo/prima","el/la cliente","plato del día","oscuro","día","pasado mañana","anteayer","diciembre","to want, to desire, to wish","dificil","direcciones","plato","Hablan español?","bebidas","pato","durante","oreja","temprano","madrugador","fácil","aparatos electrónicos","empleado","equipo","la víspera","Todo huele bien.","excelente","permiso","perdón / perdóneme / disculpe / dispense","ejercicio","ojo","fábrica","operario","familia","parentescos","lejos","padre/madre","favorito","hazaña","febrero","dedo","fuegos artificiales","pescado","pescado/mariscos","comida","el pie","Es la una","aves","fresco","Viernes","amigo/amiga","desde","frutas","padrino/madrina","bueno","buenas tardes","Adiós","buenas noches","Buenos días","Bueno","abuelo/abuela","nieto/nieta","uvas","gris","verde","saludos","gris","garantía","cabello","el jamón","la mano","un pañuelo","contento","sombrero","cabeza","la salud","Hola","aquí","busca un trabajo","el calor","el hotel","especialidad de la casa","Cómo estás?","¿En qué peudo servirle?","¿Cuántos grados hace?","Cuánto gana por año?","Qué tal","húmedo","humedad","esposo/esposa","Soy de","tengo hambre","No trabajo el sábado.","No creo.","No creo.","No trabajo los sábados.","Me siento fatigada.","Me siento bien.","me gusta mucho este modelo","Necesito información","los sabados descanso","Quiero","Trabajo mucho pero no gano mucho","deseo probármelo","Vuelvo en seguida.","estoy bien","voy a probármelo","estoy contento","estoy mal","me interesa el equipo de video","estoy triste","lo siento","estoy cansado","Le estoy muy agradecido","importante","en","dentro de un rato","en una hora","en julio","en verano","por la mañana","por la tarde","de la noche","de la mañana","información","interesante","presentaciones","me parece moderno","Es la una y media","Son las cinco menos viente","Son las cuatro y cuarenta","Es un hotel de primera clase","Es una buena idea.","Mucho gusto","Hace frío.","Hace calor.","soy yo","es necesario","Hace buen (mal) tiempo.","no es problema","No es problema.","Es la una","Llueve.","Nieva","es tan tarde","Hace sol.","Son las dos","Hace viento.","chaqueta","enero","jugos","julio","junio","cordero","pasado","último","tarde","de retraso","pierna","vamos a ver","lechuga","claro","gustos","lista","largo","alto-parlantes","máquina","hombre/mujer","el mapa","marzo","telas","mayo","tal vez","carnes","el menú","la medianoche","batidos","Señorita","modelo","moderno","Lunes","Lunes y martes son día de vacaciones.","por año","meses","boca","Señor","Señora","Mucho","música","equipo de música","me llamo John","Mi nombre es","en mi reloj, son las tres","llamarse","angostas callejuelas","cerca","cuello","sobrino/sobrina","próximo","al lado de","el mediodía","la nariz","nada más","nada más","noviembre","ahora","octubre","de","en la esquina","hace una hora","cebolla","cebolla","naranja","abrigo","dolor","los pantalones","desfiles","duck","por","persona","piña","rosado","el plan","simpático","por favor","repita, por favor","puerco","patata (Spain) / papa","proteínas","morado","a radio","el impermeable","lluvioso","listo,-a","tocadiscos","rojo","vino tinto","frijoles refritos","el restaurante","reunido","salarío","vendedor","el salmón","sábado","chorizo","mariscos","estaciones","secretario","hasta manana","el hogar de ancianos","septiembre","herido de seriedad","servicio","en punto","a ella le gustan ésos","camisa","zapatos","carrito","hombro","los camarones","enfermo","aviso","seda","desde las ocho","¿desde qué hora?","situada","la piel","falda","celeste","pequeño","cajita","los calcetines","refresco","hijo/hija","canción","equipo de sonido","sopa del día","especial","primavera","el bistec","estereofónico","las medias","tienda","fresa","el calle","el traje","verano","domingo","supermercado","seguro,-a","seguramente","el suéter","televisor","terrible","gracias","pasado mañana","el almacén","el otoño","el gusto es mío","la primavera","el verano","el invierno","garganta","jueves","corbata","la hora","aceptar","ser","estar","poder (o>ue)","tener cuidado","tener frío","tener calor","tener hambre","estar de moda","seguir una dieta","gustar","presenciar este suceso","estar seguro","tener sed","comienzan (comenzar)","creer","comprar","llamar","costar (o>ue)","morir (o>ue)","cenar","hacer","beber","ganar","ganarse la vida","comer","tomar el desayuno","almorzar (o>ue)","tomar el almuerzo","encantar","hacer ejercicios","sentirse","tener ganas de (+ infinitive)","encontrar (o>ue)","ir de compras","tomar un trago","tener una cita","tener fiebre","tener dolores en/de","tener planes","tener tiempo","tener que","interesar","invitar","falta / hacer falta","conducen (conducir)","partir","escuchar","vivir","buscar","buscar un trabajo","necesitar","necesitar","deber","abrir","leer","recibir","descansar","descansar","volver (o>ue)","correr","parecer","parecer barato","parecer caro","hacer compras","hacer compras","mostrar (o>ue)","dormir (o>ue)","oler (o>ue)","fumar","hablar","estudiar","sufrir","cuidar a los niños","tomar","a la izquierda (de)","a la derecha (de)","llevar/usar","trabajar","escribir","hoy","hoy","Hoy es lunes","junto","el tomate","mañana por la mañana","mañana","mañana por la tarde","mañana por la noche","lengua","tambien","ensalada mixta","martes","el atún","el atún","feo","el/los paraguas","tío/tía","antisimpático","hasta","hasta las diez","vacaciones","verduras / las legumbres","muy","video","equipo de video","video-grbadora","máquina filmadora","violeta","mesero","mesera","caliente","el reloj","el agua","Escuchamos música","el tiempo","boda","miércoles","por semana","Bienvenido","¿Qué toma?","¿Qué día es hoy?","Cuál es la dirección del hotel?","Cómo es el restaurante?","¿Cuál es la fecha de hoy?","Cómo es su jefe?","Cómo es su trabajo?","Qué tipo de hotel es?","¿Qué hora es?","Qué pasa","Qué hay de nuevo","¿Qué tiempo hace?","?cómo te llamas?","cuándo?","De donde eres","Dónde está el hotel?","Cuál es el mejor de los dos?","blanco","vino blanco","Quién es su jefe?","por qué?","invierno","con","sin duda","lana","trabajo","amarillo","ayer","Usted","ustedes","joven/jóvenes","a su sobrino le va a gustar mucho","de nada","estudias español"];

    // creates dropdown options
    var stackOptions = [3, 4, 5, 6, 7, 8, 9, 10, "all"];
    for (var i = 0; i < 9; i++) {
        $('#btn-stackSize').append('<option>' + stackOptions[i] + '</option>');
    }

    // // creates checkbox options
    // var checkBoxOptions = ["Getting Around","Food & Drinks", "Numbers", "Family","Dates/time","Color", "Activities", "Basics", "Work", "Getting to Know You", "In a room", "Feelings", "Small talk", "Verbs","Outdoor Nouns"];
    
    // for (var i = 0; i < checkBoxOptions.length; i++) {
    //     $('#categories').append('<label><input type="checkbox" name="categories" value="' +  checkBoxOptions[i] + '>' + checkBoxOptions[i] + '</label><br>');
    //     console.log('checkbox options ran')
    // }


    var englishToSpanish = 'english';
    var spanishWords = [];
    var englishWords = [];
    var spanishStack = [];
    var englishStack = [];
    var stackSize = "all";
    var stackStart = 0;
    var selectedCategories = [];
    var x = 0;
    var currentLang = "english";
    var numberOfWords = spanishWords.length;
    var dictionaryLength = englishDictionary.length;
    var score = 0;
    var outOf = 0;

    function getSelectedCategories() {
        selectedCategories = [];
        var formVar = document.forms[0];
        var i;
        console.log('getSelectedCategories ran');
        //loops through each checkbox to see if selected and then adds selected check boxes to the array
        for (i = 0; i < formVar.length; i++) {
            if (formVar[i].checked) {
                selectedCategories.push(formVar[i].value);
            }
        }
        console.log("User selected " + selectedCategories);
    }

    function selectCategories() {
        //creates array of categories based on user submit button from categories selected
        getSelectedCategories();
        console.log('selectCategories ran');
        spanishWords = [];
        englishWords = [];
        // goes through each selected category
        for (y = 0; y < selectedCategories.length; y++) {
            //checks entire dictionary if selected category is there and then adds word from dictionary to flashcard arrays if it is  
            console.log('test');
            for (z = 0; z < dictionaryLength; z++) {
                if (selectedCategories[y] == dictionaryCat1[z]) {
                    spanishWords.push(spanishDictionary[z]);
                    englishWords.push(englishDictionary[z]);
                }

            }
        }
        numberOfWords = spanishWords.length;
        x = 0;
        console.log(spanishWords);
        console.log(englishWords);
        if (englishToSpanish == "english") {
            $('h5').text(englishWords[x]);
        } else {
            $('h5').text(spanishWords[x]);
        }
        getStackSize();
        $('#wordsLoaded').html('Your vocab card box has ' + numberOfWords + ' words in it');
        
    }

    // function loadWords() {
    //     //loads appropriate words from database into JSON arrays
    // }



    function nextFunction() {
        // nextFunction changes the word to the next word
        // it then switches the next buttons to a check mark and x button and back depending on if in spanish or english
        console.log('next function ran');
        event.preventDefault();
        $('#nextSection').hide();
        $('#checkSection').show();
        $('#spanishBox').css('background', 'rgb(220, 230, 242)');
        return changeWord();
    }

    function changeWord() {
        if (currentLang == "english" && englishToSpanish == "english") {
            $('h5').text(spanishStack[x]);
            console.log(spanishStack[x]);
            currentLang = "spanish";
            if (x < stackSize - 1) {
                x = x + 1;
                console.log('engligh/english....x = ' + x);
            } else {
                x = 0;
            }
        } else if (currentLang == "spanish" && englishToSpanish == "spanish") {
            $('h5').text(englishStack[x]);
            currentLang = "english";
            if (x < stackSize - 1) {
                x = x + 1;
                console.log('spanish/spanish....x = ' + x);
            } else {
                x = 0;
            }
        } else if (englishToSpanish == 'english') {
            $('h5').text(englishStack[x]);
            currentLang = "english";
            console.log('just english....x = ' + x);
        } else {
            $('h5').text(spanishStack[x]);
            currentLang = "spanish";
            console.log('just spanish....x = ' + x);
        }
    }

    function checkMark(answer) {
        // if check mark is pressed then it adds one correct to the counter and calls next function
        // if x mark is check is pressed then it adds one incorrect to the counter and calls the next function

        event.preventDefault();
        $('#nextSection').show();
        $('#checkSection').hide();
        $('#spanishBox').css('background-color', 'white');
        console.log(answer);
        console.log(answer.data.param1);

        if (answer.data.param1 == "right") {
            score = score + 1;
        }
        outOf = outOf + 1;
        console.log('checkMark function ran');
        console.log(score);
        console.log(outOf);
        $('#scorecard').html('# correct: ' + score + ' out of ' + outOf);
        return changeWord();
    }


    function switchLanguage() {
        //switches starting language from english to spanish and back
        //changeds starting button function from check mark to next or vice versa
        if (englishToSpanish == "english") {
            $('h5').text(spanishWords[x]);
            currentLang = 'spanish';
            englishToSpanish = "spanish";
            $('#engToSpanish').html('Spanish to English');
        } else {
            $('h5').text(englishWords[x]);
            currentLang = 'english';
            englishToSpanish = 'english';
            $('#engToSpanish').html('English to Spanish');
        }

    }

    function getStackSize() {
        // collects and saves input from btn-stackSize dropdown as stackSize
        stackStart = 0;
        spanishStack = [];
        englishStack = [];
        stackSize = $("#btn-stackSize").val();
        console.log(stackSize);
        if (stackSize == 'all'|| stackSize == "Stack Size") {
            stackSize = numberOfWords;
        }
        console.log('stackSize = ' + stackSize);
        return loadStack();
    }
    function loadStack() {
        // takes first x number of words from spanishwords and loads to spanish stack...do this for english stack as well
        if (stackStart >= numberOfWords) {
            stackStart = 0;
        } else if (stackStart >= numberOfWords - stackSize) {
            stackStart = numberOfWords - stackSize;
        }
        for (i = 0; i < stackSize; i++) {
            spanishStack[i] = spanishWords[stackStart];
            englishStack[i] = englishWords[stackStart];
            stackStart = stackStart + 1;
        }
        console.log('Load Stack Finished');
        console.log(spanishStack);
        console.log('stackSize = ' + stackSize);
        console.log('stackStart = ' + stackStart);
        console.log('numberOfWords= ' + numberOfWords);
    }

    // function nextStack() {
    //     // changes loadstack starting place and then calls loadStack

    // }

    // Buttons that call functions
    $('#next').click(nextFunction);
    $('#correct').click({ param1: "right" }, checkMark);
    $('#wrong').click({ answer: "wrong" }, checkMark);
    $('#engToSpanish').click(switchLanguage);
    $('#categories').change(selectCategories);
    $('#btn-stackSize').change(getStackSize);
    $('#nextStack').click(loadStack);




})


