$(document).ready(function () {


    // initializes array variables and gets the number of words in the array
    var dictionaryCat1 = ['First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','First 30 words','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Describing People','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Activities','Drinks','Drinks','Drinks','Drinks','Drinks','drinks','drinks','drinks','drinks','drinks','drinks','Describing People','More Basics','More Basics','More Basics','More Basics','More Basics','More Basics','More Basics','More Basics','More Basics','More Basics','More Basics','More Basics','More Basics','More Basics','More Basics','More Basics','More Basics','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Fruits/Veggies','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','Meat/Fish','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','More food!','Food actions','Food actions','Food actions','Food actions','Food actions','Food actions','Food actions','Food actions','Food actions','Food actions','Food actions','Food actions','Food actions','Food actions','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Numbers','Weather','Weather','Weather','Weather','Weather','Weather','Weather','Weather','Weather','Weather','Weather','Weather','Weather','Weather','Weather','Weather','Weather','Weather','other','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','Verbs','verbs','verbs','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Work','Colors','Colors','Colors','Colors','Colors','Colors','Colors','Colors','Colors','Colors','Colors','Colors','Colors','Colors','Colors','Colors','Colors','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Dates/time','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','getting around','Getting around','getting around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting around','Getting around','getting around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','Getting Around','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','family','Family','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','Feelings','activities','activities','activities','Food - general','Food - general','Food - general','Food','Food','Food','Food - general','Food - general','Food - general','Food - general','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','Small talk','In a room','In a room','In a room','In a room','in a room','In a room','In a room','in a room','in a room','In a room','in a room','in a room','In a room','in a room','in a room','In a room','In a room','In a room','in a room','in a room','In a room','in a room','in a room','In a room','In a room','in a room','in a room','In a room','In a room','In a room','In a room','in a room','In a room','in a room','in a room','In a room','In a room','In a room','in a room','In a room','in a room','in a room','in a room','in a room','In a room','Outdoor nouns','Outdoor nouns','Time','Work','Work','Things','Activities*','Activities*','Activities*','Activities*','Activities*','Activities*','Fill in','Fill in','Fill in'];
    var englishDictionary = ['hi','yes','no','thank you','excuse me','please','sorry','to the left ','to the right ','straight','here','there','turn around','water','beer','wine','bathroom','food','i dont speak spanish','do you speak english','how much does this cost','can you take my picture?','i need','i want','you','i','us','them','goodbye','How do you say hello in spanish?','I feel tired','I feel sick','are you upset?','are you sad?','tired','sick','upset','sad','happy','scared','angry','confused','embarassed','I am hungry','I am tall','I am short','I am average height','average','Skinny','Fat','I am average weight','pretty','ugly','you are pretty','Mr.','Mrs.','Miss','small','large','long','I want to dance','I like to dance','Do you want to dance with me?','I want to party','to run','to walk','to sail','to hike','to bike','to lift weights','to play','I want to play basketball','soccer','football','tennis','golf','baseball','hockey','lacross','volleyball','rowing','ping pong','I like to ski','I like to surf','to exercise','to go shopping','I dont want to fight','chess','video games','cards','coffee','drinks','juices','milkshakes','red wine','white wine','cocktails','beer','water','soda','soft drink','you (formal)','again','and','but ','It is a good idea. ','It is not a problem.','no thank you','maybe','you (plural, formal)','modern','much, many, a lot','nothing more','of','salesman','song','special','too, also','until','apple','banana','berry','blue berry','rasberry','fruits','corn','grapes','lettuce','lemon','lime','onion','orange','pineapple','pickels','potato','refried beans','spinach','strawberry','tomato','tossed salad','vegetables','cucumber','jalapeno','carrots','mushrooms','peppers','onions','beef','bacon','meatball','pepperoni','sausage','lamb','chicken','codfish','duck','filet mignon','fish','ham','hamburger','meats','pork','proteins','salmon','seafood','shrimp','steak','tuna','egg','roast beef','hot dog','pizza','taco','crab','lobster','turkey','wheat bread','white bread','Can I see the menu?','dish','This is very good','That was very good','food','fowl','fresh','house speciality','I am hungry','I want','It is not a problem','list','nothing else','service','shopping cart','sign','soup of the day','supermarket','restaurant','a diet','cheese','swiss cheese','sandwich','pasta','bread','rice','mayo','mustard','guacamole','ketchup','oil and vinegar','oregano','pepper','salt','sauce','to be hungry','to be on a diet','to be thirsty','to cost','to dine, to eat dinner','to eat breakfast','to eat lunch','to eat lunch','to have an alcoholic drink','to shop','to eat','I ate a hamburger','to take, to drink, to eat','What are you drinking?','0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','30','31','40','50','60','70','80','90','100','101','200','201','300','400','500','600','700','800','900','1000','1101','2000','10000','1000000','2000000','1000000000','money','cold (weather)','hot (weather)','How many degrees is it?','humid','humidity','It is cold.','It is hot.','It is nice (bad) weather.','It is raining.','It is snowing.','It is sunny.','It is windy.','raincoat','rainy','umbrella(s)','warm, hot','weather','whats the weather like?','collected','to want, to desire, to wish','to accept','to be able, can ','to begin, commence','to believe','to watch','to touch','to buy','to call','to die','to do, to make','to drink','to eat','to have to ','to invite','to lead (also, to drive)','to leave','to listen to','to live','to look for','to need to, must, ought to','to open','to read','to receive','to rest','to return','to run','to show','to sleep','to smell','to smoke','to speak','to study','to wear','to write','to find, to meet','to need','boss','company','customer','do they speak spanish','employee','he is looking for a job','how much do you earn a year?','I am not working on Saturday','I do not work on Saturdays','I rest on Saturdays','I work a lot but I do not earn a lot','important','It is necessary','monthly ','salary','secretary','to earn','to earn a living','to look for a job','to rest','to work','vaction','weekly','what is your boss like?','what is your job like','Who is your boss?','work','you are studying spanish','brown dark','brown','dark','green','grey','light','pink','purple','red','sky blue','violet','white','yellow','black ','blue','colors','gray','a day','a half hour','a minute','a month','a quarter of an hour','a second','a week','a week from today','a year','about 8:00','after 7:00','ago','all year long','an hour','Any other time','April','around 8:00','at about 2:00','at exactly 9:00','at what time?','August','autumn, fall','before 9:00','day','day after tomorrow','day before yesterday','December','during','early ','eve','February','For the one hour','Friday','from','good afternoon','good evening/ good night','good morning','in a while','in an hour','in July','in summer','in th emorning','in the afternoon','in the evening','In the morning','It is 1:30','It is 20 before 5','It is 4:40','It is one o clock','It is so late','It is two o clock','January','July','June','last','last (in a series)','late','late (in arriving)','March','May','midnight','Monday','Monday and tuesday are vacation days','months','my watch says that It is three o clock','next','noon','November','Now','October','one hour ago','per','Saturday','seasons','See you tomorrow','September','sharp, on the dot','Since 8:00','since what time?','spring','summer','Sunday','the day after tomorrow','the fall','the spring','the summer','the winter','Thursday','time of day, hour','today','today','Today is monday','tomorow morning','tomorrow','tomorrow afternoon','tomorrow night','Tuesday','until 10:00','watch, clock','Wednesday','What day is it?','What is todays date?','What time is it?','when?','why?','winter','yesterday','across form, opposite','address','behind','behind','between','directions','excuse me','excuse me (when you have caused harm)','far','here','hotel','how can I help you','I need information','I would like to try it on','I will be right back.','I am going to try it on','I am sorry','I am very grateful to you','in','information','It is a first class hotel','map','near','next (door) to','on the corner','please','please repeat that','restaurant','seriously wounded','situated','store','street','to the left (of)','to the right (of)','what is the address of the hotel?','what is the restaurant like?','What kind of hotel is it?','where is the hotel','which is the better of the two?','your welcome','"great" (before noun); big (after noun)','bad','beloved, dear','boyfriend/girlfriend','brother/sister','charming','cousin','family','family relationships','father/mother','favorite','friend','godfather/godmother','good','grandfather/grandmother','grandson/granddaughter','happy','husband/wife','lets see','man/woman','nephew/niece','person','reunited, together','small','son/daughter','to take care of the children','together','uncle/aunt','wedding','young person/ young people','your nephew is going to like it a lot','excellent','I don’t think (so).','I do not believe (so).','I feel fatigued / tired','I feel well.','I like this model a lot ','I am interested in video equipment','it appears modern to me','pain','ready','she likes those','sick, ill','sure','surely','terrible','to be cold','to be hot','to be sure','to enjoy','to feel (health)','to feel like (doing something)','to have fever','to have pains','to interest','to lack','to seem','to seem, appear cheap','to seem, appear expensive','to suffer','without doubt','a yoga class','exercise','we listen to music','bill','waiter','waitress','carbonated mineral water','chops','corn purée','a diet high in proteins and carbohydrates','carbohydrates','daily special','Everything smells good.','where are you from?','arm','back','beautiful','boring','busy','chest','country','difficult','ear','early riser','easy','eye','feat','finger','foot','Good bye','good/okay','Greetings','hair','hand','head','health','Hello!','how are you?','How is it going?','I am from…','I am fine','I am happy','I am ill','I am sad','I am tired','interesting','introductions','It is a pleasure to meet you','leg','likes and dislikes','mouth','music','My name is John','My name is John','name is','neck','nose','pleasant','shoulder','skin','The pleasure is mine','throat','To be (permanently)','To be (temporary)','to be in style','to be pleasing to','to have an appointment date','to have plans','to have time','tongue','ugly','unpleasant','very','welcome!','Whats going on?','Whats new?','Whats your name?','Where are you from?','with','a pair of shoes','a silk dress','at home','at my house','bag','belt','blouse','body','cassette recorder','clothing','color tv','compact disc','cotton','electronic equipment','equipment','handkerchief','hat','jacket','loudspeakers','machine','materials','model','music equipment','overcoat','pants','radio','record player','shirt','shoes','silk','skirt','small box','socks','sound equipment','stereo','stockings','suit','sweater','television set','tie','video','video equipment','video recorder','video recorder / machine','wool','narrow alleyways','senior citizens home','It is me','factory','factory worker','i have','amusements','bullfight','competitions, contests','fireworks','parades','to be present at, to witness this event','guarantee','plan','to be careful'];
    var spanishDictionary = ['hola','sí','no','gracias','Perdóneme','Por favor','lo siento','a la izquierda','a la derecha','derecho','aquí','ahí','Giro de vuelta','agua','cerveza','vino','baño','comida','no hablo español','habla usted Inglés','Cuánto cuesta este','puedes tomar mi foto','Necesito','quiero','tú','yo','nosotros','ellos','adiós','¿como se dice "hello" en español?','me siento cansado','me siento enfermo','¿estas molesto?','¿estas triste?','cansado','enfermo','molesto','triste','feliz','asustado','enojado','confuso','avergonzado','tengo hambre','Soy alto','soy bajito','yo tengo una altura promedio','promedio','Flaco','gordo','Yo soy peso promedio','bonita','feo','Eres hermosa','Señor','Señora','Señorita','pequeña','grande','largo','Quiero bailar','me gusta bailar','¿Quieres bailar conmigo?','quiero festejar','correr','andar','para navegar','ir de excursión','a la bicicleta','levantar pesas','jugar','quiero jugar baloncesto','fútbol','fútbol americano','tenis','golf','béisbol','hockey','lacrosse','voleibol','remo','ping pong','me gusta esquiar','me gusta surfear','ejercitar','hacer ejercicios','ir de compras','ajedrez','videojuegos','cartas','el café','bebidas','jugos','batidos','vino tinto','vino blanco','cócteles','cerveza','agua','soda','refresco','Usted','otra vez','y','pero','Es una buena idea.','No es problema.','de nada','tal vez','ustedes','moderno','Mucho','nada más','de','vendedor','canción','especial','tambien','hasta','manzana','plátano','baya','arándano','rasberry','frutas','maíz','uvas','lechuga','limón','Lima','cebolla','naranja','piña','pepinillos','patata (Spain) / papa','frijoles refritos','Espinacas','fresa','el tomate','ensalada mixta','verduras / las legumbres','Pepino','jalapeño','zanahorias','hongos','pimientos','cebollas','la carne de res','tocino','albóndiga','pepperoni','chorizo','cordero','pollo','bacalao','pato','filete miñón','pescado','el jamón','hamburguesa','carnes','puerco','proteínas','el salmón','mariscos','los camarones','el bistec','el atún','huevo','carne asada','Pancho','pizza','el taco','cangrejo','langosta','el atún','pan de trigo','pan blanco','¿Puedo ver el menú?','plato','Esto es muy bueno','Eso fue muy bueno','comida','aves','fresco','especialidad de la casa','tengo hambre','Quiero','no es problema','lista','nada más','servicio','carrito','aviso','sopa del día','supermercado','restaurante','una dieta','queso','queso suizo','bocadillo','pastas','pan','arroz','mayonesa','mostaza','guacamole','salsa de tomate','aceite y vinagre','orégano','pimienta','sal','salsa','tener hambre','seguir una dieta','tener sed','costar (o>ue)','cenar','tomar el desayuno','almorzar (o>ue)','tomar el almuerzo','tomar un trago','hacer compras','comer','Yo comi una hamburguesa','tomar','¿Qué toma?','cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve','veinte','veintiuno','veintidós','veintitrés','treinta','treinta y uno','cuarenta','cincuenta','sesenta','setenta','ochenta','nuventa','cien; ciento','ciento uno','doscientos (~as)','doscientos uno','trescientos','cuartrocientos','quinientos','seiscientos','setecientos','ochocientos','nuvecientos','mil','mil ciento uno','dos mil','diez mil','un millón','dos millones','un billón; mil millones','dinero','el frío','el calor','¿Cuántos grados hace?','húmedo','humedad','Hace frío.','Hace calor.','Hace buen (mal) tiempo.','Llueve.','Nieva','Hace sol.','Hace viento.','el impermeable','lluvioso','el/los paraguas','caliente','el tiempo','¿Qué tiempo hace?','recaudado (recaudar)','desear','aceptar','poder (o>ue)','comienzan (comenzar)','creer','mirar','tocar','comprar','llamar','morir (o>ue)','hacer','beber','comer','tener que','invitar','conducen (conducir)','partir','escuchar','vivir','buscar','deber','abrir','leer','recibir','descansar','volver (o>ue)','correr','mostrar (o>ue)','dormir (o>ue)','oler (o>ue)','fumar','hablar','estudiar','llevar/usar','escribir','encontrar (o>ue)','necesitar','el jefe','compañia','el/la cliente','Hablan español?','empleado','busca un trabajo','Cuánto gana por año?','No trabajo el sábado.','No trabajo los sábados.','los sabados descanso','Trabajo mucho pero no gano mucho','importante','es necesario','por año','salarío','secretario','ganar','ganarse la vida','buscar un trabajo','descansar','trabajar','vacaciones','por semana','Cómo es su jefe?','Cómo es su trabajo?','Quién es su jefe?','trabajo','estudias español','café','marrón','oscuro','verde','gris','claro','rosado','morado','rojo','celeste','violeta','blanco','amarillo','negro','azul','colores','gris','un día','una media hora','un minuto','un mes','un cuarto de hora','un segundo','una semana','de hoy en una semana','un año','cerca de las ocho','después de las siete','hace ','todo el año','una hora','Son las','abril','más o menos las ocho','a eso de las dos','a las nueve en punto','¿a qué hora?','agosto','otoño','antes de las nueve','día','pasado mañana','anteayer','diciembre','durante','temprano','la víspera','febrero','Es la una','Viernes','desde','buenas tardes','buenas noches','Buenos días','dentro de un rato','en una hora','en julio','en verano','por la mañana','por la tarde','de la noche','de la mañana','Es la una y media','Son las cinco menos viente','Son las cuatro y cuarenta','Es la una','es tan tarde','Son las dos','enero','julio','junio','pasado','último','tarde','de retraso','marzo','mayo','la medianoche','Lunes','Lunes y martes son día de vacaciones.','meses','en mi reloj, son las tres','próximo','el mediodía','noviembre','ahora','octubre','hace una hora','por','sábado','estaciones','hasta manana','septiembre','en punto','desde las ocho','¿desde qué hora?','primavera','verano','domingo','pasado mañana','el otoño','la primavera','el verano','el invierno','jueves','la hora','hoy','hoy','Hoy es lunes','mañana por la mañana','mañana','mañana por la tarde','mañana por la noche','martes','hasta las diez','el reloj','miércoles','¿Qué día es hoy?','¿Cuál es la fecha de hoy?','¿Qué hora es?','cuándo?','por qué?','invierno','ayer','enfrente de','la dirección','Detrás de','delante de','entre','direcciones','permiso','perdón / perdóneme / disculpe / dispense','lejos','aquí','el hotel','¿En qué peudo servirle?','Necesito información','deseo probármelo','Vuelvo en seguida.','voy a probármelo','lo siento','Le estoy muy agradecido','en','información','Es un hotel de primera clase','el mapa','cerca','al lado de','en la esquina','por favor','repita, por favor','el restaurante','herido de seriedad','situada','tienda','el calle','a la izquierda (de)','a la derecha (de)','Cuál es la dirección del hotel?','Cómo es el restaurante?','Qué tipo de hotel es?','Dónde está el hotel?','Cuál es el mejor de los dos?','de nada','grande','malo','querido','novio/novia','hermano/hermana','encantador','primo/prima','familia','parentescos','padre/madre','favorito','amigo/amiga','padrino/madrina','bueno','abuelo/abuela','nieto/nieta','contento','esposo/esposa','vamos a ver','hombre/mujer','sobrino/sobrina','persona','reunido','pequeño','hijo/hija','cuidar a los niños','junto','tío/tía','boda','joven/jóvenes','a su sobrino le va a gustar mucho','excelente','No creo.','No creo.','Me siento fatigada.','Me siento bien.','me gusta mucho este modelo','me interesa el equipo de video','me parece moderno','dolor','listo,-a','a ella le gustan ésos','enfermo','seguro,-a','seguramente','terrible','tener frío','tener calor','estar seguro','encantar','sentirse','tener ganas de (+ infinitive)','tener fiebre','tener dolores en/de','interesar','falta / hacer falta','parecer','parecer barato','parecer caro','sufrir','sin duda','una clase de yoga','ejercicio','Escuchamos música','cuenta','mesero','mesera','gaseosa','chuletas','puré de maíz','una dieta alta en proteínas','carbohidratos','plato del día','Todo huele bien.','¿de donde eres?','brazo','espalda','bonito','aburrido','ocupado','pecho','el país','dificil','oreja','madrugador','fácil','ojo','hazaña','dedo','el pie','Adiós','Bueno','saludos','cabello','la mano','cabeza','la salud','Hola','Cómo estás?','Qué tal','Soy de','estoy bien','estoy contento','estoy mal','estoy triste','estoy cansado','interesante','presentaciones','Mucho gusto','pierna','gustos','boca','música','me llamo John','Mi nombre es','llamarse','cuello','la nariz','simpático','hombro','la piel','el gusto es mío','garganta','ser','estar','estar de moda','gustar','tener una cita','tener planes','tener tiempo','lengua','feo','antisimpático','muy','Bienvenido','Qué pasa','Qué hay de nuevo','?cómo te llamas?','De donde eres','con','un par de zapatos','un vestido de seda','en casa','en mi casa','bolsa','el cinturón','blusa','el cuerpo','grabadora para cintas','ropa','televisor de color','disco compacto','el algodón','aparatos electrónicos','equipo','un pañuelo','sombrero','chaqueta','alto-parlantes','máquina','telas','modelo','equipo de música','abrigo','los pantalones','a radio','tocadiscos','camisa','zapatos','seda','falda','cajita','los calcetines','equipo de sonido','estereofónico','las medias','el traje','el suéter','televisor','corbata','video','equipo de video','video-grbadora','máquina filmadora','lana','angostas callejuelas','el hogar de ancianos','soy yo','fábrica','operario','yo tengo','diversiones','las corridas de toros','concursos','fuegos artificiales','desfiles','presenciar este suceso','garantía','el plan','tener cuidado'];
    // creates dropdown options
    for (var i = 0; i < 9; i++) {
        var stackOptions = [3, 4, 5, 6, 7, 8, 9, 10, "all"];
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
            $('#spanishBoxText').text(spanishStack[x]);
            console.log(spanishStack[x]);
            currentLang = "spanish";
            if (x < stackSize - 1) {
                x = x + 1;
            } else {
                x = 0;
            }
        } else if (currentLang == "spanish" && englishToSpanish == "spanish") {
            $('#spanishBoxText').text(englishStack[x]);
            currentLang = "english";
            if (x < stackSize - 1) {
                x = x + 1;
            } else {
                x = 0;
            }
        } else if (englishToSpanish == 'english') {
            $('#spanishBoxText').text(englishStack[x]);
            currentLang = "english";
        } else {
            $('#spanishBoxText').text(spanishStack[x]);
            currentLang = "spanish";
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
        $('#scorecard').html('# correct: ' + score + ' out of ' + outOf);
        return changeWord();
    }


    function switchLanguage() {
        //switches starting language from english to spanish and back
        //changeds starting button function from check mark to next or vice versa
        if (englishToSpanish == "english") {
            $('#spanishBoxText').text(spanishWords[x]);
            currentLang = 'spanish';
            englishToSpanish = "spanish";
            $('#engToSpanish').html('Spanish to English');
        } else {
            $('#spanishBoxText').text(englishWords[x]);
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


