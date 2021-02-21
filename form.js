class Form {
        constructor(){


        }

        display(){
                    var title=createElement('h1');
                    title.html("CAR RACING GAME");
                    title.position(400,0);

                    var input=createInput("name");
                    input.position(400,160);

                    var button=createButton('play');
                    button.position(400,200);

                    var greeting=createElement('h2');
                    button.mousePressed(function (){
                        input.hide();
                        button.hide();

                        var name=input.value();
                        playerCount+=1;
                        player.update(name);
                        player.updateCount(playerCount);

                        greeting.html("hello " +  name);
                        greeting.position(400,160)
                    })


        }
}