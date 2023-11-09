function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66xgHrx1hqg":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwZ4NmrAy0MlR1xTKgxToLQPbmghN4LEhkXRocU-6pACTJAHVkgDPK_HZWTFWxscg9W/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v23q1attempts:player.GetVar("v23q1attempts"),v23q1answeredcorrect:player.GetVar("v23q1answeredcorrect"),v23q2attempts:player.GetVar("v23q2attempts"),v23q2answeredcorrect:player.GetVar("v23q2answeredcorrect"),v23q3attempts:player.GetVar("v23q3attempts"),v23q3answeredcorrect:player.GetVar("v23q3answeredcorrect")})
	}
	)
}

