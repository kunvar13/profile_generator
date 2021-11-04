const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const survey = [];
rl.question('What do you think of Node.js? ', (answer) => {
  survey.push(answer);
  rl.question('What is your name? ', (answer) => {
    survey.push(answer);
    rl.question('Whats an activity you like doing', (answer) => {
      survey.push(answer);
      rl.question('What do you listen to while doing that?', (answer) => {
        survey.push(answer);
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
          survey.push(answer);
          rl.question('Whats your favourite thing to eat for that meal?', (answer) => {
            survey.push(answer);
            rl.close();
            console.log(survey);
            const yourProfile = `My name is ${survey[1]}, I like to do ${survey[2]}, I think Node.js is ${survey[0]}, I listen to ${survey[3]},
             my favorite meal is ${survey[4]} and I love to eat ${survey[5]}`;
            console.log(yourProfile);



          });
        });
      });
    });
  });
});



/*What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!*/