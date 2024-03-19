let words = [
    {
        "inputs": 3,
        "category": "Compound",
        "word":"mud"
    },
    {
        "inputs": 9,
        "category": "Object",
        "word":"cigarette"
    },
    {
        "inputs": 9,
        "title": "Silly Animal Tale",
        "word":"apartment"
    }
]

$(document).ready(function () {
    fillBlanks()
})

var gameOver=false

function fillBlanks(){
    $(".clickable").click(function(){
        var correctGuess=false;
        let id = $(this).attr("id")
        var life= parseInt($("#life").text())

        for(var i = 0; i< randomWord.word.length;i++){
            if(randomWord.word.charAt(i).lowerCase()==id){
                if(life>0 && ($(fill_blanks).eq(i).html=="_")||($(fill_blanks).eq(i).html==id)){
                    $(fill_blanks).eq(i).html(id);
                    correctGuess=true;

                    if($('#blanks').text()===randomWord.word.toLowercase()){
                        $('#result').text("You win!!")
                        correctGuess=true;
                        gameOver=true;
                    }
                }
            }
        }
    })
}