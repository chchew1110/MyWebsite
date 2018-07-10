var active;

function selectProject(id)
{
    if(active !== null)
    {
          document.getElementById("previewpanel").innerHTML = "";     
    }
    switch(id)
    {
        case "tictactoe":
           $("#previewpanel").load("../MyWebsite/TicTacToe/tictactoe.html");
        break;
        case "bestline":
            $("#previewpanel").load("../MyWebsite/bestline.html");
        break;
    }
}
