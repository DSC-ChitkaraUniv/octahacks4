const answers = [
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Inventore consectetur possimus iste odit sunt ipsa vero fugitdoloremque ea. Facilis eum commodi qui cupiditate voluptas!Aspernatur repellendus nisi quod dolorum?',
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Inventore consectetur possimus iste odit sunt ipsa vero fugitdoloremque ea. Facilis eum commodi qui cupiditate voluptas!Aspernatur repellendus nisi quod dolorum?',
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Inventore consectetur possimus iste odit sunt ipsa vero fugitdoloremque ea. Facilis eum commodi qui cupiditate voluptas!Aspernatur repellendus nisi quod dolorum?',
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Inventore consectetur possimus iste odit sunt ipsa vero fugitdoloremque ea. Facilis eum commodi qui cupiditate voluptas!Aspernatur repellendus nisi quod dolorum?',
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Inventore consectetur possimus iste odit sunt ipsa vero fugitdoloremque ea. Facilis eum commodi qui cupiditate voluptas!Aspernatur repellendus nisi quod dolorum?',
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Inventore consectetur possimus iste odit sunt ipsa vero fugitdoloremque ea. Facilis eum commodi qui cupiditate voluptas!Aspernatur repellendus nisi quod dolorum?',
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Inventore consectetur possimus iste odit sunt ipsa vero fugitdoloremque ea. Facilis eum commodi qui cupiditate voluptas!Aspernatur repellendus nisi quod dolorum?',
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Inventore consectetur possimus iste odit sunt ipsa vero fugitdoloremque ea. Facilis eum commodi qui cupiditate voluptas!Aspernatur repellendus nisi quod dolorum?',
];
const message1 = `<div class="message-container">
            <div class="avatar">
              <img src="assets/media/FAQ_display.jpg" class="avatar-image" />
            </div>
            <div class="message">Hi there! I am Xori. How may I help you?</div>
          </div>`;

const accordian = `<div class="accordion">
            <div class="octahacks"><img src="./assets/media/octahcks_logo.png" class="octa-logo"/></div>
            <div data-index='0' onclick="answerQuery(event)">How do I register for the hackathon?</div>
            <div data-index='1' onclick="answerQuery(event)">What is the participation fee?</div>
            <div data-index='2' onclick="answerQuery(event)">What if I don't have a team or idea?</div>
            <div data-index='3' onclick="answerQuery(event)">Who can participate?</div>
            <div data-index='4' onclick="answerQuery(event)">What could be the size of the team?</div>
            <div data-index='5' onclick="answerQuery(event)">Why should I particiapte in</div>
            <div data-index='6' onclick="answerQuery(event)">How will the teams be judged?</div>
            <div data-index='7' onclick="answerQuery(event)">What is the Code of Conduct?</div>
          </div>`;
const message2 = `<div class="message-container">
            <div class="avatar">
              <img src="assets/media/FAQ_display.jpg" class="avatar-image" />
            </div>
            <div class="message">How can I help you further?</div>
          </div>`;
const waitMessage = `<div class="message-container">
            <div class="avatar">
              <img src="assets/media/FAQ_display.jpg" class="avatar-image" />
            </div>
            <div class="message"><div id="wave">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</div></div>
          </div>`;
const messageTemplate = function (index) {
	return `<div class="message-container">
            <div class="avatar">
              <img src="assets/media/FAQ_display.jpg" class="avatar-image" />
            </div>
            <div class="message">${answers[index]}</div>
          </div>`;
};
document.getElementById('message-box').addEventListener('click', () => {
	document.querySelector('body').style.height = '100vh';
	document.querySelector('body').style.overflowY = 'hidden';
	document.getElementsByClassName('faq')[0].style.display = 'block';
	document.getElementById('message-box').style.display = 'none';
	let left = document.getElementsByClassName('faq-left')[0];

	left.insertAdjacentHTML('beforeEnd', waitMessage);
	setTimeout(() => {
		left.removeChild(left.lastChild);
		left.insertAdjacentHTML('beforeEnd', message1);
		left.insertAdjacentHTML('beforeEnd', accordian);
	}, 1500);
});
document.getElementById('close').addEventListener('click', () => {
	document.querySelector('body').style.overflowY = 'unset';
	document.querySelector('body').style.height = 'unset';
	document.getElementsByClassName('faq')[0].style.display = 'none';
	document.getElementById('message-box').style.display = 'block';
	document.getElementsByClassName('faq-left')[0].innerHTML = '';
});
function answerQuery(e) {
	let index = e.target.getAttribute('data-index');
	let left = document.getElementsByClassName('faq-left')[0];
	left.insertAdjacentHTML('beforeEnd', waitMessage);
	console.log(left.scrollHeight);
	left.scrollTop = left.scrollHeight;
	setTimeout(() => {
		left.removeChild(left.lastChild);
		left.insertAdjacentHTML('beforeend', messageTemplate(index));
		left.scrollTop = left.scrollHeight;
	}, 1500);
	setTimeout(() => {
		left.insertAdjacentHTML('beforeEnd', waitMessage);
		left.removeChild(left.lastChild);
		left.insertAdjacentHTML('beforeEnd', message2);
		left.insertAdjacentHTML('beforeEnd', accordian);
		left.scrollTop = left.scrollHeight;
	}, 3000);
}
