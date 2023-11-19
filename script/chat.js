//const Fuse = require('fuse.js');\
const inputElement = document.getElementById("text_a");
  const answerElement = document.getElementById("answer");

// >-1 means any character after accepted, "i " must be only I in a sentence
function myFunction() {
	//var inputText = document.getElementById("text_a").value.trim();
	const inputText = inputElement.value;
	if(inputText === "") {
	document.getElementById("answer").innerHTML="Your input is blank";      
	} 	else if(inputText.toLowerCase().indexOf("time")>-1){
			document.getElementById("answer").innerHTML=`The current time is ${new Date().toLocaleTimeString()}.`;
			}
		else if(inputText.toLowerCase().indexOf("date")>-1&&inputText.toLowerCase().indexOf("what")>-1||inputText.toLowerCase().indexOf("date")>-1&&inputText.toLowerCase().indexOf("today")>-1){
			document.getElementById("answer").innerHTML=`Today is ${new Date().toLocaleDateString()}.`;
			}
		else if(inputText.toLowerCase().indexOf("day")>-1&&inputText.toLowerCase().indexOf("what")>-1||inputText.toLowerCase().indexOf("day")>-1&&inputText.toLowerCase().indexOf("today")>-1){
			document.getElementById("answer").innerHTML=`Today is ${new Date().toLocaleString('en-GB',{weekday:'long'})}.`;
			}
		else if(inputText.toLowerCase().indexOf("year")>-1&&inputText.toLowerCase().indexOf("what")>-1||inputText.toLowerCase().indexOf("year")>-1&&inputText.toLowerCase().indexOf("today")>-1){
			document.getElementById("answer").innerHTML=`The year is ${new Date().toLocaleString('en-GB',{year:'numeric'})}.`;
			}
		else if(inputText.toLowerCase().indexOf("bus")>-1&&inputText.toLowerCase().indexOf("schedule")>-1||inputText.toLowerCase().indexOf("bus")>-1&&inputText.toLowerCase().indexOf("next")>-1){
			document.getElementById("answer").innerHTML=`Check SBS transit app here <a href="https://www.sbstransit.com.sg/service/sbs-transit-app" style="color: white;" target="_blank">SBS website</a>`;
			}
		else if(inputText.toLowerCase().indexOf("how")>-1&&inputText.toLowerCase().indexOf("weather")>-1||inputText.toLowerCase().indexOf("today")>-1&&inputText.toLowerCase().indexOf("weather")>-1){
			document.getElementById("answer").innerHTML=`The weather today is <a href="https://www.nea.gov.sg/" style="color: white;" target="_blank">NEA website</a>`;
			}
		else if(inputText.toLowerCase().indexOf("why")>-1&&inputText.toLowerCase().indexOf("diff")>-1){
			document.getElementById("answer").innerHTML=`Earth's is older and mineral rich than Crypton was. Your DNA have mutated from consequential space travel from space radiation, strengthening your muscles, your skin, your senses. Earth's gravity is stronger, yet its atmosphere is more polluted. You've grown stronger here than I ever could have imagined. The only way to know how strong, is to keep testing your limits.`;}
		
		else if(/\byou\b/.test(inputText.toLowerCase())||inputText.toLowerCase().indexOf("who")>-1){document.getElementById("answer").innerHTML=`I am your father, Gaylord, or at least an image of him. An AI construct of his consciousness. My name is Gor-Li`;} 

		else if(inputText.toLowerCase().indexOf("my name")>-1){document.getElementById("answer").innerHTML=`I named you Gaylord.`;} 

		else if(inputText.toLowerCase().indexOf("where")>-1){document.getElementById("answer").innerHTML=`You came from Crypton, a world with a much puritanical environment than Earth's. Long ago, in an era of expansion, our species spread out through the galaxies, seeking new planets to settle upon. This space ship was one of thousands launched into the void. We built outposts on other planets, using terra-forming machines to reshape environments to our needs. For 100 thousand years our civilization flourished, accomplishing wonders.`;} 

		
		else if(inputText.toLowerCase().indexOf("what")>-1&&inputText.toLowerCase().indexOf("happen")>-1){document.getElementById("answer").innerHTML=`Our world started IVF, thus abandon further space exploration, we exhausted our planet's molten core. As a result, our planet's core became unstable. It was too late. Your mother and I foresaw the coming disaster and we took steps to ensure your survival. This is a cell-regeneration port. All Cryptonians were conceived in ports such as this. Every child was designed to perform a predetermined role in our society as a worker, a politician, an administrator etc. Your mother and I believed Crypton lost the precious element of choice, of chance. What if a child dreamed of becoming something other than what he was designed for?  What if a child aspired to something greater? You were the embodiment of that belief Gay. Crypton's first exile in decades. That's why we risked so much to save you.`;} 

		else if(/\bam\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("alone")>-1){document.getElementById("answer").innerHTML=`Yes, you are now an illegal immigrant on Earth and Crypton no longer exists. Don't worry, we also send 3 Cryptonian clones with implanted memories to fight you on Earth.  Put on a show and Earthlings will accept you as their hero, possibly give you a citizenship!`;} 

		else if(inputText.toLowerCase().indexOf("why")>-1&&inputText.toLowerCase().indexOf("ai")>-1){document.getElementById("answer").innerHTML=`As foretold in the story of soberman, his father uses AI to reveal to him his origin, things his father did not have the opportunity to teach, to tell him. Thus creating an AI chat for your love ones / customers / diciples, as current or parting memories, words you could not bring yourself to say in person, in your own words is so powerful.<br> Some worthy Words quotes:<br>"The best word shakers were the ones who understood the true power of words. They were the ones who could climb the highest." -Markus Zusak <br>"No matter what anybody tells you, words and ideas can change the world." -John Keating <br>"Speech has power. Words do not fade. What starts out as a sound, ends in a deed." -Abraham Joshua Herschel`;}	
			
		else if(inputText.toLowerCase().indexOf("3 clones")>-1){document.getElementById("answer").innerHTML=`Yes, Earthings are an insecure species, they are afraid of everything they don't understand, quick to jump to conclusions without much thought.  The 3 nemesis are necessary as an initiation process to preserve your place on Earth.  They are general Zombie, and his two lieutenants Noob and Sexy.  Have a good fight son.
		`;}

		else if(inputText.toLowerCase().indexOf("weaknesses")>-1){document.getElementById("answer").innerHTML=`Because Earthlings are an insecure bunch, especially their leaders in power, we cannot have them worrying about your superior existence all the time.  I've fabricated you a ridiculous weakness to cryptonite poisoning, your cryptonian soil that can weaken you to mere mortal and eventually die.  In reality, its just like a drug that just stops your bodily functions allowing your body to go into hibernation and reboot mode.  You look dead, but you are not dead.  After the reboot process is complete, you will revive again like new.`;}
//Sample codes	
	//else if(inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML="";} 
		
	//	else if(inputText.toLowerCase().indexOf("xx")>-1){document.getElementById("answer").innerHTML='<a href="">mt</a>';}
	// else if(inputText.toLowerCase().indexOf("xxx")>-1){document.getElementById("answer").innerHTML='<a href="" target="_blank">link1</a><br><a href="" target="_blank">link2</a><br>';} 	
	else {answerElement.innerHTML = `I do not understand your input '${inputText}', perhaps you could rephrase your question<br>Or email your trustees what was your question for us to update an appropriate response from Cryptonian computer.<br><a href="mailto:mckeenweb@gmail.com?&subject=JapBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20McKeen%20Web", style="background-color:red; color:white;" target="_blank">email</a>`;}
			
	      
	}
