function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase(string));
}
logShout("hello");

function logWhisper(string) {
    console.log(string.toLowerCase(string));
}

logWhisper();

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return `I can\'t hear you!`;
  } else if (string === string.toUpperCase()) {
      return `YES INDEED!`;
  } else if (string === 'Let\'s have dinner together!') {
      return `I would love to!`
  }
  };

  sayHiToHeadphonedRoommate();
