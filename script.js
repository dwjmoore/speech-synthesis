const synth = window.speechSynthesis;
const inputTxt = document.getElementById("text").innerHTML;
let voices = [];

function populateVoiceList() {
	voices = synth.getVoices();
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
	speechSynthesis.onvoiceschanged = populateVoiceList;
}

const speak = () => {
	const utterThis = new SpeechSynthesisUtterance(inputTxt);

	for (let i = 0; i < voices.length; i++) {
		if (voices[i].lang === "fr-FR") {
			utterThis.voice = voices[i];
			console.log("Voice found.");
			break;
		}
	}

	utterThis.pitch = 1;
	utterThis.rate = 1;
	synth.speak(utterThis);
};