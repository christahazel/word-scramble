var words = [{
		word: "srtepi",
		answer: "stripe"
	},
	{
		word: "temrucpo",
		answer: "computer"
	},
	{
		word: "nnites",
		answer: "tennis"
	}
];

//chooses random object from array
var randomIndex = words[Math.floor(Math.random() * words.length)];
//selects word key to choose random word 
var randomWord = randomIndex.word; 

var time = 60*1000;
var timer;
$('#time').text(time/1000);

function countDown(){
	timer = setInterval(function(){
		time -= 1000;
		$('#time').text(time/1000);

		if (time == 0){
			time = 60 * 1000;
			$('#time').text(time/1000);

			randomIndex++;

			if (randomIndex <= words.length - 1){
				loadQuestion();
			}else{
				clearInterval(timer);
				alert('put a fork in it');
				$("#container").empty();
				$("#container").html("<p>Finito!</p>");
			}
		}
	}, 1 * 1000);
}

$('#container').hide();

$('#startGame').on('click', function(){
	countDown();
	$('#container').show();
})

