let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

// Type = [HTMLCOLLection] 
val = document.links;// HTMLCOlLection 
val = document.links[1];// 
val = document.links[3];
val = document.links[3].id;// delete-item4
val = document.links[5].id;// clearall

// val = document.links[5].class;// undefined 
// (string) 
val = document.links[3].className; // delete-item my-item 
// (array) Type = [DOMTokenList]
val = document.links[3].classList; 
val = document.links[3].classList[0];// delete-item
val = document.links[3].classList[1];// my-item

// Type = [HTMLCOLLection] 
val = document.forms;// HTMLCOLLection
val = document.forms[0];
val = document.forms[0].id;// form
val = document.forms[0].className;// form
val = document.forms[0].classList;// 
val = document.forms[0].classList[0];// form
val = document.forms[0].action;// file:///C:/Users/Acer/Documents/wdfbatch9/javascript/Javascript%20Document%20object/pro
val = document.forms[0].method;// get

val = document.images;// HTMLCOLLection
val = document.images[0];
val = document.images[0].id;// loading
val = document.images[0].className;// loading
val = document.images[0].classList;
val = document.images[0].classList[0];// loading
val = document.images[0].src;// https://i.gifer.com/ZKZg.gif
val = document.images[0].alt;// loader

val = document.scripts;// HTMLCOLLection
val = document.scripts[0];
val = document.scripts[0].src;// file:///C:/Users/Acer/Documents/wdfbatch9/javascript/Javascript%20Document%20object/l19documentobject.js
val = document.scripts[0].type;// text/javascript

// console.log(val);// undefined

// => Change Styling 

	document.getElementById('tasktitle').style.backgroundColor = "green";
	document.getElementById('tasktitle').style.color = "#fff";
	document.getElementById('tasktitle').style.padding = "10px";

// => Change Content 

	document.getElementById('tasktitle').textContent = "My Job";
	document.getElementById('tasktitle').innerText = "My Tasks";
	document.getElementById('tasktitle').innerHTML = "<span style='color: yellow;'>My Jobs</span>";

// Call by Class Name 

	const lis = document.getElementsByClassName("list-group-item");// HTMLCollection
	// lis[2].style.color = "blue";
	// lis[2].textContent = "Have to visit";
	// lis[2].innerText = "Have to cook";
	// lis[2].innerHTML = 'Have to read <a href="#" id="delete-item1" class="delete-item"><i class="fas fa-trash-alt"></i></a>';

	console.log(lis);
	console.log(lis[2]);

// Call by Tag Name (Element) 

	const litags = document.getElementsByTagName("li");// HTMLCollection
	console.log(litags);
	console.log(litags[3]);
	// litags[3].style.color = "red";
	// litags[3].textContent = "How to cook";
	// litags[3].innerHTML = 'How to cook <a href="#" id="delete-item1" class="delete-item"><i class="fas fa-trash-alt"></i></a>';

// Query Selector (id / class / tag)

	console.log(document.querySelector('#tasktitle')); // ID 
	console.log(document.querySelector('.card-title'));// CLASS
	console.log(document.querySelector('h4'));// TAG

	console.log(document.querySelector("li"));// only first li 
	console.log(document.querySelector(".list-group-item"));// only first li 

	// document.querySelector("li").style.color = "blue";
	// document.querySelector("ul li").style.color = "blue";
	// document.querySelector("ul li:nth-child(odd)").style.backgroundColor = "silver";
	// document.querySelector("ul li:nth-child(even)").style.backgroundColor = "silver";
	// document.querySelector("ul li:last-child").style.backgroundColor = "blue";
	// document.querySelector("ul li:first-child").style.backgroundColor = "blue";
	// document.querySelector("ul li:last-of-type").style.backgroundColor = "blue";
	// document.querySelector("ul li:first-of-type").style.backgroundColor = "blue";
	// document.querySelector("ul li:nth-of-type(4)").style.backgroundColor = "blue";

// Query Selector All (all) 
// TYPE = [NodeList] 
	console.log(document.querySelectorAll('#tasktitle')); // ID 
	console.log(document.querySelectorAll('.card-title'));// CLASS
	console.log(document.querySelectorAll('h4'));// TAG

	console.log(document.querySelectorAll("li"));// NodeList
	console.log(document.querySelectorAll(".list-group-item"));// NodeList

	const ltms = document.querySelectorAll("li");
	console.log(ltms);// NodeList 
	console.log(ltms[1]);

// HTMLCollection ForEach not loop (Array.from) (No) 
	const listitems = document.querySelector('ul').getElementsByClassName("list-group-item");// HTMLCollection
	console.log(listitems);
	console.log(typeof listitems);
	console.log(listitems[1]);

	const arritmes = Array.from(listitems);
	console.log(listitems);

	// arritmes.forEach(function(arritme,idx){
	// 	// console.log(arritme);

	// 	// arritme.textContent = "Hello";

	// 	// arritme.textContent = `${idx} = Hello`; 

	// 	arritme.textContent = `${++idx} = Hello`; 
	// });

// NodeList ForEach loop (Yes)

	const listitms = document.querySelectorAll('ul.list-group li.list-group-item');// NodeList
	console.log(listitms);
	console.log(listitms[4]);

	// listitms.forEach(function(listitm,idx){
	// 	// console.log(listitm);

	// 	// listitm.innerText = "Hello World";

	// 	listitm.innerText = `${++idx} = Hello World`;
	// });

	const lisodds = document.querySelectorAll('li:nth-child(odd)');
	// console.log(lisodds);

	const lisevens = document.querySelectorAll('li:nth-child(even)');
	// console.log(lisevens);

	lisodds.forEach(function(lisodd,idx){
		
		lisodd.style.backgroundColor = "gray";

	});

	// lisevens.forEach(function(liseven,idx){
		
	// 	liseven.style.backgroundColor = "silver";

	// });

	for(let i=0;i < lisevens.length;i++){
		// console.log(i); 0 to 1
		lisevens[i].style.backgroundColor = "silver";
	}

// Parent and Children 

	let chl;

	let getli = document.querySelector('ul li');
		getli = document.querySelector('li.list-group-item');
		getli = document.querySelector('li.list-group-item:first-child');
	console.log(getli);

	const getul = document.querySelector('ul.list-group');
	console.log(getul);

	chl = getul.children;// HTMLCollection
	// chl = document.querySelector('ul').children;
	// chl = document.getElementsByClassName('list-group-item');
	// chl = document.getElementsByTagName('li');
	console.log(chl);
	console.log(chl[2]);

	// chl[2].textContent = "Have to cook";
	getul.children[3].textContent = "Have to cook";
	chl[4].innerHTML = `Have to read <a href="#" id="delete-item1" class="delete-item"><i class="fas fa-trash-alt"></i></a>`;

// Parent Children to Children 

	chl = getul;// HTMLCollection
	chl = getul.children;
	chl = getul.children[0];
	chl = getul.children[0].children;// HTMLCollection
			// ul 		li 			a 
	chl = getul.children[0].children[0];

	chl = getul.children[0].children[0].id;//delete-item1
	chl = getul.children[0].children[0].className;// delete-item
	chl = getul.children[0].children[0].classList;// DOMTokenList
	chl = getul.children[0].children[0].href;// file:///C:/Users/Acer/Documents/wdfbatch9/javascript/Javascript%20Document%20object/l19documentobject.html#

	chl = getul.children[0].children[0].children;// HTMLCollection
			// ul 		li 			a 			i
	chl = getul.children[0].children[0].children[0];

	console.log(chl);

// Child Element Count 

	chl = getul.children.length;// 5
	chl = getul.childElementCount;// 5

	chl = getul.children[0].childElementCount;// 1
	chl = getul.children[0].children[0].childElementCount;// 1
	console.log(chl);

// Child to Parent Element 
	const getfirstli = document.querySelector('li');
	console.log(getfirstli);
	let getparent = getfirstli;
						// li 			ul 
		getparent = getfirstli.parentElement;
						// li 			ul  		card-action 
		getparent = getfirstli.parentElement.parentElement;
						// li  		ul  		card-action		card
		getparent = getfirstli.parentElement.parentElement.parentElement;

	console.log(getparent);

// Next Element Sibling 

	let getsibling = getfirstli;
						// li   		list-item1
		getsibling = getfirstli.nextElementSibling;
						// li  		list-item2			list-item3
		getsibling = getfirstli.nextElementSibling.nextElementSibling;
						// li  		list-item2		list-item3			list-item4
		getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
						// li  		list-item2  	list-item3  		list-item4  		list-item5 
		getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
		getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
	console.log(getsibling);

// Previous Element Sibling 
						// li1 		li2 				li3  				li2 
		getsibling = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
	console.log(getsibling);

// Create Element 
	const newli = document.createElement('li');

	// Add ID 
	newli.id = "new-item";
	
	// Add Class 
	newli.className = "list-group-item";
	newli.className = "delete-me";
	newli.className = "list-group-item delete-me";

	// Add Method 
	newli.classList.add('delete-i');
	newli.classList.add('delete-you');
	newli.classList.add('delete-we','delete-your','delete-us');

	// Add Attribute
	// setAttribute(qulified name,value) 
	newli.setAttribute('title',"new-item");

	// newli.textContent = "hay";
	// newli.innerText = "hi";
	// newli.innerHTML = `List Item 6 <a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash-alt"></i></a>`;

	// Add Create Text Node (appendChild) 
	// => Method 1 
	// const newtext = document.createTextNode("Hello World"); 
	// newli.appendChild(newtext);

	// => Method 2 
	newli.appendChild(document.createTextNode("Hello Thailand"));

	console.log(newli);

	// Create (a tags) 
	const newlink = document.createElement('a');

	// Add href 
		newlink.href = "#";

		// Add ID 
		newlink.id = "delete-item6";

		// Add Class 
		// newlink.className = "delete-item";
		newlink.classList.add("delete-item");

		console.log(newlink);

	// Create (i tag) 
	const newitalic = document.createElement('i');

	// Add Class 
		newitalic.classList.add('fas','fa-fan');

		console.log(newitalic);

		newlink.appendChild(newitalic);
		console.log(newlink);

		newli.appendChild(newlink);
		console.log(newli);

	// => Method 1 
	// const ul = document.querySelector('ul.list-group');
	// console.log(ul);
	// ul.appendChild(newli);

	document.querySelector('ul').appendChild(newli);

// Replace Element 
	// replaceChild(new,old);

	const newtitleh2 = document.createElement('h2');

	newtitleh2.id = "tasktitle";

	const newcaption = document.createTextNode("All My List");
	newtitleh2.appendChild(newcaption);
	// console.log(newcaption);

	console.log(newtitleh2);

	const oldtitleh4 = document.querySelector("#tasktitle");
	console.log(oldtitleh4)

	const getcardaction = document.querySelector('.card-action');
	console.log(getcardaction);

	getcardaction.replaceChild(newtitleh2,oldtitleh4);	

	// const newestli = document.createElement("li");
	// newestli.textContent = "Hello Thailand";
	// const newtxt = document.createTextNode("Hello Myanmar");
	// newestli.appendChild(newtxt);
	// console.log(newestli);

// Remove Element (self) 
	
	const getlis = document.querySelectorAll("li"); // NodeList 
	console.log(getlis);
	// console.log(getlis[2]);

	// getlis[0].remove();
	// getlis[3].remove(); 
	// console.log(getlis);

// Remove Child Element 

	const getfirstul = document.querySelector('ul');
	// console.log(getfirstul);
	// getfirstul.remove();

	// getfirstul.removeChild(getfirstul.children[0]);
	// getfirstul.removeChild(getlis[3]);
	// getfirstul.removeChild(getlis[1]);

// Attribute 

	const firstli = document.querySelector('li');
	// console.log(firstli);
	const firstlichild = firstli.children[0];
	// console.log(firstlichild);
	console.log(firstlichild.id);// delete-item1
	console.log(firstlichild.href);// route+#
	console.log(firstlichild.getAttribute('href'));// #
	console.log(firstlichild.getAttribute('id'));// delete-item1
	console.log(firstlichild.title);// iamtitle
	console.log(firstlichild.alt);// undefined
	console.log(firstlichild.getAttribute('alt'));// image

	// firstlichild.href = "https://google.com";
	// firstlichild.setAttribute('href','https://google.com');
	// console.log(firstlichild);

	var hassatt = firstlichild.hasAttribute('href');// true
	hassatt = firstlichild.hasAttribute('hay');// false
	console.log(hassatt);

// ClassName Vs ClassList 

	// => ClassName HTMLCollection(string)
		console.log(firstlichild.className);// delete-item
		firstlichild.className = "delete-myself";
		firstlichild.className = "delete-item delete-myself";
		firstlichild.className = "delete-item delete-myself delete-ourselves";
		console.log(firstlichild.className);

	// => ClassList DOMTokenList(array) 
		console.log(firstlichild.classList);// DOMTokenList
		firstlichild.classList.add("delete-myself");
		firstlichild.classList.add("delete-ourselves");

		// firstlichild.classList.remove('delete-myself');
		// firstlichild.classList.remove('delete-item');
		// firstlichild.classList.remove('delete-item','delete-ourselves');
		console.log(firstlichild.classList);

// Check Class value 
		console.log(firstlichild.className);

		//=> Class Name 
			if(firstlichild.className === "delete-item delete-myself delete-ourselves"){
				console.log("Yes");
			}else{
				console.log("No");
			}

		//=> Class List 
			if(firstlichild.classList.contains("delete-item")){
				console.log("Yes");
			}else{
				console.log("No");
			}

// addEventListener('eventype',callfunction());

	// Method 1
		const clearbtn = document.querySelector('.clear-tasks');

		// clearbtn.addEventListener('click',function(){
		// 	// console.log('hay i am working');

		// 	// console.log(e);
		// 	// console.log(e.target);
		// 	// console.log(e.target.id);
		// 	// console.log(e.target.className);
		// 	// console.log(e.target.classList[0]);

		// 	console.log(this);// if you want direct element !! just use by regular function


		// });

		// console.log(clearbtn);

	// Method 2 

		clearbtn.addEventListener('click',myclick);

		function myclick(e){
			// console.log('hay i am working');

			// console.log(e);
			// console.log(e.target);

			// console.log(this);

			// console.log(e.target);
			// console.log(e.target.id);// clearall 
			// console.log(e.target.className);// clear-tasks 
			// console.log(e.target.classList);// DOMTokenList
			// console.log(e.target.classList[0]);// clear-tasks 

			// e.target.textContent = "Finished";
			// e.target.innerText = "Finished";
			// e.target.innerHTML = "Finished";

			// Coordinate Event - relative to the window 
				const clientx = e.clientX;
				const clienty = e.clientY;
				// console.log(clientx,clienty);

			// Coordinate Event - relative to the element 
				const offsetx = e.offsetX;
				const offsety = e.offsetY;
				// console.log(offsetx,offsety);

			e.preventDefault();
		}

// Mouse Event (Pointer Event) 

	// const clbtn = document.querySelector('.clear-tasks');

	// Single Click 
		// clbtn.addEventListener('click',mouseeventtype);

	// Double Click 
		// clbtn.addEventListener('dblclick',mouseeventtype);

	// Mousedown (mouse ကို ဖိလိုက်ရင် အဖြေထွက်တယ်) 
		// clbtn.addEventListener('mousedown',mouseeventtype);

	// Mouseup (mouse ကို လွတ်လိုက်ရင် အဖြေထွက်တယ်) (or) click 
		// clbtn.addEventListener('mouseup',mouseeventtype);

	const card = document.querySelector('.card');

	// Mouse enter (or) css(hover) 
		// card.addEventListener('mouseenter',mouseeventtype);

	// Mouse over (or) ( action to each childs while mouse over )  
		// card.addEventListener('mouseover',mouseeventtype);

	// Mouse leave 
		// card.addEventListener('mouseleave',mouseeventtype);

	// Mouse out (or) ( action to each childs while mouse out ) 
		// card.addEventListener('mouseout',mouseeventtype);

	// Mouse move 
		card.addEventListener('mousemove',mouseeventtype);

	const headingh2 = document.querySelector('h2');

	 function mouseeventtype(e){
	// 	// console.log('i am working');

	// 	// console.log(e);

	// 	// console.log(`Event type = ${e.type}`);

	// 	// headingh2.textContent = "Mouse X : " + e.clientX + "Mouse Y : " + e.clientY;
	// 	// headingh2.textContent = `Mouse X : ${e.clientX} Mouse Y : ${e.clientY}`;

	// 	// headingh2.textContent = "Mouse X : " + e.offsetX + "Mouse Y : " + e.offsetY;
	// 	// headingh2.textContent = `Mouse X : ${e.offsetX} Mouse Y : ${e.offsetY}`;

	// 	// document.body.style.backgroundColor = `rgba(${e.clientX},${e.clientX},${e.clientY},0.5)`;
	// 	// document.body.style.backgroundColor = `rgba(${e.offsetX},${e.offsetX},${e.offsetY},0.5)`;
	 }

// Submit 

	// const getform = document.querySelector('.form');

	// getform.addEventListener('submit',inputeventtype);

	// function inputeventtype(e){

	// 	// console.log(e);

	// 	console.log(`Event type = ${e.type}`);

	// 	e.preventDefault();
	// };

// Input Event (Keyboard Event) 

	const getinput = document.querySelector("#task");

	// keydown (or) keypress
		// getinput.addEventListener('keydown',inputeventtype);

	// keypress
		// getinput.addEventListener('keypress',inputeventtype);

	// keyup (or) input
		// getinput.addEventListener('keyup',inputeventtype);

	// input 
		// getinput.addEventListener('input',inputeventtype);

	// focus
		// getinput.addEventListener('focus',inputeventtype);

	// blur 
		// getinput.addEventListener('blur',inputeventtype);

	// cut (ctl + x) 
		// getinput.addEventListener('cut',inputeventtype);

	// paste (ctl + v) (or) keydown (or) keypress
		getinput.addEventListener('paste',inputeventtype);

	function inputeventtype(e){

		// console.log("Hello, i am working");

		// console.log(`Event type = ${e.type}`);
		// console.log(getinput);
		// console.log(e);
		// console.log(e.target);
		// console.log(this);

		// console.log(e.target.value);
		// console.log(this.value);
		console.log(getinput.value);

	}

// Event Bubbling (တိုက်ရိုက်ခေါ်တာ Element)

	// Direct Element call => Event Bubbling

		// document.querySelector('.card-title').addEventListener('click',function(){
		// 	console.log("i am card-title");
		// });

		// document.querySelector('.card-content').addEventListener('click',function(){
		// 	console.log("i am card-content");
		// });

		// document.querySelector('.card').addEventListener('click',function(){
		// 	console.log("i am card");
		// });

// Event Delegation (တိတိကျကျခေါ်တာ Element) 

	// const getdelegation = document.querySelector('.delete-item');
	// console.log(getdelegation);

	// getdelegation.addEventListener('click',function(e){
	// 	// console.log("i am delete-item");

	// 	console.log(e.target);// i tags
	// 	console.log(this);// a tags
	// });

	document.body.addEventListener('click',eventdeleg);

	function eventdeleg(e){
		// console.log("i am body");

		// console.log(e.target); 
		// console.log(this);

		// console.log(e.target.className);

					// i
		// if(e.target.className === "fas fa-trash-alt"){
		// 	console.log("hay i am trash can");
		// }
									// a 
		// console.log(e.target.parentElement);
							// li   	a 
		// console.log(e.target.parentElement.className);

				// li 		a 
		// if(e.target.parentElement.className === "delete-item"){
		// 	console.log("hay i am delete-item");
		// }

		// if(e.target.parentElement.parentElement.className === "list-group-item"){
		// 	console.log("hay i am list-group-item");
		// }

				// i 
		// if(e.target.classList.contains("fa-trash-alt")){
		// 	console.log("hay i am trash can");
		// }

				// i      a       
		if(e.target.parentElement.classList.contains("delete-item")){
			// console.log("hay i am delete-item by a tag");

			// i
			// e.target.remove();

			// i       a
			// e.target.parentElement.remove();

			e.target.parentElement.parentElement.remove();

		}

				// i  		a  			li
		// if(e.target.parentElement.parentElement.classList.contains("delete-i")){
		// 	console.log("hay i am delete-i by a li");
		// }


	}

// JSON (Strigify and Parse) 
	document.querySelector('.form').addEventListener('submit',function(e){
		// console.log("hay i am working");

		const getnewtasks = document.getElementById('task').value;
		console.log(getnewtasks);

		// localStorage.setItem('mytasks',getnewtasks);

		let alltasks;// undefined 

		if(localStorage.getItem('mytaks') === null){
			alltasks = [];
			// console.log("No value yet");
		}else{
			// console.log("Valve already exists");

			// alltasks = localStorage.getItem('mytaks');
			// console.log(alltasks);// 
			// console.log(typeof alltasks);// string

			alltasks = JSON.parse(localStorage.getItem('mytaks'));
			console.log(alltasks);
		}

		alltasks.push(getnewtasks);
		console.log(alltasks);

		localStorage.setItem('mytaks',JSON.stringify(alltasks));


		// let alltasks;

		// if(localStorage.getItem('mytasks') === null){
		// 	alltasks = [];
		// 	// console.log("NO, value yet ");
		// }else{
		// 	// console.log("Value already exists");

		// 	// alltasks = localStorage.getItem('mytasks');
		// 	// console.log(alltasks);
		// 	// console.log(typeof alltasks);// string 

		// 	alltasks = JSON.parse(localStorage.getItem('mytasks'));
		// 	// console.log(alltasks):
		// }

		// alltasks.push(getnewtasks);

		// console.log(alltasks);

		// localStorage.setItem('mytasks',JSON.stringify(alltasks));



		e.preventDefault();
	});

	// console.log(localStorage.getItem('mytaks'));
	// console.log(typeof localStorage.getItem('mytaks'));// string

	// console.log(JSON.parse(localStorage.getItem('mytaks')));
	// console.log(typeof JSON.parse(localStorage.getItem('mytaks')));// object

	const getmytasks = JSON.parse(localStorage.getItem('mytaks'));
	// console.log(getmytasks);

	getmytasks.forEach(function(getmytask){
		console.log(getmytask);
	});


