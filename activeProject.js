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
        case "musicnotes":
            document.getElementById("previewpanel").innerHTML = "<p>Insert Music Note HTML page here</p>";
        break;
    }
}
