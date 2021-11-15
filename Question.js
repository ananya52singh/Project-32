class Question {

  constructor() {
    this.title = createElement('h1')
    this.title2 = createElement('h2')
    this.title3 = createElement('h3')
    this.title4 = createElement('h3')
    this.title5 = createElement('h3')
    this.title6 = createElement('h3')
    this.input1 = createInput("Enter Your Name Here....");
    this.message = createElement('h2')
   //Create a input box to enter the number
   this.input2 = createInput("Enter Correct option no.....");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)

    this.message = createElement("h3")
    this.message = createElement("h4")
    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.title2.html("Question - What starts and ends with the letter'E',but has only one letter?");
    this.title2.position(50, 50);

    this.title3.html("1:Everyone");
    this.title3.position(100, 100);

    this.title4.html("2:Envelope");
    this.title4.position(100, 120);

    this.title5.html("3:Estimate");
    this.title5.position(100, 140);

    this.title6.html("4:Example");
    this.title6.position(100, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
     
    this.message.html("Thank You, Your answer has been submitted");
    this.message.position(250, 350);


    })


  }
}
