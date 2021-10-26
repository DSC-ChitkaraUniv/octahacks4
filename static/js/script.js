const answers = [
	"You can click on the Devfolio button on the landing page, after which you will be redirected to their site to register for our awesome event.",
	"The participation fee is going to be ₹ 300 per team for anyone who wishes to join.",
	"If you've got a team well and good, but if you don't you can always solo the event😉. But if you wish we can pair you up with other participants. \n If you don't have an idea, fear not, we've got awesome and more than capable mentors to guide you and help you out with how to come up with one...",
	"Anyone who wants to frankly...¯\_(ツ)_/¯ \n	doesn't matter what you know or don't. It's going to be an event to remember and you're going to learn a lot...",
	"A maximum of FOUR participants per team.🧐🤭	",
	"I thought the swags would have been enough to attract you😁😛 but if you're asking this question then let me list the perks of our event: <ul><li>wide range of industry experts in the mentor and judging panel.</li><li>exceptional chance of exposure.</li><li>the swags that we've listed for teams</li>	<li>Chance for Networking</li>	<li>and need I say, a chance to experience such a big hackathon?</li>	</ul>",
	"According to the tracks you choose, CODING or NON-CODING you're going to be judged differently. You will be judged on the code quality, implementation, idea, and scalability in the former, while in the latter you'll be judged on how well you've thought out and planned for your idea's implementation... But most importantly you'll be judged on whether you're giving your best or not.	",
	`No biting, no scratching, and no poking😑... Wait that's not right.🤔 
	 ... 
	 	Just be FAIR to yourself, have fun, and don't worry about the daunting details of the code of conduct. We've got your back...😎😎 `,
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
            <div data-index='5' onclick="answerQuery(event)">Why should I particiapte in the event?</div>
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
	let delay = messageTemplate(index).length*25;
	left.insertAdjacentHTML('beforeEnd', waitMessage);
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
	}, delay);
}
